const { diceFunction } = require("../../utils/fonctions/diceFunction");

module.exports.run = (client, message, args) => {
  const randomDice = () => Math.floor(Math.random() * 8) + 1;
  diceFunction(client, message, args, randomDice);
};

module.exports.help = {
  name: "dice8",
  aliases: ["d8"],
  description: "roll x d8",
  args: false,
  usage: "<your_number_of_dice_within_the_limit_of_100>",
};
