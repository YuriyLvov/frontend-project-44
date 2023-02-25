import readlineSync from 'readline-sync';
import { getRandomNumber, engine, checkBinaryQuestion } from '../index.js';

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 10);
  const isEven = randomNumber % 2 === 0;

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  return checkBinaryQuestion(userAnswer, isEven);
};

const starBrainEvenGame = () => {
  engine(brainEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default starBrainEvenGame;
