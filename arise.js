const faqQuestions = document.querySelectorAll('.buy');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const allAnswers = document.querySelectorAll('.pay');
    
    // Close all answers
    allAnswers.forEach((ans) => {
      if (ans !== answer) {
        ans.style.display = 'none';
      }
    });
    
    // Toggle the clicked answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});