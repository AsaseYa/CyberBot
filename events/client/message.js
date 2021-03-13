const { Collection } = require("discord.js"); //import le bot et les collections
const { noMention, noArgs, noPermissions } = require("../../utils/functions/failFunction");


module.exports = async (client, message) => {
  const settings = await client.getGuild(message.guild);

  if (message.channel.type === 'dm') return client.emit("directMessage", message);
  
  // si ça ne commence pas par le préfix ou envoyé par le bot
  if (message.author.bot || !message.content.startsWith(settings.prefix)) return;



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
      (cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName)
    );

  //si la commande n'existe pas ou s'il n'y a pas d'argument
  if (!command) return (`La commande ${command} n'existe pas.`)

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

  command.run(client, message, args, settings); //run la commande
};
