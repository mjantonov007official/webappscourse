const fs = require("fs");
const path = require("path");

const out = path.join(process.cwd(), "data", "lessons");
fs.mkdirSync(out, { recursive: true });

const related = [
  "lesson-what-a-computer-actually-does",
  "lesson-hardware-and-software",
  "lesson-cpu-memory-and-storage",
  "lesson-files-folders-and-data",
  "lesson-processes-applications-and-services",
  "lesson-local-computers-and-remote-servers"
];

const lessons = [
  {
    id: "lesson-what-a-computer-actually-does",
    slug: "what-a-computer-actually-does",
    title: "What a Computer Actually Does",
    summary: "Understand a computer as a system that receives input, stores state, executes instructions, and produces useful output in modern web applications.",
    scenario: "A learner opens Atlas Commerce, searches for a laptop, and sees product results appear. The visible result feels simple, but the computer is receiving input, holding temporary state, processing instructions, requesting information, and drawing output.",
    concepts: [["Input", "Signals or data entering the computer, such as keyboard text, mouse clicks, touch events, network packets, or files."], ["Processing", "The work of following instructions, comparing values, calculating results, and coordinating devices."], ["Memory", "Fast temporary working space used while programs are running."], ["Storage", "Persistent space where files, applications, and saved data remain after power is removed."], ["Output", "Information the computer produces, such as pixels on a screen, sound, printed pages, or network messages."], ["Instructions", "Ordered steps that tell hardware what operations to perform."], ["State", "The current condition of a system, such as a search box containing laptop."], ["Program", "A stored set of instructions that can be run by the operating system."]],
    interaction: { type: "step-flow", title: "Input, Process, Output Flow", steps: [["Keyboard / Mouse", "The learner types a search term or clicks the search field.", "Input lets the computer receive intent from the user.", "Broken keyboard, disconnected mouse, disabled field, or ignored event."], ["Input received", "The operating system and browser turn device activity into data the page can use.", "Raw actions need to become meaningful application events.", "Focus may be in the wrong place or the browser may block input."], ["Instructions processed", "The browser and application logic decide what should happen next.", "Instructions transform input into an action.", "Slow code, bad assumptions, or missing data can interrupt work."], ["Temporary state stored", "The search text and current page state are held in memory.", "Running programs need working space.", "Memory pressure can slow the whole machine."], ["Output displayed", "The screen updates with matching products or feedback.", "The learner needs a visible result.", "Rendering bugs or network failures can prevent useful output."]] },
    diagram: { type: "hub", title: "A Useful Computer Model", alt: "Input devices feed a CPU and memory system, storage preserves data, and output devices show results.", nodes: ["Input Devices", "CPU", "Memory", "Storage", "Output Devices"] },
    pseudocode: ["WHEN user enters a search term", "    receive keyboard input", "    store current input", "    process the search action", "    request matching information", "    prepare visible results", "    display output on screen", "END"],
    lab: { goal: "Identify input, processing, storage, and output in everyday tasks.", steps: ["Open a document or image file and name the input, stored data, processing, and output.", "Play music and identify where input, processing, temporary state, storage, and output appear.", "Search a website and describe what the local computer contributes before any server responds."], observe: ["Which part is user input?", "What changes temporarily while the task runs?", "What output is produced?"], expected: "The same input-processing-storage-output pattern appears across many different tasks.", safety: "Use ordinary files and websites. Do not inspect private data you do not want in your notes." },
    quiz: [["Which phrase best describes a computer?", ["A machine that only stores files", "A system that receives input, processes instructions, stores data, and produces output", "A screen attached to the internet", "A database for programs"], 1], ["Where is temporary working state usually held while a program runs?", ["RAM or memory", "A monitor", "A folder name", "A keyboard"], 0], ["Typing laptop into search is an example of what?", ["Output", "Input", "Firmware", "A server rack"], 1], ["Output can include pixels on a screen.", ["True", "False"], 0], ["Why is this model useful to engineers?", ["It replaces all debugging tools", "It helps locate where a task may be failing", "It proves hardware never matters", "It removes the need for testing"], 1]]
  },
  {
    id: "lesson-hardware-and-software",
    slug: "hardware-and-software",
    title: "Hardware and Software",
    summary: "Learn how physical components and instructions cooperate, why neither is useful alone, and how web applications depend on both local and remote machines.",
    scenario: "Atlas Commerce appears inside a browser on a laptop, but the page also depends on software running on remote server hardware. A checkout issue may come from a broken device, a software bug, or a configuration mistake.",
    concepts: [["Hardware", "Physical equipment such as CPUs, memory, disks, keyboards, screens, and network cards."], ["Software", "Instructions and data that tell hardware what to do."], ["Firmware", "Low-level software stored close to hardware that helps devices start and operate."], ["Operating system", "System software that manages hardware resources and provides services to applications."], ["Application", "Software a user or system runs to perform a task."], ["Driver", "Software that helps the operating system communicate with hardware."], ["Server hardware", "Physical or virtual machines used to run services for other computers."], ["Cloud", "Rented computing resources operated by another provider."]],
    interaction: { type: "comparison", title: "Classify the System Pieces", prompt: "Choose whether each item is hardware or software.", items: [["Keyboard", "Hardware", "A keyboard is a physical input device."], ["Browser", "Software", "A browser is an application made of instructions."], ["Operating system", "Software", "It is system software that coordinates hardware."], ["SSD", "Hardware", "An SSD is physical persistent storage."], ["Web application", "Software", "The application is instructions and data running on hardware."], ["Network card", "Hardware", "A network card is a physical device."], ["Database software", "Software", "The database engine is software running on a computer."], ["CPU", "Hardware", "The CPU is physical processing hardware."]] },
    diagram: { type: "layered", title: "Hardware and Software Layers", alt: "Applications run on an operating system, which coordinates physical hardware.", nodes: ["Applications", "Operating System and Drivers", "Firmware", "Physical Hardware"] },
    lab: { goal: "Inspect basic hardware and software without changing system settings.", steps: ["Open your system information tool: Settings on Windows, About This Mac on macOS, or a system details tool on Linux.", "Find processor, memory, storage, and operating system version.", "List one application you use and one hardware component it depends on."], observe: ["Which facts describe hardware?", "Which facts describe software?", "Which details might matter when debugging performance?"], expected: "Everyday applications depend on both physical capacity and installed software.", safety: "Do not uninstall software or change drivers during this observation." },
    quiz: [["A CPU is hardware.", ["True", "False"], 0], ["A browser is usually classified as what?", ["Hardware", "Software", "A cable", "A folder"], 1], ["What does an operating system manage?", ["Only website colors", "Hardware resources and application services", "Only passwords", "Only databases"], 1], ["Cloud hosting means rented computers and services.", ["True", "False"], 0], ["A configuration failure is always a hardware failure.", ["True", "False"], 1]]
  },
  {
    id: "lesson-cpu-memory-and-storage",
    slug: "cpu-memory-and-storage",
    title: "CPU, Memory, and Storage",
    summary: "Distinguish CPU work, memory pressure, and persistent storage so performance problems can be investigated with better evidence.",
    scenario: "A learner opens many browser tabs while downloading a large project archive. The computer may feel slow, but the cause could be CPU work, memory pressure, storage activity, or a mixture.",
    concepts: [["CPU", "The processor that executes instructions."], ["Core", "A processing unit inside a CPU that can work on instructions."], ["Instruction", "A small operation the CPU can perform."], ["RAM", "Fast temporary memory for running programs and active data."], ["Temporary state", "Information needed only while work is in progress."], ["Storage", "Persistent space for files, applications, images, and databases."], ["SSD", "A fast storage device with no spinning disk."], ["Capacity", "How much a resource can hold or handle."], ["Speed", "How quickly a resource can complete work."], ["Bottleneck", "The limiting resource that slows the overall task."]],
    interaction: { type: "decision", title: "Resource Pressure Simulator", prompt: "A laptop has 30 browser tabs open, CPU is 20%, memory is 95%, and disk activity is low. What should you investigate first?", answers: [["Monitor brightness", false, "Brightness affects display power, not this performance pattern."], ["Memory usage", true, "High memory pressure is the strongest signal in the observations."], ["Folder names", false, "Folder names are unlikely to explain system-wide slowness."], ["Keyboard settings", false, "Input settings do not match the observed resource pressure."]], reasoning: "Senior engineers start with the strongest measurement, then confirm with more evidence before changing anything." },
    diagram: { type: "storage", title: "CPU, Memory, and Storage", alt: "CPU executes instructions, memory holds active state, and storage preserves files.", nodes: ["CPU executes instructions", "Memory holds active work", "Storage preserves files and applications"] },
    lab: { goal: "Observe resource usage without forcing a failure.", steps: ["Open your operating system resource monitor such as Task Manager, Activity Monitor, or System Monitor.", "Notice CPU, memory, and disk activity while opening a browser tab.", "If comfortable, compare activity while opening a large application."], observe: ["Which resource changes fastest?", "Which resource stays high?", "What would you measure before blaming the frontend?"], expected: "Different activities pressure different resources. Measurements narrow the investigation.", safety: "Do not intentionally overload your computer or close unknown system processes." },
    quiz: [["Which resource executes instructions?", ["Storage", "CPU", "Monitor", "Folder"], 1], ["RAM is usually persistent after power is removed.", ["True", "False"], 1], ["Opening many tabs often increases memory use.", ["True", "False"], 0], ["Where are product images stored long term?", ["Persistent storage", "CPU cores", "Keyboard buffer", "Screen pixels"], 0], ["A bottleneck is the resource limiting the task.", ["True", "False"], 0]]
  },
  {
    id: "lesson-files-folders-and-data",
    slug: "files-folders-and-data",
    title: "Files, Folders, and Data",
    summary: "Understand how operating systems organize persistent data with paths, folders, names, formats, permissions, and conventions used by web projects.",
    scenario: "This handbook project contains HTML files, CSS files, JavaScript files, images, lesson data, and documentation. Organization and naming make the site easier to serve, debug, and extend.",
    concepts: [["File", "A named unit of stored data."], ["Folder or directory", "A container used to organize files and other folders."], ["Path", "A location that tells the system where a file or folder is."], ["Absolute path", "A full location from the filesystem root or drive."], ["Relative path", "A location described from the current folder."], ["Extension", "The suffix that often hints at file type, such as .html or .css."], ["Metadata", "Information about a file, such as size or modified time."], ["File format", "The structure used to interpret file contents."], ["Encoding", "Rules for turning bytes into text."], ["Permissions", "Rules controlling who can read, write, or execute a file."]],
    interaction: { type: "decision", title: "Path Builder", prompt: "Given handbook/css/base.css, which path points from index.html to the base stylesheet?", answers: [["css/base.css", true, "The css folder is next to index.html, so this relative path works."], ["/users/base.css", false, "That guesses an unrelated absolute path."], ["data/base.css", false, "The file is not inside data."], ["base.css/css", false, "The folder and file order is reversed."]], reasoning: "Path bugs are common because the browser resolves relative paths from the current document location." },
    diagram: { type: "tree", title: "Project File Organization", alt: "A handbook folder contains index.html, css/base.css, and data/curriculum.js.", nodes: ["handbook/", "index.html", "css/base.css", "data/curriculum.js", "docs/curriculum-guide.md"] },
    pseudocode: ["WHEN application needs curriculum data", "    locate the requested file path", "    check whether the file exists", "    check whether access is allowed", "    read file contents", "    interpret the file format", "    use the data", "END"],
    command: { command: "mkdir -p handbook/css handbook/js handbook/data\ntouch handbook/index.html", explanation: "Creates a small project folder structure and an empty HTML file on Unix-like shells.", output: "handbook/ with css, js, data, and index.html", warning: "On Windows PowerShell, mkdir works differently and touch may not exist. Use New-Item or a graphical file manager if preferred." },
    lab: { goal: "Create or inspect an organized folder structure.", steps: ["Create a folder named handbook-lab.", "Inside it, create folders named css, js, and data.", "Create one empty index.html file.", "Explain which paths are relative from the project root."], observe: ["What names make purpose clear?", "Which file extension signals a web page?", "What path would a browser use for css/base.css?"], expected: "A small project becomes easier to reason about when related files have predictable locations.", safety: "Use a temporary practice folder so you do not disturb real project files." },
    quiz: [["A folder can contain files and other folders.", ["True", "False"], 0], ["Which path is relative?", ["C:/Users/Ava/site/index.html", "css/base.css", "/var/www/site/index.html", "https://example.com"], 1], ["What does a file extension usually suggest?", ["File type or format", "CPU speed", "Network address", "Monitor size"], 0], ["Permission denied may mean access rules blocked the file.", ["True", "False"], 0], ["Wrong relative paths commonly cause file not found errors.", ["True", "False"], 0]]
  },
  {
    id: "lesson-processes-applications-and-services",
    slug: "processes-applications-and-services",
    title: "Processes, Applications, and Services",
    summary: "Learn how stored programs become running processes, how visible applications differ from background services, and why engineers inspect running work.",
    scenario: "Atlas Commerce involves a browser process, a web server service, an application runtime, a database service, and queue workers. Each can fail independently.",
    concepts: [["Program", "Instructions stored on disk."], ["Process", "A running instance of a program."], ["Process ID", "A number the operating system uses to identify a process."], ["Thread", "A unit of execution within a process."], ["Foreground application", "A visible program the user directly interacts with."], ["Background process", "Running work without a main visible window."], ["Service", "A background process managed by the operating system."], ["Worker", "A process that handles queued or repeated jobs."], ["Resource usage", "CPU, memory, disk, and network consumed by running work."], ["Start, stop, restart", "Lifecycle actions used to control a process or service."]],
    interaction: { type: "step-flow", title: "Program to Process", steps: [["Program exists on storage", "The application or service is stored as files.", "The operating system needs instructions to load.", "Missing files or corrupt installation."], ["Operating system loads instructions", "The OS prepares the program to run.", "Programs need memory and permissions.", "Permission denied or missing dependency."], ["Memory is allocated", "Working space is reserved.", "Running programs need temporary state.", "Low memory can slow or prevent startup."], ["Process receives an ID", "The OS tracks the running instance.", "Engineers need a way to inspect it.", "Confusing process names may hide the right target."], ["CPU executes instructions", "The process does work.", "Instructions must actually run.", "High CPU or crashes can affect users."], ["Process exits or remains running", "Some work ends; services continue.", "Different processes have different lifecycles.", "Unexpected exits cause downtime."]] },
    diagram: { type: "hub", title: "Atlas Commerce Process Map", alt: "Browser, web server, application, database, and queue workers run as different processes or services.", nodes: ["Browser", "Web Server", "Application Runtime", "Database Service", "Queue Worker"] },
    command: { command: "ps\nps aux\ntop", explanation: "Shows running processes and resource usage on many Unix-like systems.", output: "Process IDs, command names, CPU use, and memory use.", warning: "These commands observe processes. Do not kill unknown processes while learning. On Windows, use Task Manager or tasklist." },
    lab: { goal: "Observe running work safely.", steps: ["Open your operating system process viewer.", "Find your browser process.", "Notice CPU and memory columns.", "Find a background service if one is visible."], observe: ["Which processes have windows?", "Which run in the background?", "What resource numbers change?"], expected: "Visible applications and background services both consume resources and can be inspected.", safety: "Do not end unknown processes during this lab." },
    quiz: [["A process is a running instance of a program.", ["True", "False"], 0], ["A database service usually runs in the background.", ["True", "False"], 0], ["What identifies a running process?", ["Process ID", "File extension only", "Screen brightness", "Folder color"], 0], ["Queue workers are often background processes.", ["True", "False"], 0], ["If a database service stops, which part should be investigated?", ["The database service", "Only CSS", "Keyboard layout", "Image alt text"], 0], ["Restarting a service should be done carefully because it can affect users.", ["True", "False"], 0]]
  },
  {
    id: "lesson-local-computers-and-remote-servers",
    slug: "local-computers-and-remote-servers",
    title: "Local Computers and Remote Servers",
    summary: "Understand the difference between software running on your own machine and software running on another computer reached across a network.",
    scenario: "The handbook can run locally during development and later be uploaded to static hosting. Atlas Commerce production services run remotely so customers can reach them from many places.",
    concepts: [["Local computer", "The machine you are directly using."], ["Remote computer", "Another machine accessed through a network."], ["Server", "A computer or service that responds to clients."], ["Client", "Software or a device that makes requests."], ["Host", "A machine or provider that serves files or applications."], ["Network address", "Information used to reach another system."], ["Localhost", "A name that points back to your own computer."], ["Deployment", "Moving prepared files or software to an environment where users can access them."], ["Remote access", "Connecting to another computer to inspect or manage it."], ["Cloud hosting", "Hosted computing resources provided over the internet."]],
    interaction: { type: "decision", title: "Where Is the Work Happening?", prompt: "You run python -m http.server 8000 inside this handbook folder and open localhost:8000. Where are the files being served from?", answers: [["Your local computer", true, "localhost points back to your own machine, so the static server reads local files."], ["A payment gateway", false, "No payment service is involved in serving local files."], ["Every visitor computer on the internet", false, "Other visitors cannot automatically access your local server."], ["A database service", false, "This static handbook does not need a database to serve files."]], reasoning: "Local development and remote hosting can use similar browser URLs, but the serving machine is different." },
    diagram: { type: "client-server", title: "Local Development to Remote Hosting", alt: "A local development computer sends files through Git or deployment to remote hosting, then internet visitors request the hosted files.", nodes: ["Local Development Computer", "Git / Deployment", "Remote Hosting Server", "Internet Visitors"] },
    command: { command: "python -m http.server 8000\nnpx serve", explanation: "Starts a local static file server so a browser can request files over HTTP.", output: "A local URL such as http://localhost:8000 or a similar address.", warning: "Use Ctrl+C to stop the server. Python or Node.js must be installed. Do not expose development servers publicly without understanding the risk." },
    lab: { goal: "Compare local files with hosted files conceptually.", steps: ["Open a local HTML file directly if safe.", "Run or imagine a local static server.", "Compare that with a public website URL.", "Describe which computer serves each version."], observe: ["What changes in the URL?", "Who can reach the page?", "Where would secrets be unsafe?"], expected: "Local work happens on your computer; remote hosting serves files from another system.", safety: "Do not put secrets in static files. Do not open firewall access for a practice server." },
    quiz: [["localhost points back to your own computer.", ["True", "False"], 0], ["A remote server is accessed through a network.", ["True", "False"], 0], ["What does deployment move?", ["Prepared files or software to a target environment", "Only keyboard input", "Monitor pixels", "Nothing"], 0], ["npx serve requires Node.js.", ["True", "False"], 0], ["Static website files should not contain secrets.", ["True", "False"], 0], ["A client makes requests to a server.", ["True", "False"], 0]]
  }
];

function fullLesson(lesson) {
  return {
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    summary: lesson.summary,
    introduction: [
      "A useful engineering model starts with an everyday situation: " + lesson.scenario,
      "This lesson builds vocabulary and reasoning habits without turning the topic into a programming syntax exercise."
    ],
    learningObjectives: [
      "Explain the concept in plain system terms.",
      "Identify where it appears in a modern web application.",
      "Use Atlas Commerce as a concrete reference without building it.",
      "Recognize common mistakes and investigation clues."
    ],
    scenario: { title: "Real-World Scenario", body: lesson.scenario },
    whyThisExists: ["Engineers need shared mental models so they can debug systems, communicate tradeoffs, and ask better questions before changing anything."],
    problemItSolves: ["This concept helps separate symptoms from causes. It gives names to system responsibilities that are otherwise easy to blur together."],
    keyConcepts: lesson.concepts,
    interactiveBlocks: [lesson.interaction].filter(Boolean),
    architectureDiagram: lesson.diagram,
    pseudocode: lesson.pseudocode || null,
    terminalCommand: lesson.command || null,
    atlasCommerceExample: { title: "Atlas Commerce Example", body: "Atlas Commerce uses this concept as part of its storefront, operational workflow, or supporting infrastructure. The example is a reference system, not an application the learner must build." },
    seniorEngineerThinking: ["Senior engineers ask which system responsibility is involved before assuming a cause.", "They prefer observations over guesses and keep user impact in view.", "They distinguish what the evidence suggests from what it proves."],
    commonMistakes: ["Treating the visible symptom as the whole system.", "Using vague language that hides which component is responsible.", "Changing settings before collecting basic observations.", "Assuming local behavior and production behavior are identical."],
    debuggingGuide: ["Name the exact action that failed.", "Identify input, processing, state, storage, output, and external dependencies where relevant.", "Check the simplest local explanation before blaming remote systems.", "Record what changed, what was expected, and what actually happened."],
    securityNotes: ["Do not put secrets in static files or screenshots.", "When remote systems are involved, access control and maintenance matter."],
    performanceNotes: ["Performance problems usually need resource-specific evidence, not a generic feeling of slowness."],
    productionNotes: ["In production, this concept may involve monitoring, logs, support workflows, and rollback decisions."],
    aiPromptExamples: { poor: "Fix my computer problem.", better: "Help me reason about " + lesson.title.toLowerCase() + " in a web application scenario. Describe the likely system responsibilities, list what observations I should collect first, and separate facts from assumptions.", why: "The improved prompt gives context, asks for reasoning, and avoids forcing the AI to guess the cause." },
    handsOnLab: lesson.lab,
    miniChallenge: lesson.interaction && lesson.interaction.type === "decision" ? lesson.interaction : { type: "decision", title: "Mini Challenge", prompt: "Which habit best supports good engineering investigation?", answers: [["Guess quickly and change several things at once", false, "That makes cause and effect harder to understand."], ["Name the system responsibility and collect evidence", true, "This creates a clearer path from symptom to cause."], ["Ignore production behavior", false, "Production context often changes the risk."], ["Use only one vague AI prompt", false, "Vague prompts invite vague answers."]], reasoning: "Good investigation starts with precise language and evidence." },
    quiz: { passingScore: 70, questions: lesson.quiz.map((q, index) => ({ id: "q" + (index + 1), type: q[1].length === 2 && q[1][0] === "True" ? "true-false" : "multiple-choice", question: q[0], options: q[1], answerIndex: q[2], explanation: "This answer follows from the lesson model and the Atlas Commerce examples." })) },
    summaryPoints: ["The concept names a real responsibility inside computer systems.", "Clear mental models improve debugging and communication.", "Atlas Commerce provides a concrete reference without becoming a build assignment."],
    relatedLessons: related.filter((id) => id !== lesson.id).slice(0, 3),
    officialResources: [
      { title: "Microsoft Learn - Computer Basics", url: "https://support.microsoft.com/windows" },
      { title: "Apple Support - Mac Basics", url: "https://support.apple.com/mac" },
      { title: "Ubuntu Documentation", url: "https://help.ubuntu.com/" }
    ]
  };
}

for (const lesson of lessons) {
  const body = `(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry[${JSON.stringify(lesson.slug)}] = ${JSON.stringify(fullLesson(lesson), null, 2)};
})();
`;
  fs.writeFileSync(path.join(out, lesson.slug + ".js"), body);
}

const httpRecord = {
  id: "lesson-http-request",
  slug: "how-an-http-request-works",
  title: "How an HTTP Request Works",
  summary: "Preserved Phase 1 complete lesson about DNS, secure connections, servers, applications, databases, responses, and browser rendering.",
  learningObjectives: ["Explain the journey of a browser request.", "Identify DNS, server, application, and database responsibilities.", "Recognize common failure points.", "Explain how Atlas Commerce uses this flow."],
  quiz: { passingScore: 70, questions: [{ id: "q1", question: "What is DNS for?", options: ["Translating domains into network addresses", "Rendering CSS"], answerIndex: 0 }, { id: "q2", question: "A response is returned by the server.", options: ["True", "False"], answerIndex: 0 }, { id: "q3", question: "HTTPS protects data in transit.", options: ["True", "False"], answerIndex: 0 }, { id: "q4", question: "A 500 status often points to server-side failure.", options: ["True", "False"], answerIndex: 0 }, { id: "q5", question: "A database can hold product records.", options: ["True", "False"], answerIndex: 0 }] },
  summaryPoints: ["HTTP is a request-response protocol."],
  relatedLessons: ["lesson-what-the-internet-is"],
  officialResources: [{ title: "MDN Web Docs - HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" }]
};

fs.writeFileSync(path.join(out, "how-an-http-request-works.js"), `(function () {
  window.LessonContentRegistry = window.LessonContentRegistry || {};
  window.LessonContentRegistry["how-an-http-request-works"] = ${JSON.stringify(httpRecord, null, 2)};
})();
`);
