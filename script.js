// script.js

// Typing Effect
const typingText = ["Frontend Developer", "React Enthusiast", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  current = typingText[i];
  typingElement.textContent = current.slice(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % typingText.length;
    setTimeout(type, 800);
  }
}
type();

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
