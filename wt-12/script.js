const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Mark Twain",
      "William Shakespeare",
      "J.K. Rowling",
      "Charles Dickens",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
  },
];

const quizForm = document.getElementById("quiz-form");

quizData.forEach((item, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `
      <h3>${index + 1}. ${item.question}</h3>
      ${item.options
        .map(
          (option) => `
          <label>
            <input type="radio" name="question-${index}" value="${option}">
            ${option}
          </label><br>
        `
        )
        .join("")}
    `;
  quizForm.appendChild(questionDiv);
});

function submitQuiz() {
  let score = 0;

  quizData.forEach((item, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );

    if (selectedOption && selectedOption.value === item.correctAnswer) {
      score++;
    }
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Your Score: ${score} / ${quizData.length}`;
}
