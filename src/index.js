import readlineSync from 'readline-sync';

const engine = (runGame, greeting) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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

export default engine;
