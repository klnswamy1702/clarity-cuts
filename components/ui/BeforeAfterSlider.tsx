'use client';

import { useRef, useState, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilter?: string;
  afterFilter?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'RAW FLAT FOOTAGE',
  afterLabel = 'AI COLOR & RELIGHT',
  beforeFilter,
  afterFilter,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const calculatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    calculatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      calculatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after image comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full aspect-video overflow-hidden rounded-xl select-none cursor-ew-resize touch-none group bg-zinc-950 border border-white/10"
      style={{ userSelect: 'none' }}
    >
      {/* AFTER IMAGE (Base layer, right side revealed as slider moves left) */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover pointer-events-none"
          style={{ filter: afterFilter }}
          draggable={false}
        />
        {/* After Label Badge */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span
            className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider rounded backdrop-blur-md shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.95), rgba(139,92,246,0.95))',
              color: '#FFFFFF',
              boxShadow: '0 0 15px rgba(6,182,212,0.4)',
            }}
          >
            {afterLabel}
          </span>
        </div>
      </div>

      {/* BEFORE IMAGE (Clipped overlay using CSS clip-path inset) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover pointer-events-none"
          style={{ filter: beforeFilter }}
          draggable={false}
        />
        {/* Before Label Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider text-zinc-300 bg-zinc-950/90 border border-white/15 rounded backdrop-blur-md">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* VERTICAL DIVIDER LINE & HANDLE */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Laser line with cyan/violet neon glow */}
        <div
          className="w-[2px] h-full"
          style={{
            background: 'linear-gradient(to bottom, #06B6D4, #8B5CF6)',
            boxShadow: '0 0 10px rgba(6,182,212,0.9), 0 0 20px rgba(139,92,246,0.6)',
          }}
        />

        {/* Center Drag Button */}
        <div
          className="absolute flex items-center justify-center w-10 h-10 rounded-full border border-white/40 shadow-2xl transition-transform duration-150 group-hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
            boxShadow: '0 0 24px rgba(6,182,212,0.8), 0 4px 12px rgba(0,0,0,0.5)',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>

      {/* Helper text hint */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-300 ${
          isDragging ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
        }`}
      >
        <span className="px-3 py-1 text-[10px] font-mono tracking-widest text-zinc-300 bg-black/80 border border-white/15 rounded-full backdrop-blur-md">
          ◀ DRAG TO REVEAL ▶
        </span>
      </div>
    </div>
  );
}
