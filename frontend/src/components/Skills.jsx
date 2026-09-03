import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
    {
        title: "Programming Languages & Frameworks",
        icon: Code2,
        color: "from-[#87B6A7] to-[#5B5941]",
        barGradient: "from-[#87B6A7] via-[#E3F09B] to-[#F7D08A]",
        skills: [
            { name: "JavaScript (ES6+) & TypeScript", level: 90 },
            { name: "React JS & Modern Ecosystem", level: 90 },
            { name: "Node.js & RESTful Backends", level: 85 },
            { name: "Java (Object-Oriented Programming)", level: 85 },
            { name: "Python (Data & Scripting)", level: 80 },
            { name: "HTML5 & CSS3 / Tailwind CSS", level: 95 },
        ]
    },
    {
        title: "Cloud, DevOps & Tools",
        icon: Cloud,
        color: "from-[#F79F79] to-[#5B5941]",
        barGradient: "from-[#F79F79] via-[#F7D08A] to-[#87B6A7]",
        skills: [
            { name: "Amazon EC2 (AWS Cloud Foundations)", level: 85 },
            { name: "Vercel & Railway Deployment", level: 90 },
            { name: "Git & GitHub Version Control", level: 90 },
            { name: "VS Code, Terminal, Cursor, Antigravity", level: 95 },
            { name: "CI/CD & Cloud Infrastructure", level: 75 },
        ]
    },
    {
        title: "Databases, Systems & Security",
        icon: Database,
        color: "from-[#F7D08A] to-[#F79F79]",
        barGradient: "from-[#F7D08A] via-[#E3F09B] to-[#87B6A7]",
        skills: [
            { name: "PostgreSQL & Database Design", level: 80 },
            { name: "JWT & OAuth 2.0 Authentication", level: 85 },
            { name: "Linux OS & Environment Management", level: 85 },
            { name: "Windows Environment", level: 90 },
        ]
    },
    {
        title: "Professional & Soft Competencies",
        icon: Cpu,
        color: "from-[#E3F09B] to-[#87B6A7]",
        barGradient: "from-[#E3F09B] via-[#87B6A7] to-[#F79F79]",
        skills: [
            { name: "Problem Solving & Analytical Logic", level: 95 },
            { name: "Quick Learner & Technical Agility", level: 95 },
            { name: "Communication & Technical Writing", level: 90 },
            { name: "Time Management & Agile Delivery", level: 85 },
            { name: "Interpersonal Skills & Collaboration", level: 90 },
        ]
    }
];

const SkillItem = ({ name, level, barGradient }) => {
    return (
        <div className="space-y-1.5 group">
            <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-neutral-300 group-hover:text-white transition-colors">
                    {name}
                </span>
                <span className="text-[#F7D08A] font-mono text-[11px] font-bold">
                    {level}%
                </span>
            </div>
            <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-[1px]">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full bg-gradient-to-r ${barGradient} rounded-full shadow-[0_0_10px_rgba(247,159,121,0.5)]`}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 relative select-none">
            <div className="max-w-5xl w-full mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F79F79] to-[#87B6A7]">Stack</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        Technical competencies and core engineering tools extracted from production applications and academic rigor.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILL_CATEGORIES.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="p-7 sm:p-8 rounded-3xl bg-[#0c0819]/90 border border-white/[0.08] backdrop-blur-2xl hover:border-[#F7D08A]/40 shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-black font-bold shadow-md`}>
                                        <IconComponent size={20} />
                                    </div>
                                    <h3 className="text-base font-bold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <SkillItem key={sIdx} name={skill.name} level={skill.level} barGradient={category.barGradient} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
