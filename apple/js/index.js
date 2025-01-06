let storeBtn=document.getElementById("btn");
let macBtn=document.getElementById("btn2");
let ipadBtn=document.getElementById("btn3");
let iphonBtn=document.getElementById("btn4");
let watchBtn=document.getElementById("btn5");
let visionBtn=document.getElementById("btn6");
let podsBtn=document.getElementById("btn7");
let tvBtn=document.getElementById("btn8");
let entertainmentBtn=document.getElementById("btn9");
let accessBtn=document.getElementById("btn10");
let supportBtn=document.getElementById("btn11");

let storeMenu=document.getElementById("store");
let macMenu=document.getElementById("mac");
let ipadMenu=document.getElementById("ipad");
let iphonMenu=document.getElementById("IPhone");
let watchMenu=document.getElementById("Watch");
let visionMenu=document.getElementById("Vision");
let podsMenu=document.getElementById("AirPods");
let tvMenu=document.getElementById("TV & Home");
let entertainmentMenu=document.getElementById("Entertainment");
let accessMenu=document.getElementById("Accessories");
let supportMenu=document.getElementById("Support");

let main=document.querySelector('main');


storeBtn.addEventListener("mouseenter", ()=>{
    storeMenu.style.visibility="visible";
    storeMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

storeBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        storeMenu.style.visibility="hidden";
        storeMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

storeMenu.addEventListener("mouseover", ()=>{
    storeMenu.style.visibility="visible";
    storeMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

storeMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        storeMenu.style.visibility="hidden";
        storeMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 2E LIEN--------------------------------

macBtn.addEventListener("mouseenter", ()=>{
    macMenu.style.visibility="visible";
    macMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

macBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        macMenu.style.visibility="hidden";
        macMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

macMenu.addEventListener("mouseover", ()=>{
    macMenu.style.visibility="visible";
    macMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

macMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        macMenu.style.visibility="hidden";
        macMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 3E LIEN--------------------------------

ipadBtn.addEventListener("mouseenter", ()=>{
    ipadMenu.style.visibility="visible";
    ipadMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

ipadBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        ipadMenu.style.visibility="hidden";
        ipadMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

ipadMenu.addEventListener("mouseover", ()=>{
    ipadMenu.style.visibility="visible";
    ipadMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

ipadMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        ipadMenu.style.visibility="hidden";
        ipadMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 4E LIEN--------------------------------

iphonBtn.addEventListener("mouseenter", ()=>{
    iphonMenu.style.visibility="visible";
    iphonMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

iphonBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        iphonMenu.style.visibility="hidden";
        iphonMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

iphonMenu.addEventListener("mouseover", ()=>{
    iphonMenu.style.visibility="visible";
    iphonMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

iphonMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        iphonMenu.style.visibility="hidden";
        iphonMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 5E LIEN--------------------------------

watchBtn.addEventListener("mouseenter", ()=>{
    watchMenu.style.visibility="visible";
    watchMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

watchBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        watchMenu.style.visibility="hidden";
        watchMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

watchMenu.addEventListener("mouseover", ()=>{
    watchMenu.style.visibility="visible";
    watchMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

watchMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        watchMenu.style.visibility="hidden";
        watchMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 6E LIEN--------------------------------

visionBtn.addEventListener("mouseenter", ()=>{
    visionMenu.style.visibility="visible";
    visionMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

visionBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        visionMenu.style.visibility="hidden";
        visionMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

visionMenu.addEventListener("mouseover", ()=>{
    visionMenu.style.visibility="visible";
    visionMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

visionMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        visionMenu.style.visibility="hidden";
        visionMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 7E LIEN--------------------------------

podsBtn.addEventListener("mouseenter", ()=>{
    podsMenu.style.visibility="visible";
    podsMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

podsBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        podsMenu.style.visibility="hidden";
        podsMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

podsMenu.addEventListener("mouseover", ()=>{
    podsMenu.style.visibility="visible";
    podsMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

podsMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        podsMenu.style.visibility="hidden";
        podsMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 8E LIEN--------------------------------

tvBtn.addEventListener("mouseenter", ()=>{
    tvMenu.style.visibility="visible";
    tvMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

tvBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        tvMenu.style.visibility="hidden";
        tvMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

tvMenu.addEventListener("mouseover", ()=>{
    tvMenu.style.visibility="visible";
    tvMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

tvMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        tvMenu.style.visibility="hidden";
        tvMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 9E LIEN--------------------------------

entertainmentBtn.addEventListener("mouseenter", ()=>{
    entertainmentMenu.style.visibility="visible";
    entertainmentMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

entertainmentBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        entertainmentMenu.style.visibility="hidden";
        entertainmentMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

entertainmentMenu.addEventListener("mouseover", ()=>{
    entertainmentMenu.style.visibility="visible";
    entertainmentMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

entertainmentMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        entertainmentMenu.style.visibility="hidden";
        entertainmentMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 10E LIEN--------------------------------

accessBtn.addEventListener("mouseenter", ()=>{
    accessMenu.style.visibility="visible";
    accessMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

accessBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        accessMenu.style.visibility="hidden";
        accessMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

accessMenu.addEventListener("mouseover", ()=>{
    accessMenu.style.visibility="visible";
    accessMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

accessMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        accessMenu.style.visibility="hidden";
        accessMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

// -----------------SOUS MENU DU 11E LIEN--------------------------------

supportBtn.addEventListener("mouseenter", ()=>{
    supportMenu.style.visibility="visible";
    supportMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

supportBtn.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        supportMenu.style.visibility="hidden";
        supportMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});

supportMenu.addEventListener("mouseover", ()=>{
    supportMenu.style.visibility="visible";
    supportMenu.style.opacity="1";
    main.style.filter="blur(5px)";
});

supportMenu.addEventListener("mouseleave", ()=>{
    setTimeout(() => {
        supportMenu.style.visibility="hidden";
        supportMenu.style.opacity="0";
        main.style.filter="blur(0px)";
    }, 500);
});


// -------------------------------------GESTION DU SLIDE-------------------

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