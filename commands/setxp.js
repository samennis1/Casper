const Discord = require("discord.js");

module.exports.run = async (bot, message, args, con) => {
  if(message.author.id !== message.guild.ownerID) return;
  if(args.length < 1 || args.length > 1) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setDescription("Invalid Arguments! Please mention a user and provide an amount!")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL);
    return message.channel.send(a).then(msg => msg.delete(5000));
  } else {
    let a = message.mentions.users.first();
    let check = message.guild.members.find(a);
    let amt = args.slice(0);

if(!check) {
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setDescription("User not found!")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL);
        return message.channel.send(a).then(msg => msg.delete(5000));
      } else {
        if(!amt) {
          let a = new Discord.RichEmbed()
          .setTitle("Casper | ERROR")
          .setDescription("Please provide an amount!")
          .setColor("#ff0000")
          .setThumbnail(bot.user.avatarURL);
          return message.channel.send(a).then(msg => msg.delete(5000));
        } else {
          if(!Number(amt)) {
            let a = new Discord.RichEmbed()
            .setTitle("Casper | ERROR")
            .setDescription("Please provide a number!")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL);
            return message.channel.send(a).then(msg => msg.delete(5000));
          } else {
            let sql;
            if(rows.length < 1) {
              let a = new Discord.RichEmbed()
              .setTitle("Casper | ERROR")
              .setDescription("This user has no XP yet! Get them to say somethinggg!!!")
              .setColor("#ff0000")
              .setThumbnail(bot.user.avatarURL);
              return message.channel.send(a).then(msg => msg.delete(5000));
            } else {
                         let xp = rows[0].xp;
                         sql = `UPDATE xp SET xp = ${xp + amt} WHERE id = ${message.author.id}`
                         con.query(sql, (err,res) => {
                          })
            }

          }
        }
      }
    }
  }
}

module.exports.help = {
  "name": "setxp"
}
