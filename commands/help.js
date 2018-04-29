const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

 let prefix = botconfig.prefix;
 let help = new Discord.RichEmbed()
 .setTitle("Casper Help")
 .addField(`${prefix}help`, "This command, :joy:")
 .addField(`${prefix}kick`, "Kick a player {Staff Only}")
 .addField(`${prefix}ban`, "Ban a player {Staff Only}")
 .addField(`${prefix}report`, "Report a player to staff")
 .addField(`${prefix}serverinfo`, "Server Information")
 .addField(`${prefix}botinfo`, "Bot Information")
 .addField(`${prefix}announce`, "Chats in #announcements {Owner only}")
 .addField(`${prefix}tempmute`, "Mutes a player {Staff Only}")
 .addField(`${prefix}clear`, "Clear the number of specified messages {Staff Only}")
 .addField(`${prefix}someone`, "Chooses a random person (optional message after)")
 .addField(`${prefix}evaluate`, "Evaluate code")
 .addField(`${prefix}role`, "--Broken-- Self assign role")
 .setThumbnail(bot.user.avatarURL)
 .setColor("#00ff00");

  message.reply("Commands have been sent to your DM's!");
   message.author.send(help);
   return;

}

module.exports.help = {

  name: "help"
}
