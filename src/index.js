import startNewGame from './cli.js';

const engine = (runGame, greeting) => {
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

export default engine;
