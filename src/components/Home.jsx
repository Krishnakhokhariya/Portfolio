import React from "react";

function Home() {
  return (
    <section id="home" className="px-6 pt-28 pb-16 bg-[#c5a28a]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#886044] text-center">
        Hi, I'm Krishna 👋
      </h1>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <div className="flex-1 md:flex-[60%] text-left">
          <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed">
            A motivated front-end developer with hands-on internship experience
            in building modern, responsive web applications. I specialize in
            crafting clean UI, reusable components, and intuitive user
            experiences using React, Tailwind CSS, and Firebase. I enjoy solving
            real-world problems through thoughtful design and scalable
            engineering.
          </p>

          <ul className="text-white text-lg mt-6 space-y-2 list-disc ml-6">
            <li>Frontend development & Web Development with React, Vue & Tailwind</li>
            <li>UI/UX implementation and component design</li>
            <li>Experience with Firebase (Auth, Firestore)</li>
            <li>Responsive and modern web layouts</li>
            <li>Understanding of Agile Methodology, Scrum, Kanban etc</li>
            <li>Passionate about clean, scalable code</li>
            <li>Seeking frontend & UI/UX roles</li>
          </ul>
        </div>

        <div className="flex-1 md:flex-[40%] flex justify-center md:justify-end">
          <img
            src="/KrishnaProfile.jpg"
            alt="Krishna Profile"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
