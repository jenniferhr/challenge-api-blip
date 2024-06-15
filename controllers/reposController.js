const reposService = require('../services/reposService')

async function getRepos(req, res, next) {
  try {
    const targetOrganization = 'takenet';
    const filteredRepos = await reposService.getAndManipulateRepos(targetOrganization);

    res.json(filteredRepos);
  } catch (error) {
    next(error);
  }
}

module.exports = { getRepos };