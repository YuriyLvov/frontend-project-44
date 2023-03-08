import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNod = (a, b) => {
  let divisor = 1;
  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const getAnswerAndQuestion = () => {
  const firstNum = getRandomNumber(1, 99);
  const secondNum = getRandomNumber(1, 99);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getNod(firstNum, secondNum);

  return [question, String(correctAnswer)];
};

const startNodGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startNodGame;
