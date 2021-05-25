module.exports = { boopGregorsNose };

const { bumpBoopCounter } = require("./bump-boop-counter");
const {
  composeCreateOrUpdateTextFile,
} = require("@octokit/plugin-create-or-update-text-file");

const owner = "gr2m";
const repo = "boop-gregors-nose";

/**
 * @param {import("octokit").Octokit} octokit
 */
function boopGregorsNose(octokit) {
  return {
    async boopGregorsNose() {
      try {
        // try to update the README directly.
        await composeCreateOrUpdateTextFile(octokit, {
          owner,
          repo,
          path: "README.md",
          message: "BOOP",
          content: ({ content }) => {
            return bumpBoopCounter(content);
          },
        });

        console.log(`you done been booped`);
      } catch (error) {
        // if it fails, try to create an issue
        const { data: issue } = await octokit
          .request("POST /repos/{owner}/{repo}/issues", {
            owner,
            repo,
            title: "plz to boop",
            body: "I bestow upon you my finest of boops",
          })
          .catch((err) => {
            console.log(err);
          });

        console.log(`issue created at ${issue.html_url}`);
      }
    },
  };
}
