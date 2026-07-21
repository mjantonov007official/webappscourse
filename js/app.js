(function () {
  function init() {
    if (window.CurriculumData) {
      var totals = window.CurriculumData.totals();
      var totalMap = {
        "[data-part-count]": totals.parts,
        "[data-chapter-count]": totals.chapters,
        "[data-lesson-count]": totals.lessons,
        "[data-roadmap-count]": totals.lessons + " roadmap lessons",
        "[data-complete-count]": totals.completeLessons + " complete interactive " + (totals.completeLessons === 1 ? "lesson" : "lessons"),
        "[data-estimated-time]": totals.estimatedTime
      };
      Object.keys(totalMap).forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (node) { node.textContent = totalMap[selector]; });
      });
    }
    document.querySelectorAll(".js-continue").forEach(function (button) {
      button.addEventListener("click", window.HandbookNavigation.continueLearning);
    });
    if (window.HandbookNavigation) {
      window.HandbookNavigation.updateContinueCards();
      window.HandbookNavigation.initSearch();
    }
    if (window.BookmarkManager) {
      window.BookmarkManager.render();
    }
    if (window.CommandGlossaryRenderer) {
      window.CommandGlossaryRenderer.init();
    }
    if (window.LessonLoader) {
      window.LessonLoader.init();
    }
    if (window.HandbookProgress) {
      window.HandbookProgress.updateOverallUI();
      window.HandbookProgress.initCurriculumPage();
      window.HandbookProgress.initLessonProgress();
    }
    if (window.HandbookSidebar) {
      window.HandbookSidebar.render();
      window.HandbookSidebar.initDrawer();
    }
    if (window.HandbookLesson) {
      window.HandbookLesson.initRequestFlow();
      window.HandbookLesson.initMiniChallenge();
      window.HandbookLesson.initQuiz();
      window.HandbookLesson.initToc();
      window.HandbookLesson.initDetails();
    }
    if (window.CurriculumValidator && location.pathname.indexOf("curriculum-check.html") >= 0) {
      window.CurriculumValidator.renderCheckPage();
    } else if (window.CurriculumValidator && new URLSearchParams(location.search).has("debug")) {
      window.CurriculumValidator.logDevelopmentResults();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
