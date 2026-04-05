import { Scissors, Clock, MapPin, Phone, Instagram } from "lucide-react";
import Navbar from "./components/Navbar";

const services = [
  {
    name: "Corte",
    description: "Corte clásico o moderno con máquina y tijera, terminado prolijo.",
    icon: "✂",
  },
  {
    name: "Fade",
    description: "Degradado perfecto adaptado a tu estilo, desde low fade hasta skin fade.",
    icon: "⚡",
  },
  {
    name: "Barba",
    description: "Arreglo y perfilado de barba con navaja para un look impecable.",
    icon: "🪒",
  },
  {
    name: "Corte + Barba",
    description: "Combo completo: corte personalizado más arreglo de barba.",
    icon: "💈",
  },
  {
    name: "Diseños",
    description: "Diseños y líneas personalizadas para destacar tu estilo.",
    icon: "✦",
  },
  {
    name: "Cejas",
    description: "Perfilado y definición de cejas para un acabado perfecto.",
    icon: "◈",
  },
];

const galleryPlaceholders = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="font-display tracking-[0.3em] text-[#c9a84c] text-sm uppercase">
              Bruno Acevedo
            </span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>

          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-widest uppercase leading-none text-[#f0f0f0]">
            Acevedo&apos;s
            <br />
            <span className="text-[#c9a84c]">Barber</span>
          </h1>

          <p className="text-[#a0a0a0] text-lg max-w-md leading-relaxed">
            Cortes, diseños y barba. Tu imagen, nuestra pasión.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="https://wa.me/59892541471"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display tracking-widest text-sm uppercase px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e2c06e] transition-colors"
            >
              Reservar Turno
            </a>
            <a
              href="https://www.instagram.com/acevedosbarber/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display tracking-widest text-sm uppercase px-8 py-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors"
            >
              Ver Instagram
            </a>
          </div>

          <div className="flex items-center gap-2 mt-6 text-[#707070] text-sm">
            <MapPin size={14} className="text-[#c9a84c]" />
            <span>8 De octubre 2323 bis</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#505050]">
          <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#505050] to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <Scissors size={16} className="text-[#c9a84c]" />
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-widest uppercase text-[#f0f0f0]">
              Servicios
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-[#111111] border border-[#1a1a1a] p-8 hover:border-[#c9a84c] transition-colors group"
              >
                <div className="text-3xl mb-4 text-[#c9a84c]">{s.icon}</div>
                <h3 className="font-display text-xl tracking-wider uppercase text-[#f0f0f0] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {s.name}
                </h3>
                <p className="text-[#707070] text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/59892541471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display tracking-widest text-sm uppercase px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e2c06e] transition-colors"
            >
              Consultar Precios
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <Instagram size={16} className="text-[#c9a84c]" />
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-widest uppercase text-[#f0f0f0] mb-4">
              Galería
            </h2>
            <p className="text-[#707070] text-sm">
              Seguinos en{" "}
              <a
                href="https://www.instagram.com/acevedosbarber/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                @acevedosbarber
              </a>{" "}
              para ver todos nuestros trabajos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryPlaceholders.map((i) => (
              <a
                key={i}
                href="https://www.instagram.com/acevedosbarber/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-[#111111] border border-[#1a1a1a] hover:border-[#c9a84c] transition-colors group overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#2a2a2a] group-hover:text-[#c9a84c] transition-colors">
                  <Scissors size={32} />
                  <span className="font-display text-xs tracking-widest uppercase">Ver en Instagram</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/acevedosbarber/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display tracking-widest text-sm uppercase px-8 py-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors"
            >
              <Instagram size={16} />
              Ver más en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <Clock size={16} className="text-[#c9a84c]" />
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-widest uppercase text-[#f0f0f0]">
              Contacto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hours */}
            <div className="bg-[#111111] border border-[#1a1a1a] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-[#c9a84c]" />
                <h3 className="font-display text-xl tracking-widest uppercase text-[#f0f0f0]">
                  Horarios
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-[#1a1a1a]">
                  <span className="text-[#a0a0a0] text-sm font-display tracking-wider uppercase">
                    Lun - Vie
                  </span>
                  <span className="text-[#c9a84c] font-display tracking-wider text-sm">
                    10:00 - 19:00
                  </span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-[#1a1a1a]">
                  <span className="text-[#a0a0a0] text-sm font-display tracking-wider uppercase">
                    Sábado
                  </span>
                  <span className="text-[#c9a84c] font-display tracking-wider text-sm">
                    10:00 - 17:00
                  </span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-[#a0a0a0] text-sm font-display tracking-wider uppercase">
                    Domingo
                  </span>
                  <span className="text-[#505050] font-display tracking-wider text-sm">
                    Cerrado
                  </span>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="bg-[#111111] border border-[#1a1a1a] p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={20} className="text-[#c9a84c]" />
                <h3 className="font-display text-xl tracking-widest uppercase text-[#f0f0f0]">
                  Dónde Estamos
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display tracking-wider text-sm uppercase text-[#707070] mb-0.5">
                      Dirección
                    </p>
                    <p className="text-[#f0f0f0] text-sm">8 De octubre 2323 bis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display tracking-wider text-sm uppercase text-[#707070] mb-0.5">
                      Teléfono / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/59892541471"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f0f0f0] text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      092 541 471
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display tracking-wider text-sm uppercase text-[#707070] mb-0.5">
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/acevedosbarber/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f0f0f0] text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      @acevedosbarber
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/59892541471"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 font-display tracking-widest text-sm uppercase px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e2c06e] transition-colors"
              >
                <Phone size={14} />
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#505050] text-xs">
          <div className="flex items-center gap-2 font-display tracking-widest uppercase text-[#c9a84c]">
            <Scissors size={14} />
            Acevedo&apos;s Barber
          </div>
          <p>© {new Date().getFullYear()} Bruno Acevedo. Todos los derechos reservados.</p>
          <a
            href="https://www.instagram.com/acevedosbarber/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9a84c] transition-colors"
          >
            @acevedosbarber
          </a>
        </div>
      </footer>
    </>
  );
}
