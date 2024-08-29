import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-3 w-full flex justify-center z-10">
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 sm:p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-xs sm:max-w-none">
        <Link href="#home" className="nav-item text-sm sm:text-base">
          Home
        </Link>
        <Link href="#projects" className="nav-item text-sm sm:text-base">
          Projects
        </Link>
        <Link href="#about" className="nav-item text-sm sm:text-base">
          About
        </Link>
        <Link href="#contact" className="nav-item text-sm sm:text-base">
          Contact
        </Link>
      </nav>
    </div>
  );
};
