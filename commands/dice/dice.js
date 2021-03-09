const { MESSAGES } = require("../../utils/functions/constantes/constants");
const { diceFunction } = require("../../utils/functions/diceFunction");

module.exports.run = (client, message, args, commandName) => {
  let typeOfDice = '';
  if(commandName === 'dice' || commandName === 'd'){
    typeOfDice = 20;
  } else { 
    typeOfDice = commandName.substring(1);
  };
  const randomDice = () => Math.floor(Math.random() * typeOfDice) + 1;
  diceFunction(client, message, args, randomDice);
};


module.exports.help = MESSAGES.COMMANDS.DICE.DICE;
