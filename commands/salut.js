module.exports = {
    name: 'salut', 
    description: 'Renvoie un salut du bot',
    execute(client, message, userCommand) {
        message.channel.send('Salut Bro, je suis CyberBuddy!')
    }
}