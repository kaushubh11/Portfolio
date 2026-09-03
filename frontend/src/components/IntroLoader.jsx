import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
    { text: "FULL-STACK WEB DEVELOPMENT", color: "from-[#ACD2ED] via-[#E1E289] to-[#99AA38]" },
    { text: "RESPONSIVE FRONT-END & UI/UX", color: "from-[#E1E289] via-[#99AA38] to-[#ACD2ED]" },
    { text: "AWS CLOUD & DEVOPS SYSTEMS", color: "from-[#ACD2ED] via-[#99AA38] to-[#14591D]" },
    { text: "SCALABLE BACKEND ARCHITECTURE", color: "from-[#99AA38] via-[#E1E289] to-[#ACD2ED]" },
];

const IntroLoader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);
    const [showName, setShowName] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (index < WORDS.length) {
            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, 1100);
            return () => clearTimeout(timeout);
        } else {
            setShowName(true);
            const exitTimeout = setTimeout(() => {
                setIsExiting(true);
                const completeTimeout = setTimeout(() => {
                    onComplete();
                }, 1000);
                return () => clearTimeout(completeTimeout);
            }, 1600);
            return () => clearTimeout(exitTimeout);
        }
    }, [index, onComplete]);

    return (
        <AnimatePresence>
            {!isExiting ? (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.0 }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#061208] text-white select-none overflow-hidden px-4"
                >
                    {/* Multi-Color Ambient Glows (Moss, Sky, Forest) */}
                    <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#14591D]/30 via-[#99AA38]/20 to-[#ACD2ED]/25 blur-[160px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center justify-center min-h-[160px] text-center">
                        <AnimatePresence mode="wait">
                            {!showName ? (
                                <motion.div
                                    key={WORDS[index]?.text || "final"}
                                    initial={{ y: 25, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -25, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                                >
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${WORDS[index]?.color || "from-white to-neutral-400"}`}>
                                        {WORDS[index]?.text}
                                    </span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="name"
                                    initial={{ y: 30, opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col items-center gap-3 text-center"
                                >
                                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] drop-shadow-[0_0_40px_rgba(172,210,237,0.5)] uppercase">
                                        KAUSHUBH CHAUDHARY
                                    </h1>
                                    <span className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-[#ACD2ED] font-semibold">
                                        FULL STACK DEVELOPER & CLOUD ARCHITECT
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Bottom Loading Multi-Gradient Bar */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            className="w-full h-full bg-gradient-to-r from-[#14591D] via-[#99AA38] via-[#E1E289] to-[#ACD2ED]"
                        />
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default IntroLoader;
