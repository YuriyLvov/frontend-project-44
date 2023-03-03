import readlineSync from 'readline-sync';
import engine from '../index.js';
import {
  getRandomNumber,
} from '../utils.js';

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

const checkNumberQuestion = (userAnswer, correctAnswer) => {
  const userAnswerNumber = Number(userAnswer);

  if (!userAnswerNumber && userAnswerNumber !== 0) {
    console.log(`'${userAnswer}' is wrong answer ;(. The answer should be a number`);
    return false;
  }

  if (correctAnswer !== userAnswerNumber) {
    console.log(
      `'${userAnswerNumber}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }

  return true;
};

const getAnswerAndQuestion = () => {
  const operation = getCalcOperation();
  const firstNum = getRandomNumber(0, 99);
  const secondNum = getRandomNumber(0, 99);

  console.log(`Question: ${firstNum} ${operation} ${secondNum}`);

  const result = calcOperation(firstNum, secondNum, operation);

  const userAnswer = readlineSync.question('Your answer: ');

  return checkNumberQuestion(userAnswer, result);
};

const startCalcGame = () => {
  engine(getAnswerAndQuestion, 'What is the result of the expression?');
};

export default startCalcGame;
