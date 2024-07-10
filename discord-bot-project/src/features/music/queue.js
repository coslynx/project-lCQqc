const queue = {
  songs: [],
  nowPlaying: null,
  volume: 50,
  isPaused: false,

  addSong(song) {
    this.songs.push(song);
  },

  skipSong() {
    if (this.songs.length > 0) {
      this.nowPlaying = this.songs.shift();
    } else {
      this.nowPlaying = null;
    }
  },

  adjustVolume(newVolume) {
    if (newVolume >= 0 && newVolume <= 100) {
      this.volume = newVolume;
    }
  },

  pauseResume() {
    this.isPaused = !this.isPaused;
  },

  getCurrentSong() {
    return this.nowPlaying;
  },

  getQueue() {
    return this.songs;
  },

  getVolume() {
    return this.volume;
  },

  getIsPaused() {
    return this.isPaused;
  }
};

module.exports = queue;