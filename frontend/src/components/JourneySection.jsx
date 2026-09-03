import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, TrendingUp, Star, Zap } from 'lucide-react';

const JourneySection = () => {
    return (
        <section id="journey" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 sm:px-6 relative select-none">
            <div className="max-w-6xl w-full mx-auto space-y-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300 mb-4 backdrop-blur-xl">
                        <Zap size={12} className="text-[#E1E289]" />
                        <span>Execution & System Architecture</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38]">Engineering</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        A systematic full-stack engineering pipeline turning concepts into high-converting, resilient digital systems.
                    </p>
                </motion.div>

                {/* Block 1: Discovery / Search (Sky Frost Blue & Pale Lime) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-mono tracking-widest text-[#ACD2ED] uppercase font-bold">
                            // 01 DISCOVERY & PERFORMANCE
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Engineered For Precision
                        </h3>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                            High-visibility technical SEO, semantic structured data, and ultra-fast Core Web Vitals ensure your platform dominates performance benchmarks.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A1D10]/90 border border-[#ACD2ED]/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(172,210,237,0.15)] transform-gpu perspective-1000 rotate-x-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-60 h-60 bg-[#ACD2ED]/15 blur-[90px] rounded-full pointer-events-none" />

                            {/* Search Bar Simulation */}
                            <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-center gap-3 mb-6 shadow-inner">
                                <Search size={16} className="text-[#ACD2ED]" />
                                <span className="text-xs font-mono text-neutral-300">
                                    https://kaushubh.dev/cloud-architectures
                                </span>
                                <span className="ml-auto px-2 py-0.5 rounded-md bg-[#ACD2ED]/15 text-[#ACD2ED] text-[10px] font-mono border border-[#ACD2ED]/30">
                                    100% Score
                                </span>
                            </div>

                            {/* Stylized Search Engine Result Pill */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="p-5 rounded-2xl bg-gradient-to-r from-[#0E2C16]/50 via-[#0A1D10]/40 to-black border border-[#ACD2ED]/40 space-y-2 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <Star size={14} className="text-[#E1E289] fill-[#E1E289]" />
                                    <span className="text-xs font-semibold text-white">#1 Rank — Production Excellence</span>
                                </div>
                                <h4 className="text-base font-bold text-[#E1E289]">
                                    Kaushubh Kr. Chaudhary — Full Stack & Cloud Architecture
                                </h4>
                                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                    React 19, Node.js, Java, AWS EC2, PostgreSQL, sub-second LCP, and zero memory leaks.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Block 2: Conversion / Inquiries (Moss Green Glow) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A1D10]/90 border border-[#99AA38]/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(153,170,56,0.15)] transform-gpu perspective-1000 -rotate-x-2 hover:rotate-0 transition-transform duration-500 overflow-hidden min-h-[280px] flex flex-col justify-center">
                            <div className="absolute top-0 left-0 w-60 h-60 bg-[#99AA38]/20 blur-[90px] rounded-full pointer-events-none" />

                            {/* Floating Message Badges */}
                            <div className="space-y-3 relative z-10">
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-4 rounded-2xl bg-white/[0.04] border border-[#99AA38]/30 flex items-center justify-between shadow-lg backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-[#99AA38]/20 text-[#99AA38]">
                                            <MessageSquare size={16} />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-semibold text-white">Full-Stack Project Inbound</h5>
                                            <p className="text-[11px] text-neutral-400">"We need your React & Node.js expertise for our platform rollout."</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#99AA38] px-2.5 py-0.5 rounded-full bg-[#99AA38]/10 border border-[#99AA38]/20">Just now</span>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="p-4 rounded-2xl bg-white/[0.04] border border-[#E1E289]/30 flex items-center justify-between shadow-lg backdrop-blur-md ml-4 sm:ml-8"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-[#E1E289]/20 text-[#E1E289]">
                                            <Zap size={16} />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-semibold text-white">AWS Cloud Architecture Deployed</h5>
                                            <p className="text-[11px] text-neutral-400">Instance initialized with automated CI/CD and secure routing.</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#E1E289] px-2.5 py-0.5 rounded-full bg-[#E1E289]/10 border border-[#E1E289]/20">Verified</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                        <span className="text-xs font-mono tracking-widest text-[#99AA38] uppercase font-bold">
                            // 02 CONVERSION & COLLABORATION
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Turning Vision Into Reality
                        </h3>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                            Clear technical ergonomics, frictionless interfaces, and instant reactive feedback deliver memorable user experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Block 3: Growth / Results (Pale Lime & Sky Blue) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-mono tracking-widest text-[#E1E289] uppercase font-bold">
                            // 03 COMPOUNDING METRICS
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Measurable Velocity
                        </h3>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                            Clean software engineering compounds over time. High test coverage, type-safe APIs, and responsive rendering maximize maintainability.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A1D10]/90 border border-[#E1E289]/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(225,226,137,0.15)] transform-gpu perspective-1000 rotate-x-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-60 h-60 bg-[#E1E289]/15 blur-[90px] rounded-full pointer-events-none" />

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-[10px] font-mono text-[#E1E289] uppercase font-semibold">Performance Compound</span>
                                    <h5 className="text-xl font-bold text-white">+280% System Speed & Conversions</h5>
                                </div>
                                <div className="p-2.5 rounded-xl bg-[#E1E289]/15 text-[#E1E289] border border-[#E1E289]/30">
                                    <TrendingUp size={20} />
                                </div>
                            </div>

                            {/* Glowing Palette SVG Ascending Trend Line */}
                            <div className="relative h-32 w-full flex items-end">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" fill="none">
                                    <defs>
                                        <linearGradient id="coolorsChartGlow" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#14591D" stopOpacity="0.5" />
                                            <stop offset="50%" stopColor="#99AA38" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#ACD2ED" stopOpacity="0.6" />
                                        </linearGradient>
                                        <linearGradient id="coolorsStroke" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#14591D" />
                                            <stop offset="50%" stopColor="#99AA38" />
                                            <stop offset="100%" stopColor="#ACD2ED" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M 0,85 Q 50,75 100,50 T 200,30 T 300,5 L 300,100 L 0,100 Z"
                                        fill="url(#coolorsChartGlow)"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M 0,85 Q 50,75 100,50 T 200,30 T 300,5"
                                        stroke="url(#coolorsStroke)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            {/* Bar Metrics */}
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] text-center">
                                <div>
                                    <span className="text-xs font-mono text-neutral-400 block">LCP Render</span>
                                    <span className="text-sm font-bold text-[#ACD2ED]">0.6s</span>
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-neutral-400 block">Test Coverage</span>
                                    <span className="text-sm font-bold text-[#E1E289]">98%</span>
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-neutral-400 block">Uptime</span>
                                    <span className="text-sm font-bold text-[#99AA38]">99.9%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection;
