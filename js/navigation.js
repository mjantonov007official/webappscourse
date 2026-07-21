(function () {
  function allLessons() {
    return window.CurriculumData ? window.CurriculumData.lessons() : [];
  }

  function findLesson(id) {
    return window.CurriculumData ? window.CurriculumData.findLesson(id) : allLessons().find(function (lesson) { return lesson.id === id || lesson.slug === id; });
  }

  function nextIncompleteCompleteLesson() {
    var data = window.HandbookStorage.read();
    return allLessons().find(function (lesson) {
      return lesson.status === "complete" && !(data.lessons[lesson.id] && data.lessons[lesson.id].completed);
    });
  }

  function nextAfterMostRecentCompletion() {
    var data = window.HandbookStorage.read();
    var completed = allLessons().filter(function (lesson) {
      return lesson.status === "complete" && data.lessons[lesson.id] && data.lessons[lesson.id].completed;
    }).sort(function (a, b) {
      var atA = data.lessons[a.id].lastVisited || "";
      var atB = data.lessons[b.id].lastVisited || "";
      return atB.localeCompare(atA);
    });
    if (!completed.length) return null;
    var pair = window.CurriculumData.previousNext(completed[0].id);
    return pair.next && pair.next.status === "complete" && !(data.lessons[pair.next.id] && data.lessons[pair.next.id].completed) ? pair.next : null;
  }

  function continueLearning() {
    var data = window.HandbookStorage.read();
    var target = null;
    if (data.lastVisited && data.lastVisited.lessonId) {
      var saved = data.lessons[data.lastVisited.lessonId];
      var candidate = findLesson(data.lastVisited.lessonId);
      if (candidate && candidate.status === "complete" && (!saved || !saved.completed)) target = candidate;
    }
    if (!target) target = nextAfterMostRecentCompletion();
    if (!target) target = nextIncompleteCompleteLesson();
    if (!target && data.lastVisited && data.lastVisited.lessonId) {
      var reviewCandidate = findLesson(data.lastVisited.lessonId);
      if (reviewCandidate && reviewCandidate.status === "complete") target = reviewCandidate;
    }
    if (!target) target = findLesson("lesson-http-request");
    var url = target ? (window.CurriculumData ? window.CurriculumData.lessonUrl(target) : target.url) : "lesson.html?lesson=how-an-http-request-works";
    window.location.href = url;
  }

  function setProgressBar(root, value) {
    var bar = root.querySelector("[data-continue-progress-bar]");
    var text = root.querySelector("[data-continue-progress-text]");
    var progress = root.querySelector(".progress");
    if (bar) bar.style.width = value + "%";
    if (text) text.textContent = value + "% complete";
    if (progress) progress.setAttribute("aria-valuenow", String(value));
  }

  function updateContinueCards() {
    document.querySelectorAll("[data-continue-card]").forEach(function (card) {
      var data = window.HandbookStorage.read();
      var target = data.lastVisited && findLesson(data.lastVisited.lessonId);
      if (!target || target.status !== "complete") target = nextAfterMostRecentCompletion() || nextIncompleteCompleteLesson() || findLesson("lesson-http-request");
      var saved = target ? window.HandbookStorage.getLesson(target.id) : null;
      var title = card.querySelector("[data-continue-title]");
      var meta = card.querySelector("[data-continue-meta]");
      if (title) title.textContent = saved && saved.progress > 0 ? target.title : "Start your first lesson.";
      if (meta && target) meta.textContent = target.partTitle || (target.part && target.part.title) || "";
      setProgressBar(card, saved ? Math.round(saved.progress || 0) : 0);
    });
  }

  function initSearch() {
    var modal = document.querySelector("[data-search-modal]");
    if (!modal) return;
    var input = modal.querySelector(".search-input");
    var results = modal.querySelector("[data-search-results]");
    var closeButton = modal.querySelector(".js-search-close");

    function render(query) {
      var matches = allLessons().filter(function (lesson) {
        var record = window.LessonContentRegistry && window.LessonContentRegistry[lesson.slug];
        var commandText = record && Array.isArray(record.terminalCommands) ? record.terminalCommands.map(function (command) { return command.command + " " + command.description; }).join(" ") : "";
        var authoredText = record ? [record.summary, (record.learningObjectives || []).join(" "), (record.keyConcepts || []).map(function (item) { return item.join ? item.join(" ") : item; }).join(" ")].join(" ") : "";
        var haystack = (lesson.title + " " + lesson.summary + " " + (lesson.topics || []).join(" ") + " " + (lesson.learningObjectives || []).join(" ") + " " + (lesson.atlasCommerceFocus || "") + " " + commandText + " " + authoredText).toLowerCase();
        var normalized = query.toLowerCase();
        if (!normalized) return true;
        if (normalized.length <= 2) return haystack.split(/[^a-z0-9-]+/).some(function (token) { return token === normalized || token === normalized + "-cd"; });
        return haystack.indexOf(normalized) !== -1;
      }).slice(0, 6);
      results.textContent = "";
      matches.forEach(function (lesson) {
        var link = document.createElement("a");
        link.className = "search-result";
        link.href = window.CurriculumData ? window.CurriculumData.lessonUrl(lesson) : lesson.url;
        link.textContent = lesson.title + " - " + lesson.summary;
        results.appendChild(link);
      });
    }

    function open() {
      modal.hidden = false;
      render("");
      window.setTimeout(function () { input.focus(); }, 0);
    }
    function close() { modal.hidden = true; }
    document.querySelectorAll(".js-search-open").forEach(function (button) { button.addEventListener("click", open); });
    closeButton.addEventListener("click", close);
    input.addEventListener("input", function () { render(input.value); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) close();
    });
    modal.addEventListener("click", function (event) {
      if (event.target === modal) close();
    });
  }

  window.HandbookNavigation = { allLessons: allLessons, findLesson: findLesson, continueLearning: continueLearning, updateContinueCards: updateContinueCards, initSearch: initSearch };
})();
