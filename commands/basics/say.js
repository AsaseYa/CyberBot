module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    aliases: ['s', 'repeat'],
    description: "le bot répète l'argument",
    args: true,
    usage: "<votre_message>"
}