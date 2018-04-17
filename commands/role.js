const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mAuthor = message.member;
    
    let theRole = args.split(1).join(" ");
    let Role = args.split(1).join(" ");

    if(args[1] == "add") {
    if (theRole === "Owner" && "Moderator" && "Staff" && "owner" && "moderator" && "staff" && "Admin" && "admin" && "manager" && "Manager") return message.reply("You can't add this role to yourself. You probaply aren't a staff member.");
    if (!theRole) return message.reply("Please specify a role.");
    if (mAuthor.roles.has(findRole.id)) return message.reply("You already have that role.")
    await (mAuthor.addRole(findRole.id));



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



    return message.channel.send(`Congrats <@${mAuthor}>, you have been given the role ${findRole.name}. We tried to DM them, but their DMs are locked.`)
    
    }
} else  if (args[1] == "remove") {
    if(theRole == null) return message.reply("Please specify a role to remove!");
    if(!message.guild.roles.has('name', theRole)) return message.reply("Role not found on the server!");
    if(!m.Author.hasRole(theRole.id)) return message.reply("You don't have that role!");

    mAuthor.removeRole(theRole.id);


}
}


module.exports.help = {
    name: "role"
}