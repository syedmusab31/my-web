import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
    const pricingData = [
        { 
            name: 'High-Conversion Landing Page', 
            price: '$800', 
            description: 'Immediate ROI & Lead Gen',
            mostPopular: false,
            action: 'Start My Campaign',
            features: [
                { label: 'Best For', value: 'Google/FB Ads, Product Launches' },
                { label: 'Strategy', value: '1 Focused Page for 1 Goal' },
                { label: 'Speed', value: '95+ Mobile PageSpeed Score' },
                { label: 'Timeline', value: '5 – 7 Days' }
            ]
        },
        {
            name: 'Professional Business Website',
            price: '$2000',
            description: 'Authority & Long-term Growth',
            mostPopular: true,
            badge: 'Most Popular for Growth',
            action: 'Build My Authority',
            features: [
                { label: 'Best For', value: 'B2B Firms, Clinics, Agencies' },
                { label: 'Strategy', value: '5-7 Pages (Home, About, Services, etc.)' },
                { label: 'Speed', value: 'Fully Optimized for Google Search' },
                { label: 'Timeline', value: '3 – 4 Weeks' }
            ]
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-black w-full relative border-t border-white/10 font-sans overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6">
                        <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium uppercase tracking-widest">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                            </svg>
                            Investment Packages
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 leading-tight">
                        Choose Your <span className="text-violet-600">Growth Path</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                        Strategic digital assets designed to scale. Final pricing is tailored to your specific project requirements and technical goals.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                    {pricingData.map((item, index) => (
                        <div key={index} className={`relative border rounded-[30px] p-8 flex flex-col items-start transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-violet-600/5 border-violet-500/30' : 'bg-white/5 border-white/10'}`}>
                            {item.mostPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] whitespace-nowrap">
                                    {item.badge}
                                </div>
                            )}
                            
                            <h3 className="font-medium text-2xl md:text-3xl text-white mt-2 leading-tight pr-4">{item.name}</h3>
                            <p className="text-sm text-violet-400 mt-2 font-medium tracking-wide uppercase">{item.description}</p>
                            
                            <div className="mt-8 mb-2">
                                <span className="text-sm text-gray-500 mr-2">Starting at</span>
                                <h1 className="font-semibold text-5xl text-white inline-block">{item.price}</h1>
                            </div>
                            
                            <p className="text-xs text-gray-400 mt-1 mb-8 italic">
                                Includes: Professional Strategy, Mobile-Responsive Design, and 30 Days of Support.
                            </p>
                            
                            <a href="https://calendly.com/syedmusab585/30min" target="_blank" rel="noreferrer" className={`block text-center w-full px-6 py-4 rounded-full cursor-pointer font-medium text-sm transition-all duration-300 ${item.mostPopular ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]' : 'bg-white/10 hover:bg-white/20 border border-white/10 text-white'}`}>
                                {item.action}
                            </a>
                            
                            <div className="w-full mt-10 space-y-5">
                                {item.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3 text-sm">
                                        <span className="size-5 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="size-2 rounded-full bg-violet-500" />
                                        </span>
                                        <div>
                                            <span className="text-white font-medium block">{feature.label}</span>
                                            <span className="text-gray-400 block mt-0.5">{feature.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-16 max-w-3xl text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h4 className="text-white font-medium text-lg mb-3">Customized to Your Vision</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The prices above are baseline starting points. Because every business has unique operational needs, the final investment is determined after our Discovery Call. We’ll discuss your specific features, integrations, and goals to provide a quote that matches your project’s complexity.
                    </p>
                </div>

                {/* Follow-up CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400">
                        Not sure which one you need? <a href="https://calendly.com/syedmusab585/30min" target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300 font-medium underline underline-offset-4 decoration-violet-400/50 hover:decoration-violet-300 transition-colors">Let’s talk.</a>
                    </p>
                </div>

            </div>
        </section>
    );
}
