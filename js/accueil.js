document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

function loadMoreProjects() {
  const hiddenProjects = document.querySelectorAll(".hidden-project");

  hiddenProjects.forEach((project) => {
    project.style.display = "block";
    project.classList.add("show-project");
  });

  const btnVoirPlus = document.querySelector(".btn-voir-plus");
  btnVoirPlus.style.display = "none";

  const btnVoirMoins = document.querySelector(".btn-voir-moins");
  btnVoirMoins.style.display = "inline-block";
}

function loadLessProjects() {
  const hiddenProjects = document.querySelectorAll(".hidden-project");

  hiddenProjects.forEach((project) => {
    project.style.display = "none";
    project.classList.remove("show-project");
  });

  const btnVoirPlus = document.querySelector(".btn-voir-plus");
  btnVoirPlus.style.display = "inline-block";

  const btnVoirMoins = document.querySelector(".btn-voir-moins");
  btnVoirMoins.style.display = "none";
}
