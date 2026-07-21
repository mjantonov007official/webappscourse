(function () {
  function create(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function lessonStateText(lesson, saved) {
    var state = window.CurriculumData.lessonStatus(lesson, saved || {});
    if (state === "completed") return "Completed";
    if (state === "in-progress") return "In progress";
    if (lesson.status === "complete") return "Ready";
    return "Planned";
  }

  function renderLessonLink(lesson, saved) {
    var link = create("a", "quick-list-item");
    link.href = window.CurriculumData.lessonUrl(lesson);
    var title = create("strong", "", lesson.title);
    var meta = create("span", "", lessonStateText(lesson, saved) + " - " + window.CurriculumData.formatMinutes(lesson.estimatedMinutes));
    link.append(title, meta);
    return link;
  }

  function renderFirstChapter() {
    var host = document.querySelector("[data-first-chapter-list]");
    if (!host || !window.CurriculumData) return;
    var chapter = window.CurriculumData.findChapter("chapter-understanding-computers");
    if (!chapter) return;
    var data = window.HandbookStorage.read();
    var completed = chapter.lessons.filter(function (lesson) {
      return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
    }).length;
    host.textContent = "";
    chapter.lessons.forEach(function (lesson) {
      host.appendChild(renderLessonLink(lesson, data.lessons[lesson.id]));
    });
    document.querySelectorAll("[data-first-chapter-status]").forEach(function (node) {
      node.textContent = "Chapter 1.1 has " + chapter.lessons.length + " authored lessons. You have completed " + completed + " of " + chapter.lessons.length + ".";
    });
  }

  function renderBookmarks() {
    var host = document.querySelector("[data-bookmark-list]");
    var section = document.querySelector("[data-bookmark-section]");
    if (!host || !window.CurriculumData) return;
    var data = window.HandbookStorage.read();
    var lessons = data.bookmarks.map(function (slug) {
      return window.CurriculumData.findLesson(slug);
    }).filter(Boolean);
    var commands = Array.isArray(data.commandBookmarks) ? data.commandBookmarks : [];
    host.textContent = "";
    if (section) section.hidden = !lessons.length && !commands.length;
    lessons.forEach(function (lesson) {
      host.appendChild(renderLessonLink(lesson, data.lessons[lesson.id]));
    });
    commands.forEach(function (command) {
      var link = create("a", "quick-list-item");
      link.href = "commands.html";
      link.append(create("strong", "", command), create("span", "", "Command glossary bookmark"));
      host.appendChild(link);
    });
  }

  function renderPartProgress() {
    if (!window.CurriculumData || !window.HandbookStorage) return;
    var part = window.CurriculumData.findPart("part-operating-systems-terminal");
    if (!part) return;
    var data = window.HandbookStorage.read();
    var authored = [];
    part.chapters.forEach(function (chapter) {
      chapter.lessons.forEach(function (lesson) {
        if (lesson.status === "complete") authored.push(lesson);
      });
    });
    var completed = authored.filter(function (lesson) {
      return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
    }).length;
    var percent = authored.length ? Math.round((completed / authored.length) * 100) : 0;
    document.querySelectorAll("[data-part2-progress]").forEach(function (node) {
      node.textContent = "Operating Systems and the Terminal: " + completed + " of " + authored.length + " lessons completed (" + percent + "%)";
    });
    var gitPart = window.CurriculumData.findPart("part-git-github-managing-change");
    if (!gitPart) return;
    var gitAuthored = [];
    gitPart.chapters.forEach(function (chapter) {
      chapter.lessons.forEach(function (lesson) {
        if (lesson.status === "complete") gitAuthored.push(lesson);
      });
    });
    var gitCompleted = gitAuthored.filter(function (lesson) {
      return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
    }).length;
    var gitPercent = gitAuthored.length ? Math.round((gitCompleted / gitAuthored.length) * 100) : 0;
    document.querySelectorAll("[data-part3-progress]").forEach(function (node) {
      node.textContent = "Git, GitHub, and Managing Change: " + gitCompleted + " of " + gitAuthored.length + " lessons completed (" + gitPercent + "%)";
    });
  }

  function render() {
    if (!window.HandbookStorage || !window.CurriculumData) return;
    renderFirstChapter();
    renderBookmarks();
    renderPartProgress();
  }

  window.BookmarkManager = { render: render };
})();
