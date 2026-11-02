import { motion, useReducedMotion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { ease } from "../lib/motion";

/*
  A website "proof" with red-pencil edits in the margin.
  Every block is positioned in % of a fixed-ratio canvas, and type is sized
  in container units, so the composition holds together at any width.
*/

const Block = ({ style, className = "", delay = 0 }) => (
  <motion.div
    className={`absolute rounded-[0.5cqw] ${className}`}
    style={style}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease, delay }}
  />
);

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
      className="serif-accent pointer-events-none absolute whitespace-nowrap leading-none text-pencil"
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

  const ink = "bg-ink";
  const faint = "bg-ink/12";

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
            yourbusiness.com
          </div>
          <span className="label hidden text-faint sm:block">Rev. 02</span>
        </div>

        {/* Canvas */}
        <div className="relative aspect-[16/11] w-full [container-type:inline-size]">
          {/* Nav */}
          <Block delay={0.7} className={ink} style={{ left: "6%", top: "7%", width: "7%", height: "3.6%" }} />
          {[0, 1, 2].map((i) => (
            <Block key={i} delay={0.72} className={faint} style={{ left: `${48 + i * 9}%`, top: "8%", width: "6%", height: "1.8%" }} />
          ))}
          <Block delay={0.74} className="rounded-full border border-ink/30" style={{ left: "80%", top: "6.4%", width: "14%", height: "5%" }} />

          {/* Headline */}
          <Block delay={0.8} className={ink} style={{ left: "6%", top: "21%", width: "47%", height: "6.6%" }} />
          <Block delay={0.84} className={ink} style={{ left: "6%", top: "30.5%", width: "33%", height: "6.6%" }} />

          {/* Paragraph */}
          <Block delay={0.9} className={faint} style={{ left: "6%", top: "43%", width: "42%", height: "2.2%" }} />
          <Block delay={0.92} className={faint} style={{ left: "6%", top: "48%", width: "36%", height: "2.2%" }} />

          {/* CTA */}
          <motion.div
            className="absolute flex items-center justify-center rounded-full bg-ink font-medium text-paper"
            style={{ left: "6%", top: "57%", width: "17%", height: "7.6%", fontSize: "1.55cqw" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.96 }}
          >
            Book a call
          </motion.div>

          {/* Image */}
          <motion.div
            className="absolute overflow-hidden rounded-[1cqw] bg-paper-2"
            style={{ left: "60%", top: "19%", width: "34%", height: "47%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
              <circle cx="72" cy="28" r="9" className="fill-paper-3" />
              <path d="M0 100 L0 72 L28 46 L50 66 L66 52 L100 80 L100 100 Z" className="fill-paper-3" />
              <path d="M0 100 L0 84 L36 62 L62 84 L82 72 L100 86 L100 100 Z" className="fill-[#cfc9b8]" />
            </svg>
          </motion.div>

          {/* Feature cards */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-[1cqw] border border-ink/8 bg-paper/70"
              style={{ left: `${6 + i * 30}%`, top: "74%", width: "28%", height: "17%" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1 + i * 0.05 }}
            >
              <span className="absolute rounded-full bg-ink/80" style={{ left: "9%", top: "20%", width: "9%", aspectRatio: "1" }} />
              <span className="absolute rounded-sm bg-ink/15" style={{ left: "9%", top: "58%", width: "60%", height: "9%" }} />
              <span className="absolute rounded-sm bg-ink/10" style={{ left: "9%", top: "74%", width: "42%", height: "9%" }} />
            </motion.div>
          ))}

          {/* ——— Red pencil ——— */}
          {/* 1. Tick the headline */}
          <Pencil viewBox="0 0 30 30" d="M3 17 L11 25 L27 4" style={{ left: "41.5%", top: "29%", width: "4.6%", height: "7%" }} delay={1.35} width={3.4} duration={0.45} />
          <Note style={{ left: "47%", top: "31.4%" }} delay={1.6}>clear in 5 seconds</Note>

          {/* 2. Strike the jargon */}
          <Pencil
            viewBox="0 0 200 20"
            d="M2 11 C 18 4, 30 17, 48 10 S 78 3, 98 11 S 136 18, 156 9 S 186 8, 198 10"
            style={{ left: "5%", top: "47%", width: "38%", height: "4%" }}
            delay={1.75}
            duration={0.6}
          />
          <Note style={{ left: "44.5%", top: "47.1%" }} delay={2.05}>cut the jargon</Note>

          {/* 3. Circle the CTA */}
          <Pencil
            viewBox="0 0 200 100"
            d="M34 16 C 76 0, 166 4, 190 36 C 206 62, 168 94, 98 95 C 36 96, 4 74, 9 48 C 13 26, 46 12, 96 8"
            style={{ left: "3.2%", top: "53%", width: "23%", height: "16%" }}
            delay={2.25}
            duration={0.9}
          />
          <Pencil viewBox="0 0 60 20" d="M58 10 C 40 4, 24 6, 4 11 M12 4 L3 11 L12 17" style={{ left: "27%", top: "58.4%", width: "6%", height: "4%" }} delay={2.9} width={2.6} duration={0.4} />
          <Note style={{ left: "34%", top: "59.2%" }} delay={3.05}>one clear next step</Note>
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
