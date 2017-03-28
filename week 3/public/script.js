const box = document.querySelectorAll('div');
const move = document.querySelectorAll('img');

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  console.log(e);
  e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));

  const hoi = document.querySelector('.hoi');
  hoi.click();
}

box.forEach(b => b.addEventListener('drop', drop));
box.forEach(b => b.addEventListener('dragover', allowDrop));

move.forEach(m => m.addEventListener('dragstart', drag));