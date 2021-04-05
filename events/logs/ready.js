module.exports = async (client) => {
     console.log(`${client.user.tag} est connecté et prêt à l'emploi l'ami.`);
     //client.channels.cache.get(settings.welcomeChannel).send("Le bot est opérationnel!")

     client.user.setPresence({ activity: {name: 'vos conversations', type: 'LISTENING'}, status: 'DND'});
     //console.log(client.getGuild(client.guilds.client));

     //const roles = RoleManager.cache.map(role => role.tag);
     //console.log(client.guilds.resolveID());
     //console.log(client.user.client.id)

     //const roleUser = await client.getRoles(message.member);
};
