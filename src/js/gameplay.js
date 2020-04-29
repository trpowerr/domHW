import { checkUniqueRandNum } from './random';
import { arrRandomNum, arrBeforeCellId, arrCellId } from './const';
import { buildEmptyDiv, buildGoblinDiv } from './field';

export default function simpleRenderingField() {
  const randomNum = checkUniqueRandNum();
  arrRandomNum.push(randomNum);
  if (arrRandomNum.length === 2) {
    arrRandomNum.shift();
  }
  arrBeforeCellId.push(arrCellId[randomNum]);
  if (arrRandomNum.length > 1) {
    buildEmptyDiv();
  }
  buildGoblinDiv(randomNum);
}
