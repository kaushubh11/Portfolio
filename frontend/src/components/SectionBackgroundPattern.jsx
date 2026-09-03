import React from 'react';

const SectionBackgroundPattern = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* 1. Geometric Technical Blueprint Grid Pattern */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(225, 226, 137, 0.045) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(225, 226, 137, 0.045) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 95%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 95%, transparent 100%)',
                }}
            />

            {/* 2. Micro Dot-Matrix Accent Layer */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(rgba(172, 210, 237, 0.14) 1.2px, transparent 1.2px)`,
                    backgroundSize: '24px 24px',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 92%, transparent 100%)',
                }}
            />

            {/* 3. Deep Forest & Mint Ambient Glow Orbs Distributed Down the Page */}
            {/* Glow 1: Services Area */}
            <div className="absolute top-[8%] -left-48 w-[600px] h-[600px] bg-gradient-to-tr from-[#14591D]/25 via-[#99AA38]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />
            
            {/* Glow 2: Journey / About Area */}
            <div className="absolute top-[28%] -right-48 w-[650px] h-[650px] bg-gradient-to-bl from-[#ACD2ED]/18 via-[#E1E289]/12 to-transparent blur-[170px] rounded-full pointer-events-none" />

            {/* Glow 3: Skills / Education Area */}
            <div className="absolute top-[52%] left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#14591D]/20 via-[#99AA38]/12 to-transparent blur-[180px] rounded-full pointer-events-none" />

            {/* Glow 4: Projects Area */}
            <div className="absolute top-[75%] -right-32 w-[650px] h-[650px] bg-gradient-to-tl from-[#ACD2ED]/20 via-[#99AA38]/15 to-transparent blur-[170px] rounded-full pointer-events-none" />

            {/* Glow 5: Contact Area */}
            <div className="absolute bottom-[2%] left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#14591D]/25 via-[#E1E289]/10 to-transparent blur-[160px] rounded-full pointer-events-none" />
        </div>
    );
};

export default SectionBackgroundPattern;

