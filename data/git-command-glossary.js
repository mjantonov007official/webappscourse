(function () {
  window.CommandGlossary = window.CommandGlossary || [];
  window.CommandGlossary = window.CommandGlossary.concat([
  {
    "command": "git init",
    "purpose": "Create Git metadata in the current directory.",
    "repositoryEffect": "Repository effect: Changes local history.",
    "risk": [
      "Changes local history"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git init",
    "lessonSlug": "repositories-and-working-trees",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git status",
    "purpose": "Show the current branch and file states.",
    "repositoryEffect": "Repository effect: Read-only.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git status",
    "lessonSlug": "why-version-control-exists",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git add",
    "purpose": "Move selected changes into the staging area.",
    "repositoryEffect": "Repository effect: Changes staging area.",
    "risk": [
      "Changes staging area"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git add file.txt",
    "lessonSlug": "staging-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git diff",
    "purpose": "Compare changes in the working tree or staging area.",
    "repositoryEffect": "Repository effect: Read-only.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git diff",
    "lessonSlug": "staging-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git restore",
    "purpose": "Restore working files or unstage changes.",
    "repositoryEffect": "Repository effect: Changes working files, Recovery command.",
    "risk": [
      "Changes working files",
      "Recovery command"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git restore",
    "lessonSlug": "staging-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git commit",
    "purpose": "Record staged changes as a local history snapshot.",
    "repositoryEffect": "Repository effect: Creates history.",
    "risk": [
      "Creates history"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git commit -m \"Describe change\"",
    "lessonSlug": "commits-and-commit-history",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git log",
    "purpose": "Read commit history.",
    "repositoryEffect": "Repository effect: Read-only.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git log",
    "lessonSlug": "why-version-control-exists",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git show",
    "purpose": "Inspect one commit or object.",
    "repositoryEffect": "Repository effect: Read-only.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git show",
    "lessonSlug": "commits-and-commit-history",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git branch",
    "purpose": "List, create, or delete branch labels.",
    "repositoryEffect": "Repository effect: Changes branch.",
    "risk": [
      "Changes branch"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git branch",
    "lessonSlug": "branches",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git switch",
    "purpose": "Change the current branch.",
    "repositoryEffect": "Repository effect: Changes branch, Changes working files.",
    "risk": [
      "Changes branch",
      "Changes working files"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git switch",
    "lessonSlug": "branches",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git merge",
    "purpose": "Integrate another branch into the current branch.",
    "repositoryEffect": "Repository effect: Creates history, Changes working files.",
    "risk": [
      "Creates history",
      "Changes working files"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git merge",
    "lessonSlug": "merging-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git revert",
    "purpose": "Create a new commit that undoes an earlier commit.",
    "repositoryEffect": "Repository effect: Creates history, Recovery command.",
    "risk": [
      "Creates history",
      "Recovery command"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git revert",
    "lessonSlug": "reverting-and-recovering-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git reset",
    "purpose": "Move branch or staging state depending on options.",
    "repositoryEffect": "Repository effect: Changes local history, Potentially destructive.",
    "risk": [
      "Changes local history",
      "Potentially destructive"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git reset",
    "lessonSlug": "reverting-and-recovering-changes",
    "recovery": "Stop and inspect reflog, backups, and shared history before continuing."
  },
  {
    "command": "git reflog",
    "purpose": "Inspect recent branch and HEAD movements.",
    "repositoryEffect": "Repository effect: Read-only, Recovery command.",
    "risk": [
      "Read-only",
      "Recovery command"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git reflog",
    "lessonSlug": "reverting-and-recovering-changes",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git clone",
    "purpose": "Copy a remote repository into a new local folder.",
    "repositoryEffect": "Repository effect: Network access, Changes working files.",
    "risk": [
      "Network access",
      "Changes working files"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git clone https://github.com/example/handbook.git",
    "lessonSlug": "local-and-remote-repositories",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git remote",
    "purpose": "Inspect or configure remote repository URLs.",
    "repositoryEffect": "Repository effect: Changes remote repository.",
    "risk": [
      "Changes remote repository"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git remote -v",
    "lessonSlug": "local-and-remote-repositories",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git fetch",
    "purpose": "Download remote-tracking information without integrating.",
    "repositoryEffect": "Repository effect: Network access, Read-only.",
    "risk": [
      "Network access",
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git fetch",
    "lessonSlug": "push-pull-and-fetch",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git pull",
    "purpose": "Fetch and integrate remote changes into the current branch.",
    "repositoryEffect": "Repository effect: Network access, Changes working files, Creates history.",
    "risk": [
      "Network access",
      "Changes working files",
      "Creates history"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git pull",
    "lessonSlug": "push-pull-and-fetch",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git push",
    "purpose": "Send local commits to a remote repository.",
    "repositoryEffect": "Repository effect: Changes remote repository.",
    "risk": [
      "Changes remote repository"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git push",
    "lessonSlug": "push-pull-and-fetch",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git tag",
    "purpose": "List or create version labels.",
    "repositoryEffect": "Repository effect: Creates history.",
    "risk": [
      "Creates history"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git tag v1.0.0",
    "lessonSlug": "tags-and-releases",
    "recovery": "Inspect git status and history if output is unexpected."
  },
  {
    "command": "git check-ignore",
    "purpose": "Check whether ignore rules apply to a path.",
    "repositoryEffect": "Repository effect: Read-only.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "Windows PowerShell",
      "WSL",
      "Git Bash"
    ],
    "example": "git check-ignore",
    "lessonSlug": "repository-secrets-and-sensitive-files",
    "recovery": "Inspect git status and history if output is unexpected."
  }
]);
})();
