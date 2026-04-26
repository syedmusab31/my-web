import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "High-Conversion Landing Pages",
      subtitle: "The Sales Specialist",
      description: "Stop burning your ad budget. We build single-page powerhouses designed with one goal in mind: Conversions. Whether you are launching a product, running Google Ads, or capturing leads.",
      features: ["A/B Test Ready", "Psychology-Driven UX", "Ultra-Fast Loading", "Compelling Copywriting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Strategic Business Websites",
      subtitle: "The Digital Headquarters",
      description: "Your website is the face of your company. If it looks outdated, your business feels outdated. We build multi-page, professional websites that establish Authority and Trust.",
      features: ["Brand Storytelling", "SEO-First Architecture", "Full Responsiveness", "Scalable Infrastructure"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The \"Growth\" Support",
      subtitle: "Maintenance & Optimization",
      description: "A website is a living asset. We provide the technical muscle to keep it running at peak performance while you focus on your business.",
      features: ["Monthly Hosting & Security", "Speed Optimization Audits", "Lead Tracking", "Routine Updates"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black w-full mx-auto relative border-t border-white/10">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6 mx-auto">
                <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                    </svg>
                    Our Expertise
                </span>
            </div>
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto text-white leading-tight font-medium">
              Tailored Digital Solutions for <br className="hidden md:block"/><span className="text-violet-600">Scalable Growth</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              We don't just build sites; we build high-performance assets that work for your bottom line.
            </p>
        </div>

        {/* Accordion / List Grid */}
        <div className="w-full flex flex-col mt-10 border-t border-white/10">
            {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                    <motion.div 
                        layout
                        key={index}
                        onClick={() => setActiveIndex(isActive ? null : index)}
                        className="group border-b border-white/10 cursor-pointer overflow-hidden"
                    >
                        {/* Accordion Header (Always Visible) */}
                        <motion.div 
                            layout 
                            className={`flex items-center justify-between px-4 transition-all duration-500 ease-out ${isActive ? 'py-8' : 'py-6 hover:bg-white/[0.02]'}`}
                        >
                            <motion.h3 
                                layout="position" 
                                className={`font-medium transition-colors duration-500 ${isActive ? 'text-3xl md:text-5xl text-white' : 'text-xl md:text-3xl text-gray-500 group-hover:text-gray-300'}`}
                            >
                                {service.title} {isActive && <span className="text-violet-500">.</span>}
                            </motion.h3>

                            {/* Rotating Arrow */}
                            <motion.div 
                                layout="position"
                                animate={{ rotate: isActive ? 180 : 0 }}
                                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-violet-500/50 text-violet-400' : 'border-white/10 text-gray-500 group-hover:border-violet-500/50 group-hover:text-violet-400 group-hover:bg-white/5'}`}
                            >
                                <ArrowDown className="w-5 h-5" />
                            </motion.div>
                        </motion.div>

                        {/* Expandable Content (Slides down below header) */}
                        <AnimatePresence initial={false}>
                            {isActive && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="px-4"
                                >
                                    <div className="flex flex-col lg:flex-row gap-8 pb-10 pt-4">
                                        {/* Text Details */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="lg:w-1/2 flex flex-col justify-center"
                                        >
                                            <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 block">
                                                {service.subtitle}
                                            </span>
                                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                                                {service.description}
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-3">
                                                {service.features.map((feat, i) => (
                                                    <span key={i} className="text-sm text-gray-200 bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
                                                        {feat}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                        
                                        {/* Image */}
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
                                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                                            className="lg:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl shadow-black group/image"
                                        >
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                )
            })}
        </div>

      </div>
    </section>
  );
}