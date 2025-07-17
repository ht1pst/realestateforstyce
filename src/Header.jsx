import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between px-6 md:px-20 h-20 fixed top-0 w-full z-50 shadow-md"
      style={{ background: 'rgba(181, 224, 238, 0.95)' }}
    >
      <div className="text-2xl font-extrabold text-[#1E3240] tracking-wide">LUGAR</div>

      <nav className="hidden md:flex space-x-10 font-semibold text-[#1E3240]">
        <a href="#home" className="hover:text-blue-800 transition">Home</a>
        <a href="#about" className="hover:text-blue-800 transition">About</a>
        <a href="#projects" className="hover:text-blue-800 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-800 transition">Contact</a>
      </nav>

      <button
        className="md:hidden text-[#1E3240] text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* ✅ MOBILE MENU FIXED BACKGROUND */}
  {menuOpen && (
  <div className="absolute top-20 right-4 w-64 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-4 space-y-3 flex flex-col items-start md:hidden animate-fadeIn text-[#1E3240] font-medium z-50">
    <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">About</a>
    <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">Projects</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-700 transition">Contact</a>
  </div>
)}



    </header>
  );
}

export default Header;
