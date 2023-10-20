const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const endButton=document.getElementById('end-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const rightAnswerElement = document.getElementById('right-answer');
let shuffledQuestions, currentQuestionsIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++;
    SetNextQuestion();
   

});



function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    SetNextQuestion();
    quizScore = 0;
    rightAnswerElement.innerText = quizScore;
}

function SetNextQuestion() {
    resetState();
    if (currentQuestionsIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionsIndex]);
    } 
   
    else {
        questionContainerElement.classList.add('hide');
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    // if (currentQuestionsIndex === shuffledQuestions.length - 1) {
    //     nextButton.classList.add('hide');
    //     endButton.classList.remove('hide');
    // }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct === 'true') {
        quizScore += 1;
    }
    rightAnswerElement.innerText = quizScore;
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct === 'true') {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true}
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'Bootstrap', correct: false },
            { text: 'React', correct: true }
        ],
    },
    
];
