

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
if(message.author.id !== "439751483433549825") return;
let a = new Discord.RichEmbed()
.setDescription("Bot restarting")
.setColor("#ff0000");
message.channel.send(a);
}

module.exports.help = {
    "name":"restart"
}