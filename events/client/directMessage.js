const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
     if (message.author.bot) return;
     return message.channel.send("Il n'y a pas d'interaction en privé. Si tu as des suggestions ou des idées, fais-nous un retour sur le discord.");
     

     

     /*

     const embed = new MessageEmbed()
          .setAuthor(`${user.username} (${user.id})`)
          .setColor("#ffa500")
          .setDescription(
               `**Action**: Ouverture ticket\n**Raison**: ${message.content}\n**Utilisateur**: ${user}`
          )
          .setThumbnail(user.avatarURL())
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL());

     user.send(
          "Nous avons reçu votre ticket, nous vous répondrons dès que possible!"
     );
     client.channels.cache.get('820687037031776262').send(embed);*/
};
