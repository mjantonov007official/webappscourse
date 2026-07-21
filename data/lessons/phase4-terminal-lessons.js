(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["what-an-operating-system-manages"] = {
  "id": "lesson-what-an-operating-system-manages",
  "slug": "what-an-operating-system-manages",
  "title": "What an Operating System Manages",
  "summary": "Explain the operating system as the coordinator between hardware, applications, users, storage, memory, devices, networking, and services.",
  "introduction": [
    "Explain the operating system as the coordinator between hardware, applications, users, storage, memory, devices, networking, and services.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Map everyday actions to operating-system responsibilities.",
    "Explain hardware, process, memory, file-system, user, device, networking, and service management.",
    "Connect local development and Atlas Commerce servers to operating-system behavior."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner opens a browser, downloads a file, connects headphones, runs a local server, and switches between applications. The operating system coordinates each action."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Hardware management",
      "Hardware management is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Process management",
      "Process management is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Memory management",
      "Memory management is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "File system",
      "File system is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Users",
      "Users is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Permissions",
      "Permissions is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Devices",
      "Devices is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Networking",
      "Networking is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "System calls",
      "System calls is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Services",
      "Services is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "responsibility-mapper",
      "title": "Operating-System Responsibility Mapper",
      "prompt": "Match each action to the responsibility the operating system is using most directly.",
      "choices": [
        "Process management",
        "Memory management",
        "File system",
        "Device management",
        "User permissions",
        "Networking"
      ],
      "items": [
        {
          "action": "Open a browser",
          "answer": "Process management",
          "reason": "The OS starts and schedules a browser process."
        },
        {
          "action": "Download a PDF",
          "answer": "File system",
          "reason": "The OS writes the file to storage."
        },
        {
          "action": "Connect headphones",
          "answer": "Device management",
          "reason": "The OS detects and routes audio to a device."
        },
        {
          "action": "Run a local server",
          "answer": "Networking",
          "reason": "The OS exposes a port and handles network traffic."
        },
        {
          "action": "Open a private folder",
          "answer": "User permissions",
          "reason": "The OS checks whether the current user can read it."
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Operating-System Boundary",
    "alt": "Applications talk to the operating system, which coordinates CPU, memory, storage, network, and devices.",
    "nodes": [
      "Applications",
      "Operating System",
      "CPU - Memory - Storage - Network - Devices"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "The browser, local development tools, Nginx, application runtime, database, and queue workers all depend on operating systems to manage resources."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "whoami",
      "description": "Print the current user name.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "whoami",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps aux",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        },
        {
          "token": "aux",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "df -h",
      "description": "Show file-system disk usage.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "df",
          "meaning": "The command or program name."
        },
        {
          "token": "-h",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "what-an-operating-system-manages-lab",
    "goal": "Practice safe observation for What an Operating System Manages.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits What an Operating System Manages?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["windows-macos-and-linux"] = {
  "id": "lesson-windows-macos-and-linux",
  "slug": "windows-macos-and-linux",
  "title": "Windows, macOS, and Linux",
  "summary": "Compare shared operating-system concepts while showing practical differences between Windows, macOS, and Linux development and server environments.",
  "introduction": [
    "Compare shared operating-system concepts while showing practical differences between Windows, macOS, and Linux development and server environments.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain shared OS concepts without ranking systems universally.",
    "Compare shells, paths, packages, case sensitivity, permissions, and server use.",
    "Choose an environment based on tools, team standards, hosting, and workflow."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A web team uses Windows laptops, macOS design tools, Linux servers, WSL, and Git Bash. The right environment depends on the work being done."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Desktop operating system",
      "Desktop operating system is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Server operating system",
      "Server operating system is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Kernel",
      "Kernel is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Distribution",
      "Distribution is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "File path conventions",
      "File path conventions is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Package management",
      "Package management is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Permissions",
      "Permissions is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Shells",
      "Shells is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Case sensitivity",
      "Case sensitivity is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Development compatibility",
      "Development compatibility is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "os-comparison",
      "title": "Operating-System Comparison Explorer",
      "prompt": "Compare systems by practical engineering concerns.",
      "columns": [
        "System",
        "Default shell",
        "Paths",
        "Package tools",
        "Server usage",
        "Case sensitivity"
      ],
      "rows": [
        [
          "Windows",
          "PowerShell / Command Prompt",
          "C:\\Users\\mike",
          "winget, Chocolatey, WSL tools",
          "Common for clients; Linux often hosts servers",
          "Often case-insensitive by default"
        ],
        [
          "macOS",
          "Zsh",
          "/Users/mike",
          "Homebrew",
          "Great for Unix-style local development",
          "Usually case-insensitive by default"
        ],
        [
          "Linux",
          "Bash or distro default",
          "/home/mike",
          "apt, dnf, pacman",
          "Very common for web servers",
          "Case-sensitive"
        ]
      ],
      "selectable": true,
      "selectionPrefix": "Selected environment:"
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Windows, macOS, and Linux System View",
    "alt": "Windows, macOS, and Linux conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce might be developed locally on Windows, macOS, or Linux, then deployed to Linux hosting because that matches the server environment."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "pwd",
      "description": "Show the current Unix-style directory.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "pwd",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Simulated example:\n/home/mike/handbook",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Windows PowerShell"
      ],
      "command": "Get-Location",
      "description": "PowerShell equivalent for showing the current location.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "Get-Location",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Simulated example:\nPath\n----\nC:\\Users\\mike\\handbook",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "windows-macos-and-linux-lab",
    "goal": "Practice safe observation for Windows, macOS, and Linux.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Windows, macOS, and Linux?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["users-groups-and-permissions"] = {
  "id": "lesson-users-groups-and-permissions",
  "slug": "users-groups-and-permissions",
  "title": "Users, Groups, and Permissions",
  "summary": "Explain how operating systems decide who may read, write, execute, delete, administer, and access files, commands, services, and resources.",
  "introduction": [
    "Explain how operating systems decide who may read, write, execute, delete, administer, and access files, commands, services, and resources.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain user, group, owner, read, write, execute, root, administrator, and least privilege.",
    "Reason through rwxr-x--- and numeric notation such as 750.",
    "Use permission commands cautiously without treating sudo as a universal fix."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce deployment files must be readable by Nginx, writable by the deployment user where appropriate, and protected from unrelated users."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "User",
      "User is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Group",
      "Group is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Owner",
      "Owner is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Read",
      "Read is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Write",
      "Write is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Execute",
      "Execute is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Administrator",
      "Administrator is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Root",
      "Root is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Least privilege",
      "Least privilege is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "File ownership",
      "File ownership is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Permission denial",
      "Permission denial is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "sudo",
      "sudo is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "permission-decision",
      "title": "Permission Decision Explorer",
      "prompt": "Owner has read and write. Group has read. Others have no access. Decide which action is allowed.",
      "choices": [
        "Allowed",
        "Denied"
      ],
      "items": [
        {
          "action": "Owner reads file",
          "answer": "Allowed",
          "reason": "Owner has read permission."
        },
        {
          "action": "Group edits file",
          "answer": "Denied",
          "reason": "Group has read but not write permission."
        },
        {
          "action": "Other user reads file",
          "answer": "Denied",
          "reason": "Others have no access."
        },
        {
          "action": "Owner executes a script without x",
          "answer": "Denied",
          "reason": "Execute requires the execute bit."
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Users, Groups, and Permissions System View",
    "alt": "Users, Groups, and Permissions conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Least privilege keeps Atlas Commerce deployment files usable by the right service accounts without making the whole server writable."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Using chmod 777.",
    "Running everything as root.",
    "Changing ownership without understanding the application user.",
    "Confusing ownership with permissions.",
    "Copying commands without checking the target path."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "whoami",
      "description": "Print the current user name.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "whoami",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "id",
      "description": "Show current user and group identity.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "id",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ls -l",
      "description": "List directory entries.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ls",
          "meaning": "The command or program name."
        },
        {
          "token": "-l",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "chmod 750 deploy.sh",
      "description": "Change file or directory permissions.",
      "risk": [
        "Privileged"
      ],
      "anatomy": [
        {
          "token": "chmod",
          "meaning": "The command or program name."
        },
        {
          "token": "750",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "deploy.sh",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Use chmod only after checking the exact path and intended owner/group access. Do not use chmod 777 as a general fix.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "chown deploy:www-data /var/www/handbook",
      "description": "Change file or directory ownership.",
      "risk": [
        "Privileged"
      ],
      "anatomy": [
        {
          "token": "chown",
          "meaning": "The command or program name."
        },
        {
          "token": "deploy:www-data",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "/var/www/handbook",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Changing ownership affects who can manage files. Confirm the application and deployment users first.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "users-groups-and-permissions-lab",
    "goal": "Practice safe observation for Users, Groups, and Permissions.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Users, Groups, and Permissions?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Users, Groups, and Permissions?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["processes-and-background-services"] = {
  "id": "lesson-processes-and-background-services",
  "slug": "processes-and-background-services",
  "title": "Processes and Background Services",
  "summary": "Extend process concepts into operating-system process management, including process IDs, foreground work, background services, daemons, workers, and graceful restarts.",
  "introduction": [
    "Extend process concepts into operating-system process management, including process IDs, foreground work, background services, daemons, workers, and graceful restarts.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Inspect process IDs, users, CPU, memory, state, and command names.",
    "Explain foreground processes, background services, daemons, workers, and supervisors.",
    "Prefer graceful termination before forceful signals."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce runs Nginx, an application runtime, a database service, queue workers, and scheduled tasks. Each can fail independently."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Process ID",
      "Process ID is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Parent process",
      "Parent process is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Foreground",
      "Foreground is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Background",
      "Background is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Service",
      "Service is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Daemon",
      "Daemon is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Worker",
      "Worker is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Resource usage",
      "Resource usage is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Process state",
      "Process state is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Start",
      "Start is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Stop",
      "Stop is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Restart",
      "Restart is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "SIGTERM",
      "SIGTERM is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "SIGKILL",
      "SIGKILL is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "process-table",
      "title": "Simulated Process Table Explorer",
      "prompt": "Sort or select a row to practice process investigation.",
      "columns": [
        "PID",
        "User",
        "CPU",
        "Memory",
        "State",
        "Command"
      ],
      "sortable": true,
      "selectable": true,
      "selectionPrefix": "Investigate:",
      "rows": [
        [
          "101",
          "root",
          "0.2%",
          "34 MB",
          "sleeping",
          "nginx: master"
        ],
        [
          "118",
          "www-data",
          "1.4%",
          "72 MB",
          "running",
          "nginx: worker"
        ],
        [
          "220",
          "mysql",
          "8.8%",
          "512 MB",
          "running",
          "mysqld"
        ],
        [
          "312",
          "deploy",
          "0.7%",
          "96 MB",
          "sleeping",
          "php artisan queue:work"
        ]
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Processes and Background Services System View",
    "alt": "Processes and Background Services conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "A slow checkout might involve a healthy web server, a busy database, and a stuck queue worker. The process table helps narrow the investigation."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps aux",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        },
        {
          "token": "aux",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "top",
      "description": "Watch process resource usage interactively.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "top",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "kill -15 312",
      "description": "Send a signal to a process.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "kill",
          "meaning": "The command or program name."
        },
        {
          "token": "-15",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "312",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "SIGTERM asks a process to exit gracefully. Confirm the PID first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "kill -9 312",
      "description": "Send a signal to a process.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "kill",
          "meaning": "The command or program name."
        },
        {
          "token": "-9",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "312",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "SIGKILL is forceful and should not be the default. Try graceful termination first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux"
      ],
      "command": "systemctl status nginx",
      "description": "Inspect a systemd service without changing it.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "systemctl",
          "meaning": "The command or program name."
        },
        {
          "token": "status",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "nginx",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "processes-and-background-services-lab",
    "goal": "Practice safe observation for Processes and Background Services.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Processes and Background Services?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Processes and Background Services?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["environment-variables"] = {
  "id": "lesson-environment-variables",
  "slug": "environment-variables",
  "title": "Environment Variables",
  "summary": "Explain environment variables as external configuration values provided to processes, including names, values, scope, secrets, PATH, and restart requirements.",
  "introduction": [
    "Explain environment variables as external configuration values provided to processes, including names, values, scope, secrets, PATH, and restart requirements.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain variable name, value, process environment, scope, and PATH.",
    "Compare development and production configuration.",
    "Explain why static HTML and JavaScript must not contain secrets."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce uses different APP_URL, DB_HOST, email provider, cache configuration, and debug mode values in development and production."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Variable name",
      "Variable name is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Variable value",
      "Variable value is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Process environment",
      "Process environment is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Configuration",
      "Configuration is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Development environment",
      "Development environment is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Production environment",
      "Production environment is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Secret",
      "Secret is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "PATH",
      "PATH is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Scope",
      "Scope is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Restart requirement",
      "Restart requirement is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "os-comparison",
      "title": "Configuration Comparison",
      "prompt": "Compare development and production environment choices.",
      "columns": [
        "Variable",
        "Development",
        "Production",
        "Reason"
      ],
      "rows": [
        [
          "APP_ENV",
          "local",
          "production",
          "Behavior and diagnostics differ."
        ],
        [
          "APP_DEBUG",
          "true",
          "false",
          "Production should not expose debug details."
        ],
        [
          "DB_HOST",
          "localhost",
          "db.internal",
          "Services differ by environment."
        ],
        [
          "CACHE_DRIVER",
          "file",
          "redis",
          "Production needs shared cache behavior."
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Environment Variables System View",
    "alt": "Environment Variables conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Configuration lets the same Atlas Commerce code run locally and remotely with different services and safety settings."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Static HTML and JavaScript files must not contain secrets.",
    ".env files are not secure if publicly served.",
    "Environment variables belong to a process or server environment.",
    "Changing a variable may require restarting the process."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "printenv",
      "description": "Print environment variables.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "printenv",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "env",
      "description": "Show or run with environment variables.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "env",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "echo \"$PATH\"",
      "description": "Print the PATH variable used to find commands.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "echo",
          "meaning": "The command or program name."
        },
        {
          "token": "\"$PATH\"",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "export APP_ENV=local",
      "description": "Set a shell environment variable for commands launched from this shell.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "export",
          "meaning": "The command or program name."
        },
        {
          "token": "APP_ENV=local",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Windows PowerShell"
      ],
      "command": "$env:APP_ENV = \"local\"",
      "description": "PowerShell syntax for setting a process-scoped environment variable.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "$env:APP_ENV",
          "meaning": "The command or program name."
        },
        {
          "token": "=",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "\"local\"",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "environment-variables-lab",
    "goal": "Practice safe observation for Environment Variables.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Environment Variables?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["why-engineers-use-the-terminal"] = {
  "id": "lesson-why-engineers-use-the-terminal",
  "slug": "why-engineers-use-the-terminal",
  "title": "Why Engineers Use the Terminal",
  "summary": "Explain why command-line tools are efficient, composable, repeatable, scriptable, precise, useful on remote systems, and helpful for logs and processes.",
  "introduction": [
    "Explain why command-line tools are efficient, composable, repeatable, scriptable, precise, useful on remote systems, and helpful for logs and processes.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Compare terminal and graphical workflows without declaring one universally better.",
    "Explain repeatability, automation, remote access, logs, and precision.",
    "Run harmless first commands in a safe terminal."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner can rename one file with a GUI, but searching 1,000 files or watching logs is often clearer in a terminal."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Command-line interface",
      "Command-line interface is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Graphical interface",
      "Graphical interface is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Automation",
      "Automation is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Repeatability",
      "Repeatability is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Remote access",
      "Remote access is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Scriptability",
      "Scriptability is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Logs",
      "Logs is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Standardized commands",
      "Standardized commands is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Precision",
      "Precision is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "os-comparison",
      "title": "GUI Versus Terminal Explorer",
      "prompt": "Choose which tool is usually clearer for each scenario.",
      "columns": [
        "Scenario",
        "GUI fit",
        "Terminal fit",
        "Reason"
      ],
      "rows": [
        [
          "Rename one file",
          "Strong",
          "Fine",
          "A GUI can be faster for a single visible file."
        ],
        [
          "Search 1,000 files",
          "Weak",
          "Strong",
          "Commands can repeat precise searches."
        ],
        [
          "Connect to a remote server",
          "Limited",
          "Strong",
          "SSH gives remote shell access."
        ],
        [
          "Watch logs",
          "Limited",
          "Strong",
          "tail and grep expose evidence quickly."
        ],
        [
          "Inspect processes",
          "Good",
          "Good",
          "Both can help; terminal is useful remotely."
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Why Engineers Use the Terminal System View",
    "alt": "Why Engineers Use the Terminal conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce engineers use terminal commands to inspect logs, services, files, and deployments, especially on remote servers."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "pwd",
      "description": "Print the current working directory.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "pwd",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ls",
      "description": "List directory entries.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ls",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "clear",
      "description": "Clear the terminal screen.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "clear",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "exit",
      "description": "Close the current shell session.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "exit",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "why-engineers-use-the-terminal-lab",
    "goal": "Practice safe observation for Why Engineers Use the Terminal.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["understanding-shells-and-bash"] = {
  "id": "lesson-understanding-shells-and-bash",
  "slug": "understanding-shells-and-bash",
  "title": "Understanding Shells and Bash",
  "summary": "Explain the relationship between terminal applications, shells, Bash, Zsh, PowerShell, commands, prompts, arguments, options, exit status, and shell history.",
  "introduction": [
    "Explain the relationship between terminal applications, shells, Bash, Zsh, PowerShell, commands, prompts, arguments, options, exit status, and shell history.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Distinguish terminal emulator, shell, command, and operating system.",
    "Break down command, option, argument, path, and quoting.",
    "Explain exit status and shell history conceptually."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner types ls -la /var/www. The terminal collects input, the shell parses it, a command runs, and the operating system provides file information."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Terminal emulator",
      "Terminal emulator is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Shell",
      "Shell is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Bash",
      "Bash is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Zsh",
      "Zsh is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "PowerShell",
      "PowerShell is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Command",
      "Command is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Prompt",
      "Prompt is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Argument",
      "Argument is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Option",
      "Option is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Exit status",
      "Exit status is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Shell history",
      "Shell history is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Quoting",
      "Quoting is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "responsibility-mapper",
      "title": "Command Anatomy Explorer",
      "prompt": "Match each token in ls -la /var/www to its role.",
      "choices": [
        "Command",
        "Option",
        "Argument path",
        "Quoted path"
      ],
      "items": [
        {
          "action": "ls",
          "answer": "Command",
          "reason": "ls is the program name."
        },
        {
          "action": "-la",
          "answer": "Option",
          "reason": "Options change output behavior."
        },
        {
          "action": "/var/www",
          "answer": "Argument path",
          "reason": "This tells ls which directory to inspect."
        },
        {
          "action": "cd \"Project Files\"",
          "answer": "Quoted path",
          "reason": "Quotes keep spaces inside one argument."
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Terminal to Operating System",
    "alt": "Keyboard input enters terminal, shell, command, and operating system.",
    "nodes": [
      "Keyboard Input",
      "Terminal Application",
      "Shell",
      "Command or Program",
      "Operating System"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce commands run through a shell whether the engineer is local or connected to a remote server."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "echo hello",
      "description": "Print text or variable values.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "echo",
          "meaning": "The command or program name."
        },
        {
          "token": "hello",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "history",
      "description": "Show shell command history.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "history",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "which node",
      "description": "Show where an executable is found.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "which",
          "meaning": "The command or program name."
        },
        {
          "token": "node",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "type cd",
      "description": "Explain how the shell resolves a command.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "type",
          "meaning": "The command or program name."
        },
        {
          "token": "cd",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "echo $?",
      "description": "Print text or variable values.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "echo",
          "meaning": "The command or program name."
        },
        {
          "token": "$?",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "understanding-shells-and-bash-lab",
    "goal": "Practice safe observation for Understanding Shells and Bash.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Understanding Shells and Bash?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["paths-and-directory-navigation"] = {
  "id": "lesson-paths-and-directory-navigation",
  "slug": "paths-and-directory-navigation",
  "title": "Paths and Directory Navigation",
  "summary": "Teach how locations are represented and navigated through root, home, current directory, parent directory, absolute paths, relative paths, hidden entries, and working directories.",
  "introduction": [
    "Teach how locations are represented and navigated through root, home, current directory, parent directory, absolute paths, relative paths, hidden entries, and working directories.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain root, home, current directory, parent directory, absolute and relative paths.",
    "Navigate a simulated file tree using pwd, ls, cd, cd .., and cd ~.",
    "Avoid common path mistakes and unsafe system-directory changes."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A static handbook project has HTML, CSS, JavaScript, data, and docs folders. Running a command in the wrong directory changes the result."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Root",
      "Root is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Home directory",
      "Home directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Current directory",
      "Current directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Parent directory",
      "Parent directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Absolute path",
      "Absolute path is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Relative path",
      "Relative path is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Path separator",
      "Path separator is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Hidden entries",
      "Hidden entries is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Working directory",
      "Working directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "path-navigator",
      "title": "Interactive Path Navigator",
      "prompt": "Use simulated commands to move through the file tree.",
      "start": "/home/mike/handbook",
      "tree": [
        "/",
        "|-- home/",
        "|   `-- mike/",
        "|       `-- handbook/",
        "|           |-- index.html",
        "|           `-- css/",
        "`-- var/",
        "    `-- www/"
      ],
      "commands": [
        {
          "label": "pwd",
          "output": "/home/mike/handbook"
        },
        {
          "label": "ls",
          "output": "index.html  css  js  data"
        },
        {
          "label": "cd ..",
          "cwd": "/home/mike",
          "output": "/home/mike"
        },
        {
          "label": "cd ~",
          "cwd": "/home/mike",
          "output": "/home/mike"
        },
        {
          "label": "cd /var/www",
          "cwd": "/var/www",
          "output": "/var/www"
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Paths and Directory Navigation System View",
    "alt": "Paths and Directory Navigation conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce deployments depend on engineers knowing whether they are in the project folder, web root, log directory, or home directory."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "pwd",
      "description": "Print the current working directory.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "pwd",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ls",
      "description": "List directory entries.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ls",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cd ..",
      "description": "Change the shell working directory.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "cd",
          "meaning": "The command or program name."
        },
        {
          "token": "..",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cd ~",
      "description": "Change the shell working directory.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "cd",
          "meaning": "The command or program name."
        },
        {
          "token": "~",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cd \"Project Files\"",
      "description": "Change the shell working directory.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "cd",
          "meaning": "The command or program name."
        },
        {
          "token": "\"Project",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "Files\"",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "paths-and-directory-navigation-lab",
    "goal": "Practice safe observation for Paths and Directory Navigation.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Paths and Directory Navigation?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["creating-moving-copying-and-removing-files"] = {
  "id": "lesson-creating-moving-copying-and-removing-files",
  "slug": "creating-moving-copying-and-removing-files",
  "title": "Creating, Moving, Copying, and Removing Files",
  "summary": "Teach safe file and directory operations with mkdir, touch, cp, mv, rm, rmdir, recursive copies, recursive removals, and recovery planning.",
  "introduction": [
    "Teach safe file and directory operations with mkdir, touch, cp, mv, rm, rmdir, recursive copies, recursive removals, and recovery planning.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Create, copy, move, rename, and remove files conceptually.",
    "Explain why command-line deletion can bypass the recycle bin.",
    "Treat rm -rf as dangerous and not a normal beginner command."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner organizes a practice handbook folder and must avoid deleting the real project or system directories."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Directory",
      "Directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "File",
      "File is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Create",
      "Create is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Copy",
      "Copy is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Move",
      "Move is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Rename",
      "Rename is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Remove",
      "Remove is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Recursive",
      "Recursive is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Target path",
      "Target path is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Backup",
      "Backup is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Git recovery",
      "Git recovery is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "file-operation-simulator",
      "title": "Simulated File Operation Workspace",
      "prompt": "Choose an operation and inspect the simulated tree. No real files are changed.",
      "steps": [
        {
          "label": "Create folder",
          "command": "mkdir notes",
          "note": "Creates a folder named notes.",
          "tree": [
            "practice/",
            "`-- notes/"
          ]
        },
        {
          "label": "Create file",
          "command": "touch notes/todo.txt",
          "note": "Creates an empty file.",
          "tree": [
            "practice/",
            "`-- notes/",
            "    `-- todo.txt"
          ]
        },
        {
          "label": "Copy file",
          "command": "cp notes/todo.txt notes/todo-copy.txt",
          "note": "Copies file content.",
          "tree": [
            "practice/",
            "`-- notes/",
            "    |-- todo.txt",
            "    `-- todo-copy.txt"
          ]
        },
        {
          "label": "Rename file",
          "command": "mv notes/todo-copy.txt notes/archive.txt",
          "note": "mv can rename or move.",
          "tree": [
            "practice/",
            "`-- notes/",
            "    |-- todo.txt",
            "    `-- archive.txt"
          ]
        },
        {
          "label": "Delete file",
          "command": "rm notes/archive.txt",
          "note": "Removal can bypass the recycle bin.",
          "tree": [
            "practice/",
            "`-- notes/",
            "    `-- todo.txt"
          ]
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Creating, Moving, Copying, and Removing Files System View",
    "alt": "Creating, Moving, Copying, and Removing Files conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Deployment scripts copy build artifacts and move files, so engineers must understand targets before running modifying commands."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "mkdir practice",
      "description": "Create directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "mkdir",
          "meaning": "The command or program name."
        },
        {
          "token": "practice",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "mkdir -p practice/notes",
      "description": "Create directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "mkdir",
          "meaning": "The command or program name."
        },
        {
          "token": "-p",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "practice/notes",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "touch notes.txt",
      "description": "Create an empty file or update a timestamp.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "touch",
          "meaning": "The command or program name."
        },
        {
          "token": "notes.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cp notes.txt backup.txt",
      "description": "Copy files or directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "cp",
          "meaning": "The command or program name."
        },
        {
          "token": "notes.txt",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "backup.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cp -r css css-backup",
      "description": "Copy files or directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "cp",
          "meaning": "The command or program name."
        },
        {
          "token": "-r",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "css",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "css-backup",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "mv backup.txt archive.txt",
      "description": "Move or rename files or directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "mv",
          "meaning": "The command or program name."
        },
        {
          "token": "backup.txt",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "archive.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rm archive.txt",
      "description": "Remove files or directories.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rm",
          "meaning": "The command or program name."
        },
        {
          "token": "archive.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Destructive commands can remove data. Verify the current directory and target path first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rm -r old-folder",
      "description": "Remove files or directories.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rm",
          "meaning": "The command or program name."
        },
        {
          "token": "-r",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "old-folder",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Destructive commands can remove data. Verify the current directory and target path first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rm -rf project/",
      "description": "Remove files or directories.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rm",
          "meaning": "The command or program name."
        },
        {
          "token": "-rf",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "project/",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This is intentionally shown as dangerous. Do not use rm -rf as a normal beginner cleanup command.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rmdir empty-folder",
      "description": "Remove an empty directory.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rmdir",
          "meaning": "The command or program name."
        },
        {
          "token": "empty-folder",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Destructive commands can remove data. Verify the current directory and target path first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "creating-moving-copying-and-removing-files-lab",
    "goal": "Practice safe observation for Creating, Moving, Copying, and Removing Files.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Creating, Moving, Copying, and Removing Files?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Creating, Moving, Copying, and Removing Files?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["reading-and-searching-text"] = {
  "id": "lesson-reading-and-searching-text",
  "slug": "reading-and-searching-text",
  "title": "Reading and Searching Text",
  "summary": "Teach efficient reading and searching of files and command output with cat, less, head, tail, grep, find, and wc.",
  "introduction": [
    "Teach efficient reading and searching of files and command output with cat, less, head, tail, grep, find, and wc.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Read and search text without modifying files.",
    "Explain grep versus find.",
    "Use simulated logs to find errors, count matches, inspect latest entries, and find files by extension."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce produces application logs. An engineer needs to inspect recent errors without opening a large file in an editor."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Text file",
      "Text file is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Log file",
      "Log file is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Search pattern",
      "Search pattern is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Latest entries",
      "Latest entries is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Line count",
      "Line count is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "File-system search",
      "File-system search is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Content search",
      "Content search is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Pagination",
      "Pagination is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "log-investigation",
      "title": "Interactive Log Search",
      "prompt": "Select a simulated search result and explain what it proves.",
      "columns": [
        "Task",
        "Command",
        "Simulated result"
      ],
      "rows": [
        [
          "Find error lines",
          "grep \"ERROR\" application.log",
          "2 matching lines"
        ],
        [
          "Count errors",
          "grep \"ERROR\" application.log | wc -l",
          "2"
        ],
        [
          "Latest entries",
          "tail -n 50 application.log",
          "last 50 lines"
        ],
        [
          "Find JSON files",
          "find . -name \"*.json\"",
          "./data/curriculum.json"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Reading and Searching Text System View",
    "alt": "Reading and Searching Text conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Text search helps Atlas Commerce engineers find errors, request IDs, failed jobs, and configuration clues."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cat README.md",
      "description": "Print file content to standard output.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "cat",
          "meaning": "The command or program name."
        },
        {
          "token": "README.md",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "less application.log",
      "description": "Page through text safely.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "less",
          "meaning": "The command or program name."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "head -n 20 application.log",
      "description": "Show the first lines of text.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "head",
          "meaning": "The command or program name."
        },
        {
          "token": "-n",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "20",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "tail -n 50 application.log",
      "description": "Show the last lines of text or follow appended lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "tail",
          "meaning": "The command or program name."
        },
        {
          "token": "-n",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "50",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "grep \"ERROR\" application.log",
      "description": "Search text for matching lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "grep",
          "meaning": "The command or program name."
        },
        {
          "token": "\"ERROR\"",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "find . -name \"*.json\"",
      "description": "Search file-system entries by name or attributes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "find",
          "meaning": "The command or program name."
        },
        {
          "token": ".",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "-name",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "\"*.json\"",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "wc -l application.log",
      "description": "Count lines, words, or bytes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "wc",
          "meaning": "The command or program name."
        },
        {
          "token": "-l",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "reading-and-searching-text-lab",
    "goal": "Practice safe observation for Reading and Searching Text.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Reading and Searching Text?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Reading and Searching Text?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["standard-input-output-and-pipes"] = {
  "id": "lesson-standard-input-output-and-pipes",
  "slug": "standard-input-output-and-pipes",
  "title": "Standard Input, Output, and Pipes",
  "summary": "Explain standard input, standard output, standard error, pipes, redirection, and command composition without rewarding unreadable command chains.",
  "introduction": [
    "Explain standard input, standard output, standard error, pipes, redirection, and command composition without rewarding unreadable command chains.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain stdin, stdout, stderr, pipes, and redirection.",
    "Build a simulated log pipeline.",
    "Avoid overwriting files accidentally with >."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "An engineer filters Atlas Commerce logs for ERROR lines and counts them before deciding whether an incident is growing."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Standard input",
      "Standard input is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Standard output",
      "Standard output is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Standard error",
      "Standard error is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Pipe",
      "Pipe is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Redirection",
      "Redirection is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Command composition",
      "Command composition is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Overwrite",
      "Overwrite is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Append",
      "Append is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "pipe-builder",
      "title": "Interactive Pipe Builder",
      "prompt": "Build a readable log command from stages.",
      "steps": [
        {
          "label": "Read log",
          "command": "cat application.log"
        },
        {
          "label": "Filter errors",
          "command": "grep \"ERROR\""
        },
        {
          "label": "Count results",
          "command": "wc -l"
        }
      ],
      "result": "cat application.log | grep \"ERROR\" | wc -l\nSimpler form: grep \"ERROR\" application.log | wc -l"
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Standard Input, Output, and Pipes System View",
    "alt": "Standard Input, Output, and Pipes conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Pipes help engineers connect small tools while investigating logs, but clarity beats cleverness."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cat application.log | grep \"ERROR\"",
      "description": "Send log output into grep.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "cat",
          "meaning": "The command or program name."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "|",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "grep",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "\"ERROR\"",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "grep \"ERROR\" application.log | wc -l",
      "description": "Search directly and count matching lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "grep",
          "meaning": "The command or program name."
        },
        {
          "token": "\"ERROR\"",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "|",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "wc",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "-l",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "echo \"note\" > notes.txt",
      "description": "Print text or variable values.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "echo",
          "meaning": "The command or program name."
        },
        {
          "token": "\"note\"",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": ">",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "notes.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "> can overwrite a file. Confirm the target first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "echo \"another note\" >> notes.txt",
      "description": "Print text or variable values.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "echo",
          "meaning": "The command or program name."
        },
        {
          "token": "\"another",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "note\"",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": ">>",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "notes.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": ">> appends instead of overwriting.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "command 2> error.log",
      "description": "Redirect standard error to a file.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "command",
          "meaning": "The command or program name."
        },
        {
          "token": "2>",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "error.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "standard-input-output-and-pipes-lab",
    "goal": "Practice safe observation for Standard Input, Output, and Pipes.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Standard Input, Output, and Pipes?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Standard Input, Output, and Pipes?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["process-inspection-and-signals"] = {
  "id": "lesson-process-inspection-and-signals",
  "slug": "process-inspection-and-signals",
  "title": "Process Inspection and Signals",
  "summary": "Teach how engineers inspect and control running processes safely with ps, top, pgrep, kill, graceful shutdown, supervisors, and logs.",
  "introduction": [
    "Teach how engineers inspect and control running processes safely with ps, top, pgrep, kill, graceful shutdown, supervisors, and logs.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Inspect process evidence before terminating anything.",
    "Explain process signals, graceful shutdown, and forceful termination.",
    "Avoid killing critical services casually."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A local server uses excessive CPU, a queue worker is not responding, and multiple matching entries appear in process output."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Process",
      "Process is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "PID",
      "PID is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "CPU usage",
      "CPU usage is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Memory usage",
      "Memory usage is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "pgrep",
      "pgrep is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Signal",
      "Signal is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "SIGTERM",
      "SIGTERM is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "SIGKILL",
      "SIGKILL is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Supervisor",
      "Supervisor is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Log check",
      "Log check is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "process-table",
      "title": "Simulated Process Incident",
      "prompt": "Select a process row and decide what evidence to collect next.",
      "columns": [
        "PID",
        "CPU",
        "State",
        "Command",
        "Next evidence"
      ],
      "rows": [
        [
          "442",
          "96%",
          "running",
          "node local-server.js",
          "Check request logs and command purpose"
        ],
        [
          "510",
          "0%",
          "sleeping",
          "php artisan queue:work",
          "Check worker logs before restart"
        ],
        [
          "602",
          "1%",
          "running",
          "mysqld",
          "Do not kill casually; check database health"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Process Inspection and Signals System View",
    "alt": "Process Inspection and Signals conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce incidents require identifying the correct process, checking logs, and understanding whether a supervisor will restart it."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps aux",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        },
        {
          "token": "aux",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "top",
      "description": "Watch process resource usage interactively.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "top",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "pgrep nginx",
      "description": "Find process IDs by name.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "pgrep",
          "meaning": "The command or program name."
        },
        {
          "token": "nginx",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "kill -15 442",
      "description": "Send a signal to a process.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "kill",
          "meaning": "The command or program name."
        },
        {
          "token": "-15",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "442",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "SIGTERM asks for graceful shutdown. Confirm PID and purpose first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "kill -9 442",
      "description": "Send a signal to a process.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "kill",
          "meaning": "The command or program name."
        },
        {
          "token": "-9",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "442",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "SIGKILL is forceful and should not be the default.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "process-inspection-and-signals-lab",
    "goal": "Practice safe observation for Process Inspection and Signals.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Process Inspection and Signals?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Process Inspection and Signals?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["reading-logs-from-the-terminal"] = {
  "id": "lesson-reading-logs-from-the-terminal",
  "slug": "reading-logs-from-the-terminal",
  "title": "Reading Logs from the Terminal",
  "summary": "Teach logs as evidence through timestamps, levels, messages, context, request IDs, errors, warnings, information, and rotation.",
  "introduction": [
    "Teach logs as evidence through timestamps, levels, messages, context, request IDs, errors, warnings, information, and rotation.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Identify timestamp, severity, message, context, and request ID.",
    "Use tail, grep, and less for log investigation.",
    "Avoid exposing secrets in logs."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce returns errors after deployment. Logs show successful requests, authentication failure, database connection error, queue retry, and restart events."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Timestamp",
      "Timestamp is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Log level",
      "Log level is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Message",
      "Message is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Context",
      "Context is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Request ID",
      "Request ID is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Error",
      "Error is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Warning",
      "Warning is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Information",
      "Information is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Rotation",
      "Rotation is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Ctrl+C",
      "Ctrl+C is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "log-investigation",
      "title": "Interactive Log Investigation",
      "prompt": "Use simulated log events to distinguish cause from symptom.",
      "columns": [
        "Event",
        "Severity",
        "Likely meaning",
        "Evidence value"
      ],
      "rows": [
        [
          "2026-07-22T09:00 request ok",
          "INFO",
          "Successful request",
          "Baseline"
        ],
        [
          "2026-07-22T09:02 login denied",
          "WARN",
          "Authentication failure",
          "Security clue"
        ],
        [
          "2026-07-22T09:04 SQLSTATE connection refused",
          "ERROR",
          "Database connection issue",
          "Likely root cause"
        ],
        [
          "2026-07-22T09:05 queue retry",
          "WARN",
          "Background work delayed",
          "Symptom"
        ],
        [
          "2026-07-22T09:06 deployment restart",
          "INFO",
          "Process restarted",
          "Timeline clue"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Reading Logs from the Terminal System View",
    "alt": "Reading Logs from the Terminal conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Logs help engineers avoid guessing when checkout, login, jobs, or deployment behavior changes."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Logs should not contain passwords, API keys, full payment information, session tokens, or private customer data."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "tail -f application.log",
      "description": "Show the last lines of text or follow appended lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "tail",
          "meaning": "The command or program name."
        },
        {
          "token": "-f",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "grep \"ERROR\" application.log",
      "description": "Search text for matching lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "grep",
          "meaning": "The command or program name."
        },
        {
          "token": "\"ERROR\"",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "less application.log",
      "description": "Page through text safely.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "less",
          "meaning": "The command or program name."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "reading-logs-from-the-terminal-lab",
    "goal": "Practice safe observation for Reading Logs from the Terminal.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Stop tail -f with Ctrl+C. Do not paste private log lines containing passwords, API keys, payment data, or session tokens."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Reading Logs from the Terminal?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["safe-terminal-practices"] = {
  "id": "lesson-safe-terminal-practices",
  "slug": "safe-terminal-practices",
  "title": "Safe Terminal Practices",
  "summary": "Build judgment before learners use destructive, privileged, recursive, wildcard, network, or unknown commands.",
  "introduction": [
    "Build judgment before learners use destructive, privileged, recursive, wildcard, network, or unknown commands.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Classify command risk using text labels.",
    "Use a command review checklist before running commands.",
    "Improve AI prompts so generated terminal advice is explainable and safe."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "An AI assistant suggests a permissions command. The learner must understand the command, path, recursion, privilege, and recovery plan before using it."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Read the command",
      "Read the command is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Target path",
      "Target path is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Current directory",
      "Current directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Preview",
      "Preview is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Backup",
      "Backup is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Root",
      "Root is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Wildcard",
      "Wildcard is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Quotes",
      "Quotes is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Exit output",
      "Exit output is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Recovery plan",
      "Recovery plan is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "AI prompt safety",
      "AI prompt safety is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "risk-review",
      "title": "Interactive Risk Review",
      "prompt": "Classify each command by the highest relevant risk.",
      "items": [
        {
          "action": "ls -la",
          "answer": "Read-only",
          "reason": "Lists files without changing them."
        },
        {
          "action": "cat notes.txt",
          "answer": "Read-only",
          "reason": "Reads text."
        },
        {
          "action": "mv file.txt archive/",
          "answer": "Low-risk modification",
          "reason": "Moves a file and can break references."
        },
        {
          "action": "rm file.txt",
          "answer": "Destructive",
          "reason": "Deletes a file."
        },
        {
          "action": "rm -rf project/",
          "answer": "Destructive",
          "reason": "Recursive forced deletion is dangerous."
        },
        {
          "action": "sudo chown -R user:user /var/www",
          "answer": "Privileged",
          "reason": "Elevated recursive ownership change can affect services."
        },
        {
          "action": "curl https://example.com",
          "answer": "Network access",
          "reason": "Contacts a remote system."
        }
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Safe Terminal Practices System View",
    "alt": "Safe Terminal Practices conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Safe terminal practice protects Atlas Commerce deployment files, logs, services, and customer-impacting systems."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix permissions.",
    "better": "I have a static website in /var/www/handbook. Nginx needs read access. My deployment user should keep ownership. Current output from ls -ld is: drwx------ mike mike /var/www/handbook. Explain the safest ownership and permission approach. Do not suggest chmod 777. Explain each command before showing it.",
    "why": "The improved prompt gives context, constraints, current evidence, and rejects unsafe shortcuts."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ls -la",
      "description": "List directory entries.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ls",
          "meaning": "The command or program name."
        },
        {
          "token": "-la",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "cat notes.txt",
      "description": "Print file content to standard output.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "cat",
          "meaning": "The command or program name."
        },
        {
          "token": "notes.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "mv file.txt archive/",
      "description": "Move or rename files or directories.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "mv",
          "meaning": "The command or program name."
        },
        {
          "token": "file.txt",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "archive/",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rm file.txt",
      "description": "Remove files or directories.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rm",
          "meaning": "The command or program name."
        },
        {
          "token": "file.txt",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Destructive commands can remove data. Verify the current directory and target path first.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "rm -rf project/",
      "description": "Remove files or directories.",
      "risk": [
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "rm",
          "meaning": "The command or program name."
        },
        {
          "token": "-rf",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "project/",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Dangerous example. Verify path, backup, and intent; do not use as routine cleanup.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "sudo chown -R user:user /var/www",
      "description": "Run a terminal command.",
      "risk": [
        "Privileged",
        "Destructive"
      ],
      "anatomy": [
        {
          "token": "sudo",
          "meaning": "The command or program name."
        },
        {
          "token": "chown",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "-R",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "user:user",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "/var/www",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Privileged recursive ownership changes require precise service-user reasoning.",
      "recovery": "Stop and restore from backup, Git, or a known copy if you removed the wrong target.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "curl https://example.com",
      "description": "Run a terminal command.",
      "risk": [
        "Network access"
      ],
      "anatomy": [
        {
          "token": "curl",
          "meaning": "The command or program name."
        },
        {
          "token": "https://example.com",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "safe-terminal-practices-lab",
    "goal": "Practice safe observation for Safe Terminal Practices.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Safe Terminal Practices?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Safe Terminal Practices?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Which statement best fits Safe Terminal Practices?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["remote-servers-and-ssh"] = {
  "id": "lesson-remote-servers-and-ssh",
  "slug": "remote-servers-and-ssh",
  "title": "Remote Servers and SSH",
  "summary": "Explain remote command-line access using SSH, including local client, remote server, hostname, IP address, port, user account, encrypted session, authentication, and host keys.",
  "introduction": [
    "Explain remote command-line access using SSH, including local client, remote server, hostname, IP address, port, user account, encrypted session, authentication, and host keys.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Trace the SSH connection flow.",
    "Explain host-key verification without disabling it.",
    "Use safe example domains and documentation IP addresses."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "An engineer connects to an Atlas Commerce server to inspect service status, deployment files, logs, queue workers, and recent behavior."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Local client",
      "Local client is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Remote server",
      "Remote server is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Hostname",
      "Hostname is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "IP address",
      "IP address is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Port",
      "Port is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "User account",
      "User account is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Authentication",
      "Authentication is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Encrypted connection",
      "Encrypted connection is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Session",
      "Session is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Host key",
      "Host key is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "ssh-flow",
      "title": "Interactive SSH Flow",
      "steps": [
        [
          "Local Computer",
          "The SSH client starts on the learner's machine.",
          "The local machine initiates the connection.",
          "Wrong client or network can block access."
        ],
        [
          "Resolve Host",
          "The hostname resolves to an address.",
          "The client needs a destination.",
          "DNS or typo failures stop connection."
        ],
        [
          "Connect to SSH Port",
          "The client connects to port 22 or a configured port.",
          "SSH listens on a network port.",
          "Firewall or wrong port can block it."
        ],
        [
          "Verify Server Identity",
          "The host key is checked.",
          "This helps detect impersonation.",
          "Do not blindly disable host-key checking."
        ],
        [
          "Authenticate User",
          "Password or key authentication proves user access.",
          "The server must trust the user.",
          "Wrong account or key denies access."
        ],
        [
          "Open Remote Shell",
          "The remote shell accepts commands.",
          "Commands now run on the remote server.",
          "Always confirm host and user."
        ]
      ]
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Remote Servers and SSH System View",
    "alt": "Remote Servers and SSH conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "SSH lets an engineer inspect a remote Atlas Commerce server without building an admin dashboard."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Host-key verification matters. Do not teach or use blind host-key disabling as a shortcut."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ssh user@example.com",
      "description": "Open an encrypted remote shell session.",
      "risk": [
        "Network access"
      ],
      "anatomy": [
        {
          "token": "ssh",
          "meaning": "The command or program name."
        },
        {
          "token": "user@example.com",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ssh user@192.0.2.10",
      "description": "Open an encrypted remote shell session.",
      "risk": [
        "Network access"
      ],
      "anatomy": [
        {
          "token": "ssh",
          "meaning": "The command or program name."
        },
        {
          "token": "user@192.0.2.10",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "192.0.2.10 is a documentation IP, not a real server.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ssh -p 2222 user@example.com",
      "description": "Connect to a non-default SSH port.",
      "risk": [
        "Network access"
      ],
      "anatomy": [
        {
          "token": "ssh",
          "meaning": "The command or program name."
        },
        {
          "token": "-p",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "2222",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "user@example.com",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "remote-servers-and-ssh-lab",
    "goal": "Practice safe observation for Remote Servers and SSH.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Remote Servers and SSH?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["ssh-keys-conceptually"] = {
  "id": "lesson-ssh-keys-conceptually",
  "slug": "ssh-keys-conceptually",
  "title": "SSH Keys Conceptually",
  "summary": "Explain public-key SSH authentication through key pairs, private keys, public keys, authorized keys, passphrases, rotation, and revocation.",
  "introduction": [
    "Explain public-key SSH authentication through key pairs, private keys, public keys, authorized keys, passphrases, rotation, and revocation.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain public and private keys without deep cryptography.",
    "Describe authorized keys and passphrases.",
    "Avoid sharing, uploading, committing, or reusing private keys forever."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner configures key-based access for a remote server and must keep the private key on the local device."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Key pair",
      "Key pair is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Private key",
      "Private key is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Public key",
      "Public key is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Authorized key",
      "Authorized key is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Passphrase",
      "Passphrase is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Authentication",
      "Authentication is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Key rotation",
      "Key rotation is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Revocation",
      "Revocation is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Private key permissions",
      "Private key permissions is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "os-comparison",
      "title": "SSH Key Placement",
      "prompt": "Compare where each key material belongs.",
      "columns": [
        "Item",
        "Location",
        "Sharing rule",
        "Purpose"
      ],
      "rows": [
        [
          "Private key",
          "Local device",
          "Never upload or share",
          "Proves identity"
        ],
        [
          "Public key",
          "Remote authorized_keys",
          "Can be copied to servers",
          "Identifies trusted key"
        ],
        [
          "Passphrase",
          "User memory / password manager",
          "Protect carefully",
          "Protects private key use"
        ],
        [
          "Revoked key",
          "Removed from server",
          "No longer trusted",
          "Ends access"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "SSH Key Concept",
    "alt": "Private key stays local; public key is stored on the remote server.",
    "nodes": [
      "Private Key stays on local device",
      "Public Key stored on remote server"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce server access should use controlled keys, passphrases where practical, and revocation when people or devices change."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Sharing the private key.",
    "Committing keys to Git.",
    "Losing all access without recovery.",
    "Reusing one key everywhere forever.",
    "Disabling password access before confirming key access."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ssh-keygen",
      "description": "Create an SSH key pair.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "ssh-keygen",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ssh-copy-id user@example.com",
      "description": "Install a public SSH key on a remote account.",
      "risk": [
        "Network access"
      ],
      "anatomy": [
        {
          "token": "ssh-copy-id",
          "meaning": "The command or program name."
        },
        {
          "token": "user@example.com",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "ssh-copy-id may not exist on every platform. Manual public-key installation methods also exist.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "ssh-keys-conceptually-lab",
    "goal": "Practice safe observation for SSH Keys Conceptually.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits SSH Keys Conceptually?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["package-managers"] = {
  "id": "lesson-package-managers",
  "slug": "package-managers",
  "title": "Package Managers",
  "summary": "Explain package managers as systems for discovering, installing, updating, upgrading, and removing software and dependencies.",
  "introduction": [
    "Explain package managers as systems for discovering, installing, updating, upgrading, and removing software and dependencies.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Distinguish packages, repositories, versions, dependencies, lock files, update, and upgrade.",
    "Compare system package managers and project dependency managers.",
    "Avoid running install commands without checking the operating system."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "An engineer needs Git locally, Nginx on a Linux server, and project dependencies managed separately."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Package",
      "Package is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Repository",
      "Repository is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Version",
      "Version is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Dependency",
      "Dependency is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Lock file",
      "Lock file is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Update",
      "Update is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Upgrade",
      "Upgrade is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "System package manager",
      "System package manager is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Project package manager",
      "Project package manager is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "package-comparison",
      "title": "Package Manager Comparison",
      "prompt": "Compare what different tools manage.",
      "columns": [
        "Tool",
        "Common platform",
        "Manages",
        "Typical risk"
      ],
      "rows": [
        [
          "apt",
          "Debian / Ubuntu",
          "System packages",
          "Privileged package installation"
        ],
        [
          "dnf",
          "Fedora / RHEL family",
          "System packages",
          "Privileged package installation"
        ],
        [
          "Homebrew",
          "macOS / Linux",
          "Developer tools",
          "Local package installation"
        ],
        [
          "Winget",
          "Windows",
          "Windows applications",
          "Package installation"
        ],
        [
          "Composer",
          "PHP projects",
          "Project dependencies",
          "Lock-file changes"
        ],
        [
          "npm",
          "JavaScript projects",
          "Project dependencies",
          "Lock-file changes"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Package Managers System View",
    "alt": "Package Managers conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce might use system package tools for server software and project dependency tools for application packages."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux"
      ],
      "command": "sudo apt update",
      "description": "Update package indexes on Debian or Ubuntu.",
      "risk": [
        "Privileged",
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "sudo",
          "meaning": "The command or program name."
        },
        {
          "token": "apt",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "update",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Privileged commands can affect the whole system. Understand the target and reason before using elevation.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux"
      ],
      "command": "sudo apt install nginx",
      "description": "Install Nginx after confirming the operating system.",
      "risk": [
        "Privileged",
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "sudo",
          "meaning": "The command or program name."
        },
        {
          "token": "apt",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "install",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "nginx",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Privileged commands can affect the whole system. Understand the target and reason before using elevation.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "macOS"
      ],
      "command": "brew install git",
      "description": "Install Git using Homebrew.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "brew",
          "meaning": "The command or program name."
        },
        {
          "token": "install",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "git",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Windows PowerShell"
      ],
      "command": "winget install Git.Git",
      "description": "Install Git using Winget.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "winget",
          "meaning": "The command or program name."
        },
        {
          "token": "install",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "Git.Git",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "package-managers-lab",
    "goal": "Practice safe observation for Package Managers.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Package Managers?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["composer-and-npm-as-dependency-tools"] = {
  "id": "lesson-composer-and-npm-as-dependency-tools",
  "slug": "composer-and-npm-as-dependency-tools",
  "title": "Composer and npm as Dependency Tools",
  "summary": "Explain Composer and npm as project dependency managers, including manifests, lock files, install, update, dependency trees, scripts, and audits.",
  "introduction": [
    "Explain Composer and npm as project dependency managers, including manifests, lock files, install, update, dependency trees, scripts, and audits.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Explain manifests, direct dependencies, transitive dependencies, semantic versions, lock files, scripts, and security advisories.",
    "Distinguish install from update.",
    "Avoid blind production updates and casual lock-file deletion."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce uses Composer for backend dependencies and npm for frontend tooling. Install and update have different risk profiles."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Manifest file",
      "Manifest file is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Dependency",
      "Dependency is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Development dependency",
      "Development dependency is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Semantic version",
      "Semantic version is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Lock file",
      "Lock file is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Install",
      "Install is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Update",
      "Update is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Dependency tree",
      "Dependency tree is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Script",
      "Script is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Security advisory",
      "Security advisory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "dependency-graph",
      "title": "Dependency Graph Explorer",
      "prompt": "Read direct versus transitive dependencies.",
      "columns": [
        "Node",
        "Relationship",
        "Why it matters"
      ],
      "rows": [
        [
          "Your Project",
          "Root",
          "Contains manifests and lock files"
        ],
        [
          "Direct Dependency A",
          "Declared",
          "Chosen by the project"
        ],
        [
          "Transitive Dependency B",
          "Required by A",
          "Can still affect security and behavior"
        ],
        [
          "Direct Dependency C",
          "Declared",
          "May bring scripts or subdependencies"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Composer and npm as Dependency Tools System View",
    "alt": "Composer and npm as Dependency Tools conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Dependency tools help Atlas Commerce reproduce installs, review audits, and avoid surprise changes during deployments."
  },
  "seniorEngineerThinking": [
    "Observation comes before modification.",
    "The current user, directory, target path, and risk level matter.",
    "A good command explanation includes what it reads or changes and how to recover from mistakes."
  ],
  "commonMistakes": [
    "Deleting lock files casually.",
    "Running updates directly in production.",
    "Ignoring audit reports.",
    "Installing unnecessary packages.",
    "Assuming popularity means trust.",
    "Committing dependency folders when project conventions say not to."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "composer install",
      "description": "Manage PHP project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "composer",
          "meaning": "The command or program name."
        },
        {
          "token": "install",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "composer update",
      "description": "Manage PHP project dependencies.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "composer",
          "meaning": "The command or program name."
        },
        {
          "token": "update",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Update can select newer versions and modify the lock file. Review changes before deployment.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "composer show",
      "description": "Manage PHP project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "composer",
          "meaning": "The command or program name."
        },
        {
          "token": "show",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "composer audit",
      "description": "Manage PHP project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "composer",
          "meaning": "The command or program name."
        },
        {
          "token": "audit",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "npm install",
      "description": "Manage JavaScript project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "npm",
          "meaning": "The command or program name."
        },
        {
          "token": "install",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "npm update",
      "description": "Manage JavaScript project dependencies.",
      "risk": [
        "Low-risk modification"
      ],
      "anatomy": [
        {
          "token": "npm",
          "meaning": "The command or program name."
        },
        {
          "token": "update",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Update can alter dependency versions. Review package and lock-file changes.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "npm list",
      "description": "Manage JavaScript project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "npm",
          "meaning": "The command or program name."
        },
        {
          "token": "list",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "npm audit",
      "description": "Manage JavaScript project dependencies.",
      "risk": [
        "Package installation"
      ],
      "anatomy": [
        {
          "token": "npm",
          "meaning": "The command or program name."
        },
        {
          "token": "audit",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "composer-and-npm-as-dependency-tools-lab",
    "goal": "Practice safe observation for Composer and npm as Dependency Tools.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Composer and npm as Dependency Tools?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Composer and npm as Dependency Tools?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
  window.LessonContentRegistry["inspecting-a-remote-server-safely"] = {
  "id": "lesson-inspecting-a-remote-server-safely",
  "slug": "inspecting-a-remote-server-safely",
  "title": "Inspecting a Remote Server Safely",
  "summary": "Teach a read-first, evidence-first workflow for basic remote server investigation after deployment errors.",
  "introduction": [
    "Teach a read-first, evidence-first workflow for basic remote server investigation after deployment errors.",
    "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
  ],
  "learningObjectives": [
    "Follow a safe investigation order before making changes.",
    "Use read-first server commands to inspect host, user, directory, uptime, disk, memory, services, logs, and deployments.",
    "Form hypotheses from evidence rather than restarting everything."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce returns errors after a deployment. Disk is 98 percent full, Nginx is active, the application process is running, and logs show write failures."
  },
  "whyThisExists": [
    "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."
  ],
  "problemItSolves": [
    "The concept helps learners understand what is happening before they copy commands or modify a system."
  ],
  "keyConcepts": [
    [
      "Correct server",
      "Correct server is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Current user",
      "Current user is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Current directory",
      "Current directory is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Disk usage",
      "Disk usage is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Memory usage",
      "Memory usage is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Running services",
      "Running services is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Logs",
      "Logs is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Recent deployments",
      "Recent deployments is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Hypothesis",
      "Hypothesis is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ],
    [
      "Smallest safe change",
      "Smallest safe change is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "log-investigation",
      "title": "Interactive Incident Investigation",
      "prompt": "Select the evidence most relevant to the simulated incident.",
      "columns": [
        "Evidence",
        "Value",
        "Likely implication"
      ],
      "rows": [
        [
          "Disk usage",
          "98% full",
          "Highly relevant to write failures"
        ],
        [
          "Nginx",
          "active",
          "Web server is probably running"
        ],
        [
          "Application process",
          "running",
          "Process existence does not prove health"
        ],
        [
          "Logs",
          "write failed: no space left",
          "Likely root cause"
        ],
        [
          "Recent deploy",
          "10 minutes ago",
          "Timeline clue"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Inspecting a Remote Server Safely System View",
    "alt": "Inspecting a Remote Server Safely conceptual diagram",
    "nodes": [
      "Learner",
      "Terminal",
      "Operating System",
      "Files / Processes / Network"
    ]
  },
  "pseudocode": [
    "WHEN investigating a system",
    "    identify the current user and location",
    "    inspect before changing",
    "    read command output carefully",
    "    make the smallest safe change only when justified",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "The safe path is observation, evidence preservation, notes, and smallest justified changes rather than restarting every service."
  },
  "seniorEngineerThinking": [
    "Confirm the correct server and current user.",
    "Preserve evidence and record commands.",
    "Avoid restarting everything.",
    "Know whether monitoring exists.",
    "Confirm before changing permissions.",
    "Escalate when risk is unclear."
  ],
  "commonMistakes": [
    "Pasting commands without reading them.",
    "Using elevated privileges as a default.",
    "Ignoring the current directory.",
    "Treating simulated output as a promise about every machine."
  ],
  "debuggingGuide": [
    "Confirm the command target.",
    "Read the output.",
    "Compare expected and actual behavior.",
    "Stop before destructive or privileged actions if the evidence is unclear."
  ],
  "securityNotes": [
    "Do not place secrets in static files, screenshots, command examples, logs, or public repositories."
  ],
  "performanceNotes": [
    "Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."
  ],
  "productionNotes": [
    "Production systems need careful read-first investigation, notes, backups, and coordination before changes."
  ],
  "aiPromptExamples": {
    "poor": "Give me a command to fix it.",
    "better": "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.",
    "why": "The improved prompt asks for reasoning and safety checks before commands."
  },
  "terminalCommands": [
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "hostname",
      "description": "Print the system host name.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "hostname",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "whoami",
      "description": "Print the current user name.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "whoami",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "pwd",
      "description": "Print the current working directory.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "pwd",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "uptime",
      "description": "Show how long the system has been running and load averages.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "uptime",
          "meaning": "The command or program name."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "df -h",
      "description": "Show file-system disk usage.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "df",
          "meaning": "The command or program name."
        },
        {
          "token": "-h",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "free -h",
      "description": "Show memory usage on many Linux systems.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "free",
          "meaning": "The command or program name."
        },
        {
          "token": "-h",
          "meaning": "An option that changes command behavior."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "ps aux",
      "description": "Inspect running processes.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "ps",
          "meaning": "The command or program name."
        },
        {
          "token": "aux",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux"
      ],
      "command": "systemctl status nginx",
      "description": "Inspect or control systemd services.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "systemctl",
          "meaning": "The command or program name."
        },
        {
          "token": "status",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "nginx",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "Common on systemd Linux systems, but not every server uses systemd or Nginx.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    },
    {
      "type": "terminal-command",
      "platform": [
        "Linux",
        "macOS",
        "WSL",
        "Git Bash"
      ],
      "command": "tail -n 100 application.log",
      "description": "Show the last lines of text or follow appended lines.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "tail",
          "meaning": "The command or program name."
        },
        {
          "token": "-n",
          "meaning": "An option that changes command behavior."
        },
        {
          "token": "100",
          "meaning": "An argument or path the command operates on."
        },
        {
          "token": "application.log",
          "meaning": "An argument or path the command operates on."
        }
      ],
      "expectedOutput": "Example output is simulated for learning and will differ on your machine.",
      "outputExplanation": "Read the output as evidence about the current system state before changing anything.",
      "commonError": "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
      "safeUse": "This example is safe to inspect because it does not require secret values or automatic execution.",
      "recovery": "If the output is unexpected, stop and inspect the current directory, user, and command spelling.",
      "tryIt": "Run only in a safe practice folder or controlled learning environment."
    }
  ],
  "handsOnLab": {
    "id": "inspecting-a-remote-server-safely-lab",
    "goal": "Practice safe observation for Inspecting a Remote Server Safely.",
    "steps": [
      "Open a terminal or operating-system tool.",
      "Run only read-only commands or use a safe practice folder.",
      "Write down what the output proves and what it does not prove."
    ],
    "observe": [
      "Current user",
      "Current directory",
      "Command target",
      "Risk label"
    ],
    "expected": "The learner can explain the command or observation before changing anything.",
    "safety": "Do not use real secrets, production systems, or destructive targets for practice."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "What is the safest next step?",
    "answers": [
      [
        "Inspect first and explain the target.",
        true,
        "Evidence-first work reduces accidental damage."
      ],
      [
        "Use sudo immediately.",
        false,
        "Elevation is not a diagnosis."
      ],
      [
        "Ignore the output.",
        false,
        "Output is evidence."
      ],
      [
        "Run a destructive command in the project root.",
        false,
        "Destructive work requires strong verification and recovery."
      ]
    ],
    "reasoning": "Safe terminal work is deliberate."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What should an engineer do before changing a system from the terminal?",
        "options": [
          "Collect evidence and understand the target.",
          "Run the fastest command found online.",
          "Use privileged mode for every command.",
          "Delete temporary files first."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Why is simulated output labeled in this handbook?",
        "options": [
          "So learners know the browser is not executing real commands.",
          "Because commands are fake.",
          "So output can be ignored.",
          "Because logs never differ."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What makes a command safer to copy?",
        "options": [
          "The command, target, risk, and recovery path are understood.",
          "It uses many options.",
          "It includes sudo.",
          "It came from a short answer."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "How should Atlas Commerce examples be used?",
        "options": [
          "As a realistic reference system for reasoning.",
          "As a required app to build.",
          "As a place for real credentials.",
          "As a production server to modify."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Copy every command.",
          "Finish the lab only.",
          "Open the glossary."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which statement best fits Inspecting a Remote Server Safely?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which statement best fits Inspecting a Remote Server Safely?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      },
      {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Which statement best fits Inspecting a Remote Server Safely?",
        "options": [
          "It describes a system responsibility and should be reasoned about before use.",
          "It is magic syntax to memorize.",
          "It always works identically on every operating system.",
          "It should be used to bypass evidence collection."
        ],
        "answerIndex": 0,
        "explanation": "This answer follows the lesson's evidence-first terminal model."
      }
    ]
  },
  "summaryPoints": [
    "Terminal commands are real tools for inspecting system behavior.",
    "The browser interactions in this handbook simulate output and never execute shell commands.",
    "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Ubuntu Server Guide",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "title": "GNU Coreutils Manual",
      "url": "https://www.gnu.org/software/coreutils/manual/"
    },
    {
      "title": "OpenSSH Manual Pages",
      "url": "https://www.openssh.com/manual.html"
    }
  ]
};
})();
