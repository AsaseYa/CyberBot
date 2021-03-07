const { diceFunction } = require("../../utils/functions/diceFunction");

module.exports.run = (client, message, args) => {
  const randomDice = () => Math.floor(Math.random() * 4) + 1;
  diceFunction(client, message, args, randomDice);
};

module.exports.help = {
  name: "dice4",
  aliases: ["dice4", "d4"],
  category: 'dice', 
  description: "roll x d4",
  usage: "<your_number_of_dice_within_the_limit_of_100>",
  args: false,
  hasMention: false,
  permissions: false,
  //isUserAdmin: false
};
