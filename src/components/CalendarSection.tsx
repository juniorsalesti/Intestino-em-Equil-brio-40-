import React from 'react';
import { Calendar, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface CalendarSectionProps {
  onCtaClick?: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      weekNumber: 'Semana 1',
      title: 'ORGANIZE SUA ROTINA',
      subtitle: 'Estrutura inicial & Clareza',
      description:
        'Comece a estruturar suas refeições, conheça novas receitas e organize seus ingredientes.',
      details: [
        'Organização da lista de compras inteligente',
        'Primeiras substituições práticas na despensa',
        'Redução do improviso nas refeições principais',
      ],
      badge: 'Dias 01 a 07',
    },
    {
      weekNumber: 'Semana 2',
      title: 'AMPLIE SUA VARIEDADE',
      subtitle: 'Novos sabores & Flexibilidade',
      description:
        'Experimente novas combinações, diversifique seu cardápio e continue colocando o planejamento em prática.',
      details: [
        'Introdução de sopas, caldos e infusões naturais',
        'Alternativas leves para cafés da manhã e jantares',
        'Maior repertório culinário sem estresse',
      ],
      badge: 'Dias 08 a 14',
    },
    {
      weekNumber: 'Semana 3',
      title: 'CONSOLIDE SEUS HÁBITOS',
      subtitle: 'Autonomia & Continuidade',
      description:
        'Observe sua evolução, identifique suas receitas favoritas e reconheça os hábitos que deseja manter.',
      details: [
        'Registro de percepções no Diário dos 21 Dias',
        'Seleção dos pratos favoritos para a rotina permanente',
        'Autonomia alimentar para seguir em frente',
      ],
      badge: 'Dias 15 a 21',
    },
  ];

  return (
    <section id="jornada" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>O Caminho Passo a Passo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Imagine ter um plano para seguir durante os próximos 21 dias.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl mx-auto">
            Em vez de procurar soluções aleatórias todos os dias, você terá um roteiro alimentar organizado para seguir no seu ritmo.
          </p>
        </div>

        {/* 3 Step Stages Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF9] rounded-2xl border border-[#16382B]/15 hover:border-[#C59B27]/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header ribbon */}
                <div className="p-4 bg-[#16382B] text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8AF3B] block">
                      {step.badge}
                    </span>
                    <span className="font-serif text-base font-bold text-cream-50">
                      {step.weekNumber}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-serif font-bold text-sm text-[#D8AF3B]">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16382B] leading-snug">
                      {step.title}
                    </h3>
                    <span className="text-xs text-[#C59B27] font-semibold block mt-0.5">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-200/70 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom anchor */}
              <div className="p-4 bg-[#FAF8F5] border-t border-neutral-100 flex items-center gap-2 text-[11px] text-[#16382B] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Roteiro flexível para o seu dia a dia</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Disclaimer Box */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 bg-white rounded-2xl border border-[#C59B27]/30 shadow-xs flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#C59B27]/15 flex items-center justify-center shrink-0 text-[#16382B]">
            <Compass className="w-5 h-5 text-[#C59B27]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
              Uma Jornada de Organização e Hábitos Reais
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              O planejamento de 21 dias não é uma fórmula milagrosa, dieta restritiva ou promessa clínica de resultados instantâneos. É um método de apoio e organização alimentar, desenhado para incentivar pequenas escolhas diárias conscientes e sustentáveis no seu tempo.
            </p>
          </div>
        </div>

        {/* Optional Section CTA */}
        {onCtaClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98"
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
