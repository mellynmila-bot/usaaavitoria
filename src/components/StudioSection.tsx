import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Expand,
  Heart,
  Lock,
  MapPin,
  Navigation,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Language, siteData, translations } from '../data/siteData';
import { OrnamentDivider, ResilientImage } from './OrnamentDivider';
import { LightboxModal, LightboxSlide } from './LightboxModal';

interface StudioSectionProps {
  lang: Language;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();

  // Studio 6-photo carousel state (arrows only, no pause button)
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const photos = siteData.studioPhotos;

  const handlePrevCarousel = () => {
    setCarouselIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNextCarousel = () => {
    setCarouselIdx((prev) => (prev + 1) % photos.length);
  };

  const studioSlides: LightboxSlide[] = useMemo(
    () =>
      photos.map((p) => ({
        url: p.url,
        alt: p.alt[lang],
      })),
    [photos, lang]
  );

  // Real-time America/New_York status & current day detection
  const [nyStatus, setNyStatus] = useState<{
    dayOfWeek: number;
    isOpen: boolean;
  }>({ dayOfWeek: 1, isOpen: true });

  useEffect(() => {
    const checkNyTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: siteData.timezone,
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        });
        const parts = formatter.formatToParts(now);
        const weekdayStr = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
        const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10);
        const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

        const dayMap: Record<string, number> = {
          Sun: 0,
          Mon: 1,
          Tue: 2,
          Wed: 3,
          Thu: 4,
          Fri: 5,
          Sat: 6,
        };
        const dayOfWeek = dayMap[weekdayStr] ?? 1;
        const totalMinutes = (hour === 24 ? 0 : hour) * 60 + minute;

        const scheduleGroup = siteData.hours.find((h) => h.days.includes(dayOfWeek));
        const isOpen =
          scheduleGroup &&
          scheduleGroup.openMinutes !== null &&
          scheduleGroup.closeMinutes !== null
            ? totalMinutes >= scheduleGroup.openMinutes &&
              totalMinutes < scheduleGroup.closeMinutes
            : false;

        setNyStatus({ dayOfWeek, isOpen });
      } catch {
        setNyStatus({ dayOfWeek: 1, isOpen: true });
      }
    };

    checkNyTime();
    const interval = window.setInterval(checkNyTime, 60000);
    return () => window.clearInterval(interval);
  }, []);

  const featureIcons = [
    <ShieldCheck key="hygiene" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
    <Heart key="comfort" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
    <Lock key="privacy" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
    <MapPin key="access" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
    <Sparkles key="exclusive" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
    <Award key="quality" className="w-5 h-5 text-[#8F7030]" strokeWidth={1.6} />,
  ];

  // Determine visible 3-photo window for desktop carousel
  const visiblePhotos = [
    { photo: photos[carouselIdx], realIndex: carouselIdx },
    { photo: photos[(carouselIdx + 1) % photos.length], realIndex: (carouselIdx + 1) % photos.length },
    { photo: photos[(carouselIdx + 2) % photos.length], realIndex: (carouselIdx + 2) % photos.length },
  ];

  const mapQuery =
    siteData.studioAddress && siteData.studioAddress.trim() !== ''
      ? encodeURIComponent(siteData.studioAddress.trim())
      : 'Edgartown,+MA+02539';

  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <section
        id="studio"
        className="relative py-16 sm:py-24 bg-wood text-[#F6EFE4] border-b border-[#C29F5B]/50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          {/* Studio Logo + Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            {/* Studio Logo Centered with Fine Gold Frame */}
            <div className="flex justify-center">
              <div className="photo-frame-gold rounded-[14px] p-[2px] w-32 sm:w-44 bg-[#FBF7F0] shadow-gold-glow">
                <div className="rounded-[12px] overflow-hidden bg-[#FBF7F0]">
                  <ResilientImage
                    src={siteData.images.studioLogo}
                    alt="VIVA Beauty Studio Logo"
                    loading="lazy"
                    width={176}
                    height={176}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#F2DFA7] font-semibold mb-2">
                {t.studio.eyebrow}
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F6EFE4] leading-tight text-balance">
                {t.studio.titlePart1}{' '}
                <span className="text-gold-mirror italic">{t.studio.titleHighlight}</span>
              </h2>
              <OrnamentDivider variant="on-wood" />
              <p className="text-base sm:text-lg text-[#F6EFE4]/95 leading-relaxed">
                {t.studio.subtitle}
              </p>
            </div>

            {/* Brand Text & Welcome Quote in Ivory Card */}
            <div className="card-ivory p-5 sm:p-8 text-center space-y-4 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-[#3F2E22] leading-relaxed">
                {t.studio.brandText}
              </p>
              <p className="font-serif-display italic text-lg sm:text-2xl text-[#8F7030] pt-2 border-t border-[#C29F5B]/30">
                {t.studio.welcomeQuote}
              </p>
            </div>
          </motion.div>

          {/* 6 Studio Photos Carousel (Arrow Controls Only — Clickable for Lightbox) */}
          <div
            role="region"
            aria-label="Studio Photos Carousel"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visiblePhotos.map(({ photo, realIndex }, slotIdx) => (
                <div
                  key={`${photo.id}-${slotIdx}`}
                  className={slotIdx > 0 ? 'hidden md:block' : 'block'}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(realIndex)}
                    aria-label={`${t.gallery.openImageAria} ${realIndex + 1}`}
                    className="w-full photo-frame-gold rounded-[12px] block group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2DFA7]"
                  >
                    <div className="photo-shimmer-overlay relative rounded-[10px] overflow-hidden aspect-[4/3] bg-[#4B3322]">
                      <ResilientImage
                        src={photo.url}
                        alt={photo.alt[lang]}
                        loading="lazy"
                        width={520}
                        height={390}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F14]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5">
                        <span className="text-xs font-medium text-[#F6EFE4] tabular-nums">
                          {realIndex + 1} / {photos.length}
                        </span>
                        <span className="p-1.5 rounded-full bg-[#3F2E22]/85 text-[#F2DFA7] border border-[#C29F5B]/50">
                          <Expand className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Carousel Controls: Left Arrow, Counter, Right Arrow (No Pause Button) */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevCarousel}
                aria-label={t.studio.carouselPrev}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#FBF7F0] text-[#3F2E22] border border-[#C29F5B] hover:bg-[#EADFCC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] transition-colors cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="px-3.5 py-1.5 rounded-md bg-[#3F2E22]/85 border border-[#C29F5B]/50 text-xs font-semibold text-[#F6EFE4] tabular-nums">
                {carouselIdx + 1} / {photos.length}
              </span>

              <button
                type="button"
                onClick={handleNextCarousel}
                aria-label={t.studio.carouselNext}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#FBF7F0] text-[#3F2E22] border border-[#C29F5B] hover:bg-[#EADFCC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] transition-colors cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Integrated Studio Post (Instagram Embed Dcd1Xj9O_FB, no custom cover) */}
          <div className="space-y-4 text-center">
            <h3 className="font-serif-display text-xl sm:text-2xl text-[#F2DFA7]">
              {t.studio.behindTheScenes}
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] photo-frame-gold rounded-[12px] overflow-hidden bg-[#FBF7F0]">
                <iframe
                  src={siteData.studioPostEmbedUrl}
                  title={t.studio.behindTheScenes}
                  className="w-full h-[480px] sm:h-[530px] border-0 bg-[#FBF7F0] rounded-[10px]"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* 6 Studio Feature Cards (3x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {t.studio.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="card-ivory p-5 flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-full bg-[#F6EFE4] border border-[#C29F5B]/45 shrink-0">
                  {featureIcons[idx]}
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-[#3F2E22]">
                    {feat.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#3F2E22]/90 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location + Business Hours + Google Maps Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left: Location & Business Hours Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Location Card */}
              <div className="card-ivory p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#8F7030] shrink-0" strokeWidth={1.7} />
                  <h3 className="font-serif-display text-2xl text-[#3F2E22]">
                    {t.studio.locationTitle}
                  </h3>
                </div>

                <p className="text-base font-semibold text-[#3F2E22]">
                  {siteData.studioAddress && siteData.studioAddress.trim() !== ''
                    ? siteData.studioAddress
                    : siteData.locationPostal}
                </p>

                {(!siteData.studioAddress || siteData.studioAddress.trim() === '') && (
                  <p className="text-xs sm:text-sm text-[#6B5545] bg-[#F6EFE4] p-3 rounded-[8px] border border-[#C29F5B]/35">
                    {t.studio.addressNotice}
                  </p>
                )}

                <div className="pt-1">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-gold-secondary min-h-[42px] px-4 py-2 rounded-[8px] text-xs font-bold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030]"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#8F7030]" />
                    {t.studio.directionsBtn}
                  </a>
                </div>
              </div>

              {/* Business Hours Card (America/New_York live status) */}
              <div className="card-ivory p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-5 h-5 text-[#8F7030] shrink-0" strokeWidth={1.7} />
                      <h3 className="font-serif-display text-2xl text-[#3F2E22]">
                        {t.studio.hoursTitle}
                      </h3>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F6EFE4] border border-[#C29F5B]/50 text-[#3F2E22]">
                      {nyStatus.isOpen ? t.studio.openNow : t.studio.closedNow}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8F7030]">
                    {t.studio.byAppointmentOnly} · {t.studio.nyTimeNote}
                  </p>

                  <div className="divide-y divide-[#C29F5B]/25 pt-1">
                    {siteData.hours.map((row, rIdx) => {
                      const isToday = row.days.includes(nyStatus.dayOfWeek);
                      return (
                        <div
                          key={rIdx}
                          className={`py-2.5 px-2.5 rounded-md flex items-center justify-between gap-2 text-xs sm:text-sm ${
                            isToday
                              ? 'bg-[#F6EFE4] font-bold text-[#3F2E22] border border-[#C29F5B]/45'
                              : 'text-[#3F2E22]/90'
                          }`}
                        >
                          <span className="flex items-center gap-2 flex-wrap">
                            <span>{row.label[lang]}</span>
                            {isToday && (
                              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#8F7030] text-[#FBF7F0]">
                                {t.studio.todayBadge}
                              </span>
                            )}
                          </span>
                          <span className="tabular-nums font-semibold whitespace-nowrap">
                            {row.time[lang]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Google Maps Integrated Embed */}
            <div className="lg:col-span-7 flex">
              <div className="w-full photo-frame-gold rounded-[12px] overflow-hidden bg-[#EADFCC] min-h-[340px] sm:min-h-[430px]">
                <iframe
                  src={mapEmbedUrl}
                  title="VIVA Beauty Location — Edgartown, Martha's Vineyard, MA 02539"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[340px] sm:min-h-[430px] border-0 rounded-[10px]"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center pt-2">
            <a
              href={siteData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-gold-primary min-h-[48px] px-8 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] whitespace-nowrap shrink-0"
            >
              {t.studio.cta}
            </a>
          </div>
        </div>

        {/* Wood Molding Fillet at Base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2.5 bg-wood-molding border-t border-[#C29F5B]/60"
          aria-hidden="true"
        />
      </section>

      {/* Studio Photos Lightbox Modal */}
      <LightboxModal
        slides={studioSlides}
        currentIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={() =>
          setLightboxIdx((prev) =>
            prev === null ? null : (prev - 1 + studioSlides.length) % studioSlides.length
          )
        }
        onNext={() =>
          setLightboxIdx((prev) =>
            prev === null ? null : (prev + 1) % studioSlides.length
          )
        }
        labels={{
          close: t.gallery.lightboxClose,
          prev: t.gallery.lightboxPrev,
          next: t.gallery.lightboxNext,
        }}
      />
    </>
  );
};
