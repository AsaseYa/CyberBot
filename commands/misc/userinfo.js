const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = (client, message, args) => {
     const firstMentionned = message.mentions.users.first();
     message.channel.send(
          `Voici le tag de la personne mentionnée: ${firstMentionned.tag}`
     );
};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;
