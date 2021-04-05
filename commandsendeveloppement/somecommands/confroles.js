const { MESSAGES } = require("../../utils/constantes/constants");

module.exports.run = async (client, message, args, settings) => {
     switch (args[0]) {
          case "list": {
               message.author.send(
                    `${settings.prefix}confguild <list | roles>`
               );
               message.delete();
               break;
          }
          case "update": {
               let roleArray = [];
               let dbRoles = [];
               client.guilds.cache
                    .get(settings.guildID)
                    .roles.cache.map((role) =>
                         roleArray.push({
                              roleName: role.name,
                              roleID: role.id,
                         })
                    );

               let promise = new Promise((resolve, reject) => {
                    roleArray.map((role) => {
                         client.getRole(role.roleID).then((data) => {
                              if (data) {
                                   dbRoles = roleArray.filter(
                                        (r) => r.roleID !== data.roleID,                                        
                                   );
                                   console.log(dbRoles);
                                   resolve(dbRoles);
                                   console.log(dbRoles)
                              }
                              return;
                         });
                    });
               });

               promise.then((value) => {
                    value.forEach((role) => {
                         client.createRoles({
                              guildID: message.member.guild.id,
                              guildName: message.member.guild.name,
                              roleID: role.roleID,
                              roleName: role.roleName,
                         });
                    });
               });

               break;
          }
     }
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFROLES;
