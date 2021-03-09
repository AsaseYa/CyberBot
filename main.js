require('dotenv').config();
const { Client, Collection } = require("discord.js"); 
const {loadCommands, loadEvents } = require('./utils/functions/handler/loader'); //Import les commands et events handler

const client = new Client(); //crée le bot
["commands"].forEach((x) => (client[x] = new Collection())); //crée une collection des commandes

//lancement du command handler
loadCommands(client);

//lancement de l'event handler
loadEvents(client);

client.login(process.env.DISCORD_TOKEN);
