import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

const EDUCATION_DATA = [
    {
        degree: "BSc (Hons) Computing",
        school: "Islington College (London Metropolitan University)",
        year: "2024 – Present",
        location: "Kamalpokhari, Kathmandu",
        description: "Specializing in software engineering methodologies, database systems, object-oriented architecture, web technologies, and scalable cloud solutions.",
        badge: "Undergraduate Degree",
        icon: GraduationCap,
        color: "from-[#ACD2ED] to-[#E1E289]",
        accent: "text-[#ACD2ED]"
    },
    {
        degree: "School Leaving Certificate (SLC / +2)",
        school: "Bluebird College (National Examinations Board)",
        year: "2023 – 2024",
        location: "Lalitpur, Nepal",
        description: "Completed secondary education with rigorous coursework in physical sciences, mathematics, and computing fundamentals.",
        badge: "+2 Science",
        icon: Award,
        color: "from-[#E1E289] to-[#99AA38]",
        accent: "text-[#E1E289]"
    },
    {
        degree: "Secondary Education Examination (SEE)",
        school: "South Zone Secondary School (National Examinations Board)",
        year: "2022",
        location: "Birgunj, Parsa",
        description: "Graduated with strong academic distinction across mathematics, sciences, and computer applications.",
        badge: "Secondary Education",
        icon: GraduationCap,
        color: "from-[#99AA38] to-[#14591D]",
        accent: "text-[#99AA38]"
    }
];

const CERTIFICATIONS = [
    "AWS Academy Graduate - Cloud Foundations",
    "AWS Academy Graduate - Data Engineering",
    "AWS Academy Graduate - Machine Learning Foundations",
    "AWS Academy Graduate - Machine Learning for Natural Language Processing",
    "Java Object-Oriented Programming Certification"
];

const Education = () => {
    return (
        <section id="education" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 relative select-none">
            <div className="max-w-4xl w-full mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1E289] to-[#99AA38]">Certifications</span>
                    </h2>
                    <p className="text-neutral-400 max-w-lg mx-auto text-sm sm:text-base font-light">
                        The academic journey and verified industry credentials shaping my technical foundation.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-5">
                    {EDUCATION_DATA.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="p-6 sm:p-8 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl hover:border-[#E1E289]/40 shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3.5">
                                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-black shadow-md font-bold`}>
                                            <IconComponent size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                                {item.degree}
                                            </h3>
                                            <p className="text-sm text-neutral-400 font-medium">
                                                {item.school}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold ${item.accent} font-mono`}>
                                            <Calendar size={12} className={item.accent} />
                                            <span>{item.year}</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] text-xs font-medium text-neutral-400">
                                            <MapPin size={12} />
                                            <span>{item.location}</span>
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light pl-0 sm:pl-14">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Training & Certifications Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="p-7 rounded-3xl bg-[#0A1D10]/90 border border-[#E1E289]/25 backdrop-blur-2xl shadow-xl space-y-4"
                >
                    <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                        <Award size={18} className="text-[#E1E289]" />
                        <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                            AWS Academy & Professional Badges
                        </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-200">
                        {CERTIFICATIONS.map((cert, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                <CheckCircle2 size={16} className="text-[#ACD2ED] shrink-0" />
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
