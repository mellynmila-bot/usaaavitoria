import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Camera,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Eye,
  MessageCircle,
  RefreshCw,
  Search,
} from 'lucide-react';
import { Language, siteData, translations } from '../data/siteData';
import { OrnamentDivider } from './OrnamentDivider';

interface BookingSectionProps {
  lang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();

  // Build service options from siteData.services + "Ainda não sei"
  const serviceOptions = [
    ...siteData.services.map((s) => s.name[lang]),
    t.booking.fields.serviceNotSure,
  ];

  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [selectedType, setSelectedType] = useState(t.booking.fields.types[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState(t.booking.fields.times[0]);
  const [hasRefPhoto, setHasRefPhoto] = useState(t.booking.fields.refPhotoOptions[0]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync default dropdown values when language changes
  useEffect(() => {
    setSelectedService(siteData.services[0].name[lang]);
    setSelectedType(translations[lang].booking.fields.types[0]);
    setPreferredTime(translations[lang].booking.fields.times[0]);
    setHasRefPhoto(translations[lang].booking.fields.refPhotoOptions[0]);
  }, [lang]);

  // Format date nicely if chosen
  const formattedDate = preferredDate
    ? preferredDate.split('-').reverse().join('/')
    : '';

  const readyMessage = t.booking.msgTemplate({
    name: clientName.trim(),
    service: selectedService,
    type: selectedType,
    date: formattedDate,
    time: preferredTime,
    refPhoto: hasRefPhoto,
    notes: notes.trim(),
  });

  const whatsappUrl = `https://wa.me/${siteData.whatsappPhone}?text=${encodeURIComponent(
    readyMessage
  )}`;

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(readyMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback copy via textarea if clipboard permission is restricted
      const textArea = document.createElement('textarea');
      textArea.value = readyMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  const eduIcons = [
    <Clock key="clock" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.7} />,
    <Eye key="eye" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.7} />,
    <Search key="search" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.7} />,
    <RefreshCw key="refresh" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.7} />,
    <Camera key="camera" className="w-4 h-4 text-[#8F7030] shrink-0" strokeWidth={1.7} />,
  ];

  return (
    <section
      id="agendamento"
      className="relative py-20 sm:py-24 bg-[#F6EFE4] text-[#3F2E22] border-b border-[#C29F5B]/40"
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
            {t.booking.eyebrow}
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3F2E22] leading-tight text-balance">
            {t.booking.titlePart1}{' '}
            <span className="text-[#8F7030] italic">{t.booking.titleHighlight}</span>
          </h2>
          <OrnamentDivider variant="on-light" />
          <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed">
            {t.booking.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Layout: Priority Online Booking (Vagaro) + Alternative WhatsApp Helper */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Online Booking on Vagaro (Priority Card + Education Cards) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Priority Vagaro Card with Mirrored Gold Border */}
            <div className="photo-frame-gold rounded-[12px] p-[2px]">
              <div className="bg-[#FBF7F0] rounded-[10px] overflow-hidden">
                {/* Wood Molding Top Accent */}
                <div className="h-2.5 bg-wood-molding border-b border-[#C29F5B]/60" />

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8F7030] font-bold">
                      {t.booking.onlineBadge}
                    </p>
                    <h3 className="font-serif-display text-3xl text-[#3F2E22] mt-1">
                      {t.booking.onlineTitle}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#3F2E22]/90 leading-relaxed">
                      {t.booking.onlineDesc}
                    </p>
                  </div>

                  {/* Large Golden Vagaro CTA */}
                  <div>
                    <a
                      href={siteData.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[54px] btn-gold-primary px-6 py-4 rounded-[10px] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22]"
                    >
                      <span>{t.booking.onlineBtn}</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </div>

                  {/* Vagaro Cancellation Policy */}
                  <div className="rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/45 p-4 space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8F7030]">
                      {t.booking.onlinePolicyTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3F2E22]/90 leading-relaxed">
                      {siteData.policies.vagaro[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Educational Preparation Cards */}
            <div className="card-ivory p-6 space-y-4">
              <h3 className="font-serif-display text-2xl text-[#3F2E22]">
                {t.booking.educationTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.booking.educationCards.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/35 p-3.5 flex items-start gap-3 ${
                      idx === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="p-2 rounded-full bg-[#FBF7F0] border border-[#C29F5B]/40 shrink-0 mt-0.5">
                      {eduIcons[idx]}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#3F2E22]">
                        {edu.title}
                      </p>
                      <p className="text-xs text-[#3F2E22]/90 leading-relaxed mt-0.5">
                        {edu.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: WhatsApp Alternative + Policy + Interactive Message Builder (No <form>) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="card-ivory overflow-hidden shadow-md">
              {/* Wood Molding Top Accent */}
              <div className="h-2 bg-wood-molding border-b border-[#C29F5B]/50" />

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6B5545] font-bold">
                    {t.booking.whatsappBadge} · {siteData.whatsappDisplay}
                  </p>
                  <h3 className="font-serif-display text-3xl text-[#3F2E22] mt-1">
                    {t.booking.whatsappTitle}
                  </h3>
                </div>

                {/* WhatsApp Cancellation Policy + Gratitude Quote */}
                <div className="rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/45 p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8F7030]">
                    {t.booking.whatsappPolicyTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3F2E22]/90 leading-relaxed">
                    {siteData.policies.whatsapp[lang]}
                  </p>
                  <p className="text-xs italic text-[#5A3E2B] font-medium pt-1 border-t border-[#C29F5B]/25">
                    {siteData.policies.gratitude[lang]}
                  </p>
                </div>

                {/* Interactive Mini Message Builder (Strictly without <form>, all fields with visible <label>) */}
                <div
                  role="group"
                  aria-labelledby="whatsapp-builder-heading"
                  className="space-y-4 pt-2 border-t border-[#C29F5B]/35"
                >
                  <div>
                    <h4
                      id="whatsapp-builder-heading"
                      className="font-serif-display text-2xl text-[#3F2E22]"
                    >
                      {t.booking.formTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B5545]">
                      {t.booking.formSubtitle}
                    </p>
                  </div>

                  {/* Field 1: Name */}
                  <div>
                    <label
                      htmlFor="wa-client-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                    >
                      {t.booking.fields.nameLabel}
                    </label>
                    <input
                      id="wa-client-name"
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={t.booking.fields.namePlaceholder}
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] placeholder:text-[#6B5545]/70 focus:outline-2 focus:outline-[#8F7030]"
                    />
                  </div>

                  {/* Field 2 & 3: Service & Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="wa-service"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                      >
                        {t.booking.fields.serviceLabel}
                      </label>
                      <select
                        id="wa-service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] focus:outline-2 focus:outline-[#8F7030]"
                      >
                        {serviceOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="wa-type"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                      >
                        {t.booking.fields.typeLabel}
                      </label>
                      <select
                        id="wa-type"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] focus:outline-2 focus:outline-[#8F7030]"
                      >
                        {t.booking.fields.types.map((typeOpt, idx) => (
                          <option key={idx} value={typeOpt}>
                            {typeOpt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="wa-date"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                      >
                        {t.booking.fields.dateLabel}
                      </label>
                      <input
                        id="wa-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] focus:outline-2 focus:outline-[#8F7030]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="wa-time"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                      >
                        {t.booking.fields.timeLabel}
                      </label>
                      <select
                        id="wa-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] focus:outline-2 focus:outline-[#8F7030]"
                      >
                        {t.booking.fields.times.map((tOpt, idx) => (
                          <option key={idx} value={tOpt}>
                            {tOpt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 5: Reference Photo */}
                  <div>
                    <label
                      htmlFor="wa-ref-photo"
                      className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                    >
                      {t.booking.fields.refPhotoLabel}
                    </label>
                    <select
                      id="wa-ref-photo"
                      value={hasRefPhoto}
                      onChange={(e) => setHasRefPhoto(e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] focus:outline-2 focus:outline-[#8F7030]"
                    >
                      {t.booking.fields.refPhotoOptions.map((rOpt, idx) => (
                        <option key={idx} value={rOpt}>
                          {rOpt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 6: Optional Allergies / Notes */}
                  <div>
                    <label
                      htmlFor="wa-notes"
                      className="block text-xs font-bold uppercase tracking-wider text-[#3F2E22] mb-1.5"
                    >
                      {t.booking.fields.notesLabel}
                    </label>
                    <textarea
                      id="wa-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.booking.fields.notesPlaceholder}
                      className="w-full px-3.5 py-2 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B]/55 text-sm text-[#3F2E22] placeholder:text-[#6B5545]/70 focus:outline-2 focus:outline-[#8F7030]"
                    />
                  </div>

                  {/* Real-time Message Preview Box */}
                  <div className="pt-2">
                    <label
                      htmlFor="wa-preview-box"
                      className="block text-xs font-bold uppercase tracking-wider text-[#8F7030] mb-1.5"
                    >
                      {t.booking.previewLabel}
                    </label>
                    <textarea
                      id="wa-preview-box"
                      readOnly
                      rows={6}
                      value={readyMessage}
                      className="w-full p-3.5 rounded-[8px] bg-[#F6EFE4] border border-[#C29F5B] text-xs sm:text-sm font-medium text-[#3F2E22] leading-relaxed focus:outline-2 focus:outline-[#8F7030]"
                    />
                  </div>

                  {/* Action Buttons: Copy Message & Send via WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="btn-gold-secondary min-h-[46px] px-5 py-2.5 rounded-[8px] text-xs font-bold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#8F7030]" />
                          <span>{t.booking.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#8F7030]" />
                          <span>{t.booking.copyBtn}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[46px] btn-gold-primary px-6 py-2.5 rounded-[8px] text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E22]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>{t.booking.sendWhatsappBtn}</span>
                    </a>
                  </div>

                  <p className="text-xs text-center text-[#6B5545] pt-1">
                    {t.booking.supportNote}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
