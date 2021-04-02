const { MessageEmbed, GuildMemberManager } = require("discord.js");

module.exports = async (client, member) => {
     const settings = await client.getGuild(member.guild);
     const embed = new MessageEmbed()
          .setAuthor(
               `${member.displayName} (${member.id})`,
               member.user.displayAvatarURL()
          )
          .setColor("#35f092")
          .setFooter("Un utilisateur a rejoint")
          .setTimestamp();
     member.roles.add("820687036646162453");

     client.channels.cache.get(settings.welcomeChannel).send(embed);

     await client.createUser({
          guildID: member.guild.id,
          guildName: member.guild.name,
          userID: member.id,
          username: member.user.tag,
     });
};
