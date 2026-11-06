import React from 'react';
import { Apple, Calendar, ShoppingCart, ShieldCheck, HeartPulse, Sparkles, Compass, ArrowRight } from 'lucide-react';

interface DesiredBenefitsProps {
  onCtaClick: () => void;
}

export const DesiredBenefits: React.FC<DesiredBenefitsProps> = ({ onCtaClick }) => {
  const benefits = [
    {
      icon: Apple,
      title: 'Uma alimentação mais variada',
      desc: 'Saia da repetição de sempre e descubra novos sabores, ingredientes e combinações naturais.',
    },
    {
      icon: Calendar,
      title: 'Maior organização das refeições',
      desc: 'Acorde sabendo o que vai comer, sem a ansiedade de ter que improvisar pratos na correria.',
    },
    {
      icon: ShoppingCart,
      title: 'Mais facilidade para planejar compras',
      desc: 'Vá ao mercado ou à feira com um guia objetivo, economizando tempo e evitando desperdício.',
    },
    {
      icon: ShieldCheck,
      title: 'Hábitos que favoreçam o conforto digestivo',
      desc: 'Aprenda a compor pratos e infusões que contribuam para uma digestão mais suave e agradável.',
    },
    {
      icon: HeartPulse,
      title: 'Mais atenção à regularidade intestinal',
      desc: 'Distribua fibras e hidratação de forma equilibrada para apoiar o ritmo natural do seu corpo.',
    },
    {
      icon: Sparkles,
      title: 'Maior consciência sobre suas escolhas alimentares',
      desc: 'Observe como cada alimento faz você se sentir e aprenda a priorizar o que te faz bem.',
    },
    {
      icon: Compass,
      title: 'Uma rotina de cuidados mais consistente',
      desc: 'Substitua dietas passageiras por um método que você consegue sustentar a longo prazo.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            Objetivos & Possibilidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            O que você pode começar a construir com essa jornada?
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Mais do que números na balança, esta jornada foca no que realmente transforma o seu bem-estar diário:
          </p>
        </div>

        {/* 7 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 6;
            return (
              <div
                key={idx}
                className={`bg-[#FCFBF9] p-6 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#FCFBF9] via-[#FAF8F5] to-[#F5EFE3]' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#16382B]/10 text-[#16382B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16382B] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-[#C59B27]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Meta da jornada de 21 dias</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition prompt */}
        <div className="mt-14 p-8 bg-gradient-to-r from-[#16382B] to-[#1E4D3B] text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
              Dê o primeiro passo rumo a uma rotina mais leve.
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80">
              Acesso completo e imediato ao método Intestino em Equilíbrio 40+.
            </p>
          </div>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C59B27] hover:bg-[#d8af3b] text-[#16382B] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-98 whitespace-nowrap"
          >
            <span>Quero Fazer Parte</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
