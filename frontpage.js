/*
Author: David Altman
*/
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
/*
Author: David Altman
*/
window.onload = function() {
    // Ticket Counter Functionality
    // Show One
    const plusOne = document.querySelector('.plus-button-show-one');
    const minusOne = document.querySelector('.minus-button-show-one');
    const counterOne = document.querySelector('.ticketcounter-show-one');
    
    if (plusOne && minusOne && counterOne) {
        let countOne = 0;

        plusOne.addEventListener('click', function() {
            countOne++;
            counterOne.textContent = countOne;
        });

        minusOne.addEventListener('click', function() {
            if (countOne > 0) {
                countOne--;
                counterOne.textContent = countOne;
            }
        });
    }

    // Show Two
    const plusTwo = document.querySelector('.plus-button-show-two');
    const minusTwo = document.querySelector('.minus-button-show-two');
    const counterTwo = document.querySelector('.ticketcounter-show-two');

    if (plusTwo && minusTwo && counterTwo) {
        let countTwo = 0;

        plusTwo.addEventListener('click', function() {
            countTwo++;
            counterTwo.textContent = countTwo;
        });

        minusTwo.addEventListener('click', function() {
            if (countTwo > 0) {
                countTwo--;
                counterTwo.textContent = countTwo;
            }
        });
    }

    // Show Three
    const plusThree = document.querySelector('.plus-button-show-three');
    const minusThree = document.querySelector('.minus-button-show-three');
    const counterThree = document.querySelector('.ticketcounter-show-three');

    if (plusThree && minusThree && counterThree) {
        let countThree = 0;

        plusThree.addEventListener('click', function() {
            countThree++;
            counterThree.textContent = countThree;
        });

        minusThree.addEventListener('click', function() {
            if (countThree > 0) {
                countThree--;
                counterThree.textContent = countThree;
            }
        });
    }
};
