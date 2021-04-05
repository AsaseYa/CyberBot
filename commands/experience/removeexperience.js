const { MESSAGES } = require("../../utils/constantes/constants");


module.exports.run = async (client, message, args) => {
     const user = message.guild.member(message.mentions.users.first());
     const expToRemove = parseInt(args[1]);
     if (isNaN(expToRemove)) return message.reply("Il faut écrire un nombre!");
     client.removeExp(client, user, expToRemove);
     message.channel.send(`vous avez enlevé avec succès ${expToRemove} points d'expérience à l'utilisateur ${user}.`);
};


module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;