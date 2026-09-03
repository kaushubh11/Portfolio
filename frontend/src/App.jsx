import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import CanvasBackground from './components/CanvasBackground';
import SocialDock from './components/SocialDock';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionBackgroundPattern from './components/SectionBackgroundPattern';
import ServicesSection from './components/ServicesSection';
import JourneySection from './components/JourneySection';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [introComplete, setIntroComplete] = useState(false);

    // Lock body scroll during preloader
    useEffect(() => {
        if (!introComplete) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [introComplete]);

    return (
        <div className="relative bg-[#061208] text-white min-h-screen overflow-x-hidden selection:bg-[#99AA38] selection:text-black font-sans">
            {/* Sequential Fullscreen Preloader */}
            {!introComplete && (
                <IntroLoader onComplete={() => setIntroComplete(true)} />
            )}

            {/* Interactive HTML5 2D Constellation Canvas (Hero Atmosphere) */}
            <CanvasBackground />

            {/* Accessible Fixed Vertical Social Dock */}
            <SocialDock introComplete={introComplete} />

            {/* Navigation Bar with Consolidated Links & Rolling Text Hover */}
            <Navbar />

            {/* Main Page Layout */}
            <main className="relative z-10">
                {/* 1. Hero Section (Keeps its dedicated radial glow & 2D constellation canvas) */}
                <Hero introComplete={introComplete} />

                {/* 2. All Subsequent Content Sections with Architectural Blueprint Grid & Dot Matrix Patterns */}
                <div className="relative">
                    {/* Layered Technical Blueprint Grid & Micro-Dot Matrix Background Pattern */}
                    <SectionBackgroundPattern />

                    {/* Content Sections */}
                    <div className="relative z-10">
                        <ServicesSection />
                        <JourneySection />
                        <About />
                        <Skills />
                        <Education />
                        <Projects />
                        <Contact />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
