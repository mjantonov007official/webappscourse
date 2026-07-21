const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "data", "lessons");
fs.mkdirSync(out, { recursive: true });

function slugify(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const validRisks = {
  read: "Read-only",
  low: "Low-risk modification",
  destructive: "Destructive",
  privileged: "Privileged",
  network: "Network access",
  package: "Package installation"
};

const commandInfo = {
  pwd: ["Print the current working directory.", "read"],
  ls: ["List directory entries.", "read"],
  cd: ["Change the shell working directory.", "low"],
  mkdir: ["Create directories.", "low"],
  touch: ["Create an empty file or update a timestamp.", "low"],
  cp: ["Copy files or directories.", "low"],
  mv: ["Move or rename files or directories.", "low"],
  rm: ["Remove files or directories.", "destructive"],
  rmdir: ["Remove an empty directory.", "destructive"],
  cat: ["Print file content to standard output.", "read"],
  less: ["Page through text safely.", "read"],
  head: ["Show the first lines of text.", "read"],
  tail: ["Show the last lines of text or follow appended lines.", "read"],
  grep: ["Search text for matching lines.", "read"],
  find: ["Search file-system entries by name or attributes.", "read"],
  wc: ["Count lines, words, or bytes.", "read"],
  ps: ["Inspect running processes.", "read"],
  top: ["Watch process resource usage interactively.", "read"],
  pgrep: ["Find process IDs by name.", "read"],
  kill: ["Send a signal to a process.", "destructive"],
  whoami: ["Print the current user name.", "read"],
  id: ["Show current user and group identity.", "read"],
  chmod: ["Change file or directory permissions.", "privileged"],
  chown: ["Change file or directory ownership.", "privileged"],
  printenv: ["Print environment variables.", "read"],
  env: ["Show or run with environment variables.", "read"],
  export: ["Set a shell environment variable for child processes.", "low"],
  echo: ["Print text or variable values.", "read"],
  history: ["Show shell command history.", "read"],
  which: ["Show where an executable is found.", "read"],
  type: ["Explain how the shell resolves a command.", "read"],
  clear: ["Clear the terminal screen.", "low"],
  exit: ["Close the current shell session.", "low"],
  ssh: ["Open an encrypted remote shell session.", "network"],
  "ssh-keygen": ["Create an SSH key pair.", "low"],
  "ssh-copy-id": ["Install a public SSH key on a remote account.", "network"],
  apt: ["Manage packages on Debian or Ubuntu systems.", "package"],
  brew: ["Manage packages with Homebrew on macOS or Linux.", "package"],
  winget: ["Manage packages on Windows.", "package"],
  composer: ["Manage PHP project dependencies.", "package"],
  npm: ["Manage JavaScript project dependencies.", "package"],
  systemctl: ["Inspect or control systemd services.", "privileged"],
  hostname: ["Print the system host name.", "read"],
  uptime: ["Show how long the system has been running and load averages.", "read"],
  df: ["Show file-system disk usage.", "read"],
  free: ["Show memory usage on many Linux systems.", "read"]
};

function commandBlock(command, options = {}) {
  const base = command.trim().split(/\s+/)[0];
  const info = commandInfo[base] || ["Run a terminal command.", "read"];
  const risk = options.risk || [validRisks[info[1]] || validRisks.read];
  const destructive = risk.includes(validRisks.destructive);
  const privileged = risk.includes(validRisks.privileged);
  return {
    type: "terminal-command",
    platform: options.platform || ["Linux", "macOS", "WSL", "Git Bash"],
    command,
    description: options.description || info[0],
    risk,
    anatomy: (options.anatomy || command.trim().split(/\s+/).map((token, index) => ({
      token,
      meaning: index === 0 ? "The command or program name." : token.startsWith("-") ? "An option that changes command behavior." : "An argument or path the command operates on."
    }))),
    expectedOutput: options.expectedOutput ? "Simulated example:\n" + options.expectedOutput : "Example output is simulated for learning and will differ on your machine.",
    outputExplanation: options.outputExplanation || "Read the output as evidence about the current system state before changing anything.",
    commonError: options.commonError || "The most common mistake is running the command from the wrong directory or assuming every system has the same files.",
    safeUse: options.safeUse || (destructive ? "Destructive commands can remove data. Verify the current directory and target path first." : privileged ? "Privileged commands can affect the whole system. Understand the target and reason before using elevation." : "This example is safe to inspect because it does not require secret values or automatic execution."),
    recovery: options.recovery || (destructive ? "Stop and restore from backup, Git, or a known copy if you removed the wrong target." : "If the output is unexpected, stop and inspect the current directory, user, and command spelling."),
    tryIt: options.tryIt || "Run only in a safe practice folder or controlled learning environment."
  };
}

const sharedResources = [
  { title: "Ubuntu Server Guide", url: "https://documentation.ubuntu.com/server/" },
  { title: "GNU Coreutils Manual", url: "https://www.gnu.org/software/coreutils/manual/" },
  { title: "OpenSSH Manual Pages", url: "https://www.openssh.com/manual.html" }
];

function quiz(title, count) {
  const questions = [
    ["What should an engineer do before changing a system from the terminal?", ["Collect evidence and understand the target.", "Run the fastest command found online.", "Use privileged mode for every command.", "Delete temporary files first."], 0],
    ["Why is simulated output labeled in this handbook?", ["So learners know the browser is not executing real commands.", "Because commands are fake.", "So output can be ignored.", "Because logs never differ."], 0],
    ["What makes a command safer to copy?", ["The command, target, risk, and recovery path are understood.", "It uses many options.", "It includes sudo.", "It came from a short answer."], 0],
    ["How should Atlas Commerce examples be used?", ["As a realistic reference system for reasoning.", "As a required app to build.", "As a place for real credentials.", "As a production server to modify."], 0],
    ["What does completion require in this handbook?", ["Attempt the quiz and reach the summary.", "Copy every command.", "Finish the lab only.", "Open the glossary."], 0]
  ];
  while (questions.length < count) {
    questions.push([`Which statement best fits ${title}?`, ["It describes a system responsibility and should be reasoned about before use.", "It is magic syntax to memorize.", "It always works identically on every operating system.", "It should be used to bypass evidence collection."], 0]);
  }
  return { passingScore: 70, questions: questions.map((q, i) => ({ id: "q" + (i + 1), type: "multiple-choice", question: q[0], options: q[1], answerIndex: q[2], explanation: "This answer follows the lesson's evidence-first terminal model." })) };
}

function basics(spec) {
  const slug = slugify(spec.title);
  const id = "lesson-" + slug;
  return {
    id,
    slug,
    title: spec.title,
    summary: spec.summary,
    introduction: [
      spec.summary,
      "This lesson keeps the terminal practical without treating commands as magic. Commands are real, but every browser interaction is simulated and clearly labeled."
    ],
    learningObjectives: spec.objectives,
    scenario: { title: "Real-World Scenario", body: spec.scenario },
    whyThisExists: [spec.why || "Operating systems and shells give engineers a precise way to inspect machines, files, processes, services, and remote systems."],
    problemItSolves: [spec.problem || "The concept helps learners understand what is happening before they copy commands or modify a system."],
    keyConcepts: spec.concepts.map((item) => Array.isArray(item) ? item : [item, item + " is a named responsibility or behavior that engineers use when reasoning about operating systems and terminal work."]),
    interactiveBlocks: [spec.interactive],
    architectureDiagram: spec.diagram || { type: "linear", title: spec.title + " System View", alt: spec.title + " conceptual diagram", nodes: spec.nodes || ["Learner", "Terminal", "Operating System", "Files / Processes / Network"] },
    pseudocode: spec.pseudocode || ["WHEN investigating a system", "    identify the current user and location", "    inspect before changing", "    read command output carefully", "    make the smallest safe change only when justified", "END"],
    atlasCommerceExample: { title: "Atlas Commerce Example", body: spec.atlas },
    seniorEngineerThinking: spec.senior || ["Observation comes before modification.", "The current user, directory, target path, and risk level matter.", "A good command explanation includes what it reads or changes and how to recover from mistakes."],
    commonMistakes: spec.mistakes || ["Pasting commands without reading them.", "Using elevated privileges as a default.", "Ignoring the current directory.", "Treating simulated output as a promise about every machine."],
    debuggingGuide: spec.debug || ["Confirm the command target.", "Read the output.", "Compare expected and actual behavior.", "Stop before destructive or privileged actions if the evidence is unclear."],
    securityNotes: spec.security || ["Do not place secrets in static files, screenshots, command examples, logs, or public repositories."],
    performanceNotes: spec.performance || ["Terminal inspection is useful because it can show resource pressure such as CPU, memory, disk, and process state."],
    productionNotes: spec.production || ["Production systems need careful read-first investigation, notes, backups, and coordination before changes."],
    aiPromptExamples: spec.ai || { poor: "Give me a command to fix it.", better: "Help me inspect this terminal problem safely. Ask what system, current user, working directory, target path, and risk level I should verify before any modifying command.", why: "The improved prompt asks for reasoning and safety checks before commands." },
    terminalCommands: spec.commands.map((item) => typeof item === "string" ? commandBlock(item) : commandBlock(item.command, item)),
    handsOnLab: { id: spec.labId || slug + "-lab", goal: spec.labGoal || "Practice safe observation for " + spec.title + ".", steps: spec.labSteps || ["Open a terminal or operating-system tool.", "Run only read-only commands or use a safe practice folder.", "Write down what the output proves and what it does not prove."], observe: spec.observe || ["Current user", "Current directory", "Command target", "Risk label"], expected: spec.expected || "The learner can explain the command or observation before changing anything.", safety: spec.safety || "Do not use real secrets, production systems, or destructive targets for practice." },
    miniChallenge: spec.challenge || { type: "decision", title: "Mini Challenge", prompt: "What is the safest next step?", answers: [["Inspect first and explain the target.", true, "Evidence-first work reduces accidental damage."], ["Use sudo immediately.", false, "Elevation is not a diagnosis."], ["Ignore the output.", false, "Output is evidence."], ["Run a destructive command in the project root.", false, "Destructive work requires strong verification and recovery." ]], reasoning: "Safe terminal work is deliberate." },
    quiz: quiz(spec.title, spec.quizCount || 6),
    summaryPoints: spec.summaryPoints || ["Terminal commands are real tools for inspecting system behavior.", "The browser interactions in this handbook simulate output and never execute shell commands.", "Safe engineering judgment means understanding command structure, target, risk, and recovery before modifying anything."],
    relatedLessons: spec.related || [],
    officialResources: spec.resources || sharedResources
  };
}

const specs = [
  {
    title: "What an Operating System Manages",
    summary: "Explain the operating system as the coordinator between hardware, applications, users, storage, memory, devices, networking, and services.",
    objectives: ["Map everyday actions to operating-system responsibilities.", "Explain hardware, process, memory, file-system, user, device, networking, and service management.", "Connect local development and Atlas Commerce servers to operating-system behavior."],
    scenario: "A learner opens a browser, downloads a file, connects headphones, runs a local server, and switches between applications. The operating system coordinates each action.",
    concepts: ["Hardware management", "Process management", "Memory management", "File system", "Users", "Permissions", "Devices", "Networking", "System calls", "Services"],
    interactive: { type: "responsibility-mapper", title: "Operating-System Responsibility Mapper", prompt: "Match each action to the responsibility the operating system is using most directly.", choices: ["Process management", "Memory management", "File system", "Device management", "User permissions", "Networking"], items: [
      { action: "Open a browser", answer: "Process management", reason: "The OS starts and schedules a browser process." },
      { action: "Download a PDF", answer: "File system", reason: "The OS writes the file to storage." },
      { action: "Connect headphones", answer: "Device management", reason: "The OS detects and routes audio to a device." },
      { action: "Run a local server", answer: "Networking", reason: "The OS exposes a port and handles network traffic." },
      { action: "Open a private folder", answer: "User permissions", reason: "The OS checks whether the current user can read it." }
    ]},
    diagram: { type: "linear", title: "Operating-System Boundary", alt: "Applications talk to the operating system, which coordinates CPU, memory, storage, network, and devices.", nodes: ["Applications", "Operating System", "CPU - Memory - Storage - Network - Devices"] },
    atlas: "The browser, local development tools, Nginx, application runtime, database, and queue workers all depend on operating systems to manage resources.",
    commands: ["whoami", "ps aux", "df -h"],
    quizCount: 6
  },
  {
    title: "Windows, macOS, and Linux",
    summary: "Compare shared operating-system concepts while showing practical differences between Windows, macOS, and Linux development and server environments.",
    objectives: ["Explain shared OS concepts without ranking systems universally.", "Compare shells, paths, packages, case sensitivity, permissions, and server use.", "Choose an environment based on tools, team standards, hosting, and workflow."],
    scenario: "A web team uses Windows laptops, macOS design tools, Linux servers, WSL, and Git Bash. The right environment depends on the work being done.",
    concepts: ["Desktop operating system", "Server operating system", "Kernel", "Distribution", "File path conventions", "Package management", "Permissions", "Shells", "Case sensitivity", "Development compatibility"],
    interactive: { type: "os-comparison", title: "Operating-System Comparison Explorer", prompt: "Compare systems by practical engineering concerns.", columns: ["System", "Default shell", "Paths", "Package tools", "Server usage", "Case sensitivity"], rows: [["Windows", "PowerShell / Command Prompt", "C:\\Users\\mike", "winget, Chocolatey, WSL tools", "Common for clients; Linux often hosts servers", "Often case-insensitive by default"], ["macOS", "Zsh", "/Users/mike", "Homebrew", "Great for Unix-style local development", "Usually case-insensitive by default"], ["Linux", "Bash or distro default", "/home/mike", "apt, dnf, pacman", "Very common for web servers", "Case-sensitive"]], selectable: true, selectionPrefix: "Selected environment:" },
    atlas: "Atlas Commerce might be developed locally on Windows, macOS, or Linux, then deployed to Linux hosting because that matches the server environment.",
    commands: [{ command: "pwd", description: "Show the current Unix-style directory.", expectedOutput: "/home/mike/handbook" }, { command: "Get-Location", platform: ["Windows PowerShell"], description: "PowerShell equivalent for showing the current location.", expectedOutput: "Path\n----\nC:\\Users\\mike\\handbook" }],
    quizCount: 6
  },
  {
    title: "Users, Groups, and Permissions",
    summary: "Explain how operating systems decide who may read, write, execute, delete, administer, and access files, commands, services, and resources.",
    objectives: ["Explain user, group, owner, read, write, execute, root, administrator, and least privilege.", "Reason through rwxr-x--- and numeric notation such as 750.", "Use permission commands cautiously without treating sudo as a universal fix."],
    scenario: "Atlas Commerce deployment files must be readable by Nginx, writable by the deployment user where appropriate, and protected from unrelated users.",
    concepts: ["User", "Group", "Owner", "Read", "Write", "Execute", "Administrator", "Root", "Least privilege", "File ownership", "Permission denial", "sudo"],
    interactive: { type: "permission-decision", title: "Permission Decision Explorer", prompt: "Owner has read and write. Group has read. Others have no access. Decide which action is allowed.", choices: ["Allowed", "Denied"], items: [{ action: "Owner reads file", answer: "Allowed", reason: "Owner has read permission." }, { action: "Group edits file", answer: "Denied", reason: "Group has read but not write permission." }, { action: "Other user reads file", answer: "Denied", reason: "Others have no access." }, { action: "Owner executes a script without x", answer: "Denied", reason: "Execute requires the execute bit." }] },
    atlas: "Least privilege keeps Atlas Commerce deployment files usable by the right service accounts without making the whole server writable.",
    commands: ["whoami", "id", "ls -l", { command: "chmod 750 deploy.sh", risk: [validRisks.privileged], safeUse: "Use chmod only after checking the exact path and intended owner/group access. Do not use chmod 777 as a general fix." }, { command: "chown deploy:www-data /var/www/handbook", risk: [validRisks.privileged], safeUse: "Changing ownership affects who can manage files. Confirm the application and deployment users first." }],
    mistakes: ["Using chmod 777.", "Running everything as root.", "Changing ownership without understanding the application user.", "Confusing ownership with permissions.", "Copying commands without checking the target path."],
    quizCount: 7
  },
  {
    title: "Processes and Background Services",
    summary: "Extend process concepts into operating-system process management, including process IDs, foreground work, background services, daemons, workers, and graceful restarts.",
    objectives: ["Inspect process IDs, users, CPU, memory, state, and command names.", "Explain foreground processes, background services, daemons, workers, and supervisors.", "Prefer graceful termination before forceful signals."],
    scenario: "Atlas Commerce runs Nginx, an application runtime, a database service, queue workers, and scheduled tasks. Each can fail independently.",
    concepts: ["Process ID", "Parent process", "Foreground", "Background", "Service", "Daemon", "Worker", "Resource usage", "Process state", "Start", "Stop", "Restart", "SIGTERM", "SIGKILL"],
    interactive: { type: "process-table", title: "Simulated Process Table Explorer", prompt: "Sort or select a row to practice process investigation.", columns: ["PID", "User", "CPU", "Memory", "State", "Command"], sortable: true, selectable: true, selectionPrefix: "Investigate:", rows: [["101", "root", "0.2%", "34 MB", "sleeping", "nginx: master"], ["118", "www-data", "1.4%", "72 MB", "running", "nginx: worker"], ["220", "mysql", "8.8%", "512 MB", "running", "mysqld"], ["312", "deploy", "0.7%", "96 MB", "sleeping", "php artisan queue:work"]] },
    atlas: "A slow checkout might involve a healthy web server, a busy database, and a stuck queue worker. The process table helps narrow the investigation.",
    commands: ["ps", "ps aux", "top", { command: "kill -15 312", risk: [validRisks.destructive], safeUse: "SIGTERM asks a process to exit gracefully. Confirm the PID first." }, { command: "kill -9 312", risk: [validRisks.destructive], safeUse: "SIGKILL is forceful and should not be the default. Try graceful termination first." }, { command: "systemctl status nginx", risk: [validRisks.read], platform: ["Linux"], description: "Inspect a systemd service without changing it." }],
    quizCount: 7
  },
  {
    title: "Environment Variables",
    summary: "Explain environment variables as external configuration values provided to processes, including names, values, scope, secrets, PATH, and restart requirements.",
    objectives: ["Explain variable name, value, process environment, scope, and PATH.", "Compare development and production configuration.", "Explain why static HTML and JavaScript must not contain secrets."],
    scenario: "Atlas Commerce uses different APP_URL, DB_HOST, email provider, cache configuration, and debug mode values in development and production.",
    concepts: ["Variable name", "Variable value", "Process environment", "Configuration", "Development environment", "Production environment", "Secret", "PATH", "Scope", "Restart requirement"],
    interactive: { type: "os-comparison", title: "Configuration Comparison", prompt: "Compare development and production environment choices.", columns: ["Variable", "Development", "Production", "Reason"], rows: [["APP_ENV", "local", "production", "Behavior and diagnostics differ."], ["APP_DEBUG", "true", "false", "Production should not expose debug details."], ["DB_HOST", "localhost", "db.internal", "Services differ by environment."], ["CACHE_DRIVER", "file", "redis", "Production needs shared cache behavior."]], selectable: true },
    atlas: "Configuration lets the same Atlas Commerce code run locally and remotely with different services and safety settings.",
    commands: ["printenv", "env", { command: "echo \"$PATH\"", description: "Print the PATH variable used to find commands." }, { command: "export APP_ENV=local", risk: [validRisks.low], description: "Set a shell environment variable for commands launched from this shell." }, { command: "$env:APP_ENV = \"local\"", platform: ["Windows PowerShell"], risk: [validRisks.low], description: "PowerShell syntax for setting a process-scoped environment variable." }],
    security: ["Static HTML and JavaScript files must not contain secrets.", ".env files are not secure if publicly served.", "Environment variables belong to a process or server environment.", "Changing a variable may require restarting the process."],
    quizCount: 6
  },
  {
    title: "Why Engineers Use the Terminal",
    summary: "Explain why command-line tools are efficient, composable, repeatable, scriptable, precise, useful on remote systems, and helpful for logs and processes.",
    objectives: ["Compare terminal and graphical workflows without declaring one universally better.", "Explain repeatability, automation, remote access, logs, and precision.", "Run harmless first commands in a safe terminal."],
    scenario: "A learner can rename one file with a GUI, but searching 1,000 files or watching logs is often clearer in a terminal.",
    concepts: ["Command-line interface", "Graphical interface", "Automation", "Repeatability", "Remote access", "Scriptability", "Logs", "Standardized commands", "Precision"],
    interactive: { type: "os-comparison", title: "GUI Versus Terminal Explorer", prompt: "Choose which tool is usually clearer for each scenario.", columns: ["Scenario", "GUI fit", "Terminal fit", "Reason"], rows: [["Rename one file", "Strong", "Fine", "A GUI can be faster for a single visible file."], ["Search 1,000 files", "Weak", "Strong", "Commands can repeat precise searches."], ["Connect to a remote server", "Limited", "Strong", "SSH gives remote shell access."], ["Watch logs", "Limited", "Strong", "tail and grep expose evidence quickly."], ["Inspect processes", "Good", "Good", "Both can help; terminal is useful remotely."]], selectable: true },
    atlas: "Atlas Commerce engineers use terminal commands to inspect logs, services, files, and deployments, especially on remote servers.",
    commands: ["pwd", "ls", "clear", "exit"],
    quizCount: 5
  },
  {
    title: "Understanding Shells and Bash",
    summary: "Explain the relationship between terminal applications, shells, Bash, Zsh, PowerShell, commands, prompts, arguments, options, exit status, and shell history.",
    objectives: ["Distinguish terminal emulator, shell, command, and operating system.", "Break down command, option, argument, path, and quoting.", "Explain exit status and shell history conceptually."],
    scenario: "A learner types ls -la /var/www. The terminal collects input, the shell parses it, a command runs, and the operating system provides file information.",
    concepts: ["Terminal emulator", "Shell", "Bash", "Zsh", "PowerShell", "Command", "Prompt", "Argument", "Option", "Exit status", "Shell history", "Quoting"],
    interactive: { type: "responsibility-mapper", title: "Command Anatomy Explorer", prompt: "Match each token in ls -la /var/www to its role.", choices: ["Command", "Option", "Argument path", "Quoted path"], items: [{ action: "ls", answer: "Command", reason: "ls is the program name." }, { action: "-la", answer: "Option", reason: "Options change output behavior." }, { action: "/var/www", answer: "Argument path", reason: "This tells ls which directory to inspect." }, { action: "cd \"Project Files\"", answer: "Quoted path", reason: "Quotes keep spaces inside one argument." }] },
    diagram: { type: "linear", title: "Terminal to Operating System", alt: "Keyboard input enters terminal, shell, command, and operating system.", nodes: ["Keyboard Input", "Terminal Application", "Shell", "Command or Program", "Operating System"] },
    atlas: "Atlas Commerce commands run through a shell whether the engineer is local or connected to a remote server.",
    commands: ["echo hello", "history", "which node", "type cd", "echo $?"],
    quizCount: 6
  },
  {
    title: "Paths and Directory Navigation",
    summary: "Teach how locations are represented and navigated through root, home, current directory, parent directory, absolute paths, relative paths, hidden entries, and working directories.",
    objectives: ["Explain root, home, current directory, parent directory, absolute and relative paths.", "Navigate a simulated file tree using pwd, ls, cd, cd .., and cd ~.", "Avoid common path mistakes and unsafe system-directory changes."],
    scenario: "A static handbook project has HTML, CSS, JavaScript, data, and docs folders. Running a command in the wrong directory changes the result.",
    concepts: ["Root", "Home directory", "Current directory", "Parent directory", "Absolute path", "Relative path", "Path separator", "Hidden entries", "Working directory"],
    interactive: { type: "path-navigator", title: "Interactive Path Navigator", prompt: "Use simulated commands to move through the file tree.", start: "/home/mike/handbook", tree: ["/", "|-- home/", "|   `-- mike/", "|       `-- handbook/", "|           |-- index.html", "|           `-- css/", "`-- var/", "    `-- www/"], commands: [{ label: "pwd", output: "/home/mike/handbook" }, { label: "ls", output: "index.html  css  js  data" }, { label: "cd ..", cwd: "/home/mike", output: "/home/mike" }, { label: "cd ~", cwd: "/home/mike", output: "/home/mike" }, { label: "cd /var/www", cwd: "/var/www", output: "/var/www" }] },
    atlas: "Atlas Commerce deployments depend on engineers knowing whether they are in the project folder, web root, log directory, or home directory.",
    commands: ["pwd", "ls", "cd ..", "cd ~", "cd \"Project Files\""],
    quizCount: 6
  },
  {
    title: "Creating, Moving, Copying, and Removing Files",
    summary: "Teach safe file and directory operations with mkdir, touch, cp, mv, rm, rmdir, recursive copies, recursive removals, and recovery planning.",
    objectives: ["Create, copy, move, rename, and remove files conceptually.", "Explain why command-line deletion can bypass the recycle bin.", "Treat rm -rf as dangerous and not a normal beginner command."],
    scenario: "A learner organizes a practice handbook folder and must avoid deleting the real project or system directories.",
    concepts: ["Directory", "File", "Create", "Copy", "Move", "Rename", "Remove", "Recursive", "Target path", "Backup", "Git recovery"],
    interactive: { type: "file-operation-simulator", title: "Simulated File Operation Workspace", prompt: "Choose an operation and inspect the simulated tree. No real files are changed.", steps: [{ label: "Create folder", command: "mkdir notes", note: "Creates a folder named notes.", tree: ["practice/", "`-- notes/"] }, { label: "Create file", command: "touch notes/todo.txt", note: "Creates an empty file.", tree: ["practice/", "`-- notes/", "    `-- todo.txt"] }, { label: "Copy file", command: "cp notes/todo.txt notes/todo-copy.txt", note: "Copies file content.", tree: ["practice/", "`-- notes/", "    |-- todo.txt", "    `-- todo-copy.txt"] }, { label: "Rename file", command: "mv notes/todo-copy.txt notes/archive.txt", note: "mv can rename or move.", tree: ["practice/", "`-- notes/", "    |-- todo.txt", "    `-- archive.txt"] }, { label: "Delete file", command: "rm notes/archive.txt", note: "Removal can bypass the recycle bin.", tree: ["practice/", "`-- notes/", "    `-- todo.txt"] }] },
    atlas: "Deployment scripts copy build artifacts and move files, so engineers must understand targets before running modifying commands.",
    commands: ["mkdir practice", "mkdir -p practice/notes", "touch notes.txt", "cp notes.txt backup.txt", "cp -r css css-backup", "mv backup.txt archive.txt", { command: "rm archive.txt", risk: [validRisks.destructive] }, { command: "rm -r old-folder", risk: [validRisks.destructive] }, { command: "rm -rf project/", risk: [validRisks.destructive], safeUse: "This is intentionally shown as dangerous. Do not use rm -rf as a normal beginner cleanup command." }, "rmdir empty-folder"],
    quizCount: 7
  },
  {
    title: "Reading and Searching Text",
    summary: "Teach efficient reading and searching of files and command output with cat, less, head, tail, grep, find, and wc.",
    objectives: ["Read and search text without modifying files.", "Explain grep versus find.", "Use simulated logs to find errors, count matches, inspect latest entries, and find files by extension."],
    scenario: "Atlas Commerce produces application logs. An engineer needs to inspect recent errors without opening a large file in an editor.",
    concepts: ["Text file", "Log file", "Search pattern", "Latest entries", "Line count", "File-system search", "Content search", "Pagination"],
    interactive: { type: "log-investigation", title: "Interactive Log Search", prompt: "Select a simulated search result and explain what it proves.", columns: ["Task", "Command", "Simulated result"], rows: [["Find error lines", "grep \"ERROR\" application.log", "2 matching lines"], ["Count errors", "grep \"ERROR\" application.log | wc -l", "2"], ["Latest entries", "tail -n 50 application.log", "last 50 lines"], ["Find JSON files", "find . -name \"*.json\"", "./data/curriculum.json"]], selectable: true },
    atlas: "Text search helps Atlas Commerce engineers find errors, request IDs, failed jobs, and configuration clues.",
    commands: ["cat README.md", "less application.log", "head -n 20 application.log", "tail -n 50 application.log", "grep \"ERROR\" application.log", "find . -name \"*.json\"", "wc -l application.log"],
    quizCount: 7
  },
  {
    title: "Standard Input, Output, and Pipes",
    summary: "Explain standard input, standard output, standard error, pipes, redirection, and command composition without rewarding unreadable command chains.",
    objectives: ["Explain stdin, stdout, stderr, pipes, and redirection.", "Build a simulated log pipeline.", "Avoid overwriting files accidentally with >."],
    scenario: "An engineer filters Atlas Commerce logs for ERROR lines and counts them before deciding whether an incident is growing.",
    concepts: ["Standard input", "Standard output", "Standard error", "Pipe", "Redirection", "Command composition", "Overwrite", "Append"],
    interactive: { type: "pipe-builder", title: "Interactive Pipe Builder", prompt: "Build a readable log command from stages.", steps: [{ label: "Read log", command: "cat application.log" }, { label: "Filter errors", command: "grep \"ERROR\"" }, { label: "Count results", command: "wc -l" }], result: "cat application.log | grep \"ERROR\" | wc -l\nSimpler form: grep \"ERROR\" application.log | wc -l" },
    atlas: "Pipes help engineers connect small tools while investigating logs, but clarity beats cleverness.",
    commands: [{ command: "cat application.log | grep \"ERROR\"", description: "Send log output into grep." }, { command: "grep \"ERROR\" application.log | wc -l", description: "Search directly and count matching lines." }, { command: "echo \"note\" > notes.txt", risk: [validRisks.destructive], safeUse: "> can overwrite a file. Confirm the target first." }, { command: "echo \"another note\" >> notes.txt", risk: [validRisks.low], safeUse: ">> appends instead of overwriting." }, { command: "command 2> error.log", risk: [validRisks.low], description: "Redirect standard error to a file." }],
    quizCount: 7
  },
  {
    title: "Process Inspection and Signals",
    summary: "Teach how engineers inspect and control running processes safely with ps, top, pgrep, kill, graceful shutdown, supervisors, and logs.",
    objectives: ["Inspect process evidence before terminating anything.", "Explain process signals, graceful shutdown, and forceful termination.", "Avoid killing critical services casually."],
    scenario: "A local server uses excessive CPU, a queue worker is not responding, and multiple matching entries appear in process output.",
    concepts: ["Process", "PID", "CPU usage", "Memory usage", "pgrep", "Signal", "SIGTERM", "SIGKILL", "Supervisor", "Log check"],
    interactive: { type: "process-table", title: "Simulated Process Incident", prompt: "Select a process row and decide what evidence to collect next.", columns: ["PID", "CPU", "State", "Command", "Next evidence"], rows: [["442", "96%", "running", "node local-server.js", "Check request logs and command purpose"], ["510", "0%", "sleeping", "php artisan queue:work", "Check worker logs before restart"], ["602", "1%", "running", "mysqld", "Do not kill casually; check database health"]], selectable: true },
    atlas: "Atlas Commerce incidents require identifying the correct process, checking logs, and understanding whether a supervisor will restart it.",
    commands: ["ps", "ps aux", "top", "pgrep nginx", { command: "kill -15 442", risk: [validRisks.destructive], safeUse: "SIGTERM asks for graceful shutdown. Confirm PID and purpose first." }, { command: "kill -9 442", risk: [validRisks.destructive], safeUse: "SIGKILL is forceful and should not be the default." }],
    quizCount: 7
  },
  {
    title: "Reading Logs from the Terminal",
    summary: "Teach logs as evidence through timestamps, levels, messages, context, request IDs, errors, warnings, information, and rotation.",
    objectives: ["Identify timestamp, severity, message, context, and request ID.", "Use tail, grep, and less for log investigation.", "Avoid exposing secrets in logs."],
    scenario: "Atlas Commerce returns errors after deployment. Logs show successful requests, authentication failure, database connection error, queue retry, and restart events.",
    concepts: ["Timestamp", "Log level", "Message", "Context", "Request ID", "Error", "Warning", "Information", "Rotation", "Ctrl+C"],
    interactive: { type: "log-investigation", title: "Interactive Log Investigation", prompt: "Use simulated log events to distinguish cause from symptom.", columns: ["Event", "Severity", "Likely meaning", "Evidence value"], rows: [["2026-07-22T09:00 request ok", "INFO", "Successful request", "Baseline"], ["2026-07-22T09:02 login denied", "WARN", "Authentication failure", "Security clue"], ["2026-07-22T09:04 SQLSTATE connection refused", "ERROR", "Database connection issue", "Likely root cause"], ["2026-07-22T09:05 queue retry", "WARN", "Background work delayed", "Symptom"], ["2026-07-22T09:06 deployment restart", "INFO", "Process restarted", "Timeline clue"]], selectable: true },
    atlas: "Logs help engineers avoid guessing when checkout, login, jobs, or deployment behavior changes.",
    commands: ["tail -f application.log", "grep \"ERROR\" application.log", "less application.log"],
    safety: "Stop tail -f with Ctrl+C. Do not paste private log lines containing passwords, API keys, payment data, or session tokens.",
    security: ["Logs should not contain passwords, API keys, full payment information, session tokens, or private customer data."],
    quizCount: 6
  },
  {
    title: "Safe Terminal Practices",
    summary: "Build judgment before learners use destructive, privileged, recursive, wildcard, network, or unknown commands.",
    objectives: ["Classify command risk using text labels.", "Use a command review checklist before running commands.", "Improve AI prompts so generated terminal advice is explainable and safe."],
    scenario: "An AI assistant suggests a permissions command. The learner must understand the command, path, recursion, privilege, and recovery plan before using it.",
    concepts: ["Read the command", "Target path", "Current directory", "Preview", "Backup", "Root", "Wildcard", "Quotes", "Exit output", "Recovery plan", "AI prompt safety"],
    interactive: { type: "risk-review", title: "Interactive Risk Review", prompt: "Classify each command by the highest relevant risk.", items: [{ action: "ls -la", answer: "Read-only", reason: "Lists files without changing them." }, { action: "cat notes.txt", answer: "Read-only", reason: "Reads text." }, { action: "mv file.txt archive/", answer: "Low-risk modification", reason: "Moves a file and can break references." }, { action: "rm file.txt", answer: "Destructive", reason: "Deletes a file." }, { action: "rm -rf project/", answer: "Destructive", reason: "Recursive forced deletion is dangerous." }, { action: "sudo chown -R user:user /var/www", answer: "Privileged", reason: "Elevated recursive ownership change can affect services." }, { action: "curl https://example.com", answer: "Network access", reason: "Contacts a remote system." }] },
    atlas: "Safe terminal practice protects Atlas Commerce deployment files, logs, services, and customer-impacting systems.",
    commands: ["ls -la", "cat notes.txt", "mv file.txt archive/", { command: "rm file.txt", risk: [validRisks.destructive] }, { command: "rm -rf project/", risk: [validRisks.destructive], safeUse: "Dangerous example. Verify path, backup, and intent; do not use as routine cleanup." }, { command: "sudo chown -R user:user /var/www", risk: [validRisks.privileged, validRisks.destructive], safeUse: "Privileged recursive ownership changes require precise service-user reasoning." }, { command: "curl https://example.com", risk: [validRisks.network] }],
    ai: { poor: "Give me a command to fix permissions.", better: "I have a static website in /var/www/handbook. Nginx needs read access. My deployment user should keep ownership. Current output from ls -ld is: drwx------ mike mike /var/www/handbook. Explain the safest ownership and permission approach. Do not suggest chmod 777. Explain each command before showing it.", why: "The improved prompt gives context, constraints, current evidence, and rejects unsafe shortcuts." },
    quizCount: 8
  },
  {
    title: "Remote Servers and SSH",
    summary: "Explain remote command-line access using SSH, including local client, remote server, hostname, IP address, port, user account, encrypted session, authentication, and host keys.",
    objectives: ["Trace the SSH connection flow.", "Explain host-key verification without disabling it.", "Use safe example domains and documentation IP addresses."],
    scenario: "An engineer connects to an Atlas Commerce server to inspect service status, deployment files, logs, queue workers, and recent behavior.",
    concepts: ["Local client", "Remote server", "Hostname", "IP address", "Port", "User account", "Authentication", "Encrypted connection", "Session", "Host key"],
    interactive: { type: "ssh-flow", title: "Interactive SSH Flow", steps: [["Local Computer", "The SSH client starts on the learner's machine.", "The local machine initiates the connection.", "Wrong client or network can block access."], ["Resolve Host", "The hostname resolves to an address.", "The client needs a destination.", "DNS or typo failures stop connection."], ["Connect to SSH Port", "The client connects to port 22 or a configured port.", "SSH listens on a network port.", "Firewall or wrong port can block it."], ["Verify Server Identity", "The host key is checked.", "This helps detect impersonation.", "Do not blindly disable host-key checking."], ["Authenticate User", "Password or key authentication proves user access.", "The server must trust the user.", "Wrong account or key denies access."], ["Open Remote Shell", "The remote shell accepts commands.", "Commands now run on the remote server.", "Always confirm host and user."]] },
    atlas: "SSH lets an engineer inspect a remote Atlas Commerce server without building an admin dashboard.",
    commands: [{ command: "ssh user@example.com", risk: [validRisks.network] }, { command: "ssh user@192.0.2.10", risk: [validRisks.network], safeUse: "192.0.2.10 is a documentation IP, not a real server." }, { command: "ssh -p 2222 user@example.com", risk: [validRisks.network], description: "Connect to a non-default SSH port." }],
    security: ["Host-key verification matters. Do not teach or use blind host-key disabling as a shortcut."],
    quizCount: 6
  },
  {
    title: "SSH Keys Conceptually",
    summary: "Explain public-key SSH authentication through key pairs, private keys, public keys, authorized keys, passphrases, rotation, and revocation.",
    objectives: ["Explain public and private keys without deep cryptography.", "Describe authorized keys and passphrases.", "Avoid sharing, uploading, committing, or reusing private keys forever."],
    scenario: "A learner configures key-based access for a remote server and must keep the private key on the local device.",
    concepts: ["Key pair", "Private key", "Public key", "Authorized key", "Passphrase", "Authentication", "Key rotation", "Revocation", "Private key permissions"],
    interactive: { type: "os-comparison", title: "SSH Key Placement", prompt: "Compare where each key material belongs.", columns: ["Item", "Location", "Sharing rule", "Purpose"], rows: [["Private key", "Local device", "Never upload or share", "Proves identity"], ["Public key", "Remote authorized_keys", "Can be copied to servers", "Identifies trusted key"], ["Passphrase", "User memory / password manager", "Protect carefully", "Protects private key use"], ["Revoked key", "Removed from server", "No longer trusted", "Ends access"]], selectable: true },
    diagram: { type: "linear", title: "SSH Key Concept", alt: "Private key stays local; public key is stored on the remote server.", nodes: ["Private Key stays on local device", "Public Key stored on remote server"] },
    atlas: "Atlas Commerce server access should use controlled keys, passphrases where practical, and revocation when people or devices change.",
    commands: ["ssh-keygen", { command: "ssh-copy-id user@example.com", risk: [validRisks.network], safeUse: "ssh-copy-id may not exist on every platform. Manual public-key installation methods also exist." }],
    mistakes: ["Sharing the private key.", "Committing keys to Git.", "Losing all access without recovery.", "Reusing one key everywhere forever.", "Disabling password access before confirming key access."],
    quizCount: 6
  },
  {
    title: "Package Managers",
    summary: "Explain package managers as systems for discovering, installing, updating, upgrading, and removing software and dependencies.",
    objectives: ["Distinguish packages, repositories, versions, dependencies, lock files, update, and upgrade.", "Compare system package managers and project dependency managers.", "Avoid running install commands without checking the operating system."],
    scenario: "An engineer needs Git locally, Nginx on a Linux server, and project dependencies managed separately.",
    concepts: ["Package", "Repository", "Version", "Dependency", "Lock file", "Update", "Upgrade", "System package manager", "Project package manager"],
    interactive: { type: "package-comparison", title: "Package Manager Comparison", prompt: "Compare what different tools manage.", columns: ["Tool", "Common platform", "Manages", "Typical risk"], rows: [["apt", "Debian / Ubuntu", "System packages", "Privileged package installation"], ["dnf", "Fedora / RHEL family", "System packages", "Privileged package installation"], ["Homebrew", "macOS / Linux", "Developer tools", "Local package installation"], ["Winget", "Windows", "Windows applications", "Package installation"], ["Composer", "PHP projects", "Project dependencies", "Lock-file changes"], ["npm", "JavaScript projects", "Project dependencies", "Lock-file changes"]], selectable: true },
    atlas: "Atlas Commerce might use system package tools for server software and project dependency tools for application packages.",
    commands: [{ command: "sudo apt update", risk: [validRisks.privileged, validRisks.package], platform: ["Linux"], description: "Update package indexes on Debian or Ubuntu." }, { command: "sudo apt install nginx", risk: [validRisks.privileged, validRisks.package], platform: ["Linux"], description: "Install Nginx after confirming the operating system." }, { command: "brew install git", risk: [validRisks.package], platform: ["macOS"], description: "Install Git using Homebrew." }, { command: "winget install Git.Git", risk: [validRisks.package], platform: ["Windows PowerShell"], description: "Install Git using Winget." }],
    quizCount: 6
  },
  {
    title: "Composer and npm as Dependency Tools",
    summary: "Explain Composer and npm as project dependency managers, including manifests, lock files, install, update, dependency trees, scripts, and audits.",
    objectives: ["Explain manifests, direct dependencies, transitive dependencies, semantic versions, lock files, scripts, and security advisories.", "Distinguish install from update.", "Avoid blind production updates and casual lock-file deletion."],
    scenario: "Atlas Commerce uses Composer for backend dependencies and npm for frontend tooling. Install and update have different risk profiles.",
    concepts: ["Manifest file", "Dependency", "Development dependency", "Semantic version", "Lock file", "Install", "Update", "Dependency tree", "Script", "Security advisory"],
    interactive: { type: "dependency-graph", title: "Dependency Graph Explorer", prompt: "Read direct versus transitive dependencies.", columns: ["Node", "Relationship", "Why it matters"], rows: [["Your Project", "Root", "Contains manifests and lock files"], ["Direct Dependency A", "Declared", "Chosen by the project"], ["Transitive Dependency B", "Required by A", "Can still affect security and behavior"], ["Direct Dependency C", "Declared", "May bring scripts or subdependencies"]], selectable: true },
    atlas: "Dependency tools help Atlas Commerce reproduce installs, review audits, and avoid surprise changes during deployments.",
    commands: ["composer install", { command: "composer update", risk: [validRisks.low], safeUse: "Update can select newer versions and modify the lock file. Review changes before deployment." }, "composer show", "composer audit", "npm install", { command: "npm update", risk: [validRisks.low], safeUse: "Update can alter dependency versions. Review package and lock-file changes." }, "npm list", "npm audit"],
    mistakes: ["Deleting lock files casually.", "Running updates directly in production.", "Ignoring audit reports.", "Installing unnecessary packages.", "Assuming popularity means trust.", "Committing dependency folders when project conventions say not to."],
    quizCount: 7
  },
  {
    title: "Inspecting a Remote Server Safely",
    summary: "Teach a read-first, evidence-first workflow for basic remote server investigation after deployment errors.",
    objectives: ["Follow a safe investigation order before making changes.", "Use read-first server commands to inspect host, user, directory, uptime, disk, memory, services, logs, and deployments.", "Form hypotheses from evidence rather than restarting everything."],
    scenario: "Atlas Commerce returns errors after a deployment. Disk is 98 percent full, Nginx is active, the application process is running, and logs show write failures.",
    concepts: ["Correct server", "Current user", "Current directory", "Disk usage", "Memory usage", "Running services", "Logs", "Recent deployments", "Hypothesis", "Smallest safe change"],
    interactive: { type: "log-investigation", title: "Interactive Incident Investigation", prompt: "Select the evidence most relevant to the simulated incident.", columns: ["Evidence", "Value", "Likely implication"], rows: [["Disk usage", "98% full", "Highly relevant to write failures"], ["Nginx", "active", "Web server is probably running"], ["Application process", "running", "Process existence does not prove health"], ["Logs", "write failed: no space left", "Likely root cause"], ["Recent deploy", "10 minutes ago", "Timeline clue"]], selectable: true },
    atlas: "The safe path is observation, evidence preservation, notes, and smallest justified changes rather than restarting every service.",
    commands: ["hostname", "whoami", "pwd", "uptime", "df -h", "free -h", "ps aux", { command: "systemctl status nginx", platform: ["Linux"], risk: [validRisks.read], safeUse: "Common on systemd Linux systems, but not every server uses systemd or Nginx." }, "tail -n 100 application.log"],
    senior: ["Confirm the correct server and current user.", "Preserve evidence and record commands.", "Avoid restarting everything.", "Know whether monitoring exists.", "Confirm before changing permissions.", "Escalate when risk is unclear."],
    quizCount: 8
  }
];

const lessons = specs.map(basics);
const file = `(function () {\n  window.LessonContentRegistry = window.LessonContentRegistry || {};\n  ${lessons.map((lesson) => `window.LessonContentRegistry[${JSON.stringify(lesson.slug)}] = ${JSON.stringify(lesson, null, 2)};`).join("\n  ")}\n})();\n`;
fs.writeFileSync(path.join(out, "phase4-terminal-lessons.js"), file);

const glossaryCommands = Object.keys(commandInfo).map((name) => ({
  command: name,
  purpose: commandInfo[name][0],
  risk: [validRisks[commandInfo[name][1]] || validRisks.read],
  platform: name === "winget" ? ["Windows PowerShell"] : name === "brew" ? ["macOS"] : ["Linux", "macOS", "WSL", "Git Bash"],
  example: name === "ssh" ? "ssh user@example.com" : name === "rm" ? "rm old-file.txt" : name === "apt" ? "sudo apt install nginx" : name + (["ls", "ps"].includes(name) ? " aux".replace("ls aux", " -la") : ""),
  lessonSlug: lessons.find((lesson) => (lesson.terminalCommands || []).some((command) => command.command.split(/\s+/)[0] === name))?.slug || "why-engineers-use-the-terminal"
}));

const glossary = `(function () {\n  window.CommandGlossary = ${JSON.stringify(glossaryCommands, null, 2)};\n})();\n`;
fs.writeFileSync(path.join(__dirname, "..", "data", "command-glossary.js"), glossary);
