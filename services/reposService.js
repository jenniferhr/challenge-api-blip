const githubService = require('./githubService')

async function getAndManipulateRepos(organization) {
  try {
    const repos =  await githubService.getOrgRepos(organization);

    const targetLanguage = 'C#';

    const reposByLanguage = repos
    .filter((repo) => repo.language === targetLanguage)
    .map(repo => ({ 'name': repo.name, 'description': repo.description, 'created_at': repo.created_at, 'avatar': repo.owner.avatar_url}));

    const firstFiveRepos = reposByLanguage.slice(0,5);
    return firstFiveRepos;
  } catch (error) {
    throw new Error('There was an error in the function to get and manipulate the repos data')
  }
}

module.exports = { getAndManipulateRepos }