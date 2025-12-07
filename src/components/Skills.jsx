import { Code, Layout, Wrench, Database, Rocket,BadgeCheck } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} className="text-[#886044]" />,
      items: ["JavaScript", "PHP", "ASP/VB .NET", "SQL", "Data Structures"],
    },
    {
      title: "Frontend Development",
      icon: <Layout size={28} className="text-[#886044]" />,
      items: [
        "React",
        "Vue",
        "jQuery",
        "Tailwind CSS",
        "Bootstrap",
        "UI/UX Design",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={28} className="text-[#886044]" />,
      items: ["Git & GitHub", "Jira", "Azure", "WebSocket", "Node.js"],
    },
    {
      title: "DevOps & Software Skills",
      icon: <Rocket size={28} className="text-[#886044]" />,
      items: [
        "CI/CD Pipelines",
        "DevOps Basics",
        "Software Testing",
        "Project Management",
      ],
    },
    {
      title: "Data & Backend Skills",
      icon: <Database size={28} className="text-[#886044]" />,
      items: [
        "Oracle Database",
        "Relational Databases",
        "Data Warehouse & Mining",
      ],
    },
    {
      title: "Soft/ Basic Skills",
      icon: <BadgeCheck size={28} className="text-[#886044]" />,
      items: [
        "Effective Communication",
        "Teamwork & Leadership",
        "Time Management",
        "Microsoft 365",
      ],
    },
  ];

  return (
    <section id="skills" className="pt-20 px-6 bg-[#f7efe9]">
      <h2 className="text-4xl font-extrabold text-[#886044] text-center mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg border-b-4 border-[#886044] hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in"
          >
            <div className="flex items-center gap-3 mb-4">
              {cat.icon}
              <h3 className="text-2xl font-semibold text-[#886044]">
                {cat.title}
              </h3>
            </div>

            <ul className="text-gray-700 space-y-2">
              {cat.items.map((skill) => (
                <li key={skill} className="pl-2 border-l-2 border-[#c5a28a]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
