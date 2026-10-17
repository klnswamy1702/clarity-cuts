'use client';

import { motion } from 'framer-motion';
import { Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Concept & Raw Ingest',
    description:
      'Storyboarding, raw footage audit, and AI prompt engineering. We analyze your creative goals, script, and aesthetic references before cutting a single frame — ensuring maximum clarity and efficiency.',
    tags: ['Storyboard Audit', 'Footage Ingest', 'AI Prompt Engineering', 'Creative Brief'],
    color: '#06B6D4',
  },
  {
    number: '02',
    title: 'AI Synthesis & Precision Cut',
    description:
      'Generative B-roll, voice & audio remastering, neural rotoscoping, inpainting, and rhythm-based cutting. Human taste directs cutting-edge AI engines (Runway Gen-3, Kling, ComfyUI) to produce stunning visuals.',
    tags: ['Runway Gen-3', 'Neural Inpainting', 'Audio Clean-up', 'Pacing & Cadence'],
    color: '#8B5CF6',
  },
  {
    number: '03',
    title: 'High-Clarity Delivery',
    description:
      '4K color-graded masters formatted for YouTube, Instagram Reels, TikTok, or Commercial Broadcast — delivered in half the traditional agency turnaround time with zero compromise.',
    tags: ['4K DaVinci Grade', '9:16 & 16:9 Masters', '2× Turnaround Speed', 'Broadcast-Ready'],
    color: '#06B6D4',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="font-mono text-xs tracking-widest text-cyan-400 mb-3 uppercase font-semibold">
          How Charan Works
        </p>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
          The Clarity Pipeline
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-base">
          Three precision stages proving why next-gen AI workflows combined with seasoned human editing deliver superior retention in half the turnaround time.
        </p>
      </motion.div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Central connecting line */}
        <div
          className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-px -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, #06B6D4, #8B5CF6, transparent)',
            opacity: 0.4,
          }}
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Card Container */}
              <div
                className={`pl-14 sm:pl-16 lg:pl-0 ${
                  i % 2 === 1 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'
                }`}
              >
                <div
                  className="p-7 sm:p-9 rounded-2xl border transition-all duration-300 hover:border-cyan-500/30 group"
                  style={{
                    background: '#18181B',
                    borderColor: 'rgba(255,255,255,0.07)',
                    boxShadow: `0 0 50px ${step.color}08`,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-4xl sm:text-5xl font-black bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${step.color}, #ffffff)`,
                      }}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-zinc-400 border border-white/10">
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg transition-colors"
                        style={{
                          background: `${step.color}15`,
                          color: step.color === '#06B6D4' ? '#22D3EE' : '#C084FC',
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glowing Timeline Marker Dot */}
              <div className="absolute left-6 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="w-5 h-5 rounded-full border-2 border-[#09090B] flex items-center justify-center"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 20px ${step.color}`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>

              {/* Empty Spacer Column for Desktop Alternate Layout */}
              <div
                className={`hidden lg:block ${
                  i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
