const Discord = require("discord.js");
const fs = require("fs")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let author = message.member;
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("No Permission!");
    if(args > 0 || args < 0) return message.reply("Invalid Arguments!");
    let channel = args[0];
    let findC = message.guild.channels.get("name", channel);

    if(!findC) {
        let a = new Discord.RichEmbed()
        .setDescription("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .addField("Channel not found!");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }
   botconfig.logchannel = channel;

   fs.writeFile("../botconfig.json", JSON.stringify(botconfig), function(error) {
       console.log(error);
   });

}

module.exports.help = {
    "name": "logs"
}