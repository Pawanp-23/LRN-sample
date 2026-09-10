export type NavTab = 'products' | 'use-cases' | 'tools' | 'pricing' | 'resources';

export interface TickerInfo {
  symbol: string;
  name: string;
  exchange: string;
  country: string;
  flag: string;
  price: number;
  currency: string;
  changePercent: number;
  category: 'UCITS ETF' | 'US Stock' | 'Global Stock';
  ter?: number; // Total Expense Ratio in %
  isUcits: boolean;
  domicile?: string;
  estateTaxShield?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  initials: string;
}

export interface MediaArticle {
  id: string;
  outlet: string;
  outletColor: string;
  type: string;
  title: string;
  description: string;
  linkText: string;
  readTime: string;
}

export interface ExchangeCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  exchanges: string;
}
