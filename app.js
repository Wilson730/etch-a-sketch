let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function(){
    let number = prompt('How many squares?');
    if (number<=100){
       for (let i =0; i<(number**2); i++){
    let square = document.createElement('DIV');
    square.classList.add('squareCustom');
    
    square.style.border = 'solid 3px';
    square.textContent = 'hey there';
    square.addEventListener('mouseover', randomColor);
    gridContainer.appendChild(square);  
    } 
} else {
    prompt('Too many squares, please enter a number under a 100');
}
    

});

function randomColor(){
  this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

