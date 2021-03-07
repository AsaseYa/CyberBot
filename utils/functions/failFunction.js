const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config.js");

let failMsg = "";

function failEmbedMsg(command) {
  const failEmbed = new MessageEmbed()
    .setColor("#36393F")
    .setTitle(`**REPORT** : \`${command.help.name}\``)
    .setDescription(failMsg)
    .addField(
      "Utilisation",
      command.help.usage
        ? `${PREFIX}${command.help.name} ${command.help.usage}`
        : `${PREFIX}${command.help.name}`,
      true
    );
  if (command.help.aliases.length > 1) {
    failEmbed.addField("Alias", `${command.help.aliases.join(", ")}`, true);
  }
  return failEmbed;
}

module.exports.noMention = (client, message, command) => {
  failMsg = `La commande \`${command.help.name}\` demande une mention (@Darnaf).`;
  message.reply(failEmbedMsg(command));
};

module.exports.noArgs = (client, message, command) => {
  failMsg = `La commande \`${command.help.name}\` demande un argument.`;
  message.reply(failEmbedMsg(command));
};

module.exports.noPermissions = (client, message, command) => {
  failMsg = `Tu n'as pas les droits pour utiliser la commande \`${command.help.name}\`.`;
  message.reply(failEmbedMsg(command));
};
