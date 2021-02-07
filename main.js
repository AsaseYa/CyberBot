const fs = require("fs");
const { Client, Collection } = require("discord.js"); //import le bot et crée et une collection 
const { TOKEN, PREFIX } = require ('./config');


const client = new Client(); //crée le bot
client.commands = new Collection(); //crée une collection des commandes

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js")); //commandFiles stock les différents fichiers .js du le dossier commands dans une collection
console.log(commandFiles)

for (const file of commandFiles) { //lit tous le fichiers du dossier commands
  const commandMsg = require(`./commands/${file}`);
  client.commands.set(commandMsg.name, commandMsg); //sauvegarde les commandes dans la collection
  console.log(client.commands);
}

client.on('ready', () => {
  console.log(`${client.user.tag} est connecté et prêt à l'emploi l'ami.`);
});


client.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) 
    return;

  
  const userCommand = message.content.slice(PREFIX.length).split(/ +/); /**  Remove PREFIX et divise str en array pour séparer arguments **/ 
  console.log(userCommand);
  const commandMsg = userCommand.shift().toLowerCase(); 
  console.log(commandMsg);

  if(!client.commands.has(commandMsg)) {//executé si la commande tapée sur Discord n'existe pas
    message.author.send(`Voici la liste des commandes disponibles ${message.author}: ${commandMsg.name}`)
    return;
  }

  client.commands.get(commandMsg).execute(message, userCommand);

});

client.login(TOKEN);


