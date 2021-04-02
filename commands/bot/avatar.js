const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = (client, message, args) => {
     function checkURL(url) {
          return url.match(/\.(jpeg|jpg|png)$/) != null;
     };

     if (!checkURL(args[0])) {
          return message.channel.send(`L'URL ${args[0]} ne semble pas valide. Je ne peux pas charger l'image.`);
     } else {
          client.user.setAvatar(args[0]);
     };
};

module.exports.help = MESSAGES.COMMANDS.BOT.AVATAR;
