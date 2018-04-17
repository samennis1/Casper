const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mAuthor = message.member;
    
    let theRole = args[0];
    let Role = args[0];
    if (theRole === "Owner" && "Moderator" && "Staff" && "owner" && "moderator" && "staff") return message.reply("You can't add this role to yourself. You probaply aren't a staff member.");
    if (!theRole) return message.reply("Please specify a role.");

    let findRole = message.guild.roles.find(`name`, theRole);
    if (!findRole) {
        try {
            let findRole = await message.guild.createRole({
                name: `${Role}`
            }) 

            await mAuthor.addRole(findRole.id);
        } catch (err) {
            console.log(err.stack);
        }
    } else {

    if (mAuthor.roles.has(findRole.id)) return message.reply("You already have that role.")
    await (mAuthor.addRole(findRole.id));

    return message.channel.send(`Congrats <@${mAuthor}>, you have been given the role ${findRole.name}. We tried to DM them, but their DMs are locked.`)
    
    }
}

module.exports.help = {
    name: "role"
}