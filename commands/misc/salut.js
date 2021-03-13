const { MESSAGES } = require("../../utils/functions/constantes/constants");

module.exports.run = (client, message, args) => {
    message.channel.send("Salut!");
    console.log(message.author.id)
};

module.exports.help = MESSAGES.COMMANDS.MISC.SALUT;