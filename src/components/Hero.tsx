import React from 'react';
import { ArrowRight, Check, Sparkles, Shield, Compass } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F3EFE7]">
      {/* Background ambient lighting */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-[#C59B27]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-12 w-96 h-96 bg-[#16382B]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Emotionally Charged & Direct Sales Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#16382B]/90 bg-[#16382B]/5 px-3.5 py-1.5 rounded-full border border-[#16382B]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              <span>Jornada de 21 Dias · Saúde Digestiva 40+</span>
            </div>

            {/* Main Headline — Direct pain question */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-bold text-[#16382B] leading-[1.12] tracking-tight text-balance">
                Sua barriga vive inchada? Seu intestino parece não funcionar como antes?
              </h1>
              <p className="font-serif text-lg sm:text-xl text-[#C59B27] font-medium leading-snug">
                Depois dos 40, cuidar da alimentação pode fazer diferença na sua rotina.
              </p>
            </div>

            {/* Subtitle / Core Transformation */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
              Conheça o <strong className="text-[#16382B] font-semibold">Intestino em Equilíbrio 40+</strong>: uma jornada de 21 dias com planejamento alimentar, 100 receitas práticas e ferramentas para ajudar você a melhorar seus hábitos, buscar mais conforto digestivo e construir uma rotina intestinal mais regular.
            </p>

            {/* Complement / Empathy Bridge */}
            <div className="p-4 bg-white/80 rounded-xl border border-[#16382B]/10 shadow-2xs space-y-1">
              <p className="text-sm font-semibold text-[#16382B]">
                Chega de improvisar cada refeição e não saber por onde começar.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Tenha um plano organizado para colocar em prática, um dia de cada vez.
              </p>
            </div>

            {/* CTA Block */}
            <div className="pt-2 space-y-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-sm sm:text-base font-bold tracking-wide rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Quero acesso agora — R$ 17</span>
                <span className="text-[#D8AF3B] text-lg font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>

              {/* 4 Small Indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-[#16382B] pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C59B27] stroke-[2.5]" />
                  <span>Planejamento de 21 dias</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C59B27] stroke-[2.5]" />
                  <span>100 receitas organizadas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C59B27] stroke-[2.5]" />
                  <span>4 bônus exclusivos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C59B27] stroke-[2.5]" />
                  <span>Acesso digital</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor — Vicente Valença in kitchen + eBook Mockup (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo of Vicente in warm kitchen */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://i.ibb.co/tpXt00Mm/Homem-sorrindo-com-livro-de-receitas-intestinais.png"
                  alt="Vicente Valença sorrindo com livro de receitas intestinais"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-auto"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to local high-res hero asset if external link fails
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/vicente_hero_1793915827175.jpg';
                  }}
                />
                
                {/* Identification caption */}
                <div className="p-3.5 bg-[#FCFBF9] border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-serif font-bold text-[#16382B] block">Vicente Valença</span>
                    <span className="text-[11px] text-neutral-500">Apresentador do projeto Intestino em Equilíbrio 40+</span>
                  </div>
                  <span className="text-[11px] text-[#C59B27] font-semibold bg-[#C59B27]/10 px-2.5 py-1 rounded-md">
                    Edição 2026
                  </span>
                </div>
              </div>

              {/* Floating Product Mockup Card in foreground */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-44 sm:w-52 bg-white p-2.5 rounded-xl shadow-2xl border border-[#16382B]/15 hidden xs:block">
                <div className="rounded-lg overflow-hidden border border-neutral-100 mb-1.5">
                  <img
                    src="https://i.ibb.co/Rk5JDNqW/Mockup-do-Livro-Intestino-em-Equil-brio-40.png"
                    alt="Capa do eBook Intestino em Equilíbrio 40+"
                    className="w-full h-auto object-contain aspect-4/3"
                    loading="eager"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/ebook_cover_mockup_1793915827965.jpg';
                    }}
                  />
                </div>
                <div className="text-center px-1">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-[#C59B27]">
                    Material Principal
                  </span>
                  <span className="block text-[11px] font-semibold text-[#16382B] truncate">
                    100 Receitas & 21 Dias
                  </span>
                </div>
              </div>

              {/* Floating Reassurance Tag */}
              <div className="absolute -top-3 -right-3 bg-[#16382B] text-white py-1.5 px-3.5 rounded-lg shadow-lg border border-[#C59B27]/30 flex items-center gap-1.5 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D8AF3B]" />
                <span>Jornada Completa</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
