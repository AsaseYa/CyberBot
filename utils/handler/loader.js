const { readdirSync } = require("fs"); //Import la bibliothèque fs (readdirSync)

//Command handler
const loadCommands = (client, dir = "./commands/") => {
    readdirSync(dir).forEach((dirs) => {
      const commands = readdirSync(`${dir}/${dirs}/`).filter((files) =>
        files.endsWith(".js")
      );
      for (const file of commands) {
        const getFileName = require(`../../${dir}/${dirs}/${file}`);
        client.commands.set(getFileName.help.name, getFileName);
        console.log(`Command: From ${dirs}: ${getFileName.help.name}`);
      }
    });
  };
  
  //Event handler
  const loadEvents = (client, dir = "./events/") => {
    readdirSync(dir).forEach((dirs) => {
      const events = readdirSync(`${dir}/${dirs}/`).filter((files) =>
        files.endsWith(".js")
      );
      for (const event of events) {
        const evt = require(`../../${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        client.on(evtName, evt.bind(null, client));
        console.log(`Event: From ${dirs}: ${evtName}`);
      };
    });
  };

  module.exports = {
      loadCommands,
      loadEvents,
  }