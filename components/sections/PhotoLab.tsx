'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, SlidersHorizontal } from 'lucide-react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { beforeAfterItems } from '@/data/portfolioData';

export default function PhotoLab() {
  const [active, setActive] = useState(0);
  const currentItem = beforeAfterItems[active];

  return (
    <section id="photo-lab" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3 tracking-widest uppercase">
          <Sparkles size={12} />
          Interactive Visual Proof
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
          The AI Photo &amp; Color Lab
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-base">
          Interactive Before / After proof. Drag the laser handle left and right to inspect precision relighting, generative backgrounds, and 4K upscaling.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Navigation selection pills / cards (4 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 flex flex-col gap-3.5"
        >
          <div className="flex items-center gap-2 mb-1 text-zinc-500 text-xs font-mono uppercase tracking-wider">
            <SlidersHorizontal size={14} />
            <span>Select Demonstration</span>
          </div>

          {beforeAfterItems.map((item, i) => {
            const isSelected = active === i;
            return (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className="text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group"
                style={
                  isSelected
                    ? {
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.12))',
                        borderColor: 'rgba(6,182,212,0.4)',
                        boxShadow: '0 0 30px rgba(6,182,212,0.1)',
                      }
                    : {
                        background: '#18181B',
                        borderColor: 'rgba(255,255,255,0.06)',
                      }
                }
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: 'linear-gradient(to bottom, #06B6D4, #8B5CF6)' }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: isSelected ? '#06B6D4' : '#71717A' }}
                  >
                    CASE 0{i + 1}
                  </span>
                  <span
                    className="px-2 py-0.5 text-[10px] font-mono rounded"
                    style={{
                      background: 'rgba(139,92,246,0.12)',
                      color: '#A78BFA',
                      border: '1px solid rgba(139,92,246,0.25)',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="font-display font-bold text-base text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </div>

                <div className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {item.description}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active interactive slider (8 cols on desktop) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div
            className="rounded-2xl overflow-hidden border p-1 sm:p-2"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: '#18181B',
              boxShadow: '0 0 60px rgba(6,182,212,0.08), 0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <BeforeAfterSlider
                  beforeImage={currentItem.beforeImage}
                  afterImage={currentItem.afterImage}
                  beforeLabel={currentItem.beforeLabel}
                  afterLabel={currentItem.afterLabel}
                  beforeFilter={currentItem.beforeFilter}
                  afterFilter={currentItem.afterFilter}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption & Workflow Explanation */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-0.5">
                AI Technique Applied
              </span>
              <p className="text-sm text-zinc-300 font-medium">
                {currentItem.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                {currentItem.tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
