const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
    let author = message.member;
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("No Permission!");
    if(args > 0 || args < 0) return message.reply("Invalid Arguments!");
    let channel = args[0];
    let findC = message.guild.channels.find("name", channel);

    if(!findC) return message.reply("No channel found!");
   botconfig.logchannel = channel;


}

module.exports.help = {
    "name": "logs"
}