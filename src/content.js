/*
  All site copy lives here so it can be edited without touching layout code.
*/

export const site = {
  name: "Margin",
  legalName: "Margin Studio",
  founder: "Syed Musab",
  tagline: "Websites that earn their keep.",
  bookingUrl: "https://calendly.com/syedmusab585/30min",
  // Fill these in to show the icons in the footer. Empty strings are hidden.
  socials: {
    linkedin: "",
    x: "",
    github: "",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  status: "Taking on new projects",
  headline: "Websites that *earn their keep.*",
  sub: "Margin designs and builds landing pages and business websites for founders who need their site to pull its weight. It should answer the right questions, earn trust fast and put booked calls on your calendar.",
  primaryCta: "Book a 30‑min call",
  secondaryCta: "See the work",
  facts: [
    { value: "95+", label: "PageSpeed target on mobile" },
    { value: "5–7", label: "Days to launch a landing page" },
    { value: "100%", label: "Code and design ownership" },
  ],
};

export const clients = [
  "Audatime",
  "Happy Agri",
  "TalentMesh",
  "Shipday",
];

export const leaks = {
  label: "The problem",
  title: "Most websites don't fail loudly. They *leak.*",
  intro:
    "Four quiet ways a website costs a business money every month, usually without anyone on the team noticing.",
  items: [
    {
      title: "You pay for clicks the page can't close.",
      body: "Ads bring people in. A slow, cluttered page sends them straight back out. Every extra second of load time is budget you paid for and never got back.",
      cost: "Wasted ad spend",
    },
    {
      title: "Your site looks older than your business.",
      body: "Buyers judge you before they read a word. A dated site tells a premium client you're the budget option, even when you're the best in the room.",
      cost: "Lost premium deals",
    },
    {
      title: "Mobile visitors can't find the button.",
      body: "Most of your traffic arrives on a phone. If people have to pinch, zoom and hunt for your number, they're already on a competitor's site.",
      cost: "Abandoned visits",
    },
    {
      title: "Leads arrive, then go nowhere.",
      body: "Form entries sit in an inbox nobody checks, and no one can say which page brought them in. You can't grow what you can't see.",
      cost: "Untracked revenue",
    },
  ],
};

export const principles = {
  label: "The fix",
  title: "Four rules every *Margin* site is built on.",
  intro:
    "We don't start with a template and fill in the blanks. Every decision traces back to one question: does this help the visitor say yes?",
  items: [
    {
      figure: "95+",
      title: "Fast before pretty.",
      body: "Hand-written code. No page builders, no pile of plugins. Speed is the cheapest conversion upgrade there is, so we treat it as a feature, not an afterthought.",
    },
    {
      figure: "1st",
      title: "Thumb-first.",
      body: "We design for the phone in your customer's hand, then scale up to desktop. Readable type, generous tap targets and the call button always within reach.",
    },
    {
      figure: "5s",
      title: "Credible at a glance.",
      body: "Type, spacing and proof arranged so a stranger trusts you within the first five seconds, before they've scrolled at all.",
    },
    {
      figure: "1:1",
      title: "One page, one job.",
      body: "Each section moves the visitor one step closer to a single action: the call, the quote, the purchase. Nothing on the page is there just to decorate.",
    },
  ],
};

export const services = {
  label: "Services",
  title: "Three ways to *work together.*",
  intro:
    "Start with a single page, a full website or ongoing care. Each one is scoped around a clear business outcome.",
  items: [
    {
      name: "Landing pages",
      for: "For campaigns, launches and paid traffic",
      body: "A single focused page built around one offer and one action. The right choice when you're running Google or Meta ads, launching a product, or testing an idea and every visitor counts.",
      deliverables: [
        "Conversion-led copy and structure",
        "Custom design, no templates",
        "95+ mobile PageSpeed",
        "Analytics and form tracking",
        "Ready for A/B testing",
      ],
      timeline: "5–7 days",
      price: "From $800",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Business websites",
      for: "For firms that win on reputation",
      body: "A multi-page site that explains what you do, proves you're good at it and makes the next step obvious. Built for clinics, agencies, consultancies and B2B firms that sell on trust.",
      deliverables: [
        "5–7 pages, each with a clear job",
        "Brand-led custom design",
        "SEO-ready structure from day one",
        "Fully responsive on every screen",
        "Built to grow with new services",
      ],
      timeline: "3–4 weeks",
      price: "From $2,000",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Care plan",
      for: "For sites that need to keep performing",
      body: "Hosting, security, speed checks and routine updates, handled every month. The site you launched stays as fast and secure as the day it went live, and you stay focused on the business.",
      deliverables: [
        "Managed hosting and security",
        "Regular speed audits",
        "Lead tracking reports",
        "Routine content updates",
      ],
      timeline: "Monthly",
      price: "Quoted per site",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export const process = {
  label: "Process",
  title: "From first call to launch, in *four steps.*",
  intro:
    "No guesswork, and no disappearing for weeks. At every stage you'll know what's happening, what's next and what we need from you.",
  steps: [
    {
      name: "Discover",
      title: "We start with your business, not your website.",
      body: "One focused call to understand your offer, your buyers and the single action the site has to drive. Then we study your competitors so we know exactly what to beat.",
      output: "A one-page project brief",
    },
    {
      name: "Structure",
      title: "Wireframes before visuals.",
      body: "We map the page section by section: what it says, in what order, and why. You approve the structure before any design work begins, so nothing gets redone later.",
      output: "An approved wireframe",
    },
    {
      name: "Design & build",
      title: "Custom design, hand-built code.",
      body: "Your site is designed from scratch and built on a modern React stack. It stays light, fast and entirely yours, with no templates or bloated builders underneath.",
      output: "A live staging link to review",
    },
    {
      name: "Launch",
      title: "A 50-point check, then live.",
      body: "SEO tags, speed tests, forms, analytics and cross-device QA all get checked. Then we launch and stay with you for 30 days of support.",
      output: "Live site + 30 days of support",
    },
  ],
};

export const work = {
  label: "Selected work",
  title: "Built for founders from *Zurich to Monrovia.*",
  intro:
    "Operations systems, landing pages and platforms for teams in the US, UK, Switzerland, Morocco, Liberia and South Africa.",
  projects: [
    {
      name: "Audatime",
      place: "USA",
      type: "Operations system",
      summary: "One custom system to replace a business run on spreadsheets.",
      outcome: "Day-to-day operations became faster, more accurate and easier to manage.",
      cover: {
        view: "app",
        bg: "#dde3e8",
        accent: "#24445f",
        headline: "Today's schedule",
        rows: ["Morning shift", "Client onboarding", "Payroll export", "Weekly report"],
      },
    },
    {
      name: "Happy Agri",
      place: "Liberia",
      type: "Landing page",
      summary: "A landing page for a growing agriculture company.",
      outcome: "A clear, professional story the founders now present with confidence.",
      cover: {
        view: "landing",
        bg: "#e2e5d1",
        accent: "#3d6828",
        headline: "Growing Liberia's food future.",
        cta: "Partner with us",
      },
    },
    {
      name: "TalentMesh",
      place: "United Kingdom",
      type: "Website + platform",
      summary: "The website and service platform behind a new UK talent startup.",
      outcome: "Launched and operating smoothly from the first day.",
      cover: {
        view: "app",
        bg: "#e3dfeb",
        accent: "#46388a",
        headline: "Open placements",
        rows: ["Product designer", "Data analyst", "Sales lead", "Ops manager"],
      },
    },
    {
      name: "Shipday",
      place: "Switzerland",
      type: "Platform website",
      summary: "A brand-led marketing site wrapped around a working app.",
      outcome: "A noticeably stronger impression with clients and partners.",
      cover: {
        view: "website",
        bg: "#d9e6e2",
        accent: "#1b6457",
        headline: "Local delivery, without the chaos.",
        cta: "Start free",
      },
    },
    {
      name: "Product Launch",
      place: "Morocco",
      type: "Business website",
      summary: "A product website built to take an idea to market.",
      outcome: "Visitors understand the offer quickly and trust it sooner.",
      cover: {
        view: "landing",
        bg: "#efdfd0",
        accent: "#9a4c27",
        headline: "Made to launch, built to last.",
        cta: "See the product",
      },
    },
    {
      name: "Public Sector Workflow",
      place: "South Africa",
      type: "Web application",
      summary: "An internal workflow application for a government team.",
      outcome: "Tasks that used to drag on are now handled quickly and reliably.",
      cover: {
        view: "dashboard",
        bg: "#e5e2d8",
        accent: "#2e3b33",
        headline: "Case overview",
      },
    },
  ],
};

// Client words are kept as given. Only the presentation changed.
// Edited for length and clarity. Send each client their version for approval before publishing.
export const testimonials = {
  label: "Testimonials",
  title: "In their *words.*",
  intro: "Founders and operators from six teams on what changed after we worked together.",
  items: [
    {
      quote:
        "We were running the whole business on spreadsheets. Musab replaced all of it with one system, and our day-to-day is now faster, more accurate and far easier to manage.",
      name: "Aaron Bloyer",
      role: "Founder, Audatime LLC",
      place: "USA",
    },
    {
      quote:
        "Our landing page finally explains who we are and what we do, clearly and professionally. We present the business with a lot more confidence now.",
      name: "Ramsey Paye Willie",
      role: "Founder, Happy AgriCompany",
      place: "Liberia",
    },
    {
      quote:
        "The application made our workflow noticeably faster and more reliable. Work that used to drag on is now handled in a fraction of the effort.",
      name: "Bill",
      role: "Government sector",
      place: "South Africa",
    },
    {
      quote:
        "The website gave our product a strong, professional presence. The structure is so clear that people understand what we offer almost straight away.",
      name: "Mohsin Bajja",
      role: "Product Owner",
      place: "Morocco",
    },
    {
      quote:
        "We needed to launch and operate from day one. Musab built a system that fit our business exactly, and we ran smoothly from the start.",
      name: "Aldo",
      role: "Founder, TalentMesh",
      place: "United Kingdom",
    },
    {
      quote:
        "Pairing our app with a proper website changed how we come across. Clients and partners see us differently now.",
      name: "Martin",
      role: "Founder, Shipday",
      place: "Switzerland",
    },
  ],
};

export const pricing = {
  label: "Pricing",
  title: "Clear starting prices. *No surprises later.*",
  intro:
    "Every project is quoted after a discovery call, but you shouldn't have to book one just to learn the ballpark. Here's where we start.",
  included: ["Strategy session", "Custom, mobile-first design", "Hand-built code you own", "30 days of post-launch support"],
  plans: [
    {
      name: "Landing page",
      price: "$800",
      pitch: "One page, one offer, one goal. Built to turn paid traffic into leads.",
      bestFor: "Google & Meta ads, product launches, waitlists",
      scope: "1 focused page",
      timeline: "5–7 days",
      cta: "Start a landing page",
    },
    {
      name: "Business website",
      price: "$2,000",
      pitch: "A complete site that earns trust and keeps bringing in work.",
      bestFor: "B2B firms, clinics, agencies, consultancies",
      scope: "5–7 pages",
      timeline: "3–4 weeks",
      cta: "Start a website",
      featured: true,
      badge: "Most chosen",
    },
  ],
  note: "Final pricing depends on page count, integrations and how much copy we write together. You'll get a written quote before any work begins.",
  care: "Already live? We keep it fast, secure and up to date every month.",
};

export const faq = {
  label: "FAQ",
  title: "Questions, *answered.*",
  intro: "The things founders usually ask on the first call. Anything else, just ask.",
  items: [
    {
      q: "Do I need a landing page or a full website?",
      a: "If you're running ads or launching one specific offer, start with a landing page. It's faster to build and easier to measure. If you sell several services, need to rank on Google or win clients who research you first, you need a business website.",
    },
    {
      q: "How long does a project take?",
      a: "Landing pages usually launch in 5–7 days. Business websites take 3–4 weeks, depending on page count and how ready your content is. You'll get a timeline with dates in the quote.",
    },
    {
      q: "Why custom code instead of Wix or WordPress?",
      a: "Page builders are quick to start but tend to end up slow, plugin-heavy and hard to rank. We build on a modern React stack, so your site loads fast, stays secure and is shaped around your business instead of a template's limits.",
    },
    {
      q: "Will it work properly on phones?",
      a: "Yes, and that's where we start. Most of your visitors are on a phone, so every layout is designed for a small screen first and then scaled up to tablet and desktop.",
    },
    {
      q: "What do you need from me to get started?",
      a: "A 30-minute call, your logo and any brand assets you have, and a rough idea of what you sell and to whom. If the copy isn't written yet, we'll shape it with you.",
    },
    {
      q: "What happens after launch?",
      a: "Every project includes 30 days of support. After that, you can join the Care plan for hosting, security monitoring, speed audits and routine updates, or take the code and run it yourself.",
    },
    {
      q: "Do I own the website and the code?",
      a: "Completely. Once the final invoice is paid, the code, design and assets are yours. No lock-in, no hostage hosting.",
    },
  ],
};

export const closing = {
  title: "Let's widen your *margin.*",
  sub: "Book a free 30-minute call. We'll look at your current site together and you'll leave with at least one thing worth fixing, whether we work together or not.",
  cta: "Book your call",
};
