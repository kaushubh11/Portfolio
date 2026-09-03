import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2, Compass, ShieldCheck, MapPin, MessageSquare, ShoppingBag, Radio, Sparkles } from 'lucide-react';

const TiltCard = ({ title, category, description, tech = [], features = [], featured = false, links, index, glowColor, mediaPreview }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 350, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 350, damping: 25 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        x.set(mouseXVal / width - 0.5);
        y.set(mouseYVal / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-3xl p-6 sm:p-8 bg-[#0A1D10]/95 border border-white/[0.08] backdrop-blur-2xl hover:border-[#99AA38]/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.22)] transition-all duration-500 group flex flex-col justify-between overflow-hidden ${
                featured ? 'lg:col-span-2 min-h-[580px]' : 'min-h-[520px]'
            }`}
        >
            {/* Dynamic Radial Hover Glow */}
            <div className={`absolute -top-24 -right-24 w-96 h-96 ${glowColor} blur-[120px] rounded-full pointer-events-none group-hover:opacity-100 opacity-50 transition-all duration-700`} />

            <div className="relative z-10 flex flex-col space-y-5">
                {/* Top Row: Icon, Category & High-Contrast Cohesive Action Buttons */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#ACD2ED] via-[#E1E289] to-[#99AA38] text-black font-bold shadow-md">
                            <FolderGit2 size={20} />
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-[#E1E289] uppercase tracking-widest font-bold block">
                                {category}
                            </span>
                            <h3 className={`font-extrabold tracking-tight text-white transition-colors ${
                                featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                            }`}>
                                {title}
                            </h3>
                        </div>
                    </div>

                    {/* Cohesive Action Pills with Balanced Contrast */}
                    <div className="flex items-center gap-2">
                        {links?.github && (
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${title} Source Code`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white text-xs font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                            >
                                <Github size={13} className="text-[#ACD2ED]" />
                                <span>Code</span>
                            </a>
                        )}
                        {links?.demo && (
                            <a
                                href={links.demo}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${title} Live Demo`}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ACD2ED] to-[#E1E289] hover:opacity-90 text-black text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                            >
                                <span>Demo</span>
                                <ArrowUpRight size={13} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Visual Media Preview Area to eliminate empty dead space */}
                <div className="w-full rounded-2xl bg-black/70 border border-white/10 p-4 relative overflow-hidden shadow-inner transform-gpu">
                    {mediaPreview}
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                    {description}
                </p>
            </div>

            {/* Differentiated Tag Pills with Clean Bottom Alignment */}
            <div className="relative z-10 pt-5 mt-auto border-t border-white/[0.06] flex flex-wrap gap-2 items-center">
                {/* Technical Stack Tags: Outline Badges */}
                {tech.map((t) => (
                    <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono text-neutral-300 bg-white/[0.02] border border-white/20 rounded-full backdrop-blur-sm hover:border-[#ACD2ED]/50 transition-colors"
                    >
                        {t}
                    </span>
                ))}

                {/* Architectural & Feature Tags: Soft Tinted Badges */}
                {features.map((f) => (
                    <span
                        key={f}
                        className="px-2.5 py-1 text-[11px] font-mono text-[#E1E289] bg-[#99AA38]/15 border border-[#99AA38]/35 rounded-full font-semibold backdrop-blur-sm"
                    >
                        {f}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 relative select-none">
            <div className="max-w-6xl w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300 mb-4 backdrop-blur-xl">
                        <Sparkles size={12} className="text-[#E1E289]" />
                        <span>Production & Academic Architectures</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38]">Projects</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        Software engineering platforms, full-stack systems, and real-time communication architectures.
                    </p>
                </motion.div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* 1. Large Featured Card: Expedition77 */}
                    <TiltCard
                        index={0}
                        featured={true}
                        title="Expedition77"
                        category="ACADEMIC FULL-STACK PLATFORM"
                        description="A full-stack tour guide booking ecosystem connecting global trekkers with certified local guides. Features dynamic route publishing, guide vetting, booking scheduling, and a secure admin control panel managing multi-tier platform inquiries."
                        tech={["Java", "CSS3", "SQL"]}
                        features={["OOP Architecture", "Admin Dashboard", "Booking Engine", "Route Management"]}
                        glowColor="bg-[#ACD2ED]/25"
                        links={{ github: "https://github.com/Kaushubh11", demo: "https://expedition77-production.up.railway.app/" }}
                        mediaPreview={(
                            <div className="space-y-3">
                                {/* Browser Chrome Header */}
                                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#99AA38]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#E1E289]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ACD2ED]" />
                                        <span className="text-[10px] font-mono text-neutral-400 ml-2 flex items-center gap-1">
                                            <Compass size={11} className="text-[#ACD2ED]" />
                                            expedition77-production.up.railway.app
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#E1E289] px-2 py-0.5 rounded bg-[#E1E289]/10 border border-[#E1E289]/20">
                                        Live on Railway
                                    </span>
                                </div>

                                {/* Mockup Split: Trek Card & Admin Widgets */}
                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                                    {/* Trek Route Preview Widget */}
                                    <div className="sm:col-span-7 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                                                <MapPin size={12} className="text-[#ACD2ED]" />
                                                Annapurna Circuit Trek
                                            </span>
                                            <span className="text-[10px] font-mono text-[#99AA38] font-bold">14 Days</span>
                                        </div>
                                        <p className="text-[11px] text-neutral-400 font-light">
                                            Curated high-altitude route • 5,416m Thorong La Pass
                                        </p>
                                        <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-300 border-t border-white/[0.04]">
                                            <span className="flex items-center gap-1 text-[#E1E289]"><ShieldCheck size={11} /> Verified Guide</span>
                                            <span className="font-mono text-white font-bold">$1,250 / Traveler</span>
                                        </div>
                                    </div>

                                    {/* Admin Live Analytics Widget */}
                                    <div className="sm:col-span-5 p-3 rounded-xl bg-gradient-to-br from-[#0E2C16]/70 to-[#0A1D10] border border-[#99AA38]/30 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-[#E1E289] uppercase font-bold block">Admin Telemetry</span>
                                            <span className="text-sm font-extrabold text-white">+18 Confirmed Bookings</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-2">
                                            <span>Guide Status:</span>
                                            <span className="text-[#ACD2ED] font-bold">100% Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />

                    {/* 2. Mirar: Watch Ecommerce */}
                    <TiltCard
                        index={1}
                        featured={false}
                        title="Mirar: Watch Ecommerce"
                        category="ACADEMIC FRONTEND SYSTEM"
                        description="A frontend-focused ecommerce experience for browsing and purchasing luxury timepieces. Engineered with responsive catalog filtering, high-resolution product showcases, and a reactive shopping cart checkout flow."
                        tech={["JavaScript", "HTML5", "CSS3"]}
                        features={["Responsive UI", "Cart Engine", "Product Filtering"]}
                        glowColor="bg-[#E1E289]/25"
                        links={{ github: "https://github.com/Kaushubh11", demo: "#" }}
                        mediaPreview={(
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
                                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                                        <ShoppingBag size={11} className="text-[#E1E289]" />
                                        mirar-timepieces.store
                                    </span>
                                    <span className="text-[10px] font-mono text-[#ACD2ED] font-bold">Cart: 1 Item</span>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                                    <div>
                                        <span className="text-xs font-bold text-white block">Chrono Automatic Ref. 04</span>
                                        <span className="text-[10px] font-mono text-neutral-400">Sapphire Crystal • 100m WR</span>
                                    </div>
                                    <span className="text-xs font-mono font-extrabold text-[#E1E289]">$1,450</span>
                                </div>
                            </div>
                        )}
                    />

                    {/* 3. SyncRoom (Renamed from Chatwebsite) */}
                    <TiltCard
                        index={2}
                        featured={false}
                        title="SyncRoom"
                        category="REAL-TIME COMMUNICATION"
                        description="A low-latency real-time messenger room platform inspired by modern messaging architectures. Allows users to create encrypted room channels, share instant session URLs, and chat with sub-50ms websocket synchronization."
                        tech={["TypeScript", "HTML5", "CSS3"]}
                        features={["WebSockets / Async", "Instant URL Rooms", "Multi-Client Sync"]}
                        glowColor="bg-[#99AA38]/25"
                        links={{ github: "https://github.com/Kaushubh11", demo: "#" }}
                        mediaPreview={(
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
                                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                                        <MessageSquare size={11} className="text-[#99AA38]" />
                                        syncroom.live/#dev-channel
                                    </span>
                                    <span className="text-[10px] font-mono text-[#99AA38] flex items-center gap-1 font-bold">
                                        <Radio size={10} className="animate-pulse text-[#99AA38]" />
                                        Connected (12ms)
                                    </span>
                                </div>
                                <div className="space-y-1.5 text-[11px]">
                                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-300">
                                        <span className="font-mono text-[#ACD2ED] font-bold">@alex:</span> Project milestone deployed ahead of schedule.
                                    </div>
                                    <div className="p-2 rounded-lg bg-[#99AA38]/10 border border-[#99AA38]/20 text-[#E1E289] ml-4">
                                        <span className="font-mono text-[#E1E289] font-bold">@kaushubh:</span> Connected to websocket cluster. Ready for testing.
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
