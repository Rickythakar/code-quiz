console.log("javascript file is hooked up");
// Declare and set variables for the sheet
let timer = 5;
let countdown;
let thisQuestion = 0;


// Created an array of possible choices and answers
let quizQuestions = [{
    question: "question 1",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2"
},
{
    question: "question 2",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3"
},
{
    question: "question 3",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4"
},
{
    question: "question 4",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2"
},
{
    question: "question 5",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4"
}
];

// Criteria 1 variable will be true - the false variable will remove time from the timer

//creating function to load question and possible choices
function loadQuestion(questionData) {
    var choicesElement = document.getElementById("js-choices");
    //anytime we call load question we pass through a question object from quizQuestions array
    var questionElement = document.getElementById("js-question");
    questionElement.innerText = questionData.question;
    //USING DOT NOTATION FOR QUESTION ^ QUESTION DATA IS PASSED TO THE FUNCTION AND IS PULLING DATA FROM QUESTION PROPERTY
    //BEGIN CHOICES input
    choicesElement.innerHTML=""
    //created this array to loop through it in the function
    var arrayOfChoices = questionData.choices;
    console.log(arrayOfChoices);
    //created a for loop to cycle through the new array for the choices 
    for (let i = 0; i < arrayOfChoices.length; i++) {
        const choiceText = arrayOfChoices[i];
        const choiceButton = document.createElement("button");
        choiceButton.innerText = choiceText;
        //calling function to append child
        //APPEND CHILD APPENDS CHOICE BUTTON TO CHOICES CONTAINER ELEMENT THAT WE CREATED IN HTML
        choiceButton.dataset.answer=choiceText;
        choiceButton.addEventListener("click", checkAnswer);
        choicesElement.appendChild(choiceButton);
    }
}
//end of loadQuestion function

// This is the function that is plugged into the startbutton that will begin the timer..
// ..and clear the timer once the interval hits zero.
// The end of this function wil display Game Over the html document.
function startQuiz(event) {
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
    }, 1000); //1000 indicates milaseconds 1000ms is equal to 1 second
    //Hides start button after starting quiz
    document.querySelector(".quiz").style.display = "none";

    // call function to show first question on the page
    loadQuestion(quizQuestions[thisQuestion]);
}
// draft of function
// startBtn.answer function {
// start.timer 
let startTimer

function checkAnswer(event) {
    const questionAnswer = quizQuestions[thisQuestion].answer;
    const answerButtonClicked = event.target;
    console.log(answerButtonClicked);
    const answerButtonData = answerButtonClicked.dataset.answer;
    if (answerButtonData === questionAnswer) 
    {
        thisQuestion++;
        console.log("answer is correct")
            // call function to show first question on the page
    loadQuestion(quizQuestions[thisQuestion]);

    }
}

// button should link to array and trigger timer
document.querySelector(".start").addEventListener("click", startQuiz);
//create a function to respond to check answer
// document.querySelector(".button").addEventListener("click", checkAnswer);
