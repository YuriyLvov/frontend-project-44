import readlineSync from 'readline-sync';
import { getRandomNumber, engine } from '../index.js';

const calcGame = () => {
  const operationId = getRandomNumber(0, 3);

  let operation = '';
  if (operationId === 0) {
    operation = '+';
  } else if (operationId === 1) {
    operation = '-';
  } else if (operationId === 2) {
    operation = '*';
  }

  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);

  console.log(`Question: ${firstNum} ${operation} ${secondNum}`);

  let result = null;

  if (operation === '+') {
    result = firstNum + secondNum;
  } else if (operation === '-') {
    result = firstNum - secondNum;
  } else if (operation === '*') {
    result = firstNum * secondNum;
  }

  const userAnswer = readlineSync.question('Your answer: ');
  const userAnswerNumber = Number(userAnswer);

  if (!userAnswerNumber && userAnswerNumber !== 0) {
    console.log(`'${userAnswer}' is wrong answer ;(. The answer should be a number`);
    return false;
  }

  if (result !== userAnswerNumber) {
    console.log(
      `'${userAnswerNumber}' is wrong answer ;(. Correct answer was '${result}'.`,
    );
    return false;
  }

  return true;
};

const startCalcGame = () => {
  engine(calcGame, 'What is the result of the expression?');
};

export default startCalcGame;
