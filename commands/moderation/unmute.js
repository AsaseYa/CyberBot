const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

    if (!user.roles.cache.has(muteRole.id)) {
        return message.reply("l'utilisateur mentionné n'est pas mute!");
    };
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus mute.`);
    


    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
        .setColor("#ffa500")
        .setDescription(`**Action**: Unmute`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('814662861829308418').send(embed);
};


module.exports.help = {
    name: 'unmute', 
    aliases: ['unmute'],
    category: 'moderation',
    description: "Unmute un utilisateur",
    usage: '<@mention>',
    args: true,
    hasMention: true,
    permissions: true,
    //isUserAdmin: false
}