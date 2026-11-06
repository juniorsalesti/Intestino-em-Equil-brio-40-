import React from 'react';
import { Quote, UtensilsCrossed, Sparkles, HeartHandshake, Check } from 'lucide-react';

export const AboutVicente: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait of Vicente (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <picture>
                  <source srcSet="/images/apresentador_vicente.webp" type="image/webp" />
                  <img
                    src="/images/apresentador_vicente.webp"
                    alt="Vicente Valença, apresentador do projeto Intestino em Equilíbrio 40+"
                    className="w-full h-auto object-cover aspect-3/4"
                    width={500}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/8g2RxfKV/Whats-App-Image-2026-11-05-at-18-43-57.jpg';
                    }}
                  />
                </picture>
                
                {/* Identification tag */}
                <div className="p-4 bg-[#16382B] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-cream-50">
                        Vicente Valença
                      </h4>
                      <p className="text-xs text-[#D8AF3B] font-medium">
                        Apresentador do Projeto Intestino em Equilíbrio 40+
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#C59B27]/20 flex items-center justify-center">
                      <UtensilsCrossed className="w-5 h-5 text-[#D8AF3B]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature pill */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-md border border-[#16382B]/10 hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span className="text-xs font-semibold text-[#16382B]">
                  Abordagem Acolhedora
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Message (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
                O Apresentador
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
                Uma abordagem simples, acolhedora e prática para cuidar melhor da alimentação.
              </h2>
              <div className="w-16 h-0.5 bg-[#C59B27]" />
            </div>

            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#16382B]">Vicente Valença</strong> acredita que cuidar da alimentação não precisa ser complicado.
              </p>
              <p>
                Sua proposta é mostrar que organização, variedade e pequenas escolhas diárias podem ajudar a construir uma rotina mais equilibrada.
              </p>
              <p>
                Com o <strong className="text-[#16382B]">Intestino em Equilíbrio 40+</strong>, ele apresenta um caminho prático para quem deseja cuidar melhor da alimentação depois dos 40.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#16382B]/10 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#16382B]/10 flex items-center justify-center mb-2 text-[#16382B]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#16382B]">Acolhimento</h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Respeito ao seu tempo e ao seu paladar, sem imposições agressivas.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#16382B]/10 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#16382B]/10 flex items-center justify-center mb-2 text-[#16382B]">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#16382B]">Praticidade</h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Receitas claras que não exigem horas na cozinha ou utensílios raros.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#16382B]/10 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#16382B]/10 flex items-center justify-center mb-2 text-[#16382B]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#16382B]">Organização</h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Um roteiro que elimina a dúvida diária sobre o que cozinhar.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-5 bg-white rounded-xl border border-[#C59B27]/30 shadow-xs relative">
              <Quote className="w-8 h-8 text-[#C59B27]/20 absolute top-3 right-3" />
              <p className="text-sm text-neutral-700 italic leading-relaxed pr-6">
                "Não precisamos complicar o prato para viver com mais conforto. Quando organizamos as escolhas com antecedência, a rotina fica mais leve e o corpo agradece."
              </p>
              <span className="block text-xs font-semibold text-[#16382B] mt-2">
                — Vicente Valença
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
