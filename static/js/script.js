//initial data
let currentColor = 'black';

let screen = document.querySelector('#tela');
let screenContext = screen.getContext('2d');

//events
const colors = document.querySelectorAll('.colorArea .color');
colors.forEach(item => {
  item. addEventListener('click', colorClickEvent);
})

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

//functions
function colorClickEvent(e) {
  let color = e.target.getAttribute('data-color');
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active');
}