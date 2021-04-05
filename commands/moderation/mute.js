const { MESSAGES } = require("../../utils/constantes/constants");
const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    if(typeof args[1] !== 'number') {
        args[1] = '60s'
    };
    let muteTime = (args[1] || '60s')
    
    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#000',
                permissions: []
            }
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    }

    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> doit la fermer pendant ${ms(ms(muteTime))}.`)
    
    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
        .setColor("#ffa500")
        .setDescription(`**Action**: Mute\n**Temps**: ${ms(ms(muteTime))}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get(settings.logChannel).send(embed);
};


module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;