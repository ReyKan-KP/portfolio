import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-3 w-full flex justify-center z-10">
      <nav className="flex gap-4 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link href="#contact" className="nav-item">
          Contact
        </Link>
      </nav>
    </div>
  );
};
