(function () {
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function section(id, title) {
    var sec = el("section", "lesson-section");
    sec.id = id;
    sec.dataset.sectionTitle = title;
    sec.appendChild(el("h2", "", title));
    return sec;
  }

  function paragraphs(items) {
    var frag = document.createDocumentFragment();
    (items || []).forEach(function (text) { frag.appendChild(el("p", "", text)); });
    return frag;
  }

  function list(items, ordered) {
    var node = el(ordered ? "ol" : "ul", ordered ? "numbered-panels" : "check-list");
    (items || []).forEach(function (item) { node.appendChild(el("li", "", item)); });
    return node;
  }

  function renderDefinitions(items) {
    var grid = el("div", "definition-grid");
    (items || []).forEach(function (pair) {
      var card = el("div", "definition-card accordion-card");
      var button = el("button", "accordion-trigger", pair[0]);
      var panel = el("div", "accordion-panel", pair[1]);
      var panelId = "panel-" + Math.random().toString(36).slice(2);
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", panelId);
      panel.id = panelId;
      panel.hidden = true;
      button.addEventListener("click", function () {
        var open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
      card.append(button, panel);
      grid.appendChild(card);
    });
    return grid;
  }

  function renderStepFlow(block) {
    var wrap = el("div", "interactive-card");
    wrap.appendChild(el("h3", "", block.title || "Step Flow"));
    var buttons = el("div", "step-flow");
    var detail = el("div", "flow-detail");
    var count = el("p", "step-count");
    var controls = el("div", "step-controls");
    var previous = el("button", "button button-secondary", "Previous");
    var next = el("button", "button button-secondary", "Next");
    previous.type = "button";
    next.type = "button";
    var active = 0;
    function select(index) {
      active = Math.max(0, Math.min(block.steps.length - 1, index));
      buttons.querySelectorAll("button").forEach(function (button, i) {
        button.setAttribute("aria-pressed", String(i === active));
      });
      var step = block.steps[active];
      count.textContent = "Step " + (active + 1) + " of " + block.steps.length;
      detail.textContent = "";
      detail.append(el("h4", "", step[0]), el("p", "", step[1]), el("p", "", "Why it matters: " + step[2]), el("p", "", "Failure or investigation note: " + step[3]));
      previous.disabled = active === 0;
      next.disabled = active === block.steps.length - 1;
    }
    block.steps.forEach(function (step, index) {
      var button = el("button", "", (index + 1) + ". " + step[0]);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", function () { select(index); });
      button.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          buttons.querySelectorAll("button")[Math.min(block.steps.length - 1, index + 1)].focus();
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          buttons.querySelectorAll("button")[Math.max(0, index - 1)].focus();
        }
      });
      buttons.appendChild(button);
    });
    previous.addEventListener("click", function () { select(active - 1); });
    next.addEventListener("click", function () { select(active + 1); });
    controls.append(previous, next);
    wrap.append(count, buttons, detail, controls);
    select(0);
    return wrap;
  }

  function renderDecision(block) {
    var wrap = el("div", "challenge decision-scenario");
    wrap.append(el("h3", "", block.title || "Decision Scenario"), el("p", "", block.prompt || ""));
    var answers = el("div", "answer-grid");
    var feedback = el("p", "feedback");
    feedback.setAttribute("aria-live", "polite");
    (block.answers || []).forEach(function (answer) {
      var button = el("button", "", answer[0]);
      button.type = "button";
      button.addEventListener("click", function () {
        answers.querySelectorAll("button").forEach(function (item) { item.classList.remove("selected"); });
        button.classList.add("selected");
        feedback.textContent = (answer[1] ? "Correct. " : "Not quite. ") + answer[2] + " " + (block.reasoning || "");
        feedback.className = "feedback " + (answer[1] ? "correct" : "incorrect");
      });
      answers.appendChild(button);
    });
    wrap.append(answers, feedback);
    return wrap;
  }

  function renderComparison(block) {
    var wrap = el("div", "interactive-card comparison-explorer");
    wrap.append(el("h3", "", block.title || "Comparison"), el("p", "", block.prompt || ""));
    var tableWrap = el("div", "table-scroll");
    var table = el("table", "comparison-table");
    var head = el("tr");
    ["Item", "Classification", "Why"].forEach(function (heading) { head.appendChild(el("th", "", heading)); });
    table.appendChild(head);
    (block.items || []).forEach(function (item) {
      var row = el("tr");
      row.append(el("td", "", item[0]), el("td", "", item[1]), el("td", "", item[2]));
      table.appendChild(row);
    });
    tableWrap.appendChild(table);
    wrap.appendChild(tableWrap);
    return wrap;
  }

  function renderTableExplorer(block, className) {
    var wrap = el("div", "interactive-card " + (className || "table-explorer"));
    wrap.append(el("h3", "", block.title || "Explorer"), el("p", "", block.prompt || ""));
    var feedback = el("p", "feedback");
    feedback.setAttribute("aria-live", "polite");
    var tableWrap = el("div", "table-scroll");
    var table = el("table", "comparison-table");
    var head = el("tr");
    (block.columns || ["Item", "Meaning"]).forEach(function (heading) {
      var th = el("th", "", heading);
      if (block.sortable) {
        var sort = el("button", "table-sort", heading);
        sort.type = "button";
        sort.addEventListener("click", function () {
          var index = Array.prototype.indexOf.call(head.children, th);
          var rows = Array.from(table.querySelectorAll("tr")).slice(1).sort(function (a, b) {
            return a.children[index].textContent.localeCompare(b.children[index].textContent);
          });
          rows.forEach(function (row) { table.appendChild(row); });
          feedback.textContent = "Sorted by " + heading + ".";
        });
        th.textContent = "";
        th.appendChild(sort);
      }
      head.appendChild(th);
    });
    table.appendChild(head);
    (block.rows || []).forEach(function (row) {
      var tr = el("tr");
      row.forEach(function (cell) { tr.appendChild(el("td", "", cell)); });
      if (block.selectable) {
        tr.tabIndex = 0;
        tr.addEventListener("click", function () {
          table.querySelectorAll("tr").forEach(function (item) { item.classList.remove("selected"); });
          tr.classList.add("selected");
          feedback.textContent = block.selectionPrefix ? block.selectionPrefix + " " + row.join(" | ") : row.join(" | ");
        });
        tr.addEventListener("keydown", function (event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); tr.click(); } });
      }
      table.appendChild(tr);
    });
    tableWrap.appendChild(table);
    wrap.append(tableWrap, feedback);
    return wrap;
  }

  function renderMatchExplorer(block) {
    var wrap = el("div", "interactive-card match-explorer");
    wrap.append(el("h3", "", block.title || "Mapper"), el("p", "", block.prompt || ""));
    var feedback = el("p", "feedback");
    feedback.setAttribute("aria-live", "polite");
    (block.items || []).forEach(function (item) {
      var row = el("div", "match-row");
      row.appendChild(el("span", "", item.action));
      var select = document.createElement("select");
      select.setAttribute("aria-label", "Choose responsibility for " + item.action);
      select.appendChild(el("option", "", "Choose..."));
      (block.choices || []).forEach(function (choice) { select.appendChild(el("option", "", choice)); });
      select.addEventListener("change", function () {
        feedback.textContent = select.value === item.answer ? "Correct: " + item.reason : "Look again: " + item.reason;
        feedback.className = "feedback " + (select.value === item.answer ? "correct" : "incorrect");
      });
      row.appendChild(select);
      wrap.appendChild(row);
    });
    wrap.appendChild(feedback);
    return wrap;
  }

  function renderPathNavigator(block) {
    var wrap = el("div", "interactive-card path-navigator");
    wrap.append(el("h3", "", block.title), el("p", "", block.prompt), renderPseudocode(block.tree || []));
    var current = el("p", "terminal-state");
    var output = el("pre", "simulated-output");
    var cwd = block.start || "/home/mike/handbook";
    function paint(text) {
      current.textContent = "Current directory: " + cwd;
      output.textContent = "Simulated output:\n" + text;
    }
    (block.commands || []).forEach(function (command) {
      var button = el("button", "button button-secondary", command.label);
      button.type = "button";
      button.addEventListener("click", function () {
        cwd = command.cwd || cwd;
        paint(command.output);
      });
      wrap.appendChild(button);
    });
    wrap.append(current, output);
    paint("Use the controls to simulate pwd, ls, and cd.");
    return wrap;
  }

  function renderFileSimulator(block) {
    var wrap = el("div", "interactive-card file-simulator");
    wrap.append(el("h3", "", block.title), el("p", "", block.prompt));
    var tree = el("pre", "simulated-output");
    var steps = block.steps || [];
    var index = 0;
    function paint() {
      var step = steps[index];
      tree.textContent = "Simulated workspace:\n" + step.tree.join("\n") + "\n\nCommand: " + step.command + "\n" + step.note;
    }
    var controls = el("div", "step-controls");
    steps.forEach(function (step, i) {
      var button = el("button", "button button-secondary", step.label);
      button.type = "button";
      button.addEventListener("click", function () { index = i; paint(); });
      controls.appendChild(button);
    });
    wrap.append(controls, tree);
    paint();
    return wrap;
  }

  function renderPipeBuilder(block) {
    var wrap = el("div", "interactive-card pipe-builder");
    wrap.append(el("h3", "", block.title), el("p", "", block.prompt));
    var selected = [];
    var output = el("pre", "simulated-output");
    (block.steps || []).forEach(function (step) {
      var button = el("button", "button button-secondary", step.label);
      button.type = "button";
      button.addEventListener("click", function () {
        if (selected.indexOf(step.command) < 0) selected.push(step.command);
        output.textContent = "Simulated command:\n" + selected.join(" | ") + "\n\n" + (selected.length === block.steps.length ? block.result : "Add the next stage.");
      });
      wrap.appendChild(button);
    });
    var reset = el("button", "button button-subtle", "Reset");
    reset.type = "button";
    reset.addEventListener("click", function () { selected = []; output.textContent = "Simulated command:\n"; });
    wrap.append(reset, output);
    return wrap;
  }

  function renderRiskReview(block) {
    var choices = ["Read-only", "Low-risk modification", "Destructive", "Privileged", "Network access", "Package installation"];
    return renderMatchExplorer({ title: block.title, prompt: block.prompt, choices: choices, items: block.items });
  }

  function renderGitPractice(block) {
    var wrap = el("div", "interactive-card git-practice-simulator");
    wrap.append(el("h3", "", block.title || "Git Practice Simulator"), el("p", "", block.prompt || "Use button-based actions to inspect simulated repository state. No Git commands run in the browser."));
    var state = {
      branch: "main",
      working: ["lesson.md modified"],
      staged: [],
      history: ["A foundation"],
      remote: "origin/main is even with main"
    };
    var output = el("pre", "simulated-output");
    output.setAttribute("aria-live", "polite");
    function paint(note) {
      output.textContent = "Simulated repository state:\nBranch: " + state.branch + "\nWorking tree: " + (state.working.join(", ") || "clean") + "\nStaging area: " + (state.staged.join(", ") || "empty") + "\nHistory: " + state.history.join(" -> ") + "\nRemote: " + state.remote + "\n\n" + note;
    }
    var actions = [
      ["Modify file", function () { if (state.working.indexOf("lesson.md modified") < 0) state.working.push("lesson.md modified"); paint("A working-tree file changed."); }],
      ["Stage file", function () { if (state.working.length) state.staged.push(state.working.shift()); paint("git add moves selected changes into the staging area."); }],
      ["Commit", function () { if (state.staged.length) { state.history.push("B update lesson"); state.staged = []; } paint("git commit records staged changes into local history."); }],
      ["Create branch", function () { state.branch = "feature/git-lesson"; paint("A branch is a movable label, not a full folder copy."); }],
      ["Switch branch", function () { state.branch = state.branch === "main" ? "feature/git-lesson" : "main"; paint("Switching changes the current branch label and visible files when histories differ."); }],
      ["Merge", function () { state.branch = "main"; state.history.push("M merge feature/git-lesson"); paint("A simulated merge integrates feature work into main."); }],
      ["Conflict", function () { state.working = ["index.html conflict markers"]; paint("Git paused because human judgment is needed."); }],
      ["Resolve", function () { state.working = ["index.html resolved"]; state.staged = ["index.html resolved"]; paint("Resolved conflict is staged; tests should still run."); }],
      ["Fetch", function () { state.remote = "origin/main has one new commit fetched"; paint("git fetch updates remote-tracking information only."); }],
      ["Pull", function () { state.history.push("C remote update"); state.remote = "integrated remote update"; paint("git pull fetches and integrates into the current branch."); }],
      ["Push", function () { state.remote = "remote now has local commits"; paint("git push sends local commits to the remote repository."); }],
      ["Reset simulation", function () { state = { branch: "main", working: ["lesson.md modified"], staged: [], history: ["A foundation"], remote: "origin/main is even with main" }; paint("Simulation reset."); }]
    ];
    var controls = el("div", "step-controls");
    actions.forEach(function (action) {
      var button = el("button", "button button-secondary", action[0]);
      button.type = "button";
      button.addEventListener("click", action[1]);
      controls.appendChild(button);
    });
    wrap.append(controls, output);
    paint("Ready.");
    return wrap;
  }

  function renderTerminalInteractive(block) {
    if (block.type === "responsibility-mapper" || block.type === "permission-decision" || block.type === "risk-review") return block.type === "risk-review" ? renderRiskReview(block) : renderMatchExplorer(block);
    if (block.type === "process-table" || block.type === "package-comparison" || block.type === "dependency-graph" || block.type === "log-investigation" || block.type === "os-comparison") return renderTableExplorer(block, block.type);
    if (block.type === "path-navigator") return renderPathNavigator(block);
    if (block.type === "file-operation-simulator") return renderFileSimulator(block);
    if (block.type === "pipe-builder") return renderPipeBuilder(block);
    if (block.type === "ssh-flow") {
      var flow = renderStepFlow(block);
      flow.classList.add("ssh-flow");
      return flow;
    }
    if (block.type === "git-practice-simulator") return renderGitPractice(block);
    if (["repository-state-explorer", "working-tree-simulator", "staging-simulator", "commit-timeline", "branch-graph", "merge-simulator", "conflict-resolver", "recovery-decision", "remote-sync-explorer", "pull-request-workflow", "code-review-scenario", "issue-builder", "release-timeline", "secret-exposure-incident", "ci-workflow-visualizer", "ai-diff-review"].indexOf(block.type) >= 0) return renderTableExplorer(block, block.type);
    return renderComparison(block);
  }

  function renderDiagram(diagram) {
    var wrap = el("div", "architecture-diagram reusable-diagram " + (diagram.type || "linear"));
    wrap.setAttribute("role", "img");
    wrap.setAttribute("aria-label", diagram.alt || diagram.title || "Architecture diagram");
    wrap.appendChild(el("h3", "", diagram.title || "Architecture Diagram"));
    (diagram.nodes || []).forEach(function (node, index) {
      wrap.appendChild(el("div", "diagram-node", node));
      if (index < diagram.nodes.length - 1) wrap.appendChild(el("div", "diagram-arrow", diagram.type === "hub" ? "connects with" : "then"));
    });
    return wrap;
  }

  function renderPseudocode(lines) {
    var wrap = el("div", "pseudocode-walkthrough");
    var pre = el("pre", "code-block");
    var code = el("code");
    code.textContent = (lines || []).join("\n");
    pre.appendChild(code);
    var button = el("button", "button button-secondary", "Highlight next line");
    button.type = "button";
    var active = -1;
    button.addEventListener("click", function () {
      active = (active + 1) % lines.length;
      code.textContent = lines.map(function (line, index) { return (index === active ? "> " : "  ") + line; }).join("\n");
    });
    wrap.append(pre, button);
    return wrap;
  }

  function renderCommand(command) {
    var wrap = el("div", "terminal-block");
    if (command.platform) {
      var platforms = el("div", "platform-list");
      (command.platform || []).forEach(function (platform) { platforms.appendChild(el("span", "badge", platform)); });
      wrap.appendChild(platforms);
    }
    if (command.risk) {
      var risks = el("div", "risk-labels");
      (command.risk || []).forEach(function (risk) { risks.appendChild(el("span", "risk-label", risk)); });
      wrap.appendChild(risks);
    }
    if (command.description) wrap.appendChild(el("p", "", command.description));
    var pre = el("pre", "code-block");
    var code = el("code");
    code.textContent = command.command;
    pre.appendChild(code);
    var copy = el("button", "button button-secondary", "Copy command");
    var status = el("p", "copy-status");
    status.setAttribute("aria-live", "polite");
    copy.type = "button";
    copy.addEventListener("click", function () {
      navigator.clipboard && navigator.clipboard.writeText(command.command).then(function () {
        status.textContent = "Command copied.";
      }, function () {
        status.textContent = "Copy unavailable. Select the command text instead.";
      });
    });
    wrap.append(pre, copy, status);
    if (command.repositoryEffect) wrap.appendChild(el("p", "", command.repositoryEffect));
    if (command.anatomy) {
      var anatomy = el("div", "command-anatomy");
      anatomy.appendChild(el("h4", "", "Command anatomy"));
      command.anatomy.forEach(function (part) {
        var item = el("button", "anatomy-token", part.token + " - " + part.meaning);
        item.type = "button";
        anatomy.appendChild(item);
      });
      wrap.appendChild(anatomy);
    }
    if (command.explanation) wrap.appendChild(el("p", "", "What it does: " + command.explanation));
    if (command.expectedOutput || command.output) {
      var out = el("pre", "simulated-output");
      out.setAttribute("aria-label", "Simulated terminal output");
      out.textContent = "Simulated output:\n" + (command.expectedOutput || command.output);
      wrap.appendChild(out);
    }
    if (command.outputExplanation) wrap.appendChild(el("p", "", "Output explanation: " + command.outputExplanation));
    if (command.commonError) wrap.appendChild(el("p", "warning-note", "Common error: " + command.commonError));
    if (command.safeUse || command.warning) wrap.appendChild(el("p", "warning-note", "Safe use: " + (command.safeUse || command.warning)));
    if (command.recovery) wrap.appendChild(el("p", "warning-note", "Recovery: " + command.recovery));
    if (command.tryIt) wrap.appendChild(el("p", "", "Try it: " + command.tryIt));
    return wrap;
  }

  function renderLab(lessonId, lab) {
    var wrap = el("div", "observation-lab callout");
    wrap.append(el("h3", "", "Observation Lab"), el("p", "", "Goal: " + lab.goal), list(lab.steps), el("p", "", "What to observe: " + lab.observe.join(" ")), el("p", "", "Expected findings: " + lab.expected), el("p", "warning-note", "Safety note: " + lab.safety));
    var label = el("label", "lab-check");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var labId = lab.id || "observation-lab";
    var saved = window.HandbookStorage.getLesson(lessonId);
    checkbox.checked = saved.labs && saved.labs[labId] ? saved.labs[labId].completed : saved.labCompleted;
    checkbox.addEventListener("change", function () {
      window.HandbookStorage.setLabCompleted(lessonId, checkbox.checked, labId);
    });
    label.append(checkbox, document.createTextNode(" I completed this observation lab"));
    wrap.appendChild(label);
    return wrap;
  }

  function renderQuiz(lessonId, quiz) {
    var wrap = el("div", "quiz");
    var answers = {};
    var score = el("p", "quiz-score");
    var saved = window.HandbookStorage.getLesson(lessonId);
    if (saved.bestQuizScore !== null) score.textContent = "Best score: " + saved.bestQuizScore + "%. Latest score: " + (saved.latestQuizScore === null ? "not attempted" : saved.latestQuizScore + "%") + ".";
    function updateScore() {
      var total = quiz.questions.length;
      var answered = Object.keys(answers).length;
      var correct = quiz.questions.filter(function (q, index) { return answers[index] === q.answerIndex; }).length;
      if (answered === total) {
        var percent = Math.round((correct / total) * 100);
        var passed = percent >= (quiz.passingScore || 70);
        window.HandbookStorage.saveQuiz(lessonId, percent, passed);
        score.textContent = "Final score: " + correct + " of " + total + " (" + percent + "%). " + (passed ? "Passed." : "Keep reviewing.");
        updateCompletionAvailability();
      } else {
        score.textContent = "Answered: " + answered + " of " + total + ".";
      }
    }
    quiz.questions.forEach(function (question, index) {
      var card = el("article", "quiz-card");
      card.appendChild(el("h3", "", (index + 1) + ". " + question.question));
      var options = el("div", "quiz-options");
      var feedback = el("p", "quiz-feedback");
      feedback.setAttribute("aria-live", "polite");
      question.options.forEach(function (option, optionIndex) {
        var button = el("button", "", option);
        button.type = "button";
        button.addEventListener("click", function () {
          answers[index] = optionIndex;
          options.querySelectorAll("button").forEach(function (item) { item.classList.remove("selected"); });
          button.classList.add("selected");
          var correct = optionIndex === question.answerIndex;
          feedback.textContent = (correct ? "Correct. " : "Not quite. ") + (question.explanation || "");
          feedback.className = "quiz-feedback " + (correct ? "correct" : "incorrect");
          updateScore();
        });
        options.appendChild(button);
      });
      card.append(options, feedback);
      wrap.appendChild(card);
    });
    var retry = el("button", "button button-secondary", "Retry quiz");
    retry.type = "button";
    retry.addEventListener("click", function () {
      answers = {};
      wrap.querySelectorAll(".selected").forEach(function (node) { node.classList.remove("selected"); });
      wrap.querySelectorAll(".quiz-feedback").forEach(function (node) { node.textContent = ""; node.className = "quiz-feedback"; });
      updateScore();
    });
    wrap.append(score, retry);
    updateScore();
    return wrap;
  }

  function renderRelated(ids) {
    var grid = el("div", "related-grid");
    (ids || []).forEach(function (id) {
      var lesson = window.CurriculumData.findLesson(id);
      if (!lesson) return;
      var link = el("a", "", lesson.title);
      link.href = window.CurriculumData.lessonUrl(lesson);
      grid.appendChild(link);
    });
    return grid;
  }

  function renderResources(resources) {
    var ul = el("ul");
    (resources || []).forEach(function (resource) {
      var li = el("li");
      if (resource.url) {
        var a = el("a", "", resource.title);
        a.href = resource.url;
        a.rel = "noreferrer";
        li.appendChild(a);
      } else {
        li.textContent = resource.title + " (resource title for later URL verification)";
      }
      ul.appendChild(li);
    });
    return ul;
  }

  function addSection(content, id, title, body) {
    var sec = section(id, title);
    if (typeof body === "string") sec.appendChild(el("p", "", body));
    else sec.appendChild(body);
    content.appendChild(sec);
  }

  function renderAuthoredLesson(lesson, record) {
    var content = document.querySelector(".lesson-content");
    if (!content || !record || record.slug === "how-an-http-request-works") return false;
    content.textContent = "";
    addSection(content, "introduction", "1. Introduction", paragraphs(record.introduction));
    addSection(content, "learning-objectives", "2. Learning Objectives", list(record.learningObjectives));
    addSection(content, "real-world-scenario", "3. Real-World Scenario", record.scenario.body);
    addSection(content, "why-this-exists", "4. Why This Exists", paragraphs(record.whyThisExists));
    addSection(content, "problem-it-solves", "5. The Problem It Solves", paragraphs(record.problemItSolves));
    addSection(content, "key-concepts", "6. Key Concepts", renderDefinitions(record.keyConcepts));
    var interactive = document.createDocumentFragment();
    (record.interactiveBlocks || []).forEach(function (block) {
      interactive.appendChild(block.type === "step-flow" ? renderStepFlow(block) : block.type === "comparison" ? renderComparison(block) : block.type === "decision" ? renderDecision(block) : renderTerminalInteractive(block));
    });
    addSection(content, "interactive-activity", "7. Interactive Activity", interactive);
    addSection(content, "step-by-step", "8. Step-by-Step Workflow", list(record.seniorEngineerThinking, true));
    addSection(content, "architecture-diagram", "9. Architecture Diagram", renderDiagram(record.architectureDiagram));
    if (record.pseudocode) addSection(content, "pseudocode", "10. Pseudocode or Conceptual Logic", renderPseudocode(record.pseudocode));
    addSection(content, "atlas-commerce", "11. Atlas Commerce Example", record.atlasCommerceExample.body);
    addSection(content, "senior-engineers", "12. How Senior Engineers Think", list(record.seniorEngineerThinking));
    addSection(content, "common-mistakes", "13. Common Mistakes", list(record.commonMistakes));
    addSection(content, "debugging-guide", "14. Debugging or Investigation Guide", list(record.debuggingGuide));
    addSection(content, "security-considerations", "15. Security Considerations", list(record.securityNotes));
    addSection(content, "performance-notes", "16. Performance Notes", list(record.performanceNotes));
    addSection(content, "production-notes", "17. Production Notes", list(record.productionNotes));
    var ai = document.createDocumentFragment();
    ai.append(el("h3", "", "Poor prompt"), renderPseudocode([record.aiPromptExamples.poor]), el("h3", "", "Improved prompt"), renderPseudocode([record.aiPromptExamples.better]), el("p", "", record.aiPromptExamples.why));
    addSection(content, "ai-prompt-example", "18. AI Prompt Example", ai);
    if (record.terminalCommand || record.terminalCommands) {
      var commands = document.createDocumentFragment();
      (record.terminalCommands || [record.terminalCommand]).filter(Boolean).forEach(function (command) { commands.appendChild(renderCommand(command)); });
      addSection(content, "terminal-commands", "19. Terminal Commands", commands);
    }
    addSection(content, "hands-on-lab", "20. Hands-on Lab", renderLab(lesson.id, record.handsOnLab));
    addSection(content, "mini-challenge", "21. Mini Challenge", renderDecision(record.miniChallenge));
    addSection(content, "quiz", "22. Quiz", renderQuiz(lesson.id, record.quiz));
    addSection(content, "summary", "23. Summary", list(record.summaryPoints));
    addSection(content, "related-lessons", "24. Related Lessons", renderRelated(record.relatedLessons));
    addSection(content, "official-resources", "25. Official Resources", renderResources(record.officialResources));
    var nav = el("nav", "prev-next");
    nav.setAttribute("aria-label", "Previous and next lessons");
    content.appendChild(nav);
    updateBookmarkButton(lesson);
    updateCompletionAvailability();
    return true;
  }

  function updateCompletionAvailability() {
    var lessonId = document.body.dataset.lessonId;
    var state = window.HandbookStorage.getLesson(lessonId);
    var button = document.querySelector(".js-mark-complete");
    if (!button) return;
    var canComplete = state.completed || (state.quizAttempted && (state.visitedSections || []).indexOf("summary") >= 0);
    button.disabled = !canComplete;
    button.title = canComplete ? "" : "Reach the summary and attempt the quiz before marking complete.";
  }

  function updateBookmarkButton(lesson) {
    var button = document.querySelector("[data-bookmark-button]");
    if (!button || !lesson) return;
    function paint() {
      var saved = window.HandbookStorage.isBookmarked(lesson.slug);
      button.textContent = saved ? "Bookmarked" : "Bookmark";
      button.setAttribute("aria-pressed", String(saved));
      button.setAttribute("aria-label", saved ? "Remove bookmark for " + lesson.title : "Bookmark " + lesson.title);
    }
    button.onclick = function () {
      window.HandbookStorage.toggleBookmark(lesson.slug);
      paint();
      if (window.BookmarkManager) window.BookmarkManager.render();
    };
    paint();
  }

  window.LessonRenderer = {
    renderAuthoredLesson: renderAuthoredLesson,
    updateCompletionAvailability: updateCompletionAvailability,
    updateBookmarkButton: updateBookmarkButton
  };
})();
