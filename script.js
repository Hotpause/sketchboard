

function makegrid(size){

for (let i = 0; i < (size * size) ; i++) {
    const square = document.createElement("div");

    sqauresize = (600 - (size)) / size;

    square.style.height = sqauresize + 'px';
    square.style.width = sqauresize + 'px';
    square.style.border = '0.5px solid gray';
    
    
 

    square.addEventListener("mouseover", function ()  {

        const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
            square.style.backgroundColor = randomColor;
    
    });

    container.appendChild(square);

  }

}

function resetgrid(){
    size = prompt('enter your grid size');
    if (isNaN(size) || size < 1 || size > 100 || !Number.isInteger(Number(size))) {
        alert('Please enter a valid integer between 1 and 100.');
        return;
    }
    container.innerHTML = '';
    makegrid(size);




}

const container = document.querySelector('.container')
let size = prompt('enter your grid size');
makegrid(size);

const button = document.querySelector('.change');
button.addEventListener('click',resetgrid);








