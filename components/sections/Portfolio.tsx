'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Sparkles } from 'lucide-react';
import { portfolioVideos, VideoItem } from '@/data/portfolioData';
import VideoLightbox from '@/components/ui/VideoLightbox';

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'ai-video', label: 'AI Video & VFX' },
  { id: 'reels', label: 'Short-Form Reels (9:16)' },
  { id: 'commercial', label: 'Commercial Ads' },
];

function VideoCard({ item, onPlay }: { item: VideoItem; onPlay: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.play().then(() => {
        setPlaying(true);
      }).catch(() => {
        // Autoplay may be restricted or buffering
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  const isVertical = item.format === '9:16';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="relative group rounded-2xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        background: '#18181B',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onPlay}
    >
      {/* Video / Thumbnail Container */}
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: isVertical ? '9 / 16' : '16 / 9', maxHeight: isVertical ? '560px' : 'auto' }}
      >
        {/* Poster / Thumbnail image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Video preview on hover */}
        {!hasError && (
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            playsInline
            loop
            preload="metadata"
            onError={() => setHasError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              playing ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Ambient Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Hover Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.9), rgba(139,92,246,0.9))',
              boxShadow: '0 0 30px rgba(6,182,212,0.6)',
            }}
          >
            <Play size={20} fill="white" className="ml-0.5" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className="px-2 py-0.5 text-[10px] font-mono font-bold rounded border backdrop-blur-md"
            style={{
              borderColor: isVertical ? 'rgba(139,92,246,0.4)' : 'rgba(6,182,212,0.4)',
              background: 'rgba(0,0,0,0.7)',
              color: isVertical ? '#C084FC' : '#22D3EE',
            }}
          >
            {item.format}
          </span>
          {isVertical && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950/80 border border-cyan-800/40 text-cyan-300">
              <Sparkles size={10} />
              Viral Reel
            </span>
          )}
        </div>

        {/* Duration badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10">
          <Clock size={11} className="text-zinc-400" />
          <span className="text-[10px] font-mono text-zinc-300">{item.duration}</span>
        </div>
      </div>

      {/* Card Details Footer */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-400 transition-colors mb-1.5">
            {item.title}
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Tech Stack Tools */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-0.5 text-[10px] font-mono rounded-md"
              style={{
                background: 'rgba(139,92,246,0.12)',
                color: '#A78BFA',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState<VideoItem | null>(null);

  const filtered = activeCategory === 'all'
    ? portfolioVideos
    : portfolioVideos.filter((v) => v.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs tracking-widest text-cyan-400 mb-3 uppercase font-semibold">
          Portfolio
        </p>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
          Selected Cinematic Work
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-base">
          AI-synthesized sequences, viral 9:16 short-form reels, and commercial campaigns — hover to preview, click to play full audio.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2.5 justify-center mb-12"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer"
            style={
              activeCategory === cat.id
                ? {
                    background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                    color: '#ffffff',
                    boxShadow: '0 0 20px rgba(6,182,212,0.35)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }
                : {
                    background: 'rgba(255,255,255,0.04)',
                    color: '#9CA3AF',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }
            }
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onPlay={() => setActiveLightbox(item)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Video Lightbox Player */}
      {activeLightbox && (
        <VideoLightbox
          videoUrl={activeLightbox.videoUrl}
          title={activeLightbox.title}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  );
}
