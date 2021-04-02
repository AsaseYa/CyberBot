require("dotenv").config();
const { Client, Collection} = require("discord.js");
const {
     loadCommands,
     loadEvents,
} = require("./utils/handler/loader"); //Import les commands et events handler

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); //crée le bot
require("./utils/functions/functions")(client);
client.config = require("./config");
client.mongoose = require("./utils/mongo/mongoose");

["commands"].forEach((x) => (client[x] = new Collection())); //crée une collection des commandes

//lancement du command handler
loadCommands(client);

//lancement de l'event handler
loadEvents(client);

client.mongoose.init();


client.login(process.env.DISCORD_TOKEN);

//For any unhandled errors
process.on("unhandledRejection", (err) => {
     console.error(err);
   });
