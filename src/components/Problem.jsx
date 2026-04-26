import React from 'react';
import { MessageSquare, Zap, BarChart3, Users } from 'lucide-react';

const Problem = () => {
    const features = [
        {
            title: "Your ads are working, but your page isn't.",
            description: "You’re paying for traffic that never converts. Every second your landing page takes to load, and every confusing button you have, is a direct hit to your bank account.",
            icon: <Users className="w-6 h-6 text-violet-400" />,
        },
        {
            title: "An outdated site is a 'No Entry' sign.",
            description: "In a digital-first world, your website is your storefront. If it looks like it belongs in 2015, high-value clients will assume your services are outdated, too.",
            icon: <Zap className="w-6 h-6 text-violet-400" />,
        },
        {
            title: "You're losing 70% of your leads.",
            description: "Most of your customers find you on their phones. If they have to 'pinch and zoom' to find your phone number, they’ve already clicked on your competitor’s site.",
            icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
        },
        {
            title: "Can't scale what you can't measure.",
            description: "If your website doesn't automatically capture, sort, and track your leads, you aren't running a business—you're running a manual chore.",
            icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
        },
    ];

    return (
        <section className="py-24 px-6 bg-black w-full mx-auto relative border-t border-white/10">
            {/* Decorative background glow similar to hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6 mx-auto">
                        <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE" />
                            </svg>
                            Key Problems
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-center max-w-3xl mx-auto text-white leading-tight font-medium">
                        Most of the Businesses Fails <br className="hidden md:block" /> Just because of these <span className="text-violet-600">04</span> Mistakes!
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden p-8 md:p-10 bg-white/5 border border-white/10 rounded-md flex flex-col items-start transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group"
                        >
                            {/* Oversized Background Number */}
                            <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 text-[120px] md:text-[160px] font-serif font-bold text-white opacity-10 select-none z-0 group-hover:opacity-[0.15] group-hover:scale-105 transition-all duration-500 leading-none">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10 pt-12 md:pt-16">
                                <h3 className="text-xl font-medium text-white mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;