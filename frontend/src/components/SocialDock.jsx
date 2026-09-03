import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        href: 'https://github.com/Kaushubh11',
        icon: Github,
        color: 'hover:text-[#ACD2ED] hover:border-[#ACD2ED]/40',
        glow: 'hover:shadow-[0_0_15px_rgba(172,210,237,0.35)]',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kaushubh-chaudhary-265535317/',
        icon: Linkedin,
        color: 'hover:text-[#E1E289] hover:border-[#E1E289]/40',
        glow: 'hover:shadow-[0_0_15px_rgba(225,226,137,0.35)]',
    },
    {
        name: 'Email',
        href: 'mailto:kaushubh3@gmail.com',
        icon: Mail,
        color: 'hover:text-[#99AA38] hover:border-[#99AA38]/40',
        glow: 'hover:shadow-[0_0_15px_rgba(153,170,56,0.35)]',
    },
];

const SocialDock = ({ introComplete }) => {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={introComplete ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Social connections"
            className="fixed left-4 sm:left-6 bottom-8 z-40 hidden md:flex flex-col items-center gap-3 select-none"
        >
            <div className="flex flex-col gap-2 p-1.5 rounded-2xl bg-[#0A1D10]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                {SOCIAL_LINKS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={item.name}
                            title={item.name}
                            className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-neutral-400 ${item.color} ${item.glow} hover:bg-white/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#E1E289]/50`}
                        >
                            <Icon size={18} className="transition-transform group-hover:scale-110" />
                        </a>
                    );
                })}
            </div>

            {/* Vertical Connecting Accent Line */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#E1E289]/40 to-transparent" />
        </motion.aside>
    );
};

export default SocialDock;
