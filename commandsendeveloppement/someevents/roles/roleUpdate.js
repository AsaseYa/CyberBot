module.exports = async (client, role) => {
     const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
          limit: 1,
          type: "ROLE_UPDATE",
     });
     const latestRoleUpdate = fetchGuildAuditLogs.entries.first();
     // console.log(fetchGuildAuditLogs);
     // console.log(latestRoleUpdate);

     await client.updateRole(role.id, {
          roleName: latestRoleUpdate.changes[0].new,
     });
};
