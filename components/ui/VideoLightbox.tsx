'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX } from 'lucide-react';

interface VideoLightboxProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export default function VideoLightbox({ videoUrl, title, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Dark Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

        {/* Modal Container */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border bg-zinc-950 shadow-2xl"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3.5 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(24,24,27,0.8)' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-mono font-medium text-zinc-200 truncate max-w-md">
                {title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:bg-white/10 transition-colors cursor-pointer"
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative bg-black flex items-center justify-center p-2 flex-grow overflow-hidden">
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              controls
              playsInline
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
