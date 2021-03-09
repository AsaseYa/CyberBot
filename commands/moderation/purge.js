const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
    console.log(args[0])
    if(isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut un nombre entre 1 et 100.');
    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0]),
        before: message.id,
    })
    message.delete();
    await message.channel.bulkDelete(messages);
    
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#dc143c")
        .setDescription(`**Action**: purge\n**Nombre de messages**: ${args[0]}\n**Salons**: ${message.channel}`)

    
    client.channels.cache.get('814662861829308418').send(embed);
}



module.exports.help = {
    name: 'purge', 
    aliases: ['p', 'erase', 'clear'],
    category: 'moderation',    
    description: 'Supprime un nombre x de messages entre 1 et 100',
    usage: '<nbr_de_messages_entre_1_et_100>',
    args: true,
    hasMention: false,
    permissions: false,
}