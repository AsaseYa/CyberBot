require('dotenv').config();
//Import librairies
const { Client, Collection } = require("discord.js"); //import le bot et les collections
const { readdirSync } = require("fs"); //Import la bibliothèque fs (readdirSync)
const { noMention, noArgs, noPermissions } = require("./utils/functions/failFunction");
const { PREFIX } = require("./config")



const client = new Client(); //crée le bot
["commands"].forEach((x) => (client[x] = new Collection())); //crée une collection des commandes

//Creation d'une liste des commandes
const commandArray = [];

//Command handler
const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach((dirs) => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter((files) =>
      files.endsWith(".js")
    );
    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      commandArray.push(getFileName.help.name); //Liste des commandes
      console.log(`From ${dirs}: ${getFileName.help.name}`);
    }
  });
};

//lancement du command handler
loadCommands();

//Event message commandes
client.on("message", (message) => {  

  // si ça ne commence pas par le préfix ou envoyé par le bot
  if (message.author.bot || !message.content.startsWith(PREFIX))
    return;

  //Remove PREFIX et divise str en array pour séparer arguments 
  const args = message.content
    .slice(PREFIX.length)
    .split(/ +/); 

  //Separe en array les éléments et les lower case    
  const commandName = args.shift().toLowerCase(); 

  //crée user pour vérification
  const user = message.mentions.users.first(); 

  //stock la commande ou aliases dans command
  const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName));

  //si la commande n'existe pas ou s'il n'y a pas d'argument
  if (!command) {
    message.author.send(`La commande "${message.content}" n'existe pas, voici la liste des commandes disponibles ${message.author}: \`${commandArray}\``);
    if (message.channel.type === "dm") {
      return;
    } else {
      message.delete(); //supprime la commande mal executée si celle-ci n'est pas en DM
      return;
    }
  }

  //Si permissions: true
  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) {
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
});

client.on("ready", () => {
  console.log(`${client.user.tag} est connecté et prêt à l'emploi l'ami.`); // lance le bot
});

client.login(process.env.DISCORD_TOKEN);
