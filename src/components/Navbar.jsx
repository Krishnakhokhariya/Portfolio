import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#886044] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">Krishna Khokhariya</h1>

        <ul className="hidden md:flex gap-8 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="
                    relative text-white transition-all duration-300 
                    hover:text-black
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 
                    after:w-0 after:h-[2px] after:bg-[#c5a28a] after:transition-all after:duration-300
                    hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden bg-white p-1.5 rounded text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0 outline-none ring-0 hover:bg-[#ddc9bb]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={25}
              className="text-[#886044] outline-none ring-0 focus:outline-none"
            />
          ) : (
            <Menu
              size={25}
              className="text-[#886044] outline-none ring-0 focus:outline-none"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-[#886044] text-white p-3 space-y-3 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 rounded text-white hover:bg-white hover:text-[#c5a28a] 
                transition outline-none focus:outline-none focus:ring-0 active:ring-0"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
