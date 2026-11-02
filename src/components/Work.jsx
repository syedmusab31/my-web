import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { work } from "../content";
import { pad } from "../lib/text";
import { ease } from "../lib/motion";
import { SectionHead } from "./ui";

const INITIAL = 4;
// Editorial rhythm: wide / narrow, narrow / wide, then even pairs.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

function Project({ project, index }) {
  const lead = index < INITIAL;
  return (
    <motion.article
      layout="position"
      className={`group flex flex-col ${spans[index] ?? "lg:col-span-6"}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease, delay: lead ? (index % 2) * 0.1 : ((index - INITIAL) % 2) * 0.1 }}
    >
      <div className={`relative overflow-hidden rounded-[18px] bg-paper-2 ${lead ? "aspect-[4/3] lg:aspect-auto lg:h-[500px]" : "aspect-[4/3] lg:aspect-auto lg:h-[400px]"}`}>
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-[transform,filter] duration-[1.4s] ease-out-soft grayscale-[25%] group-hover:scale-[1.04] group-hover:grayscale-0"
        />
        <span className="label absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-2 text-ink backdrop-blur">
          {project.type}
        </span>

        {/* Outcome slides up on hover, like a margin note pinned to the image */}
        <div className="absolute inset-x-3 bottom-3 translate-y-[calc(100%+12px)] rounded-[12px] bg-ink/90 p-4 text-paper backdrop-blur transition-transform duration-700 ease-out-soft group-hover:translate-y-0 max-md:hidden">
          <span className="label text-pencil">Outcome</span>
          <p className="mt-2 text-[15px] leading-snug">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-[24px] leading-tight tracking-[-0.035em] md:text-[28px]">{project.name}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{project.summary}</p>
          <p className="mt-3 flex items-start gap-2 text-[14.5px] leading-snug md:hidden">
            <span className="text-pencil">→</span>
            {project.outcome}
          </p>
        </div>
        <div className="shrink-0 pt-1.5 text-right">
          <span className="label block text-pencil">{pad(index + 1)}</span>
          <span className="label mt-2 block text-faint">{project.place}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? work.projects : work.projects.slice(0, INITIAL);

  return (
    <section id="work" className="relative">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead
          index={3}
          label={work.label}
          title={work.title}
          intro={work.intro}
          aside={<span className="label text-muted">{work.projects.length} projects · 9 countries</span>}
        />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
          <AnimatePresence initial={false}>
            {list.map((p, i) => (
              <Project key={p.name} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center gap-6 md:mt-20">
          <span className="h-px flex-1 bg-(--rule)" />
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="group inline-flex h-12 cursor-pointer items-center gap-3 rounded-full border border-ink px-6 text-[15px] font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {showAll ? "Show fewer projects" : `See all ${work.projects.length} projects`}
            <svg viewBox="0 0 16 16" className={`size-4 transition-transform duration-500 ease-out-soft ${showAll ? "rotate-180" : ""}`} aria-hidden="true">
              <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="h-px flex-1 bg-(--rule)" />
        </div>
      </div>
    </section>
  );
}
