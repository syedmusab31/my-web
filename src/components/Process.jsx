import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { process } from "../content";
import { pad } from "../lib/text";
import { ease, inView } from "../lib/motion";
import { SectionHead } from "./ui";

export default function Process() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="process" className="relative bg-paper-2/60">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead index={5} label={process.label} title={process.title} intro={process.intro} />

        <ol ref={listRef} className="relative mt-16 md:mt-24 lg:ml-[calc((100%_-_2.5rem*11)/12*3_+_2.5rem*3)]">
          {/* Track + scroll-drawn line */}
          <span aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-px bg-(--rule)" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-pencil"
            style={{ scaleY: progress }}
          />

          {process.steps.map((step, i) => (
            <motion.li
              key={step.name}
              className="relative grid grid-cols-1 gap-x-10 gap-y-5 pb-16 pl-12 last:pb-0 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:pb-24 md:pl-16"
              initial="hidden"
              whileInView="show"
              viewport={inView}
            >
              {/* Node */}
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1.5 size-[15px] rounded-full border border-ink/25 bg-paper"
                variants={{
                  hidden: { scale: 0.6, backgroundColor: "#f3f0e8", borderColor: "rgba(21,20,18,0.25)" },
                  show: { scale: 1, backgroundColor: "#e0452b", borderColor: "#e0452b", transition: { duration: 0.5, delay: 0.25 } },
                }}
              />

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              >
                <span className="label text-muted">Step {pad(i + 1)}</span>
                <p className="serif-accent mt-3 text-[48px] leading-[0.9] md:text-[64px]">{step.name}</p>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.1 } } }}
              >
                <h3 className="text-[22px] leading-snug tracking-[-0.03em] md:text-[26px]">{step.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted md:text-[17px]">{step.body}</p>
                <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-(--rule) bg-paper px-4 py-2 text-[13.5px]">
                  <span className="label text-pencil">You get</span>
                  <span className="h-3 w-px bg-(--rule)" />
                  {step.output}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
