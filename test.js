document.body.onload = function () {
    let items = document.querySelectorAll('li').length; // Nombre d'éléments
    let position = 0; // Position actuelle

    let container = document.querySelector('ul');
    let leftButton = document.querySelector('#left');
    let rightButton = document.querySelector('#right');

    // Ajuster la largeur du conteneur
    container.style.width = items * 160 + "px"; // 160px par élément

    // Bouton droit
    rightButton.onclick = function () {
        if (position > -(items - 1)) {
            position--;
            updateCarousel();
        }
    };

    // Bouton gauche
    leftButton.onclick = function () {
        if (position < 0) {
            position++;
            updateCarousel();
        }
    };

    // Fonction pour mettre à jour le carrousel
    function updateCarousel() {
        container.style.transform = `translateX(${position * 160}px)`;
        container.style.transition = "all 0.5s ease";

        displayButtons();
    }

    // Fonction pour afficher/masquer les boutons
    function displayButtons() {
        leftButton.style.visibility = position === 0 ? "hidden" : "visible";
        rightButton.style.visibility = position === -(items - 1) ? "hidden" : "visible";
    }

    // Appeler displayButtons au chargement initial
    displayButtons();
};


// -----------------------TEST DE VALIDATION DE FORMULAIRE------------------

document.getElementById('username').addEventListener('input', function() {
    var username = this.value;
    var feedbackDiv = document.getElementById('usernameFeedback');
    
    if (username.length === 0) {
      feedbackDiv.textContent = 'Username is required';
      feedbackDiv.style.color = 'red';
    } else if (username.length < 3) {
      feedbackDiv.textContent = 'Username must have at least 3 characters';
      feedbackDiv.style.color = 'orange';
    } else {
      feedbackDiv.textContent = 'Username is valid';
      feedbackDiv.style.color = 'green';
    }
  });
