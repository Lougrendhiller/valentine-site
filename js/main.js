const heartsContainer = document.getElementById("hearts-container");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");

// Générer des cœurs qui tombent
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

// Clique sur la lettre → animation + redirection
envelope.addEventListener("click", () => {
  // Lancer la musique
  music.play().catch(() => {});

  // Animation d'ouverture
  envelope.style.transition = "all 1s ease";
  envelope.style.transform = "scale(2)";
  envelope.style.opacity = "0";

  // Après l'animation, aller à la page de la lettre
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 1000);
});
