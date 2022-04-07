console.log ("javascript file is hooked up");

// Declare and set variables for the sheet
var timer
var answer
var button 
var quizQuestion


// Create an array of possible choices and answers

array [{
    question: "question 1",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer2"
},
{
    question: "question 1",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer2"
}

];

// multiple choice quiz should have 4 variables for each question
// 1 variable will be true - the false variable will remove time from the timer

// Create function that connects to button
function startquiz (event){ 

}
// draft of function
// startBtn.answer function {
//     start.timer 

// }

// button should link to array and trigger timer
document.querySelector(".start").addEventListener("click",startquiz)
