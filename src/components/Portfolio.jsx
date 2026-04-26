import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
    const [visibleCount, setVisibleCount] = useState(5);

    const projects = [
      {
        id: "01",
        title: "Happy Agri (Liberia)",
        label: "Landing Page",
        transformation: "Designed a conversion-led landing page for a growing agriculture firm.",
        result: "Established instant brand credibility and a professional digital footprint.",
        image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a3865?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "02",
        title: "Product Launch (Morocco)",
        label: "Business Website",
        transformation: "Built a modern corporate site to move a product from \"idea\" to \"market-ready.\"",
        result: "Professional positioning that secured immediate user trust.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "03",
        title: "TalentMesh (UK)",
        label: "Business Website",
        transformation: "Developed a day-one-ready operations platform for a new UK startup.",
        result: "Enabled a seamless launch with a fully functional service delivery system.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "04",
        title: "Shipday (Switzerland)",
        label: "Platform Website",
        transformation: "Unified a raw application into a polished, brand-focused business platform.",
        result: "Enhanced market perception and streamlined client onboarding.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "05",
        title: "Aura Health (USA)",
        label: "Web App",
        transformation: "Redesigned a wellness application focusing on accessible UX.",
        result: "Increased daily active users by 45% within three months.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "06",
        title: "Luxe Estate (Dubai)",
        label: "Real Estate Portal",
        transformation: "Created a high-end property listing platform with 3D virtual tours.",
        result: "Boosted premium lead generation and extended average session duration.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "07",
        title: "FinTech Flow (Germany)",
        label: "Financial Dashboard",
        transformation: "Architected a secure and scalable portal for B2B financial transactions.",
        result: "Streamlined operational workflows and enhanced enterprise trust.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "08",
        title: "EcoDrive (Sweden)",
        label: "E-Commerce",
        transformation: "Built a sustainable marketplace focusing on seamless checkout flows.",
        result: "Reduced cart abandonment rates by optimizing the user journey.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
      }
    ];

    return (
        <section id="portfolio" className="py-24 px-6 bg-black w-full mx-auto relative border-t border-white/10 font-sans min-h-screen">
            {/* Decorative background glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] pointer-events-none rounded-full" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section (Split Layout) */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-20 mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6">
                            <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                                </svg>
                                Our Portfolio
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl text-white leading-tight font-medium">
                            Proven Results for <br className="hidden md:block"/><span className="text-violet-600">Global Brands</span>
                        </h2>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            We don’t just build websites; we build strategic digital assets. Explore how we’ve helped businesses across the USA, Europe, and Africa scale through performance-driven design and engineering.
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
                    <AnimatePresence>
                        {projects.slice(0, visibleCount).map((project, index) => {
                            // First two items are larger (col-span-3)
                            // Following items are smaller (col-span-2)
                            const isLarge = index === 0 || index === 1;
                            const colSpan = isLarge ? "lg:col-span-3 md:col-span-1" : "lg:col-span-2 md:col-span-1";
                            
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    key={project.id}
                                    className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 h-[400px] md:h-[450px] ${colSpan}`}
                                >
                                    {/* Image Background */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    
                                    {/* Dark Gradients for Text Legibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Text Overlay (Hover Accordion) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-violet-400 font-serif text-lg">{project.id}</span>
                                            <span className="text-white/80 text-xs tracking-widest uppercase font-semibold px-2.5 py-1 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md">
                                                {project.label}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight group-hover:text-violet-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        
                                        {/* Expandable Text */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                            <div className="overflow-hidden">
                                                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 flex flex-col gap-3">
                                                    <div className="border-l-2 border-violet-500/50 pl-3">
                                                        <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-1">The Transformation</span>
                                                        <p className="text-gray-300 text-sm leading-relaxed">
                                                            {project.transformation}
                                                        </p>
                                                    </div>
                                                    <div className="border-l-2 border-green-500/50 pl-3">
                                                        <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-1">Core Impact</span>
                                                        <p className="text-green-100 text-sm leading-relaxed">
                                                            {project.result}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                {visibleCount < projects.length && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-16 flex justify-center"
                    >
                        <button 
                            onClick={() => setVisibleCount(projects.length)}
                            className="bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                        >
                            View More Projects
                            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}