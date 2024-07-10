const queueCommand = {
    name: 'queue',
    description: 'Display the current music queue',
    execute(message, args, queue) {
        const serverQueue = queue.get(message.guild.id);

        if (!serverQueue) {
            return message.channel.send('There is no music playing currently.');
        }

        let response = 'Music Queue:\n';
        serverQueue.songs.forEach((song, index) => {
            response += `${index + 1}. ${song.title}\n`;
        });

        return message.channel.send(response);
    }
};

module.exports = queueCommand;