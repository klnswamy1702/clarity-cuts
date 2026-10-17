'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Film, Image } from 'lucide-react';
import { services } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  Film: <Film size={24} />,
  Image: <Image size={24} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs tracking-widest text-cyan-500 mb-3 uppercase">Services</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
          Client Packages
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Precision-engineered packages for creators, brands, and agencies who demand cinematic quality at AI speed.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Highlight ring */}
            {service.highlight && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
                  border: '1px solid rgba(6,182,212,0.3)',
                }}
              />
            )}

            <div
              className="relative z-10 p-8 h-full flex flex-col border rounded-2xl"
              style={{
                background: service.highlight
                  ? 'linear-gradient(160deg, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.06) 100%)'
                  : '#18181B',
                borderColor: service.highlight ? 'rgba(6,182,212,0.25)' : 'rgba(255,255,255,0.06)',
                boxShadow: service.highlight ? '0 0 60px rgba(6,182,212,0.08)' : 'none',
              }}
            >
              {service.highlight && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-[10px] font-mono font-bold rounded-full"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: '#fff' }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                style={{
                  background: service.highlight
                    ? 'linear-gradient(135deg, #06B6D4, #8B5CF6)'
                    : 'rgba(255,255,255,0.06)',
                  color: service.highlight ? '#fff' : '#06B6D4',
                }}
              >
                {iconMap[service.icon]}
              </div>

              <h3 className="font-display font-black text-xl text-white mb-1">{service.title}</h3>
              <p className="text-xs font-mono text-zinc-500 mb-4 tracking-wide">{service.subtitle}</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(6,182,212,0.15)' }}
                    >
                      <Check size={11} style={{ color: '#06B6D4' }} />
                    </span>
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                style={
                  service.highlight
                    ? {
                        background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                        color: '#fff',
                        boxShadow: '0 0 25px rgba(6,182,212,0.3)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.06)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
