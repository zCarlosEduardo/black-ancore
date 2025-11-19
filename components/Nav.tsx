'use client';

import { useState, useCallback, useEffect, memo, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#sorteios", label: "Sorteios" },
  { href: "#formulario", label: "Formulário" },
] as const;

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha menu ao pressionar ESC e gerencia overflow do body
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Detecção de seção ativa com Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50% 0px -50% 0px' } 
    );

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll suave para seção
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <section className="pt-8 xl:pt-8 lg:pt-18" role="banner">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-row items-center gap-8 xl:gap-12 p-4 justify-center w-full">
        <Image
          src="/AncoreLogo.svg"
          alt="Logo da Ancore"
          width={160}
          height={40}
          className="w-[140px] xl:w-40 h-auto"
          loading="eager"
          priority
          sizes="160px"
        />

        <nav className="flex space-x-4 border rounded-full border-red-600 backdrop-blur-sm bg-black/20" aria-label="Navegação principal">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-3 px-4 xl:py-4 xl:px-6 hover:text-white transition-colors text-base xl:text-lg ${
                activeSection === link.href ? "text-white font-semibold" : "text-gray-300"
              } ${index === 0 ? "ml-4 xl:ml-6" : ""} ${
                index === NAV_LINKS.length - 1 ? "mr-4 xl:mr-6" : ""
              }`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              aria-current={activeSection === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#formulario"
          onClick={(e) => handleSmoothScroll(e, "#formulario")}
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-12 rounded-full transition-all text-sm inline-block text-center hover:scale-105 active:scale-95 whitespace-nowrap"
          aria-label="Obter desconto"
        >
          QUERO MEU DESCONTO!
        </a>
      </div>

      {/* Mobile & Tablet Navigation */}
      <div className="lg:hidden flex flex-col items-center w-full px-4">
        {/* Header com Logo e Toggle */}
        <div className="flex items-center justify-between w-full p-4 border border-red-600 rounded-full backdrop-blur-sm bg-black/40 relative z-50">
          <Image
            src="/AncoreLogo.svg"
            alt="Logo da Ancore"
            width={128}
            height={32}
            className="w-24 md:w-32 h-auto"
            priority
            sizes="(max-width: 768px) 96px, 128px"
          />

          <button
            onClick={toggleMenu}
            className="text-sm bg-red-700 rounded-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-red-800 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <ChevronUp size={20} aria-hidden="true" />
            ) : (
              <ChevronDown size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Backdrop Overlay - Clica fora para fechar */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Menu Mobile & Tablet */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed top-24 left-4 right-4 z-50 transition-all duration-300 ease-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav 
            className="flex flex-col border border-red-600 rounded-2xl backdrop-blur-md bg-black/90 overflow-hidden shadow-2xl shadow-red-600/20"
            aria-label="Menu principal mobile"
          >
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`py-4 md:py-5 px-6 md:px-8 hover:bg-red-600/20 transition-colors text-base md:text-lg ${
                  activeSection === link.href 
                    ? "text-white font-semibold" 
                    : "text-gray-300"
                } ${
                  index !== NAV_LINKS.length - 1 
                    ? "border-b border-red-600/30" 
                    : ""
                }`}
                aria-current={activeSection === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            
            <div className="p-4 md:p-6">
              <a
                href="#formulario"
                onClick={(e) => handleSmoothScroll(e, "#formulario")}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 md:py-4 px-4 md:px-6 rounded-full transition-all text-sm md:text-base w-full inline-block text-center hover:scale-105 active:scale-95"
                aria-label="Obter desconto"
              >
                QUERO MEU DESCONTO!
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;