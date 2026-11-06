import React from 'react';
import { Lightbulb, CalendarDays, Compass, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  const problemCards = [
    {
      icon: Lightbulb,
      title: 'Falta de ideias para variar as refeições',
      description:
        'Cansado de preparar sempre os mesmos pratos por não saber como introduzir ingredientes diferentes de forma saborosa, acessível e descomplicada.',
      number: '01',
    },
    {
      icon: CalendarDays,
      title: 'Dificuldade para organizar o cardápio',
      description:
        'A rotina corrida faz com que as decisões fiquem para a última hora, gerando improvisos, compras desnecessárias no mercado e desperdício de alimentos.',
      number: '02',
    },
    {
      icon: Compass,
      title: 'Desejo de adotar hábitos alimentares mais equilibrados',
      description:
        'A vontade real de se alimentar com mais qualidade após os 40, buscando refeições leves e bem distribuídas, mas sem recorrer a dietas restritivas e chatas.',
      number: '03',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            A Transição Após os 40 Anos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-[#16382B] leading-tight text-balance">
            Depois dos 40, sua alimentação merece ainda mais atenção.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed pt-2">
            A correria, os hábitos repetidos e a falta de planejamento podem dificultar uma alimentação variada e equilibrada.
          </p>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Muitas vezes, sabemos que precisamos cuidar melhor do que comemos, mas falta inspiração para preparar refeições simples, gostosas e que realmente façam parte da nossa rotina. Foi pensando nisso que nasceu o <strong className="text-[#16382B] font-semibold">Intestino em Equilíbrio 40+</strong>.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FCFBF9] p-8 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#16382B]/5 text-[#16382B] group-hover:bg-[#16382B] group-hover:text-[#D8AF3B] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xl font-bold text-neutral-300 group-hover:text-[#C59B27] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-xl font-bold text-[#16382B] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-6 border-t border-[#16382B]/5 flex items-center gap-2 text-xs font-medium text-[#C59B27]">
                  <span>Solução prática incluída no guia</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition prompt */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-600 mb-3">
            Você não precisa de restrições radicais — apenas de um método organizado e receitas que funcionam.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#16382B] hover:text-[#C59B27] transition-colors"
          >
            <span>Ver tudo o que o material oferece</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
