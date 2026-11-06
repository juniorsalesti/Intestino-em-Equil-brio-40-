/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { WhyDietFails } from './components/WhyDietFails';
import { CalendarSection } from './components/CalendarSection';
import { ProductOverview } from './components/ProductOverview';
import { ChaptersSection } from './components/ChaptersSection';
import { RecipeStructure } from './components/RecipeStructure';
import { BonusSection } from './components/BonusSection';
import { AboutVicente } from './components/AboutVicente';
import { DesiredBenefits } from './components/DesiredBenefits';
import { OfferSection } from './components/OfferSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConfigModal } from './components/ConfigModal';
import { OfferSettings } from './types';

const STORAGE_KEY = 'intestino_equilibrio_settings_v3';

const DEFAULT_SETTINGS: OfferSettings = {
  checkoutUrl: '',
  priceFull: 'R$ 27,00',
  priceInstallments: 'ou 3x de R$ 9,62',
  guaranteeDays: 7,
  guaranteeConditionText:
    'Se por qualquer motivo você considerar que o material não atendeu às suas expectativas, poderá solicitar o reembolso integral diretamente na plataforma de pagamento, conforme a política oficial do vendedor.',
  checkoutUrlOffer1: '',
  checkoutUrlOffer2: '',
  priceOffer1: 17,
  referencePriceOffer1: null,
  priceOffer2: 27,
  referencePriceOffer2: null,
  offer2Badge: 'MELHOR CUSTO-BENEFÍCIO',
};

export default function App() {
  const [settings, setSettings] = useState<OfferSettings>(DEFAULT_SETTINGS);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(saved) });
      }
    } catch {
      // Fallback to default
    }
  }, []);

  const handleSaveSettings = (newSettings: OfferSettings) => {
    setSettings(newSettings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    } catch {
      // Ignore storage errors
    }
  };

  const handleCtaClick = () => {
    const plansElement = document.getElementById('planos') || document.getElementById('oferta');
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOffer1 = () => {
    const url = settings.checkoutUrlOffer1 || settings.checkoutUrl;
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setIsConfigOpen(true);
    }
  };

  const handleSelectOffer2 = () => {
    const url = settings.checkoutUrlOffer2 || settings.checkoutUrl;
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setIsConfigOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242E28] font-sans antialiased selection:bg-[#C59B27]/20 selection:text-[#16382B]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenConfig={() => setIsConfigOpen(true)}
        onCtaClick={handleCtaClick}
      />

      <main>
        {/* 1. Nova Primeira Dobra — Hero Emocional & Direto */}
        <Hero onCtaClick={handleCtaClick} />

        {/* 2. Seção de Identificação com a Dor (Barriga inchada, intestino irregular, etc.) */}
        <PainSection onCtaClick={handleCtaClick} />

        {/* 3. Seção — O Problema Não É Apenas Saber o que Comer */}
        <WhyDietFails onCtaClick={handleCtaClick} />

        {/* 4. Seção Principal — A Jornada de 21 Dias (3 Etapas) */}
        <CalendarSection onCtaClick={handleCtaClick} />

        {/* 5. Apresentação do Produto como Solução (Mais do que receitas) */}
        <ProductOverview onCtaClick={handleCtaClick} />

        {/* 6. Apresentação dos 7 Capítulos (O mecanismo prático com comida de verdade) */}
        <ChaptersSection />

        {/* 7. O Que Cada Receita Oferece (Didática, Rendimento, Dica do Vicente) */}
        <RecipeStructure />

        {/* 8. Não é Só Um Cardápio — 4 Bônus Exclusivos de Suporte */}
        <BonusSection onCtaClick={handleCtaClick} />

        {/* 9. Apresentação do Vicente Valença (Abordagem simples, acolhedora e prática) */}
        <AboutVicente />

        {/* 10. Seção de Benefícios Desejados (Objetivos e possibilidades reais) */}
        <DesiredBenefits onCtaClick={handleCtaClick} />

        {/* 11. Seção de Oferta (Pacote completo + campos editáveis) */}
        <OfferSection
          settings={settings}
          onOpenConfig={() => setIsConfigOpen(true)}
          onCtaClick={handleCtaClick}
        />

        {/* 11.1 Nova Seção de Ofertas Comparativas (Escolha como levar para sua cozinha) */}
        <PricingSection
          settings={settings}
          onSelectOffer1={handleSelectOffer1}
          onSelectOffer2={handleSelectOffer2}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* 12. Garantia (Conheça o material com tranquilidade) */}
        <GuaranteeSection
          settings={settings}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* 13. Perguntas Frequentes (FAQ Accordion com as 9 perguntas) */}
        <FaqSection />

        {/* 14. CTA Final (Você pode continuar improvisando ou começar uma nova rotina) */}
        <FinalCta onCtaClick={handleCtaClick} />
      </main>

      {/* 15. Rodapé & Aviso Legal */}
      <Footer onOpenConfig={() => setIsConfigOpen(true)} />

      {/* Barra de Compra Fixa no Celular */}
      <MobileStickyBar
        settings={settings}
        onCtaClick={handleCtaClick}
      />

      {/* Modal de Configuração de Checkout & Preço para o Produtor */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />
    </div>
  );
}
