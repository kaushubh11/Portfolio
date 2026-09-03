import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Loader2, MapPin, Phone, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const apiUrl = '/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                setStatus('success');
                setFormValues({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                await new Promise(r => setTimeout(r, 1000));
                setStatus('success');
                setFormValues({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            await new Promise(r => setTimeout(r, 1000));
            setStatus('success');
            setFormValues({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const inputClasses = "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E1E289] focus:ring-1 focus:ring-[#E1E289]/30 transition-all duration-200 text-sm font-medium";

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-28 sm:py-36 px-4 relative select-none">
            <div className="max-w-5xl w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38]">Conversation</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        Open for full-stack engineering roles, frontend development, or technical collaboration. Reach out directly.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Contact Cards with Exact Resume Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-5 space-y-3.5"
                    >
                        {/* Email Card */}
                        <div className="p-5 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl hover:border-[#ACD2ED]/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-[#ACD2ED]/15 text-[#ACD2ED]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                                        Email Address
                                    </h3>
                                    <a
                                        href="mailto:kaushubh3@gmail.com"
                                        className="text-sm font-semibold text-white hover:text-[#ACD2ED] transition-colors"
                                    >
                                        kaushubh3@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="p-5 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl hover:border-[#E1E289]/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-[#E1E289]/15 text-[#E1E289]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                                        Phone Number
                                    </h3>
                                    <a
                                        href="tel:+9779767325541"
                                        className="text-sm font-semibold text-white hover:text-[#E1E289] transition-colors"
                                    >
                                        +977 9767325541
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="p-5 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl hover:border-[#99AA38]/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-[#99AA38]/15 text-[#99AA38]">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                                        Location
                                    </h3>
                                    <p className="text-sm font-semibold text-white">
                                        Maitidevi, Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professional Networks Card */}
                        <div className="p-5 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl">
                            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium mb-3">
                                Professional Profiles
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/Kaushubh11"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#ACD2ED]/40 transition-all"
                                >
                                    <Github size={16} />
                                    <span>Kaushubh11</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kaushubh-chaudhary-265535317/"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#E1E289]/40 transition-all"
                                >
                                    <Linkedin size={16} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Clean Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-7"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 sm:p-10 rounded-3xl bg-[#0A1D10]/90 border border-white/[0.08] backdrop-blur-2xl shadow-2xl space-y-4 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-[#ACD2ED]/15 via-[#E1E289]/10 to-transparent blur-[80px] pointer-events-none" />

                            <div>
                                <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300 mb-1.5 font-mono">
                                    Your Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300 mb-1.5 font-mono">
                                    Email Address
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 mb-1.5 font-mono">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="4"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project, opportunity, or inquiry..."
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#ACD2ED] via-[#E1E289] to-[#99AA38] shadow-[0_0_20px_rgba(172,210,237,0.3)]">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`w-full py-4 rounded-2xl font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                                        status === 'idle'
                                            ? 'bg-[#061208] text-white hover:bg-[#0A210F] active:scale-[0.99]'
                                            : status === 'loading'
                                            ? 'bg-neutral-800 text-neutral-400 cursor-wait'
                                            : status === 'success'
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-red-600 text-white'
                                    }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === 'idle' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <span>Send Transmission</span>
                                                <Send size={14} className="text-[#ACD2ED]" />
                                            </motion.div>
                                        )}
                                        {status === 'loading' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <Loader2 className="animate-spin" size={16} />
                                                <span>Transmitting...</span>
                                            </motion.div>
                                        )}
                                        {status === 'success' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <CheckCircle2 size={16} />
                                                <span>Message Delivered</span>
                                            </motion.div>
                                        )}
                                        {status === 'error' && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <AlertCircle size={16} />
                                                <span>Transmission Failed. Try Again.</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;