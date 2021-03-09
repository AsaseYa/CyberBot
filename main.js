require('dotenv').config();
//Import librairies
const { Client, Collection } = require("discord.js"); //import le bot et les collections
const { readdirSync } = require("fs"); //Import la bibliothèque fs (readdirSync)





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
      console.log(`Command: From ${dirs}: ${getFileName.help.name}`);
    }
  });
};

//Event handler
const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach((dirs) => {
    const events = readdirSync(`${dir}/${dirs}/`).filter((files) =>
      files.endsWith(".js")
    );
    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`Event: From ${dirs}: ${evtName}`);
    };
  });
};

//lancement du command handler
loadCommands();

//lancement de l'event handler
loadEvents();

client.login(process.env.DISCORD_TOKEN);
