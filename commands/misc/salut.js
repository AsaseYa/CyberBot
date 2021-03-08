module.exports.run = (client, message, args) => {
    message.channel.send("Salut!");
};

module.exports.help = {
    name: 'salut',
    aliases: ['hello'],
    category: 'misc',
    description: "Renvoie un salut",
    usage: "",
    args: false,
    hasMention: false,
    permissions: false,
    //isUserAdmin: false
}