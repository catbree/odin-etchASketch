//create 16*16 grid using flexbox
const sketchGrid = document.querySelector('#sketchGrid');

createNewGrid(16);

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', () => {
    console.log("I'm clicked!");
    gridCellPerRow = prompt("We're creating a new grid. How big should it be from 1-50?");
    createNewGrid(gridCellPerRow);
})

function createNewGrid(gridCellPerRow) {
    console.log("Hello!" + gridCellPerRow);
    
    while(sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.firstChild);
    }

    for (i=0;i<(gridCellPerRow*gridCellPerRow);i++) {
        const gridCell=document.createElement('div');
        gridCell.classList.add('gridCell');

        gridCellDimension = 400/gridCellPerRow;

        gridCell.style.width = gridCellDimension + "px";
        gridCell.style.height = gridCellDimension + "px";
        gridCell.style.border = '1px solid black';
        gridCell.style.boxSizing = 'border-box';

        sketchGrid.appendChild(gridCell);
    }

    const gridCells = document.querySelectorAll('.gridCell');
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener('mouseenter', () => {
        gridCell.style.backgroundColor = 'black';
        console.log("I'm entered!");
        });
    });

}
