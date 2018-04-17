const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let role = args.join(" ");
let orole = args.join(" ");
if(!role) return message.reply("Please specify a role!");
if(!message.guild.roles.has(role.id)) {
        try{
            let role = message.guild.createRole({
                name: 'Super Cool People',
                color: 'BLUE'
              })

              message.member.addRole(role.id);

                
            } catch(err) {
                console.log(err.stack);
            }
        
    
} else {
    let member = message.member;
    member.addRole(orole);
}
    

}


module.exports.help = {
    name: "role"
}