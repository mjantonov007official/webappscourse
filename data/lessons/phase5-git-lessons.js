(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["why-version-control-exists"] = {
  "id": "lesson-why-version-control-exists",
  "slug": "why-version-control-exists",
  "title": "Why Version Control Exists",
  "summary": "Explain version control as a system for recording, comparing, restoring, releasing, and collaborating on change.",
  "introduction": [
    "Explain version control as a system for recording, comparing, restoring, releasing, and collaborating on change.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain versions, snapshots, history, authorship, comparison, recovery, collaboration, and repositories.",
    "Compare manual file copies with a commit timeline.",
    "Connect meaningful commits to evidence and recovery."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "The handbook project changes over time: a lesson is edited, CSS is redesigned, JavaScript breaks, a previous version is needed, another contributor proposes a change, and a release must be identified."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Version",
      "Version is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Change",
      "Change is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Snapshot",
      "Snapshot is part of the repository-state model engineers use to reason about change."
    ],
    [
      "History",
      "History is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Author",
      "Author is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Timestamp",
      "Timestamp is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Comparison",
      "Comparison is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Recovery",
      "Recovery is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Collaboration",
      "Collaboration is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Repository",
      "Repository is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "commit-timeline",
      "title": "Manual Copies Versus Version Control",
      "prompt": "Compare unreliable file copies with a clear commit timeline.",
      "columns": [
        "Approach",
        "Example",
        "Problem",
        "Better evidence"
      ],
      "rows": [
        [
          "Manual copies",
          "handbook-final-real.html",
          "Names do not explain what changed",
          "Commit message and diff"
        ],
        [
          "Manual copies",
          "handbook-final-fixed.html",
          "Hard to know latest truth",
          "Ordered history"
        ],
        [
          "Version control",
          "A Create foundation",
          "Traceable snapshot",
          "Author, time, diff"
        ],
        [
          "Version control",
          "D Fix quiz score persistence",
          "Clear recovery point",
          "Commit hash and parent"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "A checkout bug can be compared against the previous release to identify which change introduced it."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git log --oneline",
      "description": "Read commit history.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "log",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--oneline",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "why-version-control-exists-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Why Version Control Exists?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["repositories-and-working-trees"] = {
  "id": "lesson-repositories-and-working-trees",
  "slug": "repositories-and-working-trees",
  "title": "Repositories and Working Trees",
  "summary": "Explain the relationship between project files, the working tree, tracked files, ignored files, and Git's stored metadata.",
  "introduction": [
    "Explain the relationship between project files, the working tree, tracked files, ignored files, and Git's stored metadata.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Define repository, working tree, .git directory, tracked, untracked, modified, ignored, and repository root.",
    "Explain that Git is not GitHub.",
    "Initialize a safe practice repository."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A learner creates git-practice, runs git init, and learns that no commit or GitHub upload exists yet."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Repository",
      "Repository is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Working tree",
      "Working tree is part of the repository-state model engineers use to reason about change."
    ],
    [
      ".git directory",
      ".git directory is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Tracked file",
      "Tracked file is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Untracked file",
      "Untracked file is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Modified file",
      "Modified file is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Ignored file",
      "Ignored file is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Repository root",
      "Repository root is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "repository-state-explorer",
      "title": "Repository State Explorer",
      "prompt": "Select files and inspect their simulated Git state.",
      "columns": [
        "File",
        "State",
        "Meaning"
      ],
      "rows": [
        [
          "index.html",
          "Tracked and unchanged",
          "Git knows the file and sees no changes"
        ],
        [
          "lesson.css",
          "Modified",
          "Tracked file changed in working tree"
        ],
        [
          "notes.txt",
          "Untracked",
          "Git sees it but does not track it yet"
        ],
        [
          "debug.log",
          "Ignored",
          "Ignore rules exclude it"
        ]
      ],
      "selectable": true
    },
    {
      "type": "git-practice-simulator",
      "title": "Practice Repository Simulator",
      "prompt": "Try guided repository actions without executing Git."
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce can have a local Git repository even before a GitHub remote exists."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git init",
      "description": "Create Git metadata in the current directory.",
      "repositoryEffect": "Creates a .git metadata directory in the current folder. It does not create a commit or upload anything.",
      "risk": [
        "Changes local history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "init",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "repositories-and-working-trees-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Repositories and Working Trees?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["staging-changes"] = {
  "id": "lesson-staging-changes",
  "slug": "staging-changes",
  "title": "Staging Changes",
  "summary": "Explain the staging area as a deliberate preparation space for the next commit, including diffs, partial commits, and unstaging.",
  "introduction": [
    "Explain the staging area as a deliberate preparation space for the next commit, including diffs, partial commits, and unstaging.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain working tree, staging area, index, selected changes, unstage, and diff.",
    "Distinguish git diff from git diff --staged.",
    "Avoid staging secrets and logs with git add ."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Four files changed: lesson.json, lesson.css, .env, and debug.log. Only intentional lesson files should be staged."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Working tree",
      "Working tree is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Staging area",
      "Staging area is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Index",
      "Index is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Selected changes",
      "Selected changes is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Partial commit",
      "Partial commit is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Unstage",
      "Unstage is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Diff",
      "Diff is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "staging-simulator",
      "title": "Selective Staging Simulator",
      "prompt": "Choose what should enter the next commit.",
      "columns": [
        "File",
        "Recommended action",
        "Reason"
      ],
      "rows": [
        [
          "lesson.json",
          "Stage",
          "Intentional content change"
        ],
        [
          "lesson.css",
          "Stage if related",
          "Include only if part of same purpose"
        ],
        [
          ".env",
          "Do not stage",
          "May contain secrets"
        ],
        [
          "debug.log",
          "Do not stage",
          "Generated runtime noise"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce changes should stage only intentional files, never environment secrets or noisy logs."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git add file.txt",
      "description": "Move selected changes into the staging area.",
      "repositoryEffect": "Repository effect: Changes staging area.",
      "risk": [
        "Changes staging area"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "add",
          "meaning": "The Git subcommand."
        },
        {
          "token": "file.txt",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git add .",
      "description": "Move selected changes into the staging area.",
      "repositoryEffect": "Repository effect: Changes staging area.",
      "risk": [
        "Changes staging area"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "add",
          "meaning": "The Git subcommand."
        },
        {
          "token": ".",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "git add . can stage files you did not intend. Inspect git status before and after.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git diff",
      "description": "Compare changes in the working tree or staging area.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "diff",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git diff --staged",
      "description": "Compare changes in the working tree or staging area.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "diff",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--staged",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git restore --staged file.txt",
      "description": "Restore working files or unstage changes.",
      "repositoryEffect": "Removes a file from staging without discarding the working file changes.",
      "risk": [
        "Changes staging area",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "restore",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--staged",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "file.txt",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "staging-changes-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Staging Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Staging Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["commits-and-commit-history"] = {
  "id": "lesson-commits-and-commit-history",
  "slug": "commits-and-commit-history",
  "title": "Commits and Commit History",
  "summary": "Explain commits as meaningful snapshots with hashes, parents, authors, messages, atomic scope, and inspectable history.",
  "introduction": [
    "Explain commits as meaningful snapshots with hashes, parents, authors, messages, atomic scope, and inspectable history.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Define commit, snapshot, hash, parent, author, message, history, atomic change, and clean working tree.",
    "Inspect commit timelines.",
    "Write useful commit messages."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "The handbook history records foundation work, curriculum page, HTTP lesson, and quiz persistence fixes."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Commit",
      "Commit is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Snapshot",
      "Snapshot is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Commit hash",
      "Commit hash is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Parent commit",
      "Parent commit is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Author",
      "Author is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Message",
      "Message is part of the repository-state model engineers use to reason about change."
    ],
    [
      "History",
      "History is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Atomic change",
      "Atomic change is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Clean working tree",
      "Clean working tree is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "commit-timeline",
      "title": "Interactive Commit Timeline",
      "prompt": "Inspect simulated commits and their purpose.",
      "columns": [
        "Commit",
        "Message",
        "Parent",
        "Files changed"
      ],
      "rows": [
        [
          "A",
          "Create handbook foundation",
          "none",
          "index.html, css/base.css"
        ],
        [
          "B",
          "Add curriculum page",
          "A",
          "handbook.html"
        ],
        [
          "C",
          "Add HTTP request lesson",
          "B",
          "lesson.html"
        ],
        [
          "D",
          "Fix quiz score persistence",
          "C",
          "js/storage.js, js/lesson.js"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Meaningful commits help Atlas Commerce engineers identify when a checkout bug was introduced."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git commit -m \"Add HTTP request lesson quiz\"",
      "description": "Record staged changes as a local history snapshot.",
      "repositoryEffect": "Repository effect: Creates history.",
      "risk": [
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "commit",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-m",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "\"Add",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "HTTP",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "request",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "lesson",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "quiz\"",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git log",
      "description": "Read commit history.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "log",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git log --oneline",
      "description": "Read commit history.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "log",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--oneline",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git show",
      "description": "Inspect one commit or object.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "show",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "commits-and-commit-history-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Commits and Commit History?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Commits and Commit History?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["branches"] = {
  "id": "lesson-branches",
  "slug": "branches",
  "title": "Branches",
  "summary": "Explain branches as movable labels for parallel work, including current branch, base branch, feature branch, divergence, switching, and deletion.",
  "introduction": [
    "Explain branches as movable labels for parallel work, including current branch, base branch, feature branch, divergence, switching, and deletion.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain branch pointers and divergence.",
    "Use git switch for modern branch movement.",
    "Understand that a branch does not duplicate the entire project folder."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A search feature is developed while main remains stable."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Branch",
      "Branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Current branch",
      "Current branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Branch pointer",
      "Branch pointer is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Base branch",
      "Base branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Feature branch",
      "Feature branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Main branch",
      "Main branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Divergence",
      "Divergence is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Switch",
      "Switch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Delete branch",
      "Delete branch is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "branch-graph",
      "title": "Branch Graph Explorer",
      "prompt": "Read the graph as branch labels pointing at commits.",
      "columns": [
        "Commit",
        "Branch label",
        "Visible meaning"
      ],
      "rows": [
        [
          "A-B-C",
          "main",
          "Stable handbook line"
        ],
        [
          "D-E",
          "feature/search",
          "Parallel search work"
        ],
        [
          "C",
          "shared ancestor",
          "Feature branched from here"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce can develop a checkout fix and a search feature on separate branches."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git branch",
      "description": "List, create, or delete branch labels.",
      "repositoryEffect": "Repository effect: Changes branch.",
      "risk": [
        "Changes branch"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "branch",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git switch -c feature/search",
      "description": "Change the current branch.",
      "repositoryEffect": "Repository effect: Changes branch, Changes working files.",
      "risk": [
        "Changes branch",
        "Changes working files"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "switch",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-c",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "feature/search",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git switch main",
      "description": "Change the current branch.",
      "repositoryEffect": "Repository effect: Changes branch, Changes working files.",
      "risk": [
        "Changes branch",
        "Changes working files"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "switch",
          "meaning": "The Git subcommand."
        },
        {
          "token": "main",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git branch -d feature/search",
      "description": "List, create, or delete branch labels.",
      "repositoryEffect": "Repository effect: Changes branch.",
      "risk": [
        "Changes branch"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "branch",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-d",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "feature/search",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git checkout main",
      "description": "Older command that can switch branches; modern examples prefer git switch where available.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "checkout",
          "meaning": "The Git subcommand."
        },
        {
          "token": "main",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "branches-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Branches?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["merging-changes"] = {
  "id": "lesson-merging-changes",
  "slug": "merging-changes",
  "title": "Merging Changes",
  "summary": "Explain how Git combines separate histories through fast-forward merges, merge commits, shared ancestors, and integrated history.",
  "introduction": [
    "Explain how Git combines separate histories through fast-forward merges, merge commits, shared ancestors, and integrated history.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain merge, base branch, source branch, fast-forward, merge commit, shared ancestor, and integrated history.",
    "Compare fast-forward and merge-commit cases.",
    "Review and test before merging."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A feature branch adds handbook search improvements and must be integrated into main."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Merge",
      "Merge is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Base branch",
      "Base branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Source branch",
      "Source branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Fast-forward",
      "Fast-forward is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Merge commit",
      "Merge commit is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Shared ancestor",
      "Shared ancestor is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Integrated history",
      "Integrated history is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "merge-simulator",
      "title": "Merge Simulator",
      "prompt": "Compare two merge shapes.",
      "columns": [
        "Case",
        "Before",
        "After",
        "Why"
      ],
      "rows": [
        [
          "Fast-forward",
          "A-B main, C-D feature",
          "A-B-C-D main",
          "main had no new commits"
        ],
        [
          "Merge commit",
          "A-B-E main and C-D feature",
          "A-B-E-M main",
          "Both branches had unique commits"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Merging Atlas Commerce work should happen after review, tests, and confirmation of the intended base branch."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git switch main",
      "description": "Change the current branch.",
      "repositoryEffect": "Repository effect: Changes branch, Changes working files.",
      "risk": [
        "Changes branch",
        "Changes working files"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "switch",
          "meaning": "The Git subcommand."
        },
        {
          "token": "main",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git merge feature/search",
      "description": "Integrate another branch into the current branch.",
      "repositoryEffect": "Repository effect: Creates history, Changes working files.",
      "risk": [
        "Creates history",
        "Changes working files"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "merge",
          "meaning": "The Git subcommand."
        },
        {
          "token": "feature/search",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "merging-changes-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Merging Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["understanding-merge-conflicts"] = {
  "id": "lesson-understanding-merge-conflicts",
  "slug": "understanding-merge-conflicts",
  "title": "Understanding Merge Conflicts",
  "summary": "Explain conflicts as Git asking for human judgment when changes cannot be combined safely.",
  "introduction": [
    "Explain conflicts as Git asking for human judgment when changes cannot be combined safely.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain conflicting changes, common ancestor, ours, theirs, markers, resolution, testing, and abort.",
    "Resolve a simulated content conflict.",
    "Stage resolved files after testing."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Two branches changed the same call-to-action text: Start Learning and Begin the Handbook."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Conflicting change",
      "Conflicting change is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Common ancestor",
      "Common ancestor is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Ours",
      "Ours is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Theirs",
      "Theirs is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Conflict marker",
      "Conflict marker is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Resolution",
      "Resolution is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Test after resolution",
      "Test after resolution is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Abort",
      "Abort is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "conflict-resolver",
      "title": "Conflict Resolution Simulator",
      "prompt": "Choose a resolution and inspect the consequence.",
      "columns": [
        "Choice",
        "Result",
        "Risk"
      ],
      "rows": [
        [
          "Current version",
          "Start Learning",
          "May ignore useful incoming copy"
        ],
        [
          "Incoming version",
          "Begin the Handbook",
          "May discard current intent"
        ],
        [
          "Combine both",
          "Start the Handbook",
          "Can preserve meaning"
        ],
        [
          "Abort merge",
          "Return to pre-merge state",
          "Useful if risk is unclear"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "A copy conflict in Atlas Commerce checkout text needs product judgment, not blind marker deletion."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git diff",
      "description": "Compare changes in the working tree or staging area.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "diff",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git add resolved-file.html",
      "description": "Move selected changes into the staging area.",
      "repositoryEffect": "Repository effect: Changes staging area.",
      "risk": [
        "Changes staging area"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "add",
          "meaning": "The Git subcommand."
        },
        {
          "token": "resolved-file.html",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git commit",
      "description": "Record staged changes as a local history snapshot.",
      "repositoryEffect": "Repository effect: Creates history.",
      "risk": [
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "commit",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git merge --abort",
      "description": "Integrate another branch into the current branch.",
      "repositoryEffect": "Attempts to stop the merge and return to the pre-merge state.",
      "risk": [
        "Changes working files",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "merge",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--abort",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "understanding-merge-conflicts-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Understanding Merge Conflicts?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Understanding Merge Conflicts?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["reverting-and-recovering-changes"] = {
  "id": "lesson-reverting-and-recovering-changes",
  "slug": "reverting-and-recovering-changes",
  "title": "Reverting and Recovering Changes",
  "summary": "Teach safe ways to inspect, undo, and recover changes without presenting destructive commands casually.",
  "introduction": [
    "Teach safe ways to inspect, undo, and recover changes without presenting destructive commands casually.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Choose restore, unstage, revert, reset, or reflog based on repository state.",
    "Prefer revert or corrective commits for shared history.",
    "Treat git reset --hard as high risk."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A bad change may be unstaged, staged, committed locally, pushed publicly, or apparently lost from a branch."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Discard working change",
      "Discard working change is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Unstage",
      "Unstage is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Restore file",
      "Restore file is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Revert commit",
      "Revert commit is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Reset",
      "Reset is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Recovery",
      "Recovery is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Reflog",
      "Reflog is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Public history",
      "Public history is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Local history",
      "Local history is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "recovery-decision",
      "title": "Recovery Decision Explorer",
      "prompt": "Choose the safest recovery tool for each scenario.",
      "columns": [
        "Scenario",
        "Safer tool",
        "Reason"
      ],
      "rows": [
        [
          "Modified but not staged",
          "git restore file.txt",
          "Affects working file only"
        ],
        [
          "Staged accidentally",
          "git restore --staged file.txt",
          "Unstages without discarding work"
        ],
        [
          "Bad commit already pushed",
          "git revert <commit>",
          "Creates corrective public history"
        ],
        [
          "Branch appears disappeared",
          "git reflog",
          "Finds recent HEAD movement"
        ],
        [
          "Uncommitted work should be destroyed",
          "git reset --hard",
          "High risk; only with explicit confirmation"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "A bad Atlas Commerce checkout commit already pushed should usually be reverted rather than erased from shared history."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git restore file.txt",
      "description": "Restore working files or unstage changes.",
      "repositoryEffect": "Repository effect: Changes working files, Recovery command.",
      "risk": [
        "Changes working files",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "restore",
          "meaning": "The Git subcommand."
        },
        {
          "token": "file.txt",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git restore --staged file.txt",
      "description": "Restore working files or unstage changes.",
      "repositoryEffect": "Repository effect: Changes staging area, Recovery command.",
      "risk": [
        "Changes staging area",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "restore",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--staged",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "file.txt",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git revert <commit>",
      "description": "Create a new commit that undoes an earlier commit.",
      "repositoryEffect": "Repository effect: Creates history, Recovery command.",
      "risk": [
        "Creates history",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "revert",
          "meaning": "The Git subcommand."
        },
        {
          "token": "<commit>",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git reflog",
      "description": "Inspect recent branch and HEAD movements.",
      "repositoryEffect": "Repository effect: Read-only, Recovery command.",
      "risk": [
        "Read-only",
        "Recovery command"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "reflog",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git reset",
      "description": "Move branch or staging state depending on options.",
      "repositoryEffect": "Repository effect: Changes local history.",
      "risk": [
        "Changes local history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "reset",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git reset --hard",
      "description": "Move branch or staging state depending on options.",
      "repositoryEffect": "Repository effect: Changes local history, Potentially destructive.",
      "risk": [
        "Changes local history",
        "Potentially destructive"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "reset",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--hard",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Can destroy uncommitted work. Do not use as a beginner default.",
      "recovery": "Check reflog and backups; uncommitted work may be unrecoverable.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "reverting-and-recovering-changes-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Reverting and Recovering Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Reverting and Recovering Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Which habit best fits Reverting and Recovering Changes?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["local-and-remote-repositories"] = {
  "id": "lesson-local-and-remote-repositories",
  "slug": "local-and-remote-repositories",
  "title": "Local and Remote Repositories",
  "summary": "Explain how local Git repositories connect to remote repositories such as GitHub through remotes, origin, URLs, clone, tracking branches, and upstreams.",
  "introduction": [
    "Explain how local Git repositories connect to remote repositories such as GitHub through remotes, origin, URLs, clone, tracking branches, and upstreams.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Distinguish local repository from GitHub remote.",
    "Explain origin, remote URLs, clone, remote-tracking branch, and upstream.",
    "Use safe example repository URLs only."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A local handbook repository can exist offline; GitHub receives commits only after a push."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Local repository",
      "Local repository is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Remote repository",
      "Remote repository is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Remote name",
      "Remote name is part of the repository-state model engineers use to reason about change."
    ],
    [
      "origin",
      "origin is part of the repository-state model engineers use to reason about change."
    ],
    [
      "URL",
      "URL is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Clone",
      "Clone is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Remote-tracking branch",
      "Remote-tracking branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Upstream",
      "Upstream is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "remote-sync-explorer",
      "title": "Local and Remote Architecture",
      "prompt": "Inspect how local and remote repositories relate.",
      "columns": [
        "Area",
        "Location",
        "Meaning"
      ],
      "rows": [
        [
          "Working tree",
          "Local computer",
          "Editable project files"
        ],
        [
          "Local Git repository",
          "Local .git metadata",
          "Local commits and branches"
        ],
        [
          "origin",
          "Remote name",
          "Shortcut to URL"
        ],
        [
          "GitHub remote",
          "GitHub",
          "Shared repository copy"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce local commits are not on GitHub until pushed."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git clone https://github.com/example/handbook.git",
      "description": "Copy a remote repository into a new local folder.",
      "repositoryEffect": "Repository effect: Network access, Changes working files.",
      "risk": [
        "Network access",
        "Changes working files"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "clone",
          "meaning": "The Git subcommand."
        },
        {
          "token": "https://github.com/example/handbook.git",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Use example URLs in learning material; do not connect to private repositories here.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git remote -v",
      "description": "Inspect or configure remote repository URLs.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "remote",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-v",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git remote add origin https://github.com/example/handbook.git",
      "description": "Inspect or configure remote repository URLs.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "remote",
          "meaning": "The Git subcommand."
        },
        {
          "token": "add",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "origin",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "https://github.com/example/handbook.git",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "local-and-remote-repositories-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Local and Remote Repositories?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["push-pull-and-fetch"] = {
  "id": "lesson-push-pull-and-fetch",
  "slug": "push-pull-and-fetch",
  "title": "Push, Pull, and Fetch",
  "summary": "Explain synchronization between local and remote history through fetch, pull, push, upstream branches, divergence, and force-push risk.",
  "introduction": [
    "Explain synchronization between local and remote history through fetch, pull, push, upstream branches, divergence, and force-push risk.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Distinguish fetch, pull, and push.",
    "Reason about local ahead, remote ahead, diverged, and equal states.",
    "Understand why force push is dangerous on shared branches."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A teammate pushed changes while the learner has local commits. The right sync action depends on divergence."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Push",
      "Push is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Fetch",
      "Fetch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Pull",
      "Pull is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Remote-tracking branch",
      "Remote-tracking branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Upstream branch",
      "Upstream branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Divergence",
      "Divergence is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Integration",
      "Integration is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Force push",
      "Force push is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "remote-sync-explorer",
      "title": "Remote Synchronization Explorer",
      "prompt": "Choose what each command changes.",
      "columns": [
        "State",
        "git fetch",
        "git pull",
        "git push"
      ],
      "rows": [
        [
          "Local ahead",
          "Updates remote info",
          "Usually no new integration",
          "Sends local commits"
        ],
        [
          "Remote ahead",
          "Downloads info only",
          "Fetches and integrates",
          "Rejected until integrated"
        ],
        [
          "Diverged",
          "Shows divergence",
          "Integrates or conflicts",
          "May be rejected"
        ],
        [
          "No difference",
          "No content change",
          "No content change",
          "Everything up to date"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce engineers fetch before deciding whether to pull, rebase, merge, or push."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git fetch",
      "description": "Download remote-tracking information without integrating.",
      "repositoryEffect": "Repository effect: Network access, Read-only.",
      "risk": [
        "Network access",
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "fetch",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git pull",
      "description": "Fetch and integrate remote changes into the current branch.",
      "repositoryEffect": "Repository effect: Network access, Changes working files, Creates history.",
      "risk": [
        "Network access",
        "Changes working files",
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "pull",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git push",
      "description": "Send local commits to a remote repository.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "push",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git push -u origin feature/search",
      "description": "Send local commits to a remote repository.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "push",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-u",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "origin",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "feature/search",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git push --force",
      "description": "Send local commits to a remote repository.",
      "repositoryEffect": "Repository effect: Changes remote repository, Potentially destructive.",
      "risk": [
        "Changes remote repository",
        "Potentially destructive"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "push",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--force",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Can overwrite remote history. Do not use on shared branches as routine work.",
      "recovery": "Coordinate immediately and inspect reflogs or remote backups if history was overwritten.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "push-pull-and-fetch-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Push, Pull, and Fetch?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Push, Pull, and Fetch?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["pull-requests"] = {
  "id": "lesson-pull-requests",
  "slug": "pull-requests",
  "title": "Pull Requests",
  "summary": "Explain pull requests as proposals for reviewing, checking, revising, and integrating changes.",
  "introduction": [
    "Explain pull requests as proposals for reviewing, checking, revising, and integrating changes.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain source branch, base branch, diff, description, review, checks, approvals, requested changes, merge, and draft PRs.",
    "Inspect a simulated pull request.",
    "Write useful PR descriptions."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A feature branch for handbook search is pushed and opened as a draft pull request with checks and review comments."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Source branch",
      "Source branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Base branch",
      "Base branch is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Diff",
      "Diff is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Description",
      "Description is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Review",
      "Review is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Check",
      "Check is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Approval",
      "Approval is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Requested changes",
      "Requested changes is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Merge",
      "Merge is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Draft pull request",
      "Draft pull request is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "pull-request-workflow",
      "title": "Pull Request Workflow",
      "prompt": "Inspect each stage of a simulated PR.",
      "columns": [
        "Stage",
        "Evidence",
        "Question"
      ],
      "rows": [
        [
          "Create branch",
          "feature/search",
          "Is the branch scoped?"
        ],
        [
          "Make commits",
          "2 commits",
          "Are messages meaningful?"
        ],
        [
          "Push branch",
          "origin/feature/search",
          "Is the remote branch correct?"
        ],
        [
          "Open PR",
          "Title and description",
          "What changed and why?"
        ],
        [
          "Checks",
          "validation passed",
          "Were tests actually run?"
        ],
        [
          "Review",
          "2 comments",
          "What needs revision?"
        ],
        [
          "Merge",
          "after approval",
          "Is the base branch correct?"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce PRs should explain change, testing, risks, screenshots for UI changes, and follow-up work."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git push -u origin feature/search",
      "description": "Send local commits to a remote repository.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "push",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-u",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "origin",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "feature/search",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "pull-requests-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Pull Requests?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["code-review"] = {
  "id": "lesson-code-review",
  "slug": "code-review",
  "title": "Code Review",
  "summary": "Teach code review as risk reduction, knowledge sharing, and design discussion across correctness, maintainability, security, performance, tests, readability, and scope.",
  "introduction": [
    "Teach code review as risk reduction, knowledge sharing, and design discussion across correctness, maintainability, security, performance, tests, readability, and scope.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Classify review comments as blocking issue, suggestion, question, praise, or follow-up.",
    "Compare weak and useful feedback.",
    "Review the change, not the person."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A conceptual diff hardcodes an environment URL and omits validation. The review should be precise and constructive."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Correctness",
      "Correctness is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Maintainability",
      "Maintainability is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Security",
      "Security is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Performance",
      "Performance is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Tests",
      "Tests is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Readability",
      "Readability is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Scope",
      "Scope is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Constructive feedback",
      "Constructive feedback is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Author responsibility",
      "Author responsibility is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Reviewer responsibility",
      "Reviewer responsibility is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "code-review-scenario",
      "title": "Code Review Decision Scenario",
      "prompt": "Select useful review comments.",
      "columns": [
        "Comment",
        "Type",
        "Why"
      ],
      "rows": [
        [
          "This is bad.",
          "Weak",
          "Not actionable"
        ],
        [
          "Could this value come from configuration instead of being hardcoded?",
          "Blocking question",
          "Connects issue to environments"
        ],
        [
          "Nice simplification of the validation flow.",
          "Praise",
          "Specific and useful"
        ],
        [
          "Please add a test for missing input.",
          "Blocking issue",
          "Protects behavior"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce reviews protect checkout, payments, privacy, and operations by catching risks before merge."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git diff --staged",
      "description": "Compare changes in the working tree or staging area.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "diff",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--staged",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git show",
      "description": "Inspect one commit or object.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "show",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "code-review-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Code Review?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Code Review?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["issues-and-project-discussions"] = {
  "id": "lesson-issues-and-project-discussions",
  "slug": "issues-and-project-discussions",
  "title": "Issues and Project Discussions",
  "summary": "Explain how teams capture bugs, features, decisions, work context, reproduction steps, labels, milestones, and acceptance criteria.",
  "introduction": [
    "Explain how teams capture bugs, features, decisions, work context, reproduction steps, labels, milestones, and acceptance criteria.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Turn vague reports into useful issues.",
    "Explain expected behavior, actual behavior, environment, labels, assignees, milestones, and discussions.",
    "Preserve context rather than only task titles."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "The report 'Website broken' must become a useful Atlas Commerce issue with reproduction steps and severity."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Issue",
      "Issue is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Bug report",
      "Bug report is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Feature request",
      "Feature request is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Reproduction steps",
      "Reproduction steps is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Expected behavior",
      "Expected behavior is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Actual behavior",
      "Actual behavior is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Labels",
      "Labels is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Assignee",
      "Assignee is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Milestone",
      "Milestone is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Discussion",
      "Discussion is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Acceptance criteria",
      "Acceptance criteria is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "issue-builder",
      "title": "Issue Builder",
      "prompt": "Improve a weak report into actionable context.",
      "columns": [
        "Field",
        "Weak",
        "Better"
      ],
      "rows": [
        [
          "Title",
          "Website broken",
          "Checkout returns 500 after shipping step"
        ],
        [
          "Environment",
          "none",
          "Production, Chrome, user account checkout"
        ],
        [
          "Steps",
          "none",
          "Add item, choose shipping, click pay"
        ],
        [
          "Expected",
          "none",
          "Payment form loads"
        ],
        [
          "Actual",
          "broken",
          "500 response with request ID abc123"
        ],
        [
          "Severity",
          "none",
          "Blocks checkout"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Good issues help Atlas Commerce teams understand business impact and reproduce problems."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [],
  "handsOnLab": {
    "id": "issues-and-project-discussions-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["tags-and-releases"] = {
  "id": "lesson-tags-and-releases",
  "slug": "tags-and-releases",
  "title": "Tags and Releases",
  "summary": "Explain how repositories identify meaningful versions through tags, semantic versions, changelogs, release notes, artifacts, and rollback references.",
  "introduction": [
    "Explain how repositories identify meaningful versions through tags, semantic versions, changelogs, release notes, artifacts, and rollback references.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain tag, version, release, semantic versioning, changelog, release notes, artifact, and rollback reference.",
    "Read a release timeline.",
    "Use tags as version labels, not full deployment systems."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "The handbook marks v1.0.0 as the first complete public edition and patch versions for fixes."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Tag",
      "Tag is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Version",
      "Version is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Release",
      "Release is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Semantic versioning",
      "Semantic versioning is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Changelog",
      "Changelog is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Release notes",
      "Release notes is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Artifact",
      "Artifact is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Rollback reference",
      "Rollback reference is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "release-timeline",
      "title": "Release Timeline",
      "prompt": "Inspect semantic version examples.",
      "columns": [
        "Version",
        "Meaning",
        "Release note"
      ],
      "rows": [
        [
          "v0.1.0",
          "Initial handbook",
          "Foundation"
        ],
        [
          "v0.2.0",
          "Add progress tracking",
          "Minor feature"
        ],
        [
          "v0.2.1",
          "Fix quiz persistence",
          "Patch fix"
        ],
        [
          "v1.0.0",
          "First complete public edition",
          "Major milestone"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce releases need identifiers so teams can compare current production with previous working versions."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git tag",
      "description": "List or create version labels.",
      "repositoryEffect": "Repository effect: Creates history.",
      "risk": [
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "tag",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git tag v1.0.0",
      "description": "List or create version labels.",
      "repositoryEffect": "Repository effect: Creates history.",
      "risk": [
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "tag",
          "meaning": "The Git subcommand."
        },
        {
          "token": "v1.0.0",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git push origin v1.0.0",
      "description": "Send local commits to a remote repository.",
      "repositoryEffect": "Repository effect: Changes remote repository.",
      "risk": [
        "Changes remote repository"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "push",
          "meaning": "The Git subcommand."
        },
        {
          "token": "origin",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "v1.0.0",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git tag -a v1.0.0 -m \"First handbook release\"",
      "description": "List or create version labels.",
      "repositoryEffect": "Repository effect: Creates history.",
      "risk": [
        "Creates history"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "tag",
          "meaning": "The Git subcommand."
        },
        {
          "token": "-a",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "v1.0.0",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "-m",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "\"First",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "handbook",
          "meaning": "A path, branch, commit, tag, or message argument."
        },
        {
          "token": "release\"",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "tags-and-releases-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Tags and Releases?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["repository-secrets-and-sensitive-files"] = {
  "id": "lesson-repository-secrets-and-sensitive-files",
  "slug": "repository-secrets-and-sensitive-files",
  "title": "Repository Secrets and Sensitive Files",
  "summary": "Explain why repositories must not contain credentials, private keys, environment files, logs, dependency folders, or sensitive configuration.",
  "introduction": [
    "Explain why repositories must not contain credentials, private keys, environment files, logs, dependency folders, or sensitive configuration.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain secrets, API keys, passwords, private keys, .env, .gitignore, commit history, rotation, and secret scanning.",
    "Treat pushed secrets as compromised.",
    "Use ignore checks and history inspection."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A database credential was committed and pushed. Deleting it later does not make the old value safe."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Secret",
      "Secret is part of the repository-state model engineers use to reason about change."
    ],
    [
      "API key",
      "API key is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Password",
      "Password is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Private key",
      "Private key is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Environment file",
      "Environment file is part of the repository-state model engineers use to reason about change."
    ],
    [
      ".gitignore",
      ".gitignore is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Commit history",
      "Commit history is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Rotation",
      "Rotation is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Secret scanning",
      "Secret scanning is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "secret-exposure-incident",
      "title": "Secret Exposure Incident",
      "prompt": "Order the response after a secret was pushed.",
      "columns": [
        "Step",
        "Action",
        "Why"
      ],
      "rows": [
        [
          "1",
          "Revoke or rotate credential",
          "Assume compromise"
        ],
        [
          "2",
          "Remove from current files",
          "Stop continued exposure"
        ],
        [
          "3",
          "Investigate history",
          "Old commits still matter"
        ],
        [
          "4",
          "Determine access",
          "Scope the incident"
        ],
        [
          "5",
          "Update handling",
          "Prevent repeat"
        ],
        [
          "6",
          "Do not assume deletion is enough",
          "Remote history may persist"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce repository history must not contain database credentials, payment keys, or private configuration."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Once a secret has been pushed, treat it as compromised. Rotate or revoke it; deleting the latest file is not enough."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git check-ignore .env",
      "description": "Check whether ignore rules apply to a path.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "check-ignore",
          "meaning": "The Git subcommand."
        },
        {
          "token": ".env",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git log --all -- .env",
      "description": "Read commit history.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "log",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--all",
          "meaning": "An option that changes behavior."
        },
        {
          "token": "--",
          "meaning": "An option that changes behavior."
        },
        {
          "token": ".env",
          "meaning": "A path, branch, commit, tag, or message argument."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "repository-secrets-and-sensitive-files-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits Repository Secrets and Sensitive Files?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits Repository Secrets and Sensitive Files?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Which habit best fits Repository Secrets and Sensitive Files?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["github-actions-overview"] = {
  "id": "lesson-github-actions-overview",
  "slug": "github-actions-overview",
  "title": "GitHub Actions Overview",
  "summary": "Explain CI and automated repository workflows through triggers, jobs, steps, runners, checks, artifacts, secrets, and deployment workflows without turning into YAML programming.",
  "introduction": [
    "Explain CI and automated repository workflows through triggers, jobs, steps, runners, checks, artifacts, secrets, and deployment workflows without turning into YAML programming.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Explain workflow, trigger, job, step, runner, check, artifact, secret, CI, and deployment workflow.",
    "Inspect a simulated workflow run.",
    "Avoid putting secrets directly in workflow files."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "A pull request triggers handbook validation, dependency installation, checks, build, and pass/fail reporting."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Workflow",
      "Workflow is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Trigger",
      "Trigger is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Job",
      "Job is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Step",
      "Step is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Runner",
      "Runner is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Check",
      "Check is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Artifact",
      "Artifact is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Secret",
      "Secret is part of the repository-state model engineers use to reason about change."
    ],
    [
      "CI",
      "CI is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Deployment workflow",
      "Deployment workflow is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "ci-workflow-visualizer",
      "title": "CI Workflow Visualizer",
      "prompt": "Inspect the workflow structure conceptually.",
      "columns": [
        "Stage",
        "Example",
        "Meaning"
      ],
      "rows": [
        [
          "Trigger",
          "pull_request",
          "Starts workflow"
        ],
        [
          "Runner",
          "ubuntu-latest",
          "Temporary machine"
        ],
        [
          "Step",
          "actions/checkout@v4",
          "Gets repository files"
        ],
        [
          "Run",
          "node scripts/validate-curriculum.js",
          "Runs validation"
        ],
        [
          "Result",
          "success or failure",
          "Reports check status"
        ]
      ],
      "selectable": true
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce should run tests before deployment and treat failed checks as evidence to investigate."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the repository state before changing files. Explain the likely files involved, propose a small plan, preserve existing data, show the diff summary, and list tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt keeps human review in control and asks for evidence."
  },
  "terminalCommands": [],
  "handsOnLab": {
    "id": "github-actions-overview-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits GitHub Actions Overview?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
  window.LessonContentRegistry["ai-assisted-git-workflows"] = {
  "id": "lesson-ai-assisted-git-workflows",
  "slug": "ai-assisted-git-workflows",
  "title": "AI-Assisted Git Workflows",
  "summary": "Teach how AI can assist with repository state, diffs, commit summaries, PR descriptions, conflicts, and tests without replacing human review.",
  "introduction": [
    "Teach how AI can assist with repository state, diffs, commit summaries, PR descriptions, conflicts, and tests without replacing human review.",
    "Git and GitHub are taught here as change-management systems. The commands are real, but every interactive output is simulated and no browser action touches a real repository."
  ],
  "learningObjectives": [
    "Use AI for plans, explanations, diff review, commit summaries, and PR drafts.",
    "Reject unsafe AI-generated changes.",
    "Never let AI force push, rewrite shared history, merge, or claim unrun tests."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "An AI-generated change includes unrelated files, deleted tests, a hardcoded credential-like value, a large dependency, and a misleading commit message."
  },
  "whyThisExists": [
    "Modern engineering work needs evidence about what changed, who changed it, why it changed, and how to recover when something breaks."
  ],
  "problemItSolves": [
    "This concept reduces confusion between working files, staged changes, local history, remote collaboration, and release coordination."
  ],
  "keyConcepts": [
    [
      "Repository context",
      "Repository context is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Diff review",
      "Diff review is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Commit summary",
      "Commit summary is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Branch plan",
      "Branch plan is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Pull-request description",
      "Pull-request description is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Conflict explanation",
      "Conflict explanation is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Test verification",
      "Test verification is part of the repository-state model engineers use to reason about change."
    ],
    [
      "AI hallucination",
      "AI hallucination is part of the repository-state model engineers use to reason about change."
    ],
    [
      "Human approval",
      "Human approval is part of the repository-state model engineers use to reason about change."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "ai-diff-review",
      "title": "AI-Generated Diff Review",
      "prompt": "Identify what should be rejected.",
      "columns": [
        "AI change",
        "Decision",
        "Reason"
      ],
      "rows": [
        [
          "Unrelated file changes",
          "Reject",
          "Scope creep"
        ],
        [
          "Deleted test",
          "Reject",
          "Reduces safety"
        ],
        [
          "Hardcoded secret-like value",
          "Reject",
          "Security risk"
        ],
        [
          "Large dependency",
          "Question",
          "Needs justification"
        ],
        [
          "Misleading commit message",
          "Reject",
          "History should be accurate"
        ]
      ],
      "selectable": true
    },
    {
      "type": "git-practice-simulator",
      "title": "Git Practice Simulator",
      "prompt": "Practice small repository-state actions before asking AI to summarize them."
    }
  ],
  "architectureDiagram": {
    "type": "linear",
    "title": "Git Change Flow",
    "alt": "Working directory moves through staging, local repository, and remote repository.",
    "nodes": [
      "Working Directory",
      "git add",
      "Staging Area",
      "git commit",
      "Local Repository",
      "git push",
      "Remote Repository"
    ]
  },
  "pseudocode": [
    "WHEN managing repository change",
    "    inspect current state",
    "    choose the smallest intentional action",
    "    verify the area affected",
    "    review simulated output or real output",
    "    test before sharing",
    "END"
  ],
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "AI can help draft PR text for Atlas Commerce, but humans own review, tests, commits, pushes, and merges."
  },
  "seniorEngineerThinking": [
    "Inspect repository state before modifying it.",
    "Keep commits meaningful and scoped.",
    "Treat shared history and remote repositories with extra care.",
    "Use AI for explanation and review, not automatic pushing or merging."
  ],
  "commonMistakes": [
    "Running commands on the wrong branch.",
    "Staging unrelated files.",
    "Committing secrets.",
    "Using destructive commands before understanding recovery.",
    "Assuming GitHub has a commit that only exists locally."
  ],
  "debuggingGuide": [
    "Run git status.",
    "Identify current branch.",
    "Inspect staged and unstaged changes.",
    "Read recent history.",
    "Decide whether the next command changes files, staging, local history, or remote history."
  ],
  "securityNotes": [
    "Do not commit secrets, private keys, tokens, environment files, or credentials. Treat pushed secrets as compromised."
  ],
  "performanceNotes": [
    "Repository tools are usually fast; slow operations often point to large generated files, dependency folders, binary assets, or network operations."
  ],
  "productionNotes": [
    "Production release work should be traceable through commits, pull requests, tags, checks, and rollback references."
  ],
  "aiPromptExamples": {
    "poor": "Fix everything and push it.",
    "better": "Review the current repository state before changing files. Goal: fix lesson progress percentage after refresh. Constraints: vanilla JavaScript only, preserve localStorage, do not add dependencies. First explain files involved and a small plan. After editing, show diff summary and tests actually run. Do not commit or push automatically.",
    "why": "The improved prompt limits scope, asks for evidence, and prevents automatic repository writes."
  },
  "terminalCommands": [
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git status",
      "description": "Show the current branch and file states.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "status",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git diff",
      "description": "Compare changes in the working tree or staging area.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "diff",
          "meaning": "The Git subcommand."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    },
    {
      "type": "git-command",
      "platform": [
        "Linux",
        "macOS",
        "Windows PowerShell",
        "WSL",
        "Git Bash"
      ],
      "command": "git log --oneline",
      "description": "Read commit history.",
      "repositoryEffect": "Repository effect: Read-only.",
      "risk": [
        "Read-only"
      ],
      "anatomy": [
        {
          "token": "git",
          "meaning": "The git executable."
        },
        {
          "token": "log",
          "meaning": "The Git subcommand."
        },
        {
          "token": "--oneline",
          "meaning": "An option that changes behavior."
        }
      ],
      "expectedOutput": "Simulated example:\nGit prints repository state or confirmation text that varies by repository.",
      "outputExplanation": "This simulated output is evidence about repository state; it is not produced by the browser.",
      "commonError": "The common mistake is assuming the command affects every Git area. Check working tree, staging area, local history, and remote history separately.",
      "safeUse": "Run only after confirming the repository and intended branch.",
      "recovery": "If the result is unexpected, inspect git status, git log, and the current branch before continuing.",
      "tryIt": "Use a disposable practice repository; do not practice on important work."
    }
  ],
  "handsOnLab": {
    "id": "ai-assisted-git-workflows-lab",
    "goal": "Practice the repository-state concept in a disposable local repository or browser simulation.",
    "steps": [
      "Create or use a safe practice repository.",
      "Inspect state before each command.",
      "Record what changed and what did not change."
    ],
    "observe": [
      "Working tree",
      "Staging area",
      "Local history",
      "Remote state",
      "Risk labels"
    ],
    "expected": "The learner can explain repository effects before running modifying commands.",
    "safety": "Do not use real credentials, production repositories, or destructive commands while practicing."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which next step best protects repository history?",
    "answers": [
      [
        "Inspect state and choose a scoped action.",
        true,
        "Evidence-first Git work reduces accidental damage."
      ],
      [
        "Force push immediately.",
        false,
        "Force push can overwrite remote history."
      ],
      [
        "Commit every generated file.",
        false,
        "Generated files may not belong in history."
      ],
      [
        "Let AI merge without review.",
        false,
        "Human review remains responsible."
      ]
    ],
    "reasoning": "Git safety starts with state awareness."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "What does Git primarily help engineers manage?",
        "options": [
          "Change over time.",
          "Only website hosting.",
          "Only passwords.",
          "Only visual design."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Which statement is safest before a modifying Git command?",
        "options": [
          "Inspect repository state first.",
          "Assume the branch is correct.",
          "Force push to save time.",
          "Ignore untracked files."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What should simulated Git output be treated as?",
        "options": [
          "A learning example, not real command execution.",
          "A real repository operation.",
          "A secret scan.",
          "A remote push."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Why do meaningful commits matter?",
        "options": [
          "They make history easier to review and recover.",
          "They make tests unnecessary.",
          "They upload automatically.",
          "They hide mistakes."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "What does completion require in this handbook?",
        "options": [
          "Attempt the quiz and reach the summary.",
          "Push to GitHub.",
          "Use every command.",
          "Create a public repository."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Which habit best fits AI-Assisted Git Workflows?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Which habit best fits AI-Assisted Git Workflows?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      },
      {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Which habit best fits AI-Assisted Git Workflows?",
        "options": [
          "Reason about working tree, staging, history, and remote effects.",
          "Memorize command punctuation only.",
          "Use destructive recovery first.",
          "Let AI push automatically."
        ],
        "answerIndex": 0,
        "explanation": "This follows the lesson's repository-state mental model."
      }
    ]
  },
  "summaryPoints": [
    "Git work should be understood through working tree, staging area, local history, and remote repository effects.",
    "GitHub adds collaboration, review, issues, releases, secrets, and automation around repositories.",
    "No browser simulation in this handbook executes Git commands."
  ],
  "relatedLessons": [],
  "officialResources": [
    {
      "title": "Git Documentation",
      "url": "https://git-scm.com/doc"
    },
    {
      "title": "GitHub Docs",
      "url": "https://docs.github.com/"
    }
  ]
};
})();
