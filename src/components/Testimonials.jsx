import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "../content";
import { initials, pad } from "../lib/text";
import { ease } from "../lib/motion";
import { SectionHead } from "./ui";

const DURATION = 8000;

export default function Testimonials() {
  const items = testimonials.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const current = items[active];
  const autoplay = !paused && !reduce;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % items.length), DURATION);
    return () => clearTimeout(t);
  }, [active, autoplay, items.length]);

  return (
    <section id="testimonials" className="on-ink grain relative">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead
          index={6}
          label={testimonials.label}
          title={testimonials.title}
          tone="ink"
          intro={testimonials.intro}
        />

        <div
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-24 lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Quote */}
          <figure className="relative min-h-[340px] md:min-h-[380px] lg:order-2 lg:col-span-8 lg:col-start-5">
            <svg viewBox="0 0 40 32" className="h-8 w-10 text-pencil md:h-10 md:w-12" aria-hidden="true">
              <path
                d="M0 32V19.2C0 8.4 5.6 1.6 16.8 0l1.6 4C12.4 5.6 9.6 9.2 9.2 14.4H16V32H0Zm22 0V19.2C22 8.4 27.6 1.6 38.8 0l1.2 4c-6 1.6-8.8 5.2-9.2 10.4H38V32H22Z"
                fill="currentColor"
              />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease }}
              >
                <blockquote className="mt-8 font-serif text-[30px] leading-[1.18] tracking-[-0.01em] text-paper md:text-[42px] lg:text-[46px]">
                  {current.quote}
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-pencil text-[15px] font-medium tracking-tight text-paper">
                    {initials(current.name)}
                  </span>
                  <span>
                    <span className="block text-[16px] font-medium">{current.name}</span>
                    <span className="mt-0.5 block text-[14px] text-paper/55">
                      {current.role} · {current.place}
                    </span>
                  </span>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </figure>

          {/* Selector */}
          <div className="lg:order-1 lg:col-span-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="label text-paper/45">
                {pad(active + 1)} / {pad(items.length)}
              </span>
              <div className="flex gap-2">
                {[
                  { label: "Previous testimonial", dir: -1, d: "M10 3.5 5.5 8l4.5 4.5" },
                  { label: "Next testimonial", dir: 1, d: "M6 3.5 10.5 8 6 12.5" },
                ].map((b) => (
                  <button
                    key={b.label}
                    type="button"
                    aria-label={b.label}
                    onClick={() => setActive((a) => (a + b.dir + items.length) % items.length)}
                    className="grid size-10 cursor-pointer place-items-center rounded-full border border-(--rule) text-paper/80 transition-colors hover:border-paper hover:text-paper"
                  >
                    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                      <path d={b.d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <ul className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
              {items.map((t, i) => {
                const on = i === active;
                return (
                  <li key={t.name} className="snap-start lg:border-t lg:border-(--rule) lg:last:border-b">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={on}
                      className={`relative flex w-max cursor-pointer items-center gap-3 overflow-hidden rounded-full border px-4 py-2.5 text-left transition-colors duration-300 lg:w-full lg:rounded-none lg:border-0 lg:px-0 lg:py-4 ${
                        on ? "border-paper/40 text-paper" : "border-(--rule) text-paper/45 hover:text-paper/80"
                      }`}
                    >
                      <span className="text-[15px] font-medium">{t.name}</span>
                      <span className="hidden text-[13px] text-paper/40 lg:inline">{t.place}</span>

                      {/* Progress underline for the active item */}
                      {on && (
                        <span className="absolute inset-x-0 bottom-0 hidden h-px bg-paper/10 lg:block">
                          <motion.span
                            key={`${active}-${autoplay}`}
                            className="block h-full origin-left bg-pencil"
                            initial={{ scaleX: autoplay ? 0 : 1 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: autoplay ? DURATION / 1000 : 0, ease: "linear" }}
                          />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
