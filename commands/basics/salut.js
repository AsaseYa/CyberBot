module.exports.run = (client, message, args) => {
    message.channel.send("Salut!");
};

module.exports.help = {
    name: 'salut',
    aliases: ['hello'],
    description: "Renvoie un salut",
    args: false,
    usage: '',
}