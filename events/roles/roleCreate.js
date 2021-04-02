module.exports = async(client, role) => {

     const newRole = {
          guildID: role.guild.id,
          guildName: role.guild.name,
          roleID: role.id,
          roleName: role.name,
     };

     await client.createRoles(newRole);
     /*const roleArray = client.guilds.cache
          .get(settings.guildID)
          .roles.cache.map((role) => [role.id, role.name]);
     
     roleArray.forEach((role) =>

          client.createRole({
               guildID: client.settings.guildID,
               guildName: client.settings.guildName,
               roleID: client.guild.roles.id,
               roleName: message.member.user.tag
          })

     );
     /*client.createRole({
          guildID: client.guild.id,
          guildName: client.guild.name,
          roleID: client.guild.roles.id,
          roleName: message.member.user.tag,
     });*/

};