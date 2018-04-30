const Discord = require("discord.js")

module.exports.run = async (bot,message,args,con) => {
    if(message.author.id !== message.guild.ownerID) {
        if(args.length < 1) {
            let a = new Discord.RichEmbed()
            .setDescription("Invalid Arguments. !setxp <user> <xp>")
            .setTitle("Casper | Error")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL);

            message.channel.send(a).then(msg => msg.delete());

            return;
            
        } else {

        let user = message.mentions.users.first();
        let amount = args.split(0);

        if(!Number(amount)) {
            let re = new Discord.RichEmbed()
            .setDescription("Please prodive a number of xp!")
            .setTitle("Casper | Error")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL);

            message.channel.send(re).then(msg => msg.delete());

            return;
        }

        if(!message.guild.members.get("id", `${user.id}`)) {
            let b = new Discord.RichEmbed()
            .setDescription("Invalid Arguments. !setxp <user> <xp>")
            .setTitle("Casper | Error")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL);

            message.channel.send(b).then(msg => msg.delete());

            return;
        }


        con.query(`SELECT * FROM xp WHERE id = ${target.id}`, (err, rows ) => {
            if(err) throw err;

            let sql;
            
            let xp = rows[0].xp;

            sql = `UPDATE xp SET xp = ${xp + amount} WHERE id = ${message.author.id}`
        });
    }
}
}

module.exports.help = {
    "name": "setxp"
}