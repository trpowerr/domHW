import simpleRenderingField from './gameplay';
import { renderWinOrLoseDiv } from './field';

let countWinClick = null;
let countLoseClick = null;


function finalRender() {
  simpleRenderingField();

  const playFieldEl = document.getElementById('goblin');
  playFieldEl.addEventListener('click', (event) => {
    if (event !== null) {
      countWinClick += 1;
      countLoseClick = null;
      simpleRenderingField();
    }
  });
  countLoseClick += 1;
  if (countWinClick > 4) {
    renderWinOrLoseDiv(1);
  }
  if (countLoseClick === 5) {
    renderWinOrLoseDiv();
  }
}

setInterval(finalRender, 1000);
