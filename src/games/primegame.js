import readlineSync from 'readline-sync';
import { getRandomNumber, engine, isPrime } from '../index.js';

const primeGame = () => {
  const num = getRandomNumber(0, 99);

  const result = isPrime(num);

  console.log(`Question: ${num}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  if ((userAnswer === 'yes' && result) || (userAnswer === 'no' && !result)) {
    return true;
  }

  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`,
    );
  }

  if (userAnswer === 'yes' && !result) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  }

  if (userAnswer === 'no' && result) {
    console.log('"no" is wrong answer ;(.\nCorrect answer was "yes".');
  }

  return false;
};

const startPrimeGame = () => {
  engine(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
