const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let role = args.join(" ");
let orole = args.join(" ");
if(!role) return message.reply("Please specify a role!");
if(!message.guild.roles.has(role.id)) {
        try{
        role = message.guild.createRole({
            name: `${orole}`
        })
        } catch (err) {
        console.log(err.stack);
        }
        return;
    
} else {
    let member = message.author;
    member.addRole(role.id);
}
    


}

module.exports.help = {
    name: "role"
}