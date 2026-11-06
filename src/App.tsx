/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { CalendarSection } from './components/CalendarSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { SafetyAndFinalSection } from './components/SafetyAndFinalSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConfigModal } from './components/ConfigModal';
import { OfferSettings } from './types';

const STORAGE_KEY = 'intestino_equilibrio_settings_v3';

const DEFAULT_SETTINGS: OfferSettings = {
  checkoutUrl: 'https://pay.kiwify.com.br/vHParcm',
  priceFull: 'R$ 27,00',
  priceInstallments: 'ou 3x de R$ 9,62',
  guaranteeDays: 7,
  guaranteeConditionText:
    'Se por qualquer motivo você considerar que o material não atendeu às suas expectativas, poderá solicitar o reembolso integral diretamente na plataforma de pagamento, conforme a política oficial do vendedor.',
  checkoutUrlOffer1: 'https://pay.kiwify.com.br/vHParcm',
  checkoutUrlOffer2: 'https://pay.kiwify.com.br/21iqdr2',
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
        const parsed = JSON.parse(saved);
        setSettings({
          ...DEFAULT_SETTINGS,
          ...parsed,
          checkoutUrlOffer1: parsed.checkoutUrlOffer1 || DEFAULT_SETTINGS.checkoutUrlOffer1,
          checkoutUrlOffer2: parsed.checkoutUrlOffer2 || DEFAULT_SETTINGS.checkoutUrlOffer2,
        });
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
    const plansElement = document.getElementById('planos');
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
      {/* Top Navigation Bar */}
      <Navbar
        onOpenConfig={() => setIsConfigOpen(true)}
        onCtaClick={handleCtaClick}
      />

      <main>
        {/* SEÇÃO 1 — HERO: A DOR E A SOLUÇÃO */}
        <Hero
          onCtaClick={handleCtaClick}
          checkoutUrl={settings.checkoutUrlOffer1 || 'https://pay.kiwify.com.br/vHParcm'}
        />

        {/* SEÇÃO 2 — IDENTIFICAÇÃO COM A DOR */}
        <PainSection onCtaClick={handleCtaClick} />

        {/* SEÇÃO 3 — A JORNADA DE 21 DIAS */}
        <CalendarSection onCtaClick={handleCtaClick} />

        {/* SEÇÃO 4 — O QUE VOCÊ RECEBE */}
        <WhatYouGetSection onCtaClick={handleCtaClick} />

        {/* SEÇÃO 5 — OS 4 BÔNUS */}
        <BonusSection onCtaClick={handleCtaClick} />

        {/* SEÇÃO 6 — OFERTA */}
        <PricingSection
          settings={settings}
          onSelectOffer1={handleSelectOffer1}
          onSelectOffer2={handleSelectOffer2}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* SEÇÃO 7 — SEGURANÇA E FINALIZAÇÃO */}
        <SafetyAndFinalSection
          settings={settings}
          onCtaClick={handleCtaClick}
        />
      </main>

      {/* Rodapé & Aviso Legal */}
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
