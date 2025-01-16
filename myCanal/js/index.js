const carousel = document.querySelector('.carousel1 ul');
const prevButton = document.getElementById('left');
const nextButton = document.getElementById('right');
const items = carousel.querySelectorAll('li'); 
const itemWidth = 430; 
const gap = 16; 

let currentPosition = 0;

// Calcul de la largeur totale et de la position maximale
const totalWidth = items.length * (itemWidth + gap) - gap;
const maxScroll = totalWidth - carousel.parentElement.offsetWidth;

const moveCarousel = (direction) => {
    if (direction === 'left' && currentPosition < 0) {
        currentPosition += itemWidth + gap;
    } else if (direction === 'right' && Math.abs(currentPosition) < maxScroll) {
        currentPosition -= itemWidth + gap;
    }

    carousel.style.transform = `translateX(${currentPosition}px)`;
};

// Écouteurs d'événements
prevButton.addEventListener('click', () => moveCarousel('left'));
nextButton.addEventListener('click', () => moveCarousel('right'));





// -----------CAROUSEL 2----------------------------------


const carousel2 = document.querySelector('.carousel2 ul');
const prevButton2 = document.querySelector(' .carousel2 #left');
const nextButton2 = document.querySelector('.carousel2 #right');
const items2 = carousel2.querySelectorAll('li'); 
const itemWidth2 = 256; 
const gap2 = 16; 

let currentPosition2 = 0;

// Calcul de la largeur totale et de la position maximale
const totalWidth2 = items2.length * (itemWidth2 + gap2) - gap2;
const maxScroll2 = totalWidth2 - carousel2.parentElement.offsetWidth;

const moveCarousel2 = (direction2) => {
    if (direction2 === 'left' && currentPosition2 < 0) {
        currentPosition2 += itemWidth2 + gap2;
    } else if (direction2 === 'right' && Math.abs(currentPosition2) < maxScroll2) {
        currentPosition2 -= itemWidth2 + gap2;
    }

    carousel2.style.transform = `translateX(${currentPosition2}px)`;
};

// Écouteurs d'événements
prevButton2.addEventListener('click', () => moveCarousel2('left'));
nextButton2.addEventListener('click', () => moveCarousel2('right'));


// -----------CAROUSEL 3----------------------------------


const carousel3 = document.querySelector('.carousel3 ul');
const prevButton3 = document.querySelector(' .carousel3 #left');
const nextButton3 = document.querySelector('.carousel3 #right');
const items3 = carousel3.querySelectorAll('li'); 
const itemWidth3 = 200; 
const gap3 = 16; 

let currentPosition3 = 0;

// Calcul de la largeur totale et de la position maximale
const totalWidth3 = items3.length * (itemWidth3 + gap2) - gap3;
const maxScroll3 = totalWidth3 - carousel3.parentElement.offsetWidth;

const moveCarousel3 = (direction3) => {
    if (direction3 === 'left' && currentPosition3 < 0) {
        currentPosition3 += itemWidth3 + gap3;
    } else if (direction3 === 'right' && Math.abs(currentPosition3) < maxScroll3) {
        currentPosition3 -= itemWidth3 + gap3;
    }

    carousel3.style.transform = `translateX(${currentPosition3}px)`;
};

// Écouteurs d'événements
prevButton3.addEventListener('click', () => moveCarousel3('left'));
nextButton3.addEventListener('click', () => moveCarousel3('right'));