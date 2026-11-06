import React from 'react';
import { ArrowRight, BookOpen, Layers, Calendar, Smartphone, DownloadCloud, Sparkles } from 'lucide-react';

interface ProductOverviewProps {
  onCtaClick: () => void;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({ onCtaClick }) => {
  return (
    <section id="produto" className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            A Ferramenta Prática
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Conheça o Intestino em Equilíbrio 40+.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="font-serif text-lg sm:text-xl text-[#C59B27] font-medium pt-1">
            Mais do que receitas: um guia prático para ajudar você a transformar a maneira como organiza sua alimentação.
          </p>
        </div>

        {/* 3D Mockup Showcase + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3D Mockup (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#FCFBF9] transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src="https://i.ibb.co/Rk5JDNqW/Mockup-do-Livro-Intestino-em-Equil-brio-40.png"
                  alt="Mockup do Livro Intestino em Equilíbrio 40+"
                  className="w-full h-auto object-contain aspect-4/3 p-2"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/ebook_cover_mockup_1793915827965.jpg';
                  }}
                />
                
                {/* Visual badge strip */}
                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Smartphone className="w-4 h-4 text-[#16382B]" />
                    <span>Compatível com Celular, Tablet e PC</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#C59B27] font-semibold">
                    <DownloadCloud className="w-4 h-4" />
                    <span>Download Imediato</span>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -top-4 -left-4 bg-[#16382B] text-white px-4 py-2 rounded-xl shadow-lg border border-[#C59B27]/40 flex items-center gap-2 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#D8AF3B]" />
                <span>Edição Oficial 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Você recebe um material organizado para encontrar novas opções de refeições, planejar seus dias e tornar o cuidado com a alimentação mais simples.
              </p>
            </div>

            {/* 3 Visual Highlights Pillars */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white/80 rounded-2xl border border-[#16382B]/10 text-center">
              <div className="space-y-0.5">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B] block tabular-nums">
                  100
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27]">
                  Receitas
                </span>
              </div>
              <div className="space-y-0.5 border-x border-neutral-200">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B] block tabular-nums">
                  7
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27]">
                  Capítulos
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B] block tabular-nums">
                  21
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27]">
                  Dias de Plano
                </span>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#16382B]/10">
                <div className="w-9 h-9 rounded-lg bg-[#16382B]/10 flex items-center justify-center shrink-0 text-[#16382B]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#16382B]">
                    As Receitas São o Mecanismo
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Opções saborosas criadas para você aplicar o planejamento sem complicação na cozinha.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#16382B]/10">
                <div className="w-9 h-9 rounded-lg bg-[#16382B]/10 flex items-center justify-center shrink-0 text-[#16382B]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#16382B]">
                    Organização por Momentos do Dia
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Desde cafés da manhã leves até sopas e caldos reconfortantes para a noite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#16382B]/10">
                <div className="w-9 h-9 rounded-lg bg-[#16382B]/10 flex items-center justify-center shrink-0 text-[#16382B]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#16382B]">
                    O Planejamento é o Seu Caminho
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Um cronograma prático para eliminar a indecisão e construir hábitos duradouros.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98"
              >
                <span>Quero Garantir Meu Acesso</span>
                <ArrowRight className="w-4 h-4 text-[#D8AF3B]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
