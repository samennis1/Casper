const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if (!bUser) return message.channel.send("Couldn't find user");

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient permissions");

  let bReason = args.join(" ").slice(22)

  let bReport = new Discord.RichEmbed()
  .setDescription("User Banned")
  .addField("User:", `${bUser} has been kicked`)
  .addField("Banned by", `${message.author}`)
  .addField("Reason", bReason);

  let log = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
  message.delete().catch(O_o=>{});
  if (!log) {
    let a = new Discord.RichEmbed()
    .setDescription("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .addField("No logs channel specified!");
    return message.channel.send(a).then(msg => msg.delete(5000));
  }

  log.send(bReport);

  message.guild.member(bUser).kick(bReason);


   return;

}

module.exports.help = {

  name: "ban"
}
