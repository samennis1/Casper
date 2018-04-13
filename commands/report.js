const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


        // Command Handler

module.exports.run = async (bot, message, args) => {

   let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


   if(!rUser) return message.channel.send("Couldn't find user");

   let reason = args.join(" ").slice(22) // The User ID is 22 characters long, so it is splitting that first part of the args (the users name) and the reason

    let reportE = new Discord.RichEmbed()
  .setDescription("User Report")
  .addField("Reported User", `${rUser} with ID, ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Reason:", `${reason}`)
  .addField("Staff Members", "@Server Management");

   let a = new Discord.RichEmbed()
   .setDescription("You have been reported")
   .setColor("#ff0000")
   .addField("You have been reported for ", reason);


  let logs = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
  message.delete().catch(O_o=>{});
   logs.send(reportE);

   message.delete().catch(O_o=>{});

   return;

}

module.exports.help = {

  name: "report"
}
