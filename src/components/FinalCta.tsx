import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 md:py-28 bg-[#16382B] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#296650]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center space-y-8">
        
        {/* Editorial Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8AF3B] bg-white/10 px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Sua Escolha de Hoje</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight text-balance">
          Você pode continuar improvisando suas refeições ou começar a organizar uma nova rotina.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed">
          Os próximos 21 dias podem ser uma oportunidade para prestar mais atenção à sua alimentação, experimentar novas receitas e construir hábitos que façam sentido para você.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 bg-[#C59B27] hover:bg-[#d8af3b] text-[#16382B] text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>QUERO COMEÇAR MINHA JORNADA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Reassurance items */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-cream-200/80">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D8AF3B]" />
            <span>Acesso Digital Imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D8AF3B]" />
            <span>Planejamento de 21 Dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D8AF3B]" />
            <span>4 Bônus Exclusivos Inclusos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
