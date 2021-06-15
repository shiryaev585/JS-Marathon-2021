const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '2ecc71', '#FF7251', '#48D3EC', '#017C9E', '#10C3AE', '#43DC49', '#C822FF', '#E6ABFF', '#6DC7FF', '#1A6DFF', '#DC4355', '#FFD467'];
const SQUARES_NUMBERS = 759;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(e) {
  const elem = e.target
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  const elem = e.target
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
