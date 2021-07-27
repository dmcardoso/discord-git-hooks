const DiscordService = require('../services/discord');

class StarsController {
  async newStar(request, response) {
    const {
      body: { action, repository, sender, starred_at: starredAt },
    } = request;

    if (action === 'created') {
      console.log(`[github]: new star by ${sender.login}`);

      const embed = DiscordService.buildStarsMessage({
        repository,
        sender,
        starredAt,
      });

      await DiscordService.sendMessage(
        request.discord,
        '@everyone 🎉 🎉 new star!! 🎉 🎉',
        embed,
      ).then(() => {
        console.log('[discord]: new star message sent to channel');
      });
    }

    return response.status(204).send();
  }
}

module.exports = new StarsController();
