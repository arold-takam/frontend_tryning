const carousel = document.querySelector('.carousel ul');
const items = carousel.querySelectorAll('li');
let currentIndex = 0;

const showNextImage = () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1)% items.length;
    items[currentIndex].classList.add('active');
};

items[currentIndex].classList.add('active');

setInterval(showNextImage, 3000);

// ---------------GESTION DU MENU DEROULANT---------------------------------

let menu = document.querySelector('.menu');
let close = document.querySelector('.menu button');
let show = document.querySelector('.first a');
let body = document.querySelector('body');


show.addEventListener('click', () => {
    menu.style.display='flex';
    // menu.style.transition='all 1s ease';
    // menu.style.transform='translateX(0rem)';
    body.classList.add('no-scroll');
    
});

// show.addEventListener('mouseover', () => {
//     menu.style.transform='translateX(0rem)';
//     menu.style.display='flex';
//     body.classList.add('no-scroll');
// });

close.addEventListener('click', () => {
    // menu.style.transform='translateX(-100%)';
    body.classList.remove('no-scroll');
});

