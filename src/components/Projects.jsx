import React from "react";

function Projects() {
  const projects = [
    {
      name: "WeatherApp",
      img: "/public/weatherApp.png",
      desc:
        "A modern, responsive weather application built using HTML, CSS (Grid/Flex), and vanilla JavaScript with OpenWeatherMap API. Features real-time updates, 5-day forecast, auto-location detection, and dynamic UI.",
      tech: "HTML • CSS • JavaScript • OpenWeatherMap API",
      github: "https://github.com/Krishnakhokhariya/Real-time-Weather-app.git",
    },
    {
      name: "Realtime Chat App",
      img: "/public/chatApp.png",
      desc:
        "A lightweight realtime chat platform built with Node.js, Express, and Socket.IO. Supports chat rooms, instant messaging, typing indicators, and real-time updates using WebSockets.",
      tech: "Node.js • Express • Socket.IO • HTML • CSS",
      github: "https://github.com/Krishnakhokhariya/realtime-chat-app.git",

    },
    {
      name: "SportsBuddy",
      img: "/public/SportBuddy.png",
      desc:
        "A sports event discovery and matching platform with user and admin dashboards. Built with React, Firebase, and Tailwind, featuring event creation, joining, notifications, and profile management.",
      tech: "React • Tailwind • Firebase Auth • Firestore • FCM",
      github: "https://github.com/Krishnakhokhariya/sports-buddy.git",
      live: "Coming Soon",
    },
    {
      name: "AppointMe",
      img: "/public/AppointMe.png",
      desc:
        "A role-based student–teacher appointment system with dashboards, scheduling, approvals, messaging, notifications, and analytics. Built using React, Tailwind CSS, and Firebase.",
      tech: "React • Tailwind • Firebase Auth • Firestore",
      github: "https://github.com/Krishnakhokhariya/student-teacher-booking-system.git",
      live: "Coming Soon",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#f7efe9]">
      <h2 className="text-4xl font-extrabold text-[#886044] text-center mb-16">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {projects.map((p, index) => (
          <div
            key={p.name}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
          >
            <div className="flex-1">
              <img
                src={p.img}
                alt={p.name}
                className="rounded-2xl shadow-xl border-4 border-[#c5a28a] hover:scale-105 transition-all duration-300"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#886044]">{p.name}</h3>
              <p className="text-gray-700 mt-4 leading-7">{p.desc}</p>
              <p className="text-sm text-[#886044] mt-3 font-semibold">
                {p.tech}
              </p>

              <div className="mt-6 flex gap-5">
                <a
                  href={p.github}
                  target="_blank"
                  className="px-5 py-2 bg-[#886044] text-white rounded-lg shadow-md hover:bg-[#6f4f38] transition"
                >
                  GitHub
                </a>

                {p.live !== "Coming Soon" ? (
                  <a
                    href={p.live}
                    target="_blank"
                    className="px-5 py-2 bg-white border-2 border-[#886044] text-[#886044] rounded-lg shadow-md hover:bg-[#f0d9c8] transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="px-5 py-2 bg-gray-200 text-gray-600 rounded-lg">
                    {p.live}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
