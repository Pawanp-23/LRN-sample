import { useState } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MarketExchanges } from './components/MarketExchanges';
import { ProductsSection } from './components/ProductsSection';
import { PlatformCurrency } from './components/PlatformCurrency';
import { EstateTaxSection } from './components/EstateTaxSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SecuritySection } from './components/SecuritySection';
import { AudienceAndSteps } from './components/AudienceAndSteps';
import { ConsolidateAndMedia } from './components/ConsolidateAndMedia';
import { FaqSection } from './components/FaqSection';
import { ToolsSuite } from './components/ToolsSuite';
import { CtaSection } from './components/CtaSection';

// Screen Views
import { ToolsView } from './components/views/ToolsView';
import { UseCasesView } from './components/views/UseCasesView';
import { PricingView } from './components/views/PricingView';
import { ResourcesView } from './components/views/ResourcesView';

// Modals
import { GetStartedModal } from './components/modals/GetStartedModal';
import { LoginModal } from './components/modals/LoginModal';
import { OrderConfirmationModal } from './components/modals/OrderConfirmationModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('products');
  const [selectedToolId, setSelectedToolId] = useState<string>('estate-tax');
  const [isGetStartedOpen, setIsGetStartedOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [orderReceipt, setOrderReceipt] = useState<{
    symbol: string;
    shares: number;
    total: number;
  } | null>(null);

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectToolFromSuite = (toolId: string) => {
    setSelectedToolId(toolId);
    setCurrentTab('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExecuteOrder = (orderDetails: {
    symbol: string;
    shares: number;
    total: number;
  }) => {
    setOrderReceipt(orderDetails);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] font-['Inter'] antialiased selection:bg-[#0050cc]/15 selection:text-[#0050cc]">
      {/* Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {currentTab === 'products' && (
          <div className="flex flex-col w-full animate-in fade-in duration-150">
            {/* 1. Hero Section */}
            <HeroSection
              onStartInvesting={() => setIsGetStartedOpen(true)}
              onExploreCalculators={() => handleTabChange('tools')}
              onNavigate={handleTabChange}
            />

            {/* 2. Access the World's Markets & Exchanges */}
            <MarketExchanges />

            {/* 3. Core Products Grid (Direct Investing & Managed Strategies) */}
            <ProductsSection
              onNavigate={handleTabChange}
              onExecuteOrder={handleExecuteOrder}
            />

            {/* 4. Trade Anywhere & Multi-Currency Cash Yield */}
            <PlatformCurrency
              onNavigate={handleTabChange}
              onOpenLogin={() => setIsLoginOpen(true)}
            />

            {/* 5. UCITS ETFs & US Estate Tax Shield */}
            <EstateTaxSection
              onNavigate={handleTabChange}
              onOpenCalculator={() => {
                setSelectedToolId('estate-tax');
                handleTabChange('tools');
              }}
            />

            {/* 6. Testimonials & Social Proof */}
            <TestimonialsSection />

            {/* 7. Enterprise Security & Safety (4 Pillars) */}
            <SecuritySection />

            {/* 8. Who is Paasa for? & 3-Step Onboarding */}
            <AudienceAndSteps
              onOpenGetStarted={() => setIsGetStartedOpen(true)}
            />

            {/* 9. Consolidate Holdings / Transfer Banner & Media Section */}
            <ConsolidateAndMedia onNavigate={handleTabChange} />

            {/* 10. Interactive FAQs Accordion */}
            <FaqSection />

            {/* 11. Tools & Calculators Suite */}
            <ToolsSuite
              onSelectTool={handleSelectToolFromSuite}
              onNavigate={handleTabChange}
            />

            {/* 12. Final CTA Conversion Section */}
            <CtaSection
              onOpenGetStarted={() => setIsGetStartedOpen(true)}
              onNavigate={handleTabChange}
            />
          </div>
        )}

        {currentTab === 'use-cases' && (
          <div className="animate-in fade-in duration-150">
            <UseCasesView
              onOpenGetStarted={() => setIsGetStartedOpen(true)}
              onOpenTools={() => {
                setSelectedToolId('estate-tax');
                handleTabChange('tools');
              }}
            />
          </div>
        )}

        {currentTab === 'tools' && (
          <div className="animate-in fade-in duration-150">
            <ToolsView
              initialTool={selectedToolId}
              onOpenGetStarted={() => setIsGetStartedOpen(true)}
            />
          </div>
        )}

        {currentTab === 'pricing' && (
          <div className="animate-in fade-in duration-150">
            <PricingView
              onOpenGetStarted={() => setIsGetStartedOpen(true)}
            />
          </div>
        )}

        {currentTab === 'resources' && (
          <div className="animate-in fade-in duration-150">
            <ResourcesView />
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Interactive Modals */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToGetStarted={() => setIsGetStartedOpen(true)}
      />

      <OrderConfirmationModal
        isOpen={!!orderReceipt}
        onClose={() => setOrderReceipt(null)}
        orderDetails={orderReceipt}
      />
    </div>
  );
}
