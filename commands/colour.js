const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {


if(args.length < 1) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Please provide an argument! ${botconfig.prefix}colour <Set/Remove> <Colour>`);
    return message.channel.send(a).then(msg => msg.delete(5000));
}
let user = message.member;
let colour = args.slice(0).join(" ");
let colourrole = message.guild.roles.find("name", `${colour}`);

if(!colourrole) {
    let a = new Discord.RichEmbed()
    .setTitle("Casper | ERROR")
    .setColor("#ff0000")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`This colour does not exist! Do ${botconfig.prefix}colours to find out the available colours!`);
    return message.channel.send(a).then(msg => msg.delete(5000));
} else {
    if(args[0] == "set") {
        if(!user.roles.find("name", `${colourrole}`)) {
            let a = new Discord.RichEmbed()
            .setTitle("Casper | ERROR")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL)
            .setDescription(`You already have this colour! To remove it do ${botconfig.prefix}remove!`);
            return message.channel.send(a).then(msg => msg.delete(5000));
        } else if(user.roles.find("name", "Red") && user.roles.find("name", "Orange") && user.roles.find("name", "Yellow") && user.roles.find("name", "Green") && user.roles.find("name", "Light Blue") && user.roles.find("name", "Dark Blue") && user.roles.find("name", "Pink") && user.roles.find("name", "Purple")) {
            let a = new Discord.RichEmbed()
            .setTitle("Casper | ERROR")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL)
            .setDescription(`Please remove your current colour by using ${botconfig.prefix}remove!`);
            return message.channel.send(a).then(msg => msg.delete(5000));
        } else {
            user.addRole(colourrole);
            let a = new Discord.RichEmbed()
            .setTitle("Casper | Success")
            .setColor("#00ff00")
            .setThumbnail(bot.user.avatarURL)
            .setDescription(`Colour has been added!`);
            return message.channel.send(a).then(msg => msg.delete(5000));
        }
    } else if (args[0] == "remove") {
          if(!user.roles.find("name", `${colourrole}`)) {
            let a = new Discord.RichEmbed()
            .setTitle("Casper | ERROR")
            .setColor("#ff0000")
            .setThumbnail(bot.user.avatarURL)
            .setDescription(`You don't have this colour role!`);
            return message.channel.send(a).then(msg => msg.delete(5000));
          } else {
              user.removeRole(colourrole);
          }
        }
    }
}



module.exports.help = {
    "name": "colour"
}