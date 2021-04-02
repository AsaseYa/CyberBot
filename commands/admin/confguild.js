const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = async (client, message, args, settings) => {
     const getSetting = args[0];
     const newSetting = args.slice(1).join(" ");
     switch (getSetting) {
          case "list": {
               message.author.send(`${settings.prefix}confguild <list | logChannel | prefix | welcomeChannel> <new_setting>`);
               message.delete();
               break;
          }
          case "roles": {
               if (newSetting) {
                    await client.updateGuild(message.guild, {
                         logChannel: newSetting,
                    });
                    return message.channel.send(
                         `logChannel mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``
                    );
               }
               message.channel.send(
                    `logChannel actuel: \`${settings.logChannel}\``
               );
               break;
          }
          case "prefix": {
               if (newSetting) {
                    await client.updateGuild(message.guild, {
                         prefix: newSetting,
                    });
                    return message.channel.send(
                         `Prefix mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``
                    );
               }
               message.channel.send(`Préfix actuel: \`${settings.prefix}\``);
               break;
          }
          case "welcomeChannel": {
               if (newSetting) {
                    await client.updateGuild(message.guild, {
                         welcomeChannel: newSetting,
                    });
                    return message.channel.send(
                         `welcomeChannel mis à jour: \`${settings.welcomeChannel}\`-> \`${newSetting}\``
                    );
               }
               message.channel.send(
                    `welcomeChannel actuel: \`${settings.welcomeChannel}\``
               );
               break;
          }

     }
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFGUILD;
