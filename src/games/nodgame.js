import readlineSync from 'readline-sync';
import { getRandomNumber, engine } from '../index.js';

const getNod = (a, b) => {
  let divisor = 1;
  // looping from 1 to a and b
  for (let i = 1; i <= a && i <= b; i += 1) {
    // check if is factor of both integers
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const nodGame = () => {
  const firstNum = getRandomNumber(1, 99);
  const secondNum = getRandomNumber(1, 99);

  const result = getNod(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);

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

const startNodGame = () => {
  engine(nodGame, 'Find the greatest common divisor of given numbers.');
};

export default startNodGame;
