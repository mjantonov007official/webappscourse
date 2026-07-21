(function () {
  function allLessons() {
    return window.HandbookNavigation ? window.HandbookNavigation.allLessons() : [];
  }

  function overall() {
    var lessons = allLessons().filter(function (lesson) { return lesson.status === "complete"; });
    var data = window.HandbookStorage.read();
    var completed = lessons.filter(function (lesson) {
      return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
    }).length;
    var percent = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
    return { completed: completed, total: lessons.length, percent: percent };
  }

  function updateOverallUI() {
    var state = overall();
    document.querySelectorAll("[data-overall-progress-text]").forEach(function (node) {
      node.textContent = "Interactive lessons completed: " + state.completed + " of " + state.total;
    });
    document.querySelectorAll("[data-overall-percent]").forEach(function (node) {
      node.textContent = state.percent + "%";
    });
    document.querySelectorAll("[data-overall-progress-bar]").forEach(function (node) {
      node.style.width = state.percent + "%";
      var wrapper = node.closest(".progress");
      if (wrapper) wrapper.setAttribute("aria-valuenow", String(state.percent));
    });
  }

  function setLessonProgress(value) {
    var safe = Math.max(0, Math.min(100, Math.round(value)));
    document.querySelectorAll("[data-lesson-progress-text]").forEach(function (node) { node.textContent = safe + "%"; });
    document.querySelectorAll("[data-lesson-progress-bar]").forEach(function (node) {
      node.style.width = safe + "%";
      var wrapper = node.closest(".progress");
      if (wrapper) wrapper.setAttribute("aria-valuenow", String(safe));
    });
  }

  function initCurriculumPage() {
    if (window.CurriculumRenderer) window.CurriculumRenderer.init();
  }

  function initLessonProgress() {
    var content = document.querySelector(".lesson-content");
    if (!content) return;
    var lessonId = document.body.dataset.lessonId || "lesson-http-request";
    var lesson = window.CurriculumData && window.CurriculumData.findLesson(lessonId);
    if (lesson && lesson.status !== "complete") return;
    var saved = window.HandbookStorage.getLesson(lessonId);
    setLessonProgress(saved.progress || 0);
    if (saved.completed) document.querySelector("[data-complete-message]") && (document.querySelector("[data-complete-message]").hidden = false);
    if (window.LessonRenderer) window.LessonRenderer.updateCompletionAvailability();

    var ticking = false;
    function calculate() {
      var rect = content.getBoundingClientRect();
      var total = content.scrollHeight - window.innerHeight;
      var traveled = Math.max(0, -rect.top);
      var percent = total > 0 ? Math.min(100, (traveled / total) * 100) : 0;
      if (saved.completed) percent = 100;
      setLessonProgress(percent);
      window.HandbookStorage.updateLesson(lessonId, { progress: percent, scrollProgress: percent, scrollY: window.scrollY });
      if (window.LessonRenderer) window.LessonRenderer.updateCompletionAvailability();
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(calculate);
        ticking = true;
      }
    }, { passive: true });

    document.querySelectorAll(".js-mark-complete").forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.disabled) return;
        saved = window.HandbookStorage.setCompleted(lessonId, true);
        setLessonProgress(100);
        var msg = document.querySelector("[data-complete-message]");
        if (msg) msg.hidden = false;
        updateOverallUI();
        if (window.HandbookSidebar) window.HandbookSidebar.render();
        if (window.BookmarkManager) window.BookmarkManager.render();
      });
    });
    document.querySelectorAll(".js-mark-incomplete").forEach(function (button) {
      button.addEventListener("click", function () {
        saved = window.HandbookStorage.setCompleted(lessonId, false);
        var msg = document.querySelector("[data-complete-message]");
        if (msg) msg.hidden = true;
        updateOverallUI();
        if (window.HandbookSidebar) window.HandbookSidebar.render();
        if (window.BookmarkManager) window.BookmarkManager.render();
        if (window.LessonRenderer) window.LessonRenderer.updateCompletionAvailability();
        calculate();
      });
    });

    if (saved.scrollY && !saved.completed) {
      window.setTimeout(function () { window.scrollTo(0, saved.scrollY); }, 50);
    }
  }

  window.HandbookProgress = { overall: overall, updateOverallUI: updateOverallUI, initCurriculumPage: initCurriculumPage, initLessonProgress: initLessonProgress, setLessonProgress: setLessonProgress };
})();
