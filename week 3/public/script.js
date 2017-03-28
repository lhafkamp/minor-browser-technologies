const box = document.querySelectorAll('.list');
const images = document.querySelectorAll('img');
const inputs = document.querySelectorAll('input');

function drag(e) {
	inputs[e.target.id].click();
	console.log();
}

function allowDrop(e) {
	e.preventDefault();
	console.log('dragging');
}

function drop(e) {
	inputs.forEach(input => input.click());
}

images.forEach(m => m.addEventListener('dragstart', drag));
box.forEach(b => b.addEventListener('dragover', allowDrop));
box.forEach(b => b.addEventListener('drop', drop));