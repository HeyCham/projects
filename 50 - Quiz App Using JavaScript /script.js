let questions = [
  {
    question: 'What is the capital of India?',
    answers: [
      { text: 'Gujrat', correct: false },
      { text: 'Bombay', correct: false },
      { text: 'New Delhi', correct: true },
      { text: 'Nepal', correct: false },
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false },
    ]
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false },
    ]
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: [
      { text: 'Harper Lee', correct: true },
      { text: 'J.K. Rowling', correct: false },
      { text: 'Ernest Hemingway', correct: false },
      { text: 'George Orwell', correct: false },
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: [
      { text: 'Atlantic', correct: false },
      { text: 'Indian', correct: false },
      { text: 'Arctic', correct: false },
      { text: 'Pacific', correct: true },
    ]
  },
  {
    question: 'In JavaScript, what is the purpose of the `typeof` operator?',
    answers: [
      { text: 'Check if a variable is defined', correct: false },
      { text: 'Retrieve the data type of a variable', correct: true },
      { text: 'Concatenate strings', correct: false },
      { text: 'Loop through an array', correct: false },
    ]
  },
  {
    question: 'What does the acronym DOM stand for?',
    answers: [
      { text: 'Document Object Model', correct: true },
      { text: 'Data Object Model', correct: false },
      { text: 'Digital Object Model', correct: false },
      { text: 'Dynamic Object Model', correct: false },
    ]
  },
  {
    question: 'Which built-in method adds one or more elements to the end of an array and returns the new length?',
    answers: [
      { text: 'push()', correct: true },
      { text: 'pop()', correct: false },
      { text: 'concat()', correct: false },
      { text: 'join()', correct: false },
    ]
  },
  {
    question: 'What is the result of the following expression: 5 + "5"?',
    answers: [
      { text: '55', correct: true },
      { text: '10', correct: false },
      { text: '25', correct: false },
      { text: 'Error', correct: false },
    ]
  },
  {
    question: 'Which keyword is used to declare a variable in JavaScript?',
    answers: [
      { text: 'let', correct: true },
      { text: 'variable', correct: false },
      { text: 'var', correct: false },
      { text: 'const', correct: false },
    ]
  },
  // Add more questions as needed
];



const increaseQuesNo = document.getElementById('increase-ques-no');
const nextBtn = document.querySelector('.next-btn');
const buttonsAnswer = document.querySelector('.answer-btns');
const questionArea = document.getElementById('ques-area');

let correntquestionNo = 0;
let score = 0;

function showQuiz() {
  correntquestionNo = 0;
  score = 0;
  nextBtn.innerHTML = 'Next';
  showQuestions();
}

function showQuestions() {
  resetPreviousButton();
  let currentQuestion = questions[correntquestionNo];
  let questionNo = correntquestionNo + 1;
  increaseQuesNo.innerHTML = ` Q.No: ${questionNo} - `;
  questionArea.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answers => {
    const button = document.createElement('button');
    button.innerHTML = answers.text;
    button.classList.add('btn');
    buttonsAnswer.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetPreviousButton() {
  nextBtn.style.display = 'none';
  while (buttonsAnswer.firstChild) {
    buttonsAnswer.removeChild(buttonsAnswer.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectBtn.classList.add('correct');
    score++;
  } else {
    selectBtn.classList.add('incorrect');
  }
  Array.from(buttonsAnswer.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextBtn.style.display = 'block';
}

function showScore() {
  resetPreviousButton();
  questionArea.innerHTML = `You scored ${score} out of ${questions.length}.`;
  nextBtn.innerHTML = 'Play Again';
  nextBtn.style.display = 'block';
  nextBtn.style.marginTop = '5em';
  nextBtn.style.padding = ' 11px 20px'
  nextBtn.style.fontSize = ' 12px'
  document.querySelector('.app').style.minHeight = "300px";
  increaseQuesNo.innerHTML = '';
}

function handleNextBtn() {
  correntquestionNo++;
  if (correntquestionNo < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextBtn.addEventListener('click', () => {
  if (correntquestionNo < questions.length) {
    handleNextBtn();
  } else {
    showQuiz();
  }
});

showQuiz();
