module.exports.run = (client, message, args) => {
    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
        if(message.member.roles.cache.has(role.id)) {
            return message.channel.send("Tu as déjà ce rôle bro");
        }
        if (role.permissions.has('KICK_MEMBERS')) {
            return message.channel.send("Ce rôle n'est pas pour toi bro");
        }
        message.member.roles.add(role)
            .then(m => message.channel.send(`Tu es maintenant ${role} bro`))
            .catch(e => console.log(e));
    } else{
        message.channel.send("Ce rôle n'existe pas bro");
    }
}

module.exports.help = {
    name: 'add', 
    aliases: ['add'],
    description: 'Ajouter un rôle avec !add nomdurole',
    args: true,
    usage: "<role_à_ajouter>"
}