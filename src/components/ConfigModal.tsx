import React, { useState } from 'react';
import { X, Sliders, Check, ExternalLink, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { OfferSettings } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: OfferSettings;
  onSave: (newSettings: OfferSettings) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [checkoutUrl, setCheckoutUrl] = useState(settings.checkoutUrl || 'https://pay.kiwify.com.br/vHParcm');
  const [checkoutUrlOffer1, setCheckoutUrlOffer1] = useState(settings.checkoutUrlOffer1 || 'https://pay.kiwify.com.br/vHParcm');
  const [checkoutUrlOffer2, setCheckoutUrlOffer2] = useState(settings.checkoutUrlOffer2 || 'https://pay.kiwify.com.br/21iqdr2');
  
  const [priceOffer1, setPriceOffer1] = useState(settings.priceOffer1 || 17);
  const [referencePriceOffer1, setReferencePriceOffer1] = useState<string>(
    settings.referencePriceOffer1 ? String(settings.referencePriceOffer1) : ''
  );

  const [priceOffer2, setPriceOffer2] = useState(settings.priceOffer2 || 27);
  const [referencePriceOffer2, setReferencePriceOffer2] = useState<string>(
    settings.referencePriceOffer2 ? String(settings.referencePriceOffer2) : ''
  );

  const [offer2Badge, setOffer2Badge] = useState(settings.offer2Badge || 'MELHOR CUSTO-BENEFÍCIO');

  const [priceFull, setPriceFull] = useState(settings.priceFull || 'R$ 27,00');
  const [priceInstallments, setPriceInstallments] = useState(settings.priceInstallments || '');
  const [guaranteeDays, setGuaranteeDays] = useState(settings.guaranteeDays || 7);
  const [guaranteeConditionText, setGuaranteeConditionText] = useState(settings.guaranteeConditionText || '');
  
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      checkoutUrl,
      checkoutUrlOffer1,
      checkoutUrlOffer2,
      priceOffer1: Number(priceOffer1) || 17,
      referencePriceOffer1: referencePriceOffer1 ? Number(referencePriceOffer1) : null,
      priceOffer2: Number(priceOffer2) || 27,
      referencePriceOffer2: referencePriceOffer2 ? Number(referencePriceOffer2) : null,
      offer2Badge,
      priceFull,
      priceInstallments,
      guaranteeDays,
      guaranteeConditionText,
    });
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#16382B]/20 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#16382B] text-white">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#C59B27]" />
            <h3 className="font-serif text-lg font-semibold tracking-wide">
              Configurações de Preços & Checkout
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <p className="text-xs text-neutral-600 leading-relaxed">
            Configure os links de checkout e valores das duas ofertas (R$ 17 e R$ 27) e os preços de referência (que mostram o cálculo automático de economia quando preenchidos).
          </p>

          {/* OFERTA 1 CONFIG */}
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
              <Tag className="w-4 h-4 text-[#C59B27]" />
              <span>Oferta 1 — Livro + 1 Bônus (Básico)</span>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                Link de Checkout da Oferta 1
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={checkoutUrlOffer1}
                  onChange={(e) => setCheckoutUrlOffer1(e.target.value)}
                  placeholder="https://pay.kiwify.com.br/... ou https://pay.hotmart.com/..."
                  className="w-full px-3 py-2 pr-9 text-xs bg-[#FAF8F5] border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
                <ExternalLink className="absolute right-3 top-2.5 w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Preço Promocional (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={priceOffer1}
                  onChange={(e) => setPriceOffer1(Number(e.target.value))}
                  placeholder="17"
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Preço de Referência (R$) <span className="text-neutral-400 font-normal">(Opcional, riscado)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={referencePriceOffer1}
                  onChange={(e) => setReferencePriceOffer1(e.target.value)}
                  placeholder="Ex: 47 (calcula economia se maior)"
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
            </div>
          </div>

          {/* OFERTA 2 CONFIG */}
          <div className="p-4 bg-[#FCFBF9] rounded-xl border-2 border-[#C59B27]/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>Oferta 2 — Pacote Completo (Destaque Principal)</span>
              </div>
              <span className="text-[10px] font-bold text-[#16382B] bg-[#C59B27]/20 px-2 py-0.5 rounded-md">
                Recomendado
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                Link de Checkout da Oferta 2 (Pacote Completo)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={checkoutUrlOffer2}
                  onChange={(e) => setCheckoutUrlOffer2(e.target.value)}
                  placeholder="https://pay.kiwify.com.br/... ou https://pay.hotmart.com/..."
                  className="w-full px-3 py-2 pr-9 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
                <ExternalLink className="absolute right-3 top-2.5 w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Preço Promocional (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={priceOffer2}
                  onChange={(e) => setPriceOffer2(Number(e.target.value))}
                  placeholder="27"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Preço de Referência (R$) <span className="text-neutral-400 font-normal">(Opcional)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={referencePriceOffer2}
                  onChange={(e) => setReferencePriceOffer2(e.target.value)}
                  placeholder="Ex: 97 (calcula economia)"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Selo do Topo
                </label>
                <select
                  value={offer2Badge}
                  onChange={(e) => setOffer2Badge(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                >
                  <option value="MELHOR CUSTO-BENEFÍCIO">MELHOR CUSTO-BENEFÍCIO</option>
                  <option value="MAIS ESCOLHIDO">MAIS ESCOLHIDO</option>
                  <option value="OFERTA ESPECIAL">OFERTA ESPECIAL</option>
                </select>
              </div>
            </div>
          </div>

          {/* GARANTIA */}
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#16382B]">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>Garantia e Condições Gerais</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] text-neutral-600 mb-1">Prazo (Dias)</label>
                <input
                  type="number"
                  min="0"
                  max="90"
                  value={guaranteeDays}
                  onChange={(e) => setGuaranteeDays(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] text-neutral-600 mb-1">Texto da Política de Reembolso</label>
                <input
                  type="text"
                  value={guaranteeConditionText}
                  onChange={(e) => setGuaranteeConditionText(e.target.value)}
                  placeholder="Conforme a política oficial do vendedor"
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-neutral-300 rounded-lg text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#16382B]"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#16382B] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#1f4b3a] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {savedNotice ? (
                <>
                  <Check className="w-4 h-4 text-[#C59B27]" />
                  Salvo com Sucesso!
                </>
              ) : (
                'Salvar Alterações'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
