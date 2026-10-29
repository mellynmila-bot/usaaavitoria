import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, ChevronDown, MessageCircle } from 'lucide-react';
import { Language, siteData, translations } from '../data/siteData';
import { OrnamentDivider } from './OrnamentDivider';
import { LegalModalType } from './LegalModals';

interface FaqAndFooterProps {
  lang: Language;
  onOpenLegalModal: (type: LegalModalType) => void;
}

export const FaqAndFooter: React.FC<FaqAndFooterProps> = ({
  lang,
  onOpenLegalModal,
}) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([1]);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 460);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const defaultWaLink = `https://wa.me/${siteData.whatsappPhone}?text=${encodeURIComponent(
    t.floating.defaultWaMessage
  )}`;

  return (
    <>
      {/* 6.8 FAQ Section (Wood Background) */}
      <section
        id="faq"
        className="relative py-20 sm:py-24 bg-wood text-[#F6EFE4]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#F2DFA7] font-semibold mb-2">
              {t.faq.eyebrow}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F6EFE4] leading-tight text-balance">
              {t.faq.titlePart1}{' '}
              <span className="text-gold-mirror italic">{t.faq.titleHighlight}</span>
            </h2>
            <OrnamentDivider variant="on-wood" />
            <p className="text-base sm:text-lg text-[#F6EFE4]/95 leading-relaxed">
              {t.faq.subtitle}
            </p>
          </motion.div>

          {/* 12 Accessible Accordion Items */}
          <div className="mt-12 space-y-3.5">
            {siteData.faqs.map((faq, idx) => {
              const isOpen = openFaqIds.includes(faq.id);
              const panelId = `faq-panel-${faq.id}`;
              const btnId = `faq-btn-${faq.id}`;

              return (
                <motion.div
                  key={faq.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="card-ivory overflow-hidden"
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full min-h-[54px] px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F6EFE4]/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8F7030] transition-colors cursor-pointer"
                    >
                      <span className="font-serif-display text-lg sm:text-xl text-[#3F2E22] leading-snug">
                        {faq.question[lang]}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full bg-[#F6EFE4] border border-[#C29F5B]/50 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-[#EADFCC]' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4 text-[#8F7030]" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className={isOpen ? 'px-5 pb-4 pt-1 border-t border-[#C29F5B]/25 bg-[#FBF7F0]' : 'hidden'}
                  >
                    <p className="text-sm sm:text-base text-[#3F2E22]/90 leading-relaxed">
                      {faq.answer[lang]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Final Section CTA */}
          <div className="mt-12 text-center">
            <a
              href={siteData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
            >
              {t.faq.cta}
            </a>
          </div>
        </div>
      </section>

      {/* 6.9 Discrete ADA-Compliant Footer (Always in English per PRD) */}
      <footer
        lang="en"
        className="relative bg-[#F6EFE4] text-[#6B5545] text-center"
      >
        {/* Mirrored Gold Fillet at Top */}
        <div className="h-[2px] w-full bg-gold-mirror" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-2 text-xs sm:text-sm">
          {/* Line 1: Copyright */}
          <p className="font-normal">
            © 2026 {siteData.professionalLegalName}. All rights reserved.
          </p>

          {/* Line 2: Legal Links Side by Side */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="text-[#6B5545] hover:text-[#3F2E22] hover:underline focus:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F7030] py-1 px-1.5 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="text-[#6B5545] hover:text-[#3F2E22] hover:underline focus:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F7030] py-1 px-1.5 cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          {/* Line 3 (Optional): License No. — Only renders if populated */}
          {siteData.licenses && siteData.licenses.trim() !== '' && (
            <p className="text-xs text-[#6B5545]">
              License No. {siteData.licenses}
            </p>
          )}
        </div>
      </footer>

      {/* 7. Floating Action Buttons (Visible after scrolling past Hero, >= 44x44px touch targets) */}
      {showFloating && (
        <div
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5"
          role="region"
          aria-label="Quick Booking Actions"
        >
          {/* Secondary Smaller Button: WhatsApp (Gold Outline) */}
          <a
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.floating.whatsappAria}
            title="WhatsApp"
            className="btn-gold-secondary min-w-[44px] min-h-[44px] px-3.5 py-2.5 rounded-full shadow-md flex items-center justify-center gap-1.5 text-xs font-bold text-[#3F2E22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030]"
          >
            <MessageCircle className="w-4 h-4 text-[#8F7030] shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Primary Button: Book on Vagaro (Mirrored Gold with Glow) */}
          <a
            href={siteData.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.floating.bookAria}
            className="btn-gold-primary min-w-[48px] min-h-[46px] px-5 py-3 rounded-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>{t.floating.book}</span>
          </a>
        </div>
      )}
    </>
  );
};
