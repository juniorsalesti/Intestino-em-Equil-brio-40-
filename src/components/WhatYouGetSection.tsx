import React from 'react';
import { Coffee, Utensils, Moon, Apple, Soup, GlassWater, CalendarCheck, ArrowRight, Sparkles } from 'lucide-react';

interface WhatYouGetSectionProps {
  onCtaClick?: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onCtaClick }) => {
  const items = [
    { icon: Coffee, title: '20 cafés da manhã', desc: 'Preparações leves para despertar a digestão com suavidade.' },
    { icon: Utensils, title: '20 almoços', desc: 'Pratos completos com fibras, legumes e proteínas magras.' },
    { icon: Moon, title: '25 jantares', desc: 'Opções leves pensadas para evitar o estufamento ao deitar.' },
    { icon: Apple, title: '15 lanches rápidos', desc: 'Pausas práticas para manter a saciedade entre as refeições.' },
    { icon: Soup, title: '10 sopas e caldos', desc: 'Caldos reconfortantes, hidratantes e fáceis de digerir.' },
    { icon: GlassWater, title: '10 bebidas naturais', desc: 'Águas aromatizadas e sucos para estimular a hidratação.' },
    { icon: CalendarCheck, title: 'Planejamento de 21 dias', desc: 'A distribuição estratégica para não improvisar na cozinha.', featured: true },
  ];

  return (
    <section id="conteudo" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            O Conteúdo Completo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Tudo organizado para facilitar sua rotina.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-1">
            Receitas com ingredientes simples, acessíveis e pensadas especificamente para o conforto digestivo de quem tem mais de 40 anos.
          </p>
        </div>

        {/* Highlighted Pillars: 100 RECEITAS | 7 CAPÍTULOS | 21 DIAS */}
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl border border-[#16382B]/10 shadow-sm text-center mb-12">
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#16382B] block tabular-nums">
              100
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59B27]">
              Receitas
            </span>
          </div>
          <div className="space-y-1 border-x border-neutral-200">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#16382B] block tabular-nums">
              7
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59B27]">
              Capítulos
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#16382B] block tabular-nums">
              21
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59B27]">
              Dias
            </span>
          </div>
        </div>

        {/* Visual Composition: Culinary Photography + Compact 7-Item Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Real culinary visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <picture>
                <source srcSet="/images/pratos_receitas.webp" type="image/webp" />
                <img
                  src="/images/pratos_receitas.webp"
                  alt="Variedade de preparações e pratos naturais do eBook"
                  className="w-full h-72 sm:h-84 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/healthy_dishes_recipes_1793915829137.jpg';
                  }}
                />
              </picture>
              <div className="p-4 bg-[#16382B] text-white flex items-center justify-between text-xs">
                <span className="font-medium">Comida real e fácil de preparar</span>
                <span className="text-[#D8AF3B] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sem itens inacessíveis
                </span>
              </div>
            </div>
          </div>

          {/* Right: The 7 compact categories */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const isFull = item.featured;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    isFull
                      ? 'sm:col-span-2 bg-[#16382B] text-white border-[#C59B27]/40 shadow-md'
                      : 'bg-white text-neutral-800 border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isFull ? 'bg-[#C59B27]/20 text-[#D8AF3B]' : 'bg-[#16382B]/10 text-[#16382B]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4
                        className={`font-serif text-sm font-bold ${
                          isFull ? 'text-cream-50' : 'text-[#16382B]'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-xs mt-0.5 leading-relaxed ${
                          isFull ? 'text-cream-200/80' : 'text-neutral-600'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        {onCtaClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Quero Acessar as 100 Receitas e o Planejamento</span>
              <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
