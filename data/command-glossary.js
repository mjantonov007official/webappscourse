(function () {
  window.CommandGlossary = [
  {
    "command": "pwd",
    "purpose": "Print the current working directory.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "pwd",
    "lessonSlug": "windows-macos-and-linux"
  },
  {
    "command": "ls",
    "purpose": "List directory entries.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "ls aux",
    "lessonSlug": "users-groups-and-permissions"
  },
  {
    "command": "cd",
    "purpose": "Change the shell working directory.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "cd",
    "lessonSlug": "paths-and-directory-navigation"
  },
  {
    "command": "mkdir",
    "purpose": "Create directories.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "mkdir",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "touch",
    "purpose": "Create an empty file or update a timestamp.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "touch",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "cp",
    "purpose": "Copy files or directories.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "cp",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "mv",
    "purpose": "Move or rename files or directories.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "mv",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "rm",
    "purpose": "Remove files or directories.",
    "risk": [
      "Destructive"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "rm old-file.txt",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "rmdir",
    "purpose": "Remove an empty directory.",
    "risk": [
      "Destructive"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "rmdir",
    "lessonSlug": "creating-moving-copying-and-removing-files"
  },
  {
    "command": "cat",
    "purpose": "Print file content to standard output.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "cat",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "less",
    "purpose": "Page through text safely.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "less",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "head",
    "purpose": "Show the first lines of text.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "head",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "tail",
    "purpose": "Show the last lines of text or follow appended lines.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "tail",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "grep",
    "purpose": "Search text for matching lines.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "grep",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "find",
    "purpose": "Search file-system entries by name or attributes.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "find",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "wc",
    "purpose": "Count lines, words, or bytes.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "wc",
    "lessonSlug": "reading-and-searching-text"
  },
  {
    "command": "ps",
    "purpose": "Inspect running processes.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "ps aux",
    "lessonSlug": "what-an-operating-system-manages"
  },
  {
    "command": "top",
    "purpose": "Watch process resource usage interactively.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "top",
    "lessonSlug": "processes-and-background-services"
  },
  {
    "command": "pgrep",
    "purpose": "Find process IDs by name.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "pgrep",
    "lessonSlug": "process-inspection-and-signals"
  },
  {
    "command": "kill",
    "purpose": "Send a signal to a process.",
    "risk": [
      "Destructive"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "kill",
    "lessonSlug": "processes-and-background-services"
  },
  {
    "command": "whoami",
    "purpose": "Print the current user name.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "whoami",
    "lessonSlug": "what-an-operating-system-manages"
  },
  {
    "command": "id",
    "purpose": "Show current user and group identity.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "id",
    "lessonSlug": "users-groups-and-permissions"
  },
  {
    "command": "chmod",
    "purpose": "Change file or directory permissions.",
    "risk": [
      "Privileged"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "chmod",
    "lessonSlug": "users-groups-and-permissions"
  },
  {
    "command": "chown",
    "purpose": "Change file or directory ownership.",
    "risk": [
      "Privileged"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "chown",
    "lessonSlug": "users-groups-and-permissions"
  },
  {
    "command": "printenv",
    "purpose": "Print environment variables.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "printenv",
    "lessonSlug": "environment-variables"
  },
  {
    "command": "env",
    "purpose": "Show or run with environment variables.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "env",
    "lessonSlug": "environment-variables"
  },
  {
    "command": "export",
    "purpose": "Set a shell environment variable for child processes.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "export",
    "lessonSlug": "environment-variables"
  },
  {
    "command": "echo",
    "purpose": "Print text or variable values.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "echo",
    "lessonSlug": "environment-variables"
  },
  {
    "command": "history",
    "purpose": "Show shell command history.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "history",
    "lessonSlug": "understanding-shells-and-bash"
  },
  {
    "command": "which",
    "purpose": "Show where an executable is found.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "which",
    "lessonSlug": "understanding-shells-and-bash"
  },
  {
    "command": "type",
    "purpose": "Explain how the shell resolves a command.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "type",
    "lessonSlug": "understanding-shells-and-bash"
  },
  {
    "command": "clear",
    "purpose": "Clear the terminal screen.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "clear",
    "lessonSlug": "why-engineers-use-the-terminal"
  },
  {
    "command": "exit",
    "purpose": "Close the current shell session.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "exit",
    "lessonSlug": "why-engineers-use-the-terminal"
  },
  {
    "command": "ssh",
    "purpose": "Open an encrypted remote shell session.",
    "risk": [
      "Network access"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "ssh user@example.com",
    "lessonSlug": "remote-servers-and-ssh"
  },
  {
    "command": "ssh-keygen",
    "purpose": "Create an SSH key pair.",
    "risk": [
      "Low-risk modification"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "ssh-keygen",
    "lessonSlug": "ssh-keys-conceptually"
  },
  {
    "command": "ssh-copy-id",
    "purpose": "Install a public SSH key on a remote account.",
    "risk": [
      "Network access"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "ssh-copy-id",
    "lessonSlug": "ssh-keys-conceptually"
  },
  {
    "command": "apt",
    "purpose": "Manage packages on Debian or Ubuntu systems.",
    "risk": [
      "Package installation"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "sudo apt install nginx",
    "lessonSlug": "why-engineers-use-the-terminal"
  },
  {
    "command": "brew",
    "purpose": "Manage packages with Homebrew on macOS or Linux.",
    "risk": [
      "Package installation"
    ],
    "platform": [
      "macOS"
    ],
    "example": "brew",
    "lessonSlug": "package-managers"
  },
  {
    "command": "winget",
    "purpose": "Manage packages on Windows.",
    "risk": [
      "Package installation"
    ],
    "platform": [
      "Windows PowerShell"
    ],
    "example": "winget",
    "lessonSlug": "package-managers"
  },
  {
    "command": "composer",
    "purpose": "Manage PHP project dependencies.",
    "risk": [
      "Package installation"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "composer",
    "lessonSlug": "composer-and-npm-as-dependency-tools"
  },
  {
    "command": "npm",
    "purpose": "Manage JavaScript project dependencies.",
    "risk": [
      "Package installation"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "npm",
    "lessonSlug": "composer-and-npm-as-dependency-tools"
  },
  {
    "command": "systemctl",
    "purpose": "Inspect or control systemd services.",
    "risk": [
      "Privileged"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "systemctl",
    "lessonSlug": "processes-and-background-services"
  },
  {
    "command": "hostname",
    "purpose": "Print the system host name.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "hostname",
    "lessonSlug": "inspecting-a-remote-server-safely"
  },
  {
    "command": "uptime",
    "purpose": "Show how long the system has been running and load averages.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "uptime",
    "lessonSlug": "inspecting-a-remote-server-safely"
  },
  {
    "command": "df",
    "purpose": "Show file-system disk usage.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "df",
    "lessonSlug": "what-an-operating-system-manages"
  },
  {
    "command": "free",
    "purpose": "Show memory usage on many Linux systems.",
    "risk": [
      "Read-only"
    ],
    "platform": [
      "Linux",
      "macOS",
      "WSL",
      "Git Bash"
    ],
    "example": "free",
    "lessonSlug": "inspecting-a-remote-server-safely"
  }
];
})();
