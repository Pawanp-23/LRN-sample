import React, { useState } from 'react';
import { NavTab } from '../types';
import { LOGO_URL } from '../data/mockData';

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  onOpenLogin,
  onOpenGetStarted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: NavTab }[] = [
    { label: 'Products', tab: 'products' },
    { label: 'Use Cases', tab: 'use-cases' },
    { label: 'Tools', tab: 'tools' },
    { label: 'Pricing', tab: 'pricing' },
    { label: 'Resources', tab: 'resources' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eaecf0]/60">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <button
            onClick={() => onTabChange('products')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <img
              src={LOGO_URL}
              alt="Paasa Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-headline-sm text-[20px] font-bold tracking-tight text-[#0f172a]">
              Paasa
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => onTabChange(item.tab)}
                  className={`text-[14px] font-medium transition-colors cursor-pointer py-1.5 relative ${
                    isActive
                      ? 'text-[#0f172a] font-semibold'
                      : 'text-[#45464d] hover:text-[#111c2d]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0050cc] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-block text-[#45464d] hover:text-[#111c2d] text-[14px] font-medium transition-colors cursor-pointer"
          >
            Log in
          </button>

          <button
            onClick={onOpenGetStarted}
            className="bg-[#000000] text-[#ffffff] text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-[#273143] transition-colors shadow-sm cursor-pointer"
          >
            Get started
          </button>

          <button
            onClick={onOpenLogin}
            title="Account"
            className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[#ffffff] text-[18px]">
              person
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#45464d] hover:text-[#111c2d] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#eaecf0] px-6 py-4 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                onTabChange(item.tab);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-[15px] font-medium ${
                currentTab === item.tab
                  ? 'text-[#0050cc] font-semibold'
                  : 'text-[#45464d]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#eaecf0] flex items-center justify-between">
            <button
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
              className="text-[14px] font-medium text-[#45464d]"
            >
              Log in
            </button>
            <button
              onClick={() => {
                onOpenGetStarted();
                setMobileMenuOpen(false);
              }}
              className="bg-[#000000] text-[#ffffff] text-[14px] font-medium px-4 py-2 rounded-full"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
