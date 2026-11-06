import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Edit3 } from 'lucide-react';
import { OfferSettings } from '../types';

interface GuaranteeSectionProps {
  settings: OfferSettings;
  onOpenConfig: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  settings,
  onOpenConfig,
}) => {
  return (
    <section className="py-20 md:py-24 bg-[#F3EFE7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#FCFBF9] rounded-3xl border border-[#16382B]/15 shadow-xl p-8 sm:p-12 relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C59B27]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            
            {/* Visual Seal */}
            <div className="shrink-0 text-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#16382B] via-[#102B21] to-[#0A1A14] border-4 border-[#C59B27] p-2 flex flex-col items-center justify-center text-white shadow-lg mx-auto">
                <ShieldCheck className="w-8 h-8 text-[#D8AF3B] mb-0.5" />
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#D8AF3B] tabular-nums">
                  {settings.guaranteeDays} DIAS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-cream-200 font-semibold">
                  Garantia
                </span>
              </div>
              <span className="inline-block mt-3 text-[11px] font-semibold text-[#16382B] uppercase tracking-wider">
                100% Protegido
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4 text-center sm:text-left flex-1">
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
                    Segurança & Risco Zero
                  </span>
                  <button
                    onClick={onOpenConfig}
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-[#16382B] transition-colors"
                    title="Editar prazo de garantia"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Personalizar Prazo</span>
                  </button>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B]">
                  Você pode conhecer o material com tranquilidade.
                </h3>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Você conta com um período de <strong className="text-[#16382B]">{settings.guaranteeDays} dias</strong> para baixar os arquivos, navegar pelas 100 receitas, conferir o planejamento alimentar de 21 dias e explorar os 4 bônus exclusivos.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {settings.guaranteeConditionText ||
                  'Se por qualquer motivo você considerar que o material não atendeu às suas expectativas, poderá solicitar o reembolso integral diretamente na plataforma de pagamento, conforme a política oficial do vendedor.'}
              </p>

              <div className="pt-3 border-t border-neutral-200/80 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16382B]" />
                  <span>Sem burocracias desnecessárias</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#16382B]" />
                  <span>Plataforma oficial e segura</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
