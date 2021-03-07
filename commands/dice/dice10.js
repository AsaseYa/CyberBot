const { diceFunction } = require("../../utils/functions/diceFunction");

module.exports.run = (client, message, args) => {
  const randomDice = () => Math.floor(Math.random() * 10) + 1;
  diceFunction(client, message, args, randomDice);
};

module.exports.help = {
  name: "dice10",
  aliases: ["dice10", "d10"],
  category: 'dice', 
  description: "roll x d10",
  usage: "<your_number_of_dice_within_the_limit_of_100>",
  args: false,
  hasMention: false,
  permissions: false,
  //isUserAdmin: false
};
