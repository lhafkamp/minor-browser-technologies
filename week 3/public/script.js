const box = document.querySelectorAll('.list');
const images = document.querySelectorAll('img');
const inputs = document.querySelectorAll('input');

function drag(e) {
	e.dataTransfer.setData('id', e.target.id);
}

function allowDrop(e) {
	e.preventDefault();
	console.log('dragging');
}

function drop(e) {
	console.log(e);
	const id = e.dataTransfer.getData('id');
	inputs[id].click();
}

images.forEach(img => img.addEventListener('dragstart', drag));
box.forEach(b => b.addEventListener('dragover', allowDrop));
box.forEach(b => b.addEventListener('drop', drop));
