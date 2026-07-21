(function () {
  window.EngineeringHandbookSampleLessons = {
    currentLessonId: "lesson-http-request",
    firstLessonId: "what-is-a-computer",
    requestFlow: [
      ["Browser", "The browser prepares the URL and asks how to reach the site.", "It turns a user action into a network request.", "Bad URLs, offline devices, blocked requests.", "Check the URL, browser network panel, and local connection."],
      ["DNS lookup", "The domain is resolved to a network address.", "Humans use names; networks route to addresses.", "Expired domains, wrong DNS records, resolver failures.", "Use nslookup and compare DNS records."],
      ["TCP connection", "The browser establishes a reliable connection to the destination.", "HTTP needs a connection before messages can move.", "Firewalls, unreachable hosts, packet loss.", "Test reachability and server listening ports."],
      ["TLS connection", "The browser and server negotiate encryption for HTTPS.", "Sensitive data should be protected in transit.", "Expired certificates, hostname mismatch, old protocols.", "Inspect certificate details and TLS errors."],
      ["HTTP request", "The browser sends method, path, headers, and cookies.", "The server needs a precise description of the requested resource.", "Wrong path, missing headers, rejected cookies.", "Inspect request headers and status codes."],
      ["Web server", "Nginx or another web server receives and routes traffic.", "It handles the edge of the application environment.", "Bad routing, server overload, configuration errors.", "Check web server logs and response status."],
      ["Application", "Business logic decides what product page to build.", "Dynamic pages depend on application decisions.", "Exceptions, invalid data, missing authorization.", "Check application logs and trace IDs."],
      ["Database", "The application retrieves product details and related data.", "Durable data lives outside the web process.", "Connection failures, slow queries, missing rows.", "Measure queries and check database health."],
      ["HTTP response", "The server returns status, headers, and content.", "The browser needs a response it can interpret.", "500 errors, redirects, cache mistakes.", "Inspect response headers, body, and timing."],
      ["Browser rendering", "The browser parses the response and paints the page.", "Returned content must become a usable interface.", "Broken assets, render-blocking files, client errors.", "Use the network and console panels."]
    ],
    quiz: [
      { question: "What is the main purpose of DNS?", options: ["Translate domains into network addresses", "Store product records", "Render HTML", "Encrypt passwords"], answer: 0, feedback: "DNS helps a browser find where a named site can be reached." },
      { question: "A request is sent by the client and a response is returned by the server.", options: ["True", "False"], answer: 0, feedback: "That request-response shape is the core HTTP pattern." },
      { question: "What does HTTPS add to HTTP?", options: ["Transport protection through TLS", "A database connection", "A faster CPU", "A shopping cart"], answer: 0, feedback: "HTTPS protects the exchange while data moves across the network." },
      { question: "A 500 status code usually means the server side had a problem handling the request.", options: ["True", "False"], answer: 0, feedback: "A 500-level response points to server-side failure conditions." },
      { question: "What is the database responsible for in the Atlas Commerce product page flow?", options: ["Holding durable product data", "Resolving DNS", "Drawing pixels", "Replacing HTTPS"], answer: 0, feedback: "The application asks the database for durable product information." }
    ]
  };
})();
