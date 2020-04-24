function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const arrRandomNum = [];
const arrBeforeCellId = [];
const arrCellId = ['one', 'two', 'three', 'four'];

function goGame() {
  const randomNum = randomInteger(0, 3);
  arrRandomNum.push(randomNum);
  arrBeforeCellId.push(arrCellId[randomNum]);


  // гоблин создаем div и обзываем
  const divGoblinEl = document.createElement('div');
  divGoblinEl.setAttribute('id', 'goblin');

  // гоблин создаем картинку и помещаем в div
  const imgEl = document.createElement('img');
  imgEl.src = 'goblin.png';
  divGoblinEl.appendChild(imgEl);

  if (arrRandomNum.length > 1) {
    // создаем пустой div и обзываем
    const divEl = document.createElement('div');
    divEl.setAttribute('id', arrBeforeCellId.shift());

    // создаем ссылку на предыдущего гоблина, чтобы заменить его пустым div
    const BeforeGoblinPos = document.getElementById('goblin');
    const parentGoblinPos = BeforeGoblinPos.parentNode;
    parentGoblinPos.replaceChild(divEl, BeforeGoblinPos);
  }

  // гоблин создаем ссылку на существующий элемент который будем заменять
  const positionCell = document.getElementById(arrCellId[randomNum]);
  const parentCell = positionCell.parentNode;
  parentCell.replaceChild(divGoblinEl, positionCell);
}

// goGame();

// setInterval(goGame, 1000);
