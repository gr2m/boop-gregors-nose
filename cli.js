#!/usr/bin/env node

const { Octokit } = require("octokit");
const { createOAuthDeviceAuth } = require("@octokit/auth-oauth-device");

const { boopGregorsNose } = require("./lib/octokit-plugin-boop-gregors-nose");

// register plugin and set default for user agent
const MyOctokit = Octokit.plugin(boopGregorsNose).defaults({
  userAgent: "gregors-nose-booper",
});

run();

async function run() {
  // instantiate `octokit` with the OAuth Device authentication strategy and
  // credentials for an OAuth app
  const octokit = new MyOctokit({
    authStrategy: createOAuthDeviceAuth,
    auth: {
      clientType: "github-app",
      // Client ID for https://github.com/apps/gregor-s-nose-booper
      clientId: "Iv1.9b0bb6178e20d3f4",
      scopes: ["public_repo"],
      onVerification(verification) {
        // verification example
        // {
        //   device_code: "3584d83530557fdd1f46af8289938c8ef79f9dc5",
        //   user_code: "WDJB-MJHT",
        //   verification_uri: "https://github.com/login/device",
        //   expires_in: 900,
        //   interval: 5,
        // };

        console.log("Open %s", verification.verification_uri);
        console.log("Enter code: %s", verification.user_code);
      },
    },
    // auth: process.env.GITHUB_TOKEN,
  });

  await octokit.boopGregorsNose();
}
