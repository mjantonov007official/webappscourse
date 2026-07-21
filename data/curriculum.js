(function () {
  var topics = [
    "computers", "operating-systems", "terminal", "bash", "linux", "git", "github",
    "programming-concepts", "pseudocode", "debugging", "testing", "networking",
    "dns", "http", "https", "browsers", "frontend", "accessibility", "databases",
    "sql", "architecture", "backend", "laravel", "apis", "authentication",
    "authorization", "security", "file-storage", "email", "payments", "queues",
    "redis", "caching", "docker", "nginx", "deployment", "ci-cd", "logging",
    "monitoring", "performance", "scalability", "reliability",
    "ai-assisted-development", "business-systems", "legal-awareness",
    "career-development"
  ];

  var interactionTypes = [
    "architecture-diagram", "step-flow", "expandable-concepts", "terminal-demo",
    "pseudocode-walkthrough", "comparison-table", "failure-scenario",
    "decision-simulator", "mini-challenge", "quiz", "debugging-checklist",
    "browser-observation", "command-practice", "ai-output-review"
  ];

  var labTypes = [
    "none", "terminal-observation", "browser-network-observation",
    "architecture-review", "log-investigation", "configuration-comparison",
    "failure-analysis", "ai-output-review", "pseudocode-design",
    "system-mapping", "checklist-exercise"
  ];

  var atlasFocusByTopic = {
    computers: "Atlas Commerce runs across local laptops, web servers, and managed services that each have a clear responsibility.",
    "operating-systems": "Atlas Commerce depends on operating-system users, services, files, and environment settings to run predictably.",
    terminal: "Atlas Commerce operations often start with safe terminal inspection before changing a server or deployment.",
    bash: "Atlas Commerce engineers use shell commands to inspect files, logs, processes, and deployment output.",
    linux: "Atlas Commerce production servers use Linux concepts such as users, services, logs, and package updates.",
    git: "Atlas Commerce changes move through commits, branches, reviews, and recoverable history.",
    github: "Atlas Commerce collaboration uses pull requests, reviews, issues, releases, and automated checks.",
    "programming-concepts": "Atlas Commerce workflows become clearer when engineers can describe state, decisions, and reusable logic.",
    pseudocode: "Atlas Commerce behavior can be designed in pseudocode before any framework-specific code is written.",
    debugging: "Atlas Commerce incidents require narrowing symptoms to the responsible system before guessing at fixes.",
    testing: "Atlas Commerce uses tests to protect order, payment, and account workflows from regressions.",
    networking: "Atlas Commerce page loads rely on reachable networks, ports, routing, and reliable client-server communication.",
    dns: "Atlas Commerce domains must resolve correctly before browsers can reach its storefront or admin tools.",
    http: "Atlas Commerce product pages, carts, and checkout screens all move through HTTP request and response cycles.",
    https: "Atlas Commerce protects customer data in transit with HTTPS and certificate management.",
    browsers: "Atlas Commerce must behave correctly in browsers while handling forms, storage, caching, and network limits.",
    frontend: "Atlas Commerce interfaces must communicate product, cart, checkout, and account states clearly.",
    accessibility: "Atlas Commerce must remain usable for keyboard, screen-reader, and assistive-technology workflows.",
    databases: "Atlas Commerce stores product, customer, inventory, order, and payment records while preserving relationships.",
    sql: "Atlas Commerce queries retrieve catalog, order, stock, and reporting data without damaging integrity or performance.",
    architecture: "Atlas Commerce is used to compare boundaries between storefront, checkout, jobs, cache, and integrations.",
    backend: "Atlas Commerce backend logic coordinates requests, validation, business rules, data access, and background work.",
    laravel: "Laravel can be referenced as one way Atlas Commerce might organize backend responsibilities, not as the lesson subject.",
    apis: "Atlas Commerce APIs connect storefront, admin, payment, shipping, and notification workflows through contracts.",
    authentication: "Atlas Commerce customer and staff identity flows must prove who a user is before sensitive actions.",
    authorization: "Atlas Commerce protects private orders, admin actions, and tenant data with ownership checks.",
    security: "Atlas Commerce security examples focus on realistic assets, trust boundaries, abuse cases, and safe review habits.",
    "file-storage": "Atlas Commerce stores product images, invoices, and private uploads with clear access rules.",
    email: "Atlas Commerce sends order confirmations, password resets, and delivery notifications through reliable email workflows.",
    payments: "Atlas Commerce checkout coordinates payment authorization, verification, webhooks, refunds, and reconciliation.",
    queues: "Atlas Commerce moves slow or retryable work such as emails, inventory sync, and webhooks into queues.",
    redis: "Atlas Commerce may use Redis for cache entries, sessions, locks, and queue coordination.",
    caching: "Atlas Commerce uses caching to speed repeated reads while managing stale product, stock, or price data.",
    docker: "Atlas Commerce containers can package runtime dependencies while preserving clear environment boundaries.",
    nginx: "Atlas Commerce traffic may pass through Nginx for routing, TLS termination, static files, and reverse proxy behavior.",
    deployment: "Atlas Commerce releases must move safely through build, configuration, migration, verification, and rollback steps.",
    "ci-cd": "Atlas Commerce pipelines check, package, and deploy changes with visible gates and recoverable failures.",
    logging: "Atlas Commerce logs explain what happened during requests, jobs, payments, and operational incidents.",
    monitoring: "Atlas Commerce monitoring shows health, errors, traffic, latency, and business-impact signals.",
    performance: "Atlas Commerce performance work measures browser, network, application, database, cache, and asset timing.",
    scalability: "Atlas Commerce scaling decisions balance traffic, queues, databases, cost, and operational complexity.",
    reliability: "Atlas Commerce reliability planning assumes dependency failures, retries, timeouts, backups, and graceful degradation.",
    "ai-assisted-development": "Atlas Commerce examples show how AI can help investigate, draft, review, and test without replacing judgment.",
    "business-systems": "Atlas Commerce connects technical decisions to orders, support, operations, reporting, and customer experience.",
    "legal-awareness": "Atlas Commerce examples surface privacy, accessibility, consumer, and payment obligations at a conceptual level.",
    "career-development": "Atlas Commerce gives a realistic system for practicing communication, review, ownership, and engineering growth."
  };

  function slugify(value) {
    return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function titleToTopic(title, fallbackTopics) {
    var text = title.toLowerCase();
    if (text.indexOf("dns") >= 0 || text.indexOf("domain") >= 0) return "dns";
    if (text.indexOf("http") >= 0 || text.indexOf("request") >= 0 || text.indexOf("response") >= 0 || text.indexOf("api") >= 0) return text.indexOf("api") >= 0 ? "apis" : "http";
    if (text.indexOf("https") >= 0 || text.indexOf("tls") >= 0 || text.indexOf("certificate") >= 0) return "https";
    if (text.indexOf("git") >= 0 || text.indexOf("branch") >= 0 || text.indexOf("commit") >= 0) return "git";
    if (text.indexOf("github") >= 0 || text.indexOf("pull request") >= 0) return "github";
    if (text.indexOf("terminal") >= 0 || text.indexOf("shell") >= 0 || text.indexOf("command") >= 0) return "terminal";
    if (text.indexOf("linux") >= 0 || text.indexOf("nginx") >= 0 || text.indexOf("server") >= 0) return text.indexOf("nginx") >= 0 ? "nginx" : "linux";
    if (text.indexOf("database") >= 0 || text.indexOf("data") >= 0 || text.indexOf("sql") >= 0 || text.indexOf("query") >= 0) return text.indexOf("sql") >= 0 ? "sql" : "databases";
    if (text.indexOf("security") >= 0 || text.indexOf("injection") >= 0 || text.indexOf("attack") >= 0 || text.indexOf("threat") >= 0) return "security";
    if (text.indexOf("auth") >= 0 || text.indexOf("identity") >= 0 || text.indexOf("login") >= 0 || text.indexOf("session") >= 0 || text.indexOf("token") >= 0) return text.indexOf("author") >= 0 ? "authorization" : "authentication";
    if (text.indexOf("payment") >= 0 || text.indexOf("checkout") >= 0 || text.indexOf("refund") >= 0) return "payments";
    if (text.indexOf("queue") >= 0 || text.indexOf("job") >= 0 || text.indexOf("worker") >= 0) return "queues";
    if (text.indexOf("redis") >= 0 || text.indexOf("cache") >= 0) return text.indexOf("redis") >= 0 ? "redis" : "caching";
    if (text.indexOf("docker") >= 0 || text.indexOf("container") >= 0) return "docker";
    if (text.indexOf("deploy") >= 0 || text.indexOf("release") >= 0 || text.indexOf("rollback") >= 0) return "deployment";
    if (text.indexOf("pipeline") >= 0 || text.indexOf("ci") >= 0 || text.indexOf("actions") >= 0) return "ci-cd";
    if (text.indexOf("log") >= 0 || text.indexOf("observability") >= 0) return "logging";
    if (text.indexOf("monitor") >= 0 || text.indexOf("alert") >= 0 || text.indexOf("dashboard") >= 0) return "monitoring";
    if (text.indexOf("performance") >= 0 || text.indexOf("latency") >= 0 || text.indexOf("throughput") >= 0) return "performance";
    if (text.indexOf("scal") >= 0 || text.indexOf("load") >= 0) return "scalability";
    if (text.indexOf("reliab") >= 0 || text.indexOf("failure") >= 0 || text.indexOf("timeout") >= 0 || text.indexOf("retry") >= 0) return "reliability";
    if (text.indexOf("ai") >= 0 || text.indexOf("prompt") >= 0 || text.indexOf("generated") >= 0) return "ai-assisted-development";
    if (text.indexOf("accessib") >= 0 || text.indexOf("keyboard") >= 0) return "accessibility";
    if (text.indexOf("frontend") >= 0 || text.indexOf("css") >= 0 || text.indexOf("interface") >= 0 || text.indexOf("ui") >= 0) return "frontend";
    if (text.indexOf("browser") >= 0 || text.indexOf("cors") >= 0 || text.indexOf("cookie") >= 0) return "browsers";
    return fallbackTopics[0];
  }

  function estimateMinutes(difficulty, title, labType) {
    var minutes = difficulty === "advanced" ? 45 : difficulty === "intermediate" ? 35 : 25;
    if (title.length > 34) minutes += 5;
    if (labType && labType !== "none") minutes += 10;
    return Math.min(difficulty === "advanced" ? 60 : 45, minutes);
  }

  function chooseInteractions(primaryTopic, title) {
    if (primaryTopic === "terminal" || primaryTopic === "bash" || primaryTopic === "linux" || primaryTopic === "git" || primaryTopic === "docker" || primaryTopic === "nginx") {
      return ["terminal-demo", "command-practice", "debugging-checklist"];
    }
    if (primaryTopic === "architecture" || primaryTopic === "backend" || primaryTopic === "apis" || primaryTopic === "deployment") {
      return ["architecture-diagram", "step-flow", "decision-simulator"];
    }
    if (primaryTopic === "security" || primaryTopic === "authentication" || primaryTopic === "authorization" || title.toLowerCase().indexOf("failure") >= 0) {
      return ["failure-scenario", "debugging-checklist", "mini-challenge"];
    }
    if (primaryTopic === "ai-assisted-development") {
      return ["pseudocode-walkthrough", "comparison-table", "AI-output-review".toLowerCase()];
    }
    if (primaryTopic === "browsers" || primaryTopic === "http" || primaryTopic === "https" || primaryTopic === "dns") {
      return ["step-flow", "browser-observation", "quiz"];
    }
    return ["expandable-concepts", "comparison-table", "quiz"];
  }

  function chooseLab(primaryTopic, title) {
    if (primaryTopic === "terminal" || primaryTopic === "bash" || primaryTopic === "linux" || primaryTopic === "git" || primaryTopic === "docker" || primaryTopic === "nginx") return "terminal-observation";
    if (primaryTopic === "browsers" || primaryTopic === "http" || primaryTopic === "dns" || primaryTopic === "https") return "browser-network-observation";
    if (primaryTopic === "architecture" || primaryTopic === "backend" || primaryTopic === "apis" || primaryTopic === "business-systems") return "architecture-review";
    if (primaryTopic === "logging" || primaryTopic === "monitoring") return "log-investigation";
    if (primaryTopic === "security" || primaryTopic === "authentication" || primaryTopic === "authorization" || primaryTopic === "reliability") return "failure-analysis";
    if (primaryTopic === "ai-assisted-development") return "AI-output-review".toLowerCase();
    if (primaryTopic === "programming-concepts" || primaryTopic === "pseudocode") return "pseudocode-design";
    return "none";
  }

  function summaryFor(title, chapterTitle, partTitle, primaryTopic) {
    var focus = atlasFocusByTopic[primaryTopic] || atlasFocusByTopic.computers;
    return "Understand " + title.toLowerCase() + " as part of " + chapterTitle.toLowerCase() + ", why it matters in modern web applications, and how " + focus;
  }

  function objectivesFor(title, primaryTopic) {
    var noun = title.toLowerCase();
    return [
      "Explain " + noun + " in system terms.",
      "Identify where " + noun + " appears in a production web application.",
      "Recognize common risks, tradeoffs, or failure points.",
      "Connect the concept to Atlas Commerce without relying on a programming tutorial."
    ];
  }

  var source = [
    ["computing-system-foundations", "Computing and System Foundations", "Build the mental model for computers, files, processes, environments, and servers.", ["computers"], [
      ["understanding-computers", "Understanding Computers", ["What a Computer Actually Does", "Hardware and Software", "CPU, Memory, and Storage", "Files, Folders, and Data", "Processes, Applications, and Services", "Local Computers and Remote Servers"]],
      ["development-environments", "Development Environments", ["What a Development Environment Is", "Local, Staging, and Production Environments", "How Software Moves Between Environments", "Configuration and Environment Differences"]]
    ]],
    ["operating-systems-terminal", "Operating Systems and the Terminal", "Learn how operating systems and shells expose the machine to engineers.", ["operating-systems", "terminal", "bash", "linux"], [
      ["operating-system-fundamentals", "Operating System Fundamentals", ["What an Operating System Manages", "Windows, macOS, and Linux", "Users, Groups, and Permissions", "Processes and Background Services", "Environment Variables"]],
      ["terminal-shell-fundamentals", "Terminal and Shell Fundamentals", ["Why Engineers Use the Terminal", "Understanding Shells and Bash", "Paths and Directory Navigation", "Creating, Moving, Copying, and Removing Files", "Reading and Searching Text", "Standard Input, Output, and Pipes", "Process Inspection and Signals", "Reading Logs from the Terminal", "Safe Terminal Practices"]],
      ["remote-access-package-tools", "Remote Access and Package Tools", ["Remote Servers and SSH", "SSH Keys Conceptually", "Package Managers", "Composer and npm as Dependency Tools", "Inspecting a Remote Server Safely"]]
    ]],
    ["git-github-managing-change", "Git, GitHub, and Managing Change", "Use version control to make engineering work reviewable, recoverable, and collaborative.", ["git", "github"], [
      ["version-control-foundations", "Version Control Foundations", ["Why Version Control Exists", "Repositories and Working Trees", "Staging Changes", "Commits and Commit History", "Branches", "Merging Changes", "Understanding Merge Conflicts", "Reverting and Recovering Changes"]],
      ["github-collaboration", "GitHub and Collaboration", ["Local and Remote Repositories", "Push, Pull, and Fetch", "Pull Requests", "Code Review", "Issues and Project Discussions", "Tags and Releases", "Repository Secrets and Sensitive Files", "GitHub Actions Overview", "AI-Assisted Git Workflows"]]
    ]],
    ["programming-concepts-language-independent", "Programming Concepts Without Language Dependence", "Describe software behavior through concepts, logic, pseudocode, debugging, and testing.", ["programming-concepts", "pseudocode", "debugging", "testing"], [
      ["how-programs-think", "How Programs Think", ["Instructions, State, and Data", "Conditions and Decision-Making", "Functions and Reusable Logic", "Collections and Data Structures"]],
      ["logic-errors-quality", "Logic, Errors, and Quality", ["Input, Output, and Validation", "Errors and Exceptions", "Writing Clear Pseudocode", "Debugging Systematically"]]
    ]],
    ["internet-networking", "Internet and Networking", "Understand the network foundations that make web applications reachable and reliable.", ["networking", "dns", "https"], [
      ["internet-foundations", "Internet Foundations", ["What the Internet Is", "Clients and Servers", "IP Addresses", "Ports and Services", "Latency, Timeouts, and Reliability"]],
      ["domains-secure-connections", "Domains and Secure Connections", ["Domain Names", "How DNS Works", "TLS and Encryption", "HTTPS and Certificates"]]
    ]],
    ["how-the-web-works", "How the Web Works", "Trace browser, HTTP, storage, caching, and real-time behavior from request to rendered page.", ["http", "browsers", "https"], [
      ["browser-http-foundations", "Browser and HTTP Foundations", ["How an HTTP Request Works", "HTTP Requests and Responses", "HTTP Methods", "HTTP Status Codes", "Cookies and Sessions"]],
      ["browser-behavior", "Browser Behavior", ["How Browsers Render Pages", "Forms and Form Submission", "Same-Origin Policy and CORS", "Browser Caching"]]
    ]],
    ["frontend-engineering-user-experience", "Frontend Engineering and User Experience", "Study interface structure, responsive systems, accessibility, browser interaction, and performance.", ["frontend", "accessibility", "browsers"], [
      ["building-interfaces-conceptually", "Building Interfaces Conceptually", ["Semantic HTML and Page Structure", "CSS as a Visual System", "Responsive Design", "Reusable UI Components"]],
      ["browser-interaction-accessibility", "Browser Interaction and Accessibility", ["DOM and Browser Interaction", "Frontend State Management", "Accessibility Fundamentals", "Keyboard Navigation and Focus"]]
    ]],
    ["databases-data-systems", "Databases and Data Systems", "Learn how applications store, relate, query, protect, and operate data.", ["databases", "sql"], [
      ["relational-data-foundations", "Relational Data Foundations", ["Why Databases Exist", "Tables, Rows, and Columns", "Primary Keys and Foreign Keys"]],
      ["querying-changing-data", "Querying and Changing Data", ["Creating, Reading, Updating, and Deleting Records", "Joins", "Indexes"]],
      ["production-database-behavior", "Production Database Behavior", ["Transactions", "Concurrency and Locking", "Backups and Restore Testing"]]
    ]],
    ["software-engineering-architecture", "Software Engineering and Architecture", "Move from requirements to system boundaries, architecture decisions, maintenance, and production readiness.", ["architecture", "business-systems"], [
      ["requirements-domain-thinking", "Requirements and Domain Thinking", ["Understanding the Real Problem", "Functional and Non-Functional Requirements", "Domain Modeling"]],
      ["application-architecture", "Application Architecture", ["Separation of Concerns", "Layered Architecture", "Monoliths and Modular Monoliths"]],
      ["maintaining-software", "Maintaining Software", ["Error Handling", "Logging", "Technical Debt"]]
    ]],
    ["backend-api-engineering", "Backend and API Engineering", "Understand backend responsibilities, API contracts, lifecycle design, and integration failures.", ["backend", "apis", "laravel"], [
      ["backend-application-responsibilities", "Backend Application Responsibilities", ["What a Backend Application Does", "Backend Request Lifecycle", "Routing, Controllers, and Middleware", "Validation and Business Logic", "Events, Jobs, and Scheduling"]],
      ["api-engineering", "API Engineering", ["What an API Is", "REST Concepts", "JSON Request and Response Design", "Pagination, Filtering, and Sorting", "Retries, Timeouts, and Third-Party Failures"]]
    ]],
    ["identity-application-security", "Identity and Application Security", "Develop practical security awareness for identity, authorization, data protection, and code review.", ["authentication", "authorization", "security"], [
      ["authentication-authorization", "Authentication and Authorization", ["Identity, Authentication, and Authorization", "Sessions and Tokens", "OAuth and OpenID Connect", "Roles, Permissions, and Ownership Checks", "Common Identity Mistakes"]],
      ["security-engineering", "Security Engineering", ["Security Mindset and Threat Modeling", "SQL Injection", "Cross-Site Scripting", "Broken Access Control", "File Upload and Path Traversal Risks", "Secrets Management"]]
    ]],
    ["application-services-business-workflows", "Application Services and Business Workflows", "Connect core application services to realistic business workflows such as files, email, payments, queues, and caching.", ["file-storage", "email", "payments", "queues", "redis", "caching"], [
      ["file-storage-media", "File Storage and Media", ["Local and Object Storage", "Public and Private Files"]],
      ["email-notifications", "Email and Notifications", ["How Email Delivery Works", "Delivery Failures and Retries"]],
      ["payments-ecommerce", "Payments and E-commerce", ["Checkout Lifecycle", "Payment Webhooks", "Shopping Carts and Orders"]],
      ["background-processing-caching", "Background Processing and Caching", ["Why Queues Exist", "Cache Keys and Expiration", "Redis Production Considerations"]]
    ]],
    ["infrastructure-docker-deployment", "Infrastructure, Docker, and Deployment", "Learn server, container, release, and pipeline concepts that make applications operable.", ["linux", "docker", "nginx", "deployment", "ci-cd"], [
      ["linux-web-servers", "Linux and Web Servers", ["Linux Server Fundamentals", "Nginx and Reverse Proxies", "Server Logs and Troubleshooting"]],
      ["docker-containers", "Docker and Containers", ["Why Containers Exist", "Docker Images and Containers", "Ports, Volumes, and Networks"]],
      ["deployment-ci-cd", "Deployment and CI/CD", ["Build and Release Processes", "Safe Database Migrations", "Rollbacks", "GitHub Actions"]]
    ]],
    ["operations-performance-reliability", "Operations, Performance, and Reliability", "Practice production thinking through observability, speed, capacity, failure handling, and resilience.", ["logging", "monitoring", "performance", "scalability", "reliability"], [
      ["logging-observability", "Logging and Observability", ["Why Logs Exist", "Metrics, Traces, and Alerts", "Incident Detection"]],
      ["performance-scalability", "Performance and Scalability", ["Latency and Throughput", "Database Query Optimization", "Load Balancers and Horizontal Scaling", "Black Friday Traffic Planning"]],
      ["reliability-engineering", "Reliability Engineering", ["Reliability, Availability, and Resilience", "Timeouts, Retries, and Backoff", "Restore Testing for Reliability"]]
    ]],
    ["ai-assisted-software-engineering", "AI-Assisted Software Engineering", "Use AI tools deliberately while preserving engineering responsibility, review, and verification.", ["ai-assisted-development", "pseudocode", "testing", "security"], [
      ["understanding-ai-development-tools", "Understanding AI Development Tools", ["What AI Coding Assistants Do", "AI Limitations and Hallucinations", "Privacy and Proprietary Code"]],
      ["engineering-with-ai", "Engineering with AI", ["Writing Better Requirements Prompts", "Architecture and Pseudocode-First Prompts", "Debugging and Testing Prompts"]],
      ["reviewing-ai-work", "Reviewing AI Work", ["Reviewing Generated Code", "Detecting Fabricated APIs", "Testing Generated Output"]]
    ]],
    ["business-accessibility-legal-career", "Business Systems, Accessibility, Legal Awareness, and Career Growth", "Tie engineering decisions to business impact, accessibility, legal awareness, communication, and professional growth.", ["business-systems", "accessibility", "legal-awareness", "career-development"], [
      ["business-systems-operations", "Business Systems and Operations", ["Business Workflows and System Boundaries", "Analytics and Reporting", "Customer Support Workflows"]],
      ["professional-practice", "Professional Practice", ["Accessibility and Legal Awareness", "Communicating Technical Tradeoffs", "Career Growth for Web Engineers", "Owning Work in the AI Era"]]
    ]]
  ];

  var completeLessonSlugs = {
    "what-a-computer-actually-does": true,
    "hardware-and-software": true,
    "cpu-memory-and-storage": true,
    "files-folders-and-data": true,
    "processes-applications-and-services": true,
    "local-computers-and-remote-servers": true,
    "how-an-http-request-works": true,
    "what-an-operating-system-manages": true,
    "windows-macos-and-linux": true,
    "users-groups-and-permissions": true,
    "processes-and-background-services": true,
    "environment-variables": true,
    "why-engineers-use-the-terminal": true,
    "understanding-shells-and-bash": true,
    "paths-and-directory-navigation": true,
    "creating-moving-copying-and-removing-files": true,
    "reading-and-searching-text": true,
    "standard-input-output-and-pipes": true,
    "process-inspection-and-signals": true,
    "reading-logs-from-the-terminal": true,
    "safe-terminal-practices": true,
    "remote-servers-and-ssh": true,
    "ssh-keys-conceptually": true,
    "package-managers": true,
    "composer-and-npm-as-dependency-tools": true,
    "inspecting-a-remote-server-safely": true,
    "why-version-control-exists": true,
    "repositories-and-working-trees": true,
    "staging-changes": true,
    "commits-and-commit-history": true,
    "branches": true,
    "merging-changes": true,
    "understanding-merge-conflicts": true,
    "reverting-and-recovering-changes": true,
    "local-and-remote-repositories": true,
    "push-pull-and-fetch": true,
    "pull-requests": true,
    "code-review": true,
    "issues-and-project-discussions": true,
    "tags-and-releases": true,
    "repository-secrets-and-sensitive-files": true,
    "github-actions-overview": true,
    "ai-assisted-git-workflows": true
  };

  function buildCurriculum() {
    var lessonIndex = 0;
    var previousId = null;
    var allLessonIds = [];
    var parts = source.map(function (partSource, partIndex) {
      var partId = "part-" + partSource[0];
      var part = {
        id: partId,
        position: partIndex + 1,
        title: "Part " + (partIndex + 1) + " - " + partSource[1],
        shortTitle: partSource[1],
        summary: partSource[2],
        topics: partSource[3],
        chapters: []
      };
      part.chapters = partSource[4].map(function (chapterSource, chapterIndex) {
        var chapterId = "chapter-" + chapterSource[0];
        var chapter = {
          id: chapterId,
          partId: partId,
          position: chapterIndex + 1,
          title: "Chapter " + (partIndex + 1) + "." + (chapterIndex + 1) + " - " + chapterSource[1],
          shortTitle: chapterSource[1],
          summary: "A focused sequence on " + chapterSource[1].toLowerCase() + " inside " + partSource[1].toLowerCase() + ".",
          topics: partSource[3],
          lessons: []
        };
        chapter.lessons = chapterSource[2].map(function (title, lessonPosition) {
          lessonIndex += 1;
          var primaryTopic = titleToTopic(title, partSource[3]);
          var lessonId = title === "How an HTTP Request Works" ? "lesson-http-request" : "lesson-" + slugify(title);
          var slug = title === "How an HTTP Request Works" ? "how-an-http-request-works" : slugify(title);
          var difficulty = partIndex < 6 ? "beginner" : partIndex < 13 ? "intermediate" : "advanced";
          var labType = chooseLab(primaryTopic, title);
          var complete = !!completeLessonSlugs[slug];
          var lesson = {
            id: lessonId,
            slug: slug,
            partId: partId,
            chapterId: chapterId,
            position: lessonPosition + 1,
            globalPosition: lessonIndex,
            title: title,
            summary: summaryFor(title, chapterSource[1], partSource[1], primaryTopic),
            learningObjectives: objectivesFor(title, primaryTopic),
            difficulty: title === "How an HTTP Request Works" ? "beginner" : difficulty,
            estimatedMinutes: title === "How an HTTP Request Works" ? 35 : estimateMinutes(difficulty, title, labType),
            status: complete ? "complete" : "planned",
            topics: Array.from(new Set([primaryTopic].concat(partSource[3]))),
            prerequisites: previousId ? [previousId] : [],
            relatedLessons: [],
            atlasCommerceFocus: atlasFocusByTopic[primaryTopic] || atlasFocusByTopic.computers,
            plannedInteractions: title === "How an HTTP Request Works" ? ["step-flow", "architecture-diagram", "mini-challenge", "quiz", "debugging-checklist"] : chooseInteractions(primaryTopic, title),
            labType: title === "How an HTTP Request Works" ? "browser-network-observation" : labType,
            contentKey: complete ? slug : null,
            url: "lesson.html?lesson=" + slug
          };
          previousId = lessonId;
          allLessonIds.push(lessonId);
          return lesson;
        });
        return chapter;
      });
      return part;
    });

    var orderedLessons = [];
    parts.forEach(function (part) {
      part.chapters.forEach(function (chapter) {
        chapter.lessons.forEach(function (lesson) {
          orderedLessons.push(lesson);
        });
      });
    });
    orderedLessons.forEach(function (lesson, index) {
      var related = [];
      if (orderedLessons[index - 1]) related.push(orderedLessons[index - 1].id);
      if (orderedLessons[index + 1]) related.push(orderedLessons[index + 1].id);
      lesson.relatedLessons = related;
    });
    return parts;
  }

  window.EngineeringHandbookTaxonomy = {
    topics: topics,
    interactionTypes: interactionTypes,
    labTypes: labTypes,
    difficulties: ["beginner", "intermediate", "advanced"],
    statuses: ["complete", "planned"],
    atlasFocusByTopic: atlasFocusByTopic
  };

  window.AtlasCommerce = {
    title: "Atlas Commerce",
    summary: "A fictional production-style e-commerce platform used to explain engineering concepts in a realistic system.",
    features: ["Product catalog", "Categories", "Search", "Customer accounts", "Shopping cart", "Checkout", "Orders", "Inventory", "Payments", "Refunds", "Shipping", "Email notifications", "Product images", "Reviews", "Administration", "Background jobs", "Queues", "Redis", "Caching", "Monitoring", "Analytics", "Fraud signals", "Customer support workflows"]
  };

  window.EngineeringHandbookCurriculum = buildCurriculum();
})();
