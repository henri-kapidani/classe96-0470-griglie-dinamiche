/*
Creare in JavaScript una griglia 8x8.
Ogni cella della griglia contiene un numero casuale da 1 a 64. I numeri presenti nelle celle non devono essere ripetuti (ovvero la griglia contiene tutti i numeri da 1 a 64).
Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari (e si decolora al secondo click)
*/


const eleGrid = document.querySelector('.grid');

// generare la griglia
createGrid(64, eleGrid);


/* FUNCTION DEFINITIONS */

function createGrid(numCells, eleContainer) {
	const arrPresentRandoms = [];
	for (let i = 0; i < numCells; i++) {
		const value = getUniqueRandom(1, 64, arrPresentRandoms);
		arrPresentRandoms.push(value);
		// eleContainer.innerHTML += `<div class="cell ${value % 2 == 0 ? 'even' : 'odd'}">${value}</div>`;
		const cell = document.createElement('div');
		// cell.style.width = valoreCalcolato;
		// cell.style.height = valoreCalcolato;
		cell.classList.add('cell');
		cell.classList.add(value % 2 == 0 ? 'even' : 'odd');
		cell.innerHTML = value;
		cell.addEventListener('click', function() {
			console.log(this);
			this.classList.toggle('clicked');
		});
		eleContainer.append(cell);
	}
}

function getUniqueRandom(min, max, arrNums) {
	let rand;
	do {
		rand = Math.floor(Math.random() * (max - min + 1) ) + min;
	} while (arrNums.includes(rand))

	return rand;
}
