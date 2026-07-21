(function () {
  function push(list, type, message) {
    list.push({ type: type, message: message });
  }

  function uniqueCheck(items, field, label, results) {
    var seen = new Set();
    items.forEach(function (item) {
      if (!item[field]) push(results.errors, "error", label + " is missing " + field + ".");
      if (seen.has(item[field])) push(results.errors, "error", label + " has duplicate " + field + ": " + item[field]);
      seen.add(item[field]);
    });
  }

  function validateAuthoredLessonContent(lessons, lessonIds, results) {
    var registry = window.LessonContentRegistry || {};
    var supportedBlocks = new Set(["step-flow", "comparison", "decision", "responsibility-mapper", "permission-decision", "process-table", "os-comparison", "path-navigator", "file-operation-simulator", "log-investigation", "pipe-builder", "risk-review", "ssh-flow", "package-comparison", "dependency-graph", "repository-state-explorer", "working-tree-simulator", "staging-simulator", "commit-timeline", "branch-graph", "merge-simulator", "conflict-resolver", "recovery-decision", "remote-sync-explorer", "pull-request-workflow", "code-review-scenario", "issue-builder", "release-timeline", "secret-exposure-incident", "ci-workflow-visualizer", "ai-diff-review", "git-practice-simulator"]);
    var validPlatforms = new Set(["Linux", "macOS", "Windows PowerShell", "Windows Command Prompt", "WSL", "Git Bash"]);
    var validRisks = new Set(["Read-only", "Low-risk modification", "Destructive", "Privileged", "Network access", "Package installation", "Changes working files", "Changes staging area", "Creates history", "Changes branch", "Changes local history", "Changes remote repository", "Potentially destructive", "Recovery command"]);
    lessons.filter(function (lesson) { return lesson.status === "complete"; }).forEach(function (lesson) {
      var record = registry[lesson.slug];
      if (!record) {
        push(results.errors, "error", "Complete lesson " + lesson.id + " is missing authored registry content for " + lesson.slug + ".");
        return;
      }
      if (record.id !== lesson.id) push(results.errors, "error", "Authored lesson " + lesson.slug + " id does not match curriculum id.");
      if (record.slug !== lesson.slug) push(results.errors, "error", "Authored lesson " + lesson.id + " slug does not match curriculum slug.");
      if (record.title !== lesson.title) push(results.errors, "error", "Authored lesson " + lesson.id + " title does not match curriculum title.");
      if (!Array.isArray(record.learningObjectives) || record.learningObjectives.length < 3) push(results.errors, "error", "Authored lesson " + lesson.id + " needs at least three learning objectives.");
      if (lesson.slug !== "how-an-http-request-works" && (!Array.isArray(record.summaryPoints) || record.summaryPoints.length < 3)) push(results.errors, "error", "Authored lesson " + lesson.id + " needs summary points.");
      if (lesson.slug !== "how-an-http-request-works" && (!record.handsOnLab || !Array.isArray(record.handsOnLab.steps) || record.handsOnLab.steps.length < 2)) push(results.errors, "error", "Authored lesson " + lesson.id + " needs a hands-on lab with steps.");
      (record.interactiveBlocks || []).forEach(function (block) {
        if (!supportedBlocks.has(block.type)) push(results.errors, "error", "Authored lesson " + lesson.id + " has unsupported interaction block " + block.type + ".");
      });
      (record.terminalCommands || []).forEach(function (command) {
        if (!command.command || !command.description) push(results.errors, "error", "Terminal command in " + lesson.id + " needs command and description.");
        if (command.command.indexOf("git ") === 0 && !command.repositoryEffect) push(results.errors, "error", "Git command " + command.command + " in " + lesson.id + " needs repositoryEffect.");
        (command.platform || []).forEach(function (platform) {
          if (!validPlatforms.has(platform)) push(results.errors, "error", "Terminal command " + command.command + " in " + lesson.id + " has invalid platform " + platform + ".");
        });
        (command.risk || []).forEach(function (risk) {
          if (!validRisks.has(risk)) push(results.errors, "error", "Terminal command " + command.command + " in " + lesson.id + " has invalid risk label " + risk + ".");
        });
        if (((command.risk || []).indexOf("Destructive") >= 0 || (command.risk || []).indexOf("Potentially destructive") >= 0) && !command.safeUse) push(results.errors, "error", "Destructive command " + command.command + " in " + lesson.id + " needs a warning.");
        if ((command.risk || []).indexOf("Privileged") >= 0 && !command.safeUse) push(results.errors, "error", "Privileged command " + command.command + " in " + lesson.id + " needs a warning.");
        var outputText = String(command.expectedOutput || "") + " " + String(command.outputExplanation || "");
        if (!command.expectedOutput || outputText.toLowerCase().indexOf("simulated") < 0) push(results.errors, "error", "Terminal command " + command.command + " in " + lesson.id + " needs clearly simulated output.");
        if (/BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY|password\s*=|api[_ -]?key\s*=|token\s*=/i.test(JSON.stringify(command))) push(results.errors, "error", "Terminal command " + command.command + " in " + lesson.id + " contains credential-like text.");
        if (/StrictHostKeyChecking=no/i.test(command.command)) push(results.errors, "error", "SSH command in " + lesson.id + " disables host-key checking.");
        if (/git push --force|git reset --hard|git clean -fd|git branch -D/i.test(command.command) && (!command.safeUse || !command.recovery)) push(results.errors, "error", "High-risk Git command " + command.command + " in " + lesson.id + " needs warning and recovery.");
      });
      if ((record.terminalCommands || []).length && !record.handsOnLab) push(results.errors, "error", "Terminal lesson " + lesson.id + " needs a practical activity.");
      if (!record.quiz || !Array.isArray(record.quiz.questions) || record.quiz.questions.length < 5) {
        push(results.errors, "error", "Authored lesson " + lesson.id + " needs a quiz with at least five questions.");
      } else {
        record.quiz.questions.forEach(function (question) {
          if (!Array.isArray(question.options) || question.options.length < 2) push(results.errors, "error", "Quiz question " + question.id + " in " + lesson.id + " needs options.");
          if (typeof question.answerIndex !== "number" || question.answerIndex < 0 || question.answerIndex >= question.options.length) push(results.errors, "error", "Quiz question " + question.id + " in " + lesson.id + " has an invalid answer index.");
        });
      }
      if (record.miniChallenge && Array.isArray(record.miniChallenge.answers) && !record.miniChallenge.answers.some(function (answer) { return answer[1] === true; })) {
        push(results.errors, "error", "Mini challenge in " + lesson.id + " needs a correct answer.");
      }
      (record.relatedLessons || []).forEach(function (id) {
        if (!lessonIds.has(id)) push(results.errors, "error", "Authored lesson " + lesson.id + " references missing related lesson " + id + ".");
      });
      (record.officialResources || []).forEach(function (resource) {
        if (!resource.title || !resource.url || typeof resource.url !== "string") push(results.errors, "error", "Authored lesson " + lesson.id + " has an invalid official resource.");
      });
      if (JSON.stringify(record).toLowerCase().indexOf("<script") >= 0) push(results.errors, "error", "Authored lesson " + lesson.id + " contains script-like content.");
    });
  }

  function validate() {
    var taxonomy = window.EngineeringHandbookTaxonomy || {};
    var validTopics = new Set(taxonomy.topics || []);
    var validDifficulties = new Set(taxonomy.difficulties || []);
    var validStatuses = new Set(taxonomy.statuses || []);
    var validInteractions = new Set(taxonomy.interactionTypes || []);
    var validLabs = new Set(taxonomy.labTypes || []);
    var parts = window.CurriculumData.parts();
    var chapters = window.CurriculumData.chapters();
    var lessons = window.CurriculumData.lessons();
    var lessonIds = new Set(lessons.map(function (lesson) { return lesson.id; }));
    var chapterIds = new Set(chapters.map(function (chapter) { return chapter.id; }));
    var partIds = new Set(parts.map(function (part) { return part.id; }));
    var results = { passed: [], warnings: [], errors: [] };

    uniqueCheck(parts, "id", "Part", results);
    uniqueCheck(chapters, "id", "Chapter", results);
    uniqueCheck(lessons, "id", "Lesson", results);
    uniqueCheck(lessons, "slug", "Lesson", results);

    parts.forEach(function (part) {
      if (!part.title || !part.summary) push(results.errors, "error", "Part " + part.id + " needs a title and summary.");
      var chapterPositions = new Set();
      part.chapters.forEach(function (chapter) {
        if (chapterPositions.has(chapter.position)) push(results.errors, "error", "Duplicate chapter position in " + part.id + ".");
        chapterPositions.add(chapter.position);
      });
    });

    chapters.forEach(function (chapter) {
      if (!partIds.has(chapter.partId)) push(results.errors, "error", "Chapter " + chapter.id + " references missing part " + chapter.partId + ".");
      var lessonPositions = new Set();
      chapter.lessons.forEach(function (lesson) {
        if (lessonPositions.has(lesson.position)) push(results.errors, "error", "Duplicate lesson position in " + chapter.id + ".");
        lessonPositions.add(lesson.position);
      });
    });

    lessons.forEach(function (lesson) {
      if (!partIds.has(lesson.partId)) push(results.errors, "error", "Lesson " + lesson.id + " references missing part.");
      if (!chapterIds.has(lesson.chapterId)) push(results.errors, "error", "Lesson " + lesson.id + " references missing chapter.");
      if (!lesson.summary || lesson.summary.length < 80) push(results.errors, "error", "Lesson " + lesson.id + " needs a stronger summary.");
      if (!Array.isArray(lesson.learningObjectives) || lesson.learningObjectives.length < 2) push(results.errors, "error", "Lesson " + lesson.id + " needs learning objectives.");
      if (!validDifficulties.has(lesson.difficulty)) push(results.errors, "error", "Lesson " + lesson.id + " has invalid difficulty.");
      if (!validStatuses.has(lesson.status)) push(results.errors, "error", "Lesson " + lesson.id + " has invalid status.");
      if (!lesson.estimatedMinutes || lesson.estimatedMinutes <= 0) push(results.errors, "error", "Lesson " + lesson.id + " needs estimated time.");
      if (lesson.status === "complete" && !lesson.contentKey) push(results.errors, "error", "Complete lesson " + lesson.id + " needs contentKey.");
      if (lesson.status === "planned" && lesson.contentKey) push(results.errors, "error", "Planned lesson " + lesson.id + " should not require content.");
      (lesson.prerequisites || []).forEach(function (id) {
        if (id === lesson.id) push(results.errors, "error", "Lesson " + lesson.id + " cannot require itself.");
        if (!lessonIds.has(id)) push(results.errors, "error", "Lesson " + lesson.id + " has missing prerequisite " + id + ".");
      });
      (lesson.relatedLessons || []).forEach(function (id) {
        if (id === lesson.id) push(results.errors, "error", "Lesson " + lesson.id + " cannot relate to itself.");
        if (!lessonIds.has(id)) push(results.errors, "error", "Lesson " + lesson.id + " has missing related lesson " + id + ".");
      });
      (lesson.topics || []).forEach(function (topic) {
        if (!validTopics.has(topic)) push(results.errors, "error", "Lesson " + lesson.id + " references unknown topic " + topic + ".");
      });
      (lesson.plannedInteractions || []).forEach(function (interaction) {
        if (!validInteractions.has(interaction)) push(results.errors, "error", "Lesson " + lesson.id + " references unknown interaction " + interaction + ".");
      });
      if (!validLabs.has(lesson.labType)) push(results.errors, "error", "Lesson " + lesson.id + " has invalid lab type " + lesson.labType + ".");
    });

    validateAuthoredLessonContent(lessons, lessonIds, results);

    if (window.CommandGlossary) {
      var validGlossaryRisks = ["Read-only", "Low-risk modification", "Destructive", "Privileged", "Network access", "Package installation", "Changes working files", "Changes staging area", "Creates history", "Changes branch", "Changes local history", "Changes remote repository", "Potentially destructive", "Recovery command"];
      window.CommandGlossary.forEach(function (entry) {
        if (!entry.command || !entry.purpose || !entry.example) push(results.errors, "error", "Command glossary entry is missing command, purpose, or example.");
        (entry.risk || []).forEach(function (risk) {
          if (validGlossaryRisks.indexOf(risk) < 0) push(results.errors, "error", "Command glossary entry " + entry.command + " has invalid risk " + risk + ".");
        });
        if (!window.CurriculumData.findLesson(entry.lessonSlug)) push(results.errors, "error", "Command glossary entry " + entry.command + " links to a missing lesson.");
      });
    }

    push(results.passed, "passed", parts.length + " parts loaded.");
    push(results.passed, "passed", chapters.length + " chapters loaded.");
    push(results.passed, "passed", lessons.length + " lessons loaded.");
    push(results.passed, "passed", "Unique IDs and slugs checked.");
    push(results.passed, "passed", "References, topics, statuses, times, and relationships checked.");
    push(results.passed, "passed", "Complete lesson content registry checked.");
    if (window.CommandGlossary) push(results.passed, "passed", "Command glossary checked.");
    if (lessons.length < 120 || lessons.length > 170) push(results.warnings, "warning", "Lesson count is outside the expected roadmap range.");
    return results;
  }

  function logDevelopmentResults() {
    var results = validate();
    if (results.errors.length) {
      console.warn("Curriculum validation errors", results.errors);
    } else {
      console.info("Curriculum validation passed", window.CurriculumData.totals());
    }
    if (results.warnings.length) console.warn("Curriculum validation warnings", results.warnings);
    return results;
  }

  function renderCheckPage() {
    var host = document.querySelector("[data-validation-results]");
    if (!host) return;
    var results = validate();
    var totals = window.CurriculumData.totals();
    host.textContent = "";
    var summary = document.createElement("div");
    summary.className = "validation-summary";
    summary.textContent = totals.parts + " parts, " + totals.chapters + " chapters, " + totals.lessons + " lessons, " + totals.estimatedTime + " estimated.";
    host.appendChild(summary);
    ["errors", "warnings", "passed"].forEach(function (key) {
      var section = document.createElement("section");
      section.className = "validation-section";
      var heading = document.createElement("h2");
      heading.textContent = key.charAt(0).toUpperCase() + key.slice(1) + " (" + results[key].length + ")";
      var list = document.createElement("ul");
      results[key].forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.message;
        list.appendChild(li);
      });
      section.append(heading, list);
      host.appendChild(section);
    });
  }

  window.CurriculumValidator = {
    validate: validate,
    logDevelopmentResults: logDevelopmentResults,
    renderCheckPage: renderCheckPage
  };
})();
