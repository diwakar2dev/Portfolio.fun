// Typing animation
const words = ["Developer", "Designer"];
let i = 0;
let j = 0;
let isDeleting = false;
const speed = 120;
const element = document.getElementById("typing-text");

function typeEffect() {
  const current = words[i];
  element.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}
typeEffect();

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Skill bar animation
const bars = document.querySelectorAll(".bar div");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
    }
  });
});

bars.forEach(bar => observer.observe(bar));
// End particles effect
const particlesContainer = document.querySelector(".end-particles");
const numParticles = 30;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random initial position
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";

  // Random animation duration and delay
  const duration = 4 + Math.random() * 4; // 4s - 8s
  const delay = Math.random() * 5; // 0s - 5s
  particle.style.animationDuration = duration + "s";
  particle.style.animationDelay = delay + "s";

  particlesContainer.appendChild(particle);
}
