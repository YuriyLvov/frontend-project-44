import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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
  const question = getRandomNumber(0, 99);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startPrimeGame;
