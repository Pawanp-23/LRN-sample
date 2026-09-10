import React, { useState } from 'react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  // First item open by default like in HTML mock
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-[#fafafa] py-24 border-t border-[#eaecf0]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
            Knowledge Base
          </span>
          <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Quick Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="flex items-center bg-white border border-[#eaecf0] rounded-xl px-3 py-2 shadow-sm">
            <span className="material-symbols-outlined text-[#98a2b3] text-[20px] mr-2">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full bg-transparent text-[14px] text-[#0f172a] focus:outline-none placeholder:text-[#98a2b3]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#98a2b3] hover:text-[#0f172a]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4" id="faq-accordion">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#ffffff] rounded-2xl shadow-sm p-6 cursor-pointer border border-[#eaecf0] transition-all hover:border-[#d0d5dd]"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex items-center justify-between text-[18px] font-semibold text-[#0f172a]">
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-200 text-[#475467] ${
                      isOpen ? 'rotate-180 text-[#0050cc]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-4 text-[15px] text-[#475467] leading-relaxed pt-2 border-t border-[#eaecf0]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
