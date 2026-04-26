import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 px-6 bg-black w-full mx-auto relative border-t border-white/10">
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

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Tall Card - Service 01 */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-md overflow-hidden flex flex-col group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
             {/* Image Top */}
             <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-zinc-900 border-b border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                  alt="High-conversion landing pages" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
                />
             </div>
             {/* Content Bottom */}
             <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                    <span className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      The "Sales Specialist"
                    </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">High-Conversion Landing Pages</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Stop burning your ad budget. We build single-page powerhouses designed with one goal in mind: Conversions. Whether you are launching a product, running Google Ads, or capturing leads, our landing pages are engineered to turn "clicks" into "customers."
                </p>
                <div className="mb-6">
                  <p className="text-white text-sm font-medium mb-3">Best For:</p>
                  <p className="text-xs text-violet-300">PPC Campaigns, Facebook/Instagram Ads, Lead Magnets, and Product Launches.</p>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-1 gap-3 mt-auto">
                    {[
                        "A/B Test Ready",
                        "Psychology-Driven UX",
                        "Ultra-Fast Loading",
                        "Compelling Copywriting"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-500" />
                            <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Right Column - Service 02 & 03 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
             
             {/* Top Card - Service 02 */}
             <div className="flex flex-col-reverse sm:flex-row bg-white/5 border border-white/10 rounded-md overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex-1">
                {/* Content Left */}
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-5">
                       <span className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                         The "Digital Headquarters"
                       </span>
                   </div>
                   <h3 className="text-2xl font-medium text-white mb-4">Strategic Business Websites</h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Your website is the face of your company. If it looks outdated, your business feels outdated. We build multi-page, professional websites that establish Authority and Trust. We move you away from "template-looking" sites and into a custom digital home.
                   </p>
                   
                   {/* Features */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                       {[
                           "Brand Storytelling",
                           "SEO-First Architecture",
                           "Full Responsiveness",
                           "Scalable Infrastructure"
                       ].map((feature, i) => (
                           <div key={i} className="flex items-center gap-2">
                               <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                               <span className="text-xs text-gray-300">{feature}</span>
                           </div>
                       ))}
                   </div>
                </div>
                {/* Image Right */}
                <div className="h-56 sm:h-auto sm:w-2/5 overflow-hidden relative bg-zinc-900 border-b sm:border-b-0 sm:border-l border-white/10">
                   <img 
                     src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                     alt="Strategic Business Websites" 
                     className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
                   />
                </div>
             </div>

             {/* Bottom Card - Service 03 */}
             <div className="flex flex-col-reverse sm:flex-row bg-white/5 border border-white/10 rounded-md overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex-1">
                {/* Content Left */}
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-5">
                       <span className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                         The "Maintenance & Optimization"
                       </span>
                   </div>
                   <h3 className="text-2xl font-medium text-white mb-4">The "Growth" Support <span className="text-xs text-violet-400 font-normal ml-2 tracking-wide">(Optional Add-on)</span></h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     A website is a living asset. We provide the technical muscle to keep it running at peak performance while you focus on your business.
                   </p>
                   
                   <div className="mt-auto bg-black/40 border border-white/5 p-4 rounded-md">
                       <p className="text-xs text-gray-300 leading-relaxed">
                          <strong className="text-white">Includes:</strong> Monthly Hosting & Security, Speed Optimization Audits, Lead Tracking Integration, and Routine Content Updates.
                       </p>
                   </div>
                </div>
                {/* Image Right */}
                <div className="h-56 sm:h-auto sm:w-2/5 overflow-hidden relative bg-zinc-900 border-b sm:border-b-0 sm:border-l border-white/10">
                   <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                     alt="Growth Support and Maintenance" 
                     className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
                   />
                </div>
             </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}