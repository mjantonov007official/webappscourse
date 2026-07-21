(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["processes-applications-and-services"] = {
  "id": "lesson-processes-applications-and-services",
  "slug": "processes-applications-and-services",
  "title": "Processes, Applications, and Services",
  "summary": "Learn how stored programs become running processes, how visible applications differ from background services, and why engineers inspect running work.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: Atlas Commerce involves a browser process, a web server service, an application runtime, a database service, and queue workers. Each can fail independently.",
    "This lesson builds vocabulary and reasoning habits without turning the topic into a programming syntax exercise."
  ],
  "learningObjectives": [
    "Explain the concept in plain system terms.",
    "Identify where it appears in a modern web application.",
    "Use Atlas Commerce as a concrete reference without building it.",
    "Recognize common mistakes and investigation clues."
  ],
  "scenario": {
    "title": "Real-World Scenario",
    "body": "Atlas Commerce involves a browser process, a web server service, an application runtime, a database service, and queue workers. Each can fail independently."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "Program",
      "Instructions stored on disk."
    ],
    [
      "Process",
      "A running instance of a program."
    ],
    [
      "Process ID",
      "A number the operating system uses to identify a process."
    ],
    [
      "Thread",
      "A unit of execution within a process."
    ],
    [
      "Foreground application",
      "A visible program the user directly interacts with."
    ],
    [
      "Background process",
      "Running work without a main visible window."
    ],
    [
      "Service",
      "A background process managed by the operating system."
    ],
    [
      "Worker",
      "A process that handles queued or repeated jobs."
    ],
    [
      "Resource usage",
      "CPU, memory, disk, and network consumed by running work."
    ],
    [
      "Start, stop, restart",
      "Lifecycle actions used to control a process or service."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "step-flow",
      "title": "Program to Process",
      "steps": [
        [
          "Program exists on storage",
          "The application or service is stored as files.",
          "The operating system needs instructions to load.",
          "Missing files or corrupt installation."
        ],
        [
          "Operating system loads instructions",
          "The OS prepares the program to run.",
          "Programs need memory and permissions.",
          "Permission denied or missing dependency."
        ],
        [
          "Memory is allocated",
          "Working space is reserved.",
          "Running programs need temporary state.",
          "Low memory can slow or prevent startup."
        ],
        [
          "Process receives an ID",
          "The OS tracks the running instance.",
          "Engineers need a way to inspect it.",
          "Confusing process names may hide the right target."
        ],
        [
          "CPU executes instructions",
          "The process does work.",
          "Instructions must actually run.",
          "High CPU or crashes can affect users."
        ],
        [
          "Process exits or remains running",
          "Some work ends; services continue.",
          "Different processes have different lifecycles.",
          "Unexpected exits cause downtime."
        ]
      ]
    }
  ],
  "architectureDiagram": {
    "type": "hub",
    "title": "Atlas Commerce Process Map",
    "alt": "Browser, web server, application, database, and queue workers run as different processes or services.",
    "nodes": [
      "Browser",
      "Web Server",
      "Application Runtime",
      "Database Service",
      "Queue Worker"
    ]
  },
  "pseudocode": null,
  "terminalCommand": {
    "command": "ps\nps aux\ntop",
    "explanation": "Shows running processes and resource usage on many Unix-like systems.",
    "output": "Process IDs, command names, CPU use, and memory use.",
    "warning": "These commands observe processes. Do not kill unknown processes while learning. On Windows, use Task Manager or tasklist."
  },
  "atlasCommerceExample": {
    "title": "Atlas Commerce Example",
    "body": "Atlas Commerce uses this concept as part of its storefront, operational workflow, or supporting infrastructure. The example is a reference system, not an application the learner must build."
  },
  "seniorEngineerThinking": [
    "Senior engineers ask which system responsibility is involved before assuming a cause.",
    "They prefer observations over guesses and keep user impact in view.",
    "They distinguish what the evidence suggests from what it proves."
  ],
  "commonMistakes": [
    "Treating the visible symptom as the whole system.",
    "Using vague language that hides which component is responsible.",
    "Changing settings before collecting basic observations.",
    "Assuming local behavior and production behavior are identical."
  ],
  "debuggingGuide": [
    "Name the exact action that failed.",
    "Identify input, processing, state, storage, output, and external dependencies where relevant.",
    "Check the simplest local explanation before blaming remote systems.",
    "Record what changed, what was expected, and what actually happened."
  ],
  "securityNotes": [
    "Do not put secrets in static files or screenshots.",
    "When remote systems are involved, access control and maintenance matter."
  ],
  "performanceNotes": [
    "Performance problems usually need resource-specific evidence, not a generic feeling of slowness."
  ],
  "productionNotes": [
    "In production, this concept may involve monitoring, logs, support workflows, and rollback decisions."
  ],
  "aiPromptExamples": {
    "poor": "Fix my computer problem.",
    "better": "Help me reason about processes, applications, and services in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Observe running work safely.",
    "steps": [
      "Open your operating system process viewer.",
      "Find your browser process.",
      "Notice CPU and memory columns.",
      "Find a background service if one is visible."
    ],
    "observe": [
      "Which processes have windows?",
      "Which run in the background?",
      "What resource numbers change?"
    ],
    "expected": "Visible applications and background services both consume resources and can be inspected.",
    "safety": "Do not end unknown processes during this lab."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Mini Challenge",
    "prompt": "Which habit best supports good engineering investigation?",
    "answers": [
      [
        "Guess quickly and change several things at once",
        false,
        "That makes cause and effect harder to understand."
      ],
      [
        "Name the system responsibility and collect evidence",
        true,
        "This creates a clearer path from symptom to cause."
      ],
      [
        "Ignore production behavior",
        false,
        "Production context often changes the risk."
      ],
      [
        "Use only one vague AI prompt",
        false,
        "Vague prompts invite vague answers."
      ]
    ],
    "reasoning": "Good investigation starts with precise language and evidence."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "true-false",
        "question": "A process is a running instance of a program.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q2",
        "type": "true-false",
        "question": "A database service usually runs in the background.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What identifies a running process?",
        "options": [
          "Process ID",
          "File extension only",
          "Screen brightness",
          "Folder color"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "true-false",
        "question": "Queue workers are often background processes.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q5",
        "type": "multiple-choice",
        "question": "If a database service stops, which part should be investigated?",
        "options": [
          "The database service",
          "Only CSS",
          "Keyboard layout",
          "Image alt text"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q6",
        "type": "true-false",
        "question": "Restarting a service should be done carefully because it can affect users.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      }
    ]
  },
  "summaryPoints": [
    "The concept names a real responsibility inside computer systems.",
    "Clear mental models improve debugging and communication.",
    "Atlas Commerce provides a concrete reference without becoming a build assignment."
  ],
  "relatedLessons": [
    "lesson-what-a-computer-actually-does",
    "lesson-hardware-and-software",
    "lesson-cpu-memory-and-storage"
  ],
  "officialResources": [
    {
      "title": "Microsoft Learn - Computer Basics",
      "url": "https://support.microsoft.com/windows"
    },
    {
      "title": "Apple Support - Mac Basics",
      "url": "https://support.apple.com/mac"
    },
    {
      "title": "Ubuntu Documentation",
      "url": "https://help.ubuntu.com/"
    }
  ]
};
})();
