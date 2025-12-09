const blogs = [
  {
    title: "Smart Home Automation System",
    //link: "SMART_HOME.html",
    description:
      "Designed and implemented a smart home system using IoT and microcontrollers to control lighting and appliances remotely.",
    technologies: "Arduino Framework, ESP32, ESP8266, ESP-NOW, CPP, PlatformIO",
    image: "./images/smart_home.jpg",
    home: true,
  },
  {
    title: "Smart Home Automation System 2",
    //link: "SMART_HOME.html",
    description:
      "Designed and implemented a smart home system using IoT and microcontrollers to control lighting and appliances remotely.",
    technologies: "Arduino Framework, ESP32, ESP8266, ESP-NOW, CPP, PlatformIO",
    image: "./images/smart_home.jpg",
    home: true,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");
  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "card2";
    card.innerHTML = `
            <div class = 'image-container'><img src=${blog.image} alt="${blog.title}"></div>
            <div class = 'project-info'>
            <h3>
                <a>${blog.title}</a>
                ${blog.link ? `<a href="${blog.link}" class = "project-link">[view project]</a>` : ""}
                ${blog.repo ? `<a href="${blog.repo}" class = "project-link">[view code]</a>` : ""}
            </h3>
            <p>${blog.description}</p>
            <p class="tech">Technologies: ${blog.technologies}</p>
            </div>
        `;
    grid.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const grid1 = document.getElementById("blog-grid");
  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class = 'image-container'><img src=${blog.image} alt="${blog.title}"></div>
          <div class = 'project-info'>
          <h3>
              <a>${blog.title}</a>
              ${blog.link ? `<a href="${blog.link}" class = "project-link">[view project]</a>` : ""}
              ${blog.repo ? `<a href="${blog.repo}" class = "project-link">[view code]</a>` : ""}
          </h3>
          <p>${blog.description}</p>
          <p class="tech">Technologies: ${blog.technologies}</p>
          </div>
      `;
    if (blog.home) {
      grid1.appendChild(card);
    }
  });
});
