import readlineSync from 'readline-sync';

const starBrainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const getRandomNumber = Math.round(Math.random() * 10 + 1);
    const isEven = getRandomNumber % 2 === 0;

    console.log(`Question: ${getRandomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if ((userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven)) {
      i += 1;
      console.log('Correct!');
      // eslint-disable-next-line no-continue
      continue;
    }
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    if (userAnswer === 'yes' && !isEven) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    if (userAnswer === 'no' && isEven) {
      console.log(
        `'no' is wrong answer ;(.\nCorrect answer was 'yes'.\nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default starBrainEvenGame;
