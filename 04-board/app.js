const board = document.getElementById('board');
const SQUARE_COUNT = 609;
let color = '#';



const colorsList = [
  '#FFFF66',
  '#FF3300',
  '#FF6666',
  '#CC00FF',
  '#6633FF',
  '#6666CC',
  '#6699CC',
  '#33FFFF',
  '#00FF66',
  '#333300',
  '#333333',
  '#00CCCC',
  '#330066',
  '#663366',
  '#FF99FF',
  '#CC3366',
];

function getRandomColor() {
  let i = Math.floor(Math.random() * colorsList.length);

  return colorsList[i];
}


for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    setTimeout(() => {
      removeColor(square);
    }, 1000);
  });

}


function setColor(elem) {
  let randomColor = getRandomColor();
  elem.style.background = randomColor;
  elem.style.boxShadow = `0px 0px 20px randomColor`;
}

function removeColor(elem) {
  elem.style.background = '#000';
}