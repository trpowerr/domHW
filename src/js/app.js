function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function goGame() {
  const randomNum = randomInteger(0, 3);
  const arrCellId = ['one', 'two', 'three', 'four'];
  // const divEl = document.createElement('div');

  // создаем новый элемент и обзываем его 
  const imgEl = document.createElement('img');
  imgEl.setAttribute('id', 'goblin');
  imgEl.src = 'goblin.png';

  // создаем ссылку на существующий элемент который будем заменять
  const positionCell = document.getElementById(arrCellId[randomNum]);
  // console.log(positionCell, randomNum);
  const parentCell = positionCell.parentNode;


  parentCell.insertBefore(imgEl, positionCell);
  // parentCell.appendChild(imgEl);
}

goGame();

// setInterval(goGame, 2000);
