const carousel = document.querySelector('.carousel ul');
const prevButton = document.getElementById('left');
const nextButton = document.getElementById('right');
const items = carousel.querySelectorAll('li');
const totalItems = items.length;
let currentIndex = 0;

// Fonction pour déplacer le carousel
const moveCarousel = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < totalItems - 1) {
        currentIndex++;
    }

    // Calcul de la position de défilement
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
};

// Défilement automatique toutes les 0.5 secondes
let autoScroll = setInterval(() => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Revenir au début
    }
    moveCarousel('right');
}, 2000);

// Arrêter le défilement automatique au survol
carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
carousel.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Revenir au début
        }
        moveCarousel('right');
    }, 2000);
});

// Défilement manuel avec les boutons
prevButton.addEventListener('click', () => moveCarousel('left'));
nextButton.addEventListener('click', () => moveCarousel('right'));


// ---------------GESTION DU SLIDER POUR LES BEST---------------------------------

const scrol = document.querySelector('.scrol ul');
const prev = document.querySelector('.scrol #left');
const next = document.querySelector('.scrol #right');
const itemWidth = 150; // Largeur d'un élément (identique à la largeur définie en CSS)
const gap = 16; // Espace entre les éléments (identique à column-gap en CSS)

let currentPosition = 0;

// Fonction pour déplacer le slider
const moveSlider = (direction) => {
    const maxScroll = scrol.scrollWidth - scrol.clientWidth; // Calcul du défilement maximal

    if (direction === 'left' && currentPosition < 0) {
        currentPosition += itemWidth + gap;
    } else if (direction === 'right' && currentPosition > -maxScroll) {
        currentPosition -= itemWidth + gap;
    }

    scrol.style.transform = `translateX(${currentPosition}px)`;
};

// Écouteurs d'événements pour les boutons
prev.addEventListener('click', () => moveSlider('left'));
next.addEventListener('click', () => moveSlider('right'));