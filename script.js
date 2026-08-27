const projects = [
  {
    id: 1,
    title: "Machine Learning for Lung Disease Diagnosis",
    description:
      "Machine learning project focused on the analysis and classification of data for lung disease diagnosis.",
    categories: ["ml-health", "ml-data-science", "all"],
    tags: ["Machine Learning", "Healthcare", "Python"],
    repository: "#"
  },

  {
    id: 2,
    title: "Data Preprocessing",
    description:
      "Data preprocessing and transformation project developed in Python.",
    categories: ["ml-data-science", "all"],
    tags: ["Python", "Data Science", "Preprocessing"],
    repository: "https://github.com/TUO-USERNAME/Preprocessing"
  }
];


const projectsContainer = document.getElementById("projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyProjects = document.getElementById("empty-projects");


function renderProjects(filter = "all") {

  projectsContainer.innerHTML = "";

  const filteredProjects = projects.filter((project) => {

    if (filter === "all") {
      return true;
    }

    return project.categories.includes(filter);

  });


  if (filteredProjects.length === 0) {

    emptyProjects.classList.add("show");
    return;

  }


  emptyProjects.classList.remove("show");


  filteredProjects.forEach((project, index) => {

    const article = document.createElement("article");

    article.classList.add("project");


    const projectNumber =
      String(index + 1).padStart(2, "0");


    const tagsHTML = project.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");


    article.innerHTML = `
      <div>

        <p class="project-number">
          ${projectNumber}
        </p>

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.description}
        </p>

      </div>


      <div class="project-footer">

        <div class="project-tags">
          ${tagsHTML}
        </div>

        <a
          href="${project.repository}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository ↗
        </a>

      </div>
    `;


    projectsContainer.appendChild(article);

  });

}


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedFilter = button.dataset.filter;


    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });


    button.classList.add("active");


    renderProjects(selectedFilter);

  });

});


renderProjects();