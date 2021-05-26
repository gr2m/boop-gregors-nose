#!/usr/bin/env node

const { Octokit } = require("octokit");
const core = require("@actions/core");

const { boopGregorsNose } = require("./lib/octokit-plugin-boop-gregors-nose");

// register plugin and set default for user agent
const MyOctokit = Octokit.plugin(boopGregorsNose).defaults({
  userAgent: "gregors-nose-booper-action",
});

run();

async function run() {
  // instantiate `octokit` with the OAuth Device authentication strategy and
  // credentials for an OAuth app
  const octokit = new MyOctokit({
    auth: process.env.GITHUB_TOKEN || core.getInput("personal-access-token"),
  });

  await octokit.boopGregorsNose();
}
