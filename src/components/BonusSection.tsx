import React from 'react';
import { Gift, BookMarked, ShoppingBag, Coffee, Sunrise, ArrowRight, Sparkles } from 'lucide-react';

interface BonusSectionProps {
  onCtaClick?: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  const bonuses = [
    {
      num: '1',
      icon: BookMarked,
      title: 'Diário dos 21 Dias',
      desc: 'Acompanhe suas refeições, registre seus hábitos e observe sua evolução com clareza.',
    },
    {
      num: '2',
      icon: ShoppingBag,
      title: 'Lista de Mercado Inteligente',
      desc: 'Organize suas compras e facilite a preparação das refeições sem desperdício.',
    },
    {
      num: '3',
      icon: Coffee,
      title: 'Guia dos Chás e Infusões',
      desc: '15 preparações aromáticas para estimular o conforto digestivo e a hidratação diária.',
    },
    {
      num: '4',
      icon: Sunrise,
      title: 'Manhãs Leves',
      desc: '15 cafés da manhã extras para variar a rotina e começar o dia com leveza.',
    },
  ];

  return (
    <section id="bonus" className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <Gift className="w-3.5 h-3.5" />
            <span>Materiais Complementares</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            E sua jornada fica ainda mais completa.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-1">
            Ferramentas pensadas para apoiar seu planejamento, evitar o improviso e facilitar a colocação do plano em prática.
          </p>
        </div>

        {/* 4 Bonuses Hero Mockup Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group max-w-4xl mx-auto">
          <div className="relative">
            <picture>
              <source srcSet="/images/bundle_bonus.webp" type="image/webp" />
              <img
                src="/images/bundle_bonus.webp"
                alt="Coleção de Ferramentas e Bônus Intestino em Equilíbrio 40+"
                className="w-full h-auto object-cover aspect-16/9 group-hover:scale-[1.01] transition-transform duration-700"
                width={900}
                height={506}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/yFB2Q5Bg/Cole-o-Verde-de-Bem-Estar.png';
                }}
              />
            </picture>
            
            <div className="p-4 bg-[#16382B] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D8AF3B]" />
                <span className="font-semibold text-cream-50">4 Materiais de Apoio em PDF para Download Imediato</span>
              </div>
              <span className="text-[#D8AF3B] font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md">
                ✓ 100% Inclusos
              </span>
            </div>
          </div>
        </div>

        {/* 4 Compact Bonus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {bonuses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="bg-white p-5 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#16382B]/5 text-[#16382B] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded-md">
                      Bônus {b.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base font-bold text-[#16382B] leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-100 text-[11px] font-medium text-[#16382B]/70">
                  Acesso digital imediato
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {onCtaClick && (
          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Quero Receber os 4 Bônus com Minha Jornada</span>
              <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
