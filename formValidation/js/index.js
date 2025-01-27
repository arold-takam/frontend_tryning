let toggleLight=document.querySelector('.toggle');
let ButtonLight=document.querySelector('#btn');
let body = document.querySelector('body');
let sun=document.querySelector('.sun');
let loggin=document.querySelector('fieldset h1');
let h3=document.querySelector('.valid h3');
let circle=document.querySelector('.circel');
let p=document.querySelectorAll('#condition');

ButtonLight.addEventListener('click', ()=>{
    toggleLight.classList.toggle('togglePointcolor');
    ButtonLight.classList.toggle('toggelBtn');
    body.classList.toggle('bodyColor');
    sun.classList.toggle('toggleSun');
    loggin.classList.toggle('toggleWhite');
    h3.classList.toggle('toggleWhite');
    circle.classList.toggle('circleWhite');
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('toggleWhite');
    }
});


// ---VALIDATION DES FORMULAIRES----------


document.getElementById('name').addEventListener('input', function(){
    let name=this.value.trim();
    let notice= document.querySelector('.condition p');
    let circel= document.querySelector('.circel');

    if (name==="") {
        notice.textContent='Name is required'
        notice.style.color='red';
        circel.style.opacity='1'
        circel.style.backgroundColor='red';
    }else if(name.length<3){
        notice.textContent='Name must have at least 3 characters';
        notice.style.color="yellow";
        circel.style.opacity='1'
        circel.style.backgroundColor="yellow";
    }else{
        notice.textContent="Correct !"
        notice.style.color="green";
        circel.style.opacity='1'
        circel.style.backgroundColor="green";
    }
})

document.getElementById('mail').addEventListener('input', function(){
    let mail=this.value.trim();
    let notice= document.querySelector('.condition p');
    let circel= document.querySelector('.circel');
    let mailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; //format standart des mail

    if (mail==="") {
        notice.textContent='Email is required'
        notice.style.color='red';
        circel.style.opacity='1'
        circel.style.backgroundColor='red';
    }else if(!mailRegex.test(mail)){
        notice.textContent='Mail must been written like this (name.@gmail.com)';
        notice.style.color="yellow";
        circel.style.opacity='1'
        circel.style.backgroundColor="yellow";
    }else{
        notice.textContent="Correct !"
        notice.style.color="green";
        circel.style.opacity='1'
        circel.style.backgroundColor="green";
    }
})

document.getElementById('pass').addEventListener('input', function(){
    let pass=this.value.trim();
    let notice= document.querySelector('.condition p');
    let circel= document.querySelector('.circel');

    if (pass==="") {
        notice.textContent='Password is required'
        notice.style.color='red';
        circel.style.opacity='1'
        circel.style.backgroundColor='red';
    }else if(pass.length<8){
        notice.textContent='Passwords must be at least 8 characters';
        notice.style.color="yellow";
        circel.style.opacity='1'
        circel.style.backgroundColor="yellow";
    }else{
        notice.textContent="Correct !"
        notice.style.color="green";
        circel.style.opacity='1'
        circel.style.backgroundColor="green";
    }
})

document.getElementById('confirm').addEventListener('input', function(){
    let pass2=this.value.trim();
    let pass1=document.getElementById('pass').value.trim();
    let notice= document.querySelector('.condition p');
    let circel= document.querySelector('.circel');

    if (pass2==="") {
        notice.textContent='Password is required'
        notice.style.color='red';
        circel.style.opacity='1'
        circel.style.backgroundColor='red';
    }else if(pass2!=pass1){
        notice.textContent='Enter the same password';
        notice.style.color="yellow";
        circel.style.opacity='1'
        circel.style.backgroundColor="yellow";
    }else{
        notice.textContent="Correct !"
        notice.style.color="green";
        circel.style.opacity='1'
        circel.style.backgroundColor="green";
    }
}) 

document.querySelector('form').addEventListener('submit', function (e) {
    let notice = document.querySelector('.condition p');
    let circel = document.querySelector('.circel');

    let names = document.querySelectorAll('input[name="sex"]');
    let isChecked = false;

    let termsCheckbox=document.querySelector('.terms');

    // Vérifiez si un bouton radio est coché
    names.forEach(nom => {
        if (nom.checked) {
            isChecked = true;
        }
    });

    // Si aucun bouton n'est sélectionné, empêche la soumission
    if (!isChecked && !termsCheckbox.checked) {
        e.preventDefault();
        notice.textContent = 'Please select your gender and agree the terms and conditions !';
        notice.style.color = 'red';
        circel.style.opacity = '1';
        circel.style.backgroundColor = 'red';
    } else {
        notice.textContent = 'Form is ready for submission!';
        notice.style.color = 'green';
        circel.style.opacity = '1';
        circel.style.backgroundColor = 'green';
    }
});

