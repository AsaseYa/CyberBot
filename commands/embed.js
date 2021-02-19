const {MessageEmbed } = require("discord.js");

module.exports = {
    name: 'embed', 
    description: 'Renvoie un embed',
    execute(client, message, userCommand) {
        const embed = new MessageEmbed()
            .setColor("#dc143c")
            .setTitle("Titre de l'embed")
            .setURL("https://google.com")
            .setDescription("Description de l'embed")
            .setThumbnail(client.user.displayAvatarURL())
            .addField("Je suis un champ", "Et je suis sa valeur")
            .addFields(
                {name : "Je suis le champ 1", value: "valeur 1", inline: true},
                {name : "Je suis le champ 2", value: "valeur 2", inline: true}
            )
            .setImage(client.user.displayAvatarURL())
            .setTimestamp()
            .setFooter("Je suis le pied du footer");

            message.channel.send(embed);
    }
}