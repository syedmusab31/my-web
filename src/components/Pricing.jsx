import { motion } from "framer-motion";
import { pricing, site } from "../content";
import { ease, inView } from "../lib/motion";
import { SectionHead, CtaButton, ArrowUpRight } from "./ui";

function Row({ label, value, tone }) {
  return (
    <div className={`flex items-baseline justify-between gap-6 border-t py-3.5 text-[15px] ${tone === "ink" ? "border-paper/12" : "border-(--rule)"}`}>
      <dt className={`shrink-0 whitespace-nowrap ${tone === "ink" ? "text-paper/55" : "text-muted"}`}>{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="frame frame-ruled py-24 md:py-36">
        <SectionHead index={7} label={pricing.label} title={pricing.title} intro={pricing.intro} />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-6 md:mt-24 lg:grid-cols-12">
          {/* What every project includes */}
          <motion.aside
            className="order-last lg:order-first lg:col-span-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={inView}
            transition={{ duration: 0.8 }}
          >
            <p className="label text-muted">Every project includes</p>
            <ul className="mt-5 space-y-3">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-snug">
                  <svg viewBox="0 0 16 16" className="mt-[3px] size-3.5 shrink-0 text-pencil" aria-hidden="true">
                    <path d="M2.5 8.5 6 12l7.5-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-(--rule) pt-6 text-[14px] leading-relaxed text-muted">{pricing.note}</p>
          </motion.aside>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-9">
            {pricing.plans.map((plan, i) => {
              const tone = plan.featured ? "ink" : "paper";
              return (
                <motion.article
                  key={plan.name}
                  className={`relative flex flex-col rounded-[22px] p-7 md:p-9 ${
                    plan.featured ? "on-ink grain shadow-[0_40px_80px_-40px_rgba(21,20,18,0.5)]" : "border border-(--rule) bg-paper"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inView}
                  transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] tracking-[-0.03em]">{plan.name}</h3>
                    {plan.badge && (
                      <span className="label rounded-full bg-pencil px-3 py-2 text-paper">{plan.badge}</span>
                    )}
                  </div>

                  <p className="mt-10 flex items-end gap-3">
                    <span className={`pb-3 text-[14px] ${plan.featured ? "text-paper/55" : "text-muted"}`}>From</span>
                    <span className="text-[64px] font-medium leading-[0.9] tracking-[-0.055em] md:text-[76px]">{plan.price}</span>
                  </p>
                  <p className={`mt-5 max-w-xs text-[16px] leading-relaxed ${plan.featured ? "text-paper/70" : "text-ink/70"}`}>
                    {plan.pitch}
                  </p>

                  <dl className="mt-8 mb-10">
                    <Row label="Best for" value={plan.bestFor} tone={tone} />
                    <Row label="Scope" value={plan.scope} tone={tone} />
                    <Row label="Timeline" value={plan.timeline} tone={tone} />
                  </dl>

                  <CtaButton
                    href={site.bookingUrl}
                    external
                    variant={plan.featured ? "paper" : "ink"}
                    className="mt-auto w-full justify-between"
                  >
                    {plan.cta}
                  </CtaButton>
                </motion.article>
              );
            })}

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-[22px] border border-dashed border-ink/25 px-7 py-6 transition-colors duration-300 hover:border-ink md:col-span-2 md:px-9"
            >
              <span className="text-[16px] leading-snug md:text-[17px]">
                <span className="serif-accent mr-2 text-[22px] text-pencil">Care plan.</span>
                {pricing.care}
              </span>
              <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
