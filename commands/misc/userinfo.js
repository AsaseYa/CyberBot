module.exports.run = (client, message, args) => {    
    const firstMentionned = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionnée: ${firstMentionned.tag}`);
}


module.exports.help = {
    name: 'userinfo', 
    aliases: ['ui', 'uinfo'], 
    category: 'misc',
    description: 'Renvoie les infos d\'un utilisateur mentionné.',
    usage: "<votre_mention>",
    args: true,
    hasMention: true,
    permissions: false,
    //isUserAdmin: false
}