import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Lock, Smartphone, Download, Star, Edit3 } from 'lucide-react';
import { OfferSettings } from '../types';

interface PricingSectionProps {
  settings: OfferSettings;
  onSelectOffer1: () => void;
  onSelectOffer2: () => void;
  onOpenConfig: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  settings,
  onSelectOffer1,
  onSelectOffer2,
  onOpenConfig,
}) => {
  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const priceDiff = Math.max(0, settings.priceOffer2 - settings.priceOffer1);

  const economyOffer1 =
    settings.referencePriceOffer1 && settings.referencePriceOffer1 > settings.priceOffer1
      ? settings.referencePriceOffer1 - settings.priceOffer1
      : null;

  const economyOffer2 =
    settings.referencePriceOffer2 && settings.referencePriceOffer2 > settings.priceOffer2
      ? settings.referencePriceOffer2 - settings.priceOffer2
      : null;

  return (
    <section id="planos" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient subtle background touches */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C59B27]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-12 w-96 h-96 bg-[#16382B]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opções de Acesso</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Escolha como levar o Intestino em Equilíbrio 40+ para sua cozinha.
          </h2>

          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto pt-1">
            Escolha a opção que combina melhor com você e comece sua jornada de 21 dias.
          </p>

          <div className="pt-1 flex justify-center">
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-[#16382B] transition-colors bg-white/70 px-3 py-1 rounded-full border border-neutral-200"
              title="Configurar links de checkout e preços de referência"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Configurar Links de Checkout e Preços</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* OFERTA 1 — LIVRO + 1 BÔNUS */}
          <div className="bg-[#FCFBF9] rounded-3xl border border-[#16382B]/15 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27] block">
                    Oferta 1
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#16382B]">
                    Livro + 1 bônus
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#16382B] bg-[#16382B]/5 px-3 py-1 rounded-full">
                  Acesso Essencial
                </span>
              </div>

              {/* Product Mockup Thumbnail */}
              <div className="my-5 p-3 bg-[#FAF8F5] rounded-2xl border border-neutral-200/60 flex items-center gap-4">
                <div className="w-20 h-24 rounded-lg overflow-hidden shrink-0 border border-neutral-200 bg-white shadow-2xs">
                  <picture>
                    <source srcSet="/images/mockup_livro.webp" type="image/webp" />
                    <img
                      src="/images/mockup_livro.webp"
                      alt="eBook Intestino em Equilíbrio 40+"
                      className="w-full h-full object-contain"
                      width={80}
                      height={96}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Rk5JDNqW/Mockup-do-Livro-Intestino-em-Equil-brio-40.png';
                      }}
                    />
                  </picture>
                </div>
                <div className="text-xs text-neutral-600 space-y-1">
                  <span className="font-serif font-bold text-[#16382B] block text-sm">
                    Guia Principal + Manhãs Leves
                  </span>
                  <p className="leading-snug">
                    Ideal para quem deseja iniciar com o livro base e opções extras de café da manhã.
                  </p>
                </div>
              </div>

              {/* Items included */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16382B] block">
                  O que está incluído:
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-800">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B]/10 text-[#16382B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Intestino em Equilíbrio 40+:</strong> eBook principal com 100 receitas e planejamento alimentar de 21 dias.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B]/10 text-[#16382B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Bônus 4: Manhãs Leves</strong> — 15 cafés da manhã extras para variar sua rotina.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price & CTA Block */}
            <div className="pt-6 mt-6 border-t border-neutral-200/80 space-y-4">
              <div className="space-y-1 text-center">
                {/* Reference Price (Crossed Out if provided and valid) */}
                {settings.referencePriceOffer1 && settings.referencePriceOffer1 > settings.priceOffer1 ? (
                  <div className="text-xs text-neutral-400 line-through">
                    De R$ {formatBRL(settings.referencePriceOffer1)} por:
                  </div>
                ) : (
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    Valor Promocional
                  </div>
                )}

                {/* Promotional Price */}
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#16382B] tabular-nums">
                  R$ {formatBRL(settings.priceOffer1)}
                </div>

                {/* Economy badge if applicable */}
                {economyOffer1 !== null && (
                  <span className="inline-block text-[11px] font-bold text-[#16382B] bg-[#C59B27]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    VOCÊ ECONOMIZA R$ {formatBRL(economyOffer1)}
                  </span>
                )}

                <span className="text-[11px] text-neutral-500 block pt-0.5">
                  Pagamento único · Acesso digital
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={onSelectOffer1}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 bg-white hover:bg-neutral-50 text-[#16382B] text-xs sm:text-sm font-bold tracking-wide rounded-xl border-2 border-[#16382B] transition-all shadow-xs hover:shadow-md active:scale-98 cursor-pointer"
              >
                <span>Quero acesso agora — R$ {Math.round(settings.priceOffer1)}</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#16382B]" />
                  Acesso em qualquer aparelho
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#16382B]" />
                  Download imediato
                </span>
              </div>
            </div>
          </div>

          {/* OFERTA 2 — PACOTE COMPLETO (Destaque Principal) */}
          <div className="bg-[#FAF8F5] rounded-3xl border-2 border-[#C59B27] shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative lg:-translate-y-2 lg:scale-[1.02]">
            
            {/* Top Seal Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C59B27] to-[#D8AF3B] text-[#16382B] px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-[#16382B]" />
              <span>{settings.offer2Badge || 'MELHOR CUSTO-BENEFÍCIO'}</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 pt-1 border-b border-[#C59B27]/30">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27] block">
                    Oferta 2 · A Escolha Recomendada
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B]">
                    Pacote Completo
                  </h3>
                </div>
                <span className="text-xs font-bold text-white bg-[#16382B] px-3 py-1 rounded-full uppercase tracking-wider">
                  Completo
                </span>
              </div>

              {/* Destaque Visual Diferencial */}
              <div className="my-4 p-3 bg-[#16382B] text-white rounded-xl shadow-xs text-center space-y-0.5">
                <span className="block text-xs sm:text-sm font-bold text-[#D8AF3B] tracking-wide">
                  LEVE O PACOTE COMPLETO POR APENAS R$ {Math.round(priceDiff)} A MAIS.
                </span>
                <span className="text-[11px] text-cream-200/80 block">
                  Você recebe o produto principal e os quatro bônus em um único pacote.
                </span>
              </div>

              {/* Product Mockup Thumbnail Bundle */}
              <div className="mb-4 p-3 bg-white rounded-2xl border border-[#C59B27]/30 shadow-2xs flex items-center gap-4">
                <div className="w-24 h-18 rounded-lg overflow-hidden shrink-0 border border-neutral-200 bg-neutral-50 shadow-2xs">
                  <picture>
                    <source srcSet="/images/bundle_bonus.webp" type="image/webp" />
                    <img
                      src="/images/bundle_bonus.webp"
                      alt="Kit Completo com 4 Bônus"
                      className="w-full h-full object-cover"
                      width={96}
                      height={72}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/yFB2Q5Bg/Cole-o-Verde-de-Bem-Estar.png';
                      }}
                    />
                  </picture>
                </div>
                <div className="text-xs text-neutral-700 space-y-1">
                  <span className="font-serif font-bold text-[#16382B] block text-sm">
                    Tudo O Que Você Precisa
                  </span>
                  <p className="leading-snug text-neutral-600">
                    O roteiro de 21 dias + o diário de acompanhamento + lista de mercado + guia de chás + manhãs leves.
                  </p>
                </div>
              </div>

              {/* Items included */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16382B] block">
                  O que está incluído no pacote:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Intestino em Equilíbrio 40+:</strong> 100 receitas e planejamento alimentar de 21 dias.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Bônus 1: Diário dos 21 Dias</strong> para registrar sensações e hábitos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Bônus 2: Lista de Mercado Inteligente</strong> para compras práticas sem desperdício.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Bônus 3: Guia dos Chás e Infusões</strong> com 15 preparações reconfortantes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-[#16382B]">Bônus 4: Manhãs Leves</strong> — 15 cafés da manhã extras.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price & CTA Block */}
            <div className="pt-6 mt-6 border-t border-[#C59B27]/30 space-y-4">
              <div className="space-y-1 text-center">
                {/* Reference Price (Crossed Out if provided and valid) */}
                {settings.referencePriceOffer2 && settings.referencePriceOffer2 > settings.priceOffer2 ? (
                  <div className="text-xs text-neutral-400 line-through">
                    De R$ {formatBRL(settings.referencePriceOffer2)} por:
                  </div>
                ) : (
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    Valor Promocional do Pacote
                  </div>
                )}

                {/* Promotional Price */}
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#16382B] tabular-nums tracking-tight">
                  R$ {formatBRL(settings.priceOffer2)}
                </div>

                {/* Economy badge if applicable */}
                {economyOffer2 !== null && (
                  <span className="inline-block text-[11px] font-bold text-[#16382B] bg-[#C59B27]/30 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    VOCÊ ECONOMIZA R$ {formatBRL(economyOffer2)}
                  </span>
                )}

                <span className="text-[11px] text-neutral-500 block pt-0.5">
                  Pagamento único · Acesso vitalício aos 5 materiais
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={onSelectOffer2}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>QUERO O PACOTE COMPLETO — R$ {Math.round(settings.priceOffer2)}</span>
                <ArrowRight className="w-5 h-5 text-[#D8AF3B]" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-600 pt-1">
                <span className="flex items-center gap-1 font-medium text-[#16382B]">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                  Garantia de {settings.guaranteeDays} dias
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#16382B]" />
                  Compra 100% segura
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
