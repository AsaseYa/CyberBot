const { PREFIX } = require("../../config");
const { Collection } = require("discord.js"); //import le bot et les collections
const { noMention, noArgs, noPermissions } = require("../../utils/functions/failFunction");


module.exports = (client, message) => {
  
  if (message.channel.type === 'dm') return client.emit("directMessage", message);
  
  // si ça ne commence pas par le préfix ou envoyé par le bot
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  //Remove PREFIX et divise str en array pour séparer arguments
  const args = message.content.slice(PREFIX.length).split(/ +/);

  //Separe en array les éléments et les lower case
  const commandName = args.shift().toLowerCase();

  //crée user pour vérification
  const user = message.mentions.users.first();

  //stock la commande ou aliases dans command
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName)
    );

  //si la commande n'existe pas ou s'il n'y a pas d'argument
  if (!command) return (`La commande ${command} n'existe pas.`)

  //Si permissions: true
  if (
    command.help.permissions &&
    !message.member.hasPermission("BAN_MEMBERS")
  ) {
    return noPermissions(client, message, command);
  }

  //Si hasMention: true
  if (command.help.hasMention && !user) {
    return noMention(client, message, command);
  }

  //Si args: True
  if (command.help.args && !args.length) {
    return noArgs(client, message, command);
  }

  command.run(client, message, args, commandName, PREFIX); //run la commande
};
