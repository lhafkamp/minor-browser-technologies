var box = document.querySelectorAll('.list');
var images = document.querySelectorAll('img');
var inputs = document.querySelectorAll('input');
var footer = document.querySelector('.footer');

// feature detection
if ('classList' in document.documentElement  || 'draggable' in document.createElement('span')) {
	footer.classList.remove('hide');
}

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
