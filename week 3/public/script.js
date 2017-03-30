document.querySelector('form').addEventListener('submit', function(ev) {
	// Use 'value=".." name="ingredients"'
	// Submit form with name=value pair, using 'Ajax'
	// Parse response body
	// Overwrite list with response body list
	// Flash the list
	// ev.preventDefault();
})

var box = document.querySelectorAll('.list');
var images = document.querySelectorAll('img');
var inputs = document.querySelectorAll('input');

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
	var id = e.dataTransfer.getData('id');
	inputs[id].click();
	this.classList.remove('floating');
	this.classList.add('succes');
}

function dragSucces(e) {
	box.forEach(function(box) {
		return box.classList.add('succes');
	});
}

function dragFail(e) {
	box.forEach(function (box) {
		return box.classList.remove('succes');
	});
}

images.forEach(function (img) {
  return img.addEventListener('dragstart', drag);
});

box.forEach(function (b) {
  return b.addEventListener('dragover', allowDrop);
});

box.forEach(function (b) {
  return b.addEventListener('dragleave', dontDrop);
});

box.forEach(function (b) {
  return b.addEventListener('drop', drop);
});
