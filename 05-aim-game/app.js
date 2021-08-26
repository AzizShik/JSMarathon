const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const board = document.getElementById('board');
const timer = document.querySelector('.time-list');
const timeElem = document.querySelector('#time');

let time = 0;
let score = 0;

const colorsList = [
  'red',
  'AntiqueWhite',
  'Aqua',
  'blue',
  'Azure',
  'Beige',
  'Bisque',
  'Brown',
  'BurlyWood',
  'Crimson',
];


function startGame() {
  screens[0].classList.add('up');
}





startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  startGame();
});


timer.addEventListener("click", (e) => {
  if (e.target.classList.contains('time-btn')) {
    screens[1].classList.add('up');
    time = parseInt(e.target.getAttribute('data-time'));
  }

  setTimer();

});

board.addEventListener('click', (e) => {
  if(e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createCircle();
  }
});


function setTimer() {
  timeElem.textContent = `00:${time}`;
  let interval = setInterval(() => {
    decreaseTime();

    setTimeout(() => {
      clearInterval(interval);
    }, time * 1000);

  }, 1000);

}

function decreaseTime() {
  let currentTime = --time;
  timeElem.textContent = `00:${currentTime < 10 ? `0${currentTime}` : `${currentTime}`}`;
  if (currentTime === 0) {
    finishGame();
  }
} 



function finishGame() {
  timeElem.parentNode.classList.add('hide');
  const scoreElem = document.createElement('div');
  scoreElem.classList.add('score');
  scoreElem.innerHTML = `Счет:  <span class='score-span'>${score}</span>`;

  board.append(scoreElem);

  document.querySelectorAll('.circle').forEach(circle => {
    circle.remove();
  });


}






function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle', 'primary');
  board.append(circle);
  const size = getRandomNumber(20, 50);

  const {width, height} = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  circle.style.background = colorsList[getRandomNumber(0, colorsList.length)];

}



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

setTimer();

getRandomNumber();


createCircle();

