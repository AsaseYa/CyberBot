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


module.exports.help = {
  name: 'dice',
  aliases: ['d','d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd15', 'd20', 'd100'],
  category: 'dice',
  description: "roll x dice of x",
  usage: "<your_number_of_dice_within_the_limit_of_100>",
  args: false,
  hasMention: false,
  permissions: false,
};
