import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [activeId, setActiveId] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const lastScrollY = useRef(0);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 85;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: id === 'hero' ? 0 : elementPosition - navHeight,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    // Auto-close click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 30);

            if (isMobileMenuOpen && Math.abs(currentScrollY - lastScrollY.current) > 20) {
                setIsMobileMenuOpen(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    // Section Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-15% 0px -40% 0px',
                threshold: [0.1, 0.25, 0.5],
            }
        );

        NAV_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6 pointer-events-none transition-all duration-300 select-none"
        >
            {/* Streamlined Floating Pill Navigation */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`pointer-events-auto flex items-center justify-between sm:justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-[#081b0e]/90 backdrop-blur-2xl border border-[#E1E289]/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
                        : 'bg-[#0A210F]/75 backdrop-blur-xl border border-white/[0.08] shadow-xl'
                }`}
            >
                {/* Consolidated Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`group relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 focus:outline-none overflow-hidden ${
                                    isActive
                                        ? 'text-black font-bold'
                                        : 'text-neutral-300 hover:text-white'
                                }`}
                            >
                                {/* Active Sliding Pill with Coolors Palette Gradient */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] rounded-full shadow-[0_0_20px_rgba(172,210,237,0.5)]"
                                    />
                                )}

                                {/* Rolling Text Animation */}
                                <span className="relative z-10 block overflow-hidden h-[18px]">
                                    <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                                        <span className="h-[18px] flex items-center justify-center tracking-wide">
                                            {item.name}
                                        </span>
                                        <span className="h-[18px] flex items-center justify-center tracking-wide text-[#E1E289]">
                                            {item.name}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Action: Direct Connect CTA Button */}
                <div className="flex items-center gap-2">
                    <div className="hidden sm:block p-[1px] rounded-full bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] shadow-[0_0_15px_rgba(172,210,237,0.3)] hover:shadow-[0_0_25px_rgba(153,170,56,0.5)] transition-shadow">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-5 py-2 rounded-full text-xs font-bold text-white bg-[#061208] hover:bg-[#0A210F] transition-all duration-300 active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10 block overflow-hidden h-[16px]">
                                <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                                    <span className="h-[16px] flex items-center justify-center">Get in Touch</span>
                                    <span className="h-[16px] flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] to-[#E1E289]">Get in Touch</span>
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 focus:outline-none active:scale-95 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        <div className="w-4 h-3.5 flex flex-col justify-between">
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="w-full h-0.5 bg-current rounded-full origin-center"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.15 }}
                                className="w-full h-0.5 bg-current rounded-full"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="w-full h-0.5 bg-current rounded-full origin-center"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Dropdown Menu with Streamlined Items */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-auto absolute top-20 inset-x-4 max-w-md mx-auto bg-[#0A1D10]/95 border border-[#E1E289]/20 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl md:hidden overflow-hidden text-white"
                    >
                        <div className="flex flex-col space-y-1">
                            {NAV_ITEMS.map((item, index) => {
                                const isActive = activeId === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.04, duration: 0.2 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                                            isActive
                                                ? 'bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] text-black font-bold shadow-md'
                                                : 'text-neutral-300 hover:text-white hover:bg-white/[0.05]'
                                        }`}
                                    >
                                        <span>{item.name}</span>
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                            <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] to-[#99AA38] font-mono font-bold">PORTFOLIO</span>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-3.5 py-1.5 text-xs font-bold text-black bg-gradient-to-r from-[#ACD2ED] to-[#E1E289] rounded-lg shadow-sm"
                            >
                                Contact Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
