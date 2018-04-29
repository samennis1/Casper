const Discord = require('discord.js');

module.exports.run = async (message, bot, args) => {
        if(args.length < 0) {
            let a = new Discord.RichEmbed()
            .setDescription("Avatar")
            .setThumbnail(message.member.avatarURL);

            return message.reply(a);
        } else if (args.length < 0 && args.length < 1) {
            let rUser = message.mentions.users.first();
            if(rUser) {
                message.reply("User not found!");
                return;
            }
            let a = new Discord.RichEmbed()
            .setDescription("Avatar")
            .setThumbnail(rUser.user.avatarURL);
            return message.channel.send(a);
        } else {
            return;
        }

}

module.exports.help = {
    name: "avatar"
}