import React, { useState } from 'react';
import business1 from '../assets/business1.png';
import business2 from '../assets/business2.png';
import business3 from '../assets/business3.png';
import business4 from '../assets/business4.png';
export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBooking, setIsBooking] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) };

    const handleBookCall = () => {
        setIsBooking(true);
        setTimeout(() => setIsBooking(false), 1000);
    };

    return (
        <>
            <style>
                {`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                *{
                    font-family: "Poppins", sans-serif;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}
            </style>
            <section className='bg-black bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-net-image.png")] bg-no-repeat bg-bottom bg-size-[100%_auto] px-4 pt-5 md:pb-32 relative overflow-hidden'>
                <div className="fixed top-4 left-0 right-0 px-4 w-full z-50">
                    <nav className="flex items-center justify-between px-2.5 md:pl-6 py-2 rounded-full max-w-6xl mx-auto w-full border border-white/20 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/50">
                        <h3 className='text-xl text-white tracking-tighter' >Syed Musab</h3>


                        <div id="menu" className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-screen ${isMenuOpen ? 'max-md:w-full bg-black/95 backdrop-blur-2xl z-50' : 'max-md:w-0'} transition-[width] flex-col md:flex-row flex gap-8 text-white text-sm font-normal`}>
                            <a className="hover:text-violet-400 transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                            <a className="hover:text-violet-400 transition-colors" href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
                            <a className="hover:text-violet-400 transition-colors" href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                            <a className="hover:text-violet-400 transition-colors" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                            <a className="md:hidden flex bg-violet-600 text-slate-100 pr-8 pl-2 py-2 rounded-full text-base font-medium hover:bg-violet-700 transition items-center overflow-hidden" href="#footer" onClick={(e) => { setIsMenuOpen(false); handleBookCall(); }}>
                                <div className={`size-9 rounded-full text-violet-600 bg-white mr-4 flex items-center justify-center transition-transform duration-500 ease-in-out ${isBooking ? 'translate-x-[92px]' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                </div>
                                <span className={`transition-opacity duration-500 ${isBooking ? 'opacity-0' : 'opacity-100'}`}>Book a call</span>
                            </a>
                            <button id="closeMenu" onClick={toggleMenu} className="md:hidden text-gray-600 bg-white/10 p-1.5 rounded-md">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <a className="hidden md:flex bg-violet-600 text-slate-100 pr-8 pl-2 py-2 rounded-full text-base font-medium hover:bg-violet-700 transition items-center overflow-hidden" href="#footer" onClick={handleBookCall}>
                                <div className={`size-9 rounded-full text-violet-600 bg-white mr-4 flex items-center justify-center transition-transform duration-500 ease-in-out ${isBooking ? 'translate-x-[92px]' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                </div>
                                <span className={`transition-opacity duration-500 ${isBooking ? 'opacity-0' : 'opacity-100'}`}>Book a call</span>
                            </a>

                            <button id="openMenu" onClick={toggleMenu} className="md:hidden text-gray-600 bg-white/10 p-1.5 rounded-md">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>

                <div className="relative">
                    {/* Decorative background glow behind the top section of hero */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] h-32 md:max-w-2xl md:h-64 bg-violet-600/30 blur-[100px] pointer-events-none" />

                    <div className="flex items-center gap-2 border border-white/15 rounded-full pl-2 pr-3 py-1 text-sm w-fit mt-32 mx-auto relative z-10 bg-black/20 backdrop-blur-sm">
                        <span className="flex items-center gap-1 text-violet-200 text-xs sm:text-sm">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11" fill="#7F22FE" />
                            </svg>
                            Freelance Web Designer | Frontend Developer
                        </span>
                    </div>
                </div>

                <h1 className='text-4xl md:text-[58px]/19 text-center max-w-5xl mx-auto mt-4 text-white bg-clip-text leading-tight font-medium'>We design modern <span className='text-violet-600'>&</span> responsive websites that help your business grow online.</h1>
                <p className="text-base mx-auto text-gray-400 text-center mt-4">
                    For startups, small businesses, and personal brands
                </p>

                <div className='flex gap-3 mt-5 justify-center relative z-10'>
                    <a href="#footer" className="bg-violet-600 hover:bg-violet-700 text-slate-100 text-xs md:text-sm px-6 py-3 rounded-md transition cursor-pointer inline-flex items-center justify-center">
                        Get Your Website
                    </a>
                    <a href="#portfolio" className="bg-white/10 hover:bg-white/20 border border-violet-900 text-gray-50 text-xs md:text-sm px-5 py-3 rounded-md transition cursor-pointer inline-flex items-center justify-center">
                        Explore Portfolio
                    </a>
                </div>

                {/* Avatars + Stars */}
                <div className="flex items-center mt-10 justify-center">
                    <div className="flex -space-x-3 pr-3">
                        <img src={business1} alt="B2B Tech Startup Founder Client Profile" loading="lazy" decoding="async" className="size-9.5 object-cover rounded-full border-2 border-violet-600 hover:-translate-y-0.5 transition z-[1]" />
                        <img src={business2} alt="Healthcare Clinic Director Client Profile" loading="lazy" decoding="async" className="size-9.5 object-cover rounded-full border-2 border-violet-600 hover:-translate-y-0.5 transition z-[2]" />
                        <img src={business3} alt="Local Real Estate Agency Owner Client Profile" loading="lazy" decoding="async" className="size-9.5 object-cover rounded-full border-2 border-violet-600 hover:-translate-y-0.5 transition z-[3]" />
                        <img src={business4} alt="E-commerce Retail Brand CEO Client Profile" loading="lazy" decoding="async" className="size-9.5 object-cover rounded-full border-2 border-violet-600 hover:-translate-y-0.5 transition z-[4]" />
                    </div>

                    <div>
                        <div className="flex ">
                            {Array(5).fill(0).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#615FFF]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            ))}
                        </div>
                        <p className="text-xs text-white/60">Trusted By 100+ Businesses</p>
                    </div>
                </div>
            </section>
        </>
    )
}