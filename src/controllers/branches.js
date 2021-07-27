const DiscordService = require('../services/discord');

class BranchesController {
  async newBranch(request, response) {
    const {
      body: { ref_type: refType, ref, repository, sender },
    } = request;

    if (refType === 'branch') {
      console.log(`[github]: new branch by ${sender.login}`);
      const embed = DiscordService.buildBranchesMessage({
        ref,
        repository,
        sender,
      });

      await DiscordService.sendMessage(
        request.discord,
        '@everyone 👀 new branch!! 👀',
        embed,
      ).then(() => {
        console.log('[discord]: new branch message sent to channel');
      });
    }

    return response.status(204).send();
  }
}

module.exports = new BranchesController();
