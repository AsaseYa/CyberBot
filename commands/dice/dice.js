const { MESSAGES } = require("../../utils/constantes/constants");
const { diceFunction } = require("../../utils/functions/diceFunction");

module.exports.run = (client, message, args, settings) => {
     let diceCommandName = message.content
          .slice(settings.prefix.length)
          .split(/ +/)
          .shift()
          .toLowerCase();
     let typeOfDice = "";
     if (diceCommandName === "dice" || diceCommandName === "d") {
          typeOfDice = 20;
     } else {
          typeOfDice = diceCommandName.substring(1);
     }
     const randomDice = () => Math.floor(Math.random() * typeOfDice) + 1;
     diceFunction(client, message, args, randomDice);
};

module.exports.help = MESSAGES.COMMANDS.DICE.DICE;
