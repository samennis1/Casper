const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

message.delete().catch(O_o=>{});

if (message.author.id !== '140790683341422592' || message.author.id !== message.guild.ownerID) {

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

 let c = message.guild.channels.find(`name`, `botconfig.announcements`);

c.send(a);



   return;

}

module.exports.help = {

  name: "announce"
}
