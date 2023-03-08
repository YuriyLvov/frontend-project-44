import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const getCalcOperation = () => {
  const operationId = getRandomNumber(0, 3);

  let operation = '';
  if (operationId === 0) {
    operation = '+';
  } else if (operationId === 1) {
    operation = '-';
  } else if (operationId === 2) {
    operation = '*';
  }

  return operation;
};

const calcOperation = (firstNum, secondNum, operation) => {
  let result = null;

  if (operation === '+') {
    result = firstNum + secondNum;
  } else if (operation === '-') {
    result = firstNum - secondNum;
  } else if (operation === '*') {
    result = firstNum * secondNum;
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const operation = getCalcOperation();
  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);

  const result = calcOperation(firstNum, secondNum, operation);

  return [`${firstNum} ${operation} ${secondNum}`, String(result)];
};

const startCalcGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startCalcGame;
