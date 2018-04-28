const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
let a  = new Discord.RichEmbed()
.setDescription("Insufficient Permissions")
.setColor("#ff0000");

      return message.reply(a);
    }

  let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if (!sUser) return message.channel.send("Couldn't find user");

  if (`${sUser}` == `${message.author}`) return message.channel.send("You can't warn yourself, silly.");

  let kReason = args.join(" ").slice(22)

  let kReport = new Discord.RichEmbed()
  .setDescription("User Kicked")
  .addField("User:", `${sUser} has been kicked`)
  .addField("Kicked by", `${message.author}`)
  .addField("Reason", kReason);

  let logs = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
  message.delete().catch(O_o=>{});
  if (!logs) {   
    let a = new Discord.RichEmbed()
    .setDescription("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .addField("No logs channel specified!");
   message.channel.send(a).then(msg => msg.delete(6000));

    message.guild.member(sUser).kick(kReason);

    let b = new Discord.RichEmbed()
    .setDescription("User kicked")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(" ")
    .setTitle("Casper | Kick")
    .addField("User ", `${sUser} has been kicked`);
   message.channel.send(b).then(msg => msg.delete(5000));
  }

  logs.send(kReport);

  message.guild.member(sUser).kick(kReason);

  return;



}

module.exports.help = {

  name: "kick"
}
