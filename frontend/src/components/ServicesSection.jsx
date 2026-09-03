import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Cloud, Database, ArrowUpRight, Sparkles } from 'lucide-react';

const SERVICES = [
    {
        id: 'fullstack',
        title: 'Full-Stack Web Development',
        category: 'ENGINEERING',
        icon: Code2,
        color: 'from-[#87B6A7] to-[#5B5941]',
        glowColor: 'from-[#87B6A7]/20 via-[#E3F09B]/10 to-transparent',
        accentText: 'text-[#87B6A7]',
        description: 'Building end-to-end web platforms combining reactive React frontends with scalable Node.js/Express backends, PostgreSQL databases, and secure JWT/OAuth authentication workflows.',
        tags: ['React JS', 'Node JS', 'PostgreSQL', 'JavaScript', 'JWT/OAuth', 'Tailwind CSS'],
        metric: 'Full-Stack Scalability',
        previewCode: `const application = createFullStackService({\n  frontend: "React JS + Tailwind",\n  backend: "Node.js RESTful API",\n  database: "PostgreSQL",\n  auth: "JWT / OAuth 2.0 Security"\n});`
    },
    {
        id: 'java-systems',
        title: 'Java & Backend Architecture',
        category: 'SYSTEMS',
        icon: Layout,
        color: 'from-[#F79F79] to-[#5B5941]',
        glowColor: 'from-[#F79F79]/20 via-[#F7D08A]/10 to-transparent',
        accentText: 'text-[#F79F79]',
        description: 'Designing modular object-oriented software architectures in Java with structured database layers, type safety, and clean MVC/REST principles certified by Java OOP credentials.',
        tags: ['Java', 'OOP Architecture', 'Database Management', 'Admin Dashboards', 'REST APIs'],
        metric: 'Certified Java OOP',
        previewCode: `public class BookingEngine {\n  private DatabaseConnection db;\n  public Response processRoute(TrekRoute route) {\n    return db.persist(route.validate());\n  }\n}`
    },
    {
        id: 'cloud-devops',
        title: 'Cloud Infrastructure & DevOps',
        category: 'CLOUD & DEVOPS',
        icon: Cloud,
        color: 'from-[#F7D08A] to-[#F79F79]',
        glowColor: 'from-[#F7D08A]/20 via-[#F79F79]/10 to-transparent',
        accentText: 'text-[#F7D08A]',
        description: 'Deploying reliable, production-ready web platforms across Amazon EC2, Vercel, and Railway with Linux OS management, automated CI/CD pipelines, and zero-downtime hosting.',
        tags: ['Amazon EC2', 'AWS Cloud Foundations', 'Vercel', 'Railway', 'Linux OS', 'Git/GitHub'],
        metric: 'AWS Academy Certified',
        previewCode: `# AWS Cloud Deployment Pipeline\naws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --instance-type t3.micro \\\n  --security-group-ids sg-web-production`
    },
    {
        id: 'data-ml',
        title: 'Data Engineering & AI Foundations',
        category: 'DATA & ML',
        icon: Database,
        color: 'from-[#E3F09B] to-[#87B6A7]',
        glowColor: 'from-[#E3F09B]/20 via-[#87B6A7]/10 to-transparent',
        accentText: 'text-[#E3F09B]',
        description: 'Processing datasets and implementing natural language processing models leveraging Python, AWS Data Engineering, and certified machine learning pipelines.',
        tags: ['Python', 'AWS Data Engineering', 'Machine Learning Foundations', 'NLP Processing'],
        metric: 'AWS ML NLP Graduate',
        previewCode: `import pandas as pd\n\ndef process_data_stream(dataset):\n    df = pd.DataFrame(dataset)\n    return df.clean_records().transform_nlp()`
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(SERVICES[0]);

    return (
        <section id="services" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 sm:px-6 relative select-none">
            <div className="max-w-6xl w-full mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300 mb-4 backdrop-blur-xl">
                        <Sparkles size={12} className="text-[#F7D08A]" />
                        <span>Core Capabilities & Disciplines</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F79F79] via-[#F7D08A] to-[#87B6A7]">Expertise</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        Technical execution bridging responsive frontend interfaces, RESTful backends, and cloud infrastructure.
                    </p>
                </motion.div>

                {/* Two-Column Interactive Switcher */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Navigation List */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
                        {SERVICES.map((item) => {
                            const isActive = activeService.id === item.id;
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveService(item)}
                                    className={`relative w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group overflow-hidden ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]'
                                    }`}
                                >
                                    {/* Animated Active Indicator Pill with Palette Glow */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            className="absolute inset-0 bg-[#1A1913] border border-[#F7D08A]/40 rounded-2xl shadow-[0_0_30px_rgba(247,208,138,0.2)]"
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                                            isActive
                                                ? `bg-gradient-to-br ${item.color} text-black font-bold shadow-md border-transparent`
                                                : 'bg-white/[0.02] border-white/[0.06] text-neutral-500 group-hover:text-neutral-300'
                                        }`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <span className={`text-[10px] font-mono tracking-widest ${item.accentText} block uppercase font-bold`}>
                                                {item.category}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold tracking-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex items-center">
                                        {isActive ? (
                                            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F79F79] to-[#F7D08A] shadow-[0_0_10px_rgba(247,159,121,0.9)]" />
                                        ) : (
                                            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Display Card with Dynamic Palette Glow */}
                    <div className="lg:col-span-7 flex">
                        <div className="relative w-full rounded-3xl p-8 sm:p-10 bg-[#14130E]/90 border border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between overflow-hidden shadow-2xl">
                            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${activeService.glowColor} blur-[110px] rounded-full pointer-events-none transition-all duration-700`} />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="relative z-10 space-y-6 flex-1 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <span className={`text-xs font-mono tracking-widest ${activeService.accentText} uppercase font-bold`}>
                                                // {activeService.category} SPECIFICATION
                                            </span>
                                            <span className="px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-neutral-200">
                                                {activeService.metric}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                                            {activeService.title}
                                        </h3>

                                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                                            {activeService.description}
                                        </p>

                                        {/* Tags with Palette Badges */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {activeService.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#F7D08A]/40 text-xs font-mono text-neutral-200 backdrop-blur-md transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Code/Architecture Terminal Preview */}
                                    <div className="p-4 rounded-2xl bg-black/70 border border-white/10 font-mono text-xs overflow-x-auto shadow-inner">
                                        <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/[0.06]">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#F79F79]" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#F7D08A]" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#87B6A7]" />
                                            <span className="text-[10px] text-neutral-500 ml-2">architecture_spec.ts</span>
                                        </div>
                                        <pre className="text-[11px] leading-relaxed overflow-x-auto text-neutral-300">
                                            <code>{activeService.previewCode}</code>
                                        </pre>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
