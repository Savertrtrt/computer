function checkAnswers() {
  let score = 0;
  const answers = {
    q1s: "correct",
    q2s: "correct",
    q3s: "correct",
    q4s: "correct",
    q5s: "correct",
    q6s: "correct",
    q7s: "correct",
    q8s: "correct",
    q9s: "correct",
    q10s: "correct",
    q11s: "correct",
    q12s: "correct",
    q13s: "correct",
    q14s: "correct",
    q15s: "correct",
    q16s: "correct",
    q17s: "correct",
    q18s: "correct",
    q19s: "correct",
    q20s: "correct",
    q21s: "correct",
    q22s: "correct",
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
