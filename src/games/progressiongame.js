import readlineSync from 'readline-sync';
import engine from '../index.js';
import {
  getRandomNumber,
} from '../utils.js';

const getProgression = (firstElement, length, step) => Array.from({ length }).map(
  (el, i) => firstElement + (i * step),
);

const getAnswerAndQuestion = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionFirstElement = getRandomNumber(0, 99);
  const progressionStep = getRandomNumber(1, 9);

  const progression = getProgression(progressionFirstElement, progressionLength, progressionStep);
  const remmovedElementIndex = getRandomNumber(0, progressionLength);
  const removedElement = progression[remmovedElementIndex];

  let maskedProgression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    const element = progression[i];

    if (element === removedElement) {
      maskedProgression += '.. ';
    } else {
      maskedProgression += `${element} `;
    }
  }

  console.log(`Question: ${maskedProgression}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const userAnswerNumber = Number(userAnswer);

  if (!userAnswerNumber && userAnswerNumber !== 0) {
    console.log(`'${userAnswer}' is wrong answer ;(. The answer should be a number`);
    return false;
  }

  if (removedElement !== userAnswerNumber) {
    console.log(
      `'${userAnswerNumber}' is wrong answer ;(. Correct answer was '${removedElement}'.`,
    );
    return false;
  }

  return true;
};

const startProgressionGame = () => {
  engine(getAnswerAndQuestion, 'What number is missing in the progression?');
};

export default startProgressionGame;
