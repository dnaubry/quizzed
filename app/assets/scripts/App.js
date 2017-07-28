import quizData from './data/quizzes.json';
import Quiz from './modules/Quiz';

(function () {
  // Add quiz data from JSON file to variable
  const quizzes = quizData.quizzes;
  // Add quiz names to an array
  const quizNames = quizzes.map(quiz => {
    return Object.keys(quiz).toString();
  });

  // Load quiz names into page tabs and add event listeners
  quizNames.forEach((name, index) => {
    const navLink = document.getElementById(`nav-${index}`);
    navLink.innerHTML = name;
    navLink.addEventListener('click', () => {
      quiz = new Quiz(quizzes[index]);
      quiz.loadQuiz();
      document.querySelector('.active').classList.remove('active');
      navLink.classList.add('active');
    });
  });

  // Load first quiz on page load
  let quiz = new Quiz(quizzes[0]);
  quiz.loadQuiz();
})();
