const box = document.querySelectorAll('.list');
const images = document.querySelectorAll('img');
const inputs = document.querySelectorAll('input');

function drag(e) {
	e.dataTransfer.setData('id', e.target.id);
}

function allowDrop(e) {
	e.preventDefault();
	this.classList.add('floating');
}

function dontDrop(e) {
	e.preventDefault();
	this.classList.remove('floating');
}

function drop(e) {
	e.preventDefault();
	console.log(e.target);
	const id = e.dataTransfer.getData('id');
	inputs[id].click();
	this.classList.remove('floating');
	this.classList.add('succes');
}

document.querySelector('form').addEventListener('submit', function(ev) {
	// Use 'value=".." name="ingredients"'
	// Submit form with name=value pair, using 'Ajax'
	// Parse response body
	// Overwrite list with response body list
	// Flash the list
	// ev.preventDefault();
})

function dragSucces(e) {
	box.forEach(box => box.classList.add('succes'));
}

function dragFail(e) {
	box.forEach(box => box.classList.remove('succes'));
}

images.forEach(img => img.addEventListener('dragstart', drag));
box.forEach(b => b.addEventListener('dragover', allowDrop));
box.forEach(b => b.addEventListener('dragleave', dontDrop));
box.forEach(b => b.addEventListener('drop', drop));
