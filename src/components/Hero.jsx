import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "../content";
import { ease } from "../lib/motion";
import { CtaButton, ArrowRight } from "./ui";
import ProofMarkup from "./ProofMarkup";
import client1 from "../assets/clients/client-1.webp";
import client2 from "../assets/clients/client-2.webp";
import client3 from "../assets/clients/client-3.webp";
import client4 from "../assets/clients/client-4.webp";

const logos = [client1, client2, client3, client4];

function Line({ children, delay = 0, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "102%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-[112px] md:pt-[136px]">
      <div className="frame frame-ruled relative">
        {/* Status */}
        <motion.div
          className="flex items-center justify-between border-b border-(--rule) pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2.5">
            <span className="relative flex size-2">
              {!reduce && <span className="absolute inset-0 animate-ping rounded-full bg-pencil/60" />}
              <span className="relative size-2 rounded-full bg-pencil" />
            </span>
            <span className="label text-ink/70">{hero.status}</span>
          </span>
          <span className="label hidden text-muted sm:block">Independent web studio</span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-10 text-[clamp(3.25rem,11.2vw,9.5rem)] leading-[0.9] tracking-[-0.055em] md:mt-14">
          <span className="sr-only">{hero.headline.replaceAll("*", "")}</span>
          <span aria-hidden="true">
            <Line delay={0.15}>Websites that</Line>
            <span className="relative inline-block">
              <Line delay={0.28} className="serif-accent pr-[0.06em] tracking-[-0.03em]">
                earn their keep.
              </Line>
              {/* Red pencil underline */}
              <svg
                className="pointer-events-none absolute -bottom-[0.08em] left-0 h-[0.16em] w-full overflow-visible text-pencil"
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M3 13 C 70 5, 150 4, 230 8 S 360 14, 397 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut", delay: 1.15 }}
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Body + visual */}
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 pb-20 md:mt-20 lg:grid-cols-12 lg:pb-28">
          <motion.div
            className="flex flex-col lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
          >
            <p className="max-w-[34rem] text-[18px] leading-[1.6] text-ink/75 md:text-[19px]">{hero.sub}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CtaButton href={site.bookingUrl} external>
                {hero.primaryCta}
              </CtaButton>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {hero.secondaryCta}
                <ArrowRight className="size-4 rotate-90 transition-transform duration-500 ease-out-soft group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {logos.map((src, i) => (
                  <span
                    key={src}
                    className="grid size-10 place-items-center overflow-hidden rounded-full border-2 border-paper bg-white"
                    style={{ zIndex: logos.length - i }}
                  >
                    <img src={src} alt="" width="40" height="40" className="size-full object-contain p-1" />
                  </span>
                ))}
              </div>
              <p className="text-[14px] leading-snug text-muted">
                Trusted by founders in the <span className="text-ink">US, UK,</span>
                <br className="hidden sm:block" /> <span className="text-ink">Europe and Africa.</span>
              </p>
            </div>

            <dl className="mt-auto grid grid-cols-3 gap-4 pt-14">
              {hero.facts.map((fact) => (
                <div key={fact.label} className="border-t border-ink pt-4">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="text-[30px] font-medium leading-none tracking-[-0.04em] md:text-[38px]">{fact.value}</dd>
                  <dd className="mt-2.5 text-[12.5px] leading-snug text-muted md:text-[13px]">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="lg:col-span-7">
            <ProofMarkup />
          </div>
        </div>
      </div>
    </section>
  );
}
