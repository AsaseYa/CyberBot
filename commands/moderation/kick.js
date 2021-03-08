const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas")

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#ffa500")
        .setDescription(`**Action**: Kick\n**Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp(message.author.username, message.author.avatarURL())
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('814662861829308418').send(embed);
};



module.exports.help = {
    name: 'kick', 
    aliases: ['k', 'expulse'],
    category: 'moderation',
    description: 'Expulse un membre du serveur',
    usage: '<@mention> <raison_du_kick(peut être vide)>',
    args: true,
    hasMention: true,
    permissions: true,
    //isUserAdmin: true
}