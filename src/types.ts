export interface OfferSettings {
  checkoutUrl: string;
  priceFull: string;
  priceInstallments: string;
  guaranteeDays: number;
  guaranteeConditionText: string;

  // Multi-tier offer configuration
  checkoutUrlOffer1: string;
  checkoutUrlOffer2: string;
  priceOffer1: number;
  referencePriceOffer1: number | null;
  priceOffer2: number;
  referencePriceOffer2: number | null;
  offer2Badge: string;
}

export interface Chapter {
  number: number;
  title: string;
  countText: string;
  description: string;
  sampleRecipes: string[];
  tag: string;
}

export interface Bonus {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
}
