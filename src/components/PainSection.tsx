import React from 'react';
import { AlertCircle, Clock, Utensils, BatteryLow, RefreshCcw, ArrowRight } from 'lucide-react';

interface PainSectionProps {
  onCtaClick: () => void;
}

export const PainSection: React.FC<PainSectionProps> = ({ onCtaClick }) => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Barriga inchada',
      description:
        'Você acorda com uma sensação e termina o dia com a barriga pesada, estufada e desconfortável.',
      tag: 'Desconforto Diário',
    },
    {
      icon: Clock,
      title: 'Intestino irregular',
      description:
        'Nem sempre consegue manter uma rotina intestinal previsível e confortável.',
      tag: 'Falta de Ritmo',
    },
    {
      icon: Utensils,
      title: 'Desconforto depois das refeições',
      description:
        'Algumas refeições parecem deixar você mais pesado e desconfortável.',
      tag: 'Digestão Lenta',
    },
    {
      icon: BatteryLow,
      title: 'Falta de disposição',
      description:
        'A alimentação desorganizada acaba dificultando uma rotina mais equilibrada.',
      tag: 'Energia Baixa',
    },
    {
      icon: RefreshCcw,
      title: 'Tentativas frustradas',
      description:
        'Você já tentou mudar sua alimentação, mas sente dificuldade para manter novos hábitos.',
      tag: 'Inconsistência',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            Identificação Imediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Você também sente que seu intestino mudou depois dos 40?
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Com o passar dos anos, o organismo responde de maneira diferente ao que comemos. Situações que antes passavam despercebidas hoje trazem incômodo constante:
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === 4;
            return (
              <div
                key={idx}
                className={`bg-[#FCFBF9] p-6 sm:p-7 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#16382B]/5 text-[#16382B] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#16382B]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C59B27] bg-[#C59B27]/10 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#16382B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Situação comum após os 40</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy Closing Bridge */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 bg-[#16382B] text-white rounded-2xl shadow-xl text-center space-y-4">
          <p className="font-serif text-xl sm:text-2xl font-bold text-cream-50 leading-snug">
            Você não precisa transformar sua vida de uma vez. Precisa começar com um caminho organizado e possível de seguir.
          </p>
          <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl mx-auto leading-relaxed">
            O problema não é falta de força de vontade. É tentar mudar sem ter um roteiro claro que guie suas escolhas na cozinha dia após dia.
          </p>
          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8AF3B] hover:text-white transition-colors"
            >
              <span>Conhecer o caminho de 21 dias</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
