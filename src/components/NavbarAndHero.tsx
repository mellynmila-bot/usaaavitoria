import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Calendar, Globe, MapPin, Menu, Sparkles, X } from 'lucide-react';
import { Language, siteData, translations } from '../data/siteData';
import { ResilientImage } from './OrnamentDivider';

interface NavbarAndHeroProps {
  lang: Language;
  onToggleLang: () => void;
}

export const NavbarAndHero: React.FC<NavbarAndHeroProps> = ({ lang, onToggleLang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);
      if (!shouldReduceMotion && y < 700) {
        setScrollY(y);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduceMotion]);

  const navLinks = [
    { href: '#servicos', label: t.nav.services },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#sobre', label: t.nav.about },
    { href: '#avaliacoes', label: t.nav.reviews },
    { href: '#studio', label: t.nav.studio },
    { href: '#faq', label: t.nav.faq },
  ];

  const cardIcons = [
    <MapPin key="map" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.6} />,
    <Calendar key="cal" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.6} />,
    <Sparkles key="sparkle" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.6} />,
  ];

  return (
    <>
      {/* Skip to content link (ADA / WCAG 2.1 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-[#3F2E22] focus:text-[#F6EFE4] focus:font-semibold focus:shadow-lg focus:outline-2 focus:outline-[#F2DFA7]"
      >
        {t.skipToContent}
      </a>

      {/* Fixed Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F6EFE4]/95 backdrop-blur-md border-b border-[#C29F5B]/50 shadow-sm py-2.5'
            : 'bg-[#F6EFE4]/85 backdrop-blur-xs border-b border-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand Textual Logo: VIVA · Beauty */}
          <a
            href="#"
            className="flex items-baseline gap-1.5 text-[#3F2E22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F7030] whitespace-nowrap shrink-0"
            aria-label="VIVA Beauty — Home"
          >
            <span className="font-serif-display text-xl sm:text-[26px] tracking-[0.2em] font-normal">
              VIVA
            </span>
            <span className="text-[#8F7030] text-sm" aria-hidden="true">
              ·
            </span>
            <span className="text-[11px] sm:text-sm uppercase tracking-[0.22em] text-[#6B5545] font-medium">
              Beauty
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#3F2E22]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 hover:text-[#8F7030] transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#8F7030] hover:after:w-full after:transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F7030] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher (visible on mobile & desktop) + Book CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* PT | EN Selector with Mirrored Gold Border and Clear Label */}
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={t.langSwitchAria}
              className="btn-gold-secondary min-h-[40px] sm:min-h-[42px] px-2.5 sm:px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#3F2E22] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030] whitespace-nowrap shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-[#8F7030] shrink-0" aria-hidden="true" />
              <span className="font-bold">
                <span className={lang === 'pt' ? 'text-[#3F2E22] underline decoration-[#8F7030]' : 'text-[#6B5545]'}>
                  PT
                </span>
                <span className="mx-1 text-[#C29F5B]">|</span>
                <span className={lang === 'en' ? 'text-[#3F2E22] underline decoration-[#8F7030]' : 'text-[#6B5545]'}>
                  EN
                </span>
              </span>
              <span className="hidden xl:inline text-[11px] font-normal text-[#6B5545] border-l border-[#C29F5B]/40 pl-1.5">
                {t.langSwitchLabel}
              </span>
            </button>

            {/* Primary Book Button (Desktop & Tablet) */}
            <a
              href={siteData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center btn-gold-primary min-h-[42px] px-5 py-2 rounded-[8px] text-xs font-bold uppercase tracking-[0.16em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
            >
              {t.nav.book}
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[8px] border border-[#C29F5B]/60 bg-[#FBF7F0] text-[#3F2E22] hover:bg-[#EADFCC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel (Beige with Wood Molding Detail) */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden bg-[#F6EFE4] border-b-2 border-[#C29F5B] shadow-xl"
          >
            <div className="h-2 bg-wood-molding border-y border-[#C29F5B]/50" />
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#C29F5B]/30">
                <span className="text-xs uppercase tracking-[0.18em] text-[#6B5545] font-semibold">
                  {t.langSwitchLabel}
                </span>
                <button
                  type="button"
                  onClick={onToggleLang}
                  className="text-xs font-semibold text-[#8F7030] underline py-1 px-2 cursor-pointer"
                >
                  {lang === 'pt' ? 'Switch to English (EN)' : 'Mudar para Português (PT)'}
                </button>
              </div>

              <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-[8px] bg-[#FBF7F0] border border-[#C29F5B]/35 text-sm font-medium text-[#3F2E22] hover:border-[#8F7030] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <a
                  href={siteData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[46px] flex items-center justify-center btn-gold-primary rounded-[8px] text-xs font-bold uppercase tracking-[0.18em]"
                >
                  {t.hero.ctaPrimary}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 6.1 Hero Section */}
      <section
        id="hero"
        className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F6EFE4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 32%, rgba(242, 223, 167, 0.42) 0%, rgba(194, 159, 91, 0.12) 38%, rgba(246, 239, 228, 0) 70%), radial-gradient(circle at 15% 80%, rgba(234, 223, 204, 0.8) 0%, rgba(246, 239, 228, 0) 60%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Photo Column: FIRST on mobile (order-1), RIGHT on desktop (lg:order-2) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 lg:col-span-5 flex justify-center"
            >
              <div
                className="relative w-full max-w-[290px] sm:max-w-[360px] lg:max-w-[420px]"
                style={{
                  transform: shouldReduceMotion ? 'none' : `translateY(${scrollY * 0.04}px)`,
                }}
              >
                {/* Ambient Golden Halo Behind Arch */}
                <div
                  className="absolute -inset-4 rounded-t-full rounded-b-[20px] opacity-60 blur-2xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(242,223,167,0.75) 0%, rgba(194,159,91,0.25) 60%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Arch Frame with 2px Gold Mirror & Offset Line */}
                <div className="photo-frame-gold rounded-t-[220px] rounded-b-[14px] p-[3px] shadow-gold-glow">
                  <div className="photo-shimmer-overlay rounded-t-[217px] rounded-b-[11px] overflow-hidden bg-[#EADFCC] aspect-[4/5]">
                    <ResilientImage
                      src={siteData.images.hero}
                      alt={t.hero.photoAlt}
                      loading="eager"
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-103"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column: SECOND on mobile (order-2), LEFT on desktop (lg:order-1) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1 lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
            >
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#8F7030] font-semibold">
                {t.hero.eyebrow}
              </p>

              {/* Main Headline (Single H1 on the page) */}
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] text-[#3F2E22] tracking-tight text-balance">
                <span className="block">{t.hero.titlePart1}</span>
                <span className="block text-gold-hero italic mt-1">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Impact Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#3F2E22]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.hero.subtitle}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1">
                <a
                  href={siteData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary min-h-[48px] px-7 py-3.5 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22] whitespace-nowrap shrink-0"
                >
                  {t.hero.ctaPrimary}
                </a>

                <a
                  href="#servicos"
                  className="btn-gold-secondary min-h-[48px] px-6 py-3.5 rounded-[10px] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030] whitespace-nowrap shrink-0"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* 3 Subtle Cards (Smooth corners, fine gold border, fine icon, semi-transparent background) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-left">
                {t.hero.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="rounded-[10px] bg-[#FBF7F0]/85 backdrop-blur-xs border border-[#C29F5B]/45 p-3.5 flex items-start gap-2.5 shadow-2xs"
                  >
                    <div className="mt-0.5 p-1.5 rounded-full bg-[#F6EFE4] border border-[#C29F5B]/35 shrink-0">
                      {cardIcons[idx]}
                    </div>
                    <div>
                      <p className="text-xs sm:text-[13px] font-semibold text-[#3F2E22] leading-snug">
                        {card.title}
                      </p>
                      <p className="text-[11px] text-[#6B5545] mt-0.5 leading-tight">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wood Molding Fillet at the Base of Hero */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3 bg-wood-molding border-t border-[#C29F5B]/60"
          aria-hidden="true"
        />
      </section>

      {/* Infinite Mirrored Gold Loop Bar (Between Hero and Services — No Pause Button) */}
      <div
        role="region"
        aria-label="Brand Highlights Marquee"
        className="relative bg-gold-mirror border-y border-[#8F6F2E]/50 shadow-gold-glow py-3 overflow-hidden"
      >
        <div className="overflow-hidden w-full">
          <div className="animate-marquee items-center">
            {[0, 1, 2].map((repeatIndex) => (
              <div
                key={repeatIndex}
                className="flex items-center shrink-0"
                aria-hidden={repeatIndex > 0 ? 'true' : undefined}
              >
                {t.marquee.items.map((item, idx) => (
                  <span
                    key={`${repeatIndex}-${idx}`}
                    className="inline-flex items-center text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#2D1F14] whitespace-nowrap"
                  >
                    <span className="px-4 sm:px-6">{item}</span>
                    <span className="text-[#5A3E2B]" aria-hidden="true">
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
