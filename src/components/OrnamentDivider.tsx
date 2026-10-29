import React, { useState } from 'react';

interface OrnamentDividerProps {
  variant?: 'on-light' | 'on-wood';
  className?: string;
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  variant = 'on-light',
  className = '',
}) => {
  const starColor = variant === 'on-wood' ? '#F2DFA7' : '#8F7030';
  return (
    <div
      className={`flex items-center justify-center gap-3 my-4 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] w-16 sm:w-28 bg-gold-mirror opacity-80" />
      {/* Subtle botanical leaf left */}
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        className="opacity-85"
      >
        <path
          d="M17 6C12 6 8 2 1 1C4 6 9 9 17 6Z"
          stroke={starColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      {/* Central sparkle star */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0L9.6 6.4L16 8L9.6 9.6L8 16L6.4 9.6L0 8L6.4 6.4L8 0Z"
          fill={starColor}
        />
      </svg>
      {/* Subtle botanical leaf right */}
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        className="opacity-85 scale-x-[-1]"
      >
        <path
          d="M17 6C12 6 8 2 1 1C4 6 9 9 17 6Z"
          stroke={starColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <div className="h-[1px] w-16 sm:w-28 bg-gold-mirror opacity-80" />
    </div>
  );
};

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'VIVA Beauty',
  loading = 'lazy',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EADFCC] via-[#F6EFE4] to-[#D8C3A5] text-[#5A3E2B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8F7030"
          strokeWidth="1.25"
          className="mb-2 opacity-80"
          aria-hidden="true"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="font-serif-display text-sm tracking-wider text-[#3F2E22]">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
