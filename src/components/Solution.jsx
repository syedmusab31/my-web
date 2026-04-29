import React from 'react';
import { CheckCircle2, ShieldCheck, Gauge, Smartphone } from 'lucide-react';

const Solution = () => {
    const solutions = [
        {
            title: "Performance First",
            description: "We build with a 'Speed-First' mentality. No bloated plugins or heavy templates—just clean, optimized code that scores 95+ on Google PageSpeed.",
            icon: <Gauge className="w-6 h-6 text-violet-400" />,
            tag: "Speed",
            className: "md:col-span-2 row-span-1"
        },
        {
            title: "Mobile-First UX",
            description: "Your site will look and feel like a native app on every device. No 'pinch and zoom' required.",
            icon: <Smartphone className="w-6 h-6 text-violet-400" />,
            tag: "Responsive",
            className: "md:col-span-1 row-span-1"
        },
        {
            title: "Built for Trust",
            description: "Modern, high-end aesthetics that instantly tell your clients you are a leader in your field.",
            icon: <ShieldCheck className="w-6 h-6 text-violet-400" />,
            tag: "Authority",
            className: "md:col-span-1 row-span-1"
        },
        {
            title: "Lead Generation Engines",
            description: "Every pixel is placed with a purpose: to guide your visitor toward the 'Contact' or 'Buy' button without friction.",
            icon: <CheckCircle2 className="w-6 h-6 text-violet-400" />,
            tag: "Conversion",
            className: "md:col-span-2 row-span-1"
        }
    ];

    return (
        <section id="solution" className="py-24 lg:py-0 px-6 bg-black w-full mx-auto relative overflow-hidden font-sans border-t border-white/10 lg:h-screen lg:min-h-[800px] flex flex-col justify-center">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6 mx-auto">
                        <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium uppercase tracking-widest">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE" />
                            </svg>
                            The Solution
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-center max-w-3xl mx-auto text-white leading-tight font-medium mb-6">
                        We build digital assets that <br className="hidden md:block"/> <span className="text-violet-600">work as hard as you do.</span>
                    </h2>
                    <div className="inline-block relative">
                        {/* Quote Box styling to look high-end */}
                        <div className="absolute inset-0 bg-violet-500/10 blur-xl pointer-events-none rounded-full" />
                        <p className="text-gray-300 max-w-lg mx-auto text-sm md:text-base italic px-5 py-2 border border-white/10 bg-white/5 rounded-full relative z-10 shadow-xl backdrop-blur-md">
                            "Good design is invisible. Great design is a competitive advantage."
                        </p>
                    </div>
                </div>

                {/* Bento-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {solutions.map((item, index) => (
                        <div 
                            key={index} 
                            className={`p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative ${item.className || ""}`}
                        >
                            {/* Subtle Background Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-black/40 border border-white/10 rounded-xl group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-violet-300 font-semibold bg-violet-900/30 border border-violet-500/20 px-3 py-1.5 rounded-full">
                                        {item.tag}
                                    </span>
                                </div>
                                
                                <div className="mt-auto">
                                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;