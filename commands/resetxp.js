const Discord = require("discord.js");

module.exports.run = async (bot, message, args, con) => {

  if(args.length > 0) return;
    let target = args[0];
    if(!target) {
      let a = new Discord.RichEmbed()
      .setDescription("Please specify a user!")
      .setColor("#ff0000")
      .setTitle("Casper | ERROR")
      .setThumbnail(bot.user.avatarURL);


    message.channel.send(a).then(msg => msg.delete(5000));
  } else {
    let target = args[0];
    let look = message.guild.members.find("name", `${target}`);
    let member = message.member;

    if(!look) {
      let a = new Discord.RichEmbed()
      .setDescription("Please specify a real user!")
      .setColor("#ff0000")
      .setTitle("Casper | ERROR")
      .setThumbnail(bot.user.avatarURL);

      message.channel.send(a).then(msg => msg.delete(5000));
    } else {
      con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

      let xp = rows[0].xp;
      let sql;

      if(rows.length < 1) {
        let a = new Discord.RichEmbed()
        .setDescription("User already has no XP!")
        .setColor("#ff0000")
        .setTitle("Casper | ERROR")
        .setThumbnail(bot.user.avatarURL);

        message.channel.send(a).then(msg => msg.delete(5000));
      } else {

      if(xp === 0) {
        let a = new Discord.RichEmbed()
        .setDescription("User already has no XP!")
        .setColor("#ff0000")
        .setTitle("Casper | ERROR")
        .setThumbnail(bot.user.avatarURL);

        message.channel.send(a).then(msg => msg.delete(5000));

      } else {
        let level1 = message.guild.roles.find("name", "Level 1");
        let level2 = message.guild.roles.find("name", "Level 2");
        if(!level1) return;
        if(!level2) return;
        var zero = 0;

        let sql = `UPDATE xp SET xp = ${zero} WHERE id = ${message.author.id}`


                if(message.member.roles.find("name", "Level 1")) {
                  memeber.removeRole(level1)

                }
                if(message.member.roles.find("name", "Level 2")) {
                  member.removeRole(level2)
                }

      }
    }
  });
  }
}
}

module.exports.help ={
  "name": "resetxp"
}
