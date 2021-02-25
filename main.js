//Import librairies
const { Client, Collection } = require("discord.js"); //import le bot et les collections 
const { readdirSync } = require("fs"); //Import la bibliothèque fs (readdirSync)
const { TOKEN, PREFIX } = require ('./config');


const client = new Client(); //crée le bot
["commands"].forEach(x => client[x] = new Collection); //crée une collection des commandes

//Creation d'une liste des commandes
const commandArray = [];

//Command handler
const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files =>files.endsWith(".js"));
    for(const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      commandArray.push(getFileName.help.name); //Liste des commandes
      console.log(`From ${dirs}: ${getFileName.help.name}`);
    };
  });
};

//lancement du command handler
loadCommands();

//Event message commandes
client.on('message', message => {
  if (message.author.bot || !message.content.startsWith(PREFIX) ) // si ça ne commence pas par le préfix ou envoyé par le bot
    return;
  
  const args = message.content.slice(PREFIX.length).split(/ +/); /**  Remove PREFIX et divise str en array pour séparer arguments **/ 
  const commandName = args.shift().toLowerCase(); //Separe en array les éléments et les lower case

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)); //stock la commande ou aliases dans command

  //si la commande n'existe pas ou s'il n'y a pas d'argument
  if(!command) { //executé si la commande tapée sur Discord n'existe pas
    message.author.send(`La commande "${message.content}" n'existe pas, voici la liste des commandes disponibles ${message.author}: \`${commandArray}\``); //renvoie en privé ce message
    if (message.channel.type === 'dm') { 
      return;
    } else {
      message.delete(); //supprime la commande mal executée si celle-ci n'est pas en DM
      return;
    }
  } 
  if (command.help.args && !args.length) { //s'il n'y a pas d'argument
    message.author.send(`La commande "${message.content}" demande un argument ${message.author}, voici sa structure: \`${PREFIX}${command.help.name} ${command.help.usage}\``)
    if (message.channel.type === 'dm') { 
      return;
    } else {
      message.delete(); //supprime la commande mal executée si celle-ci n'est pas en DM
      return;
    }
  }

  command.run(client, message, args); //run la commande
});


client.on('ready', () => {
  console.log(`${client.user.tag} est connecté et prêt à l'emploi l'ami.`); // lance le bot
});

client.login(TOKEN);


