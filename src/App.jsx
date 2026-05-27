import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Crosshair,
  DatabaseZap,
  Globe2,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  MapPin,
  Megaphone,
  MonitorCog,
  PenTool,
  Play,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Utensils,
  Zap,
} from "lucide-react";

const services = [
  ["01", Crosshair, "Digital Strategy & Brand Development", "Build a strong digital foundation with positioning, messaging, brand direction, and market-ready strategy."],
  ["02", Code2, "Website Design & Development", "Beautiful, functional, optimized websites built for credibility, search visibility, and conversions."],
  ["03", MonitorCog, "Web Application Development", "Powerful, scalable web applications for complex business needs, workflows, and customer experiences."],
  ["04", Smartphone, "Mobile Application Development", "Seamless Android and iOS mobile experiences designed for usability, engagement, and growth."],
  ["05", BrainCircuit, "AI-Powered Applications", "Intelligent AI solutions, assistants, automation, and smarter digital systems for modern businesses."],
  ["06", BriefcaseBusiness, "ERP & CRM Solutions", "Streamline operations, manage customer journeys, automate processes, and improve business control."],
  ["07", DatabaseZap, "API Integrations & Automation", "Connect systems, automate workflows, reduce manual work, and scale business operations."],
  ["08", BarChart3, "Data Analytics & Dashboards", "Turn business data into clear dashboards, insights, reports, and performance decisions."],
  ["09", Megaphone, "Social Media & Performance Marketing", "Reach more, convert more, and grow through social content, paid campaigns, and measurable funnels."],
  ["10", Play, "Content & Creative Production", "Create content that connects, explains, promotes, and converts across digital platforms."],
];

const process = [
  ["01", Search, "Discover", "We learn your business, goals, market, competitors, and target audience."],
  ["02", Target, "Strategize", "We craft data-driven strategies tailored for growth and visibility."],
  ["03", PenTool, "Design", "We design impactful experiences that reflect your brand and build trust."],
  ["04", Code2, "Build", "We build robust, scalable, and high-performing digital solutions."],
  ["05", Rocket, "Launch", "We deploy with precision and ensure a smooth go-live."],
  ["06", BarChart3, "Optimize", "We analyze, refine, and optimize for continuous growth."],
];

const why = [
  [BrainCircuit, "AI-Forward Thinking", "We leverage AI and emerging technologies to deliver smarter, faster, and future-ready solutions."],
  [Sparkles, "Premium Creative Quality", "We blend creativity with technology to craft premium digital experiences that stand out."],
  [BriefcaseBusiness, "Business-First Execution", "Every solution is aligned with your business goals for real impact and sustainable growth."],
  [BarChart3, "Measurable Reporting", "Transparent analytics and data-backed insights to track performance and maximize ROI."],
];

const aboutCards = [
  ["01", "Who We Are", "Voltrazn is a strategic growth partner for ambitious brands focused on digital visibility, performance, innovation, and business outcomes."],
  ["02", "Mission", "To empower businesses with forward-thinking digital solutions that create visibility, efficiency, and sustainable growth."],
  ["03", "Vision", "To become a trusted GCC growth partner known for premium execution, intelligent solutions, and measurable impact."],
  ["04", "Core Strengths", "Strategy, creativity, technology, performance, and accountability come together to deliver future-ready business growth."],
];

const industries = [
  [Utensils, "Restaurants & Hospitality"],
  [ShoppingCart, "Retail & E-Commerce"],
  [Globe2, "Real Estate"],
  [HeartPulse, "Healthcare"],
  [GraduationCap, "Education"],
  [BriefcaseBusiness, "Professional Services"],
  [Rocket, "Startups"],
];

const clientNeeds = [
  ["More Qualified Leads", "Landing pages, campaign funnels, WhatsApp CTAs, forms, and enquiry flows that help turn visitors into business opportunities."],
  ["Stronger Digital Presence", "A premium website, clear brand story, strong service pages, and social content that makes the company look trustworthy and established."],
  ["Better Search Visibility", "SEO, GEO, Google Business visibility, local discovery, and service-focused content so customers can find the business easily."],
  ["Smarter Operations", "ERP, CRM, API integrations, automation, dashboards, and workflow support to reduce manual effort and improve control."],
  ["Clear Performance Reporting", "Analytics, campaign reports, dashboard views, lead tracking, and optimization insights to understand what is working."],
  ["Premium Creative Output", "Brand visuals, social media creatives, content production, digital brochures, presentations, and campaign assets that look professional."],
];

function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame;
    let tick = 0;
    const pointer = { x: 0.52, y: 0.42 };
    const nodes = Array.from({ length: 125 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00082,
      vy: (Math.random() - 0.5) * 0.00082,
      r: 1 + Math.random() * 2.4,
      phase: index * 0.21,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.offsetWidth * ratio;
      height = canvas.offsetHeight * ratio;
      canvas.width = width;
      canvas.height = height;
    };

    const move = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
    };

    const draw = () => {
      tick += 0.012;
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(pointer.x * width, pointer.y * height, 0, pointer.x * width, pointer.y * height, width * 0.85);
      glow.addColorStop(0, "rgba(0,180,255,0.28)");
      glow.addColorStop(0.28, "rgba(2,255,226,0.13)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, i) => {
        node.x += node.vx + Math.sin(tick + node.phase) * 0.00004;
        node.y += node.vy + Math.cos(tick + node.phase) * 0.00004;
        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;

        const x = node.x * width;
        const y = node.y * height;
        const pulse = Math.sin(tick * 3 + node.phase) * 0.45;

        ctx.beginPath();
        ctx.arc(x, y, node.r + pulse, 0, Math.PI * 2);
        ctx.fillStyle = i % 4 === 0 ? "rgba(0,234,255,.88)" : i % 4 === 1 ? "rgba(58,130,255,.75)" : i % 4 === 2 ? "rgba(160,240,255,.66)" : "rgba(255,255,255,.55)";
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.078) {
            ctx.strokeStyle = `rgba(0,220,255,${0.12 * (1 - dist / 0.078)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(other.x * width, other.y * height);
            ctx.stroke();
          }
        }
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" />;
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 52, scale: 0.97, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-110px" }}
      transition={{ duration: 0.78, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-4xl text-center">
      <p className="text-sm font-black uppercase tracking-[.55em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-0.065em] md:text-7xl">{title}</h2>
      {text && <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">{text}</p>}
    </Reveal>
  );
}

function CyberLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${compact ? "h-12 w-12" : "h-20 w-20"} relative shrink-0 overflow-hidden rounded-2xl border border-cyan-300/35 bg-black shadow-[0_0_34px_rgba(0,210,255,.38)]`}>
        <img
          src="/voltrazn-v-symbol.png"
          alt="Voltrazn V Symbol"
          className="h-full w-full scale-[1.18] object-cover object-center"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-200/25" />
      </div>
      <div className="leading-none">
        <span className={`${compact ? "text-base" : "text-4xl md:text-6xl"} block font-black tracking-[.28em] text-white drop-shadow-[0_0_18px_rgba(0,200,255,.9)]`}>VOLTRAZN</span>
        <span className={`${compact ? "text-[10px]" : "text-xs md:text-sm"} mt-2 block font-black uppercase tracking-[.32em] text-cyan-300`}>Digital Marketing & Tech Solutions</span>
      </div>
    </div>
  );
}

function HoloObject({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.85, rotate: -4 }}
      animate={{ opacity: 1, y: [0, -16, 0], scale: 1, rotate: [-2, 3, -2] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.8 },
        y: { delay, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { delay, duration: 7, repeat: Infinity, ease: "easeInOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1.18, 1.38]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-20, 85]);
  const coreScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.96]);
  const titleY = useTransform(scrollYProgress, [0, 1], [28, -42]);
  const gridY = useTransform(scrollYProgress, [0, 1], [36, -30]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden px-5 pb-14 pt-32 md:pt-36">
      <CircuitCanvas />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div style={{ y: titleY }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
            <CyberLogo />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 34, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.18, duration: 0.95 }} className="max-w-5xl text-5xl font-black leading-[.88] tracking-[-.07em] md:text-7xl lg:text-[6rem] xl:text-[6.8rem]">
            Future-ready <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-400 bg-clip-text text-transparent">digital growth</span>, AI, and technology solutions.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.8 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
            Voltrazn helps modern businesses strengthen visibility, accelerate growth, and build future-ready digital capability through strategy, design, technology, and measurable execution.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44, duration: 0.8 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#services" className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-black text-black shadow-[0_0_55px_rgba(0,210,255,.28)] transition hover:-translate-y-1">
              Explore services <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </a>
            <a href="#experience" className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/15">
              View experience
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: gridY }} className="relative hidden h-[620px] overflow-hidden rounded-[3.2rem] border border-cyan-300/14 bg-white/[0.035] p-6 shadow-[0_0_120px_rgba(0,210,255,.08)] backdrop-blur-xl lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,.13),transparent_48%)]" />
          <motion.div style={{ scale: ringScale, rotate: ringRotate }} className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_120px_rgba(0,210,255,.18)]" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/30" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/25" />

          <motion.div style={{ scale: coreScale }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, duration: 0.9 }} className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2.5rem] border border-cyan-300/30 bg-black/55 text-center shadow-[0_0_90px_rgba(0,210,255,.28)] backdrop-blur-2xl">
            <div>
              <BrainCircuit className="mx-auto text-cyan-200" size={44} />
              <p className="mt-4 text-xs font-black uppercase tracking-[.35em] text-cyan-300">AI + Tech</p>
              <p className="mt-2 text-4xl font-black">2026</p>
            </div>
          </motion.div>

          {[
            ["Strategy", "left-[9%] top-[18%]"],
            ["Performance", "right-[8%] top-[27%]"],
            ["Technology", "left-[12%] bottom-[18%]"],
            ["Accountability", "right-[10%] bottom-[16%]"],
          ].map((chip, index) => (
            <motion.div
              key={chip[0]}
              initial={{ opacity: 0, y: 20, scale: 0.86 }}
              animate={{ opacity: 1, y: [0, -12, 0], scale: 1 }}
              transition={{ opacity: { delay: 0.5 + index * 0.12 }, y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" }, scale: { delay: 0.5 + index * 0.12 } }}
              className={`absolute ${chip[1]} rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 font-black text-cyan-100 shadow-2xl backdrop-blur-xl`}
            >
              {chip[0]}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(to_top,rgba(0,80,180,.28),transparent)]">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-300/45 shadow-[0_0_35px_rgba(0,210,255,.75)]" />
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const stageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1.1, 0.88]);
  const stageRotate = useTransform(scrollYProgress, [0, 1], [-18, 55]);
  const floatA = useTransform(scrollYProgress, [0, 1], [80, -90]);
  const floatB = useTransform(scrollYProgress, [0, 1], [-70, 85]);
  const floatC = useTransform(scrollYProgress, [0, 1], [110, -50]);

  const items = [
    [Search, "Discover", "Audience, goals, competition, and opportunity mapping."],
    [PenTool, "Design", "Premium UI, brand storytelling, and experience flow."],
    [Code2, "Build", "Web, apps, automation, integrations, and dashboards."],
    [BarChart3, "Optimize", "Reporting, performance tracking, and growth improvement."],
  ];

  return (
    <section id="experience" ref={ref} className="relative mx-auto max-w-7xl px-5 py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[.55em] text-cyan-300">Interactive Growth System</p>
          <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-.07em] md:text-7xl">
            A digital journey that moves like a product experience.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Inspired by immersive agency experiences, this section keeps Voltrazn’s story business-focused while adding layered motion, floating panels, and scroll-linked depth.
          </p>
        </Reveal>

        <div className="relative min-h-[720px] overflow-hidden rounded-[3.2rem] border border-cyan-300/14 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
          <motion.div style={{ scale: stageScale, rotate: stageRotate }} className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-cyan-300/18 bg-[conic-gradient(from_120deg,rgba(0,210,255,.18),rgba(0,58,255,.12),rgba(0,255,220,.12),rgba(0,210,255,.18))] shadow-[0_0_130px_rgba(0,210,255,.12)]" />
          <motion.div style={{ y: floatA }} className="absolute left-[8%] top-[12%] h-32 w-32 rounded-[2rem] border border-cyan-300/18 bg-cyan-300/10 shadow-[0_0_80px_rgba(0,210,255,.16)]" />
          <motion.div style={{ y: floatB }} className="absolute right-[8%] bottom-[12%] h-40 w-40 rounded-full border border-blue-400/18 bg-blue-400/10 shadow-[0_0_85px_rgba(0,90,255,.18)]" />
          <motion.div style={{ y: floatC }} className="absolute right-[18%] top-[22%] h-20 w-20 rounded-3xl border border-cyan-200/20 bg-white/5 shadow-[0_0_65px_rgba(0,210,255,.12)]" />

          <div className="relative z-10 grid min-h-[668px] content-center gap-5 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item[0];
              return (
                <motion.article
                  key={item[1]}
                  initial={{ opacity: 0, y: 50, scale: 0.88 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  whileHover={{ y: -10, scale: 1.035, rotate: index % 2 ? -1 : 1 }}
                  className="min-h-[235px] rounded-[2rem] border border-cyan-300/16 bg-black/45 p-6 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                    <Icon className="text-cyan-200" size={26} />
                  </div>
                  <h3 className="mt-7 text-2xl font-black tracking-[-.03em] text-cyan-100">{item[1]}</h3>
                  <p className="mt-3 leading-7 text-white/58">{item[2]}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28">
      <SectionTitle eyebrow="About Voltrazn" title="Strategic growth partner for ambitious brands." text="A Dubai-based digital marketing and tech solutions company built around visibility, performance, innovation, technology, and measurable execution." />
      <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
        {aboutCards.map((card, index) => (
          <Reveal key={card[1]} delay={index * 0.05} className="h-full">
            <motion.article whileHover={{ y: -10, scale: 1.015 }} className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-blue-400/20" />
              <div className="relative mb-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-black text-cyan-200 shadow-[0_0_30px_rgba(0,210,255,.18)]">{card[0]}</span>
                <h3 className="text-2xl font-black tracking-[-.035em] text-cyan-100">{card[1]}</h3>
              </div>
              <p className="relative flex-1 text-lg leading-8 text-white/64">{card[2]}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HologramStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], [-120, 90]);
  const rightX = useTransform(scrollYProgress, [0, 1], [120, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1.05, 0.9]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20">
      <div className="relative overflow-hidden rounded-[3rem] border border-cyan-300/14 bg-black/35 p-8 shadow-2xl backdrop-blur-xl">
        <motion.div style={{ x: leftX, scale }} className="absolute left-12 top-10 h-36 w-36 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_80px_rgba(0,210,255,.18)]" />
        <motion.div style={{ x: rightX, scale }} className="absolute bottom-10 right-12 h-40 w-40 rounded-full border border-blue-400/20 bg-blue-400/10 shadow-[0_0_90px_rgba(0,90,255,.18)]" />
        <div className="relative z-10 grid gap-8 md:grid-cols-3">
          {[["Visibility", "Stronger search, social, and brand presence."], ["Efficiency", "Automation, integrations, and smarter systems."], ["Growth", "Measurable campaigns, content, and reporting."]].map((item, index) => (
            <Reveal key={item[0]} delay={index * 0.06}>
              <div className="rounded-[2rem] border border-cyan-300/12 bg-white/[0.045] p-6 text-center">
                <p className="text-4xl font-black tracking-[-.05em] text-cyan-200">{item[0]}</p>
                <p className="mt-3 leading-7 text-white/58">{item[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.2, 1.55]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden px-5 py-28">
      <motion.div style={{ scale: bgScale, rotate: bgRotate }} className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[8rem] border border-cyan-300/10 bg-[conic-gradient(from_180deg,rgba(0,210,255,.15),rgba(0,35,120,.08),rgba(0,255,230,.12),rgba(0,210,255,.15))] blur-sm" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle eyebrow="Our Services" title="Innovative solutions. Intelligent technology. Measurable impact." text="Integrated solutions for modern business growth, covering strategy, applications, automation, marketing, content, analytics, and technology delivery." />
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service[1];
            return (
              <Reveal key={service[2]} delay={index * 0.035} className="h-full">
                <motion.article whileHover={{ y: -14, scale: 1.03 }} className="group relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-[2rem] border border-cyan-300/18 bg-black/35 p-5 text-center shadow-[0_0_40px_rgba(0,80,255,.08)] backdrop-blur-xl">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,.22),transparent_45%)]" />
                  <span className="relative mx-auto grid h-10 w-16 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200">{service[0]}</span>
                  <div className="relative mx-auto mt-7 grid h-24 w-24 place-items-center rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 transition group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(0,210,255,.25)]">
                    <Icon className="text-cyan-200" size={38} />
                  </div>
                  <h3 className="relative mt-7 text-base font-black uppercase tracking-[.08em] text-cyan-200">{service[2]}</h3>
                  <p className="relative mt-4 flex-1 text-sm leading-6 text-white/58">{service[3]}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScrollExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const engineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 1.25, 0.86]);
  const engineRotate = useTransform(scrollYProgress, [0, 1], [-18, 145]);
  const engineY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [80, -90]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-60, 85]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [-50, 80]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [60, -70]);

  const card1Y = useTransform(scrollYProgress, [0, 0.42], [90, 0]);
  const card2Y = useTransform(scrollYProgress, [0.12, 0.62], [110, 0]);
  const card3Y = useTransform(scrollYProgress, [0.24, 0.82], [130, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.42], [0.9, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.12, 0.62], [0.9, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.24, 0.82], [0.9, 1]);

  const cards = [
    {
      y: card1Y,
      scale: card1Scale,
      no: "01",
      title: "Strategic growth partner",
      text: "We help ambitious brands improve visibility, sharpen positioning, and build a stronger digital foundation.",
      tone: "bg-white text-black md:mr-auto md:ml-0",
    },
    {
      y: card2Y,
      scale: card2Scale,
      no: "02",
      title: "Intelligent technology delivery",
      text: "We combine websites, applications, ERP/CRM, API automation, AI-powered tools, and analytics into one connected growth system.",
      tone: "bg-cyan-300 text-black md:mx-auto",
    },
    {
      y: card3Y,
      scale: card3Scale,
      no: "03",
      title: "Measurable business impact",
      text: "Every solution is planned for performance, reporting, lead generation, optimization, and sustainable business outcomes.",
      tone: "bg-blue-500 text-white md:ml-auto md:mr-0",
    },
  ];

  return (
    <section ref={ref} className="relative px-5 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
        <Reveal className="relative z-20">
          <p className="text-sm font-black uppercase tracking-[.55em] text-cyan-300">Voltrazn Growth Engine</p>
          <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-.07em] md:text-7xl">
            Strategy, creativity, technology, and performance moving together.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Voltrazn works as a connected digital partner: brand clarity, intelligent technology, marketing execution, and measurable reporting in one premium system.
          </p>
        </Reveal>

        <div className="relative min-h-[760px] overflow-hidden rounded-[3rem] border border-cyan-300/15 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
          <motion.div
            style={{ scale: engineScale, rotate: engineRotate, y: engineY }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-cyan-300/20 bg-[conic-gradient(from_90deg,rgba(0,210,255,.18),rgba(0,65,255,.12),rgba(0,255,220,.16),rgba(0,210,255,.18))] shadow-[0_0_130px_rgba(0,210,255,.16)]"
          />
          <motion.div
            style={{ scale: engineScale, rotate: engineRotate }}
            className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/25"
          />

          <motion.div style={{ x: orb1X, y: orb1Y }} className="absolute left-12 top-16 h-24 w-24 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_70px_rgba(0,210,255,.18)]" />
          <motion.div style={{ x: orb2X, y: orb2Y }} className="absolute bottom-16 right-12 h-32 w-32 rounded-full border border-blue-400/20 bg-blue-400/10 shadow-[0_0_80px_rgba(0,90,255,.20)]" />

          <div className="relative z-10 grid min-h-[708px] content-center gap-5">
            {cards.map((card, index) => (
              <motion.article
                key={card.no}
                style={{ y: card.y, scale: card.scale }}
                whileHover={{ scale: 1.025, rotate: index === 1 ? -1 : 1 }}
                className={`w-full max-w-[650px] rounded-[2rem] border border-cyan-300/20 p-6 shadow-2xl backdrop-blur-2xl ${card.tone}`}
              >
                <span className={`rounded-full px-3 py-1 text-xs font-black ${index === 2 ? "bg-white text-black" : "bg-black text-white"}`}>{card.no}</span>
                <h3 className="mt-5 text-3xl font-black tracking-[-.04em]">{card.title}</h3>
                <p className={`mt-3 leading-7 ${index === 2 ? "text-white/72" : "text-black/62"}`}>{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-28">
      <SectionTitle eyebrow="How We Work" title="Discover. Strategize. Design. Build. Launch. Optimize." />
      <div className="grid auto-rows-fr gap-4 md:grid-cols-3 lg:grid-cols-6">
        {process.map((step, index) => {
          const Icon = step[1];
          return (
            <Reveal key={step[2]} delay={index * 0.04} className="h-full">
              <motion.article whileHover={{ y: -12, scale: 1.03 }} className="relative flex h-full min-h-[290px] flex-col rounded-[2rem] border border-cyan-300/16 bg-white/[0.045] p-5 text-center backdrop-blur-xl">
                <span className="mx-auto grid h-10 w-14 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200">{step[0]}</span>
                <Icon className="mx-auto mt-6 text-cyan-200" size={34} />
                <h3 className="mt-5 text-xl font-black uppercase tracking-[.1em] text-white">{step[2]}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-white/58">{step[3]}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-28">
      <SectionTitle eyebrow="Why Voltrazn" title="Premium execution with measurable impact." />
      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
        {why.map((item, index) => {
          const Icon = item[0];
          return (
            <Reveal key={item[1]} delay={index * 0.05} className="h-full">
              <motion.article whileHover={{ y: -14, scale: 1.025 }} className="flex h-full min-h-[340px] flex-col rounded-[2rem] border border-cyan-300/16 bg-white/[0.045] p-6 text-center shadow-2xl backdrop-blur-xl">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] border border-cyan-300/18 bg-cyan-300/5 shadow-[0_0_40px_rgba(0,210,255,.12)]">
                  <Icon className="text-cyan-200" size={38} />
                </div>
                <h3 className="mt-7 text-xl font-black uppercase tracking-[.08em] text-cyan-200">{item[1]}</h3>
                <p className="mt-4 flex-1 leading-7 text-white/58">{item[2]}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function IndustriesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const beamX = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-28">
      <SectionTitle eyebrow="Industries We Serve" title="Built for modern GCC business growth." text="Voltrazn supports restaurants and hospitality, retail and e-commerce, real estate, healthcare, education, professional services, and startups." />
      <div className="relative overflow-hidden rounded-[3rem] border border-cyan-300/14 bg-black/35 p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <motion.div style={{ x: beamX }} className="absolute top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,210,255,.10),transparent)] blur-xl" />
        <div className="relative grid auto-rows-fr gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {industries.map((industry, index) => {
            const Icon = industry[0];
            return (
              <Reveal key={industry[1]} delay={index * 0.035} className="h-full">
                <motion.div whileHover={{ y: -10, scale: 1.04 }} className="flex h-full min-h-[170px] flex-col items-center justify-center rounded-[1.7rem] border border-cyan-300/14 bg-white/[0.035] p-5 text-center backdrop-blur-xl">
                  <Icon className="text-cyan-200" size={32} />
                  <p className="mt-4 text-sm font-black uppercase tracking-[.08em] text-white/72">{industry[1]}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClientOutcomesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.72, 1.2, 0.9]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-30, 120]);
  const leftShift = useTransform(scrollYProgress, [0, 1], [-40, 45]);
  const rightShift = useTransform(scrollYProgress, [0, 1], [45, -40]);

  return (
    <section id="seo" ref={ref} className="mx-auto max-w-7xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] border border-cyan-300/16 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl md:p-10">
          <motion.div style={{ scale: orbScale, rotate: orbRotate }} className="absolute -right-20 top-12 h-80 w-80 rounded-[4rem] border border-cyan-300/16 bg-cyan-300/10 shadow-[0_0_100px_rgba(0,210,255,.12)]" />
          <motion.div style={{ x: leftShift }} className="absolute bottom-10 left-10 h-28 w-28 rounded-full border border-blue-400/18 bg-blue-400/10 shadow-[0_0_75px_rgba(0,90,255,.16)]" />

          <div className="relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[.5em] text-cyan-300">What clients need</p>
              <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-.07em] md:text-7xl">Digital work that solves real business problems.</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">
                Clients do not only need a beautiful website. They need visibility, trust, leads, automation, content, reporting, and a digital system that supports business growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {clientNeeds.map((item, index) => (
                <motion.article
                  key={item[0]}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045, duration: 0.62 }}
                  whileHover={{ y: -8, scale: 1.025 }}
                  className="min-h-[210px] rounded-[2rem] border border-cyan-300/14 bg-black/35 p-5 backdrop-blur-xl"
                >
                  <p className="text-xl font-black tracking-[-.03em] text-cyan-100">{item[0]}</p>
                  <p className="mt-4 leading-7 text-white/58">{item[1]}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ImmersiveScrollObjects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const centerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1.3, 0.72]);
  const centerRotate = useTransform(scrollYProgress, [0, 1], [-50, 160]);
  const frontScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1.12, 0.86]);
  const panelLeft = useTransform(scrollYProgress, [0, 1], [-100, 80]);
  const panelRight = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const panelUp = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28" ref={ref}>
      <div className="relative min-h-[780px] overflow-hidden rounded-[3.2rem] border border-cyan-300/14 bg-black/35 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <motion.div style={{ scale: centerScale, rotate: centerRotate }} className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-cyan-300/20 bg-[conic-gradient(from_120deg,rgba(0,210,255,.2),rgba(0,50,255,.12),rgba(0,255,220,.16),rgba(0,210,255,.2))] shadow-[0_0_140px_rgba(0,210,255,.15)]" />
        <motion.div style={{ x: panelLeft, y: panelUp }} className="absolute left-10 top-16 h-36 w-36 rounded-[2rem] border border-cyan-300/18 bg-cyan-300/10 shadow-[0_0_90px_rgba(0,210,255,.16)]" />
        <motion.div style={{ x: panelRight }} className="absolute right-12 top-24 h-28 w-52 rounded-[2rem] border border-blue-400/18 bg-blue-400/10 shadow-[0_0_90px_rgba(0,90,255,.16)]" />
        <motion.div style={{ x: panelRight, y: panelUp }} className="absolute bottom-16 right-16 h-40 w-40 rounded-full border border-cyan-200/18 bg-white/5 shadow-[0_0_80px_rgba(0,210,255,.12)]" />

        <div className="relative z-10 grid min-h-[710px] items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase tracking-[.55em] text-cyan-300">Interactive digital engine</p>
              <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-.07em] md:text-7xl">Scroll. Zoom. Reveal. Convert.</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">
                The website experience should feel alive: objects move with scroll, panels come closer, service stories reveal clearly, and every interaction guides the client toward enquiry.
              </p>
            </div>
          </Reveal>

          <motion.div style={{ scale: frontScale }} className="grid gap-5 sm:grid-cols-2">
            {[
              [Crosshair, "Strategy Layer", "Clear positioning, business goals, and digital roadmap."],
              [Code2, "Build Layer", "Websites, apps, integrations, and automation systems."],
              [Megaphone, "Growth Layer", "Marketing campaigns, content, SEO, and social visibility."],
              [BarChart3, "Report Layer", "Dashboards, analytics, conversion tracking, and optimization."],
            ].map((item, index) => {
              const Icon = item[0];
              return (
                <motion.article
                  key={item[1]}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -10, scale: 1.04, rotate: index % 2 ? -1 : 1 }}
                  className="min-h-[245px] rounded-[2rem] border border-cyan-300/16 bg-white/[0.06] p-6 backdrop-blur-2xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                    <Icon className="text-cyan-200" size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-[-.035em] text-cyan-100">{item[1]}</h3>
                  <p className="mt-3 leading-7 text-white/58">{item[2]}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] border border-cyan-300/18 bg-white p-7 text-black shadow-[0_0_160px_rgba(0,210,255,.12)] md:p-12">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-blue-400 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[.35em] text-black/45">Contact</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.08em] md:text-8xl">Let’s build future-ready digital growth.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/62">Dubai, UAE • info@voltrazn.com • www.voltrazn.com</p>
            </div>

            <div className="rounded-[2rem] bg-black p-6 text-white shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2 className="text-cyan-300" />
                <span className="font-bold">Project starter</span>
              </div>
              <div className="space-y-4 text-white/62">
                <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-cyan-300" size={20} /> Digital strategy, website, application, automation, marketing, or analytics project.</p>
                <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-cyan-300" size={20} /> Futuristic company-profile-inspired interface with premium scroll animations.</p>
                <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-cyan-300" size={20} /> SEO, GEO, performance, reporting, and lead-generation ready structure.</p>
              </div>
              <a href="mailto:info@voltrazn.com?subject=New Project Inquiry" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-4 font-black text-black transition hover:scale-[1.02]">
                info@voltrazn.com <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020611] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_5%,rgba(0,140,255,.25),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(0,255,226,.13),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(0,84,255,.18),transparent_36%),linear-gradient(180deg,#020611,#061329_48%,#020611)]" />

      <nav className="fixed left-1/2 top-4 z-50 flex w-[min(1180px,calc(100%-28px))] -translate-x-1/2 items-center justify-between rounded-full border border-cyan-300/18 bg-black/70 px-4 py-3 shadow-[0_0_60px_rgba(0,210,255,.12)] backdrop-blur-2xl">
        <a href="#home" aria-label="Voltrazn home">
          <CyberLogo compact />
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/68 md:flex">
          <a href="#about" className="hover:text-cyan-200">About</a>
          <a href="#services" className="hover:text-cyan-200">Services</a>
          <a href="#process" className="hover:text-cyan-200">Process</a>
          <a href="#why" className="hover:text-cyan-200">Why</a>
          <a href="#contact" className="hover:text-cyan-200">Contact</a>
        </div>
        <a href="#contact" className="group rounded-full bg-white px-4 py-2 text-sm font-black text-black transition hover:scale-105">
          Start Project <ArrowUpRight className="ml-1 inline transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
        </a>
      </nav>

      <Hero />

      <section className="relative border-y border-cyan-300/12 bg-white/[0.025] py-6 backdrop-blur-xl">
        <motion.div animate={{ x: [0, -980] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex w-max gap-8 text-sm font-black uppercase tracking-[.28em] text-cyan-200/55">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index}>Digital Strategy ✦ Websites ✦ Web Apps ✦ Mobile Apps ✦ AI Applications ✦ ERP/CRM ✦ API Automation ✦ Analytics ✦ Marketing ✦ Content ✦</span>
          ))}
        </motion.div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <HologramStrip />
      <ServicesSection />
      <ScrollExperience />
      <ProcessSection />
      <WhySection />
      <IndustriesSection />
      <ClientOutcomesSection />
      <ImmersiveScrollObjects />
      <ContactSection />

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-cyan-300/12 px-5 py-8 text-sm text-white/45 md:flex-row">
        <p>© 2026 Voltrazn. Future-ready digital growth, AI, and technology solutions.</p>
        <p className="flex items-center gap-2"><MapPin size={15} /> Dubai, UAE · info@voltrazn.com · www.voltrazn.com</p>
      </footer>
    </main>
  );
}
