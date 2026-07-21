(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["cpu-memory-and-storage"] = {
  "id": "lesson-cpu-memory-and-storage",
  "slug": "cpu-memory-and-storage",
  "title": "CPU, Memory, and Storage",
  "summary": "Distinguish CPU work, memory pressure, and persistent storage so performance problems can be investigated with better evidence.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: A learner opens many browser tabs while downloading a large project archive. The computer may feel slow, but the cause could be CPU work, memory pressure, storage activity, or a mixture.",
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
    "body": "A learner opens many browser tabs while downloading a large project archive. The computer may feel slow, but the cause could be CPU work, memory pressure, storage activity, or a mixture."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "CPU",
      "The processor that executes instructions."
    ],
    [
      "Core",
      "A processing unit inside a CPU that can work on instructions."
    ],
    [
      "Instruction",
      "A small operation the CPU can perform."
    ],
    [
      "RAM",
      "Fast temporary memory for running programs and active data."
    ],
    [
      "Temporary state",
      "Information needed only while work is in progress."
    ],
    [
      "Storage",
      "Persistent space for files, applications, images, and databases."
    ],
    [
      "SSD",
      "A fast storage device with no spinning disk."
    ],
    [
      "Capacity",
      "How much a resource can hold or handle."
    ],
    [
      "Speed",
      "How quickly a resource can complete work."
    ],
    [
      "Bottleneck",
      "The limiting resource that slows the overall task."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "decision",
      "title": "Resource Pressure Simulator",
      "prompt": "A laptop has 30 browser tabs open, CPU is 20%, memory is 95%, and disk activity is low. What should you investigate first?",
      "answers": [
        [
          "Monitor brightness",
          false,
          "Brightness affects display power, not this performance pattern."
        ],
        [
          "Memory usage",
          true,
          "High memory pressure is the strongest signal in the observations."
        ],
        [
          "Folder names",
          false,
          "Folder names are unlikely to explain system-wide slowness."
        ],
        [
          "Keyboard settings",
          false,
          "Input settings do not match the observed resource pressure."
        ]
      ],
      "reasoning": "Senior engineers start with the strongest measurement, then confirm with more evidence before changing anything."
    }
  ],
  "architectureDiagram": {
    "type": "storage",
    "title": "CPU, Memory, and Storage",
    "alt": "CPU executes instructions, memory holds active state, and storage preserves files.",
    "nodes": [
      "CPU executes instructions",
      "Memory holds active work",
      "Storage preserves files and applications"
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
    "better": "Help me reason about cpu, memory, and storage in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Observe resource usage without forcing a failure.",
    "steps": [
      "Open your operating system resource monitor such as Task Manager, Activity Monitor, or System Monitor.",
      "Notice CPU, memory, and disk activity while opening a browser tab.",
      "If comfortable, compare activity while opening a large application."
    ],
    "observe": [
      "Which resource changes fastest?",
      "Which resource stays high?",
      "What would you measure before blaming the frontend?"
    ],
    "expected": "Different activities pressure different resources. Measurements narrow the investigation.",
    "safety": "Do not intentionally overload your computer or close unknown system processes."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Resource Pressure Simulator",
    "prompt": "A laptop has 30 browser tabs open, CPU is 20%, memory is 95%, and disk activity is low. What should you investigate first?",
    "answers": [
      [
        "Monitor brightness",
        false,
        "Brightness affects display power, not this performance pattern."
      ],
      [
        "Memory usage",
        true,
        "High memory pressure is the strongest signal in the observations."
      ],
      [
        "Folder names",
        false,
        "Folder names are unlikely to explain system-wide slowness."
      ],
      [
        "Keyboard settings",
        false,
        "Input settings do not match the observed resource pressure."
      ]
    ],
    "reasoning": "Senior engineers start with the strongest measurement, then confirm with more evidence before changing anything."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "Which resource executes instructions?",
        "options": [
          "Storage",
          "CPU",
          "Monitor",
          "Folder"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q2",
        "type": "true-false",
        "question": "RAM is usually persistent after power is removed.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q3",
        "type": "true-false",
        "question": "Opening many tabs often increases memory use.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Where are product images stored long term?",
        "options": [
          "Persistent storage",
          "CPU cores",
          "Keyboard buffer",
          "Screen pixels"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q5",
        "type": "true-false",
        "question": "A bottleneck is the resource limiting the task.",
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
