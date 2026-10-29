import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Expand } from 'lucide-react';
import {
  Language,
  ServiceCategoryKey,
  siteData,
  translations,
} from '../data/siteData';
import { OrnamentDivider, ResilientImage } from './OrnamentDivider';
import { LightboxModal, LightboxSlide } from './LightboxModal';

interface ServicesAndGalleryProps {
  lang: Language;
}

type FilterKey = 'all' | ServiceCategoryKey;

export const ServicesAndGallery: React.FC<ServicesAndGalleryProps> = ({ lang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<FilterKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t.services.categories.all },
    { key: 'extensions', label: t.services.categories.extensions },
    { key: 'lift_lamination', label: t.services.categories.lift_lamination },
    { key: 'brows', label: t.services.categories.brows },
    { key: 'wax', label: t.services.categories.wax },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? siteData.services
      : siteData.services.filter((s) => s.category === activeCategory);

  // Separate services with photos from compact services without photos for clean visual layout
  const servicesWithPhoto = filteredServices.filter((s) => Boolean(s.image));
  const servicesWithoutPhoto = filteredServices.filter((s) => !s.image);

  // Gallery slides without any caption/title when expanded
  const gallerySlides: LightboxSlide[] = siteData.gallery.map((photo) => ({
    url: photo.url,
    alt: photo.alt[lang],
  }));

  const handlePrevSlide = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + gallerySlides.length) % gallerySlides.length
    );
  };

  const handleNextSlide = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % gallerySlides.length
    );
  };

  return (
    <>
      {/* 6.2 Services Section (Wood Background) */}
      <section
        id="servicos"
        className="relative py-16 sm:py-24 bg-wood text-[#F6EFE4] border-b border-[#C29F5B]/50 overflow-hidden"
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
            <p className="text-xs uppercase tracking-[0.22em] text-[#F2DFA7] font-semibold mb-2">
              {t.services.eyebrow}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F6EFE4] leading-tight text-balance">
              {t.services.titlePart1}{' '}
              <span className="text-gold-mirror italic">{t.services.titleHighlight}</span>
            </h2>
            <OrnamentDivider variant="on-wood" />
            <p className="text-base sm:text-lg text-[#F6EFE4]/95 leading-relaxed">
              {t.services.subtitle}
            </p>
          </motion.div>

          {/* Category Filter Tabs (100% responsive on mobile and desktop) */}
          <div
            role="tablist"
            aria-label={t.nav.services}
            className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.key}`}
                  id={`tab-${cat.key}`}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] text-center ${
                    idx === 0 ? 'col-span-2 sm:col-span-1' : ''
                  } ${
                    isActive
                      ? 'btn-gold-primary shadow-gold-glow'
                      : 'bg-[#FBF7F0]/95 text-[#3F2E22] border border-[#C29F5B]/60 hover:bg-[#F6EFE4]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            className="mt-8 sm:mt-10 space-y-8"
          >
            {/* Services WITH Photo (2 columns desktop, 1 mobile) */}
            {servicesWithPhoto.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
                {servicesWithPhoto.map((service, idx) => (
                  <motion.article
                    key={service.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                    className="card-ivory p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch group"
                  >
                    {/* Service Photo with Mirrored Gold Frame */}
                    {service.image && (
                      <div className="w-full sm:w-44 md:w-48 shrink-0">
                        <div className="photo-frame-gold rounded-[10px] h-full">
                          <div className="photo-shimmer-overlay rounded-[8px] overflow-hidden h-56 sm:h-full bg-[#EADFCC]">
                            <ResilientImage
                              src={service.image}
                              alt={service.alt ? service.alt[lang] : service.name[lang]}
                              loading="lazy"
                              width={360}
                              height={420}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Service Content & Grouped Price Table (Application + Fills) */}
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif-display text-xl sm:text-2xl text-[#3F2E22] leading-snug">
                            {service.name[lang]}
                          </h3>
                          <span className="font-bold text-base sm:text-lg text-[#8F7030] tabular-nums whitespace-nowrap shrink-0">
                            {service.prices[0]?.price}
                          </span>
                        </div>
                        {service.description && (
                          <p className="mt-2 text-sm text-[#3F2E22]/90 leading-relaxed">
                            {service.description[lang]}
                          </p>
                        )}
                      </div>

                      {/* Price Table showing Set Application & Maintenance Fills */}
                      <div className="space-y-3 pt-2">
                        <div className="rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/45 overflow-hidden">
                          <table className="w-full text-left border-collapse">
                            <thead className="sr-only">
                              <tr>
                                <th scope="col">{t.services.priceColService}</th>
                                <th scope="col">{t.services.priceColValue}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#C29F5B]/25 text-xs sm:text-sm">
                              {service.prices.map((p, pIdx) => (
                                <tr
                                  key={pIdx}
                                  className={pIdx === 0 ? 'bg-[#EADFCC]/45' : ''}
                                >
                                  <td className="py-2.5 px-3 font-medium text-[#3F2E22]">
                                    {p.label[lang]}
                                  </td>
                                  <td className="py-2.5 px-3 text-right font-bold text-[#8F7030] tabular-nums whitespace-nowrap">
                                    {p.price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="flex justify-end">
                          <a
                            href={siteData.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto btn-gold-primary min-h-[44px] px-5 py-2.5 rounded-[8px] text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
                          >
                            {t.services.bookCardCta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Services WITHOUT Photo (Consultation, Removal, Tweezers, Wax) */}
            {servicesWithoutPhoto.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {servicesWithoutPhoto.map((service, idx) => (
                  <motion.article
                    key={service.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className={`card-ivory p-5 sm:p-6 flex flex-col justify-between gap-4 ${
                      service.description ? 'md:col-span-2 lg:col-span-3' : ''
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif-display text-xl sm:text-2xl text-[#3F2E22] leading-snug">
                          {service.name[lang]}
                        </h3>
                        <span className="px-3 py-1 rounded-md bg-[#F6EFE4] border border-[#C29F5B]/45 font-bold text-sm sm:text-base text-[#8F7030] tabular-nums whitespace-nowrap shrink-0">
                          {service.prices[0]?.price}
                        </span>
                      </div>

                      {service.description && (
                        <p className="text-sm text-[#3F2E22]/90 leading-relaxed">
                          {service.description[lang]}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-end pt-2 border-t border-[#C29F5B]/25">
                      <a
                        href={siteData.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-gold-primary min-h-[42px] px-5 py-2 rounded-[8px] text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
                      >
                        {t.services.bookCardCta}
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>

          {/* General Note & Section CTA */}
          <div className="mt-10 text-center space-y-6">
            <div className="card-ivory max-w-2xl mx-auto px-5 py-3.5 text-xs sm:text-sm text-[#3F2E22]">
              {t.services.note}
            </div>

            <div>
              <a
                href={siteData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
              >
                {t.services.sectionCta}
              </a>
            </div>
          </div>
        </div>

        {/* Wood Molding Fillet at Base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2.5 bg-wood-molding border-t border-[#C29F5B]/60"
          aria-hidden="true"
        />
      </section>

      {/* 6.3 Gallery Section (Light Beige Background) */}
      <section
        id="galeria"
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
              {t.gallery.eyebrow}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3F2E22] leading-tight text-balance">
              {t.gallery.titlePart1}{' '}
              <span className="text-[#8F7030] italic">{t.gallery.titleHighlight}</span>
            </h2>
            <OrnamentDivider variant="on-light" />
            <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed">
              {t.gallery.subtitle}
            </p>
          </motion.div>

          {/* 8 Photos Grid (4x2 Desktop, 2 cols Mobile — No title on hover or lightbox) */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {siteData.gallery.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`${t.gallery.openImageAria} ${index + 1}`}
                  className="w-full text-left photo-frame-gold rounded-[10px] block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F7030]"
                >
                  <div className="photo-shimmer-overlay relative rounded-[8px] overflow-hidden aspect-[4/5] bg-[#EADFCC]">
                    <ResilientImage
                      src={photo.url}
                      alt={photo.alt[lang]}
                      loading="lazy"
                      width={450}
                      height={560}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Hover Expand Icon Only (No Title Text) */}
                    <div className="absolute inset-0 bg-[#2D1F14]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                      <span className="p-2 rounded-full bg-[#3F2E22]/85 text-[#F2DFA7] border border-[#C29F5B]/50">
                        <Expand className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Note & CTA */}
          <div className="mt-10 text-center space-y-5">
            <p className="text-xs sm:text-sm text-[#6B5545] italic">
              {t.gallery.note}
            </p>
            <div>
              <a
                href={siteData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
              >
                {t.gallery.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox Modal (No Captions) */}
      <LightboxModal
        slides={gallerySlides}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        labels={{
          close: t.gallery.lightboxClose,
          prev: t.gallery.lightboxPrev,
          next: t.gallery.lightboxNext,
        }}
      />
    </>
  );
};
