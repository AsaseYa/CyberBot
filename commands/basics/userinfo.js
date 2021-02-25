module.exports.run = (client, message, args) => {
    const firstMentionned = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionnée: ${firstMentionned.tag}`);
}


module.exports.help = {
    name: 'userinfo', 
    aliases: ['ui', 'uinfo'], 
    description: 'Renvoie les infos d\'un utilisateur mentionné.',
    args: true,
    usage: "<votre_mention>"
}