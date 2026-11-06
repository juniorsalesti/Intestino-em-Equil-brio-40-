import React, { useState } from 'react';
import { ShieldCheck, Smartphone, Download, ChevronDown, ArrowRight, HelpCircle, AlertCircle } from 'lucide-react';
import { OfferSettings } from '../types';

interface SafetyAndFinalSectionProps {
  settings: OfferSettings;
  onCtaClick: () => void;
}

export const SafetyAndFinalSection: React.FC<SafetyAndFinalSectionProps> = ({
  settings,
  onCtaClick,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como recebo o acesso ao material?',
      a: 'O acesso é 100% digital e imediato. Logo após a confirmação do pagamento, você recebe um e-mail com o link direto para download de todos os arquivos em PDF.',
    },
    {
      q: 'O que inclui o planejamento de 21 dias?',
      a: 'Um roteiro diário estruturado para 3 semanas, com cafés da manhã, almoços, jantares, lanches e bebidas naturais, além do modo de preparo passo a passo de cada uma das 100 receitas.',
    },
    {
      q: 'Preciso comprar ingredientes caros ou difíceis de encontrar?',
      a: 'Não. O grande diferencial do material é utilizar ingredientes acessíveis, encontrados em qualquer feira ou supermercado comum, sem complicação.',
    },
    {
      q: 'As receitas são fáceis para quem não tem muito tempo para cozinhar?',
      a: 'Sim. As receitas foram pensadas para a rotina real de quem tem mais de 40 anos, com preparações práticas, instruções claras e tempo de preparo ágil.',
    },
    {
      q: `Como funciona a garantia de ${settings.guaranteeDays} dias?`,
      a: `Você tem ${settings.guaranteeDays} dias para explorar o guia, experimentar as receitas e avaliar o planejamento. Se achar que não fez sentido para sua rotina, basta solicitar o reembolso integral diretamente na plataforma.`,
    },
  ];

  return (
    <section id="seguranca" className="py-20 md:py-28 bg-[#F3EFE7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Row 1: Digital Access & Guarantee (Side by side on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card A: Acesso Digital */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#16382B]/10 shadow-2xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#16382B]/5 text-[#16382B] flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-[#16382B]">
                Acesso Digital Imediato
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Material em formato digital (PDF), compatível com celular, tablet e computador. Você pode ler onde estiver ou imprimir suas páginas favoritas.
              </p>
            </div>
          </div>

          {/* Card B: Garantia */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#16382B]/10 shadow-2xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#C59B27]/15 text-[#C59B27] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-[#16382B]">
                Garantia de {settings.guaranteeDays} Dias
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Conheça o material com tranquilidade. Se por qualquer razão não atender às suas expectativas, solicite o reembolso integral conforme a política da plataforma.
              </p>
            </div>
          </div>

        </div>

        {/* Row 2: FAQ Accordion */}
        <div id="faq" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16382B]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#16382B]/10 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#16382B] hover:text-[#C59B27] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C59B27]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: Educational Notice */}
        <div className="p-4 bg-white/70 rounded-xl border border-[#16382B]/10 text-xs text-neutral-500 flex items-start gap-3 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
          <p>
            <strong className="text-neutral-700">Aviso Educativo:</strong> Este material possui finalidade exclusivamente educativa e culinária. As orientações alimentares não substituem o acompanhamento individual de médicos ou nutricionistas.
          </p>
        </div>

        {/* Row 4: Final CTA Block */}
        <div className="bg-[#16382B] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-6">
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream-50 leading-tight">
              Comece hoje a cuidar melhor da sua alimentação.
            </h2>
            <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed">
              Você pode continuar no improviso diário ou dar o primeiro passo com um plano organizado e 100 receitas feitas para seu conforto.
            </p>
          </div>

          <div>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#C59B27] hover:bg-[#d8af3b] text-[#16382B] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-cream-200/60 pt-1">
            <span>Acesso Imediato</span>
            <span>·</span>
            <span>Garantia de {settings.guaranteeDays} Dias</span>
            <span>·</span>
            <span>Compra 100% Segura</span>
          </div>
        </div>

      </div>
    </section>
  );
};
