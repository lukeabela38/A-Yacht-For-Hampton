"use client";

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-[1000] py-4">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-8">
        <div className="text-2xl font-bold text-[#2c3e50]">⚓ Hampton&apos;s Yacht</div>
        <ul className="flex list-none gap-8">
          <li>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="no-underline text-[#2c3e50] font-medium transition-colors hover:text-[#4682B4]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, "#features")}
              className="no-underline text-[#2c3e50] font-medium transition-colors hover:text-[#4682B4]"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="no-underline text-[#2c3e50] font-medium transition-colors hover:text-[#4682B4]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

