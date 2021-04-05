const mongoose = require("mongoose");


const roleSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     guildID: String,
     guildName: String,
     roleID: String,
     roleName: String,


});

module.exports = mongoose.model("Role", roleSchema);