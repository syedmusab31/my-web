import { motion } from "framer-motion";
import { leaks } from "../content";
import { pad } from "../lib/text";
import { ease, inView } from "../lib/motion";
import { SectionHead } from "./ui";

export default function Leaks() {
  return (
    <section id="problem" className="relative">
      <div className="frame frame-ruled pb-24 pt-24 md:pb-36 md:pt-32">
        <SectionHead
          index={1}
          label={leaks.label}
          title={leaks.title}
          intro={leaks.intro}
          aside={
            <span className="label inline-flex items-center gap-2 text-pencil">
              <span className="size-1.5 rounded-full bg-pencil" /> {leaks.items.length} leaks found
            </span>
          }
        />

        <ol className="mt-16 border-b border-(--rule) md:mt-24">
          {leaks.items.map((item, i) => (
            <motion.li
              key={item.title}
              className="group grid grid-cols-1 gap-x-10 gap-y-4 border-t border-(--rule) py-8 md:py-10 lg:grid-cols-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
            >
              <div className="flex items-center justify-between lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-5">
                <span className="label text-muted">Leak {pad(i + 1)}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-pencil/30 bg-pencil-soft/50 px-3 py-1.5 text-[12px] font-medium text-pencil">
                  <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                    <path d="M6 1.5v7M2.75 5.75 6 9l3.25-3.25" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item.cost}
                </span>
              </div>

              <h3 className="text-[26px] leading-[1.12] tracking-[-0.035em] md:text-[32px] lg:col-span-5">
                {/* The edit: a pencil strike runs through every line on hover */}
                <span className="bg-no-repeat [background-image:linear-gradient(var(--color-pencil),var(--color-pencil))] [background-position:0_58%] [background-size:0%_2px] [box-decoration-break:clone] transition-[background-size] duration-700 ease-out-soft group-hover:[background-size:100%_2px]">
                  {item.title}
                </span>
              </h3>

              <p className="text-[16px] leading-relaxed text-muted md:text-[17px] lg:col-span-4">{item.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
