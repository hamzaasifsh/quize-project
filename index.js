const question = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the tallest building in the world?",
        answer: [
            { text: "Trump Tower", correct: false },
            { text: "Clock Tower", correct: false },
            { text: "Burj Khalifa", correct: true },
            { text: "Eiffel Tower", correct: false },
        ]
    },
    {
        question: "Which cryptocurrency is very costly?",
        answer: [
            { text: "Bitcoin", correct: true },
            { text: "Ethereum", correct: false },
            { text: "Dogecoin", correct: false },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // Clear previous answers
    answerButton.innerHTML = "";

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer, button));
        answerButton.appendChild(button);
    });
}

function checkAnswer(answer, button) {
    if (answer.correct) {
        score++;
        button.style.backgroundColor = "green"; // Correct answer
    } else {
        button.style.backgroundColor = "red"; // Incorrect answer
    }

    // Disable all buttons after one click
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "inline-block"; // Show next button after answering
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
        nextButton.style.display = "none"; // Hide next button until answer is selected
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.innerHTML = `Quiz Over! Your score is: ${score}/${question.length}`;
    answerButton.innerHTML = ""; // Clear the answer buttons
    nextButton.style.display = "none"; // Hide the next button after quiz ends
}

startQuiz();
