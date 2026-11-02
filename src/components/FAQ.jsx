import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq, site } from "../content";
import { pad } from "../lib/text";
import { ease } from "../lib/motion";
import { RevealHeading, Reveal, ArrowUpRight } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-paper-2/60">
      <div className="frame frame-ruled py-24 md:py-36">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-(--rule) pt-6 lg:grid-cols-12">
          {/* Sticky intro in the left margin */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="label text-pencil">(08)</span>
                <span className="label text-muted">{faq.label}</span>
              </div>
              <RevealHeading text={faq.title} className="mt-8 text-[44px] leading-none md:text-[64px]" />
              <Reveal as="p" delay={0.15} className="mt-6 max-w-sm text-[17px] leading-relaxed text-muted">
                {faq.intro}
              </Reveal>
              <Reveal delay={0.25}>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[15px] font-medium"
                >
                  Ask on a call
                  <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>
          </div>

          <ul className="border-b border-(--rule) lg:col-span-8">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-t border-(--rule) first:border-t-0 lg:first:border-t">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full cursor-pointer items-start gap-5 py-6 text-left md:gap-8 md:py-7"
                    >
                      <span className="label w-6 shrink-0 pt-2 text-faint">{pad(i + 1)}</span>
                      <span
                        className={`flex-1 text-[19px] leading-snug tracking-[-0.025em] transition-colors duration-300 md:text-[23px] ${
                          isOpen ? "text-ink" : "text-ink/70 group-hover:text-ink"
                        }`}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-(--rule) text-ink transition-colors group-hover:border-ink"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.55, ease }, opacity: { duration: 0.3 } }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pl-11 pr-10 text-[16px] leading-relaxed text-muted md:pl-14 md:text-[17px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
