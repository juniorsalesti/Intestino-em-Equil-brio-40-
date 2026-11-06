import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { OfferSettings } from '../types';

interface MobileStickyBarProps {
  settings: OfferSettings;
  onCtaClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  settings,
  onCtaClick,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#16382B]/15 px-3 py-2 shadow-2xl animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="leading-tight shrink-0 pl-1">
          <span className="block text-[10px] uppercase font-bold text-[#C59B27] tracking-wider">
            A partir de
          </span>
          <span className="font-serif text-sm font-bold text-[#16382B]">
            R$ {settings.priceOffer1 ? settings.priceOffer1.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '17,00'}
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#16382B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md active:scale-98"
        >
          <span>QUERO COMEÇAR AGORA</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D8AF3B]" />
        </button>
      </div>
    </div>
  );
};
