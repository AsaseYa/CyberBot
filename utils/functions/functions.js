const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Guild, User, /*Role*/ } = require("../../models/index");

module.exports = (client) => {
     //create and updateGuild
     client.createGuild = async (guild) => {
          const merged = Object.assign(
               { _id: mongoose.Types.ObjectId() },
               guild
          );
          const createGuild = await new Guild(merged);
          createGuild
               .save()
               .then((g) => console.log(`Nouveau Serveur -> ${g.guildName}`));
     };

     client.getGuild = async (guild) => {
          const data = await Guild.findOne({ guildID: guild.id });
          if (data) return data;
          return client.config.DEFAULTSETTINGS;
     };

     client.updateGuild = async (guild, settings) => {
          let data = await client.getGuild(guild);
          if (typeof data !== "object") data = {};
          for (const key in settings) {
               if (data[key] !== settings[key]) data[key] = settings[key];
          }
          return data.updateOne(settings);
     };

     //create and updateUser
     client.createUser = async (user) => {
          const merged = Object.assign(
               { _id: mongoose.Types.ObjectId() },
               user
          );
          const createUser = await new User(merged);
          createUser
               .save()
               .then((u) => console.log(`Nouvel utilisateur -> ${u.username}`));
     };

     client.getUser = async (user) => {
          const data = await User.findOne({ userID: user.id });
          if (data) return data;
          else return;
     };

     client.getUsers = async (guild) => {
          const data = await User.find({ guildID: guild.id });
          if (data) return data;
          else return;
     };

     client.updateUser = async (user, settings) => {
          let data = await client.getUser(user);
          if (typeof data !== "object") data = {};
          for (const key in settings) {
               if (data[key] !== settings[key]) data[key] = settings[key];
          }
          return data.updateOne(settings);
     };

     //add and remove xp
     client.addExp = async (client, member, exp) => {
          const userToUpdate = await client.getUser(member);
          const updatedExp = userToUpdate.experience + exp;
          await client.updateUser(member, { experience: updatedExp });
     };

     client.removeExp = async (client, member, exp) => {
          const userToUpdate = await client.getUser(member);
          const updatedExp = userToUpdate.experience - exp;
          await client.updateUser(member, { experience: updatedExp });
     };

     //Create and update roles
     // client.createRoles = async (role) => {
     //      const merged = Object.assign(
     //           { _id: mongoose.Types.ObjectId() },
     //           role
     //      );
     //      const createRole = await new Role(merged);
     //      createRole
     //           .save()
     //           .then((u) => console.log(`Nouveau role -> ${u.roleName}`));
     // };
     // client.getRole = async (role) => {
     //      const data = await Role.findOne({ roleID: role });
     //      if (data) return data;
     //      else return;
     // };
     // client.updateRole = async (role, settings) => {
     //      let data = await client.getRole(role);
     //      if (typeof data !== "object") data = {};
     //      if (settings) {
     //           for (const key in settings) {
     //                console.log(data[key], settings[key])
     //                if (data[key] !== settings[key]) data[key] = settings[key];
     //           }
     //      }
     //      return data.updateOne(settings);
     // };
};
