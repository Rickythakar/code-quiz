console.log ("javascript file is hooked up");
// Declare and set variables for the sheet
let timer = 5;
let countdown;
let thisQuestion = 0;
// let quizQuestion //array

// Create an array of possible choices and answers
let quizQuestions = [{
    question: "question 1",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer2"
},
{
    question: "question 2",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},

{
    question: "question 3",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer4"
},
{
    question: "question 4",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer2"
},
{
    question: "question 5",
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer4"
}
];





// multiple choice quiz should have 4 variables for each question
// 1 variable will be true - the false variable will remove time from the timer
function loadQuestion(questionData) {
    //anytime we call load question we pass through a question object from quizQuestions array
var questionElement = document.getElementById("js-question");
questionElement.innerText = questionData.question;
//USING DOT NOTATION FOR QUESTION ^ QUESTION DATA IS PASSED TO THE FUNCTION AND IS PULLING DATA FROM QUESTION PROPERTY


//BEGIN CHOICES input
var choicesElement = document.getElementById("js-choices");
//created this array to loop through it in the function
var arrayOfChoices = questionData.choices;
console.log(arrayOfChoices);
//created a for loop to cycle through the new array for the choices 
for (let i = 0; i < arrayOfChoices.length; i++) {
    const choiceText = arrayOfChoices[i];
    const choiceButton = document.createElement("button");
    choiceButton.innerText = choiceText;
    //calling function to append child
    choicesElement.appendChild(choiceButton);
}
}



// Create function that connects to button to start the quiz
function startquiz (event){ 
    //This is the function to start the timer of the game
    countdown = setInterval(function () {
        timer--;
        document.querySelector(".timer").textContent = timer;
        //query selector indicates its hooked up to html 
        if (timer === 0) {
            // created this if statement to stop timer at 0
        clearInterval(countdown);
        document.querySelector(".timer").textContent = "Game Over";
        //if timer hits 0 text content will display game over
        }
    }, 1000);
    //Hides start button after starting quiz
    document.querySelector(".quiz").style.display = "none";


    //cycle through questions on the page 

    // function to show first question on the page
loadQuestion(quizQuestions[0]);





    document.querySelector(".question").textContent = quizQuestions[thisQuestion].question;
    document.querySelector(".answers").textContent = quizQuestions[thisQuestion].answers;
    //loop over the answers 


    //quizQuestions[thisQuestion].answers.length

    //append each one to the answers div




}
// draft of function
// startBtn.answer function {
//     start.timer 
let startTimer 

// }

// button should link to array and trigger timer
document.querySelector(".start").addEventListener("click",startquiz)








//question 1
//Inside which HTML element do we put the JavaScript?
//<javascript>
//<js>
//<scripting>
//<script>

//question 2
//

//queastion 3
//

//question 4
//

//question 5
//