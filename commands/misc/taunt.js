const { MESSAGES } = require("../../utils/constantes/constants");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports.run = async (client, message) => {
     //chope la mention
     let user = message.guild.member(message.mentions.users.first());

     //fetch les messages
     const fetchSentences = (
          await message.channel.messages.fetch({
               limit: 100,
               before: message.id,
          })
     )
          .filter((a) => a.author.id === user.id)
          .array();

     //si n'a rien fetch
     if (fetchSentences.length === 0) {
          return message.channel.send(
               `Le dernier message de ${user.displayName} est introuvable.`
          );
     }

     //initialisation de sentences
     let sentences = [];

     //crée un array avec les .content
     fetchSentences.map((msg) => {
          if (
               msg.content.startsWith("!") ||
               msg.content.startsWith("https") ||
               msg.content.length === 0
          ) {
               return;
          } else {
               sentences.push(msg.content);
          }
     });

     //éclate le premier élément de l'array en lettres
     let sentence = sentences[0].split("");

     //si dernier message = no caractère
     if (sentence.length === 0)
          return message.channel.send(
               `Le dernier message de ${user.displayName} ne peut être taunt.`
          );

     //si le message est trop grand = \n
     if (sentence.length > 94) {
          sentence.splice(48, 0, "\n");
          sentence.splice(95, 0, "\n");
     } else if (sentence.length > 47) {
          sentence.splice(48, 0, "\n");
     }

     //crée des lettres uppercase random
     let upperCaseSentence = sentence
          .map((v) =>
               Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
          )
          .join("");

     // Création de l'image
     const canvas = Canvas.createCanvas(1000, 750);
     const ctx = canvas.getContext("2d");
     const background = await Canvas.loadImage(
          "https://en.meming.world/images/en/e/e0/Mocking_SpongeBob.jpg"
     );
     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
     ctx.strokeStyle = "#0b0a0a";
     ctx.strokeRect(0, 0, canvas.width, canvas.height);
     ctx.font = "900 30px sans-serif";
     ctx.fillStyle = "#ffffff";
     ctx.fillText(upperCaseSentence, 50, 650);
     ctx.strokeText(upperCaseSentence, 50, 650);
     ctx.beginPath();

     const attachment = new Discord.MessageAttachment(
          canvas.toBuffer(),
          "custom__image.png"
     );

     message.channel.send(attachment);
};

module.exports.help = MESSAGES.COMMANDS.MISC.TAUNT;
