const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

  message.delete().catch(O_o=>{});
  if(message.author.id !== message.guild.ownerID) return message.channel.send("You are not the owner");



      let info = args.slice(0).join(" ");
      if(!info) return message.channel.send(`${message.guild.members.random()}`);

     message.channel.send(`${message.guild.members.random()}, ${info}`);
}




module.exports.help = {

    name: "someone"

}
