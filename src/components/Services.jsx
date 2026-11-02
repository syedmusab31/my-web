import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, site } from "../content";
import { pad } from "../lib/text";
import { ease } from "../lib/motion";
import { SectionHead, ArrowUpRight } from "./ui";

function PlusMinus({ open }) {
  return (
    <span
      className={`relative grid size-11 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
        open ? "border-ink bg-ink text-paper" : "border-(--rule) text-ink group-hover:border-ink"
      }`}
    >
      <span className="absolute h-[1.5px] w-3.5 bg-current" />
      <motion.span
        className="absolute h-3.5 w-[1.5px] bg-current"
        animate={{ scaleY: open ? 0 : 1 }}
        transition={{ duration: 0.4, ease }}
      />
    </span>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative">
      <div className="frame frame-ruled pb-24 pt-4 md:pb-36 md:pt-8">
        <SectionHead index={4} label={services.label} title={services.title} intro={services.intro} />

        <ul className="mt-16 border-b border-(--rule) md:mt-24">
          {services.items.map((s, i) => {
            const open = active === i;
            const panelId = `service-panel-${i}`;
            return (
              <li key={s.name} className="border-t border-(--rule)">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setActive(open ? -1 : i)}
                    className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-5 py-7 text-left md:gap-x-10 md:py-9 lg:grid-cols-12"
                  >
                    <span className="label self-start pt-3 text-pencil lg:col-span-1 lg:pt-4">({pad(i + 1)})</span>
                    <span className="lg:col-span-6">
                      <span
                        className={`block text-[32px] leading-none tracking-[-0.045em] transition-colors duration-500 md:text-[52px] ${
                          open ? "text-ink" : "text-ink/45 group-hover:text-ink"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span className="mt-3 block text-[14px] text-muted md:text-[15px]">{s.for}</span>
                    </span>
                    <span className="hidden items-center gap-10 lg:col-span-4 lg:flex lg:justify-end">
                      <span className="text-right">
                        <span className="label block text-faint">Timeline</span>
                        <span className="mt-2 block text-[15px] font-medium">{s.timeline}</span>
                      </span>
                      <span className="text-right">
                        <span className="label block text-faint">Investment</span>
                        <span className="mt-2 block text-[15px] font-medium">{s.price}</span>
                      </span>
                    </span>
                    <span className="flex justify-end lg:col-span-1">
                      <PlusMinus open={open} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ height: { duration: 0.7, ease }, opacity: { duration: 0.4 } }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-10 pb-12 lg:grid-cols-12 lg:pb-16">
                        <div className="flex flex-col lg:col-span-5 lg:col-start-2">
                          <p className="text-[17px] leading-relaxed text-ink/75 md:text-[18px]">{s.body}</p>

                          <ul className="mt-8 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-3 text-[15px] leading-snug">
                                <svg viewBox="0 0 16 16" className="mt-[3px] size-3.5 shrink-0 text-pencil" aria-hidden="true">
                                  <path d="M2.5 8.5 6 12l7.5-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {d}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex gap-10 border-t border-(--rule) pt-6 lg:hidden">
                            <span>
                              <span className="label block text-faint">Timeline</span>
                              <span className="mt-2 block text-[15px] font-medium">{s.timeline}</span>
                            </span>
                            <span>
                              <span className="label block text-faint">Investment</span>
                              <span className="mt-2 block text-[15px] font-medium">{s.price}</span>
                            </span>
                          </div>

                          <a
                            href={site.bookingUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link mt-10 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-[15px] font-medium"
                          >
                            Talk about your {s.name.toLowerCase().replace(/s$/, "")}
                            <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </a>
                        </div>

                        <motion.div
                          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-2 lg:col-span-5 lg:col-start-8"
                          initial={{ clipPath: "inset(12% 12% 12% 12% round 16px)" }}
                          animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
                          transition={{ duration: 1, ease, delay: 0.1 }}
                        >
                          <motion.img
                            src={s.image}
                            alt=""
                            loading="lazy"
                            className="size-full object-cover grayscale-[35%] contrast-[1.05]"
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.4, ease }}
                          />
                          <span className="label absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-2 text-ink backdrop-blur">
                            {s.timeline} · {s.price}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
