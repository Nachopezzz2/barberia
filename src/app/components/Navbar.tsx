"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleLink("#inicio")}
          className="flex items-center gap-2 font-display text-xl tracking-widest uppercase text-[#c9a84c]"
        >
          <Scissors size={20} className="text-[#c9a84c]" />
          Acevedo's Barber
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="font-display tracking-wider text-sm uppercase text-[#f0f0f0] hover:text-[#c9a84c] transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/59892541471"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display tracking-wider text-sm uppercase px-5 py-2 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e2c06e] transition-colors"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f0f0f0]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#1a1a1a]">
          <ul className="flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="w-full text-left px-6 py-3 font-display tracking-wider text-sm uppercase text-[#f0f0f0] hover:text-[#c9a84c] hover:bg-[#1a1a1a] transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a
                href="https://wa.me/59892541471"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-display tracking-wider text-sm uppercase px-5 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e2c06e] transition-colors"
              >
                Reservar Turno
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
