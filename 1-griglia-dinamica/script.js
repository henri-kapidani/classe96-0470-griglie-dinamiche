/*
Creare in JavaScript una griglia 8x8.
Ogni volta che clicco su un quadrato questo si colora di verde (e si decolora al secondo click)
*/

// selezionare gli elementi del DOM necessari
const eleGrid = document.querySelector('.grid');

// generare la griglia
createGrid(64, eleGrid);

// applicare gli event listeners a tutte le celle della griglia
const listCells = document.querySelectorAll('.cell');
for (let i = 0; i < listCells.length; i++) {
	const cell = listCells[i];
	cell.addEventListener('click',
		function colorCell() {
			console.log(this);
			this.classList.toggle('clicked');
		}
	);
}


// for (let i = 0; i < listCells.length; i++) {
// 	const cell = listCells[i];
// 	cell.addEventListener('click', colorCell);
// }

// function colorCell() {
// 	console.log(this);
// 	this.classList.toggle('clicked');
// }


/* FUNCTION DEFINITIONS */

function createGrid(numCells, eleContainer) {
	for (let i = 0; i < numCells; i++) {
		eleContainer.innerHTML += '<div class="cell"></div>';
	}
}
