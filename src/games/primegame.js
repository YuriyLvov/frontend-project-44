import readlineSync from 'readline-sync';
import {
  getRandomNumber, engine, isPrime, checkBinaryQuestion,
} from '../index.js';

const primeGame = () => {
  const num = getRandomNumber(0, 99);

  const result = isPrime(num);

  console.log(`Question: ${num}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  return checkBinaryQuestion(userAnswer, result);
};

const startPrimeGame = () => {
  engine(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
