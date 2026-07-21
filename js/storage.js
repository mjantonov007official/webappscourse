(function () {
  var key = "engineeringHandbookState";
  var legacyKey = "engineeringHandbookProgress";

  function emptyState() {
    return {
      version: 2,
      lessons: {},
      bookmarks: [],
      commandBookmarks: [],
      lastLesson: null,
      lastVisited: null,
      sidebar: { expandedParts: [], expandedChapters: [] },
      expanded: {}
    };
  }

  function normalizeLesson(record) {
    record = record && typeof record === "object" ? record : {};
    var scroll = typeof record.scrollProgress === "number" ? record.scrollProgress : (typeof record.progress === "number" ? record.progress : 0);
    return {
      scrollProgress: Math.max(0, Math.min(100, scroll || 0)),
      progress: Math.max(0, Math.min(100, scroll || 0)),
      visitedSections: Array.isArray(record.visitedSections) ? record.visitedSections : [],
      quizAttempted: !!record.quizAttempted,
      latestQuizScore: typeof record.latestQuizScore === "number" ? record.latestQuizScore : null,
      bestQuizScore: typeof record.bestQuizScore === "number" ? record.bestQuizScore : null,
      quizPassed: !!record.quizPassed,
      labCompleted: !!record.labCompleted,
      labs: record.labs && typeof record.labs === "object" ? record.labs : {},
      completed: !!record.completed,
      sectionId: record.sectionId || record.lastSection || null,
      lastSection: record.lastSection || record.sectionId || null,
      scrollY: typeof record.scrollY === "number" ? record.scrollY : 0,
      lastVisited: record.lastVisited || null
    };
  }

  function migrateLegacy() {
    try {
      var raw = window.localStorage.getItem(legacyKey);
      if (!raw) return emptyState();
      var legacy = JSON.parse(raw);
      var next = emptyState();
      if (legacy && legacy.lessons) {
        Object.keys(legacy.lessons).forEach(function (id) {
          next.lessons[id] = normalizeLesson(legacy.lessons[id]);
        });
      }
      next.lastVisited = legacy.lastVisited || null;
      next.lastLesson = legacy.lastVisited && legacy.lastVisited.lessonId ? legacy.lastVisited.lessonId : null;
      next.expanded = legacy.expanded || {};
      Object.keys(next.expanded).forEach(function (id) {
        if (id.indexOf("part-") === 0 && next.expanded[id]) next.sidebar.expandedParts.push(id);
        if (id.indexOf("chapter-") === 0 && next.expanded[id]) next.sidebar.expandedChapters.push(id);
      });
      window.localStorage.setItem(key, JSON.stringify(next));
      return next;
    } catch (error) {
      return emptyState();
    }
  }

  function read() {
    try {
      var raw = window.localStorage.getItem(key);
      if (!raw) return migrateLegacy();
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return emptyState();
      var state = emptyState();
      state.version = 2;
      state.bookmarks = Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [];
      state.commandBookmarks = Array.isArray(parsed.commandBookmarks) ? parsed.commandBookmarks : [];
      state.lastLesson = parsed.lastLesson || parsed.lastVisited && parsed.lastVisited.lessonId || null;
      state.lastVisited = parsed.lastVisited || null;
      state.expanded = parsed.expanded && typeof parsed.expanded === "object" ? parsed.expanded : {};
      state.sidebar = parsed.sidebar && typeof parsed.sidebar === "object" ? Object.assign(state.sidebar, parsed.sidebar) : state.sidebar;
      state.lessons = {};
      Object.keys(parsed.lessons || {}).forEach(function (id) {
        state.lessons[id] = normalizeLesson(parsed.lessons[id]);
      });
      return state;
    } catch (error) {
      return emptyState();
    }
  }

  function write(data) {
    var state = Object.assign(emptyState(), data || {});
    state.version = 2;
    window.localStorage.setItem(key, JSON.stringify(state));
  }

  function getLesson(id) {
    var data = read();
    return data.lessons[id] || normalizeLesson({});
  }

  function updateLesson(id, patch) {
    var data = read();
    var current = getLesson(id);
    var merged = normalizeLesson(Object.assign({}, current, patch, {
      lastVisited: new Date().toISOString(),
      lastSection: patch.lastSection || patch.sectionId || current.lastSection || current.sectionId || null
    }));
    data.lessons[id] = merged;
    data.lastLesson = id;
    data.lastVisited = {
      lessonId: id,
      sectionId: merged.lastSection,
      scrollY: typeof patch.scrollY === "number" ? patch.scrollY : merged.scrollY,
      at: new Date().toISOString()
    };
    write(data);
    return merged;
  }

  function setCompleted(id, completed) {
    return updateLesson(id, { completed: completed, scrollProgress: completed ? 100 : Math.min(getLesson(id).scrollProgress, 99), progress: completed ? 100 : Math.min(getLesson(id).progress, 99) });
  }

  function saveQuiz(id, score, passed) {
    var current = getLesson(id);
    var best = current.bestQuizScore === null ? score : Math.max(current.bestQuizScore, score);
    return updateLesson(id, { quizAttempted: true, latestQuizScore: score, bestQuizScore: best, quizPassed: !!passed });
  }

  function setLabCompleted(id, completed, labId) {
    var patch = { labCompleted: !!completed };
    if (labId) {
      var labs = Object.assign({}, getLesson(id).labs || {});
      labs[labId] = { completed: !!completed, completedAt: completed ? new Date().toISOString() : null };
      patch.labs = labs;
    }
    return updateLesson(id, patch);
  }

  function toggleCommandBookmark(command) {
    var data = read();
    data.commandBookmarks = Array.isArray(data.commandBookmarks) ? data.commandBookmarks : [];
    var exists = data.commandBookmarks.indexOf(command) >= 0;
    data.commandBookmarks = exists ? data.commandBookmarks.filter(function (item) { return item !== command; }) : data.commandBookmarks.concat(command);
    write(data);
    return !exists;
  }

  function isCommandBookmarked(command) {
    var data = read();
    return (Array.isArray(data.commandBookmarks) ? data.commandBookmarks : []).indexOf(command) >= 0;
  }

  function toggleBookmark(slug) {
    var data = read();
    var exists = data.bookmarks.indexOf(slug) >= 0;
    data.bookmarks = exists ? data.bookmarks.filter(function (item) { return item !== slug; }) : data.bookmarks.concat(slug);
    write(data);
    return !exists;
  }

  function isBookmarked(slug) {
    return read().bookmarks.indexOf(slug) >= 0;
  }

  function reset() {
    window.localStorage.removeItem(key);
    window.localStorage.removeItem(legacyKey);
  }

  window.HandbookStorage = {
    key: key,
    legacyKey: legacyKey,
    read: read,
    write: write,
    getLesson: getLesson,
    updateLesson: updateLesson,
    setCompleted: setCompleted,
    saveQuiz: saveQuiz,
    setLabCompleted: setLabCompleted,
    toggleCommandBookmark: toggleCommandBookmark,
    isCommandBookmarked: isCommandBookmarked,
    toggleBookmark: toggleBookmark,
    isBookmarked: isBookmarked,
    reset: reset
  };
})();
