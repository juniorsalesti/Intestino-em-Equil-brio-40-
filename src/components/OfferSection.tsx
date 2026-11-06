import React from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, Smartphone, Download, Edit3, Lock } from 'lucide-react';
import { OfferSettings } from '../types';

interface OfferSectionProps {
  settings: OfferSettings;
  onOpenConfig: () => void;
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  settings,
  onOpenConfig,
  onCtaClick,
}) => {
  const packageIncludes = [
    'Intestino em Equilíbrio 40+ — 100 receitas.',
    'Planejamento alimentar de 21 dias.',
    'Diário dos 21 Dias.',
    'Lista de Mercado Inteligente.',
    'Guia dos Chás e Infusões.',
    'Manhãs Leves — 15 receitas extras.',
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="absolute inset-0 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            Acesso Completo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Comece hoje sua jornada de 21 dias.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Receba agora o material digital completo com o roteiro de 21 dias, 100 receitas práticas e os 4 bônus exclusivos.
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="bg-[#FCFBF9] rounded-3xl border-2 border-[#16382B]/15 shadow-2xl overflow-hidden relative">
          
          {/* Top Banner Ribbon */}
          <div className="bg-[#16382B] text-white py-3.5 px-6 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D8AF3B]" />
              <span className="font-serif font-semibold tracking-wide">
                PACOTE COMPLETO · ACESSO DIGITAL IMEDIATO
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8AF3B] hidden sm:inline">
              Edição Oficial 2026
            </span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: What's included (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                    PACOTE DA JORNADA
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B]">
                    Intestino em Equilíbrio 40+
                  </h3>
                  <p className="text-sm text-neutral-600 font-medium">
                    Planejamento alimentar de 21 dias + 100 receitas + 4 ferramentas de suporte.
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16382B] block mb-3">
                    INCLUÍDO NA OFERTA:
                  </span>
                  <ul className="space-y-3">
                    {packageIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                        <div className="w-5 h-5 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery format highlights */}
                <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-4 text-xs text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#16382B]" />
                    <span>Acesso em Celular, Tablet e Computador</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-[#16382B]" />
                    <span>Download em PDF de Alta Definição</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Checkout Box (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#16382B]/15 shadow-sm space-y-6 text-center relative">
                  
                  {/* Subtle edit button for admin */}
                  <div className="flex justify-end">
                    <button
                      onClick={onOpenConfig}
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-[#16382B] transition-colors"
                      title="Editar preço e link de checkout"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Configurar Preço & Link</span>
                    </button>
                  </div>

                  {/* Price display area */}
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-neutral-500 block">
                      Acesso Vitalício & Imediato
                    </span>
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-[#16382B] tabular-nums tracking-tight">
                      {settings.priceFull}
                    </div>
                    {settings.priceInstallments && (
                      <p className="text-xs sm:text-sm font-semibold text-[#C59B27]">
                        {settings.priceInstallments}
                      </p>
                    )}
                    <span className="text-[11px] text-neutral-500 block pt-1">
                      Pagamento único sem mensalidades ou cobranças automáticas
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={onCtaClick}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#16382B] hover:bg-[#1f4e3c] text-white text-sm sm:text-base font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>QUERO COMEÇAR AGORA</span>
                      <ArrowRight className="w-5 h-5 text-[#D8AF3B]" />
                    </button>
                    
                    {/* Note below button */}
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-2.5">
                      Acesso digital após confirmação do pagamento.
                    </p>
                  </div>

                  {/* Security badge */}
                  <div className="pt-4 border-t border-neutral-200/80 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#16382B]">
                      <Lock className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>Transação 100% Criptografada e Segura</span>
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Garantia incondicional de {settings.guaranteeDays} dias com suporte dedicado.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
