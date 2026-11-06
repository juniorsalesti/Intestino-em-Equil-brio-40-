import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, checkoutUrl }) => {
  const checkoutLink = checkoutUrl || 'https://pay.kiwify.com.br/vHParcm';

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F3EFE7]">
      {/* Subtle ambient glow */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-[#C59B27]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-12 w-96 h-96 bg-[#16382B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, Impactful Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Subtle Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#16382B]/80 bg-[#16382B]/5 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              <span>Jornada de 21 Dias · Saúde Digestiva 40+</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#16382B] leading-[1.12] tracking-tight text-balance">
              Sua barriga vive inchada? Seu intestino não funciona como antes?
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Conheça uma jornada de 21 dias para organizar sua alimentação, desenvolver hábitos mais equilibrados e cuidar melhor do seu bem-estar digestivo depois dos 40.
            </p>

            {/* CTA Block */}
            <div className="pt-2 space-y-3">
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-sm sm:text-base font-bold tracking-wide rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Quero acesso agora — R$ 17</span>
                <span className="text-[#D8AF3B] text-lg font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>

              {/* Sub-CTA text: 100 receitas | 21 dias de planejamento | 4 bônus. */}
              <p className="text-xs sm:text-sm font-medium text-neutral-600 tracking-wide">
                100 receitas <span className="text-[#C59B27] mx-1.5">|</span> 21 dias de planejamento <span className="text-[#C59B27] mx-1.5">|</span> 4 bônus.
              </p>
            </div>

          </div>

          {/* Right Column: High Quality Photography — Vicente & eBook Mockup (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo of Vicente Valença in kitchen with brown apron */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <picture>
                  <source srcSet="/images/hero_vicente.webp" type="image/webp" />
                  <img
                    src="/images/hero_vicente.webp"
                    alt="Vicente Valença segurando o livro Intestino em Equilíbrio 40+"
                    className="w-full h-auto object-cover aspect-4/3 sm:aspect-auto"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/tpXt00Mm/Homem-sorrindo-com-livro-de-receitas-intestinais.png';
                    }}
                  />
                </picture>
                
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

              {/* Floating Product Mockup Thumbnail */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-44 sm:w-52 bg-white p-2.5 rounded-xl shadow-2xl border border-[#16382B]/15 hidden xs:block">
                <div className="rounded-lg overflow-hidden border border-neutral-100 mb-1.5 bg-[#FAF8F5]">
                  <picture>
                    <source srcSet="/images/mockup_livro.webp" type="image/webp" />
                    <img
                      src="/images/mockup_livro.webp"
                      alt="Mockup do Livro Intestino em Equilíbrio 40+"
                      className="w-full h-auto object-contain aspect-4/3"
                      width={208}
                      height={156}
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Rk5JDNqW/Mockup-do-Livro-Intestino-em-Equil-brio-40.png';
                      }}
                    />
                  </picture>
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

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#16382B] text-white py-1.5 px-3.5 rounded-lg shadow-lg border border-[#C59B27]/30 flex items-center gap-1.5 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D8AF3B]" />
                <span>Acesso Imediato</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
