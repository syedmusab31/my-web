import React, { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do I know if I need a Landing Page or a full Website?",
            answer: "If you are running active ads (Google/FB) and need to convert traffic into leads immediately, a Landing Page is your best bet. If you need to establish long-term trust, explain multiple services, and show up in Google search results, a Business Website is the right choice.",
        },
        {
            question: "How long does the average project take?",
            answer: "We value speed. High-conversion Landing Pages typically ship within 5–7 days. A full Business Website with custom strategy and multiple pages usually takes 3–4 weeks depending on the complexity.",
        },
        {
            question: "Why should I choose custom code over Wix or WordPress?",
            answer: "DIY builders are often slow, bloated with plugins, and bad for SEO. We build using a modern tech stack (MERN/Next.js). This means your site will be lightning-fast, highly secure, and 100% custom-tailored to your business needs—not a generic template.",
        },
        {
            question: "Will my website work on mobile devices?",
            answer: "Absolutely. We follow a \"Mobile-First\" design philosophy. Over 70% of your users are likely on their phones, so we ensure your site looks and functions perfectly on every screen size.",
        },
        {
            question: "What happens after the website is launched?",
            answer: "We don't just \"build and bolt.\" We offer \"Growth Support\" packages that include high-speed hosting, security monitoring, and routine updates so your digital asset never goes out of date.",
        },
        {
            question: "Do I own the website and the code?",
            answer: "Yes. Once the final payment is made, you have 100% ownership of the code, design, and assets. We believe in building long-term partnerships, not holding your digital property hostage.",
        }
    ];

    return (
        <section id="faq" className="py-24 px-6 bg-black w-full relative border-t border-white/10 font-sans overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />
            
            <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6 mx-auto">
                    <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium uppercase tracking-widest">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                        </svg>
                        FAQ
                    </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-4">
                    Everything You <span className="text-violet-600">Need to Know</span>
                </h2>
                <p className="text-base md:text-lg text-gray-400 mt-2 pb-12 text-center max-w-2xl">
                    Transparent answers to common questions about our process, pricing, and performance.
                </p>
                
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border-b border-white/10 py-5 cursor-pointer w-full group" 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className={`text-lg font-medium transition-colors duration-300 pr-4 ${openIndex === index ? 'text-violet-400' : 'text-white group-hover:text-violet-200'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-violet-600/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-transform duration-500 ease-in-out`}>
                                        <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke={openIndex === index ? "#a78bfa" : "currentColor"} className={openIndex === index ? "" : "text-gray-400"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-base text-gray-400 pt-4 leading-relaxed pr-12">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400">
                        Still have questions? <a href="https://calendly.com/syedmusab585/30min" target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300 font-medium underline underline-offset-4 decoration-violet-400/50 hover:decoration-violet-300 transition-colors">Let's talk</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
