import { arrBeforeCellId, arrCellId } from './const';

export function buildGoblinDiv(randomNum) {
  const divGoblinEl = document.createElement('div');
  divGoblinEl.setAttribute('id', 'goblin');
  const imgEl = document.createElement('img');
  imgEl.src = 'goblin.png';
  divGoblinEl.appendChild(imgEl);
  const positionCell = document.getElementById(arrCellId[randomNum]);
  const parentCell = positionCell.parentNode;
  parentCell.replaceChild(divGoblinEl, positionCell);
}

export function buildEmptyDiv() {
  const divEl = document.createElement('div');
  divEl.setAttribute('id', arrBeforeCellId.shift());
  const BeforeGoblinPos = document.getElementById('goblin');
  const parentGoblinPos = BeforeGoblinPos.parentNode;
  parentGoblinPos.replaceChild(divEl, BeforeGoblinPos);
}

export function renderWinOrLoseDiv(num) {
  const winDiv = document.createElement('div');
  const loseDiv = document.createElement('div');
  winDiv.setAttribute('id', 'final');
  loseDiv.setAttribute('id', 'final');
  const imgWin = document.createElement('img');
  const imgLose = document.createElement('img');
  imgWin.src = 'stark.jpeg';
  imgLose.src = 'stark2.jpg';
  winDiv.appendChild(imgWin);
  loseDiv.appendChild(imgLose);
  const positionEl = document.querySelector('[data-field=plaing-field]');
  const parentEl = positionEl.parentNode;
  if (num === 1) {
    parentEl.replaceChild(winDiv, positionEl);
  } else {
    parentEl.replaceChild(loseDiv, positionEl);
  }
}
