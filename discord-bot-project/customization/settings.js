const settings = {
  prefix: '!',
  permissions: {
    music: ['PLAY', 'SKIP', 'PAUSE', 'RESUME', 'QUEUE'],
    moderation: ['KICK', 'BAN', 'MUTE', 'CLEAR_MESSAGES', 'AUTOMOD_FILTERS'],
    serverInfo: ['VIEW'],
    custom: ['CUSTOM_COMMAND_1', 'CUSTOM_COMMAND_2']
  },
  roles: {
    admin: 'Admin',
    moderator: 'Moderator',
    member: 'Member'
  }
};

module.exports = settings;