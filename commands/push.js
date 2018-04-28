const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
if(!message.author.roles.has("BotDev")) {
    let a = new Discord.RichEmbed()
    .setDescription("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .addField("No permission!");
    return message.channel.send(a).then(msg => msg.delete(5000));
} 
let update = args.slice(0).join(" ");
let channel = message.guild.channels.find("name", "🆕▸server-updates")

if (!channel) {
    let a = new Discord.RichEmbed()
    .setDescription("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .addField("No updates channel found");
    message.channel.send(a).then(msg => msg.delete(5000));
} else {
    let updates = new Discord.RichEmbed()
    .setDescription("Casper | Bot Update")
    .setColor("#00ff00")
    .setThumbnail(bot.user.avatarURL)
    .addField(`${update}`);
    message.channel.send(a);
}


}

module.exports.help = {
    "name": "push"
}