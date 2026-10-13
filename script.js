//your JS code here. If required.
const container = document.getElementById('container');
const SQUARES = 800;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.background = '';
  el.style.boxShadow = '';
}

const fragment = document.createDocumentFragment();

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  fragment.appendChild(square);
}

container.appendChild(fragment);