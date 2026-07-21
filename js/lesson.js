(function () {
  function initRequestFlow() {
    var host = document.querySelector("[data-request-flow]");
    var detail = document.querySelector("[data-flow-detail]");
    var steps = window.EngineeringHandbookSampleLessons.requestFlow;
    if (!host || !detail || !steps) return;

    function select(index) {
      host.querySelectorAll("button").forEach(function (button, i) {
        button.setAttribute("aria-pressed", String(i === index));
      });
      var step = steps[index];
      detail.textContent = "";
      ["What is happening: " + step[1], "Why it is needed: " + step[2], "What can fail: " + step[3], "How to investigate: " + step[4]].forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        detail.appendChild(p);
      });
    }

    steps.forEach(function (step, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = String(index + 1) + ". " + step[0];
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", function () { select(index); });
      button.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          host.querySelectorAll("button")[Math.min(steps.length - 1, index + 1)].focus();
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          host.querySelectorAll("button")[Math.max(0, index - 1)].focus();
        }
      });
      host.appendChild(button);
    });
    select(0);
  }

  function initMiniChallenge() {
    var host = document.querySelector("[data-mini-challenge]");
    if (!host) return;
    var feedback = host.querySelector("[data-challenge-feedback]");
    host.querySelectorAll("[data-answer]").forEach(function (button) {
      button.addEventListener("click", function () {
        host.querySelectorAll("[data-answer]").forEach(function (item) { item.classList.remove("selected"); });
        button.classList.add("selected");
        var correct = button.dataset.answer === "Application logic";
        feedback.textContent = correct ? "Correct. The server can serve static assets while application logic fails for the dynamic product page." : "Not quite. Images and CSS loading means DNS, the network, and static serving are probably working.";
        feedback.className = "feedback " + (correct ? "correct" : "incorrect");
      });
    });
  }

  function initQuiz() {
    var host = document.querySelector("[data-quiz]");
    var questions = window.EngineeringHandbookSampleLessons.quiz;
    if (!host || !questions) return;
    var currentLessonId = document.body.hasAttribute("data-lesson-id") ? document.body.dataset.lessonId : "lesson-http-request";
    var answers = {};
    var scoreNode = document.createElement("p");

    function renderScore() {
      var answered = Object.keys(answers).length;
      var correct = questions.filter(function (q, index) { return answers[index] === q.answer; }).length;
      scoreNode.textContent = answered === questions.length ? "Final score: " + correct + " of " + questions.length + "." : "Answered: " + answered + " of " + questions.length + ".";
      if (answered === questions.length && window.HandbookStorage) {
        var percent = Math.round((correct / questions.length) * 100);
        window.HandbookStorage.saveQuiz(currentLessonId, percent, percent >= 70);
        if (window.LessonRenderer) window.LessonRenderer.updateCompletionAvailability();
      }
    }

    questions.forEach(function (question, index) {
      var card = document.createElement("article");
      card.className = "quiz-card";
      var title = document.createElement("h3");
      title.textContent = String(index + 1) + ". " + question.question;
      var options = document.createElement("div");
      options.className = "quiz-options";
      var feedback = document.createElement("p");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      question.options.forEach(function (option, optionIndex) {
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", function () {
          answers[index] = optionIndex;
          options.querySelectorAll("button").forEach(function (item) { item.classList.remove("selected"); });
          button.classList.add("selected");
          var correct = optionIndex === question.answer;
          feedback.textContent = (correct ? "Correct. " : "Not quite. ") + question.feedback;
          feedback.className = "quiz-feedback " + (correct ? "correct" : "incorrect");
          renderScore();
        });
        options.appendChild(button);
      });
      card.append(title, options, feedback);
      host.appendChild(card);
    });
    var footer = document.createElement("div");
    footer.className = "quiz-footer";
    var retry = document.createElement("button");
    retry.className = "button button-secondary";
    retry.type = "button";
    retry.textContent = "Retry quiz";
    retry.addEventListener("click", function () {
      answers = {};
      host.querySelectorAll(".selected").forEach(function (node) { node.classList.remove("selected"); });
      host.querySelectorAll(".quiz-feedback").forEach(function (node) { node.textContent = ""; node.className = "quiz-feedback"; });
      renderScore();
    });
    footer.append(scoreNode, retry);
    host.appendChild(footer);
    renderScore();
  }

  function initToc() {
    var toc = document.querySelector("[data-toc]");
    var indicators = document.querySelector("[data-section-progress]");
    var sections = Array.prototype.slice.call(document.querySelectorAll(".lesson-section"));
    if (!toc || !sections.length) return;
    var currentLessonId = document.body.hasAttribute("data-lesson-id") ? document.body.dataset.lessonId : "lesson-http-request";
    if (!currentLessonId) return;
    var visited = new Set(window.HandbookStorage.getLesson(currentLessonId).visitedSections || []);

    sections.forEach(function (section) {
      var title = section.dataset.sectionTitle || section.querySelector("h2").textContent;
      var link = document.createElement("a");
      link.className = "toc-link";
      link.href = "#" + section.id;
      link.textContent = title;
      toc.appendChild(link);
      if (indicators) {
        var indicator = document.createElement("a");
        indicator.className = "section-indicator";
        indicator.href = "#" + section.id;
        indicator.dataset.sectionIndicator = section.id;
        indicator.textContent = (visited.has(section.id) ? "✓ " : "○ ") + title;
        indicators.appendChild(indicator);
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        visited.add(id);
        toc.querySelectorAll(".toc-link").forEach(function (link) { link.classList.toggle("active", link.getAttribute("href") === "#" + id); });
        document.querySelectorAll("[data-section-indicator]").forEach(function (node) {
          var active = node.dataset.sectionIndicator === id;
          var seen = visited.has(node.dataset.sectionIndicator);
          node.classList.toggle("current", active);
          node.classList.toggle("visited", seen && !active);
          node.textContent = (seen ? "✓ " : active ? "● " : "○ ") + node.textContent.replace(/^[✓●○]\s/, "");
        });
        window.HandbookStorage.updateLesson(currentLessonId, {
          sectionId: id,
          visitedSections: Array.from(visited),
          scrollY: window.scrollY
        });
        if (window.LessonRenderer) window.LessonRenderer.updateCompletionAvailability();
      });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 });
    sections.forEach(function (section) { observer.observe(section); });
  }

  function initDetails() {
    document.querySelectorAll("details").forEach(function (detail) {
      detail.addEventListener("toggle", function () {
        detail.setAttribute("aria-expanded", String(detail.open));
      });
    });
  }

  window.HandbookLesson = { initRequestFlow: initRequestFlow, initMiniChallenge: initMiniChallenge, initQuiz: initQuiz, initToc: initToc, initDetails: initDetails };
})();
