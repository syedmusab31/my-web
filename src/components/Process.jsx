import React from 'react';
import { Target, LayoutTemplate, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const processSteps = [
    {
      num: "01",
      title: "Strategy & Discovery",
      subtitle: "The Foundation",
      content: "We don't start with code; we start with your \"Why.\" We analyze your competitors, identify your target audience’s pain points, and define the single most important goal for your site.",
      icon: Target
    },
    {
      num: "02",
      title: "Architecture & UX",
      subtitle: "The Skeleton",
      content: "Before the \"pretty\" design, we build the \"functional\" design. We create wireframes that map out the user journey, ensuring there are zero friction points.",
      icon: LayoutTemplate
    },
    {
      num: "03",
      title: "High-Performance Build",
      subtitle: "The Engine",
      content: "This is where our technical expertise shines. Using a modern stack, we develop a custom, lightweight, and incredibly fast engine. No bulky templates.",
      icon: Code2
    },
    {
      num: "04",
      title: "Optimization & Launch",
      subtitle: "The Takeoff",
      content: "We run a 50-point checklist before going live. This includes SEO meta-tagging, speed stress tests, and lead-form integrations for your new digital asset.",
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-black w-full mx-auto relative border-t border-white/10 overflow-hidden font-sans lg:h-screen lg:min-h-[800px] flex flex-col justify-center">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm w-fit mb-6 mx-auto">
                <span className="flex items-center gap-2 text-violet-200 text-xs sm:text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE"/>
                    </svg>
                    The Growth Roadmap
                </span>
            </div>
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto text-white leading-tight font-medium">
              From Vision to <br className="hidden md:block"/><span className="text-violet-600">High-Performance Reality</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Our 4-step process is designed to eliminate guesswork and deliver a website that scales with your ambition.
            </p>
        </div>

        {/* Horizontal Steps Grid */}
        <ul className="relative mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 md:max-w-3xl md:grid-cols-2 lg:mt-20 lg:max-w-7xl lg:grid-cols-4 z-10">
            
            {/* Global LG Horizontal Line */}
            <div className="hidden lg:block absolute top-[24px] left-[24px] w-[calc(100%-48px)] h-px bg-white/10 z-[-1] overflow-hidden">
                <motion.div
                    animate={{ x: ["-10%", "400%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="h-full w-1/4 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
                />
            </div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              const isMobileLast = index === 3;
              const hasMdHorizontal = index === 0 || index === 2;

              return (
                <motion.li 
                    key={index} 
                    initial="initial"
                    whileHover="hover"
                    className="flex-start group relative flex md:flex-col"
                >
                    {/* Mobile Vertical Connection Line */}
                    {!isMobileLast && (
                      <span className="absolute left-[24px] top-[48px] h-[calc(100%-8px)] w-px bg-white/10 md:hidden z-[-1] overflow-hidden">
                         <motion.div
                            animate={{ y: ["-100%", "300%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-80"
                          />
                      </span>
                    )}

                    {/* MD Horizontal Connection Line (Spans 2 columns) */}
                    {hasMdHorizontal && (
                      <span className="hidden md:block lg:hidden absolute top-[24px] left-[24px] w-[calc(200%-8px)] h-px bg-white/10 z-[-1] overflow-hidden">
                         <motion.div
                            animate={{ x: ["-10%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
                          />
                      </span>
                    )}

                    {/* Number / Icon Box */}
                    <motion.div
                        variants={{
                            initial: { scale: 1, backgroundColor: "#000000", borderColor: "rgba(255,255,255,0.2)" },
                            hover: { scale: 1.15, backgroundColor: "#0f082e", borderColor: "rgba(139, 92, 246, 0.5)", boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.4)" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border z-10 relative"
                    >
                        <motion.div
                            variants={{
                                initial: { rotate: 0 },
                                hover: { rotate: [0, -20, 20, -20, 0], transition: { duration: 0.5, ease: "easeInOut" } }
                            }}
                        >
                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-violet-300 transition-colors" />
                        </motion.div>
                    </motion.div>

                    <div className="ml-6 md:ml-0 md:mt-8">
                        <span className="text-violet-500/50 font-serif text-4xl mb-2 block">{step.num}</span>
                        <h3 className="text-xl font-bold text-white leading-tight mb-2">
                            {step.title}
                        </h3>
                        <h4 className="text-xs text-violet-400 uppercase tracking-widest font-semibold">{step.subtitle}</h4>
                        <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">{step.content}</p>
                    </div>
                </motion.li>
              )
            })}
        </ul>

      </div>
    </section>
  );
}