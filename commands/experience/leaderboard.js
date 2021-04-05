const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../utils/constantes/constants");
const { usernameWithoutTag } = require('../../utils/functions/usernameWithoutTag')


module.exports.run = async (client, message) => {
     const embed = new MessageEmbed()
          .setTitle("")
          .setColor("#1dd0e5")


     await client.getUsers(message.guild).then(p => {
            p.sort((a, b) => (a.level < b.level) ? 1 : -1).splice(0, 20).forEach(e => {
               embed.addField(usernameWithoutTag(e.username), `Niveau: ${e.level}`);
          }); 
     });
     message.channel.send(embed);

     /**
     const tryEmbed = new MessageEmbed()
     .setTitle("")
     .setColor("#1dd0e5")

     let arrayOfLevel = [];


     await client.getUsers(message.guild).then(p => {
          console.log(p);
          p.sort((a, b) => (a.level < b.level) ? 1 : -1).splice(0, 20).forEach(e => {
               let arrayOfUsername = [];
               if(!arrayOfLevel.includes(e.level)) {
                    arrayOfLevel.push(e.level);
                    arrayOfUsername.push(usernameWithoutTag(e.username));
                    tryEmbed.addField(`Niveau: ${e.level}`, arrayOfUsername);
               } else {
                    arrayOfUsername.push(usernameWithoutTag(e.username))

               };
          });
     });

     message.channel.send(tryEmbed); **/
};


module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;