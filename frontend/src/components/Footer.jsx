import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 px-4 border-t border-white/[0.06] bg-[#061208] text-white select-none">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:items-start items-center">
                    <span className="text-sm font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] uppercase">
                        Kaushubh Kr. Chaudhary
                    </span>
                    <p className="text-xs text-neutral-500 font-light mt-0.5">
                        Full Stack Web Developer & Cloud Architect. &copy; {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/Kaushubh11"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-[#ACD2ED] hover:border-[#ACD2ED]/40 hover:bg-white/10 transition-colors"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-[#E1E289] hover:border-[#E1E289]/40 hover:bg-white/10 transition-colors"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="mailto:kaushubh3@gmail.com"
                        aria-label="Email"
                        className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-[#99AA38] hover:border-[#99AA38]/40 hover:bg-white/10 transition-colors"
                    >
                        <Mail size={16} />
                    </a>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ACD2ED] to-[#E1E289] text-black hover:opacity-90 transition-all text-xs font-bold shadow-md ml-2"
                    >
                        <span>Top</span>
                        <ArrowUp size={12} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
