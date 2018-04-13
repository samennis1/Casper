const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //>clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have this permission");
  if(!args[0]) {
  let a = new Discord.RichEmbed()
  .setDescription("Please specify the number of messages")
  .setColor("#ff0000");


  return message.channel.send(a);


  }
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages!`).then(msg => msg.delete(5000));
  })
}

module.exports.help = {
  name: "clear"
}
