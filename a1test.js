function checkAnswers() {
  let score = 0;
  const answers = {
    q1: "correct",
    q2: "correct",
    q3: "correct",
    q4: "correct",
    q5: "correct",
    q6: "correct",
    q7: "correct",
    q8: "correct",
    q9: "correct",
    q10: "correct",
    q11: "correct",
    q12: "correct",
    q13: "correct",
    q14: "correct",
    q15: "correct",
    q16: "correct",

  };

  for (let question in answers) {
    const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
    if (selectedAnswer) {
      selectedAnswer.disabled = true; // Disable the radio button after answer submission
      if (selectedAnswer.value === answers[question]) {
        score++;
      }
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;

  // Disable the 'Check Answers' button after submission
  const checkButton = document.querySelector("button");
  checkButton.disabled = true;
  // Show or hide the "Retest" button based on the score
  const retestButton = document.getElementById("retest-button");
  if (score >= 14) {
    retestButton.style.display = "none"; // Hide the "Retest" button
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "block"; // Show the congratulatory message
  } else {
    retestButton.style.display = "inline"; // Show the "Retest" button
    const congratulationsMessage = document.getElementById("congratulations-message");
    congratulationsMessage.style.display = "none"; // Hide the congratulatory message
  }
}


function retest() {
  const answers = document.querySelectorAll('input[type="radio"]');
  answers.forEach((answer) => (answer.disabled = false));

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  // Enable the 'Check Answers' button
  const checkButton = document.querySelector("button");
  checkButton.disabled = false;

  // Hide the "Retest" button
  const retestButton = document.getElementById("retest-button");
  retestButton.style.display = "none";
}
let nightMode = false;

function toggleNightMode() {
  const body = document.body;
  const elementsToInvert = document.querySelectorAll("h1, p, .test-question, button");
  const congratulationsMessage = document.getElementById("congratulations-message");
  const nightModeButton = document.getElementById("night-mode-button"); // Assuming you have a button with the id "night-mode-button"

  if (nightMode) {
    // Disable night mode
    body.classList.remove("night-mode");
    // nightModeButton.style.backgroundColor = "#4CAF50";
    nightMode = false;
  } else {
    // Enable night mode
    body.classList.add("night-mode");
    // nightModeButton.style.backgroundColor = "#000";
    nightMode = true;
  }

  elementsToInvert.forEach((element) => {
    element.classList.toggle("night-mode");
  });

  congratulationsMessage.classList.toggle("night-mode");
}