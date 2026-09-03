import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sparkles, Server, GraduationCap } from 'lucide-react';

const HIGHLIGHTS = [
    {
        icon: GraduationCap,
        title: 'BSc (Hons) Computing',
        subtitle: 'Islington College / London Met (2024–Present)',
        tag: 'Academic',
        color: 'from-[#87B6A7] to-[#5B5941]',
        textColor: 'text-[#87B6A7]',
    },
    {
        icon: Sparkles,
        title: 'AWS Academy Graduate',
        subtitle: '4 Cloud & ML Badges + Java OOP Cert',
        tag: 'Certified',
        color: 'from-[#F79F79] to-[#F7D08A]',
        textColor: 'text-[#F79F79]',
    },
    {
        icon: Server,
        title: 'Full Stack Architecture',
        subtitle: 'React JS, Node.js, Java, PostgreSQL & JWT',
        tag: 'Development',
        color: 'from-[#F7D08A] to-[#F79F79]',
        textColor: 'text-[#F7D08A]',
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps Agility',
        subtitle: 'Amazon EC2, Vercel, Railway, Linux OS',
        tag: 'Infrastructure',
        color: 'from-[#E3F09B] to-[#87B6A7]',
        textColor: 'text-[#E3F09B]',
    },
];

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 relative select-none">
            <div className="max-w-5xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="p-8 sm:p-14 rounded-3xl bg-[#0c0819]/90 border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(247,159,121,0.15)] relative overflow-hidden"
                >
                    {/* Radiant Corner Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F79F79]/20 via-[#F7D08A]/15 to-transparent blur-[140px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#87B6A7]/20 via-[#E3F09B]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

                    <div className="relative z-10">

                        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white mb-8 tracking-tight leading-tight">
                            Building Scalable Applications, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F79F79] via-[#F7D08A] to-[#87B6A7]">
                                From Code to Cloud Deployment.
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-12 gap-8 items-start mb-6">
                            <div className="md:col-span-7 space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                                <p>
                                    I am <strong className="text-white font-bold">Kaushubh Kr. Chaudhary</strong>, an enthusiastic Full Stack Web Developer based in <span className="text-[#F7D08A] font-medium">Maitidevi, Kathmandu</span>, currently pursuing a BSc (Hons) in Computing at Islington College / London Metropolitan University.
                                </p>
                                <p className="text-neutral-400">
                                    I specialize in building efficient, scalable, and user-centered web applications. My core technical expertise spans responsive UI engineering with React and Tailwind CSS to robust RESTful backend architectures using Node.js, Java, PostgreSQL, and secure JWT/OAuth authentication.
                                </p>
                                <p className="text-neutral-400">
                                    Looking ahead, my goal is to evolve into a <strong className="text-white font-semibold">DevOps Engineer</strong> by expanding expertise in CI/CD automation, containerization, and cloud infrastructure on Amazon EC2, bridging software craftsmanship with reliable production operations.
                                </p>
                            </div>

                            {/* Key Highlights Grid */}
                            <div className="md:col-span-5 grid grid-cols-1 gap-3.5">
                                {HIGHLIGHTS.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#F7D08A]/40 hover:bg-white/[0.06] transition-all duration-300 shadow-sm group"
                                        >
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-black font-bold shadow-md`}>
                                                <IconComponent size={18} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                    <span className={`text-[10px] font-mono uppercase ${item.textColor} font-bold`}>
                                                        {item.tag}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-neutral-400 mt-0.5">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
