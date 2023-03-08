import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(1, 10);
  const correctAnswer = getIsEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const starBrainEvenGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default starBrainEvenGame;
