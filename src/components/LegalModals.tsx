import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { siteData } from '../data/siteData';

export type LegalModalType = 'privacy' | 'terms' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeModal) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const isPrivacy = activeModal === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      lang="en"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F150E]/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="card-ivory max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#C29F5B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F6EFE4] border-b border-[#C29F5B]/40">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8F7030] font-semibold">
              VIVA Beauty · Edgartown, MA
            </p>
            <h2
              id="legal-modal-title"
              className="font-serif-display text-2xl text-[#3F2E22]"
            >
              {title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close legal dialog"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#3F2E22] hover:bg-[#EADFCC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F7030] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content (Always in English per PRD 6.9) */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed text-[#3F2E22]">
          <p className="text-xs italic text-[#6B5545] bg-[#F6EFE4] p-3 rounded border border-[#C29F5B]/30">
            Notice: This template is provided for informational transparency and should be reviewed by qualified legal counsel prior to commercial publication.
          </p>

          {isPrivacy ? (
            <>
              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">1. Who We Are</h3>
                <p>
                  VIVA Beauty ({siteData.professionalLegalName}) operates as an independent lash extensions and eyebrow design studio located in Edgartown, Martha’s Vineyard, MA 02539, United States.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">2. Information We Collect</h3>
                <p>
                  We collect information you voluntarily provide when preparing a message or booking an appointment: your name, phone number, service of interest, preferred dates and times, and messages sent via our website WhatsApp helper or direct WhatsApp chat. We also receive any allergy, sensitivity, or eye-health details you choose to share for your safety. Client before/after photos are taken and shared only with your explicit consent. Online booking data and payment reservations processed via Vagaro are handled directly by Vagaro under its own Privacy Policy.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">3. How We Use Your Information</h3>
                <p>
                  Your information is used strictly for scheduling, providing personalized beauty services, maintaining safe client care records, and communicating about your appointments. We never sell or rent your personal information to third parties.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">4. Third-Party Services & Embeds</h3>
                <p>
                  Our website integrates external services including Vagaro (online scheduling), WhatsApp / Meta Platforms (direct messaging), Instagram embeds (Reels and studio posts), and Google Maps embeds. Interacting with these features is subject to the respective third-party privacy policies.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">5. Data Security, Retention & Your Choices</h3>
                <p>
                  We retain client records only as long as necessary to provide safe ongoing services and comply with Massachusetts legal obligations. You may request access to, correction of, or deletion of your personal data at any time.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">6. Children’s Privacy & Contact</h3>
                <p>
                  Our website and services are not directed to children under 13. For privacy inquiries, please contact us via WhatsApp at {siteData.whatsappDisplay} or email at{' '}
                  <a
                    href={`mailto:${siteData.contactEmail}`}
                    className="underline text-[#8F7030] hover:text-[#3F2E22]"
                  >
                    {siteData.contactEmail}
                  </a>
                  .
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">1. General Information & Client Health</h3>
                <p>
                  Content on this website is provided for general informational purposes. Clients must disclose any known allergies, sensitivities, recent eye procedures, or skin conditions prior to receiving lash extension, lash lift, brow lamination, tinting, or waxing services. A Consultation & Allergy Test ($10) is available and recommended, especially for first-time clients or those with prior reactions.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">2. Appointments & Cancellation Policy</h3>
                <p>
                  All services at VIVA Beauty in Edgartown, MA are strictly by appointment only, booked via Vagaro or WhatsApp:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Vagaro Online Bookings:</strong> Cancellations or rescheduling require at least 24 hours advance notice. Late cancellations (under 24 hours) or no-shows are subject to a 50% service fee.
                  </li>
                  <li>
                    <strong>WhatsApp Bookings:</strong> Cancellations or changes require at least 12 hours advance notice (policy unification to be confirmed with the studio). Late cancellations or no-shows are subject to a 50% service fee.
                  </li>
                  <li>
                    <strong>Late Arrivals:</strong> We offer a 10-minute grace period. Please plan to arrive at least 5 minutes early. Arrivals more than 10 minutes late may result in shortened service time or require rescheduling with a cancellation fee.
                  </li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">3. Results & Individual Variation</h3>
                <p>
                  Eyelash extension retention, lash lift curl longevity, and brow design results vary from person to person depending on natural lash growth cycles, skin type, and aftercare adherence. Prices are listed in USD and are subject to change.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">4. Limitation of Liability & Governing Law</h3>
                <p>
                  To the fullest extent permitted by applicable law, VIVA Beauty’s liability is limited to the cost of the service rendered. These Terms are governed by the laws of the Commonwealth of Massachusetts, United States.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-semibold text-base text-[#3F2E22]">5. Accessibility Statement (WCAG 2.1 AA / ADA)</h3>
                <p>
                  VIVA Beauty is committed to digital accessibility in alignment with WCAG 2.1 Level AA and ADA standards. If you experience any difficulty accessing content or booking an appointment, please reach out to us at {siteData.whatsappDisplay}.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F6EFE4] border-t border-[#C29F5B]/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-gold-primary px-5 py-2 rounded-[8px] text-xs font-semibold uppercase tracking-widest cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
