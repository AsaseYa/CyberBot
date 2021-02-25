const { diceFunction } = require("../../utils/fonctions/diceFunction");

module.exports.run = (client, message, args) => {
  const randomDice = () => Math.floor(Math.random() * 15) + 1;
  diceFunction(client, message, args, randomDice);
};
module.exports.help = {
  name: "dice15",
  aliases: ["d15"],
  description: "roll x d15",
  args: false,
  usage: "<your_number_of_dice_within_the_limit_of_100>",
};
