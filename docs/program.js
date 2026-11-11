/* Browser adaptation of casino-game-number-guessing-game.cpp (virtual money only). */
window.runProject = async function (ui) {
  ui.rule('_', 60);
  ui.block('\t\tCASINO GAME\n');
  ui.rule('_', 60);
  const playerName = await ui.text('Enter Your Name:');
  let amount = await ui.int('Enter Deposit amount to play game: $', 1, 100000000);
  let again = 'y';
  while (again === 'y') {
    ui.screen('RULES OF THE GAME');
    ui.rule('-', 65);
    ui.line('1. Choose any number between 1 to 10');
    ui.line('2. If you win you will get 10 times of money you bet');
    ui.line('3. If you bet on wrong number you will lose your betting amount');
    ui.rule('-', 65);
    ui.line('\nYour current balance is $ ' + amount);
    let bettingAmount;
    while (true) {
      bettingAmount = await ui.int(playerName + ', enter money to bet: $', 1, amount);
      if (bettingAmount <= amount) break;
      ui.line('Your betting amount is more than your current balance. Re-enter data.');
    }
    const guess = await ui.int('Guess your number to bet between 1 to 10:', 1, 10);
    const dice = Math.floor(Math.random() * 10) + 1;
    if (dice === guess) {
      ui.line('\nGood Luck!! You won Rs.' + bettingAmount * 10);
      amount += bettingAmount * 10;
    } else {
      ui.line('Bad Luck this time !! You lost $ ' + bettingAmount);
      amount -= bettingAmount;
    }
    ui.line('The winning number was : ' + dice);
    ui.line(playerName + ', You have $ ' + amount);
    if (amount === 0) { ui.line('You have no money to play'); break; }
    again = await ui.pick('Do you want to play again (y/n)?', ['y','n']);
  }
  ui.rule('=', 70);
  ui.line('Thanks for playing game. Your balance amount is $ ' + amount);
  ui.rule('=', 70);
};
