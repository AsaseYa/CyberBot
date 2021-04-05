const { MESSAGES } = require("../../utils/constantes/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
     const user = message.mentions.users.first();
     const reason =
          args.splice(1).join(" ") ||
          "Aucune raison spécifiée mais t'es sûrement casse-couilles";
     user
          ? message.guild.member(user).kick(reason)
          : message.channel.send("L'utilisateur n'existe pas");

     const embed = new MessageEmbed()
          .setAuthor(`${user.username} (${user.id})`)
          .setColor("#ffa500")
          .setDescription(`**Action**: Kick\n**Raison**: ${reason}`)
          .setThumbnail(user.avatarURL())
          .setTimestamp(message.author.username, message.author.avatarURL())
          .setFooter(message.author.username, message.author.avatarURL());

     client.channels.cache.get(settings.logChannel).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
