const DiscordService = require('../services/discord');

class BranchesController {
  async newBranch(request, response) {
    const {
      body: { ref_type: refType, ref, repository, sender },
    } = request;

    if (refType === 'branch') {
      const embed = DiscordService.buildBranchesMessage({
        ref,
        repository,
        sender,
      });

      await DiscordService.sendMessage(
        request.discord,
        '@everyone 👀 new branch!! 👀',
        embed,
      );
    }

    return response.status(204);
  }
}

module.exports = new BranchesController();
