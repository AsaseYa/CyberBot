const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
     const settings = await client.getGuild(member.guild);
     const embed = new MessageEmbed()
          .setAuthor(
               `${member.displayName} (${member.id})`,
               member.user.displayAvatarURL()
          )
          .setColor("#dc143c")
          .setFooter("Un utilisateur a quitté")
          .setTimestamp();

     client.channels.cache.get(settings.welcomeChannel).send(embed);
};
