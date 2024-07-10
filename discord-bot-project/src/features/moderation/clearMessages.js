const clearMessages = (message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.reply('You do not have permission to use this command.');
    }

    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
        return message.reply('Please provide a valid number of messages to delete.');
    }

    if (amount <= 0 || amount > 100) {
        return message.reply('You can only delete between 1 and 100 messages at a time.');
    }

    message.channel.bulkDelete(amount + 1)
      .then(messages => console.log(`Deleted ${messages.size - 1} messages`))
      .catch(error => {
          console.error('Error deleting messages:', error);
          message.reply('There was an error deleting messages.');
      });
};

module.exports = clearMessages;