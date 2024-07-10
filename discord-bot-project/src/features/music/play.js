const play = async (message, args) => {
    // Check if the user is in a voice channel
    if (!message.member.voice.channel) {
        return message.channel.send('You need to be in a voice channel to play music!');
    }

    // Check if the bot has permissions to join and speak in the voice channel
    if (!message.member.voice.channel.permissionsFor(message.client.user).has('CONNECT') || !message.member.voice.channel.permissionsFor(message.client.user).has('SPEAK')) {
        return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    // Get the music query
    const query = args.join(' ');

    // Play the music in the user's voice channel
    try {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(query);

        dispatcher.on('finish', () => {
            message.member.voice.channel.leave();
        });

        dispatcher.on('error', error => {
            console.error(error);
        });

        message.channel.send(`Now playing: ${query}`);
    } catch (error) {
        console.error(error);
        message.channel.send('There was an error playing the music!');
    }
};