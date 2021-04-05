const user = require("../../models/user");
const { MESSAGES } = require("../../utils/constantes/constants");


module.exports.run = async (client, message, args) => {
     const user = message.guild.member(message.mentions.users.first());
     const expToAdd = parseInt(args[1]);
     if (isNaN(expToAdd)) return message.reply("Il faut écrire un nombre!");
     client.addExp(client, user, expToAdd);
     message.channel.send(`vous avez ajoué avec succès ${expToAdd} points d'expérience à l'utilisateur ${user}.`);
};


module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE;