const { MESSAGES } = require("../../utils/functions/constantes/constants");
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
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

    
    client.channels.cache.get('818852795880833024').send(embed);
}



module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;