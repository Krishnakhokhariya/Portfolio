import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="pb-20 px-6 bg-[#f7efe9]">
      <h2 className="text-4xl font-extrabold text-[#886044] text-center mb-10">
        Contact Me
      </h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-7">
        I’m open to collaboration, job opportunities, or project discussions.
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <a
          href="mailto:krishnakhokhariya26@gmail.com"
          className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border-b-4 border-[#886044] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <Mail size={34} className="text-[#886044]" />
          <div>
            <h3 className="text-xl font-semibold text-[#886044]">Email</h3>
            <p className="text-gray-700">krishnakhokhariya26@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/krishna-khokhariya-078835333/"
          target="_blank"
          className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border-b-4 border-[#886044] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <Linkedin size={34} className="text-[#886044]" />
          <div>
            <h3 className="text-xl font-semibold text-[#886044]">LinkedIn</h3>
            <p className="text-gray-700">View Profile</p>
          </div>
        </a>

        <a
          href="https://github.com/Krishnakhokhariya"
          target="_blank"
          className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border-b-4 border-[#886044] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <Github size={34} className="text-[#886044]" />
          <div>
            <h3 className="text-xl font-semibold text-[#886044]">GitHub</h3>
            <p className="text-gray-700">View My Projects</p>
          </div>
        </a>

        <a
          href="public/Krishna Resume.pdf"
          target="_blank"
          className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md border-b-4 border-[#886044] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <FileText size={34} className="text-[#886044]" />
          <div>
            <h3 className="text-xl font-semibold text-[#886044]">Resume</h3>
            <p className="text-gray-700">Download PDF</p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Contact;
