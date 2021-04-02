const { MESSAGES } = require("../../utils/constantes/constants");


module.exports.run = async (client, message, args, settings, dbUser) => {
     message.reply(`Tu possèdes \`${dbUser.experience}\` points d'expérience.`)
};


module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;