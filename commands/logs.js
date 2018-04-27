const Discord = require("discord.js");
const fs = require("fs")
const botconfig = JSON.parse(fs.readFileSync("./botconfig.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    let author = message.member;
    if(!author.hasPermission("ADMINISTRATOR")) return message.reply("No Permission!");
    if(args > 0 || args < 0) return message.reply("Invalid Arguments!");
    let channel = args[0];
    let findC = message.guild.channels.get("name", channel);

    if(!findC) return message.reply("No channel found!");
   botconfig.logchannel = channel;

   fs.writeFile("../botconfig.json", JSON.stringify(botconfig));

}

module.exports.help = {
    "name": "logs"
}