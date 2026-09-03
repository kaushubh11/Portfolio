import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, X, Code2, GraduationCap, ChevronDown, CheckCircle2, Download, ExternalLink, MapPin, Mail, Phone, FolderGit2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const RESUME_TABS = [
    { id: 'summary', name: 'Profile & Objective', icon: Code2, color: 'text-[#ACD2ED]' },
    { id: 'projects', name: 'Projects', icon: FolderGit2, color: 'text-[#E1E289]' },
    { id: 'education', name: 'Education & Certifications', icon: GraduationCap, color: 'text-[#99AA38]' },
];

const Hero = ({ introComplete }) => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('summary');

    // Auto-close modal on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsResumeOpen(false);
        };
        if (isResumeOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isResumeOpen]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const navHeight = 85;
            const pos = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: pos - navHeight, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen h-[100dvh] w-full flex flex-col justify-between items-center relative overflow-hidden pt-28 pb-8 px-4 sm:px-6 select-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0e2c16] via-[#081b0e] to-[#040c06] text-white">
            {/* Ambient Palette Radial Glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-br from-[#14591D]/35 via-[#99AA38]/20 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-bl from-[#ACD2ED]/25 via-[#E1E289]/15 to-transparent blur-[170px] rounded-full pointer-events-none z-0" />

            {/* Spacer Top */}
            <div className="h-4" />

            {/* Center Main Stage */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
                {/* Refined Identity Micro-Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={introComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A210F]/80 border border-[#E1E289]/25 text-xs font-mono tracking-widest text-[#E1E289] mb-6 shadow-xl backdrop-blur-xl"
                >
                    <span className="w-2 h-2 rounded-full bg-[#99AA38] animate-pulse shadow-[0_0_8px_rgba(153,170,56,0.8)]" />
                    <span className="font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38]">
                        Kaushubh Kr. Chaudhary — Full Stack Developer & Cloud Architect
                    </span>
                </motion.div>

                {/* High-Impact Updated Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={introComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-2 mb-6"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2vw] font-extrabold uppercase tracking-tight leading-[1.04] drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
                        <span className="text-white">Building Scalable Web Apps & </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] filter drop-shadow-[0_0_30px_rgba(172,210,237,0.35)]">
                            Cloud Architectures.
                        </span>
                    </h1>
                </motion.div>

                {/* High-Contrast WCAG AA Sub-Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={introComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mx-auto mb-10 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/10 shadow-lg"
                >
                    <p className="text-sm sm:text-base font-normal tracking-wide text-slate-200 leading-relaxed">
                        Architecting full-stack web platforms and resilient cloud infrastructure with React, Node.js, Java, and AWS EC2 deployments.
                    </p>
                </motion.div>

                {/* Streamlined 2-Tier Interaction CTA Model */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={introComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {/* Primary Button: Explore Projects with Warm Glow */}
                    <MagneticButton>
                        <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] shadow-[0_0_25px_rgba(172,210,237,0.35)] hover:shadow-[0_0_35px_rgba(153,170,56,0.6)] transition-shadow">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group relative px-8 py-3.5 bg-[#061208] text-white font-bold text-sm rounded-full hover:bg-[#0A210F] transition-all duration-300 flex items-center gap-2.5 active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10 block overflow-hidden h-[18px]">
                                    <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                                        <span className="h-[18px] flex items-center">Explore Projects</span>
                                        <span className="h-[18px] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] to-[#E1E289]">Explore Projects</span>
                                    </span>
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#ACD2ED] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </MagneticButton>

                    {/* Secondary Button: View Resume with Clean Glassmorphism & Download Link */}
                    <MagneticButton>
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="px-7 py-3.5 bg-white/[0.05] text-white font-semibold text-sm rounded-full border border-white/15 hover:border-[#E1E289]/60 hover:bg-white/10 transition-all duration-200 shadow-lg flex items-center gap-2 group active:scale-95 backdrop-blur-md"
                        >
                            <FileText className="w-4 h-4 text-[#E1E289] group-hover:scale-110 transition-transform" />
                            <span>View Resume</span>
                        </button>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Triple Animated Downward Chevron Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={introComplete ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                onClick={() => scrollToSection('about')}
                className="relative z-10 flex flex-col items-center cursor-pointer group pb-2"
                aria-label="Scroll to about section"
            >
                <div className="flex flex-col items-center -space-y-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                        animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={22} className="text-[#ACD2ED]" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.6, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={22} className="text-[#E1E289]" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.6, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={22} className="text-[#99AA38]" />
                    </motion.div>
                </div>
            </motion.div>

            {/* INTERACTIVE RESUME MODAL WITH PDF DOWNLOAD OPTION */}
            <AnimatePresence>
                {isResumeOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsResumeOpen(false)}
                            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            className="relative w-full max-w-3xl bg-[#0A1D10]/95 border border-[#E1E289]/30 rounded-3xl p-6 sm:p-9 shadow-[0_0_60px_rgba(153,170,56,0.25)] backdrop-blur-2xl z-10 max-h-[88vh] overflow-y-auto text-white"
                        >
                            {/* Ambient internal glow */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ACD2ED]/15 via-[#E1E289]/10 to-transparent blur-[90px] rounded-full pointer-events-none" />

                            {/* Header with Quick Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-[#99AA38]" />
                                        <span className="text-xs font-mono uppercase tracking-widest text-[#E1E289]">
                                            Curriculum Vitae
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                        Kaushubh Kr. Chaudhary
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mt-1">
                                        <span className="flex items-center gap-1"><MapPin size={12} className="text-[#ACD2ED]" /> Maitidevi, Kathmandu</span>
                                        <span className="flex items-center gap-1"><Phone size={12} className="text-[#E1E289]" /> +977 9767325541</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                    {/* Direct PDF Download Button */}
                                    <a
                                        href="/Kaushubh_Chaudhary_Resume.pdf"
                                        download="Kaushubh_Chaudhary_Resume.pdf"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] text-black text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                                    >
                                        <Download size={14} />
                                        <span>Download PDF</span>
                                    </a>

                                    <a
                                        href="/Kaushubh_Chaudhary_Resume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Open PDF in new tab"
                                        className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                                        title="Open Full PDF"
                                    >
                                        <ExternalLink size={16} />
                                    </a>

                                    <button
                                        onClick={() => setIsResumeOpen(false)}
                                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors ml-1"
                                        aria-label="Close Resume"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Navigation Tabs */}
                            <div className="flex items-center gap-2 my-6 p-1 rounded-2xl bg-black/60 border border-white/10 relative z-10">
                                {RESUME_TABS.map((tab) => {
                                    const IconComponent = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] text-black font-bold shadow-lg'
                                                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                                            }`}
                                        >
                                            <IconComponent size={15} />
                                            <span>{tab.name}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Tab Contents */}
                            <div className="min-h-[260px] relative z-10 space-y-4 text-sm">
                                {/* Tab 1: Profile & Career Objective */}
                                {activeTab === 'summary' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                                            <span className="text-xs font-mono text-[#E1E289] uppercase font-bold">// Career Objective</span>
                                            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light">
                                                Enthusiastic Full Stack Web Developer with a particular interest in front-end development, UI/UX, and modern web technologies. Passionate about building efficient, scalable, and user-centered web applications while strengthening technical expertise across the stack, from responsive interfaces to RESTful backends using React, Node.js, PostgreSQL, and JWT/OAuth. Aspiring to bridge development and cloud infrastructure with DevOps engineering (CI/CD, containerization, Amazon EC2).
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                                            {[
                                                { label: "Languages", val: "Java, Python, JS, HTML5, CSS" },
                                                { label: "Frameworks", val: "React JS, Node JS, Tailwind" },
                                                { label: "Tools & Cloud", val: "EC2, Vercel, Railway, GitHub" },
                                                { label: "OS & Systems", val: "Linux OS, Windows, Terminal" },
                                            ].map((item, i) => (
                                                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                                                    <span className="text-[10px] font-mono text-[#ACD2ED] uppercase block mb-1">{item.label}</span>
                                                    <span className="text-xs font-bold text-white">{item.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Tab 2: Projects from Resume */}
                                {activeTab === 'projects' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-3"
                                    >
                                        {[
                                            {
                                                title: "Expedition77",
                                                stack: "Java / CSS",
                                                tag: "Academic Project",
                                                desc: "Full-stack tour guide booking platform connecting tourists with local trekking & hiking guides. Features curated routes, guide profiles, route publishing, and an admin dashboard for users & bookings.",
                                                color: "text-[#ACD2ED]"
                                            },
                                            {
                                                title: "Mirar: Ecommerce Website",
                                                stack: "JavaScript / HTML / CSS",
                                                tag: "Academic Project",
                                                desc: "Frontend-focused ecommerce website for browsing and purchasing luxury watches with product categories, detailed listings, and clean responsive checkout.",
                                                color: "text-[#E1E289]"
                                            },
                                            {
                                                title: "SyncRoom",
                                                stack: "TypeScript / HTML / CSS",
                                                tag: "Personal Project",
                                                desc: "Low-latency real-time messenger room platform allowing instant session URL sharing and multi-client websocket communication.",
                                                color: "text-[#99AA38]"
                                            },
                                            {
                                                title: "Personal Portfolio",
                                                stack: "React JS / Tailwind CSS",
                                                tag: "Personal Project",
                                                desc: "High-performance interactive developer portfolio engineered with modern motion choreography and responsive component architecture.",
                                                color: "text-[#ACD2ED]"
                                            }
                                        ].map((proj, idx) => (
                                            <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <h4 className="font-bold text-white text-sm">{proj.title}</h4>
                                                    <span className={`text-[11px] font-mono ${proj.color} font-semibold`}>{proj.stack}</span>
                                                </div>
                                                <p className="text-xs text-neutral-300 leading-relaxed font-light">{proj.desc}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Tab 3: Education & Certifications from Resume */}
                                {activeTab === 'education' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-3.5"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                                                <span className="text-[10px] font-mono text-[#E1E289] uppercase">2024 – Present</span>
                                                <h5 className="font-bold text-white text-xs mt-0.5">BSc (Hons) Computing</h5>
                                                <p className="text-[11px] text-neutral-400">Islington College / London Met</p>
                                            </div>
                                            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                                                <span className="text-[10px] font-mono text-[#ACD2ED] uppercase">2023 – 2024</span>
                                                <h5 className="font-bold text-white text-xs mt-0.5">SLC (+2 Science)</h5>
                                                <p className="text-[11px] text-neutral-400">Bluebird College, NEB</p>
                                            </div>
                                            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                                                <span className="text-[10px] font-mono text-[#99AA38] uppercase">2022</span>
                                                <h5 className="font-bold text-white text-xs mt-0.5">SEE</h5>
                                                <p className="text-[11px] text-neutral-400">South Zone Secondary School</p>
                                            </div>
                                        </div>

                                        {/* Certifications Badges */}
                                        <div className="p-4 rounded-2xl bg-black/60 border border-[#E1E289]/20 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-[#E1E289] uppercase font-bold">Training & Certifications</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                                                <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#ACD2ED] shrink-0" /> AWS Academy: Cloud Foundations</div>
                                                <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#ACD2ED] shrink-0" /> AWS Academy: Data Engineering</div>
                                                <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#ACD2ED] shrink-0" /> AWS Academy: ML Foundations</div>
                                                <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#ACD2ED] shrink-0" /> AWS Academy: ML for NLP</div>
                                                <div className="flex items-center gap-2 sm:col-span-2"><CheckCircle2 size={13} className="text-[#99AA38] shrink-0" /> Java Object-Oriented Programming Certification</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Resume Modal Footer Actions */}
                            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
                                <a
                                    href="mailto:kaushubh3@gmail.com"
                                    className="text-xs font-bold text-[#E1E289] hover:text-white transition-colors flex items-center gap-1.5"
                                >
                                    <Mail size={14} />
                                    <span>kaushubh3@gmail.com</span>
                                </a>

                                <div className="flex items-center gap-2.5">
                                    <a
                                        href="/Kaushubh_Chaudhary_Resume.pdf"
                                        download="Kaushubh_Chaudhary_Resume.pdf"
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all"
                                    >
                                        <Download size={13} />
                                        <span>Download PDF</span>
                                    </a>

                                    <button
                                        onClick={() => {
                                            setIsResumeOpen(false);
                                            scrollToSection('contact');
                                        }}
                                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] text-black text-xs font-bold hover:opacity-90 transition-opacity shadow-lg"
                                    >
                                        Contact Directly
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
