# boop-gregors-nose

> CLI and GitHub Action to boop my nose

## I have been booped on the nose <!-- boop-counter -->8<!-- /boop-counter --> times.

[![boop](https://media.giphy.com/media/SYLvjCEtBClsS2QePl/giphy.gif)](https://giphy.com/gifs/boop-snoot-the-SYLvjCEtBClsS2QePl/media)

There are two ways to boop my nose

1. Run the CLI (requires node 14.8+, install at [nodejs.org](https://nodejs.org/))

   ```
   # requires node 14.8+ ()
   npx boop-gregors-nose
   ```

   If you have write access to this repository, it will bump the counter directly. Otherwise it will create an issue and I'll boop the nose for you :)

2. Just create an issue in this repository. The [Boop GitHub Action](.github/workflows/boop.yml) bumps the counter for each new issue.

Happy booping 🐶👈

## Credits

This repository is a follow up to [@jlengstorf](https://github.com/jlengstorf)'s and [@gr2m](https://github.com/gr2m)'s episode on "Learn With Jason": https://www.learnwithjason.dev/github-automation-with-octokit (May 18th, 2021).

In this episode, we used [`octokit`](https://github.com/octokit/octokit.js/) to bump Jason's nose boop counter on his profile page: https://github.com/jlengstorf/ in different ways.

1. A CLI that only Jason can use, authenticated using a `GITHUB_TOKEN` environment variable set to a [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. A CLI that utilizes [GitHub's OAuth Device Flow](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) to either directly bump the counter, or to create an issue instead.
3. A GitHub App deployed to a Netlify serverless function, which gets notified by new issues and then bumps the counter.

Watch [the video](https://www.learnwithjason.dev/github-automation-with-octokit) and check out the [source code](https://github.com/learnwithjason/boop-jasons-nose)

## License

[ISC](LICENSE)
