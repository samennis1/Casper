const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig");


module.exports.run = async (bot, message, args) => {

let tomute = message.mentions.members.first();
  message.delete().catch(O_o=>{});
if(!tomute) {

  let a = new Discord.RichEmbed()
  .setDescription("Please specify an active user")
  .setColor("#ff0000");

}

if(!tomute.hasPermission("MANAGE_MESSAGES")) {

  let a = new Discord.RichEmbed()
  .setDescription("This player cannot be muted")
  .setColor("#ff0000");

}
// Start of create role
let muterole = message.guild.roles.find(`name`, "Muted")
if (!muterole) {

  try {
    muterole = await message.guild.createRole ({
        name: "Muted",
        color: "#ff0000",
        permissions: []

    })

    message.guild.channels.forEach(async (channel, id) => {

      await channel.overwritePermission(muterole, {

          SEND_MESSAGES: false,
          ADD_REACTIONS: false

      })
    })
  }
  catch (e) {
    console.log(e.stack)
  }
}
// End of create roles

mutetime = args[1]

if(!mutetime) {

    let a = new Discord.RichEmbed()
    .setDescription("Please specify a time")
    .setColor("#ff0000");

}

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${mutetime}`);
let y = new Discord.RichEmbed()
.setDescription("You have been muted")
.setColor("#ff0000")
.addField("For", mutetime)
.addField("Muted by", `<@${message.author.id}>`);
tomute.send(y);
let logs = message.guild.channels.find(`name`, `${botconfig.logchannel}`)
if (!logs) return message.reply("No logs channel found").then(msg => msg.delete(5000));

let b = new Discord.RichEmbed()
.setDescription("User Muted")
.addField("User", `${tomute}`)
.addField("Muted by", `${message.author}`)
.addField("Muted for", mutetime);

logs.send(b);

setTimeout(function() {
  tomute.removeRole(muterole.id);

    let h = new Discord.RichEmbed()
    .setDescription("User unmuted")
    .addField("User", `<@${tomute.id}>`);

    logs.send(h);


    let a = new Discord.RichEmbed()
    .setDescription("You have been unmuted")
    .setColor("#ff0000");
tomute.send(a);

}, ms(mutetime));
}

module.exports.help = {

  name: "tempmute"
}
