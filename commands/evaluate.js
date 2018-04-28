
function clean(text) {
  if (typeof(text) === 'string')
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

const Discord = require('discord.js');
const config = require('../botconfig.json');

exports.run = (client, message, args) => {

    if(message.author.id !== message.guild.ownerID) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF5733)
    .setTitle(':x: Casper | ERROR')
    .setDescription(` **Insufficient Permissions**\nYou dont have permissions to use this command.`) 
    .setFooter(`Message has been sent from ${message.guild}`)//\n ${Date.now() - message.createdTimestamp} ms
    .setThumbnail(client.user.displayAvatarURL)
    return message.channel.send({embed})}; 
     args = args.join(" ");
  try {
      var evaled = eval(args);
      if (typeof evaled !== 'string')
          evaled = require('util').inspect(evaled);
      // message.channel.send(`Input :inbox_tray: \`\`\`${args}\n\`\`\`\nOutput :outbox_tray: \`\`\`xl\n${clean(evaled)}\n\`\`\``);
      message.delete()
  const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)    
      .setColor('random')
      .addField(`Input :inbox_tray:`, `\`\`\`\n${args}\n\`\`\``)
      .addField(`Output :outbox_tray:`, `\`\`\`\n${clean(evaled)}\n\`\`\``);
      message.channel.send({embed:embed})
  } catch (err) {
  const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)    
      .setColor('random')
      .addField(`Input :inbox_tray:`, `\`\`\`\n${args}\n\`\`\``)
      .addField(`Output :outbox_tray:`, `\`\`\`\n${clean(err)}\n\`\`\``);
      message.channel.send({embed:embed})
  }
};

exports.conf = {
aliases: ['evaluate'],
}

exports.help = {
    name: "eval",
}