const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete().catch(O_o=>{});
    if(args.length < 0) {
        let a = new Discord.RichEmbed()
        .setTitle("Casper | ERROR")
        .setDescription("Please add proper arguments! Please include a message")
        .setColor("#ff0000")
        .setThumbnail(bot.user.avatarURL);
    }

let string = args.join(" ");

        let a = new Discord.RichEmbed()
        .setTitle("Character length")
        .setDescription(`Length: ${string.length}`)
        .setColor("#00ff00")
        .setThumbnail(bot.user.avatarURL);

       return message.channel.send(a).then(msg => msg.delete(5000));

}
module.exports.help = {
    "name": "length"
}