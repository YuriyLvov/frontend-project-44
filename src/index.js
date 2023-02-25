import readlineSync from 'readline-sync';

export const startNewGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));

export const engine = (runGame, greeting) => {
  const userName = startNewGame();
  console.log(greeting);

  let i = 0;
  while (i < 3) {
    const result = runGame();

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    i += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export const getNod = (a, b) => {
  let divisor = 1;
  // looping from 1 to a and b
  for (let i = 1; i <= a && i <= b; i += 1) {
    // check if is factor of both integers
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

export const isPrime = (n) => {
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