const DiscordService = require('../services/discord');

class StarsController {
  async newStar(request, response) {
    const {
      body: { action, repository, sender, starred_at: starredAt },
    } = request;

    if (action === 'created') {
      const embed = DiscordService.buildStarsMessage({
        repository,
        sender,
        starredAt,
      });

      await DiscordService.sendMessage(
        request.discord,
        '@everyone 🎉 🎉 new star!! 🎉 🎉',
        embed,
      );
    }

    return response.status(204);
  }
}

module.exports = new StarsController();
