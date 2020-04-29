import { arrRandomNum } from './const';
import { buildEmptyDiv } from './field';

export function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function getNextPosition() {
  let nextPosition = null;
  do {
    nextPosition = randomInteger(0, 3);
  } while (arrRandomNum[0] === nextPosition);
  return nextPosition;
}

export function checkUniqueRandNum() {
  if (arrRandomNum.length !== 0) {
    buildEmptyDiv();
    return getNextPosition();
  }
  return randomInteger(0, 3);
}
