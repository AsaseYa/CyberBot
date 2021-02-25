const { diceFunction } = require("../../utils/fonctions/diceFunction");

module.exports.run = (client, message, args) => {
  const randomDice = () => Math.floor(Math.random() * 20) + 1;
  diceFunction(client, message, args, randomDice);
};

module.exports.help = {
  name: "dice20",
  aliases: ["d20"],
  description: "roll x d20",
  args: false,
  usage: "<your_number_of_dice_within_the_limit_of_100>",
};
