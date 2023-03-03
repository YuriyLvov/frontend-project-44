export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));

export const checkBinaryQuestion = (userAnswer, correctAnswer) => {
  if ((userAnswer === 'yes' && correctAnswer) || (userAnswer === 'no' && !correctAnswer)) {
    return true;
  }

  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`,
    );
  }

  if (userAnswer === 'yes' && !correctAnswer) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  }

  if (userAnswer === 'no' && correctAnswer) {
    console.log('"no" is wrong answer ;(.\nCorrect answer was "yes".');
  }

  return false;
};

export const getIsEven = (number) => number % 2 === 0;
