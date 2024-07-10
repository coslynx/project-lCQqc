const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'volume',
  description: 'Adjust the volume of the music playback',
  async execute(message, args, musicQueue) {
    const serverQueue = musicQueue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send('There is no song currently playing.');
    }

    if (!args[0] || isNaN(args[0]) || parseInt(args[0]) < 0 || parseInt(args[0]) > 100) {
      return message.channel.send('Please provide a valid volume level between 0 and 100.');
    }

    const volumeLevel = parseInt(args[0]);
    serverQueue.volume = volumeLevel / 100;
    serverQueue.connection.dispatcher.setVolumeLogarithmic(serverQueue.volume);

    const volumeEmbed = new MessageEmbed()
      .setColor('#7289DA')
      .setDescription(`Volume set to ${volumeLevel}`);

    return message.channel.send(volumeEmbed);
  }
};