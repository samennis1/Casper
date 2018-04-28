const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

message.delete().catch(O_o=>{});

if (message.author.id !== message.guild.ownerID) {

  let a = new Discord.RichEmbed()
  .setDescription("No permission")
  .setColor("#ff0000");

return message.channel.send(a);

}
if (args.length === 0) {
  let a = new Discord.RichEmbed()
  .setDescription("Please specify an announcement")
  .setColor("#ff0000");

  return message.channel.send(a).then(msg => msg.delete(5000));
}

 let a = args.join(" ");

 let c = message.guild.channels.find(`name`, `${botconfig.announcements}`);

 if(!c) {
   let a = new Discord.RichEmbed()
   .setDescription("Casper | ERROR")
   .setColor("#ff0000")
   .setThumbnail(bot.user.avatarURL)
   .addField("No announcement channel specified!");
   message.channel.send(a);
 }

c.send(a);



   return;

}

module.exports.help = {

  name: "announce"
}
