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
	e.preventDefault();
	console.log(e.target);
	const id = e.dataTransfer.getData('id');
	inputs[id].click();
}

document.querySelector('form').addEventListener('submit', function(ev) {
	// Use 'value=".." name="ingredients"'
	// Submit form with name=value pair, using 'Ajax'
	// Parse response body
	// Overwrite list with response body list
	// Flash the list
	// ev.preventDefault();
})

images.forEach(img => img.addEventListener('dragstart', drag));
box.forEach(b => b.addEventListener('dragover', allowDrop));
box.forEach(b => b.addEventListener('drop', drop));
