const fs = require("fs");
const { Client, Collection } = require("discord.js"); //import le bot et crée et une collection 
const { TOKEN, PREFIX } = require ('./config');


const client = new Client(); //crée le bot
client.commands = new Collection(); //crée une collection des commandes

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js")); //commandFiles stock les différents fichiers .js du le dossier commands dans une collection
// console.log(commandFiles)


for (const file of commandFiles) { //lit tous le fichiers du dossier commands
  const commandMsg = require(`./commands/${file}`);
  client.commands.set(commandMsg.name, commandMsg); //sauvegarde les commandes dans la collection
}

const commandArray = Array.from(client.commands.keys()); // Crée un array des commandes avec les noms des commandes pour être renvoyé plus tard sous forme de message d'erreur

client.on('ready', () => {
  console.log(`${client.user.tag} est connecté et prêt à l'emploi l'ami.`); // lance le bot
});


client.on('message', message => {
  if (message.author.bot || !message.content.startsWith(PREFIX) ) // si ça ne commence pas par le préfix ou envoyé par le bot
    return;
  
  const userCommand = message.content.slice(PREFIX.length).split(/ +/); /**  Remove PREFIX et divise str en array pour séparer arguments **/ 
  const commandMsg = userCommand.shift().toLowerCase(); //Separe en array les élément et les lower case

  if(!client.commands.has(commandMsg)) { //executé si la commande tapée sur Discord n'existe pas
    message.author.send(`La commande "${message.content}" n'existe pas, voici la liste des commandes disponibles ${message.author}: ${commandArray}`); //renvoie en privé ce message
    if (message.channel.type === 'dm') { 
      return;
    } else {
      message.delete(); //supprime la commande mal executée si celle-ci n'est pas en DM
      return;
    }
  } 

  client.commands.get(commandMsg).execute(client, message, userCommand); //récupère le nom de la commande dans la collection + execute

});

client.login(TOKEN);


