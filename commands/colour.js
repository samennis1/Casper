const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {

    function capitalizeFirstLetter(string) {
        return string.replace(/^./, string[0].toUpperCase());
    }

    message.delete();

if(args.length !== 1) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Please provide an argument! ${botconfig.prefix}colour  <Colour>`);
    return message.channel.send(a).then(msg => msg.delete(5000));
}
let user = message.member;
let colour1 = args.slice(0).join(" ")
let colour = capitalizeFirstLetter(colour1);
let colourrole = message.guild.roles.find("name", colour);

if(!colourrole) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`This colour does not exist! Do ${botconfig.prefix}colours to find out the available colours!`);
    return message.channel.send(a).then(msg => msg.delete(5000));
} 

if(!colour.contains("Red" || "Orange" || "Yellow" || " Green" || "Light Blue" || "Dark Blue" || "Pink" || "Purple")) {
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`That is not a colour role! Do ${botconfig.prefix}colours to find out the available colours!`);
        return message.channel.send(a);
    }
    if(user.roles.has(colourrole)) {
        user.removeRole(colourrole)
        let a = new Discord.RichEmbed()
        .setTitle("Casper | Colour Removed")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Colour ${colourrole} removed`);
        return message.channel.send(a).then(msg => msg.delete(5000));
    } if (!user.roles.has(colourrole)) {


        user.addRole(colourrole)
        let a = new Discord.RichEmbed()
        .setTitle("Casper | Colour Added!")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Colour ${colourrole} has been added!`);
        return message.channel.send(a).then(msg => msg.delete(5000));
    }

    
}



module.exports.help = {
    "name": "colour"
}