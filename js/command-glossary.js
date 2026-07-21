(function () {
  var query = "";

  function create(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderEntry(entry) {
    var card = create("article", "command-card");
    var header = create("div", "command-card-header");
    header.appendChild(create("code", "", entry.command));
    var bookmark = create("button", "button button-secondary", "");
    bookmark.type = "button";
    function paint() {
      var saved = window.HandbookStorage.isCommandBookmarked(entry.command);
      bookmark.textContent = saved ? "Bookmarked" : "Bookmark";
      bookmark.setAttribute("aria-pressed", String(saved));
    }
    bookmark.addEventListener("click", function () {
      window.HandbookStorage.toggleCommandBookmark(entry.command);
      paint();
    });
    paint();
    header.appendChild(bookmark);
    var risk = create("div", "risk-labels");
    entry.risk.forEach(function (item) { risk.appendChild(create("span", "risk-label", item)); });
    var platforms = create("div", "platform-list");
    entry.platform.forEach(function (item) { platforms.appendChild(create("span", "badge", item)); });
    var example = create("pre", "code-block");
    example.appendChild(create("code", "", entry.example));
    if (entry.repositoryEffect) card.appendChild(create("p", "", entry.repositoryEffect));
    if (entry.recovery) card.appendChild(create("p", "warning-note", "Recovery: " + entry.recovery));
    var lesson = window.CurriculumData.findLesson(entry.lessonSlug);
    var link = create("a", "button button-secondary", lesson ? "Open lesson" : "Open curriculum");
    link.href = lesson ? window.CurriculumData.lessonUrl(lesson) : "handbook.html";
    card.append(header, create("p", "", entry.purpose), risk, platforms, example, link);
    return card;
  }

  function render() {
    var host = document.querySelector("[data-command-glossary]");
    if (!host || !window.CommandGlossary) return;
    host.textContent = "";
    var matches = window.CommandGlossary.filter(function (entry) {
      var text = [entry.command, entry.purpose, entry.example, entry.risk.join(" "), entry.platform.join(" ")].join(" ").toLowerCase();
      return !query || text.indexOf(query.toLowerCase()) >= 0;
    });
    matches.forEach(function (entry) { host.appendChild(renderEntry(entry)); });
    if (!matches.length) host.appendChild(create("div", "empty-state", "No commands match the current search."));
  }

  function init() {
    var input = document.querySelector("[data-command-search]");
    if (input) input.addEventListener("input", function () { query = input.value.trim(); render(); });
    render();
  }

  window.CommandGlossaryRenderer = { init: init, render: render };
})();
