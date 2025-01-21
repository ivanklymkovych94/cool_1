const leftArrow = document.getElementById('er');
const rightArrow = document.getElementById('er2');
const gridContainer = document.querySelector('.grid-container2');


let cards = Array.from(document.querySelectorAll('.cards')); 

function shiftItemsLeft() {
   
    const firstCard = cards.shift();
    cards.push(firstCard);
    updateGrid(); 
}

function shiftItemsRight() {

    const lastCard = cards.pop();
    cards.unshift(lastCard);
    updateGrid(); 
}


function updateGrid() {
    gridContainer.innerHTML = ''; 


    cards.forEach(card => {
        gridContainer.appendChild(card); 
    });

    gridContainer.style.transform = `translateX(-${310 * (cards.length - 4)}px)`;
}


leftArrow.addEventListener('click', () => {
    shiftItemsLeft();
});


rightArrow.addEventListener('click', () => {
    shiftItemsRight();
});
