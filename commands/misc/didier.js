const { MESSAGES } = require("../../utils/constantes/constants");
const { answers } = require("../../utils/database/magic8BallDatabase");

module.exports.run = (client, message, args) => {     
     const n = Math.floor(Math.random() * answers.length);
     message.channel.send(answers[n]);
};

module.exports.help = MESSAGES.COMMANDS.MISC.DIDIER;
