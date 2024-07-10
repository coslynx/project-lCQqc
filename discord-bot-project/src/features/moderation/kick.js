const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is online');
});

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.members.resolve(user);
            if (member) {
                try {
                    await member.kick();
                    message.channel.send(`${user.tag} has been kicked.`);
                } catch (error) {
                    console.error(error);
                    message.channel.send('An error occurred while trying to kick the user.');
                }
            } else {
                message.channel.send('That user is not in this server.');
            }
        } else {
            message.channel.send('You need to mention a user to kick.');
        }
    }
});

client.login('your-bot-token');