const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mAuthor = message.member;

    
    let theRole = args.join(" ");
    let Role = args.join(" ");
    let findRole = message.guild.roles.find(`name`, theRole);

    if (theRole === "Owner" && "Moderator" && "Staff" && "owner" && "moderator" && "staff" && "Admin" && "admin" && "manager" && "Manager"){
        let a = new Discord.RichEmbed()
        .setDescription("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .addField("You cannot add this role to youreslf!");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }
    if (!theRole) {
        let b = new Discord.RichEmbed()
        .setDescription("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .addField("Please specify a role");
        return message.channel.send(b).then(msg => msg.delete(5000));
    }

    if (mAuthor.roles.has(findRole)) {
        let a = new Discord.RichEmbed()
        .setDescription("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .addField("You already have this role!");
        return message.channel.send(a).then(msg => msg.delete(5000));
    }
    await (mAuthor.addRole(findRole));




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



    return message.channel.send(`Congrats <@${mAuthor}>, you have been given the role ${findRole.name}. We tried to DM them, but their DMs are locked.`)
    
}
}

module.exports.help = {
    name: "role"
}