const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args < 0) {
        let a = new Discord.RichEmbed()
        .setDescription("Casper | Invalid Command")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .addField("Please mention a user");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }
let fUser = message.mentions.users.first();
message.channel.send(`${fUser}, Fuck OFF`);
}

module.exports.help = {
    name: "fuckoff"
}
