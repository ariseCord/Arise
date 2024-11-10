let btn = document.getElementById("submit")

btn.addEventListener("click", ()=>{
  alert("Please take ss and send to arise.was.never.trusted for 10% discount on next buy");
});
  
/* const colours = {
  1:"cyan",
  2:"blue",
  3:"red",
  4:"green"
}

function random(){
  let arr = document.getElementsByClassName("sd")
  for(let i = 0; i < 5; i++)
  {
    arr[i].style.color = colours[Math.floor(Math.random() * 4) + 1]
  }
}

setInterval(random, 100) */


const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    
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
