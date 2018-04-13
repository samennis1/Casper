const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setThumbnail(sicon)
  .setDescription("Server Information")
  .setColor("#ff3300")
  .addField("Created On", message.guild.createdAt)
  .addField("You joined on", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

   message.delete().catch(O_o=>{});
  return message.channel.send(serverembed);

   return;

}

module.exports.help = {

  name: "serverinfo"
}
