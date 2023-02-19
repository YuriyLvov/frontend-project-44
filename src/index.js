import readlineSync from 'readline-sync';

export const startNewGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));

export const engine = (runGame) => {
  const userName = startNewGame();

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
