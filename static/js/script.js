//initial data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let screenContext = screen.getContext('2d');

//events
const colors = document.querySelectorAll('.colorArea .color');
colors.forEach(item => {
  item. addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', clearScreen);

//functions
function colorClickEvent(e) {
  let color = e.target.getAttribute('data-color');
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active');
}

function mouseDownEvent(e) {
  canDraw = true;

  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
  if(canDraw) {
    draw(e.pageX, e.pageY)
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  screenContext.beginPath();
  screenContext.lineWidth = 4;
  screenContext.lineJoin = 'round';
  screenContext.moveTo(mouseX, mouseY);
  screenContext.lineTo(pointX, pointY);
  screenContext.closePath();
  screenContext.strokeStyle = currentColor;
  screenContext.stroke();

  mouseX = pointX;
  mouseY = pointY;
}