const axios = require('axios');
const GITHUB_API_URL = 'https://api.github.com';

async function getOrgRepos(organization) {
  const url = `${GITHUB_API_URL}/orgs/${organization}/repos`;
  const headers = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'     
    };
  const params = new URLSearchParams({ direction: 'desc'})
  try {
    const response = await axios.get(
      url,
      headers,
      params,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from Github API`);
  }
}

module.exports = { getOrgRepos }