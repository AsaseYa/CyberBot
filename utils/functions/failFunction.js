const { MessageEmbed } = require("discord.js");

let failMsg = "";

function failEmbedMsg(command, settings) {
     const failEmbed = new MessageEmbed()
          .setColor("#36393F")
          .setTitle(`**REPORT** : \`${command.help.name}\``)
          .setDescription(failMsg)
          .addField(
               "Utilisation",
               command.help.usage
                    ? `${settings.prefix}${command.help.name} ${command.help.usage}`
                    : `${settings.prefix}${command.help.name}`,
               true
          );
     if (command.help.aliases.length > 1) {
          failEmbed.addField(
               "Alias",
               `${command.help.aliases.join(", ")}`,
               true
          );
     }
     return failEmbed;
}

module.exports.noMention = (message, command, settings) => {
     failMsg = `La commande \`${command.help.name}\` demande une mention (@Darnaf).`;
     message.reply(failEmbedMsg(command, settings));
};

module.exports.noArgs = (message, command, settings) => {
     failMsg = `La commande \`${command.help.name}\` demande un argument.`;
     message.reply(failEmbedMsg(command, settings));
};

module.exports.noPermissions = (message, command, settings) => {
     failMsg = `Tu n'as pas les droits pour utiliser la commande \`${command.help.name}\`.`;
     message.reply(failEmbedMsg(command, settings));
};
