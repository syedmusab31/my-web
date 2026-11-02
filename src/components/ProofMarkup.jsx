import { motion, useReducedMotion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { ease } from "../lib/motion";

/*
  A website "proof" with red-pencil edits in the margin.
  Every block is positioned in % of a fixed-ratio canvas, and type is sized
  in container units, so the composition holds together at any width.
*/

const BRAND = "#2f5d50";

function Fade({ as = "div", delay = 0, className = "", style, children }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Tag>
  );
}

function Pencil({ d, viewBox, style, delay, width = 3.2, duration = 0.8 }) {
  const reduce = useReducedMotion();
  return (
    <svg className="pointer-events-none absolute overflow-visible text-pencil" viewBox={viewBox} preserveAspectRatio="none" style={style} aria-hidden="true">
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ pathLength: { duration, ease: "easeInOut", delay }, opacity: { duration: 0.01, delay } }}
      />
    </svg>
  );
}

function Note({ children, style, delay }) {
  return (
    <motion.span
      className="serif-accent pointer-events-none absolute z-10 whitespace-nowrap leading-none text-pencil"
      style={{ fontSize: "2.5cqw", ...style }}
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.span>
  );
}

function SpeedGauge({ delay }) {
  const target = 98;
  const reduce = useReducedMotion();
  const value = useMotionValue(reduce ? target : 0);
  const rounded = useTransform(value, (v) => Math.round(v));
  const r = 22;
  const c = 2 * Math.PI * r;
  const dash = useTransform(value, (v) => c - (v / 100) * c);

  useEffect(() => {
    if (reduce) return;
    const controls = animate(value, target, { duration: 1.6, ease, delay });
    return () => controls.stop();
  }, [delay, reduce, value]);

  return (
    <div className="flex items-center gap-3.5">
      <div className="relative size-[54px]">
        <svg viewBox="0 0 54 54" className="size-full -rotate-90">
          <circle cx="27" cy="27" r={r} fill="none" stroke="currentColor" strokeWidth="4" className="text-paper-2" />
          <motion.circle
            cx="27"
            cy="27"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-[#1f9d55]"
            strokeDasharray={c}
            style={{ strokeDashoffset: dash }}
          />
        </svg>
        <motion.span className="absolute inset-0 grid place-items-center text-[15px] font-semibold tabular-nums tracking-tight">{rounded}</motion.span>
      </div>
      <div>
        <p className="label text-muted">Mobile PageSpeed</p>
        <p className="mt-1.5 text-[13px] font-medium">Performance · Target 95+</p>
      </div>
    </div>
  );
}

export default function ProofMarkup() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const floatA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -40]);
  const floatB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10, -70]);

  return (
    <div ref={ref} className="relative pb-10 sm:pb-6 sm:pr-6">
      {/* The page under edit */}
      <motion.figure
        className="relative overflow-hidden rounded-[14px] border border-ink/15 bg-[#fbfaf6] shadow-[0_1px_0_rgba(21,20,18,0.04),0_40px_80px_-40px_rgba(21,20,18,0.35)]"
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.45 }}
        aria-label="Illustration: a client homepage marked up with design edits"
      >
        {/* Browser chrome */}
        <div className="flex h-9 items-center gap-3 border-b border-ink/10 px-3.5">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2.5 rounded-full border border-ink/15 bg-paper-2" />
            ))}
          </div>
          <div className="mx-auto flex h-5 w-1/2 max-w-[260px] items-center justify-center gap-1.5 rounded-md bg-paper-2/70 font-mono text-[10.5px] text-muted">
            <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
              <path d="M3.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5M2.75 5.5h6.5v4.75h-6.5z" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            kestrelphysio.co.uk
          </div>
          <span className="label hidden text-faint sm:block">Rev. 02</span>
        </div>

        {/* Canvas: a believable small-business homepage, mid-review */}
        <div className="relative aspect-[16/11] w-full overflow-hidden [container-type:inline-size]" style={{ padding: "4.2cqw 5cqw" }}>
          {/* Nav */}
          <Fade delay={0.7} className="flex items-center justify-between">
            <span className="flex items-center gap-[1.2cqw]">
              <span className="grid place-items-center rounded-[0.9cqw] text-white" style={{ width: "3.4cqw", height: "3.4cqw", background: BRAND }}>
                <svg viewBox="0 0 16 16" style={{ width: "2cqw" }} aria-hidden="true">
                  <path d="M3 12c2.5-6 7.5-8 10-8-1 3-3.5 7-10 8Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-semibold tracking-[-0.03em]" style={{ fontSize: "1.9cqw" }}>
                Kestrel Physio
              </span>
            </span>
            <span className="hidden items-center gap-[3cqw] text-ink/55 min-[380px]:flex" style={{ fontSize: "1.4cqw" }}>
              <span>Treatments</span>
              <span>Our team</span>
              <span>Prices</span>
            </span>
            <span className="rounded-full border border-ink/20 font-medium" style={{ fontSize: "1.4cqw", padding: "0.9cqw 2cqw" }}>
              Call us
            </span>
          </Fade>

          <div className="grid grid-cols-[1.2fr_1fr] gap-[4.5cqw]" style={{ marginTop: "7cqw" }}>
            {/* Left: copy */}
            <div>
              <Fade delay={0.78} as="p" className="font-mono uppercase tracking-[0.08em] text-ink/45" style={{ fontSize: "1.2cqw" }}>
                Physiotherapy · Leeds
              </Fade>

              <Fade delay={0.84} as="p" className="font-medium tracking-[-0.045em]" style={{ fontSize: "4.3cqw", lineHeight: 1.03, marginTop: "1.6cqw" }}>
                Get back to moving, without the pain.
                {/* 1. Tick the headline */}
                <span className="relative inline-block align-middle" style={{ width: "3.6cqw", height: "3.2cqw", marginLeft: "1cqw" }}>
                  <Pencil viewBox="0 0 30 30" d="M3 17 L11 25 L27 4" style={{ inset: 0, width: "100%", height: "100%" }} delay={1.35} width={3.4} duration={0.45} />
                  <Note style={{ left: "125%", top: "18%", letterSpacing: 0 }} delay={1.6}>clear in 5 seconds</Note>
                </span>
              </Fade>

              <Fade delay={0.9} className="relative w-[88%]" style={{ marginTop: "2.2cqw" }}>
                <p className="text-ink/50" style={{ fontSize: "1.55cqw", lineHeight: 1.45 }}>
                  Synergistic, holistic care solutions for optimised musculoskeletal outcomes.
                </p>
                {/* 2. Cross out the jargon, one stroke per line */}
                <Pencil
                  viewBox="0 0 200 40"
                  d="M2 11 C 30 5, 60 16, 98 9 S 160 7, 198 12 L 8 31 C 40 26, 80 35, 120 29 S 160 30, 176 30"
                  style={{ left: "-2%", top: "6%", width: "104%", height: "90%" }}
                  delay={1.75}
                  duration={0.9}
                />
                <Note style={{ left: "103%", top: "28%" }} delay={2.3}>cut the jargon</Note>
              </Fade>

              <Fade delay={0.96} className="flex items-center" style={{ marginTop: "3cqw", gap: "1.4cqw" }}>
                <span className="relative">
                  <span className="block whitespace-nowrap rounded-full font-medium text-white" style={{ background: BRAND, fontSize: "1.5cqw", padding: "1.3cqw 2.6cqw" }}>
                    Book an assessment
                  </span>
                  {/* 3. Circle the call to action */}
                  <Pencil
                    viewBox="0 0 200 100"
                    d="M34 16 C 76 0, 166 4, 190 36 C 206 62, 168 94, 98 95 C 36 96, 4 74, 9 48 C 13 26, 46 12, 96 8"
                    style={{ left: "-12%", top: "-42%", width: "124%", height: "184%" }}
                    delay={2.5}
                    duration={0.9}
                  />
                </span>
                <span className="relative shrink-0" style={{ width: "5cqw", height: "2cqw", marginLeft: "1.2cqw" }}>
                  <Pencil viewBox="0 0 60 20" d="M58 10 C 40 4, 24 6, 4 11 M12 4 L3 11 L12 17" style={{ inset: 0, width: "100%", height: "100%" }} delay={3.1} width={2.6} duration={0.4} />
                </span>
                <Note style={{ position: "relative" }} delay={3.25}>
                  one clear next step
                </Note>
              </Fade>

              <Fade delay={1.02} className="flex items-center text-ink/55" style={{ marginTop: "2.6cqw", gap: "1cqw", fontSize: "1.3cqw" }}>
                <span className="flex" style={{ gap: "0.3cqw", color: BRAND }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 12 12" style={{ width: "1.5cqw" }} aria-hidden="true">
                      <path d="M6 .8l1.6 3.3 3.6.5-2.6 2.5.6 3.6L6 9l-3.2 1.7.6-3.6L.8 4.6l3.6-.5z" fill="currentColor" />
                    </svg>
                  ))}
                </span>
                Rated 4.9 by local patients
              </Fade>
            </div>

            {/* Right: hero image */}
            <motion.div
              className="relative overflow-hidden rounded-[1.6cqw]"
              style={{ background: "linear-gradient(160deg, #e7e1d3 0%, #d6cdb9 100%)", height: "33cqw" }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.9 }}
            >
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full" aria-hidden="true">
                <circle cx="74" cy="24" r="10" fill="#efe9dc" />
                <path d="M0 100V70C20 58 34 66 50 58S80 44 100 52V100Z" fill="#cbc1aa" />
                {/* A figure mid-stretch */}
                <circle cx="46" cy="36" r="6" fill={BRAND} />
                <path d="M46 43 L44 64 M44 64 L36 84 M44 64 L56 82 M45 48 L30 40 M45 48 L62 38" stroke={BRAND} strokeWidth="4.2" strokeLinecap="round" fill="none" />
              </svg>
              <span
                className="absolute flex items-center rounded-full bg-white/95 shadow-sm"
                style={{ left: "6%", bottom: "6%", gap: "1cqw", fontSize: "1.25cqw", padding: "0.9cqw 1.6cqw" }}
              >
                <span className="rounded-full bg-[#1f9d55]" style={{ width: "1cqw", height: "1cqw" }} />
                Next free slot · Tomorrow 9:00
              </span>
            </motion.div>
          </div>

          {/* Services row */}
          <div className="grid grid-cols-3" style={{ gap: "2.4cqw", marginTop: "6cqw" }}>
            {[
              ["Sports injuries", "45 min · from £55"],
              ["Back & neck pain", "45 min · from £55"],
              ["Post-surgery rehab", "60 min · from £70"],
            ].map(([title, meta], i) => (
              <Fade
                key={title}
                delay={1.05 + i * 0.05}
                className="rounded-[1.2cqw] border border-ink/8 bg-white/70"
                style={{ padding: "1.8cqw 2cqw" }}
              >
                <span className="block rounded-[0.6cqw]" style={{ width: "2.6cqw", height: "2.6cqw", background: `color-mix(in oklab, ${BRAND} ${30 + i * 20}%, white)` }} />
                <span className="mt-[1.4cqw] block font-medium tracking-[-0.02em]" style={{ fontSize: "1.6cqw" }}>
                  {title}
                </span>
                <span className="mt-[0.4cqw] block text-ink/45" style={{ fontSize: "1.25cqw" }}>
                  {meta}
                </span>
              </Fade>
            ))}
          </div>
        </div>
      </motion.figure>

      {/* Floating proof cards */}
      <motion.div className="absolute -bottom-2 left-4 z-10 sm:-left-6 sm:bottom-0" style={{ y: floatA }}>
        <motion.div
          className="rounded-2xl border border-ink/10 bg-white/95 px-4 py-3.5 shadow-[0_24px_50px_-24px_rgba(21,20,18,0.35)] backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.4 }}
        >
          <SpeedGauge delay={1.6} />
        </motion.div>
      </motion.div>

      <motion.div className="absolute -top-5 right-3 z-10 hidden sm:block lg:-right-2" style={{ y: floatB }}>
      <motion.div
        className="w-[264px] rounded-2xl border border-ink/10 bg-white/95 p-3.5 shadow-[0_24px_50px_-24px_rgba(21,20,18,0.35)] backdrop-blur"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 3.4 }}
      >
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-pencil text-paper">
            <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
              <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-medium leading-tight">New call booked</p>
            <p className="mt-1 truncate text-[12px] text-muted">From your homepage · Tue, 10:30</p>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}
