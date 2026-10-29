import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { Language, siteData, translations } from '../data/siteData';
import { OrnamentDivider, ResilientImage } from './OrnamentDivider';

interface AboutAndReviewsProps {
  lang: Language;
}

export const AboutAndReviews: React.FC<AboutAndReviewsProps> = ({ lang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();

  // Mobile arrow navigation state for Reviews (no pause button, manual arrow navigation)
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const handlePrevReview = () => {
    setActiveReviewIdx(
      (prev) => (prev - 1 + siteData.testimonials.length) % siteData.testimonials.length
    );
  };

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % siteData.testimonials.length);
  };

  return (
    <>
      {/* 6.4 About + Instagram Section (Walnut Wood Background) */}
      <section
        id="sobre"
        className="relative py-16 sm:py-24 bg-wood-walnut text-[#F6EFE4] border-b border-[#C29F5B]/50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#F2DFA7] font-semibold mb-2">
              {t.about.eyebrow}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F6EFE4] leading-tight text-balance">
              {t.about.titlePart1}{' '}
              <span className="text-gold-mirror italic">{t.about.titleHighlight}</span>
            </h2>
            <OrnamentDivider variant="on-wood" />
            <p className="text-base sm:text-lg text-[#F6EFE4]/95 leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Two Columns: Arch Photo + Ivory Story Card & Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Column: Vitória Reis Photo in Arch Frame */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[290px] sm:max-w-[370px] lg:max-w-[400px]">
                <div className="photo-frame-gold rounded-t-[210px] rounded-b-[14px] p-[3px] shadow-gold-glow">
                  <div className="photo-shimmer-overlay rounded-t-[207px] rounded-b-[11px] overflow-hidden aspect-[4/5] bg-[#5A3E2B]">
                    <ResilientImage
                      src={siteData.images.about}
                      alt={`${siteData.specialistName} — ${siteData.brandName}`}
                      loading="lazy"
                      width={600}
                      height={750}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-103"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Quote, Paragraphs, Indicators & CTA inside Ivory Cards */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6"
            >
              {/* Main Ivory Story Card */}
              <div className="card-ivory p-5 sm:p-8 space-y-5 shadow-lg">
                {/* Brand Quote with Gold Ornament & Pinyon Script Signature */}
                <blockquote className="pb-4 border-b border-[#C29F5B]/35">
                  <p className="font-serif-display italic text-lg sm:text-2xl text-[#3F2E22] leading-snug">
                    <span className="text-[#8F7030] text-2xl sm:text-3xl mr-1.5 align-middle" aria-hidden="true">
                      ✦
                    </span>
                    {t.about.quote}
                  </p>
                  <footer className="mt-2 flex items-center justify-end gap-2">
                    <span className="text-xs uppercase tracking-widest text-[#6B5545]">—</span>
                    <cite className="not-italic font-signature text-3xl sm:text-4xl text-[#8F7030]">
                      Vitória Reis
                    </cite>
                  </footer>
                </blockquote>

                {/* Emotional Paragraph 1 */}
                <p className="text-sm sm:text-base text-[#3F2E22] leading-relaxed">
                  {t.about.p1}
                </p>

                {/* Technical Paragraph 2 */}
                <p className="text-sm sm:text-base text-[#3F2E22]/90 leading-relaxed">
                  {t.about.p2}
                </p>

                {/* Optional Licenses Line (Only renders if filled in siteData.licenses) */}
                {siteData.licenses && siteData.licenses.trim() !== '' && (
                  <p className="text-xs text-[#6B5545] pt-2 border-t border-[#C29F5B]/25">
                    <strong className="font-semibold text-[#3F2E22]">
                      {t.about.licensesLabel}
                    </strong>{' '}
                    {siteData.licenses}
                  </p>
                )}
              </div>

              {/* 4 Animated Indicators (Ivory Cards on Wood) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.about.indicators.map((ind, idx) => (
                  <motion.div
                    key={idx}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="card-ivory p-3.5 text-center flex flex-col items-center justify-center"
                  >
                    <span className="text-[#8F7030] text-xs mb-1" aria-hidden="true">
                      ✦
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#3F2E22] leading-snug">
                      {ind}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Book with Vitória CTA */}
              <div className="pt-1 text-center lg:text-left">
                <a
                  href={siteData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
                >
                  {t.about.cta}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Gold Divider Before Instagram Sub-Block */}
          <div className="my-12 sm:my-14">
            <OrnamentDivider variant="on-wood" />
          </div>

          {/* Instagram Sub-Block (Without "Em resumo" block) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-7 sm:space-y-8"
          >
            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F6EFE4]">
                {t.about.instagramTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#F6EFE4]/90">
                {t.about.instagramSubtitle}
              </p>
            </div>

            {/* Avatar with Gold Ring + Handle + Follow Button */}
            <div className="card-ivory max-w-xl mx-auto p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-[2.5px] rounded-full bg-gold-mirror shadow-gold-glow shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#EADFCC]">
                    <ResilientImage
                      src={siteData.images.about}
                      alt={`${siteData.instagramHandle} avatar`}
                      loading="lazy"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-serif-display text-lg text-[#3F2E22] font-semibold">
                    {siteData.brandName} · {siteData.specialistName}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#8F7030]">
                    {siteData.instagramHandle}
                  </p>
                </div>
              </div>

              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-gold-secondary min-h-[42px] px-4 py-2 rounded-[8px] text-xs font-bold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030] whitespace-nowrap shrink-0"
              >
                <Instagram className="w-4 h-4 text-[#8F7030]" />
                {t.about.followBtn}
              </a>
            </div>

            {/* Official Instagram Reel Embed (Playable in-page, no custom cover/thumbnail) */}
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] photo-frame-gold rounded-[12px] overflow-hidden bg-[#FBF7F0]">
                <iframe
                  src={siteData.reelEmbedUrl}
                  title={t.about.reelTitle}
                  className="w-full h-[500px] sm:h-[580px] border-0 bg-[#FBF7F0] rounded-[10px]"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Dual CTAs: Follow @vivabeautymv · Book */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-secondary min-h-[46px] px-6 py-3 rounded-[10px] text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
              >
                <Instagram className="w-4 h-4 text-[#8F7030]" />
                {t.about.followBtn}
              </a>

              <a
                href={siteData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary min-h-[46px] px-7 py-3 rounded-[10px] text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
              >
                {t.about.bookBtn}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Wood Molding Fillet at Base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2.5 bg-wood-molding border-t border-[#C29F5B]/60"
          aria-hidden="true"
        />
      </section>

      {/* 6.5 Feedbacks / Reviews Section (Light Beige Background) */}
      <section
        id="avaliacoes"
        className="relative py-16 sm:py-24 bg-[#F6EFE4] text-[#3F2E22] border-b border-[#C29F5B]/40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#8F7030] font-semibold mb-2">
              {t.reviews.eyebrow}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3F2E22] leading-tight text-balance">
              {t.reviews.titlePart1}{' '}
              <span className="text-[#8F7030] italic">{t.reviews.titleHighlight}</span>
            </h2>
            <OrnamentDivider variant="on-light" />
            <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed">
              {t.reviews.subtitle}
            </p>
          </motion.div>

          {/* Desktop 3x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {siteData.testimonials.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="card-ivory p-6 flex flex-col justify-between relative"
              >
                <div>
                  {/* 5 Golden Stars with Glow & Decorative Quote Mark */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex items-center gap-1"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, sIdx) => (
                        <svg
                          key={sIdx}
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="#C29F5B"
                          className="drop-shadow-[0_0_6px_rgba(214,174,87,0.45)]"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      className="font-serif-display text-3xl text-[#C29F5B]/60 leading-none select-none"
                      aria-hidden="true"
                    >
                      “
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#3F2E22] leading-relaxed italic">
                    {item.quote[lang]}
                  </p>
                </div>

                {/* Author & Service */}
                <div className="mt-5 pt-3 border-t border-[#C29F5B]/30 flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-[#3F2E22]">{item.name}</span>
                  <span className="text-[#8F7030] font-medium text-right">{item.service[lang]}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile Carousel (Arrows Only — No Pause Button) */}
          <div className="md:hidden mt-8 space-y-4">
            <div className="card-ivory p-5 sm:p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, sIdx) => (
                    <svg
                      key={sIdx}
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="#C29F5B"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#6B5545] tabular-nums">
                  {activeReviewIdx + 1} / {siteData.testimonials.length}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#3F2E22] leading-relaxed italic min-h-[110px]">
                {siteData.testimonials[activeReviewIdx].quote[lang]}
              </p>

              <div className="mt-4 pt-3 border-t border-[#C29F5B]/30 flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-[#3F2E22]">
                  {siteData.testimonials[activeReviewIdx].name}
                </span>
                <span className="text-[#8F7030] font-medium text-right">
                  {siteData.testimonials[activeReviewIdx].service[lang]}
                </span>
              </div>
            </div>

            {/* Mobile Carousel Controls: Left and Right Arrows Only */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevReview}
                aria-label={t.reviews.prevReview}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#FBF7F0] border border-[#C29F5B]/70 text-[#3F2E22] hover:bg-[#EADFCC] cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold text-[#6B5545] tabular-nums">
                {activeReviewIdx + 1} / {siteData.testimonials.length}
              </span>

              <button
                type="button"
                onClick={handleNextReview}
                aria-label={t.reviews.nextReview}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#FBF7F0] border border-[#C29F5B]/70 text-[#3F2E22] hover:bg-[#EADFCC] cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href={siteData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
            >
              {t.reviews.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
