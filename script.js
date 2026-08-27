const projects = [
  {
    id: 1,
    title: "Machine Learning for Lung Disease Diagnosis",
    description:
      "Bachelor's thesis project comparing multiple machine learning classifiers and feature-selection techniques for lung disease prediction.",
    categories: ["ml-health", "ml-data-science", "all"],
    tags: ["Python", "Machine Learning", "Scikit-learn", "Feature Selection", "Healthcare"],
    repository: "https://github.com/thomas930821/Lung-Disease-Diagnosis"
  },

  {
    id: 2,
    title: "Data Preprocessing",
    description:
      "Data preprocessing and transformation project developed in Python.",
    categories: ["ml-data-science", "all"],
    tags: ["Python", "Data Science", "Preprocessing"],
    repository: "https://github.com/TUO-USERNAME/Preprocessing"
  },

  {
    id: 3,
    title: "Catering Service",
    description:
      "Website for a catering society - Unversity project",
    categories: ["other", "all"],
    tags: ["java", "html", "CSS"],
    repository: "https://github.com/thomas930821/Catering_Service"
  },

  {
    id: 5,
    title: "EDU Service",
    description:
      "Website for a booking school exams - Unversity project",
    categories: ["other", "all"],
    tags: ["java", "html", "CSS"],
    repository: "https://github.com/thomas930821/Edu_Service"
  },

  {
    id: 6,
    title: " Cemetery Run",
    description: "Mobile application  - Unversity project",
    categories: ["other", "all"],
    tags: ["C#", "unity", "CSS"],
    repository: "github.com/thomas930821/Cemetery_Run"
  },

  {
    id: 7,
    title: "GoodMusic",
    description:
      "Microservices architecture with Spring Boot, Kafka, Docker, PostgreSQL and Consul - Unversity project",
    categories: ["other", "all"],
    tags: ["Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"],
    repository: "https://github.com/thomas930821/GoodMusic"
  },
  
{
    id: 8,
    title: "Oculomotor Movement Analysis",
    description:
      "POST GRADUATE THESIS: Data analysis project focused on eye-tracking data, including fixations, saccades, gaze patterns and statistical analysis.",
    categories: ["ml-data-analyst", "all"],
    tags: ["Python", "Pandas", "SciPy", "Statistics", "Data Analysis"],
    repository: "https://github.com/thomas930821/Analisi-dei-movimenti-oculomotori"
  },

  {
    id: 9,
    title: "Deep Learning Project",
    description:
      "Deep learning project focused on fine-tuning Small Language Models for structured information extraction from natural language into JSON, comparing compact SLMs with a large LLM baseline.",
    categories: ["deep-learning", "all"],
    tags: ["Python", "Deep Learning", "Neural Networks"],
    repository: "https://github.com/thomas930821/Progetto-deep-Learning"
  },

  {
  id: 10,
  title: "Histopathological Image Classification",
  description:
    "Deep learning project comparing multiple image preprocessing techniques for lung and colon cancer classification using pretrained and from-scratch ResNet-18 models.",
  categories: ["deep-learning-health", "deep-learning", "all"],
  tags: ["Python", "PyTorch", "ResNet-18", "Medical Imaging", "Grad-CAM"],
  repository: "https://github.com/thomas930821/Preprocessing"
  },

  {
  id: 11,
  title: "Assasin World",
  description:
    "Interactive game project focused on gameplay mechanics, player interaction and game-world development.",
  categories: ["other", "all"],
  tags: ["C#", "Unity", "Game Development"],
  repository: "https://github.com/thomas930821/Assasin-World"
  },

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