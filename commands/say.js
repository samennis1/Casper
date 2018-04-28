const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.delete().catch(O_o=>{});
if (message.author.id !== '438786609757028358' || message.author.id !== message.guild.ownerID) {
  let a = new Discord.RichEmbed()
  .setDescription("Casper | ERROR")
  .setColor("#ff0000")
  .setThumbnail(bot.user.avatarURL)
  .addField("No permission!");
  return message.channel.send(a).then(msg => msg.delete(5000));
}

let c = args.join(" ")

message.channel.send(c);

   return;

}

module.exports.help = {

  name: "say"
}
