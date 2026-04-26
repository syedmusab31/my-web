import { CircleArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-bg text-gray-800 pb-20 pt-10 text-sm font-inter min-h-[70vh] justify-center">
      <h1 className="text-4xl md:text-7xl text-center font-bold max-w-4xl mt-8 text-black leading-tight px-4">
High-performance web design that turns visitors into revenue.
      </h1>
      
      <p className="text-slate-600 md:text-lg max-md:px-6 text-center max-w-2xl mt-5 font-body">
We build conversion-focused landing pages and professional business websites designed to scale your brand and capture more leads.
      </p>

      <button className="group flex items-center gap-2 bg-primary hover:bg-primary/20 rounded-md text-black px-10 py-4 mt-10 transition shadow-lg font-bold text-base">
        <span>Let's Discuss</span>
        <CircleArrowRight 
          size={24} 
          className="transition-all duration-300 group-hover:fill-black group-hover:text-white" 
        />
      </button>
    </section>
  );
}