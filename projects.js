const projects = [
  // Generated from GitHub repositories
  {
    title: "4column_Netlist",
    repo: "https://github.com/aaryanmakwana/4column_Netlist",
    description: "A Python project that proposes a new netlist format with only four columns, simplifying circuit representation compared to the traditional seven‑column ISCAS netlist. It includes parsers, converters, and example benchmarks demonstrating reduced file size and faster processing.",
    technologies: "Python",
    link: "https://github.com/aaryanmakwana/4column_Netlist",
    image: "images/4column_Netlist.png",
    category: "Electrical Design"
  },
  {
    title: "DIGITAL_FACTORY_SIM",
    repo: "https://github.com/aaryanmakwana/DIGITAL_FACTORY_SIM",
    description: "A Makefile‑driven simulation of a digital factory workflow. Models production lines, resource allocation, and throughput using discrete‑event simulation, allowing users to experiment with different factory configurations.",
    technologies: "Makefile",
    link: "https://github.com/aaryanmakwana/DIGITAL_FACTORY_SIM",
    image: "images/DIGITAL_FACTORY_SIM.png",
    category: "Simulations"
  },
  {
    title: "ESP32_WEB_controlled_RC_car",
    repo: "https://github.com/aaryanmakwana/ESP32_WEB_controlled_RC_car",
    description: "C++ firmware for an ESP32 that hosts a web interface to control an RC car. Users can steer, accelerate, and monitor telemetry via a responsive web page, eliminating the need for a separate controller.",
    technologies: "C++",
    link: "https://github.com/aaryanmakwana/ESP32_WEB_controlled_RC_car",
    image: "images/ESP32_WEB_controlled_RC_car.png",
    category: "Embedded System"
  },
  {
    title: "ESP32_WiFi_controlled_RC_car",
    repo: "https://github.com/aaryanmakwana/ESP32_WiFi_controlled_RC_car",
    description: "C++ project (placeholder) intended to control an RC car over Wi‑Fi using an ESP32, providing remote operation via network commands.",
    technologies: null,
    link: "https://github.com/aaryanmakwana/ESP32_WiFi_controlled_RC_car",
    image: "images/ESP32_car.gif",
    category: "Embedded System"
  },
  {
    title: "esp32_ps5_controlled_rc_car",
    repo: "https://github.com/aaryanmakwana/esp32_ps5_controlled_rc_car",
    description: "C firmware enabling an ESP32 to receive input from a PS5 controller via Bluetooth, translating joystick and button events into motor commands for a custom RC car.",
    technologies: "C",
    link: "https://github.com/aaryanmakwana/esp32_ps5_controlled_rc_car",
    image: "images/esp32_ps5_controlled_rc_car.png",
    category: "Embedded System"
  },
  {
    title: "generative_motor_design",
    repo: "https://github.com/aaryanmakwana/generative_motor_design",
    description: "C++ tool that uses a generative algorithm to explore motor design parameters, optimizing for efficiency, torque, and size. Generates candidate designs and visualizes performance curves.",
    technologies: "C++",
    link: "https://github.com/aaryanmakwana/generative_motor_design",
    image: "images/generative_motor_design.jpg",
    category: "Electrical Design"
  },
  {
    title: "POLISH_NOTATION_SIMULATOR",
    repo: "https://github.com/aaryanmakwana/POLISH_NOTATION_SIMULATOR",
    description: "Makefile‑based simulator that converts Polish (prefix) notation expressions into visual slice diagrams, illustrating the hierarchical structure of operations.",
    technologies: "Makefile",
    link: "https://github.com/aaryanmakwana/POLISH_NOTATION_SIMULATOR",
    image: "images/POLISH_NOTATION_SIMULATOR.jpg",
    category: "Simulations"
  },
  {
    title: "RAYLIB_C-gravity-simulator",
    repo: "https://github.com/aaryanmakwana/RAYLIB_C-gravity-simulator",
    description: "C project using Raylib to simulate gravitational interactions between multiple bodies, rendering real‑time trajectories and allowing parameter tweaking.",
    technologies: "C",
    link: "https://github.com/aaryanmakwana/RAYLIB_C-gravity-simulator",
    image: "images/RAYLIB_C-gravity-simulator.png",
    category: "Simulations"
  },
  {
    title: "RAYLIB_CPP-random-charge-distribution",
    repo: "https://github.com/aaryanmakwana/RAYLIB_CPP-random-charge-distribution",
    description: "C++ Raylib application that visualizes random charge distributions and computes resulting electric fields, useful for educational demonstrations.",
    technologies: "C++",
    link: "https://github.com/aaryanmakwana/RAYLIB_CPP-random-charge-distribution",
    image: "images/RAYLIB_CPP-random-charge-distribution.png",
    category: "Simulations"
  },
  {
    title: "RAYLIB_CPP-two-charge-simulator",
    repo: "https://github.com/aaryanmakwana/RAYLIB_CPP-two-charge-simulator",
    description: "C++ Raylib demo simulating interaction of two point charges, showing field lines and potential surfaces.",
    technologies: "C++",
    link: "https://github.com/aaryanmakwana/RAYLIB_CPP-two-charge-simulator",
    image: "images/RAYLIB_CPP-two-charge-simulator.png",
    category: "Simulations"
  },
  {
    title: "SCARA_SIM",
    repo: "https://github.com/aaryanmakwana/SCARA_SIM",
    description: "C simulation of a SCARA robot arm using Raylib, modeling kinematics of two rotating joints and visualizing reachable workspace and motion paths.",
    technologies: "C",
    link: "https://github.com/aaryanmakwana/SCARA_SIM",
    image: "images/SCARA_SIM.png",
    category: "Robotics"
  },
  {
    title: "SRM_inductance_profile_genrator",
    repo: "https://github.com/aaryanmakwana/SRM_inductance_profile_genrator",
    description: "Makefile‑driven generator that computes inductance profiles for Switched Reluctance Motors based on geometric parameters, outputting data for motor design analysis.",
    technologies: "Makefile",
    link: "https://github.com/aaryanmakwana/SRM_inductance_profile_genrator",
    image: "images/SRM_inductance_profile_genrator.png",
    category: "Electrical Design"
  },
  {
    title: "STM32_NRF_comm",
    repo: "https://github.com/aaryanmakwana/STM32_NRF_comm",
    description: "C++ library facilitating communication between two STM32F103C8 boards via NRF24L01 modules, providing reliable packet transmission for embedded projects.",
    technologies: "C++",
    link: "https://github.com/aaryanmakwana/STM32_NRF_comm",
    image: "images/STM32_NRF_comm.png",
    category: "Embedded System"
  }
];

// Render projects grouped by category
function renderProjects() {
  const container = document.getElementById("projects-section");
  if (!container) return;

  const grid = document.createElement("div");
  grid.className = "grid";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class='image-container'>
        <img src="${project.image}" alt="${project.title}">
      </div>

      <div class='project-info'>
        <h3>
          <a>${project.title}</a>
          ${project.link ? `<a href="${project.link}" class="project-link">[view project]</a>` : ""}
          ${project.repo ? `<a href="${project.repo}" class="project-link">[view code]</a>` : ""}
        </h3>

        <p>${project.description}</p>
        <p class="tech">Technologies: ${project.technologies}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

document.addEventListener("DOMContentLoaded", renderProjects);


