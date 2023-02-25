import readlineSync from 'readline-sync';
import {
  getRandomNumber, engine, getCalcOperation, calcOperation, checkNumberQuestion,
} from '../index.js';

const calcGame = () => {
  const operation = getCalcOperation();
  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);

  console.log(`Question: ${firstNum} ${operation} ${secondNum}`);

  const result = calcOperation(firstNum, secondNum, operation);

  const userAnswer = readlineSync.question('Your answer: ');

  return checkNumberQuestion(userAnswer, result);
};

const startCalcGame = () => {
  engine(calcGame, 'What is the result of the expression?');
};

export default startCalcGame;
