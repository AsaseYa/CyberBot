const { MESSAGES } = require("../../utils/functions/constantes/constants");

module.exports.run = async (client, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");
  switch(getSetting) {
    case "logChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, {logChannel: newSetting});
        return message.channel.send(`logChannel mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(`logChannel actuel: \`${settings.logChannel}\``);
      break;
    }
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, {prefix: newSetting});
        return message.channel.send(`Prefix mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(`Préfix actuel: \`${settings.prefix}\``);
      break;
    }
    case "welcomeMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, {welcomeMessage: newSetting});
        return message.channel.send(`welcomeMessage mis à jour: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``);
      break;
    }

  }
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;