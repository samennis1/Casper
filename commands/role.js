const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mAuthor = message.member;

    
    let theRole = args.join(" ");
    let Role = args.join(" ");
    let findRole = message.guild.roles.find(`name`, theRole);

    if (!theRole) {
        let b = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription("Please specify a role");
        return message.channel.send(b).then(msg => msg.delete(5000));
    }

    if (theRole === "Owner" && "Moderator" && "Staff" && "owner" && "moderator" && "staff" && "Admin" && "admin" && "manager" && "Manager"){
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription("You cannot add this role to youreslf!");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }


    if (mAuthor.roles.has(findRole)) {
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription("You already have this role!");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }

    if (!findRole) {
        try {
            let findRole = await message.guild.createRole({
                name: `${Role}`
            }) 

            await mAuthor.addRole(findRole);
        } catch (err) {
            console.log(err.stack);
        }
    } else {



    let Discordw = new Discord.RichEmbed()
    .setTitle("Casper | Role Added")
    .setColor("#00ff00")
    .setDescription(`Role ${theRole} has been added!`)
    .setThumbnail(bot.user.avatarURL);

    return message.channel.send(Discordw).then(msg => msg.delete(5000));
    
}
}

module.exports.help = {
    name: "role"
}