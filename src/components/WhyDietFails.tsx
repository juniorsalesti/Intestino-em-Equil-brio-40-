import React from 'react';
import { HelpCircle, Repeat, ShoppingCart, CalendarX, ZapOff, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface WhyDietFailsProps {
  onCtaClick: () => void;
}

export const WhyDietFails: React.FC<WhyDietFailsProps> = ({ onCtaClick }) => {
  const obstacles = [
    {
      icon: HelpCircle,
      text: 'Não saber quais refeições preparar no dia a dia.',
    },
    {
      icon: Repeat,
      text: 'Repetir sempre os mesmos alimentos por falta de ideias.',
    },
    {
      icon: ShoppingCart,
      text: 'Não ter os ingredientes certos organizados na despensa.',
    },
    {
      icon: CalendarX,
      text: 'Não saber como distribuir as refeições ao longo da semana.',
    },
    {
      icon: ZapOff,
      text: 'Começar mudanças empolgado e abandonar poucos dias depois.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: The Problem Breakdown (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
                A Raiz do Problema
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16382B] leading-tight text-balance">
                O problema não é apenas saber o que comer. É conseguir manter uma rotina.
              </h2>
              <div className="w-16 h-0.5 bg-[#C59B27]" />
            </div>

            <p className="text-base text-neutral-700 leading-relaxed">
              A maioria das pessoas já sabe que precisa comer mais vegetais, beber água e evitar ultraprocessados. O grande desafio real é transformar essa intenção em uma prática diária simples e que não sobrecarregue sua mente.
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Dificuldades comuns enfrentadas na prática:
              </span>
              <ul className="space-y-2.5">
                {obstacles.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#16382B]/10 text-xs sm:text-sm text-neutral-800"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#16382B]/10 text-[#16382B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: The Bridge to the Solution (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border-2 border-[#16382B]/15 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                  A Resposta Estruturada
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B]">
                  Por que a jornada de 21 dias funciona?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Foi pensando nessa dificuldade que desenvolvemos o <strong className="text-[#16382B] font-semibold">Intestino em Equilíbrio 40+</strong>: um material que reúne planejamento, receitas e ferramentas práticas para ajudar você a organizar sua alimentação durante 21 dias.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16382B] shrink-0 mt-0.5" />
                  <span><strong>Elimina a dúvida diária:</strong> você acorda sabendo exatamente o que vai preparar.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16382B] shrink-0 mt-0.5" />
                  <span><strong>Sem radicalismos:</strong> foco em colocar variedade no prato, não em passar fome.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16382B] shrink-0 mt-0.5" />
                  <span><strong>Construção de consistência:</strong> tempo ideal para fixar hábitos que permanecem.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  onClick={onCtaClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98"
                >
                  <span>Ver Como Funciona o Plano de 21 Dias</span>
                  <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
