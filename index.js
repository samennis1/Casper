const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");        // Command Handler
const ms = require("ms");
bot.commands = new Discord.Collection(); // For adding a command handler
const token = process.env.BOT_TOKEN;
const mysql = require("mysql")
const password = process.env.MYSQL_PASSWORD;

function genXp() {

  return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
}


fs.readdir("./commands/", (err, files) => {         // Command Handler

  if (err) return console.log(err);          // Command Handler

  let jsfile = files.filter(f => f.split(".").pop() === "js")        // Command Handler
  if( jsfile.length <= 0) {        // Command Handler
   console.log("Couldn't find commands");        // Command Handler
   return;        // Command Handler
}        // Command Handler

jsfile.forEach((f, i) => {        // Command Handler

let props = require(`./commands/${f}`)        // Command Handler
console.log(`${f} loaded!`)        // Command Handler
bot.commands.set(props.help.name, props)        // Command Handler

});        // Command Handler

});        // Command Handler

bot.on("ready", async() => {

console.log(`${bot.user.username} is online`)
bot.user.setActivity(`${botconfig.prefix}help`)
let a = bot.channels.find(`name`, "changes");
let online = new Discord.RichEmbed()
.setDescription("Github Update Pushed")
.setColor("#ff0000")
.addField("Bot online", "New update was pushed to Github");

a.send(online).then(msg => msg.delete(5000));
});

var con = mysql.createConnection({
  host: "db4free.net",
  port: "3306",
  user: "samennis1",
  password: password,
  database: "xp_information"
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected to database!");
});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.name !== "verification") return;
  if(!message.content.startsWith("accept")) return;
  let a = message.guild.roles.find("name", "Verify");
  let b = message.guild.roles.find("name", "{ Member }")
  if(message.member.roles.find("name", "{ Member }")) {
    message.member.removeRole(a);
  } else {
    message.member.removeRole(a)
    message.member.addRole(b)
    message.member.send("Verification Complete");
  }
})



bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    
    console.log(rows);

    let sql;

    if(rows.length < 1) {
          sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', ${genXp()})`
    } else {
      let xp = rows[0].xp;

      sql = `UPDATE xp SET xp = ${xp + genXp()} WHERE id = ${message.author.id}`

      let level1 = message.guild.roles.has("name", "Level 1");
      let level2 = message.guild.roles.has("name", "Level 2");
        if(xp >= 1000) {
          if(message.member.roles.has(level1)) return;

          return message.member.addRole(level1);
        }

        if(xp >= 2000) {
          if(message.member.roles.has(level2)) return;

          return message.member.addRole(level2);
        }

    }

  });

  let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);


if(message.content.startsWith("https://")) {
  if(message.author.bot === true) return;  
  if(message.author.id !== message.guild.ownerID) {
message.delete().catch(O_o=>{});
  let a = new Discord.RichEmbed()
  .setDescription("No links")
  .setColor("#ff0000");
  return;
  message.channel.send(a);
  } else {
    message.reply("Link bypass");
    return;
  }


}

if(cmd === "porn") {
  message.delete().catch(O_o=>{});
  message.reply("No")
  return;
}


if (cmd === "nigger") {
 message.delete().catch(O_o=>{});
 let a = new Discord.RichEmbed()
 .setDescription("Declined")
 .setColor("#ff0000")
 .addField("Do not use that word", `${message.author}`);

return message.channel.send(a);

}

if (cmd === "noodles") return message.channel.send("https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/garlic-noodles-61-700x680.jpg");

  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;









let commandfile = bot.commands.get(cmd.slice(prefix.length)) // Command Handler
if(commandfile) commandfile.run(bot,message,args, con);

if(cmd === `${prefix}hello`) {

return message.channel.send("Hello");

}

if(cmd === `${prefix}botinfo`) {

let botembed = new Discord.RichEmbed()
.setDescription("Bot Information")
.setThumbnail(`${bot.user.displayAvatarURL}`)
.addField("Bot Name", bot.user.username)
.addField("Created By", "Sam")
.addField("Created On", bot.user.createdAt);

return message.channel.send(botembed);

}

if(cmd === `${prefix}invite`) {
  return message.channel.send("Closed to the public");


}

});

// if(cmd === `${prefix}serverinfo`) {
//
//  let sicon = message.guild.iconURL;
//  let serverembed = new Discord.RichEmbed()
//  .setThumbnail(sicon)
//  .setDescription("Server Information")
//  .setColor("#ff3300")
//  .addField("Created On", message.guild.createdAt)
//  .addField("You joined on", message.member.joinedAt)
//  .addField("Total Members", message.guild.memberCount);
//
//  return message.channel.send(serverembed);
//
// }
//
// if(cmd === `${prefix}report`) {
//
//  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//
//  if(!rUser) return message.channel.send("Couldn't find user");
//
//  let reason = args.join(" ").slice(22) // The User ID is 22 characters long, so it is splitting that first part of the args (the users name) and the reason
//
//   let reportE = new Discord.RichEmbed()
// .setDescription("User Report")
// .addField("Reported User", `${rUser} with ID, ${rUser.id}`)
// .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
// .addField("Reason:", `${reason}`)
// .addField("Staff Members", "@Server Management");
//
//
//
//
//  let logs = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
// message.delete().catch(O_o=>{});
//  logs.send(reportE);
//
//  return;
// }
//
// if (cmd === `${prefix}kick`) {
//
// let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//
// if (!sUser) return message.channel.send("Couldn't find user");
//
// if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient permissions");
//
// let kReason = args.join(" ").slice(22)
//
// let kReport = new Discord.RichEmbed()
// .setDescription("User Kicked")
// .addField("User:", `${sUser} has been kicked`)
// .addField("Kicked by", `${message.author}`)
// .addField("Reason", kReason);
//
// let logs = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
// message.delete().catch(O_o=>{});
// if (!logs) return message.channel.send("No log channel provided");
//
// logs.send(kReport);
//
// message.guild.member(sUser).kick(kReason);
//
// return;
//
// }
//
// if (cmd === `${prefix}ban`) {
//
// let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//
// if (!bUser) return message.channel.send("Couldn't find user");
//
// if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient permissions");
//
// let bReason = args.join(" ").slice(22)
//
// let bReport = new Discord.RichEmbed()
// .setDescription("User Banned")
// .addField("User:", `${bUser} has been kicked`)
// .addField("Banned by", `${message.author}`)
// .addField("Reason", bReason);
//
// let log = message.guild.channels.find(`name`, `${botconfig.logchannel}`);
// message.delete().catch(O_o=>{});
// if (!log) return message.channel.send("No log channel provided");
//
// log.send(bReport);
//
// message.guild.member(bUser).kick(bReason);
//
// return;
//
// }
//
// });

bot.on('guildMemberAdd', member => {
console.log("User " + member.user.username + " has joined!")
if(member.user.bot) {
  var role = member.guild.roles.find('name', "Bot");
  member.addRole(role);
  let w = member.guild.channels.find('name', "👋▸welcome-bye")
  w.send("Welcome, " + `<@${member.user.id}>` + " to the Extral Community!");
return;
}
let w = member.guild.channels.find('name', "👋▸welcome-bye")
w.send("Welcome, " + `<@${member.user.id}>` + " to the Extral Community!");

var role = member.guild.roles.find('name', "Verify");
if(!role) return;
member.addRole(role);
member.guild.channels.find("name", "verification").send("Please read #rules and then type accept");
});

bot.on('guildMemberRemove', member => {
  if(member.user.bot) {
    let w = member.guild.channels.find('name', "👋▸welcome-bye")
    w.send("Another bot leaves us, goodbye " + member.user.username);
    return;
  } 
  let w = member.guild.channels.find('name', "👋▸welcome-bye")
w.send("Goodbye!, " + member.user.username);
})



bot.login(token)
