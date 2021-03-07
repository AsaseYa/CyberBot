module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    aliases: ['s', 'repeat'],
    category: 'misc',
    description: "le bot répète l'argument",
    usage: "<votre_message>",   
    args: true,
    hasMention: false,
    permissions: false,
    //isUserAdmin: false
}