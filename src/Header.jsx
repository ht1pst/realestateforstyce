import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between px-6 md:px-20 h-20 fixed top-0 w-full z-50"
      style={{ background: 'rgb(181, 224, 238)' }}
    >
   
      <div className="text-2xl font-extrabold text-[#1E3240]">LUGAR</div>

      
      <nav className="hidden md:flex space-x-10 font-semibold text-[#1E3240]">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </nav>

      <button
        className="md:hidden text-[#1E3240]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white p-5 flex flex-col space-y-4 md:hidden font-semibold text-[#1E3240]">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
