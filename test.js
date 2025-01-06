const slidesContainer = document.querySelector(".slides-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Largeur d'une slide (en pixels)
const slideWidth = slides[0].offsetWidth + 32; // 32 pour la marge droite

// Défilement vers la gauche (slide précédente)
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

// Défilement vers la droite (slide suivante)
nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});