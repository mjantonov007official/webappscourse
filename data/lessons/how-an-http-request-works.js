(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["how-an-http-request-works"] = {
  "id": "lesson-http-request",
  "slug": "how-an-http-request-works",
  "title": "How an HTTP Request Works",
  "summary": "Preserved Phase 1 complete lesson about DNS, secure connections, servers, applications, databases, responses, and browser rendering.",
  "learningObjectives": [
    "Explain the journey of a browser request.",
    "Identify DNS, server, application, and database responsibilities.",
    "Recognize common failure points.",
    "Explain how Atlas Commerce uses this flow."
  ],
  "quiz": {
    "passingScore": 70,
    "questions": [
      {
        "id": "q1",
        "question": "What is DNS for?",
        "options": [
          "Translating domains into network addresses",
          "Rendering CSS"
        ],
        "answerIndex": 0
      },
      {
        "id": "q2",
        "question": "A response is returned by the server.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0
      },
      {
        "id": "q3",
        "question": "HTTPS protects data in transit.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0
      },
      {
        "id": "q4",
        "question": "A 500 status often points to server-side failure.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0
      },
      {
        "id": "q5",
        "question": "A database can hold product records.",
        "options": [
          "True",
          "False"
        ],
        "answerIndex": 0
      }
    ]
  },
  "summaryPoints": [
    "HTTP is a request-response protocol."
  ],
  "relatedLessons": [
    "lesson-what-the-internet-is"
  ],
  "officialResources": [
    {
      "title": "MDN Web Docs - HTTP",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
    }
  ]
};
})();
