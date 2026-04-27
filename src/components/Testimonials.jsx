import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const testimonials = [
        { 
            text: "The system Musab developed replaced our spreadsheet-based workflow completely. It made our operations faster, more accurate, and much easier to manage on a daily basis.", 
            name: "Aaron Bloyer", 
            role: "Founder, Audatime LLC (USA)", 
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
        },
        { 
            text: "He created a clean and professional landing page that clearly communicates our mission and services. It helped us present our business with much more confidence.", 
            name: "Ramsey Paye Willie", 
            role: "Founder, Happy AgriCompany (Liberia)", 
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" 
        },
        { 
            text: "The application improved our workflow speed and reliability significantly. Tasks that used to take longer are now handled much more efficiently.", 
            name: "Bill", 
            role: "Government Sector (South Africa)", 
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
        },
        { 
            text: "The website gave our product a strong and professional presence. The structure and clarity made it much easier for users to understand what we offer.", 
            name: "Mohsin Bajja", 
            role: "Product Owner (Morocco)", 
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
        },
        { 
            text: "Musab built a system that allowed us to launch and operate smoothly from the start. It matched our business needs perfectly.", 
            name: "Aldo", 
            role: "Founder, TalentMesh (UK)", 
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" 
        },
        { 
            text: "Combining our application with a proper website improved how we present our business. It made a big difference in how clients and partners perceive us.", 
            name: "Martin", 
            role: "Founder, Shipday (Switzerland)", 
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
        },
        {
            text: "The UX redesign was a game-changer. Our user retention skyrocketed, and the new interface feels incredibly intuitive and modern.",
            name: "Sarah Chen",
            role: "CTO, Aura Health (USA)",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
        },
        {
            text: "We needed a fast, SEO-optimized platform to handle thousands of daily visitors. The custom Next.js build delivered exactly that without any hiccups.",
            name: "Lukas Müller",
            role: "Director, FinTech Flow (Germany)",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop"
        }
    ];

    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-transparent fill-violet-500" aria-hidden="true">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
    );

    const TestimonialCard = ({ testimonial }) => (
        <div className="bg-white/5 border border-white/10 hover:border-violet-500/50 rounded-2xl p-6 shrink-0 w-[350px] md:w-[400px] transition-colors duration-300 flex flex-col justify-between h-full">
            <div>
                <div className="flex mb-5 gap-1">
                    {Array(5).fill(0).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    "{testimonial.text}"
                </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white/20"/>
                <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-violet-400 text-xs mt-0.5">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );

    const MarqueeRow = ({ items, reverse }) => (
        <div className="relative flex overflow-hidden py-4">
            {/* Fade gradients for edges to blend into black background */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <motion.div
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex gap-6 w-max pl-6"
            >
                {/* Render the items twice to create an infinite loop effect */}
                {[...items, ...items].map((testimonial, i) => (
                    <TestimonialCard key={i} testimonial={testimonial} />
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="testimonials" className="py-24 bg-black w-full relative border-t border-white/10 font-sans overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6">
                        <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium uppercase tracking-widest">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                            </svg>
                            Loved by clients
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl max-w-3xl text-white leading-tight font-medium mb-6">
                        Trusted by <span className="text-violet-600">Founders Worldwide</span>
                    </h2>
                    
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                        We measure our success by the growth of our clients. Here is how we’ve helped businesses across 4 continents scale and optimize.
                    </p>
                </div>
            </div>

            {/* Scrolling Testimonial Rows */}
            <div className="flex flex-col gap-2 relative z-10 w-full">
                <MarqueeRow items={row1} reverse={false} />
                <MarqueeRow items={row2} reverse={true} />
            </div>
        </section>
    );
}