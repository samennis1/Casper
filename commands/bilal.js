const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userid = "224428293879758859";
    if(!message.guild.findMember(userid)) return;

message.channel.send(`<@224428293879758859> is Bilal ;)`)
}

module.exports.help = {
    name: "bilal"
}