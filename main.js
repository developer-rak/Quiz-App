const question = [{
        // Q1
        question: "Which is largest animal in the world?",
        answers: [{
                text: "Shark",
                correct: false
            },
            {
                text: "Blue Whale",
                correct: true
            },
            {
                text: "Elephant",
                correct: false
            },
            {
                text: "Giraffe",
                correct: false
            },
        ]
    },
    {
        // Q2
        question: "Which is the smallest country in the world?",
        answers: [{
                text: "Vatican City",
                correct: true
            },
            {
                text: "Bhutan",
                correct: false
            },
            {
                text: "Nepal",
                correct: false
            },
            {
                text: "Sri Lanka",
                correct: false
            },
        ]
    },
    {
        // Q3
        question: "Whtch is the largest desert in the world?",
        answers: [{
                text: "Sahara",
                correct: true
            },
            {
                text: "Cholistan",
                correct: false
            },
            {
                text: "Thar",
                correct: false
            },
            {
                text: "Antarctica",
                correct: false
            },
        ]
    },
    {
        // Q4
        question: "Which is smallest content in the world?",
        answers: [{
                text: "Asia",
                correct: false
            },
            {
                text: "Australia",
                correct: true
            },
            {
                text: "Urope",
                correct: false
            },
            {
                text: "Africa",
                correct: false
            },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();