const projects = [
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
    title: "RC car",
    repo: "https://github.com/aaryanmakwana/rc_car",
    description:
      "Designed and developed from scratch, a remote-controlled car from scratch using stm32, nrf24l01 module, nema17 motor, and custom circuit board.",
    technologies: "Arduino Framework, NRF24L01, CPP, STM32F103C8T6",
    home: true,
  },
  {
    title: "Sumo Bot",
    description:
      "Designed and built a sumobot from scratch using ESP32, STM32, nema17 motors, and custom circuit board. The communication between ESP32 and PS5 remote was done via bluetooth. ESP32 acted as a reciever and converted its command signals into UART, sending them to STM32(BLACKPILL). Four timers were used in STM32 to generate four different PWM signals at different frequencies to control the speed and direction of the fourmotors. The motor in selection is NEMA17, which is a stepper motor, the reason of selection is its high torque and low cost; this helps us eleminate use of gearbox. and being a versatile motor, it can be used in other projects as well. but in order to control the motor, special drivers are required. the chosed driver is 'L298N'. Four of these drivers can be controlled via 9 pins of STM32. omni wheels are chosen to improve mobility and agility of robot which is essential for sumobot. the robot is powered by a 24V battery, which is custom made using 18650 cells. the configuration is 6S2P, which means six cells in series and two cells in parallel. Soldering of cells, mounting of bms and case design was done by me.",
    technologies:
      "Arduino Framework, STM32F401, ESP32, Bluetooth, CPP, NEMA17, L298N, CMSIS",
  },
  {
    title: "Robotic Arm",
    description:
      "Created a weather monitoring system to track temperature, humidity, and pressure with real-time data logging.",
    technologies: "Arduino, DHT11, Firebase",
  },
  {
    title: "Polish Notation Simulator",
    repo: "https://github.com/aaryanmakwana/polish-notation-simulator",
    link: "https://github.com/aaryanmakwana/charge-simulation",
    description:
      "This project was done as a part of term assignment in my PDCMOS (physical design of CMOS technology)class. The project was aimed at visualizing the Polish Notation and its transformation. Polish Notation is used in VLSI design to partition the design into smaller blocks for easier analysis and optimization.",
    technologies: "JavaScript, HTML, CSS",
    home: true,
  },
  {
    title: "Charge Simulation",
    repo: "https://github.com/aaryanmakwana/charge-simulation",
    link: "./charge_sim/charge.html",
    description:
      "This is a simulation of charge distribution in free space. This was done to practice and learn how simulation softwares run and how to implement them in real life. This project helped me understand different models used in computational of simple charge distributions and how complicated it can get with increasing number of charges.",
    technologies: "JavaScript, HTML, CSS",
  },
  {
    title: "Transformer Design Portal",
    repo: "https://github.com/aaryanmakwana/motor-design-portal",
    link: "https://github.com/aaryanmakwana/TRANSFORMER_DESIGN/index.html",
    description:
      "Developed an web-page that helps design different kinds of electric motors, including induction motors, BLDC motors, SRM motors. this was done as an initiative to help my classmates cross-verify their designs and help them develop new designs faster. in future, i am planning to incorporate a feature that outputs the design as a cad file to directly use the design in motor FEM software.",
    technologies: "JavaScript, HTML, CSS",
  },
    {
    title: "SRM motor Design Portal",
    repo: "https://github.com/aaryanmakwana/motor-design-portal",
    link: "https://github.com/aaryanmakwana/SRM_design/index.html",
    description:
      "Developed an web-page that helps design different kinds of electric motors, including induction motors, BLDC motors, SRM motors. this was done as an initiative to help my classmates cross-verify their designs and help them develop new designs faster. in future, i am planning to incorporate a feature that outputs the design as a cad file to directly use the design in motor FEM software.",
    technologies: "JavaScript, HTML, CSS",
  },
    {
    title: "BLDC motor Design Portal",
    repo: "https://github.com/aaryanmakwana/motor-design-portal",
    link: "https://github.com/aaryanmakwana/BLDC_DESIGN/index.html",
    description:
      "Developed an web-page that helps design different kinds of electric motors, including induction motors, BLDC motors, SRM motors. this was done as an initiative to help my classmates cross-verify their designs and help them develop new designs faster. in future, i am planning to incorporate a feature that outputs the design as a cad file to directly use the design in motor FEM software.",
    technologies: "JavaScript, HTML, CSS",
  },
    {
    title: "INDUCTION motor Design Portal",
    repo: "https://github.com/aaryanmakwana/motor-design-portal",
    link: "https://github.com/aaryanmakwana/motor_design/index.html",
    description:
      "Developed an web-page that helps design different kinds of electric motors, including induction motors, BLDC motors, SRM motors. this was done as an initiative to help my classmates cross-verify their designs and help them develop new designs faster. in future, i am planning to incorporate a feature that outputs the design as a cad file to directly use the design in motor FEM software.",
    technologies: "JavaScript, HTML, CSS",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid2 = document.getElementById("projects-grid");
  let i=0;
  projects.forEach((project) => {
    i += 1;
    const card = document.createElement("div");
    card.className = "card2";
    card.innerHTML = `
            <div class = 'image-container'><img src=${project.image} alt="${project.title}"></div>
            <div class = 'project-info'>
            <h3>
                <a>${project.title}</a>
                ${project.link ? `<a href="${project.link}" class = "project-link">[view project]</a>` : ""}
                ${project.repo ? `<a href="${project.repo}" class = "project-link">[view code]</a>` : ""}
            </h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${project.technologies}</p>
            </div>
        `;
    grid2.appendChild(card);
  });

  console.log(i);
});

document.addEventListener("DOMContentLoaded", () => {
  const grid1 = document.getElementById("project-grid");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class = 'image-container'><img src=${project.image} alt="${project.title}"></div>
          <div class = 'project-info'>
          <h3>
              <a>${project.title}</a>
              ${project.link ? `<a href="${project.link}" class = "project-link">[view project]</a>` : ""}
              ${project.repo ? `<a href="${project.repo}" class = "project-link">[view code]</a>` : ""}
          </h3>
          <p>${project.description}</p>
          <p class="tech">Technologies: ${project.technologies}</p>
          </div>
      `;
    if (project.home) {
      grid1.appendChild(card);
    }
  });
});
