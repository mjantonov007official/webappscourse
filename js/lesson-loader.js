(function () {
  function getRequestedLesson() {
    var params = new URLSearchParams(window.location.search);
    return params.get("lesson") || document.body.dataset.lessonId || "how-an-http-request-works";
  }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach(function (node) { node.textContent = text; });
  }

  function updateMetaBadges(lesson) {
    document.querySelectorAll("[data-dynamic-difficulty]").forEach(function (node) {
      node.className = "badge badge-difficulty-" + lesson.difficulty;
    });
    document.querySelectorAll("[data-dynamic-time]").forEach(function (node) {
      node.className = "badge badge-time";
    });
  }

  function renderPlannedLesson(lesson) {
    document.body.dataset.lessonId = lesson.id;
    document.title = lesson.title + " - Engineering Handbook";
    setText("[data-dynamic-title]", lesson.title);
    setText("[data-dynamic-summary]", lesson.summary);
    setText("[data-dynamic-part]", lesson.partTitle);
    setText("[data-dynamic-chapter]", lesson.chapterTitle);
    setText("[data-dynamic-difficulty]", lesson.difficulty);
    setText("[data-dynamic-time]", window.CurriculumData.formatMinutes(lesson.estimatedMinutes));
    updateMetaBadges(lesson);
    var content = document.querySelector(".lesson-content");
    if (!content) return;
    content.textContent = "";
    var section = document.createElement("section");
    section.className = "lesson-section planned-lesson";
    section.id = "planned-lesson";
    section.dataset.sectionTitle = "Roadmap";
    var heading = document.createElement("h2");
    heading.textContent = "Planned Lesson Roadmap";
    var status = document.createElement("p");
    status.className = "callout";
    status.textContent = "This lesson is part of the complete curriculum roadmap. It is not fully authored yet, so it cannot be marked complete.";
    var objectivesTitle = document.createElement("h3");
    objectivesTitle.textContent = "Learning objectives";
    var objectives = document.createElement("ul");
    lesson.learningObjectives.forEach(function (objective) {
      var li = document.createElement("li");
      li.textContent = objective;
      objectives.appendChild(li);
    });
    var atlas = document.createElement("div");
    atlas.className = "callout atlas-callout";
    atlas.textContent = "Atlas Commerce focus: " + lesson.atlasCommerceFocus;
    var meta = document.createElement("div");
    meta.className = "lesson-meta-list";
    lesson.topics.forEach(function (topic) {
      var chip = document.createElement("span");
      chip.className = "topic-chip";
      chip.textContent = topic;
      meta.appendChild(chip);
    });
    var interactions = document.createElement("p");
    interactions.textContent = "Planned interactions: " + lesson.plannedInteractions.join(", ") + ". Lab type: " + lesson.labType + ".";
    var commands = window.CurriculumData.commandExamplesFor(lesson);
    section.append(heading, status, objectivesTitle, objectives, atlas, meta, interactions);
    if (commands.length) {
      var commandHeading = document.createElement("h3");
      commandHeading.textContent = "Future command examples";
      var pre = document.createElement("pre");
      pre.className = "code-block";
      var code = document.createElement("code");
      code.textContent = commands.join("\n");
      pre.appendChild(code);
      section.append(commandHeading, pre);
    }
    content.appendChild(section);
    var nav = document.createElement("nav");
    nav.className = "prev-next";
    nav.setAttribute("aria-label", "Previous and next lessons");
    content.appendChild(nav);
    document.querySelectorAll(".js-mark-complete, .js-mark-incomplete, .lesson-progress-panel .progress").forEach(function (node) {
      node.hidden = true;
    });
    if (window.LessonRenderer) window.LessonRenderer.updateBookmarkButton(lesson);
  }

  function renderNotFound(slug) {
    document.body.dataset.lessonId = "";
    document.title = "Lesson not found - Engineering Handbook";
    setText("[data-dynamic-title]", "Lesson not found");
    setText("[data-dynamic-summary]", "The requested lesson could not be found in the curriculum roadmap.");
    var content = document.querySelector(".lesson-content");
    if (!content) return;
    content.textContent = "";
    var section = document.createElement("section");
    section.className = "lesson-section";
    var heading = document.createElement("h2");
    heading.textContent = "No matching lesson";
    var text = document.createElement("p");
    text.textContent = "No lesson matches \"" + slug + "\". Return to the curriculum to choose a planned or complete lesson.";
    var link = document.createElement("a");
    link.className = "button button-primary";
    link.href = "handbook.html";
    link.textContent = "Open Curriculum";
    section.append(heading, text, link);
    content.appendChild(section);
    document.querySelectorAll(".js-mark-complete, .js-mark-incomplete, .lesson-progress-panel .progress").forEach(function (node) {
      node.hidden = true;
    });
  }

  function renderMissingAuthoredLesson(lesson) {
    var content = document.querySelector(".lesson-content");
    if (!content) return;
    content.textContent = "";
    var section = document.createElement("section");
    section.className = "lesson-section";
    section.id = "content-unavailable";
    section.dataset.sectionTitle = "Content Unavailable";
    var heading = document.createElement("h2");
    heading.textContent = "Lesson content unavailable";
    var text = document.createElement("p");
    text.textContent = "This lesson is marked complete in the curriculum, but its authored content file did not load. Check the lesson data script tags and content registry.";
    section.append(heading, text);
    content.appendChild(section);
    var nav = document.createElement("nav");
    nav.className = "prev-next";
    nav.setAttribute("aria-label", "Previous and next lessons");
    content.appendChild(nav);
    document.querySelectorAll(".js-mark-complete").forEach(function (node) {
      node.disabled = true;
      node.title = "Authored lesson content must load before this lesson can be completed.";
    });
  }

  function renderPrevNext(lesson) {
    var host = document.querySelector(".prev-next");
    if (!host || !lesson) return;
    var pair = window.CurriculumData.previousNext(lesson.id);
    host.textContent = "";
    if (pair.previous) {
      var prev = document.createElement("a");
      prev.className = "button button-secondary";
      prev.href = window.CurriculumData.lessonUrl(pair.previous);
      prev.textContent = "Previous: " + pair.previous.title + (pair.previous.status === "planned" ? " (planned)" : "");
      host.appendChild(prev);
    } else {
      var disabledPrev = document.createElement("span");
      disabledPrev.className = "button button-subtle disabled";
      disabledPrev.textContent = "Previous: none";
      host.appendChild(disabledPrev);
    }
    if (pair.next) {
      var next = document.createElement("a");
      next.className = "button button-primary";
      next.href = window.CurriculumData.lessonUrl(pair.next);
      next.textContent = "Next: " + pair.next.title + (pair.next.status === "planned" ? " (planned)" : "");
      host.appendChild(next);
    } else {
      var disabledNext = document.createElement("span");
      disabledNext.className = "button button-subtle disabled";
      disabledNext.textContent = "Next: none";
      host.appendChild(disabledNext);
    }
  }

  function init() {
    if (!document.querySelector(".lesson-main")) return;
    var slug = getRequestedLesson();
    var lesson = window.CurriculumData.findLesson(slug);
    if (!lesson) {
      renderNotFound(slug);
      return;
    }
    document.body.dataset.lessonId = lesson.id;
    setText("[data-dynamic-title]", lesson.title);
    setText("[data-dynamic-summary]", lesson.summary);
    setText("[data-dynamic-part]", lesson.partTitle);
    setText("[data-dynamic-chapter]", lesson.chapterTitle);
    setText("[data-dynamic-difficulty]", lesson.difficulty);
    setText("[data-dynamic-time]", window.CurriculumData.formatMinutes(lesson.estimatedMinutes));
    updateMetaBadges(lesson);
    window.HandbookStorage.updateLesson(lesson.id, { progress: window.HandbookStorage.getLesson(lesson.id).progress || 0 });
    if (lesson.status === "planned") {
      renderPlannedLesson(lesson);
    } else {
      var registry = window.LessonContentRegistry || {};
      var record = registry[lesson.slug];
      if (record && window.LessonRenderer) {
        window.LessonRenderer.renderAuthoredLesson(lesson, record);
        window.LessonRenderer.updateBookmarkButton(lesson);
      } else if (lesson.slug !== "how-an-http-request-works") {
        renderMissingAuthoredLesson(lesson);
      } else if (window.LessonRenderer) {
        window.LessonRenderer.updateBookmarkButton(lesson);
      }
    }
    renderPrevNext(lesson);
  }

  window.LessonLoader = { init: init };
})();
