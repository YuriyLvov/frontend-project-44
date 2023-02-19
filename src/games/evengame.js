import readlineSync from 'readline-sync';
import { getRandomNumber, engine } from '../index.js';

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 10);
  const isEven = randomNumber % 2 === 0;

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  if ((userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven)) {
    return true;
  }

  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`,
    );
  }

  if (userAnswer === 'yes' && !isEven) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  }

  if (userAnswer === 'no' && isEven) {
    console.log('"no" is wrong answer ;(.\nCorrect answer was "yes".');
  }

  return false;
};

const starBrainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  engine(brainEvenGame);
};

export default starBrainEvenGame;
