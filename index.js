// Bot made for discord made for you to modify and learn to use commands and many other things using your own commands.

const Discord = require("discord.js"); // Dependency

const Settings = require("./Settings/Settings.json"); // direct settgins token, prefix.

const client = new Discord.Client(); // require

client.on("message", async (message) => {
    let msg = message.content.toLowerCase();
    if (message.author.bot) return undefined;

    if (message.content.indexOf(client.prefix) !== 0) return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

        try {
            let commands = require(`.//commands/${command}.js`);
            commands.run(client, message, args);
        } catch (e) {
            console.error(e.message);
        } finally {}
});

client.prefix = Settings.prefix; // require

client.login(Settings.token); // start new Application bot