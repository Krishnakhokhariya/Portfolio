import { GraduationCap, Briefcase, Code2 } from "lucide-react"

function About() {
  return (
    <section
      id="about"
      className="pt-20 px-6 bg-[#f7efe9]"
    >
      <h2 className="text-4xl font-extrabold text-[#886044] text-center mb-12 tracking-wide">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <div
          className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#886044] animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={28} className="text-[#886044]" />
            <h3 className="text-2xl font-semibold text-[#886044]">Education</h3>
          </div>

          <ul className="space-y-3 text-gray-700 leading-6">
            <li>
              <strong>B.Sc. IT</strong>, Veer Narmad South Gujarat University  
              <br /> <span className="text-sm text-gray-500">2020–2023 - Surat, India</span>
            </li>

            <li>
              <strong>Graduate Diploma in IT</strong>, Wellington Institute of Technology (WelTec)  
              <br /> <span className="text-sm text-gray-500">2024–2025 - Wellington, NZ</span>
            </li>

            <li>
              <strong>Capstone:</strong> Contributed to OpenWebUI (UI/UX development)
            </li>
          </ul>
        </div>

        <div
          className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#886044] animate-fade-in delay-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase size={28} className="text-[#886044]" />
            <h3 className="text-2xl font-semibold text-[#886044]">Experience</h3>
          </div>

          <ul className="space-y-3 text-gray-700 leading-6">
            <li>
              <strong>Frontend Development Intern</strong>, Unified Mentor  
              <br /> <span className="text-sm text-gray-500">Oct 2025 – Present</span>
            </li>

            <li>
              <strong>Web Development Intern</strong>, Twinnet Technologies  
              <br /> <span className="text-sm text-gray-500">2022–2024 - India</span>
            </li>

            <li>
              Hands-on experience with React, Firebase, UI/UX, component structure & responsive design.
            </li>
          </ul>
        </div>

        <div
          className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#886044] md:col-span-2 animate-fade-in delay-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code2 size={28} className="text-[#886044]" />
            <h3 className="text-2xl font-semibold text-[#886044]">Projects & Goals</h3>
          </div>

          <p className="text-gray-700 leading-7">
            I have built several real-world applications including a Weather App,
            Realtime Chat App, SportsBuddy, and AppointMe. These projects helped me
            strengthen my understanding of modern frontend development, UI structure,
            Firebase integration, and user-focused design workflows.
            <br /><br />
            I am now seeking an opportunity to apply my knowledge in a professional
            environment and contribute to impactful, real-world projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
