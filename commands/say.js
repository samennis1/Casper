const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.delete().catch(O_o=>{});
if (message.author.id !== '438786609757028358' || message.author.id !== message.guild.ownerID) return message.reply("You are not the owner");

let c = args.join(" ")

message.channel.send(c);

   return;

}

module.exports.help = {

  name: "say"
}
