const skip = (message, serverQueue) => {
  if (!message.member.voice.channel) {
    return message.channel.send('You need to be in a voice channel to skip the music!');
  }
  if (!serverQueue) {
    return message.channel.send('There is no song that I could skip!');
  }
  serverQueue.connection.dispatcher.end();
};

module.exports = skip;