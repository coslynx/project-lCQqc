const permissions = {
  music: {
    play: ['ADMINISTRATOR', 'MODERATOR', 'DJ'],
    queue: ['ADMINISTRATOR', 'MODERATOR', 'DJ', 'USER'],
    skip: ['ADMINISTRATOR', 'MODERATOR', 'DJ', 'USER'],
    volume: ['ADMINISTRATOR', 'MODERATOR', 'DJ', 'USER'],
    pauseResume: ['ADMINISTRATOR', 'MODERATOR', 'DJ', 'USER'],
  },
  moderation: {
    kick: ['ADMINISTRATOR', 'MODERATOR'],
    ban: ['ADMINISTRATOR', 'MODERATOR'],
    mute: ['ADMINISTRATOR', 'MODERATOR'],
    clearMessages: ['ADMINISTRATOR', 'MODERATOR'],
    automodFilters: ['ADMINISTRATOR', 'MODERATOR'],
  },
  userCommands: {
    musicPlayback: ['USER'],
    serverInfo: ['USER'],
    moderationTools: ['ADMINISTRATOR', 'MODERATOR'],
  },
};

module.exports = permissions;