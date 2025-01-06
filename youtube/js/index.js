let homeBtn=document.querySelector("header #lf button");
let menuBtn=document.querySelector("#st #lf button");
let aside=document.querySelector("aside");
let scrol=document.querySelector("aside #scrol");

menuBtn.addEventListener("click", ()=>{
    aside.style.left="-50rem";
    scrol.style.left="-50rem";
});

homeBtn.addEventListener("click", ()=>{
    aside.style.left="0rem";
    scrol.style.left="0rem";
});