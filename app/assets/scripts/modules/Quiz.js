function Quiz(data) {
  this.name = (Object.keys(data).toString());
  this.questionSet = data[this.name].questions;
  this.quote = data[this.name].quote;
  this.quoteSource = data[this.name].quoteSource;
  this.numOfQuestions = this.questionSet.length;
  this.answers = [];

  const quizEl = document.querySelector('.quiz');
  const btnContainer = document.querySelector('.btn-container');
  const validationEl = document.querySelector('.validation');

  btnContainer.innerHTML = `
    <button id="back" class="btn hidden">
      Back
    </button>
    <button id="start" class="btn">
      Start
    </button>
    <button id="next" class="btn hidden">
      Next
    </button>
    <button id="retry" class="btn hidden">
      Retry
    </button>
  `;

  const startBtn = document.getElementById('start');
  const backBtn = document.getElementById('back');
  const nextBtn = document.getElementById('next');
  const retryBtn = document.getElementById('retry');

  const hideElement = function(el) {
    el.classList.add('hidden');
  }

  const showElement = function(el) {
    el.classList.remove('hidden');
  }

  this.loadQuiz = () => {
    hideElement(retryBtn);
    showElement(startBtn);

    this.currentQuestion = 0;

    quizEl.innerHTML = '';
    quizEl.innerHTML = `
      <p class="name">${this.name}</p>
      <p class="quote">${this.quote}</p>
      <p class="quote-source">${this.quoteSource}</p>
    `;
  }
  
  this.saveAnswer = () => {
    this.answers[this.currentQuestion] = document.querySelector('[name="choices"]:checked').value;
  }

  this.loadAnswer = function(answer) {
    if (answer !== undefined) {
      const choices = document.getElementsByName('choices');

      choices[answer].checked = true;
    }
  }

  this.validateChoice = function() {
    const choices = Array.from(document.getElementsByName('choices'));
    let isAnswerSelected = false;

    choices.forEach(choice => {
      if (choice.checked === true) {
        isAnswerSelected = true;
      }
    });

    return isAnswerSelected;
  }

  this.loadQuestion = (qn) => {
    quizEl.innerHTML = "";
    quizEl.innerHTML += `<div class="count">${this.currentQuestion + 1} / ${this.numOfQuestions}</div>`;
    quizEl.innerHTML += `<p class="question">${qn.question}</p>`;

    qn.choices.forEach((choice, index) => {
      quizEl.innerHTML += `
        <div class="choice">
          <input type="radio" name="choices" id="choice-${index}" class="choice--radio" value="${index}" />
          <label for="choice-${index}" class="choice--label">${choice}</label>
        </div>
      `;
    });

    const radios = Array.from(document.getElementsByName('choices'));

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        hideElement(validationEl);
        this.saveAnswer();
      });
    });
  }

  this.showAnswers = () => {
    const answersBtn = document.getElementById('answers');
    hideElement(answersBtn);

    this.answers.forEach((answer, index) => {
      if (+answer === this.questionSet[index].correctAnswer) {
        quizEl.innerHTML += `
          <div class="answer">
            <p>
              <span class="num">${index + 1}</span>
              ${this.questionSet[index].choices[answer]} 
              <span class="icon-correct">✔</span>
            </p>
          </div>
      `;
      } else {
        quizEl.innerHTML += `
          <div class="answer">
            <p>
              <span class="num">${index + 1}</span>
              ${this.questionSet[index].choices[answer]}
              <span class="icon-incorrect">X</span>
              </p>
            <p class="answer-correct">
              <span>Correct answer:</span> ${this.questionSet[index].choices[this.questionSet[index].correctAnswer]}
            </p>
          </div>
        `;
      }
      
    });
  }
  
  this.completeQuiz = () => {
    hideElement(backBtn);
    hideElement(nextBtn);
    showElement(retryBtn);

    let correct = 0;
    
    this.answers.forEach((answer, index) => {
      if (+answer === this.questionSet[index].correctAnswer) {
        correct++;
      }
    });

    const score = ((correct / this.numOfQuestions) * 100).toFixed(0);

    quizEl.innerHTML = "";    
    quizEl.innerHTML += `
      <p class="score">${score}%</p>    
      <p class="correct">You got ${correct} out of ${this.numOfQuestions} questions right.</p>
      <div class="btn-container">
        <button id="answers" class="btn-link">Show answers</button>
      </div>
    `;

    const answersBtn = document.getElementById('answers');
    answersBtn.addEventListener('click', this.showAnswers);
  }

  this.startQuiz = () => {
    hideElement(startBtn);
    showElement(nextBtn);

    this.loadQuestion(this.questionSet[0]);
  }

  this.nextQuestion = () => {
    if(this.validateChoice()) {
      showElement(backBtn);
      if (this.currentQuestion < this.numOfQuestions - 1) {
        this.currentQuestion++;    
        this.loadQuestion(this.questionSet[this.currentQuestion]);
        this.loadAnswer(this.answers[this.currentQuestion]);
      } else {
        this.completeQuiz();
      }
    } else {
      showElement(validationEl);
    }

  }

  this.prevQuestion = () => {
    this.currentQuestion--;
    this.loadQuestion(this.questionSet[this.currentQuestion]);
    this.loadAnswer(this.answers[this.currentQuestion]); 
    if (this.currentQuestion === 0) {
      hideElement(backBtn);       
    }
    
  }

  startBtn.addEventListener('click', this.startQuiz);
  backBtn.addEventListener('click', this.prevQuestion);
  nextBtn.addEventListener('click', this.nextQuestion);
  retryBtn.addEventListener('click', this.loadQuiz);
}

export default Quiz;
