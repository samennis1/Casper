
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const fs = require("fs");

locked = false;

module.exports.run = async (bot, message, args) => {



if(message.author.id !== message.guild.ownerID) return message.channel.send("You are not the owner");

message.delete().catch(O_o=>{});
if(args.length < 0) {

  let a = new Discord.RichEmbed()
  .setDescription("Casper | ERROR")
  .setColor("#ff0000")
  .setThumbnail(bot.user.avatarURL)
  .addField("Invalid Arguments")
  .addField(`Usage: ${botconfig.prefix}prefix <Set | Toggle> <Prefix>`);
  return message.channel.send(a).then(msg => msg.delete(5000));
}



if(!args[0]) {

  let a = new Discord.RichEmbed()
  .setDescription("Casper | ERROR")
  .setColor("#ff0000")
  .setThumbnail(bot.user.avatarURL)
  .addField("Invalid Arguments")
  .addField(`Usage: ${botconfig.prefix}prefix <Set | Toggle> <Prefix>`);
  return message.channel.send(a).then(msg => msg.delete(5000));
}

if (args[0] === "toggle") {

    if(locked === true) {

     locked = false;

      let a = new Discord.RichEmbed()
      .setDescription("Unlocked");

      return message.channel.send(a);

    } else if (locked === false) {

      let b = new Discord.RichEmbed()
      .setDescription("Locked")
      .setColor("#ff0000");

      locked = true;

      return message.channel.send(b);
    }

} else if(args[0] === "set"){

  let prefix = args[1];
  if(!prefix) {

    let a = new Discord.RichEmbed()
    .setDescription("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .addField("Invalid Arguments")
    .addField(`Usage: ${botconfig.prefix}prefix <Set | Toggle> <Prefix>`);
    return message.channel.send(a).then(msg => msg.delete(5000));

  }

  if (locked == true) {

    let a = new Discord.RichEmbed()
    .setDescription("Prefix locked")
    .setColor("#ff0000");

  return message.channel.send(a).then(msg => msg.delete(5000));

  } else {

  botconfig.prefix = args[1];

  fs.writeFile("../botconfig.json", JSON.stringify(botconfig.prefix), function(error){
      if(error) console.log(error);

  });
  let a = new Discord.RichEmbed()
  .setDescription("Casper | Prefix Set")
  .setColor("#ff0000")
  .setThumbnail(bot.user.avatarURL)
  .addField("Prefix Set ", `${prefix}`)
  .addField("Prefix Set By ", `${message.author}` );

      let announ = message.guild.channels.find(`name`, `${botconfig.announcements}`)
      if(!announ) {
        message.channel.send(q)
      } else {
        announ.send(q);
      }
      



    }
  }
}

module.exports.help = {

  name: "prefix"
}
