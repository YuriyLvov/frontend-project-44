import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = getRandomNumber(1, 10);
  const correctAnswer = getIsEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const starBrainEvenGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default starBrainEvenGame;
