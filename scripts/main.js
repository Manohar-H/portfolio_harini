// Harini Manohar's Portfolio's JavaScript

const projects = [
    {
      title: "E-Commerce App",
      description: "A React-based e-commerce application.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using APIs.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're looking at!",
      link: "#",
    },
  ];
  
  // Dynamically Load Projects
  const projectList = document.getElementById("project-list");
  
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectCard);
  });