const carousel = document.getElementById('carousel');
const ul = carousel.querySelector('ul'); // Sélectionne le premier <ul>
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const items = ul.querySelectorAll('li'); // Sélectionne tous les <li>
const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
let currentPosition = 0;

// Défilement vers la gauche
leftBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        ul.style.transform = `translateX(${currentPosition}px)`;
    }
});

// Défilement vers la droite
rightBtn.addEventListener('click', () => {
    const maxScroll = -(items.length * itemWidth - carousel.offsetWidth); // Corrige "lenth" en "length"
    if (currentPosition > maxScroll) {
        currentPosition -= itemWidth;
        ul.style.transform = `translateX(${currentPosition}px)`;
    }
});


// -----------ANIMATION DE L'ASIDE------------------

let btAside=document.getElementById('im');
let aside=document.querySelector('aside');
let plus=document.querySelector('.plus');
let bib=document.querySelector('.un figure figcaption');
let play=document.querySelector('aside button');
let deux=document.querySelector('.deux');
let span=document.querySelector('aside .troi span');
let mixtape=document.querySelector('aside .troi figure');
let section=document.querySelector('section');
let nav=document.querySelector('section nav');

btAside.addEventListener('click', ()=>{
    aside.classList.toggle("aside");

    if (aside.classList.contains("aside")) {
        plus.style.visibility="hidden";
        bib.style.visibility="hidden";
        play.style.visibility="hidden";
        deux.style.visibility="hidden";
        span.style.visibility="hidden";

        mixtape.style.transform=`translateY(-5rem)`;

        section.style.width="89%"
        section.style.left="10%"

        nav.style.width="89%"
        nav.style.left="10%"
    } else {
        plus.style.visibility = "visible";
        bib.style.visibility = "visible";
        play.style.visibility = "visible";
        deux.style.visibility = "visible";
        span.style.visibility = "visible";

        mixtape.style.transform = `translateY(0rem)`;

        section.style.width="75%"
        section.style.left="25%"

        nav.style.width="75%"
        nav.style.left="25%"
    }
});