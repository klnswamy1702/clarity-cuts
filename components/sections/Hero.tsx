'use client';

import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { tools } from '@/data/portfolioData';

interface HeroProps {
  onWatchShowreel: () => void;
}

export default function Hero({ onWatchShowreel }: HeroProps) {
  const [muted, setMuted] = useState(true);
  const [timecode, setTimecode] = useState('00:00:24:12');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTimecode = () => {
      const cur = video.currentTime;
      const mins = String(Math.floor(cur / 60)).padStart(2, '0');
      const secs = String(Math.floor(cur % 60)).padStart(2, '0');
      const frames = String(Math.floor((cur % 1) * 24)).padStart(2, '0');
      setTimecode(`00:${mins}:${secs}:${frames}`);
    };

    video.addEventListener('timeupdate', updateTimecode);
    return () => video.removeEventListener('timeupdate', updateTimecode);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const toolsDouble = [...tools, ...tools, ...tools];

  return (
    <section id="showreel" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-14">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Radial ambient glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content (7 cols) */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-8 bg-zinc-900/80 backdrop-blur-md"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                boxShadow: '0 0 20px rgba(52,211,153,0.1)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-widest text-zinc-300 uppercase">
                Available for Freelance &amp; Retainers
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white mb-5"
            >
              CLARITY<br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)',
                  filter: 'drop-shadow(0 0 40px rgba(6,182,212,0.3))',
                }}
              >
                CUTS
              </span>
            </motion.h1>

            {/* Subtitle / Creator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono text-sm sm:text-base font-semibold text-cyan-400 tracking-wide">
                by Charan
              </span>
              <span className="text-zinc-600">—</span>
              <span className="text-zinc-400 text-sm sm:text-base font-medium">
                AI Video &amp; Photo Architecture
              </span>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              Transforming raw footage and static concepts into scroll-stopping visual cinema
              using next-gen AI workflows, generative synthesis, and precision rhythm cutting.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onWatchShowreel}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg group"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                  boxShadow: '0 0 35px rgba(6,182,212,0.4)',
                }}
              >
                <Play size={18} fill="white" className="transition-transform group-hover:scale-110" />
                <span>Watch Full Showreel</span>
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border text-zinc-200 transition-all hover:bg-white/5 hover:text-white hover:border-white/20 cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right: showreel container (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
                background: '#18181B',
                boxShadow: '0 0 60px rgba(6,182,212,0.15), 0 25px 50px rgba(0,0,0,0.7)',
              }}
            >
              {/* Timeline Header Bar */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.5)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                    REC ● CLARITY_CUTS_REEL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                    {timecode}
                  </span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-800">
                    4K
                  </span>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black group overflow-hidden">
                <video
                  ref={videoRef}
                  src="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Hover Play Button Overlay */}
                <div
                  onClick={onWatchShowreel}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full transform transition-transform group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                      boxShadow: '0 0 35px rgba(6,182,212,0.7)',
                    }}
                  >
                    <Play size={24} fill="white" className="ml-1" />
                  </div>
                </div>

                {/* Aspect tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 pointer-events-none">
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10">
                    16:9 Cinema
                  </span>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/80 text-zinc-300 border border-white/10">
                    9:16 Shorts
                  </span>
                </div>
              </div>

              {/* Scrubber & Audio Control */}
              <div
                className="flex items-center justify-between px-4 py-3 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.5)' }}
              >
                <div className="flex-1 mr-4">
                  <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full w-2/5 animate-pulse"
                      style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }}
                    />
                  </div>
                </div>
                <button
                  onClick={toggleMute}
                  className="text-zinc-400 hover:text-cyan-400 transition-colors p-1 cursor-pointer"
                  title={muted ? 'Unmute' : 'Mute'}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Tool Marquee */}
      <div className="mt-20 relative w-full overflow-hidden border-y border-white/[0.06] py-4 bg-zinc-950/60 backdrop-blur-md">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #09090B, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #09090B, transparent)' }}
        />

        <div className="flex">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {toolsDouble.map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-400 flex-shrink-0 tracking-wider hover:text-cyan-300 transition-colors"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#06B6D4', boxShadow: '0 0 6px #06B6D4' }}
                />
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
