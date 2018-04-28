const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
    if(args.length > 2) {
        return message.reply("No further arguments required");
    }
let user = message.mentions.users.first();
var role = args.slice(1).join(" ");
var orole = args.slice(1).join(" ");
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permission");
if(!user) return message.reply("User doesn't exist");
if(!role) return message.reply("Please supply a role");
if(!message.guild.roles.has(role.id)) {
    try{
        role = message.guild.createRole({
            name: `${orole}`,
            color: "#00FF00"
        })
    } catch (err) {
        console.log(err.stack);
    }
}
console.log("Role made");
user.addRole(`${role}`);
let log = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
message.delete().catch(O_o=>{});
if (!log) return message.channel.send("No log channel provided");
if(!log) {
    message.reply("No logs channel found")
} else {
    let a = new Discord.RichEmbed()
    .setDescription("Role added")
    .setColor("#00FF00")
    .addField("User", `${user}`)
    .addField("Added by", `${message.author}`)
    .addField("Role Added", `${orole}`);
    log.send(a);
}
}
 // .


module.exports.help = {

    name: "addrole"
}



