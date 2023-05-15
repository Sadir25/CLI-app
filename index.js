var readlineSync = require("readline-sync");

var score = 0;

//data for the high score
var highScores = [{
        name: "Sadir",
        score: 5,
    },
    {
        name: "Jamu",
        score: 4,
    },
]

//array objects
var questions = [{
        question: "where do I live? ",
        answer: "Arsikere"
    }, {
        question: "where do I Study(College name)? ",
        answer: "PES"
    }, {
        question: "Which is my favorite drink(Tea/Coffee)? ",
        answer: "Coffee"
    }, {
        question: "My favorite fruit(Apple/Mango/Orange)? ",
        answer: "Mango"
    },
    {
        question: "Which is my favorite sport (Cricket/Badminton/Volleyball)? ",
        answer: "Badminton",
    }
];


//welcome function
function welcome() {

    var userName = readlineSync.question("May I know your name? ");

    console.log("Welcome!! " + userName + " to the game *** 'Do you know Sadir'***");

    console.log("Description: This is game to test how well do you know me?");
    console.log("Let's baegin..");

}



function play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right!!!");
        score++;

    } else {
        console.log("worong!!!");


    }
    console.log("your current score is ", score);
    // console.log("----------------------------");
}
// play("where do I live? -->","Hassan");

// var questionOne={
//   question:"where do I live? -->",
//   answer:"Hassan"
// }
// var questionTwoe={
//   question:"where do I Study? -->",
//   answer:"PES"
// }


function game() {
    for (var i = 0; i < questions.length; i++) {
        console.log("------------------------------");
        console.log("Question no ", i + 1, ".");
        play(questions[i].question, questions[i].answer);
        // console.log("------------------------------");
    }

}

function showScore() {
    console.log("------------------------------");
    console.log("YAY!!!   your final score is ", score);
    console.log("------------------------------");
    console.log("");

    console.log("Here is list of highscores, if you beat them ping me I will upadate...")
    highScores.map(score =>
        console.log(score.name, ":", score.score))
}

welcome();
game();
showScore();