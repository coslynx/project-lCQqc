const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'pauseResume',
  description: 'Pause or resume the music playback',
  execute(message, serverQueue) {
    if (!message.member.voice.channel) {
      return message.channel.send('You need to be in a voice channel to pause or resume music!');
    }
    if (!serverQueue) {
      return message.channel.send('There is no song currently playing to pause or resume!');
    }

    if (serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      const pauseEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription('Music playback paused!');
      return message.channel.send(pauseEmbed);
    } else {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      const resumeEmbed = new MessageEmbed()
        .setColor('#00FF00')
        .setDescription('Music playback resumed!');
      return message.channel.send(resumeEmbed);
    }
  }
};