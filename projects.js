const projects = [
  {
    title: "Smart Home Automation System",
    link: "SMART_HOME.html",
    description:
      "Designed and implemented a smart home system using IoT and microcontrollers to control lighting and appliances remotely.",
    technologies: "Arduino Framework, ESP32, ESP8266, ESP-NOW",
  },
  {
    title: "Solar Power Monitoring System",
    description:
      "Developed a system to monitor solar panel performance and optimize energy output using real-time data analytics.",
    technologies: "Raspberry Pi, Sensors, Python, Grafana",
  },
  {
    title: "Electric Vehicle Charger Prototype",
    description:
      "Built a prototype for a fast-charging EV station with safety features and user interface for charge monitoring.",
    technologies: "Power Electronics, STM32, MATLAB",
  },
  {
    title: "Weather Station",
    description:
      "Created a weather monitoring system to track temperature, humidity, and pressure with real-time data logging.",
    technologies: "Arduino, DHT11, Firebase",
  },
  {
    title: "Smart Irrigation System",
    description:
      "Developed an automated irrigation system that adjusts watering based on soil moisture and weather data.",
    technologies: "ESP32, Soil Moisture Sensor, Blynk",
  },
  {
    title: "NEW",
    description:
      "Developed an automated irrigation system that adjusts watering based on soil moisture and weather data.",
    technologies: "ESP32, Soil Moisture Sensor, Blynk",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>
                ${project.link ? `<a href="${project.link}">${project.title}</a>` : project.title}
            </h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${project.technologies}</p>
        `;
    grid.appendChild(card);
  });
});
