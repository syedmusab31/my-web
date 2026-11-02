import { motion } from "framer-motion";
import { principles } from "../content";
import { pad } from "../lib/text";
import { ease, inView } from "../lib/motion";
import { SectionHead } from "./ui";

export default function Principles() {
  return (
    <section id="approach" className="on-ink grain relative">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead index={2} label={principles.label} title={principles.title} intro={principles.intro} tone="ink" />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-(--rule) bg-(--rule) md:mt-24 md:grid-cols-2">
          {principles.items.map((item, i) => (
            <motion.article
              key={item.title}
              className="group relative flex min-h-[300px] flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 md:min-h-[360px] md:p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={inView}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between">
                <span className="label text-paper/45">Rule {pad(i + 1)}</span>
                <span className="serif-accent text-[72px] leading-[0.8] text-paper/90 transition-colors duration-500 group-hover:text-pencil md:text-[96px]">
                  {item.figure}
                </span>
              </div>
              <div className="mt-auto pt-12">
                <h3 className="text-[28px] leading-tight tracking-[-0.035em] md:text-[34px]">{item.title}</h3>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-paper/60">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
