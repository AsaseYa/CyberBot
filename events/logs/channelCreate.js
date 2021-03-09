const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  if (channel.type === "dm") return;
  else {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_CREATE",
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;

    const embed = new MessageEmbed()
      .setAuthor("Création d'un nouveau salon")
      .setColor("#35f092")
      .setDescription(
        `**Action**: Création de salon\n**Salon créé**: ${channel.name}`
      )
      .setTimestamp()
      .setFooter(executor.username, executor.displayAvatarURL());

    client.channels.cache.get("814662861829308418").send(embed);
  }
};
