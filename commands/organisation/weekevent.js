const { MESSAGES } = require("../../utils/constantes/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
     const date = new Date();
     const jour = date.getDay();

     const user = message.author;
     let channel = "";

     if(message.mentions.channels.first()) {
          channel = message.mentions.channels.first().id;
          const n = args.indexOf(`<#${channel}>`);
          args.splice(n, 1);
     } else { 
          channel = settings.welcomeChannel;
     };

     let question = args.join(" ");

     const eventEmbed = new MessageEmbed()
          .setAuthor(`${user.username}`, user.displayAvatarURL())
          .setTitle(`${question}`)
          .setColor("#15ea1b")

     let event = await client.channels.cache.get(channel).send(eventEmbed);

     if (jour === 1) {
          await event.react("🇱");
          await event.react("🇲");
          await event.react("821855175069007943");
          await event.react("🇯");
          await event.react("🇻");
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 2) {
          await event.react("🇲");
          await event.react("821855175069007943");
          await event.react("🇯");
          await event.react("🇻");
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 3) {
          await event.react("821855175069007943");
          await event.react("🇯");
          await event.react("🇻");
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 4) {
          await event.react("🇯");
          await event.react("🇻");
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 5) {
          await event.react("🇻");
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 6) {
          await event.react("🇸");
          await event.react("🇩");
          return;
     }
     if (jour === 7) {
          await event.react("🇩");
          return;
     }
};

module.exports.help = MESSAGES.COMMANDS.ORGANISATION.WEEKEVENT;
