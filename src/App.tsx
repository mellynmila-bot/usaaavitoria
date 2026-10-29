import React, { useEffect, useState } from 'react';
import { Language, translations } from './data/siteData';
import { NavbarAndHero } from './components/NavbarAndHero';
import { ServicesAndGallery } from './components/ServicesAndGallery';
import { AboutAndReviews } from './components/AboutAndReviews';
import { StudioSection } from './components/StudioSection';
import { BookingSection } from './components/BookingSection';
import { FaqAndFooter } from './components/FaqAndFooter';
import { LegalModals, LegalModalType } from './components/LegalModals';

const STORAGE_KEY = 'viva_beauty_lang';

export function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'pt') {
        return urlLang;
      }
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'pt') {
        return saved;
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
    return 'pt';
  });

  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    document.title = t.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.metaTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', t.metaDescription);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage write errors
    }
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6EFE4] text-[#3F2E22] overflow-x-hidden">
      {/* Fixed Navbar + 6.1 Hero + Infinite Mirrored Gold Loop Bar */}
      <NavbarAndHero lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* 6.2 Services + 6.3 Gallery */}
        <ServicesAndGallery lang={lang} />

        {/* 6.4 About + Instagram + GEO Summary + 6.5 Feedbacks */}
        <AboutAndReviews lang={lang} />

        {/* 6.6 Studio + Location + Live Hours */}
        <StudioSection lang={lang} />

        {/* 6.7 Online Booking (Vagaro Priority) + WhatsApp Message Helper + Education */}
        <BookingSection lang={lang} />
      </main>

      {/* 6.8 FAQ + 6.9 Discrete ADA Footer + 7. Floating Action Buttons */}
      <FaqAndFooter lang={lang} onOpenLegalModal={setLegalModal} />

      {/* Accessible Legal Modals (Privacy Policy & Terms of Service in English) */}
      <LegalModals
        activeModal={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}

export default App;
