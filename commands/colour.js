const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {

    function capitalizeFirstLetter(string) {
        return string.replace(/^./, string[0].toUpperCase());
    }

    message.delete();

if(args.length !== 0) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Please provide an argument! ${botconfig.prefix}colour  <Colour>`);
    return message.channel.send(a).then(msg => msg.delete(5000));
}
let user = message.member;
let colour1 = args.slice(1).join(" ")
let colour = capitalizeFirstLetter(colour1);
let colourrole = message.guild.roles.find("name", colour);

if(!colourrole) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`This colour does not exist! Do ${botconfig.prefix}colours to find out the available colours!`);
    return message.channel.send(a).then(msg => msg.delete(5000));

    if(!colourrole.contains("Red" || "Orange" || "Yellow" || " Green" || "Light Blue" || "Dark Blue" || "Pink" || "Purple")) {
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`That is not a colour role! Do ${botconfig.prefix}colours to find out the available colours!`);
        return message.channel.send(a);
    }
} else {
    if(user.roles.has(colourrole) || user.roles.find("name", "Red") && user.roles.find("name", "Orange") && user.roles.find("name", "Yellow") && user.roles.find("name", "Green") && user.roles.find("name", "Light Blue") && user.roles.find("name", "Dark Blue") && user.roles.find("name", "Pink") && user.roles.find("name", "Purple")) {
        user.removeRole(colourrole)
        let a = new Discord.RichEmbed()
        .setTitle("Casper | Colour Removed")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Colour removed`);
        return message.channel.send(a);
    } else {


        user.addRole(colourrole)
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Colour <@${colourrole.id}> has been added!`);
        return message.channel.send(a);
    }

    
}
}


module.exports.help = {
    "name": "colour"
}