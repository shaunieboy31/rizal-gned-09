const questions = [
  {
    question: "1. What is Jose Rizal's full name?",
    options: ["Jose Protacio Rizal Mercado y Alonzo Realonda", "Jose Rizal", "Kane Ira Mercado Rosales", "Mercado Rizal"],
    answer: 0
  },
  {
    question: "2. In what year was Jose Rizal born?",
    options: ["1861", "1851", "2025", "1945"],
    answer: 1
  },
  
  {
    question: "3. Where was Jose Rizal executed?",
    options: ["Bagumbayan", "Solaris-3", "Tel Aviv", "Tehran"],
    answer: 0
  },
  {
    question: "4. What is the name of Jose Rizal's mother?",
    options: ["Teodora Alonzo", "Leonor Rivera", "Walid Dimao", "Geurel Alcaraz"],
    answer: 0
  },
  {
    question: "5. What was Jose Rizal's profession?",
    options: ["Ophthalmologist", "Physician", "Writer", "All of the above"],
    answer: 3
  },
  
  {
    question: "6. What is the name of Jose Rizal's second novel?",
    options: ["El Filibusterismo", "Noli Me Tangere", "Cinderella", "Little Mermaid"],
    answer: 0
  },
  
  {
    question: "7. What university did Jose Rizal attend in Spain?",
    options: ["University of Santo Tomas", "University of Madrid", "Cavite State University Imus", "Central University of Madrid"],
    answer: 1
  },
  {
    question: "8. What was the name of the newspaper Jose Rizal worked for?",
    options: ["La Solidaridad", "GMA", "Diario de Manila", "ABS CBN"],
    answer: 0
  },
  {
    question: "9. Who was Jose Rizal's main love interest?",
    options: ["Segunda Katigbak", "Josephine Bracken", "Shaun Russelle", "Reween Rambonanza"],
    answer: 1
  },
  {
    question: "10. What is the title of the poem Rizal wrote before his execution?",
    options: ["Mi Ultimo Adios", "A La Juventud Filipina", "Good Bye Cruel World", "None of the above"],
    answer: 0
  }
];

let quizHTML = '';
questions.forEach((question, index) => {
  quizHTML += `<div class="question-card">`;
  quizHTML += `<h3>${question.question}</h3>`;
  question.options.forEach((option, optionIndex) => {
    quizHTML += `<div style="display:flex; align-items:center;">
                   <input type="radio" name="q${index}" value="${optionIndex}" id="q${index}-${optionIndex}" onchange="checkAllAnswered()">
                   <label for="q${index}-${optionIndex}">${option}</label>
                 </div><br>`;
  });
  quizHTML += `</div>`;
});

document.getElementById('quiz').innerHTML = quizHTML;

function checkAllAnswered() {
  const allAnswered = questions.every((question, index) => {
    return document.querySelector(`input[name="q${index}"]:checked`) !== null;
  });
  document.getElementById('checkAnswersButton').disabled = !allAnswered;
}

function checkAnswers() {
  let score = 0;
  let correctAnswersHTML = "";

  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    const correctOptionIndex = question.answer;
    const correctAnswer = question.options[correctOptionIndex];

    if (selectedAnswer && parseInt(selectedAnswer.value) === question.answer) {
      score++;
      correctAnswersHTML += `<p><strong>${question.question}</strong>: <span style="color:green;">Your answer is correct.</span></p>`;
    } else {
      correctAnswersHTML += `<p>
        <strong>${question.question}</strong>: 
        <span style="color:red;">Your answer is incorrect.</span>
        <span style="color:black;"> The correct answer is: </span>
        <span style="color:green;">${correctAnswer}</span>
      </p>`;
    }
  });

  document.getElementById('popupMessage').textContent = `You got ${score} out of ${questions.length} correct!`;
  document.getElementById('correctAnswers').innerHTML = correctAnswersHTML;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
