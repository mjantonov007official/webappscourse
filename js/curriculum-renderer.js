(function () {
  var state = { query: "", filters: new Set(["all"]) };

  function create(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function searchText(part, chapter, lesson) {
    var record = window.LessonContentRegistry && window.LessonContentRegistry[lesson.slug];
    var commandText = record && Array.isArray(record.terminalCommands) ? record.terminalCommands.map(function (command) {
      return [command.command, command.description, (command.risk || []).join(" "), (command.platform || []).join(" ")].join(" ");
    }).join(" ") : "";
    var authoredText = record ? [record.summary, (record.learningObjectives || []).join(" "), (record.keyConcepts || []).map(function (item) { return item.join ? item.join(" ") : item; }).join(" ")].join(" ") : "";
    return [
      part.title, part.summary, chapter.title, chapter.summary, lesson.title, lesson.summary,
      (lesson.learningObjectives || []).join(" "), (lesson.topics || []).join(" "), lesson.atlasCommerceFocus || "", commandText, authoredText
    ].join(" ").toLowerCase();
  }

  function matchesQueryText(text, query) {
    if (!query) return true;
    var normalized = query.toLowerCase();
    if (normalized.length <= 2) {
      return text.split(/[^a-z0-9-]+/).some(function (token) { return token === normalized || token === normalized + "-cd"; });
    }
    return text.indexOf(normalized) >= 0;
  }

  function matchesFilters(lesson, progress) {
    if (state.filters.has("complete-content") && lesson.status !== "complete") return false;
    if (state.filters.has("planned-content") && lesson.status !== "planned") return false;
    if (state.filters.has("beginner") && lesson.difficulty !== "beginner") return false;
    if (state.filters.has("intermediate") && lesson.difficulty !== "intermediate") return false;
    if (state.filters.has("advanced") && lesson.difficulty !== "advanced") return false;
    var status = window.CurriculumData.lessonStatus(lesson, progress);
    if (state.filters.has("completed") && status !== "completed") return false;
    if (state.filters.has("in-progress") && status !== "in-progress") return false;
    if (state.filters.has("not-started") && status !== "not-started") return false;
    return true;
  }

  function renderTotals() {
    var totals = window.CurriculumData.totals();
    var map = {
      "[data-part-count]": totals.parts,
      "[data-chapter-count]": totals.chapters,
      "[data-lesson-count]": totals.lessons,
      "[data-roadmap-count]": totals.lessons + " roadmap lessons",
      "[data-complete-count]": totals.completeLessons + " complete interactive " + (totals.completeLessons === 1 ? "lesson" : "lessons"),
      "[data-estimated-time]": totals.estimatedTime
    };
    Object.keys(map).forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (node) { node.textContent = map[selector]; });
    });
  }

  function badge(text, className) {
    return create("span", "badge " + (className || ""), text);
  }

  function renderLessonRow(lesson, progress) {
    var row = create("div", "lesson-row curriculum-lesson-row");
    row.dataset.status = lesson.status;
    var status = window.CurriculumData.lessonStatus(lesson, progress);
    var text = create("div", "lesson-row-main");
    var title = create("div", "lesson-title-line");
    var stateDot = create("span", "state-dot " + status, status === "completed" ? "✓" : status === "in-progress" ? "◐" : status === "planned" ? "◇" : "○");
    stateDot.setAttribute("aria-label", status.replace("-", " "));
    title.append(stateDot, create("strong", "", lesson.title));
    var summary = create("p", "lesson-row-summary", lesson.summary);
    var meta = create("div", "lesson-meta-list");
    meta.appendChild(badge(lesson.status === "complete" ? "Complete content" : "Planned", lesson.status === "complete" ? "badge-status-complete" : "badge-status-planned"));
    meta.appendChild(badge(lesson.difficulty, "badge-difficulty-" + lesson.difficulty));
    meta.appendChild(badge(window.CurriculumData.formatMinutes(lesson.estimatedMinutes), "badge-time"));
    if (lesson.status === "complete" && window.LessonContentRegistry && window.LessonContentRegistry[lesson.slug] && window.LessonContentRegistry[lesson.slug].terminalCommands) {
      meta.appendChild(badge("Terminal commands", "badge-terminal"));
      if (window.LessonContentRegistry[lesson.slug].terminalCommands.some(function (command) { return command.command.indexOf("git ") === 0; })) {
        meta.appendChild(badge("Git lesson", "badge-git"));
      }
    }
    lesson.topics.slice(0, 4).forEach(function (topic) { meta.appendChild(create("span", "topic-chip", topic)); });
    text.append(title, summary, meta);
    var action = create("a", "button button-secondary", window.CurriculumData.buttonLabel(lesson, progress));
    action.href = window.CurriculumData.lessonUrl(lesson);
    row.append(text, action);
    return row;
  }

  function render() {
    var host = document.querySelector("[data-curriculum-list]");
    if (!host) return;
    renderTotals();
    host.textContent = "";
    var data = window.HandbookStorage.read();
    var resultCount = 0;
    var expanded = data.expanded || {};
    window.CurriculumData.parts().forEach(function (part) {
      var matchingChapters = [];
      part.chapters.forEach(function (chapter) {
        var matchingLessons = chapter.lessons.filter(function (lesson) {
          var progress = data.lessons[lesson.id] || {};
          var queryMatch = matchesQueryText(searchText(part, chapter, lesson), state.query);
          return queryMatch && matchesFilters(lesson, progress);
        });
        if (matchingLessons.length) matchingChapters.push({ chapter: chapter, lessons: matchingLessons });
      });
      if (!matchingChapters.length) return;
      resultCount += matchingChapters.reduce(function (sum, item) { return sum + item.lessons.length; }, 0);
      var partPanel = create("article", "part-panel curriculum-part");
      var partButton = create("button", "part-header");
      partButton.type = "button";
      var partComplete = part.chapters.flatMap(function (chapter) { return chapter.lessons; }).filter(function (lesson) { return lesson.status === "complete"; });
      var partCompleted = partComplete.filter(function (lesson) { return data.lessons[lesson.id] && data.lessons[lesson.id].completed; }).length;
      var forcedOpen = !!state.query || state.filters.size > 1 || !state.filters.has("all");
      var partOpen = forcedOpen || expanded[part.id] === true || part.position <= 2;
      partButton.setAttribute("aria-expanded", String(partOpen));
      partButton.textContent = part.title + " - " + part.summary + " (" + partCompleted + " of " + partComplete.length + " complete)";
      var chaptersHost = create("div", "chapter-list");
      chaptersHost.hidden = !partOpen;
      matchingChapters.forEach(function (item) {
        var chapterPanel = create("section", "chapter-panel");
        var chapterButton = create("button", "chapter-header");
        chapterButton.type = "button";
        var chapterOpen = forcedOpen || expanded[item.chapter.id] === true || part.position <= 2;
        chapterButton.setAttribute("aria-expanded", String(chapterOpen));
        var chapterComplete = item.chapter.lessons.filter(function (lesson) { return lesson.status === "complete"; });
        var chapterCompleted = chapterComplete.filter(function (lesson) {
          return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
        }).length;
        chapterButton.textContent = item.chapter.title + " (" + item.lessons.length + " lessons, " + chapterCompleted + " of " + chapterComplete.length + " complete)";
        var lessonList = create("div", "lesson-list");
        lessonList.hidden = !chapterOpen;
        item.lessons.forEach(function (lesson) {
          lessonList.appendChild(renderLessonRow(lesson, data.lessons[lesson.id] || {}));
        });
        chapterButton.addEventListener("click", function () {
          var next = chapterButton.getAttribute("aria-expanded") !== "true";
          chapterButton.setAttribute("aria-expanded", String(next));
          lessonList.hidden = !next;
          data.expanded = data.expanded || {};
          data.expanded[item.chapter.id] = next;
          window.HandbookStorage.write(data);
        });
        chapterPanel.append(chapterButton, lessonList);
        chaptersHost.appendChild(chapterPanel);
      });
      partButton.addEventListener("click", function () {
        var next = partButton.getAttribute("aria-expanded") !== "true";
        partButton.setAttribute("aria-expanded", String(next));
        chaptersHost.hidden = !next;
        data.expanded = data.expanded || {};
        data.expanded[part.id] = next;
        window.HandbookStorage.write(data);
      });
      partPanel.append(partButton, chaptersHost);
      host.appendChild(partPanel);
    });
    var count = document.querySelector("[data-result-count]");
    if (count) count.textContent = resultCount + " matching lessons";
    if (!resultCount) {
      var empty = create("div", "empty-state");
      empty.textContent = "No lessons match the current search and filters.";
      host.appendChild(empty);
    }
  }

  function initFilters() {
    var form = document.querySelector("[data-curriculum-controls]");
    if (!form) return;
    form.addEventListener("input", function (event) {
      if (event.target.matches("[data-curriculum-search]")) {
        state.query = event.target.value.trim();
        render();
      }
      if (event.target.matches("[data-filter]")) {
        var checked = Array.from(form.querySelectorAll("[data-filter]:checked")).map(function (node) { return node.value; });
        state.filters = new Set(checked.length ? checked : ["all"]);
        if (event.target.value === "all" && event.target.checked) {
          form.querySelectorAll("[data-filter]").forEach(function (node) { if (node.value !== "all") node.checked = false; });
          state.filters = new Set(["all"]);
        } else if (event.target.value !== "all") {
          var all = form.querySelector("[data-filter][value='all']");
          if (all) all.checked = false;
          state.filters.delete("all");
        }
        render();
      }
    });
    form.addEventListener("click", function (event) {
      if (event.target.matches("[data-clear-search]")) {
        var input = form.querySelector("[data-curriculum-search]");
        input.value = "";
        state.query = "";
        input.focus();
        render();
      }
    });
  }

  function init() {
    initFilters();
    render();
  }

  window.CurriculumRenderer = { init: init, render: render };
})();
