const {MessageEmbed } = require("discord.js");
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    name: 'dice', 
    description: 'Renvoie la valeur de plusieurs dés!',
    execute(client, message, userCommand) {
        const embed = new MessageEmbed()
            .setColor("#dc143c")
            .setTitle("Random Dice")
            .setThumbnail()
            .addFields(
                {name : "Dice #1", value: randomDice(), inline: true},
                {name : "Dice #2", value: randomDice(), inline: true},
                {name : "Dice #3", value: randomDice(), inline: true}
            )
            .addFields(
                {name : "Dice #4", value: randomDice(), inline: true},
                {name : "Dice #5", value: randomDice(), inline: true},
                {name : "Dice #6", value: randomDice(), inline: true}
            )
            message.channel.send(embed);
    }
}