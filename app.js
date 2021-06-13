const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', drop);
}

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragEnd(e) {
  //   e.target.classList.remove('hold', 'hide');
  e.target.className = 'item';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add('hovered');
}

function dragLeave(e) {
  e.target.classList.remove('hovered');
}

function drop(e) {
  e.target.append(item);
  e.target.classList.remove('hovered');
}
