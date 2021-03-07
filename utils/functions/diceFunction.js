module.exports.diceFunction = (client, message, args, randomDice) => {
    numberOfDice = Math.floor(args);
    if (numberOfDice > 100) {
        numberOfDice = 100;
    } else if (numberOfDice < 1) {
        numberOfDice = 1;
    }
    const dices = []; 
    let totalDice = 0;
    for (let dice = 0; dice < numberOfDice; dice ++) {
        dices.push(randomDice());
        totalDice += dices[dice];
        dices[dice] = `\`${dices[dice]}\``;
    }
    if (dices[1]) {
        dices.push(`résultat = \`${totalDice}\``);
    }
    const virgule = /,/gi;
    const finalResults = dices.toString(' ').replace(virgule, '   ');
    message.channel.send(finalResults);
}