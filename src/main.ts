import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const token = core.getInput("token");
    const octokit = new github.GitHub(token);
    const context = github.context;
    octokit.pulls.merge({
      owner: context.repo.owner,
      repo: context.repo.repo,
      number: context.issue.number
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
