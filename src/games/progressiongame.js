import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, length, step) => Array.from({ length }).map(
  (el, i) => firstElement + (i * step),
);

const getMaskedProgression = (progression, removedElement) => {
  let maskedProgression = '';

  for (let i = 0; i < progression.length; i += 1) {
    const element = progression[i];

    if (element === removedElement) {
      maskedProgression += '.. ';
    } else {
      maskedProgression += `${element} `;
    }
  }
  return maskedProgression;
};

const getAnswerAndQuestion = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionFirstElement = getRandomNumber(0, 99);
  const progressionStep = getRandomNumber(1, 9);

  const progression = getProgression(progressionFirstElement, progressionLength, progressionStep);
  const remmovedElementIndex = getRandomNumber(0, progressionLength);
  const removedElement = progression[remmovedElementIndex];

  const question = getMaskedProgression(progression, removedElement);

  const correctAnswer = removedElement;

  return [question, String(correctAnswer)];
};

const startProgressionGame = () => {
  engine(description, getAnswerAndQuestion);
};

export default startProgressionGame;
