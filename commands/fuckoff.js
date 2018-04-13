const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let fUser = message.mentions.users.first();
message.channel.send(`${fUser}, Fuck OFF`);
}

module.exports.help = {
    name: "fuckoff"
}
