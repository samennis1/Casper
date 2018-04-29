const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.member.send("Please use the names on the right (e.g red -> Nice Red)");
    let a = new Discord.RichEmbed()
    .setTitle("Casper | Colours")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`You can choose one of the following colours`)
    .addField(" ⤸", "Red ")
    .addField(" ⤸", "Orange ")
    .addField(" ⤸", "Yellow")
    .addField(" ⤸", "Green ")
    .addField(" ⤸", "Light Blue ")
    .addField(" ⤸", "Dark Blue")
    .addField(" ⤸", "Pink")
    .addField(" ⤸", "Purple");
    message.channel.send("A list of colours has been DM'd to you!");
    return message.member.send(a);
}

module.exports.help = {
    "name": "colours"
}