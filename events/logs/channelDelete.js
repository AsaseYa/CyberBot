const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
     const settings = await client.getGuild(channel.guild);
     const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
          limit: 1,
          type: "CHANNEL_DELETE",
     });

     const latestChannelDeletes = fetchGuildAuditLogs.entries.first();
     const { executor } = latestChannelDeletes;

     const embed = new MessageEmbed()
          .setAuthor("Suppression d'un salon")
          .setColor("#dc143c")
          .setDescription(
               `**Action**: Suppression de salon\n**Salon supprimé**: ${channel.name}`
          )
          .setTimestamp()
          .setFooter(executor.username, executor.displayAvatarURL());

     client.channels.cache.get(settings.welcomeChannel).send(embed);
};
