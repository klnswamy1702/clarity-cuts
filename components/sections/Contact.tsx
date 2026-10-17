'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail } from 'lucide-react';

const PROJECT_TYPES = ['AI Video Edit', 'Reels Package', 'AI Photo Retouch', 'Custom Project'];
const BUDGETS = ['< $500', '$500–$1,500', '$1,500–$5,000', '$5,000+'];
const TIMELINES = ['ASAP (Rush)', '1–2 Weeks', '2–4 Weeks', 'Flexible'];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleType = (type: string) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-mono text-xs tracking-widest text-cyan-500 mb-3 uppercase">Start a Project</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
          Let&apos;s Build Something
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
          >
            Cinematic
          </span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Tell me about your project and I&apos;ll get back within 24 hours with a clear proposal.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border p-8 sm:p-10"
        style={{
          background: '#18181B',
          borderColor: 'rgba(255,255,255,0.06)',
          boxShadow: '0 0 60px rgba(6,182,212,0.05)',
        }}
      >
        {submitted ? (
          <div className="text-center py-16">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
            >
              <Send size={28} className="text-white" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-3">Message Sent!</h3>
            <p className="text-zinc-400">I&apos;ll review your project and reply within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Types */}
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-3 tracking-wide">
                What do you need? <span className="text-zinc-600">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => toggleType(type)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={
                      selected.includes(type)
                        ? {
                            background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                            color: '#fff',
                          }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            color: '#71717A',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-3 tracking-wide">Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                      style={
                        budget === b
                          ? { background: 'rgba(6,182,212,0.2)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.4)' }
                          : { background: 'rgba(255,255,255,0.04)', color: '#52525B', border: '1px solid rgba(255,255,255,0.06)' }
                      }
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-3 tracking-wide">Timeline</label>
                <div className="flex flex-wrap gap-2">
                  {TIMELINES.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                      style={
                        timeline === t
                          ? { background: 'rgba(139,92,246,0.2)', color: '#8B5CF6', border: '1px solid rgba(139,92,246,0.4)' }
                          : { background: 'rgba(255,255,255,0.04)', color: '#52525B', border: '1px solid rgba(255,255,255,0.06)' }
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Jordan"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-zinc-600 outline-none focus:ring-1 transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@brand.co"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-zinc-600 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Project Brief</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, goals, and any references you have in mind..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-zinc-600 outline-none resize-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              />
            </div>

            {/* Submit + direct links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                  boxShadow: '0 0 30px rgba(6,182,212,0.25)',
                }}
              >
                <Send size={16} />
                Send Project Brief
              </button>
              <a
                href="https://wa.me/919999999999?text=Hi%20Charan!%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border transition-all hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="mailto:charan@claritycutsai.com"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border transition-all hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
