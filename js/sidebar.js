(function () {
  function render() {
    var nav = document.querySelector("[data-sidebar-nav]");
    if (!nav) return;
    var lessonId = document.body.hasAttribute("data-lesson-id") ? document.body.dataset.lessonId : "lesson-http-request";
    var data = window.HandbookStorage.read();
    var expanded = data.expanded || {};
    nav.textContent = "";
    window.CurriculumData.parts().forEach(function (part) {
      var wrapper = document.createElement("div");
      wrapper.className = "sidebar-part";
      var button = document.createElement("button");
      button.type = "button";
      var activePart = part.chapters.some(function (chapter) {
        return chapter.lessons.some(function (lesson) { return lesson.id === lessonId || lesson.slug === lessonId; });
      });
      var partExpanded = activePart || expanded[part.id] !== false;
      button.setAttribute("aria-expanded", String(partExpanded));
      button.textContent = part.title;
      var list = document.createElement("div");
      list.className = "sidebar-lessons";
      list.hidden = !partExpanded;
      part.chapters.forEach(function (chapter) {
        var chapterBlock = document.createElement("div");
        chapterBlock.className = "sidebar-chapter";
        var chapterActive = chapter.lessons.some(function (lesson) { return lesson.id === lessonId || lesson.slug === lessonId; });
        var completeLessons = chapter.lessons.filter(function (lesson) { return lesson.status === "complete"; });
        var completedLessons = completeLessons.filter(function (lesson) {
          return data.lessons[lesson.id] && data.lessons[lesson.id].completed;
        });
        var chapterButton = document.createElement("button");
        chapterButton.type = "button";
        chapterButton.className = "sidebar-chapter-button";
        var chapterExpanded = chapterActive || expanded[chapter.id] === true;
        chapterButton.setAttribute("aria-expanded", String(chapterExpanded));
        chapterButton.textContent = chapter.shortTitle + " (" + completedLessons.length + "/" + completeLessons.length + ")";
        var lessonList = document.createElement("div");
        lessonList.className = "sidebar-lesson-list";
        lessonList.hidden = !chapterExpanded;
        chapter.lessons.forEach(function (lesson) {
          var saved = data.lessons[lesson.id] || {};
          var link = document.createElement("a");
          link.className = "sidebar-link";
          link.href = window.CurriculumData.lessonUrl(lesson);
          if (lesson.id === lessonId || lesson.slug === lessonId) link.setAttribute("aria-current", "page");
          var state = document.createElement("span");
          var status = window.CurriculumData.lessonStatus(lesson, saved);
          state.className = "state-dot " + status;
          state.textContent = status === "completed" ? "✓" : status === "in-progress" ? "◐" : status === "planned" ? "◇" : lesson.id === lessonId ? "●" : "○";
          state.setAttribute("aria-label", status.replace("-", " "));
          var title = document.createElement("span");
          title.textContent = lesson.title;
          link.append(state, title);
          lessonList.appendChild(link);
        });
        chapterButton.addEventListener("click", function () {
          var next = chapterButton.getAttribute("aria-expanded") !== "true";
          chapterButton.setAttribute("aria-expanded", String(next));
          lessonList.hidden = !next;
          data.expanded = data.expanded || {};
          data.expanded[chapter.id] = next;
          window.HandbookStorage.write(data);
        });
        chapterBlock.append(chapterButton, lessonList);
        list.appendChild(chapterBlock);
      });
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        var next = !expanded;
        button.setAttribute("aria-expanded", String(next));
        list.hidden = !next;
        data.expanded = data.expanded || {};
        data.expanded[part.id] = next;
        window.HandbookStorage.write(data);
      });
      wrapper.append(button, list);
      nav.appendChild(wrapper);
    });
  }

  function initDrawer() {
    var sidebar = document.querySelector(".lesson-sidebar");
    var openButton = document.querySelector(".js-drawer-open");
    var closeButton = document.querySelector(".js-drawer-close");
    var backdrop = document.querySelector(".js-drawer-backdrop");
    if (!sidebar || !openButton || !closeButton || !backdrop) return;
    function open() {
      sidebar.classList.add("open");
      backdrop.hidden = false;
      document.body.classList.add("drawer-open");
      openButton.setAttribute("aria-expanded", "true");
      closeButton.focus();
    }
    function close() {
      sidebar.classList.remove("open");
      backdrop.hidden = true;
      document.body.classList.remove("drawer-open");
      openButton.setAttribute("aria-expanded", "false");
      openButton.focus();
    }
    openButton.addEventListener("click", open);
    closeButton.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && sidebar.classList.contains("open")) close();
    });
  }

  window.HandbookSidebar = { render: render, initDrawer: initDrawer };
})();
