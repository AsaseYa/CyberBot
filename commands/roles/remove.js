module.exports.run = (client, message, args) => {
    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
        if(!message.member.roles.cache.has(role.id)) {
            return message.channel.send("Tu n'as pas ce rôle bro");
        }
        if (role.permissions.has('KICK_MEMBERS')) {
            return message.channel.send("Ce rôle n'est pas pour toi bro");
        }
        message.member.roles.remove(role)
            .then(m => message.channel.send(`Tu n'es plus ${role} bro`))
            .catch(e => console.log(e));
    } else{
        message.channel.send("Ce rôle n'existe pas, comment veux-tu l'enlever bro");
    }
}


module.exports.help = {
    name: 'remove', 
    aliases: ['rm'],
    description: 'supprimer un rôle',
    args: true,
    usage: "<role_à_supprimer>",
}