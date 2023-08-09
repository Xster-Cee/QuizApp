'use-strict'

const quizQuestions = [
    {
        questions: "What is the Capital of Abuja?",
        answers: [
            {text: 'Enugu', correct: false},
            {text: 'Abakaliki', correct: false},
            {text: 'Abuja', correct: true},
            {text: 'Imo', correct: false},
        ]
    },
    {
        questions: "What is the Capital of South Africa?",
        answers: [
            {text: 'Togo', correct: false},
            {text: 'Akansas', correct: false},
            {text: 'Free Town', correct: true},
            {text: 'Ghana', correct: false},
        ]
    },
    {
        questions: "What is the first book of the Bible?",
        answers: [
            {text: 'Revelations', correct: false},
            {text: 'Genesis', correct: true},
            {text: 'Esther', correct: false},
            {text: 'Job', correct: false},
        ]
    },
    {
        questions: "What is the last book of the Bible?",
        answers: [
            {text: 'Revelations', correct: true},
            {text: 'Genesis', correct: false},
            {text: 'Esther', correct: false},
            {text: 'Job', correct: false},
        ]
    },
    {
        questions: "A group of cats is referred to as",
        answers: [
            {text: 'Flock', correct: false},
            {text: 'Team', correct: false},
            {text: 'Sounder', correct: false},
            {text: 'Clowder', correct: true},
        ]
    },
    {
        questions: "Among these options, one of them is not a Car brand.",
        answers: [
            {text: 'WBM', correct: true},
            {text: 'Prado', correct: false},
            {text: 'Lexus', correct: false},
            {text: 'Camry', correct: false},
        ]
    },
    {
        questions: "In Africa which country has the highest population of tall people?",
        answers: [
            {text: 'Sengal', correct: false},
            {text: 'Zimbabwe', correct: false},
            {text: 'Sudan', correct: true},
            {text: 'Kenya', correct: false},
        ]
    },
    {
        questions: "What is the second book of the Bible?",
        answers: [
            {text: 'Leviticus', correct: false},
            {text: 'Exodus', correct: true},
            {text: 'Esther', correct: false},
            {text: 'Job', correct: false},
        ]
    },
    {
        questions: "Which planet is known as the Red Planet?",
        answers: [
            {text: 'Jupiter', correct: false},
            {text: 'Venus', correct: false},
            {text: 'Pluto', correct: false},
            {text: 'Mars', correct: true},
        ]
    },
]

// declaration of variables
const startButton = document.getElementById('start-btn');
const finishButton = document.getElementById('finish-btn');
const nextButton = document.getElementById('next-btn');
const instructP = document.getElementsByClassName('instruct');
const questionSection = document.getElementById('question-holder');
const questionLine = document.getElementById('question');
const scoring = document.getElementById('answer');
const quiz = document.getElementById('quiz');
let shuffledQuestion, currentQuestionIndex;
let score = 0;

// eventlisteners for when an event occurs
startButton.addEventListener("click", startGame);
finishButton.addEventListener("click", endGame);
nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    quiz.classList.add('hide');
    startButton.classList.add('hide');
    finishButton.classList.add('hide');
    questionSection.classList.remove('hide');
    shuffledQuestion = questions.sort(()=>Math.random()-0.6);
    currentQuestionIndex = 0;
    scoring.innerText = "Score: " + score;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}