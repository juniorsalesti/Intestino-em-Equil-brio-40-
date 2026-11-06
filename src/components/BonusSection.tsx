import React from 'react';
import { Gift, BookMarked, ShoppingBag, Coffee, Sunrise, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Bonus } from '../types';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  const bonuses: Bonus[] = [
    {
      id: 1,
      title: 'BÔNUS 1 — DIÁRIO DOS 21 DIAS',
      subtitle: 'Acompanhamento pessoal & Auto-observação',
      description:
        'Acompanhe suas refeições, registre seus hábitos e observe sua evolução ao longo dos 21 dias.',
      badge: 'Ferramenta 1',
      highlights: [
        'Anotação diária das sensações e saciedade',
        'Registro de hábitos e consumo de água',
        'Espaço para reflexão sem cobranças',
      ],
    },
    {
      id: 2,
      title: 'BÔNUS 2 — LISTA DE MERCADO INTELIGENTE',
      subtitle: 'Compras direcionadas & Zero desperdício',
      description:
        'Organize suas compras e facilite a preparação das refeições com tudo o que você realmente precisa.',
      badge: 'Ferramenta 2',
      highlights: [
        'Separada por categorias do supermercado e feira',
        'Planejamento de quantidades certas',
        'Mais economia e menos compras esquecidas',
      ],
    },
    {
      id: 3,
      title: 'BÔNUS 3 — GUIA DOS CHÁS E INFUSÕES',
      subtitle: 'Conforto digestivo & Hidratação',
      description:
        '15 preparações com ingredientes, modo de preparo e orientações conscientes de consumo.',
      badge: 'Ferramenta 3',
      highlights: [
        '15 preparações naturais e aromáticas',
        'Técnicas corretas de infusão e extração',
        'Orientações de momentos de consumo',
      ],
    },
    {
      id: 4,
      title: 'BÔNUS 4 — MANHÃS LEVES',
      subtitle: '15 Cafés da manhã extras',
      description:
        '15 cafés da manhã extras para ampliar suas opções e nunca faltar inspiração para começar o dia.',
      badge: 'Ferramenta 4',
      highlights: [
        '15 receitas matinais exclusivas',
        'Preparo rápido antes dos compromissos',
        'Mais variedade para suas manhãs',
      ],
    },
  ];

  const getBonusIcon = (id: number) => {
    switch (id) {
      case 1: return BookMarked;
      case 2: return ShoppingBag;
      case 3: return Coffee;
      case 4: return Sunrise;
      default: return Gift;
    }
  };

  return (
    <section id="bonus" className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <Gift className="w-3.5 h-3.5" />
            <span>4 Bônus Exclusivos para Acompanhar Sua Jornada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Você não recebe apenas receitas. Recebe ferramentas para organizar sua rotina.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Esses materiais foram desenhados como suportes práticos para que você consiga planejar a semana, fazer as compras certas e acompanhar seus passos sem desistir no caminho.
          </p>
        </div>

        {/* 3D Bundle Mockup Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
          <div className="relative">
            <img
              src="https://i.ibb.co/yFB2Q5Bg/Cole-o-Verde-de-Bem-Estar.png"
              alt="Coleção de Ferramentas e Bônus Intestino em Equilíbrio 40+"
              className="w-full h-auto object-cover aspect-16/9 group-hover:scale-[1.01] transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/src/assets/images/bonus_bundle_mockup_1793915830065.jpg';
              }}
            />
            
            <div className="p-4 sm:p-5 bg-[#16382B] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#D8AF3B]" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="block font-serif text-base sm:text-lg font-bold text-cream-50">
                    Kit de Suporte para a Jornada de 21 Dias
                  </span>
                  <span className="text-xs text-cream-200/80">
                    Os 4 materiais acompanham seu acesso sem custo adicional
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D8AF3B] bg-white/10 px-3.5 py-1.5 rounded-lg whitespace-nowrap">
                ✓ 100% Incluídos na Oferta
              </span>
            </div>
          </div>
        </div>

        {/* 4 Detailed Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bonuses.map((bonus) => {
            const Icon = getBonusIcon(bonus.id);
            return (
              <div
                key={bonus.id}
                className="bg-[#FCFBF9] p-7 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
                        {bonus.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#16382B] bg-[#C59B27]/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Incluído
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#16382B] mb-1">
                    {bonus.title}
                  </h3>
                  <span className="text-xs text-[#C59B27] font-medium block mb-3">
                    {bonus.subtitle}
                  </span>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {bonus.description}
                  </p>

                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-neutral-200/60 space-y-2">
                    {bonus.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#16382B] stroke-[2.5] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Material digital em PDF</span>
                  <span className="font-semibold text-[#16382B]">Disponível Imediatamente</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98"
          >
            <span>Quero Receber os 4 Bônus com a Jornada</span>
            <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
