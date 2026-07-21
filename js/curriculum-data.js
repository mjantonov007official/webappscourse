(function () {
  function parts() {
    return window.EngineeringHandbookCurriculum || [];
  }

  function chapters() {
    return parts().flatMap(function (part) {
      return part.chapters.map(function (chapter) {
        return Object.assign({ part: part, partTitle: part.title }, chapter);
      });
    });
  }

  function lessons() {
    return parts().flatMap(function (part) {
      return part.chapters.flatMap(function (chapter) {
        return chapter.lessons.map(function (lesson) {
          return Object.assign({ part: part, chapter: chapter, partTitle: part.title, chapterTitle: chapter.title }, lesson);
        });
      });
    });
  }

  function findLesson(value) {
    return lessons().find(function (lesson) {
      return lesson.id === value || lesson.slug === value;
    }) || null;
  }

  function findPart(id) {
    return parts().find(function (part) { return part.id === id; }) || null;
  }

  function findChapter(id) {
    return chapters().find(function (chapter) { return chapter.id === id; }) || null;
  }

  function completeLessons() {
    return lessons().filter(function (lesson) { return lesson.status === "complete"; });
  }

  function plannedLessons() {
    return lessons().filter(function (lesson) { return lesson.status === "planned"; });
  }

  function previousNext(lessonId) {
    var ordered = lessons();
    var index = ordered.findIndex(function (lesson) { return lesson.id === lessonId || lesson.slug === lessonId; });
    return {
      previous: index > 0 ? ordered[index - 1] : null,
      next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null
    };
  }

  function formatMinutes(minutes) {
    var hours = Math.floor(minutes / 60);
    var mins = minutes % 60;
    if (!hours) return mins + "m";
    return mins ? hours + "h " + mins + "m" : hours + "h";
  }

  function totals() {
    var allLessons = lessons();
    var totalMinutes = allLessons.reduce(function (sum, lesson) { return sum + lesson.estimatedMinutes; }, 0);
    var complete = completeLessons();
    var completeMinutes = complete.reduce(function (sum, lesson) { return sum + lesson.estimatedMinutes; }, 0);
    return {
      parts: parts().length,
      chapters: chapters().length,
      lessons: allLessons.length,
      completeLessons: complete.length,
      plannedLessons: plannedLessons().length,
      estimatedMinutes: totalMinutes,
      estimatedTime: formatMinutes(totalMinutes),
      completeMinutes: completeMinutes,
      completeTime: formatMinutes(completeMinutes)
    };
  }

  function lessonUrl(lesson) {
    return "lesson.html?lesson=" + encodeURIComponent(lesson.slug || lesson.id);
  }

  function lessonStatus(lesson, progress) {
    if (lesson.status === "planned") return "planned";
    if (progress && progress.completed) return "completed";
    if (progress && progress.progress > 0) return "in-progress";
    return "not-started";
  }

  function buttonLabel(lesson, progress) {
    var state = lessonStatus(lesson, progress);
    if (state === "planned") return "Preview";
    if (state === "completed") return "Review";
    if (state === "in-progress") return "Continue";
    return "Start";
  }

  function commandExamplesFor(lesson) {
    var topic = lesson.topics[0];
    if (topic === "git" || topic === "github") return ["git status", "git diff", "git log --oneline"];
    if (topic === "terminal" || topic === "bash") return ["pwd", "ls -la", "grep \"error\" app.log"];
    if (topic === "linux" || topic === "nginx") return ["systemctl status nginx", "tail -f /var/log/nginx/error.log"];
    if (topic === "docker") return ["docker ps", "docker logs <container>", "docker compose up"];
    if (topic === "dns" || topic === "networking" || topic === "http" || topic === "https") return ["nslookup example.com", "ping example.com", "curl -I https://example.com"];
    return [];
  }

  window.CurriculumData = {
    parts: parts,
    chapters: chapters,
    lessons: lessons,
    findLesson: findLesson,
    findPart: findPart,
    findChapter: findChapter,
    completeLessons: completeLessons,
    plannedLessons: plannedLessons,
    previousNext: previousNext,
    formatMinutes: formatMinutes,
    totals: totals,
    lessonUrl: lessonUrl,
    lessonStatus: lessonStatus,
    buttonLabel: buttonLabel,
    commandExamplesFor: commandExamplesFor
  };
})();
