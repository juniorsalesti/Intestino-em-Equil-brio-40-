import React from 'react';
import { ArrowRight, Waves, Clock, UtensilsCrossed, CalendarX2 } from 'lucide-react';

interface PainSectionProps {
  onCtaClick: () => void;
}

export const PainSection: React.FC<PainSectionProps> = ({ onCtaClick }) => {
  const painPoints = [
    {
      icon: Waves,
      title: 'Sensação frequente de barriga inchada.',
      description: 'Acordar com o corpo leve e terminar o dia com a barriga estufada, pesada e visivelmente desconfortável.',
    },
    {
      icon: Clock,
      title: 'Intestino irregular.',
      description: 'Dificuldade para manter uma frequência previsível, sentindo que o ritmo natural do corpo se perdeu.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Desconforto depois das refeições.',
      description: 'Sensação de digestão lenta ou peso excessivo logo após pratos que antes não causavam incômodo.',
    },
    {
      icon: CalendarX2,
      title: 'Dificuldade para manter uma alimentação organizada.',
      description: 'A correria e a falta de um roteiro prático levam ao improviso diário e a escolhas que pesam no organismo.',
    },
  ];

  return (
    <section id="dor" className="py-20 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            Identificação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Você também sente que sua rotina digestiva mudou?
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
        </div>

        {/* 4 Situations: Light & Clean 2x2 Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 p-6 sm:p-7 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-2xs hover:shadow-sm transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#16382B]/5 text-[#16382B] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#16382B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing takeaway — Concise and dignified */}
        <div className="max-w-2xl mx-auto text-center space-y-4 pt-4">
          <p className="font-serif text-lg sm:text-xl font-bold text-[#16382B] leading-relaxed">
            Você não precisa improvisar todos os dias. Precisa de um caminho organizado para começar.
          </p>
          <div>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B27] hover:text-[#16382B] transition-colors group cursor-pointer"
            >
              <span>Conhecer o plano de 21 dias</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
