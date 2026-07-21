(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["what-a-computer-actually-does"] = {
  "id": "lesson-what-a-computer-actually-does",
  "slug": "what-a-computer-actually-does",
  "title": "What a Computer Actually Does",
  "summary": "Understand a computer as a system that receives input, stores state, executes instructions, and produces useful output in modern web applications.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: A learner opens Atlas Commerce, searches for a laptop, and sees product results appear. The visible result feels simple, but the computer is receiving input, holding temporary state, processing instructions, requesting information, and drawing output.",
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
    "body": "A learner opens Atlas Commerce, searches for a laptop, and sees product results appear. The visible result feels simple, but the computer is receiving input, holding temporary state, processing instructions, requesting information, and drawing output."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "Input",
      "Signals or data entering the computer, such as keyboard text, mouse clicks, touch events, network packets, or files."
    ],
    [
      "Processing",
      "The work of following instructions, comparing values, calculating results, and coordinating devices."
    ],
    [
      "Memory",
      "Fast temporary working space used while programs are running."
    ],
    [
      "Storage",
      "Persistent space where files, applications, and saved data remain after power is removed."
    ],
    [
      "Output",
      "Information the computer produces, such as pixels on a screen, sound, printed pages, or network messages."
    ],
    [
      "Instructions",
      "Ordered steps that tell hardware what operations to perform."
    ],
    [
      "State",
      "The current condition of a system, such as a search box containing laptop."
    ],
    [
      "Program",
      "A stored set of instructions that can be run by the operating system."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "step-flow",
      "title": "Input, Process, Output Flow",
      "steps": [
        [
          "Keyboard / Mouse",
          "The learner types a search term or clicks the search field.",
          "Input lets the computer receive intent from the user.",
          "Broken keyboard, disconnected mouse, disabled field, or ignored event."
        ],
        [
          "Input received",
          "The operating system and browser turn device activity into data the page can use.",
          "Raw actions need to become meaningful application events.",
          "Focus may be in the wrong place or the browser may block input."
        ],
        [
          "Instructions processed",
          "The browser and application logic decide what should happen next.",
          "Instructions transform input into an action.",
          "Slow code, bad assumptions, or missing data can interrupt work."
        ],
        [
          "Temporary state stored",
          "The search text and current page state are held in memory.",
          "Running programs need working space.",
          "Memory pressure can slow the whole machine."
        ],
        [
          "Output displayed",
          "The screen updates with matching products or feedback.",
          "The learner needs a visible result.",
          "Rendering bugs or network failures can prevent useful output."
        ]
      ]
    }
  ],
  "architectureDiagram": {
    "type": "hub",
    "title": "A Useful Computer Model",
    "alt": "Input devices feed a CPU and memory system, storage preserves data, and output devices show results.",
    "nodes": [
      "Input Devices",
      "CPU",
      "Memory",
      "Storage",
      "Output Devices"
    ]
  },
  "pseudocode": [
    "WHEN user enters a search term",
    "    receive keyboard input",
    "    store current input",
    "    process the search action",
    "    request matching information",
    "    prepare visible results",
    "    display output on screen",
    "END"
  ],
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
    "better": "Help me reason about what a computer actually does in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Identify input, processing, storage, and output in everyday tasks.",
    "steps": [
      "Open a document or image file and name the input, stored data, processing, and output.",
      "Play music and identify where input, processing, temporary state, storage, and output appear.",
      "Search a website and describe what the local computer contributes before any server responds."
    ],
    "observe": [
      "Which part is user input?",
      "What changes temporarily while the task runs?",
      "What output is produced?"
    ],
    "expected": "The same input-processing-storage-output pattern appears across many different tasks.",
    "safety": "Use ordinary files and websites. Do not inspect private data you do not want in your notes."
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
        "type": "multiple-choice",
        "question": "Which phrase best describes a computer?",
        "options": [
          "A machine that only stores files",
          "A system that receives input, processes instructions, stores data, and produces output",
          "A screen attached to the internet",
          "A database for programs"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Where is temporary working state usually held while a program runs?",
        "options": [
          "RAM or memory",
          "A monitor",
          "A folder name",
          "A keyboard"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "Typing laptop into search is an example of what?",
        "options": [
          "Output",
          "Input",
          "Firmware",
          "A server rack"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "true-false",
        "question": "Output can include pixels on a screen.",
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
        "question": "Why is this model useful to engineers?",
        "options": [
          "It replaces all debugging tools",
          "It helps locate where a task may be failing",
          "It proves hardware never matters",
          "It removes the need for testing"
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
    "lesson-hardware-and-software",
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
