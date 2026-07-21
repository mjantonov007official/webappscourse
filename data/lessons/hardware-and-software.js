(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["hardware-and-software"] = {
  "id": "lesson-hardware-and-software",
  "slug": "hardware-and-software",
  "title": "Hardware and Software",
  "summary": "Learn how physical components and instructions cooperate, why neither is useful alone, and how web applications depend on both local and remote machines.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: Atlas Commerce appears inside a browser on a laptop, but the page also depends on software running on remote server hardware. A checkout issue may come from a broken device, a software bug, or a configuration mistake.",
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
    "body": "Atlas Commerce appears inside a browser on a laptop, but the page also depends on software running on remote server hardware. A checkout issue may come from a broken device, a software bug, or a configuration mistake."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "Hardware",
      "Physical equipment such as CPUs, memory, disks, keyboards, screens, and network cards."
    ],
    [
      "Software",
      "Instructions and data that tell hardware what to do."
    ],
    [
      "Firmware",
      "Low-level software stored close to hardware that helps devices start and operate."
    ],
    [
      "Operating system",
      "System software that manages hardware resources and provides services to applications."
    ],
    [
      "Application",
      "Software a user or system runs to perform a task."
    ],
    [
      "Driver",
      "Software that helps the operating system communicate with hardware."
    ],
    [
      "Server hardware",
      "Physical or virtual machines used to run services for other computers."
    ],
    [
      "Cloud",
      "Rented computing resources operated by another provider."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "comparison",
      "title": "Classify the System Pieces",
      "prompt": "Choose whether each item is hardware or software.",
      "items": [
        [
          "Keyboard",
          "Hardware",
          "A keyboard is a physical input device."
        ],
        [
          "Browser",
          "Software",
          "A browser is an application made of instructions."
        ],
        [
          "Operating system",
          "Software",
          "It is system software that coordinates hardware."
        ],
        [
          "SSD",
          "Hardware",
          "An SSD is physical persistent storage."
        ],
        [
          "Web application",
          "Software",
          "The application is instructions and data running on hardware."
        ],
        [
          "Network card",
          "Hardware",
          "A network card is a physical device."
        ],
        [
          "Database software",
          "Software",
          "The database engine is software running on a computer."
        ],
        [
          "CPU",
          "Hardware",
          "The CPU is physical processing hardware."
        ]
      ]
    }
  ],
  "architectureDiagram": {
    "type": "layered",
    "title": "Hardware and Software Layers",
    "alt": "Applications run on an operating system, which coordinates physical hardware.",
    "nodes": [
      "Applications",
      "Operating System and Drivers",
      "Firmware",
      "Physical Hardware"
    ]
  },
  "pseudocode": null,
  "terminalCommand": null,
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
    "better": "Help me reason about hardware and software in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Inspect basic hardware and software without changing system settings.",
    "steps": [
      "Open your system information tool: Settings on Windows, About This Mac on macOS, or a system details tool on Linux.",
      "Find processor, memory, storage, and operating system version.",
      "List one application you use and one hardware component it depends on."
    ],
    "observe": [
      "Which facts describe hardware?",
      "Which facts describe software?",
      "Which details might matter when debugging performance?"
    ],
    "expected": "Everyday applications depend on both physical capacity and installed software.",
    "safety": "Do not uninstall software or change drivers during this observation."
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
        "question": "A CPU is hardware.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "A browser is usually classified as what?",
        "options": [
          "Hardware",
          "Software",
          "A cable",
          "A folder"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What does an operating system manage?",
        "options": [
          "Only website colors",
          "Hardware resources and application services",
          "Only passwords",
          "Only databases"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "true-false",
        "question": "Cloud hosting means rented computers and services.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q5",
        "type": "true-false",
        "question": "A configuration failure is always a hardware failure.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 1,
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
    "lesson-cpu-memory-and-storage",
    "lesson-files-folders-and-data"
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
