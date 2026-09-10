import React, { useState } from 'react';
import { MEDIA_ARTICLES, FAQS } from '../../data/mockData';

export const ResourcesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guides' | 'press' | 'faqs'>('guides');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const guides = [
    {
      id: 'g1',
      tag: 'Estate Tax Protection',
      title: 'What are UCITS ETFs and why do Non-US investors need them?',
      excerpt: 'How investing via Ireland-domiciled UCITS ETFs completely shields foreign investors from the 40% US federal estate tax, avoids probate, and reduces dividend withholding taxes.',
      readTime: '6 min read',
      author: 'Paasa Advisory Team',
      date: 'Updated Feb 2025',
    },
    {
      id: 'g2',
      tag: 'RSU Strategy',
      title: 'RSUs & Stock Options: Avoiding the 40% US Estate Tax Cliff',
      excerpt: 'A comprehensive playbook for Microsoft, Google, Amazon, and Meta employees in India holding substantial vested US tech equities.',
      readTime: '8 min read',
      author: 'Nitish Sahni, CEO',
      date: 'Updated Jan 2025',
    },
    {
      id: 'g3',
      tag: 'FEMA & Remittance',
      title: 'The Ultimate Guide to RBI Liberalized Remittance Scheme (LRS)',
      excerpt: 'Everything you need to know about remitting up to $250,000 annually from India, Form A2 procedures, TCS refunds, and banking partner setups.',
      readTime: '5 min read',
      author: 'Compliance & Legal Desk',
      date: 'Updated Dec 2024',
    },
    {
      id: 'g4',
      tag: 'ITR Compliance',
      title: 'Filing Schedule FA & Schedule FSI in Indian Income Tax Returns',
      excerpt: 'A practical, field-by-field manual on disclosing foreign depository accounts and overseas equity holdings in ITR-2/ITR-3 without penalties.',
      readTime: '7 min read',
      author: 'CA Advisory Panel',
      date: 'Updated Jan 2025',
    },
  ];

  return (
    <div className="w-full pt-12 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
          Institutional Knowledge Center
        </span>
        <h1 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-3 tracking-tight">
          Research, Compliance & Guides
        </h1>
        <p className="text-[15px] text-[#475467] leading-relaxed">
          In-depth whitepapers, cross-border tax analyses, and regulatory frameworks for global wealth preservation.
        </p>

        {/* Tab switch */}
        <div className="flex justify-center gap-2 mt-8">
          {(['guides', 'press', 'faqs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#0050cc] text-white shadow-sm'
                  : 'bg-white text-[#475467] border border-[#eaecf0] hover:bg-[#f4f5f7]'
              }`}
            >
              {tab === 'guides' && 'Research Guides'}
              {tab === 'press' && 'Press & Analysis'}
              {tab === 'faqs' && 'Complete FAQs'}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Tab */}
      {activeTab === 'guides' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedArticle(guide.title)}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#eaecf0] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px]">
                  <span className="font-bold text-[#0050cc] bg-[#eff4ff] px-2.5 py-0.5 rounded-full">
                    {guide.tag}
                  </span>
                  <span className="text-[#98a2b3]">{guide.readTime}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0f172a] group-hover:text-[#0050cc] transition-colors mb-3 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-[13px] text-[#475467] leading-relaxed mb-6">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eaecf0] flex items-center justify-between text-[11px] text-[#98a2b3]">
                <span>{guide.author} • {guide.date}</span>
                <span className="text-[#0050cc] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read guide →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Press Tab */}
      {activeTab === 'press' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {MEDIA_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eaecf0] hover:shadow-md transition-all flex flex-col sm:flex-row items-start justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className="font-bold text-[11px] uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${article.outletColor}15`,
                      color: article.outletColor,
                    }}
                  >
                    {article.outlet}
                  </span>
                  <span className="text-[11px] text-[#98a2b3]">{article.readTime}</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#0f172a]">
                  {article.title}
                </h3>
                <p className="text-[13px] text-[#475467] leading-relaxed">
                  {article.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedArticle(article.title)}
                className="px-4 py-2 bg-[#f4f5f7] text-[#0f172a] rounded-xl text-[12px] font-semibold hover:bg-[#e8eeff] hover:text-[#0050cc] transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Read Coverage
              </button>
            </div>
          ))}
        </div>
      )}

      {/* FAQs Tab */}
      {activeTab === 'faqs' && (
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eaecf0]"
            >
              <h4 className="text-[16px] font-bold text-[#0f172a] mb-2">
                {faq.question}
              </h4>
              <p className="text-[14px] text-[#475467] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Reading Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-[#eaecf0] relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-[#98a2b3] hover:text-[#0f172a] p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
              Research Briefing
            </span>
            <h2 className="text-[22px] font-bold text-[#0f172a] mt-2 mb-4 leading-tight">
              {selectedArticle}
            </h2>

            <div className="space-y-4 text-[14px] text-[#475467] leading-relaxed border-t border-[#eaecf0] pt-4">
              <p>
                Investing internationally from India has historically presented two distinct structural problems: high friction in moving funds across borders under RBI FEMA rules, and the punitive 40% US estate tax on non-US residents holding direct US securities.
              </p>
              <p>
                <strong>The UCITS Architecture:</strong> UCITS funds domiciled in Ireland solve both problems by acting as pooled investment vehicles outside US tax jurisdiction. Non-US residents holding Irish UCITS ETFs are legally exempt from US federal estate tax upon death, eliminating costly US probate procedures.
              </p>
              <p>
                Furthermore, under the Ireland-US Double Taxation Avoidance Agreement, the withholding tax rate on US stock dividends distributed to Irish funds is capped at 15%, compared to 25% or 30% for direct retail holdings.
              </p>
              <p>
                All accounts are cleared through Interactive Brokers LLC with direct SIPC account protection up to $500,000.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#eaecf0] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#000000] text-white rounded-xl text-[13px] font-semibold hover:bg-[#273143] cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
