let currentColor = 'black';

const colors = document.querySelectorAll('.colorArea .color');
colors.forEach(item => {
  item. addEventListener('click', colorClickEvent);
})

function colorClickEvent(e) {
  let color = e.target.getAttribute('data-color');
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active');
}