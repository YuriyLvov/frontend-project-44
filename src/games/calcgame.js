import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCalcOperation = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+': return firstNum + secondNum;
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    default: return null;
  }
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);

  const operationId = getRandomNumber(0, 3);
  const operation = operations[operationId];

  const question = `${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = getCalcOperation(operation, firstNum, secondNum);

  return [question, String(correctAnswer)];
};

const startCalcGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startCalcGame;
