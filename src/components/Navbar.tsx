import React, { useState, useEffect } from 'react';
import { Sliders, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConfig: () => void;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfig, onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Jornada 21 Dias', href: '#jornada' },
    { label: 'O Que Você Recebe', href: '#conteudo' },
    { label: '4 Bônus', href: '#bonus' },
    { label: 'Oferta', href: '#planos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#16382B]/10 py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-xs py-4 border-b border-[#16382B]/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#inicio"
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#16382B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] inline-block" />
          <span>Intestino em Equilíbrio 40+</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-semibold text-[#16382B]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#16382B] hover:text-[#C59B27] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + discrete config trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick config button for admin */}
          <button
            onClick={onOpenConfig}
            title="Configurar Link de Checkout e Preço"
            className="p-2 text-[#16382B]/60 hover:text-[#16382B] hover:bg-[#16382B]/5 rounded-lg transition-colors"
            aria-label="Abrir configurações de venda"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#16382B] hover:bg-[#1f4e3c] rounded-lg transition-all shadow-xs hover:shadow-md active:scale-98 whitespace-nowrap shrink-0"
          >
            <span>Quero Começar</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D8AF3B]" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#16382B] hover:bg-[#16382B]/5 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#16382B]/10 bg-[#FAF8F5] px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#16382B] hover:text-[#C59B27] py-1 border-b border-[#16382B]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCtaClick();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#16382B] text-white rounded-lg shadow-sm"
              >
                Quero Começar Minha Jornada
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
