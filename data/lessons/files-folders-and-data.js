(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["files-folders-and-data"] = {
  "id": "lesson-files-folders-and-data",
  "slug": "files-folders-and-data",
  "title": "Files, Folders, and Data",
  "summary": "Understand how operating systems organize persistent data with paths, folders, names, formats, permissions, and conventions used by web projects.",
  "introduction": [
    "A useful engineering model starts with an everyday situation: This handbook project contains HTML files, CSS files, JavaScript files, images, lesson data, and documentation. Organization and naming make the site easier to serve, debug, and extend.",
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
    "body": "This handbook project contains HTML files, CSS files, JavaScript files, images, lesson data, and documentation. Organization and naming make the site easier to serve, debug, and extend."
  },
  "whyThisExists": [
    "Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."
  ],
  "problemItSolves": [
    "This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."
  ],
  "keyConcepts": [
    [
      "File",
      "A named unit of stored data."
    ],
    [
      "Folder or directory",
      "A container used to organize files and other folders."
    ],
    [
      "Path",
      "A location that tells the system where a file or folder is."
    ],
    [
      "Absolute path",
      "A full location from the filesystem root or drive."
    ],
    [
      "Relative path",
      "A location described from the current folder."
    ],
    [
      "Extension",
      "The suffix that often hints at file type, such as .html or .css."
    ],
    [
      "Metadata",
      "Information about a file, such as size or modified time."
    ],
    [
      "File format",
      "The structure used to interpret file contents."
    ],
    [
      "Encoding",
      "Rules for turning bytes into text."
    ],
    [
      "Permissions",
      "Rules controlling who can read, write, or execute a file."
    ]
  ],
  "interactiveBlocks": [
    {
      "type": "decision",
      "title": "Path Builder",
      "prompt": "Given handbook/css/base.css, which path points from index.html to the base stylesheet?",
      "answers": [
        [
          "css/base.css",
          true,
          "The css folder is next to index.html, so this relative path works."
        ],
        [
          "/users/base.css",
          false,
          "That guesses an unrelated absolute path."
        ],
        [
          "data/base.css",
          false,
          "The file is not inside data."
        ],
        [
          "base.css/css",
          false,
          "The folder and file order is reversed."
        ]
      ],
      "reasoning": "Path bugs are common because the browser resolves relative paths from the current document location."
    }
  ],
  "architectureDiagram": {
    "type": "tree",
    "title": "Project File Organization",
    "alt": "A handbook folder contains index.html, css/base.css, and data/curriculum.js.",
    "nodes": [
      "handbook/",
      "index.html",
      "css/base.css",
      "data/curriculum.js",
      "docs/curriculum-guide.md"
    ]
  },
  "pseudocode": [
    "WHEN application needs curriculum data",
    "    locate the requested file path",
    "    check whether the file exists",
    "    check whether access is allowed",
    "    read file contents",
    "    interpret the file format",
    "    use the data",
    "END"
  ],
  "terminalCommand": {
    "command": "mkdir -p handbook/css handbook/js handbook/data\ntouch handbook/index.html",
    "explanation": "Creates a small project folder structure and an empty HTML file on Unix-like shells.",
    "output": "handbook/ with css, js, data, and index.html",
    "warning": "On Windows PowerShell, mkdir works differently and touch may not exist. Use New-Item or a graphical file manager if preferred."
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
    "better": "Help me reason about files, folders, and data in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.",
    "why": "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause."
  },
  "handsOnLab": {
    "goal": "Create or inspect an organized folder structure.",
    "steps": [
      "Create a folder named handbook-lab.",
      "Inside it, create folders named css, js, and data.",
      "Create one empty index.html file.",
      "Explain which paths are relative from the project root."
    ],
    "observe": [
      "What names make purpose clear?",
      "Which file extension signals a web page?",
      "What path would a browser use for css/base.css?"
    ],
    "expected": "A small project becomes easier to reason about when related files have predictable locations.",
    "safety": "Use a temporary practice folder so you do not disturb real project files."
  },
  "miniChallenge": {
    "type": "decision",
    "title": "Path Builder",
    "prompt": "Given handbook/css/base.css, which path points from index.html to the base stylesheet?",
    "answers": [
      [
        "css/base.css",
        true,
        "The css folder is next to index.html, so this relative path works."
      ],
      [
        "/users/base.css",
        false,
        "That guesses an unrelated absolute path."
      ],
      [
        "data/base.css",
        false,
        "The file is not inside data."
      ],
      [
        "base.css/css",
        false,
        "The folder and file order is reversed."
      ]
    ],
    "reasoning": "Path bugs are common because the browser resolves relative paths from the current document location."
  },
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "type": "true-false",
        "question": "A folder can contain files and other folders.",
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
        "question": "Which path is relative?",
        "options": [
          "C:/Users/Ava/site/index.html",
          "css/base.css",
          "/var/www/site/index.html",
          "https://example.com"
        ],
        "answerIndex": 1,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q3",
        "type": "multiple-choice",
        "question": "What does a file extension usually suggest?",
        "options": [
          "File type or format",
          "CPU speed",
          "Network address",
          "Monitor size"
        ],
        "answerIndex": 0,
        "explanation": "This answer follows from the lesson model and the Atlas Commerce examples."
      },
      {
        "id": "q4",
        "type": "true-false",
        "question": "Permission denied may mean access rules blocked the file.",
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
        "question": "Wrong relative paths commonly cause file not found errors.",
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
