function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function goGame() {
  const randomNum = randomInteger(0, 3);
  const arrCellId = ['one', 'two', 'three', 'four'];
  // const divEl = document.createElement('div');

  // создаем div и обзываем
  const divEl = document.createElement('div');
  divEl.setAttribute('id', 'goblin');

  // создаем картинку и помещаем в div
  const imgEl = document.createElement('img');
  imgEl.src = 'goblin.png';
  divEl.appendChild(imgEl);

  // создаем ссылку на существующий элемент который будем заменять
  const positionCell = document.getElementById(arrCellId[randomNum]);
  // console.log(positionCell, randomNum);
  const parentCell = positionCell.parentNode;
  // console.log(parentCell);
  parentCell.replaceChild(divEl, positionCell);

  // parentCell.insertBefore(imgEl, positionCell);
  // parentCell.appendChild(imgEl);
}

goGame();

// setInterval(goGame, 2000);
