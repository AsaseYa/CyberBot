const Canvas = require('canvas');
const Discord = require('discord.js');



module.exports.run = async (client, message, args) => {
    
    //chope la mention
    let user = message.guild.member(message.mentions.users.first());

    //si lastMessageID = undefined
    if(!user.lastMessageID) return message.channel.send(`${user.displayName} ne peut être taunt pour le moment.`);
    let sentence = ''

    //fetch le dernier message de l'utilisateur
    await message.channel.messages.fetch(user.lastMessageID, {
        limit: 100,
        before: message.id,
    }).then(msg => {
        sentence = msg.content.split(''); //crée un array de tous les caractères de la phrase
    });

    //si dernier message = no caractère
    if(sentence.length === 0) return message.channel.send(`Le dernier message de ${user.displayName} ne peut être taunt.`);
    
    //si le message est trop grand = \n
    if (sentence.length > 94) {
        sentence.splice(48, 0, '\n');
        sentence.splice(95, 0, '\n');
    }else if (sentence.length > 47) {
        sentence.splice(48, 0, '\n');
    };

    //crée des lettres uppercase random
    let upperCaseSentence = sentence.map((v) =>
        Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
    ).join('');

    // Création de l'image
    const canvas = Canvas.createCanvas(1000, 750)
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://en.meming.world/images/en/e/e0/Mocking_SpongeBob.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#0b0a0a";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = '900 30px impact';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(upperCaseSentence, 50, 650);
    ctx.strokeText(upperCaseSentence, 50, 650)
    ctx.beginPath();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'custom__image.png');

    message.channel.send(attachment);    
};


module.exports.help = {
    name: 'taunt', 
    aliases: ['taunt', 't'],
    category: ['misc'],
    description: "reprend le dernier message de l'utilisateur mentionné et le renvoie modifié",
    usage: '<your_mention>',
    args: true,
    hasMention: true,
    permissions: false,
};