import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ResilientImage } from './OrnamentDivider';

export interface LightboxSlide {
  url: string;
  alt: string;
  caption?: string;
}

interface LightboxModalProps {
  slides: LightboxSlide[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  labels: {
    close: string;
    prev: string;
    next: string;
  };
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  slides,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  labels,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (currentIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !slides[currentIndex]) return null;

  const slide = slides[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 45) {
      onPrev();
    } else if (deltaX < -45) {
      onNext();
    }
    setTouchStartX(null);
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={slide.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F150E]/92 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top counter and close bar */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-sm sm:text-base font-medium tracking-widest text-[#F6EFE4] tabular-nums px-3 py-1.5 rounded-md bg-[#3F2E22]/80 border border-[#C29F5B]/40"
          aria-live="polite"
        >
          {currentIndex + 1} / {slides.length}
        </span>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#3F2E22]/90 text-[#F6EFE4] border border-[#C29F5B]/60 hover:bg-[#5A3E2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label={labels.prev}
        className="absolute left-3 sm:left-6 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#3F2E22]/85 text-[#F6EFE4] border border-[#C29F5B]/60 hover:bg-[#5A3E2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div
        className="max-w-4xl max-h-[82vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="photo-frame-gold rounded-[12px] overflow-hidden">
          <ResilientImage
            src={slide.url}
            alt={slide.alt}
            loading="eager"
            className="max-h-[72vh] w-auto object-contain rounded-[10px] bg-[#2D1F14]"
          />
        </div>
        {slide.caption && (
          <p className="mt-3 text-center text-sm sm:text-base text-[#F6EFE4] font-medium tracking-wide max-w-xl">
            {slide.caption}
          </p>
        )}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label={labels.next}
        className="absolute right-3 sm:right-6 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#3F2E22]/85 text-[#F6EFE4] border border-[#C29F5B]/60 hover:bg-[#5A3E2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2DFA7] transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
