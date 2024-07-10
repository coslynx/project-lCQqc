const playCommand = async (message, args) => {
    // Check if the user is in a voice channel
    if (!message.member.voice.channel) {
        return message.channel.send('You need to be in a voice channel to play music!');
    }

    // Check if the bot has permissions to join and speak in the voice channel
    const permissions = message.member.voice.channel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    // Get the song query from the arguments
    const songQuery = args.join(' ');

    // Fetch the song information using the music services integration
    const songInfo = await musicServices.getSongInfo(songQuery);

    // Add the song to the queue
    const song = {
        title: songInfo.title,
        url: songInfo.url,
    };

    // If the queue is empty, play the song immediately
    if (queue.length === 0) {
        queue.push(song);
        playSong(message, queue[0]);
    } else {
        queue.push(song);
        message.channel.send(`${song.title} has been added to the queue!`);
    }
};

module.exports = playCommand;