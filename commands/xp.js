const Discord = require("discord.js");

module.exports.run = async (bot, message, args, con) => {
    let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

    if(target.bot) return;

    message.delete();

    con.query(`SELECT * FROM xp WHERE id = ${target.id}`, (err, rows ) => {
        if(err) throw err;

 if(!rows[0]) {
    let a = new Discord.RichEmbed()
    .setTitle("XP Level")
    .setColor("#00ff00")
    .setFooter("Current XP Level")
    .setDescription(`XP Level for <@${target.id}>`)
    .addField("XP", "No XP yet!")
    .setThumbnail(bot.user.avatarURL);

    message.channel.send(a).then(msg => msg.delete(5000));
    return;
 }

      let xp = rows[0].xp;


      if (!target) {
      let a = new Discord.RichEmbed()
      .setTitle("XP Level")
      .setColor("#00ff00")
      .setFooter("Current XP Level")
      .setDescription(`XP Level for <@${message.author.id}>`)
      .addField("XP", xp)
      .setThumbnail(bot.user.avatarURL);

      message.channel.send(a).then(msg => msg.delete(5000));
      return;
    } else {
      let a = new Discord.RichEmbed()
      .setTitle("XP Level")
      .setColor("#00ff00")
      .setFooter("Current XP Level")
      .setDescription(`XP Level for <@${target.id}>`)
      .addField("XP", xp)
      .setThumbnail(bot.user.avatarURL);

      message.channel.send(a).then(msg => msg.delete(5000));
    }

    });
}

module.exports.help = {
    "name": "xp"
}
