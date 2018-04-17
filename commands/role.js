const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mAuthor = message.member;
    let findRole = message.guild.roles.find(`name`, theRole);
    
    let theRole = args.join(" ");
    let Role = args.join(" ");

    if (theRole === "Owner" && "Moderator" && "Staff" && "owner" && "moderator" && "staff" && "Admin" && "admin" && "manager" && "Manager") return message.reply("You can't add this role to yourself. You probaply aren't a staff member.");
    if (!theRole) return message.reply("Please specify a role.");
    if (mAuthor.roles.has(findRole.id)) return message.reply("You already have that role.")
    await (mAuthor.addRole(findRole.id));




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



    return message.channel.send(`Congrats <@${mAuthor}>, you have been given the role ${findRole.name}. We tried to DM them, but their DMs are locked.`)
    
}
}

module.exports.help = {
    name: "role"
}