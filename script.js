let box = document.querySelector('.box');

// CREATES 16x16 GRID

let numberOfSquares = 16;
let column = document.createElement('div');

for (let i = 0; i < numberOfSquares; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.style.height = `calc(100% / ${numberOfSquares})`
    column.appendChild(row)
}

for (let i = 0; i < numberOfSquares; i++) {
    column.style.width = `calc(100% / ${numberOfSquares})`
    box.appendChild(column.cloneNode(true));
}

// ADDING HOVER EVENT LISTENER

let squares = document.querySelectorAll('.box > div > div')

squares.forEach((square) => {
    square.addEventListener(('mouseover'), () => {
        square.classList.add('red')
    })
})

// ADDING A BUTTON THAT MAKES A NEW SIZE FOR THE GRID

let button = document.querySelector('button');
button.addEventListener(('click'), () => {
    numberOfSquares = prompt('How many squares do zou want?');
    console.log(numberOfSquares)
    box.innerHTML = '';
    column = document.createElement('div');
    
    for (let i = 0; i < numberOfSquares; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `calc(100% / ${numberOfSquares})`
        column.appendChild(row)
    }

    for (let i = 0; i < numberOfSquares; i++) {
        column.style.width = `calc(100% / ${numberOfSquares})`
        box.appendChild(column.cloneNode(true));
    }

    let squares = document.querySelectorAll('.box > div > div')

    squares.forEach((square) => {
        square.addEventListener(('mouseover'), () => {
            square.classList.add('red')
        })
    })

})

