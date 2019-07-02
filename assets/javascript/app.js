var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "Who is Fluffy?",
    answers: ["A talking bunny","A three-headed dog", "A rat", "A phoneix"],
    correctAnswer: "A three-headed dog"
  },
  {
    question: "What is the max speed for a Firebolt broomstick?",
    answers: ["10 MPH", "200 MPH", "1000 MPH", "150 MPH"],
    correctAnswer: "150 MPH"
  },
  {
    question: "How many staircases does Hogwarts have?",
    answers: ["1034", "1", "4600", "142"],
    correctAnswer: "142"
  },
  {
    question: "What color are Dobby the House Elf's eyes?",
    answers: ["Green", "Blue", "Brown", "Yellow"],
    correctAnswer: "Green"
  },
  {
    question: "What class does Severus Snape teach?",
    answers: ["Geography", "History", "Potions", "Choir"],
    correctAnswer: "Potions"
  },
  {
    question:"What is the name of the room Harry uses to teach Dumbledore's Army?",
    answers: ["Gryffindor Dorms", "Dungeons", "Library", "The Room Of Requirement"],
    correctAnswer: "The Room Of Requirement"
  },
  {
    question: "The name of Hermione's cat?",
    answers: ["Crookshanks", "Fluffy", "Cat", "Prong"],
    correctAnswer: "Crookshanks"
  },
  {
    question: "Gryffindor's ghost is Nearly Headless Nick. But what is his full name?",
    answers: ["Sir Nicholas de Headless", "Sir Nicholas de HufflePuffle", "Sir Nicolas Nick Weasley", "Sir Nicholas de Mimsy-Porpington."],
    correctAnswer: "Sir Nicholas de Mimsy-Porpington."
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
