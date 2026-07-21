# Terminal Content Guide

Terminal lessons teach system behavior first. Commands are real, but they are not magic phrases to memorize. Every command should answer: what does it inspect or change, what target does it affect, what output should a learner expect, what can go wrong, and how can the learner recover safely?

## Command Anatomy

Break commands into command name, options, arguments, paths, and quoted values. The command anatomy explorer must work by keyboard and click; do not rely on hover-only explanations.

## Risk Classification

Use text labels, not color alone:

- `Read-only`
- `Low-risk modification`
- `Destructive`
- `Privileged`
- `Network access`
- `Package installation`

Destructive and privileged commands require clear warnings and recovery notes. Avoid normalizing risky shortcuts.

## Platform Support

Use supported labels: `Linux`, `macOS`, `Windows PowerShell`, `Windows Command Prompt`, `WSL`, and `Git Bash`. Prefer Bash or Unix-style commands when teaching Bash concepts. Add Windows equivalents only when the behavior differs enough to matter.

## Expected Output

Expected output must be clearly marked as simulated. The browser must never execute real shell commands, open a shell, or auto-run copied commands.

## Safe Practice Environments

Ask learners to practice in throwaway folders, local development environments, documentation examples, or simulated workspaces. Do not ask learners to modify system directories while learning.

## Remote Server Rules

Observation comes before modification. Confirm host, user, directory, disk, memory, services, logs, and recent deployments before changing anything. Do not suggest disabling SSH host-key checks. Use `example.com` and documentation IP addresses such as `192.0.2.10`.

## Dependency Tool Rules

Composer and npm are project dependency managers, not programming languages. Explain the difference between `install` and `update`, why lock files matter, and why blind production updates are risky.

## Dangerous Advice To Avoid

Do not suggest `chmod 777` as a general fix. Do not suggest `kill -9` as the default. Do not include real credentials, private keys, API keys, tokens, or secrets. Do not build a browser shell or command auto-run feature.
