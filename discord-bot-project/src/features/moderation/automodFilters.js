const automodFilters = {
  wordFilter: (message) => {
    const filteredWords = ['badword1', 'badword2', 'badword3'];
    const content = message.content.toLowerCase();
    
    if (filteredWords.some(word => content.includes(word))) {
      message.delete();
      message.channel.send(`${message.author}, please refrain from using inappropriate language.`);
    }
  },
  
  linkFilter: (message) => {
    const regex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;
    
    if (regex.test(message.content)) {
      message.delete();
      message.channel.send(`${message.author}, posting links is not allowed in this server.`);
    }
  },
  
  spamFilter: (message) => {
    const spamLimit = 5;
    const timeLimit = 5000; // 5 seconds
    const user = message.author;
    
    if (!user.spamCount) {
      user.spamCount = 1;
      user.lastMessage = message.createdTimestamp;
    } else {
      const currentTime = message.createdTimestamp;
      const elapsedTime = currentTime - user.lastMessage;
      
      if (elapsedTime < timeLimit) {
        user.spamCount++;
        
        if (user.spamCount > spamLimit) {
          message.member.ban({ reason: 'Spamming' });
          message.channel.send(`${user}, you have been banned for spamming.`);
        }
      } else {
        user.spamCount = 1;
        user.lastMessage = currentTime;
      }
    }
  }
};

module.exports = automodFilters;