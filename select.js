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