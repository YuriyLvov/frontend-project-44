import readlineSync from 'readline-sync';
import engine from '../index.js';
import {
  getRandomNumber, checkBinaryQuestion,
} from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i ** 2 <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const num = getRandomNumber(0, 99);

  const result = isPrime(num);

  console.log(`Question: ${num}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  return checkBinaryQuestion(userAnswer, result);
};

const startPrimeGame = () => {
  engine(getAnswerAndQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
