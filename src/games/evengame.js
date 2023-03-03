import readlineSync from 'readline-sync';
import engine from '../index.js';
import {
  checkBinaryQuestion, getRandomNumber, getIsEven,
} from '../utils.js';

const getAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(1, 10);
  const isEven = getIsEven(randomNumber);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  return checkBinaryQuestion(userAnswer, isEven);
};

const starBrainEvenGame = () => {
  engine(getAnswerAndQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default starBrainEvenGame;
