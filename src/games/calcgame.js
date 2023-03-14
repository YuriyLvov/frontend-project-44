import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCalcOperation = (firstNum, secondNum) => {
  const operationId = getRandomNumber(0, 3);

  const operation = operations[operationId];
  const result = [];

  switch (operation) {
    case '+': {
      result.push(`${firstNum} + ${secondNum}`);
      result.push(firstNum + secondNum);
      break;
    }
    case '-': {
      result.push(`${firstNum} - ${secondNum}`);
      result.push(firstNum - secondNum);
      break;
    }
    case '*': {
      result.push(`${firstNum} * ${secondNum}`);
      result.push(firstNum * secondNum);
      break;
    }
    default: {
      throw new Error('unkown operation');
    }
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);
  const [question, correctAnswer] = getCalcOperation(firstNum, secondNum);

  return [question, String(correctAnswer)];
};

const startCalcGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startCalcGame;
