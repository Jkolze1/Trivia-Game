var questions = [{
    ques: "Where is the best place to put JavaScript on an HTML page?",
    ans: ["Bottom", "Top", "Middle", "After the body tag"],
    name: "placement",
    correct: "Bottom",
    divClass: ".placement"
},
{
    ques: "What should you end almost every JavaScript statement with?",
    ans: ["!", "/", ":", ";"],
    name: "statement",
    correct: ";",
    divClass: ".statement"
},
{
    ques: "How do you access an individual element in an array?",
    ans: ["name_array[index]", "array_name", "array_name[index]", "index.array(name)"],
    correct: "index.array(name)",
    name: "array",
    divClass: ".array"
},
{
    ques: "What is the name for a set of related statements that is assigned a name?",
    ans: ["Named function", "Anonymous function", "Related statements", "None of these are correct"],
    name: "named",
    correct: "Named function",
    divClass: ".named"
},
{
    ques: "What is the symbol for compound concatenation Assignments?",
    ans: ["+", "-", "+=", "*"],
    name: "concate",
    correct: "+=",
    divClass: ".concate"
},
{
    ques: "What is the symbol associated with Concatenation Strings?",
    ans: ["(+)", "(-)", "(*)", "(/)"],
    name: "strings",
    correct: "(+)",
    divClass: ".strings"
},
{
    ques: "What is the sign for a strict equal comparison?",
    ans: ["=", "===", ">", "<"], 
    name: "equal",
    correct: "===",
    divClass: ".equal"
},
{
    ques: "Javacript is a _______ language?",
    ans: ["Scripting", "Programming", "World", "Computer"],
    name: "scripting",
    correct: "Scripting",
    divClass: ".scripting"
},
{
    ques: "Booleans have what value?",
    ans: ["True or false", "Yes or no", "Boo & yay", "None of these"],
    name: "booleans",
    correct: "True or False",
    divClass: ".booleans"
},
{
    ques: "How is console log typed?",
    ans: ["console.log();", "log.console()", "console()", ".log(console);"],
    name: "log",
    correct: "console.log();",
    divClass: ".log"
}
] 

// click to start 
var startGame = $("#start-button").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    timer(60); 
    showQuestion();
});
//reset code
$("#restart").on("click", restart);  // restarts the games 
    var restart = $("#restart").on('click', function(){
});

// displays questions aka super cool question displayer
var showQuestion = function() {
    $(".questions :not('#submit')").empty(); 

    // loops through all the questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        
        // loops through answers 
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}

var labels = ["first", "second", "third", "fourth"];

// countdown timer
var timer = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-left").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(1000);
            var correctAns= 0;
            var wrongAns = 0;
            var unAnswered = 0;

            // matches html elements & answers via loop
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAns++;
                   
                } else {
                    wrongAns++;
                    
                };
            }
            $('#correctTimesUp').append(correctAns);
            $('#wrongTimesUp').append(wrongAns);
            $('#finish').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // stops timer once submit button is hit
    $('#submit').on('click', function() {
        clearInterval(timer); 
    })
}; 

// grades quiz
var gradeQuiz = $('#submit').on('click', function() {

    var correctAns = 0; 
    var wrongAns = 0;
    var unAnswered = 0;

    // loop through to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAns++;
        } else {
            wrongAns++;
        };
    };

    timer();
    // display right and wrong answers
     $('#screen1').append(correctAns); 
     $('#screen2').append(wrongAns);
    // fade out questions
    $('.container').fadeOut(1000);
    // show answerScreen
    $('#answerScreen').show();
}); 

