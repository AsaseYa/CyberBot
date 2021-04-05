const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = async (client, message, args, settings) => {
     await message.delete();
     await client.channels.cache
          .get(settings.welcomeChannel)
          .send("Le bot redémarre")
          
     process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;
