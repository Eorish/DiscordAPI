// Prymary command
const Discord = require("discord.js"); 

exports.run = (client, message, args) => {
    console.log("Hi, Follow me!");
    let botavatar = client.user.displayAvatarURL();
    let embed = new Discord.MessageEmbed()
    embed.setTitle("● Hi, Follow me!");
    embed.setColor("#6ED4F0");
    embed.setImage(`${botavatar}`);
    embed.setDescription(`${message.author} Bot made for you to learn how to program in your first steps, and to be a Javascript developer knowing the basics of a javascript bot structure for Discord.js \n
    Add New Application: [**Click me!**](https://discord.com/oauth2/authorize?client_id=854057696008863765&scope=bot&permissions=805445694)\n 
    Read me: [**Click me!**](https://github.com/hastedPy/DiscordAPI) \n
    My Github: [**Click me!**](https://github.com/hastedPy)`);
    embed.setFooter("⚙️ Hi my friend")
    message.channel.send(`Hí, ${message.author}`);
    message.channel.send(embed);
}