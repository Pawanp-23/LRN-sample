import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fafafa] py-24 border-t border-[#eaecf0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#0050cc] font-semibold">
            Institutional Validation
          </span>
          <h2 className="font-headline-lg text-[#0f172a] font-bold mt-2 mb-4">
            Our customers work at
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#475467] opacity-80 mt-6 font-semibold">
            <span className="text-[20px]">Microsoft</span>
            <span className="text-[20px]">Captainfresh</span>
            <span className="text-[20px]">Snowbit</span>
            <span className="text-[20px]">BTB Family Office</span>
            <span className="text-[20px]">Uber</span>
            <span className="text-[20px]">IBM</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-[#eaecf0] hover:shadow-md transition-shadow"
            >
              <p className="text-[15px] text-[#475467] italic mb-6 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#eaecf0]">
                <div className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center font-bold text-[12px]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#0f172a]">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-[#475467]">
                    {item.role}, {item.company} ({item.location})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
