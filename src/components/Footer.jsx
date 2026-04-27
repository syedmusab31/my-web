import React from 'react';

export default function Footer() {
    return (
        <footer id="footer" className="px-6 py-12 md:py-16 w-full text-gray-400 bg-black border-t border-white/10 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between w-full gap-12 lg:gap-20 border-b border-white/10 pb-12 relative z-10">
                {/* Column 01: Brand & Socials */}
                <div className="md:max-w-xs flex flex-col">
                    <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">Syed Musab</h2>
                    <p className="text-sm leading-relaxed text-gray-400 mb-6">
                        Building high-performance digital engines that turn traffic into revenue for global businesses.
                    </p>
                    <div className="flex items-center gap-4">
                        {/* Twitter / X */}
                        <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-violet-600 hover:border-violet-500 transition-colors group">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-violet-600 hover:border-violet-500 transition-colors group">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        {/* GitHub */}
                        <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-violet-600 hover:border-violet-500 transition-colors group">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Columns Container */}
                <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-12 lg:gap-32">
                    {/* Column 02: Navigations */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg tracking-wide">Navigations</h3>
                        <ul className="text-sm space-y-4 text-gray-400">
                            <li><a href="#services" className="hover:text-violet-400 transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-violet-400 transition-colors">Process</a></li>
                            <li><a href="#portfolio" className="hover:text-violet-400 transition-colors">Portfolio</a></li>
                            <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Column 03: CTA */}
                    <div className="max-w-[280px]">
                        <h3 className="font-semibold text-white mb-4 text-lg tracking-wide">Book a Strategy Call</h3>
                        <div className="text-sm space-y-6 text-gray-400">
                            <p className="leading-relaxed">Skip the back-and-forth. Pick a time that works for you to discuss your project.</p>
                            <a 
                                href="https://calendly.com/syedmusab585/30min" 
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                            >
                                Book on Calendly
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="pt-8 text-center text-xs md:text-sm text-gray-500 relative z-10">
                Copyright {new Date().getFullYear()} © <span className="text-white font-medium">Syed Musab</span>. All Rights Reserved.
            </p>
        </footer>
    );
}