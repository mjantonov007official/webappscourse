# Git Content Guide

Git lessons teach change management, not command memorization. Every command should connect to repository state: working tree, staging area, local history, branch labels, and remote repository.

## Mental Model

Use this simplified flow consistently:

```text
Working Directory -> git add -> Staging Area -> git commit -> Local Repository -> git push -> Remote Repository
```

Reverse movement matters too: `git fetch` updates remote-tracking information, while `git pull` fetches and integrates into the current branch.

## Command Standards

Git command records need a command, description, repository effect, risk labels, expected simulated output, common mistake, safe-use note, and recovery guidance where relevant. The browser must never execute Git.

## Risk Labels

Use text labels such as `Read-only`, `Changes working files`, `Changes staging area`, `Creates history`, `Changes branch`, `Changes local history`, `Changes remote repository`, `Potentially destructive`, and `Recovery command`.

## Branches And Merges

Branch graphs must label commit nodes and branches with text. Merge lessons should distinguish fast-forward, merge commit, shared ancestor, and conflict cases without relying on animation.

## Merge Conflicts

Conflict examples should show markers and explain ours, theirs, common ancestor, resolution, staging, testing, and aborting. Do not teach learners to delete markers without understanding the content.

## Recovery Safety

Prefer `git revert` or corrective commits for shared history. Commands such as `git reset --hard`, `git clean -fd`, `git branch -D`, and `git push --force` are high risk and must never be casual beginner defaults.

## Remote And GitHub Rules

Use safe example URLs such as `https://github.com/example/handbook.git`. Do not connect to real repositories, add GitHub auth, or imply local commits are on GitHub before pushing.

## Collaboration Guidance

Pull requests should explain what changed, why, testing, risks, screenshots for UI changes, and follow-up work. Code review should discuss the change, not the person.

## AI-Assisted Git Safety

AI may explain state, summarize diffs, draft PR text, and help reason about conflicts. AI must not automatically commit, push, merge, force push, delete branches, rewrite shared history, or claim tests passed without running them.
