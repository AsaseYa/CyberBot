module.exports = {
    name: 'userinfo', 
    description: 'Renvoie les infos d\'un utilisateur mentionné. Structure !userinfo @Darnaf',
    execute(client, message, userCommand) {
        const firstMentionned = message.mentions.users.first();
        message.channel.send(`Voici le tag de la personne mentionnée: ${firstMentionned.tag}`);
    }
}