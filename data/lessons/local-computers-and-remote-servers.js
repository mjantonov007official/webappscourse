(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["local-computers-and-remote-servers"] = {
  "id": "lesson-local-computers-and-remote-servers",
  "slug": "local-computers-and-remote-servers",
  "title": "Local Computers and Remote Servers",
  "summary": "Understand the difference between software running on your own machine and software running on another computer reached across a network.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: The handbook can run locally during development and later be uploaded to static hosting. Atlas Commerce production services run remotely so customers can reach them from many places.",
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
    "body": "The handbook can run locally during development and later be uploaded to static hosting. Atlas Commerce production services run remotely so customers can reach them from many places."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "Local computer",
      "The machine you are directly using."
    ],
    [
      "Remote computer",
      "Another machine accessed through a network."
    ],
    [
      "Server",
      "A computer or service that responds to clients."
    ],
    [
      "Client",
      "Software or a device that makes requests."
    ],
    [
      "Host",
      "A machine or provider that serves files or applications."
    ],
    [
      "Network address",
      "Information used to reach another system."
    ],
    [
      "Localhost",
      "A name that points back to your own computer."
    ],
    [
      "Deployment",
      "Moving prepared files or software to an environment where users can access them."
    ],
    [
      "Remote access",
      "Connecting to another computer to inspect or manage it."
    ],
    [
      "Cloud hosting",
      "Hosted computing resources provided over the internet."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "decision",
      "title": "Where Is the Work Happening?",
      "prompt": "You run python -m http.server 8000 inside this handbook folder and open localhost:8000. Where are the files being served from?",
      "answers": [
        [
          "Your local computer",
          true,
          "localhost points back to your own machine, so the static server reads local files."
        ],
        [
          "A payment gateway",
          false,
          "No payment service is involved in serving local files."
        ],
        [
          "Every visitor computer on the internet",
          false,
          "Other visitors cannot automatically access your local server."
        ],
        [
          "A database service",
          false,
          "This static handbook does not need a database to serve files."
        ]
      ],
      "reasoning": "Local development and remote hosting can use similar browser URLs, but the serving machine is different."
    }
  ],
  "architectureDiagram": {
    "type": "client-server",
    "title": "Local Development to Remote Hosting",
    "alt": "A local development computer sends files through Git or deployment to remote hosting, then internet visitors request the hosted files.",
    "nodes": [
      "Local Development Computer",
      "Git / Deployment",
      "Remote Hosting Server",
      "Internet Visitors"
    ]
  },
  "pseudocode": null,
  "terminalCommand": {
    "command": "python -m http.server 8000\nnpx serve",
    "explanation": "Starts a local static file server so a browser can request files over HTTP.",
    "output": "A local URL such as http://localhost:8000 or a similar address.",
    "warning": "Use Ctrl+C to stop the server. Python or Node.js must be installed. Do not expose development servers publicly without understanding the risk."
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
    "better": "Help me reason about local computers and remote servers in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Compare local files with hosted files conceptually.",
    "steps": [
      "Open a local HTML file directly if safe.",
      "Run or imagine a local static server.",
      "Compare that with a public website URL.",
      "Describe which computer serves each version."
    ],
    "observe": [
      "What changes in the URL?",
      "Who can reach the page?",
      "Where would secrets be unsafe?"
    ],
    "expected": "Local work happens on your computer; remote hosting serves files from another system.",
    "safety": "Do not put secrets in static files. Do not open firewall access for a practice server."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Where Is the Work Happening?",
    "prompt": "You run python -m http.server 8000 inside this handbook folder and open localhost:8000. Where are the files being served from?",
    "answers": [
      [
        "Your local computer",
        true,
        "localhost points back to your own machine, so the static server reads local files."
      ],
      [
        "A payment gateway",
        false,
        "No payment service is involved in serving local files."
      ],
      [
        "Every visitor computer on the internet",
        false,
        "Other visitors cannot automatically access your local server."
      ],
      [
        "A database service",
        false,
        "This static handbook does not need a database to serve files."
      ]
    ],
    "reasoning": "Local development and remote hosting can use similar browser URLs, but the serving machine is different."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "true-false",
        "question": "localhost points back to your own computer.",
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
        "question": "A remote server is accessed through a network.",
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
        "question": "What does deployment move?",
        "options": [
          "Prepared files or software to a target environment",
          "Only keyboard input",
          "Monitor pixels",
          "Nothing"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "true-false",
        "question": "npx serve requires Node.js.",
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
        "question": "Static website files should not contain secrets.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q6",
        "type": "true-false",
        "question": "A client makes requests to a server.",
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
