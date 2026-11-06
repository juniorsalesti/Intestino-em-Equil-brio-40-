import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface CalendarSectionProps {
  onCtaClick?: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      weekNumber: 'Semana 1',
      title: 'SEMANA 1 — ORGANIZE',
      action: 'Comece a estruturar suas refeições.',
      description: 'Organize a despensa e conheça as primeiras substituições inteligentes para eliminar a sensação de peso.',
      badge: 'Dias 01 a 07',
    },
    {
      weekNumber: 'Semana 2',
      title: 'SEMANA 2 — DIVERSIFIQUE',
      action: 'Experimente novas receitas e combinações.',
      description: 'Varie sabores com sopas, caldos e preparos nutritivos que estimulam naturalmente a digestão.',
      badge: 'Dias 08 a 14',
    },
    {
      weekNumber: 'Semana 3',
      title: 'SEMANA 3 — CONSOLIDE',
      action: 'Observe sua rotina e identifique os hábitos que deseja manter.',
      description: 'Reconheça os pratos que mais trouxeram bem-estar e incorpore uma rotina leve e duradoura.',
      badge: 'Dias 15 a 21',
    },
  ];

  return (
    <section id="jornada" className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>O Roteiro da Mudança</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Um plano organizado para os próximos 21 dias.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-1">
            Chega de improviso. Um caminho passo a passo dividido em três etapas claras para colocar em prática sem complicar sua rotina.
          </p>
        </div>

        {/* Visual Content Grid: Mockup + 3 Connected Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          
          {/* Left: Planning Mockup Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <picture>
                  <source srcSet="/images/mockup_livro.webp" type="image/webp" />
                  <img
                    src="/images/mockup_livro.webp"
                    alt="Mockup do Planejamento de 21 Dias Intestino em Equilíbrio 40+"
                    className="w-full h-auto object-contain aspect-4/3 p-3 bg-[#FAF8F5]"
                    width={500}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Rk5JDNqW/Mockup-do-Livro-Intestino-em-Equil-brio-40.png';
                    }}
                  />
                </picture>
                <div className="p-3 bg-[#16382B] text-white flex items-center justify-between text-xs">
                  <span className="font-medium">Cronograma 21 Dias em PDF</span>
                  <span className="text-[#D8AF3B] font-semibold">1 Dia por Página</span>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-[#16382B]/10 flex items-center gap-1.5 text-xs font-semibold text-[#16382B]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Zero improviso</span>
              </div>
            </div>
          </div>

          {/* Right: The 3 Visually Connected Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#16382B]/10 hover:border-[#C59B27]/50 shadow-2xs hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-4">
                  {/* Step indicator */}
                  <div className="w-10 h-10 rounded-xl bg-[#16382B] text-[#D8AF3B] font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                    0{idx + 1}
                  </div>

                  {/* Step content */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#16382B]">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#C59B27] bg-[#C59B27]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        {step.badge}
                      </span>
                    </div>

                    <p className="font-medium text-xs sm:text-sm text-[#16382B]">
                      {step.action}
                    </p>

                    <p className="text-xs text-neutral-600 leading-relaxed pt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Quero Seguir Essa Jornada de 21 Dias</span>
              <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
