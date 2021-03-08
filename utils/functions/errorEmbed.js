const { MessageEmbed } = require("discord.js");
const { PREFIX } = require('../../config');

module.exports.errorEmbedMsg = (command, errorMsg) => {
    const helpEmbed = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`**REPORT** : \`${command.help.name}\``)
      .setDescription(errorMsg)
      .addField(
        "Utilisation",
        command.help.usage
          ? `${PREFIX}${command.help.name} ${command.help.usage}`
          : `${PREFIX}${command.help.name}`,
        true
      );
    if (command.help.aliases.length > 1) {
      helpEmbed.addField("Alias", `${command.help.aliases.join(", ")}`, true);
    }
    return helpEmbed;
}