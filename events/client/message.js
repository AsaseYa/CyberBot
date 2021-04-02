const { Collection } = require("discord.js"); //import le bot et les collections
const {
     noMention,
     noArgs,
     noPermissions,
} = require("../../utils/functions/failFunction");

module.exports = async (client, message) => {
     //si le msg est en DM
     if (message.channel.type === "dm")
          return client.emit("directMessage", message);
     
     const settings = await client.getGuild(message.guild);
     const dbUser = await client.getUser(message.member);

     //si l'author est le bot
     if (message.author.bot) return;

     //création de l'utilisateur dan la base de donnée
     if (!dbUser)
          await client.createUser({
               guildID: message.member.guild.id,
               guildName: message.member.guild.name,
               userID: message.member.id,
               username: message.member.user.tag,
          });

     const expCd = Math.floor(Math.random() * 19) + 1; //1 -20
     const expToAdd = Math.floor(Math.random() * 25) + 10; //10 - 35

     //Incremente l'Exp si entre 8 et 11
     if (expCd >= 8 && expCd <= 11) {
          await client.addExp(client, message.member, expToAdd);
     }
     
     const userLevel = Math.floor(0.1 * Math.sqrt(dbUser.experience));
     if (dbUser.level < userLevel) {
          message.channel.send(
               `Bravo ${dbUser.name}, tu viens de gagner un niveau d'accréditation. Tu es maintenant niveau \`${userLevel}\`. La France est fière de toi!`
          );
          client.updateUser(message.member, { level: userLevel });
     }

     // si ça ne commence pas par le préfix ou envoyé par le bot
     if (!message.content.startsWith(settings.prefix)) return;

     //Remove settings.prefix et divise str en array pour séparer arguments
     const args = message.content.slice(settings.prefix.length).split(/ +/);

     //Separe en array les éléments et les lower case
     const commandName = args.shift().toLowerCase();

     //crée user pour vérification
     const user = message.mentions.users.first();

     //stock la commande ou aliases dans command
     const command =
          client.commands.get(commandName) ||
          client.commands.find(
               (cmd) =>
                    cmd.help.aliases && cmd.help.aliases.includes(commandName)
          );

     //si la commande n'existe pas ou s'il n'y a pas d'argument
     if (!command) return `La commande ${command} n'existe pas.`;

     //Si permissions: true
     if (
          command.help.permissions &&
          !message.member.hasPermission("BAN_MEMBERS")
     ) {
          return noPermissions(message, command, settings);
     }

     //Si hasMention: true
     if (command.help.hasMention && !user) {
          return noMention(message, command, settings);
     }

     //Si args: True
     if (command.help.args && !args.length) {
          return noArgs(message, command, settings);
     }

     command.run(client, message, args, settings, dbUser); //run la commande
};
