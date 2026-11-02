import { motion } from "framer-motion";
import { work } from "../content";
import { pad } from "../lib/text";
import { ease } from "../lib/motion";
import { SectionHead } from "./ui";
import ProjectCover from "./ProjectCover";

// Editorial rhythm: wide / narrow, narrow / wide, then an even pair.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];

function Project({ project, index }) {
  return (
    <motion.article
      className={`group flex flex-col ${spans[index] ?? "lg:col-span-6"}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay: (index % 2) * 0.1 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] lg:aspect-auto lg:h-[460px]">
        <ProjectCover project={project} />
        <span className="label absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-2 text-ink backdrop-blur">
          {project.type}
        </span>

        {/* Outcome slides up on hover, like a note pinned to the proof */}
        <div className="absolute inset-x-3 bottom-3 translate-y-[calc(100%+12px)] rounded-[12px] bg-ink/92 p-4 text-paper backdrop-blur transition-transform duration-700 ease-out-soft group-hover:translate-y-0 max-md:hidden">
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
  return (
    <section id="work" className="relative">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead
          index={3}
          label={work.label}
          title={work.title}
          intro={work.intro}
          aside={<span className="label text-muted">{work.projects.length} projects · {new Set(work.projects.map((p) => p.place)).size} countries</span>}
        />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
          {work.projects.map((p, i) => (
            <Project key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
