import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Binary,
  Building2,
  Cable,
  CircuitBoard,
  Cpu,
  Facebook,
  Gauge,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  PanelsTopLeft,
  Plus,
  RadioTower,
  SlidersHorizontal,
  Twitter,
  X,
  Youtube
} from "lucide-react";
import heroEngineeringModule from "./assets/hero-engineering-module.webp";
import serviceElectronics from "./assets/icon-service-electronics.webp";
import serviceEmbedded from "./assets/icon-service-embedded.webp";
import serviceAutomation from "./assets/icon-service-automation.webp";
import servicePcb from "./assets/icon-service-pcb.webp";
import serviceProductDevelopment from "./assets/icon-service-product-development.webp";
import serviceEngineeringSupport from "./assets/icon-service-engineering-support.webp";
import industryManufacturing from "./assets/icon-industry-manufacturing.webp";
import industryIot from "./assets/icon-industry-iot.webp";
import industryEnergy from "./assets/icon-industry-energy.webp";
import industryHealthcare from "./assets/icon-industry-healthcare.webp";
import industryResearch from "./assets/icon-industry-research.webp";
import processDiscover from "./assets/icon-process-discover.webp";
import processDesign from "./assets/icon-process-design.webp";
import processBuild from "./assets/icon-process-build.webp";
import processValidate from "./assets/icon-process-validate.webp";
import caseStudyLeadGeneration from "./assets/case-study-lead-generation.webp";
import caseStudySupportAgent from "./assets/case-study-support-agent.webp";
import caseStudyWorkflow from "./assets/case-study-workflow.webp";
import enduraMark from "./assets/endura-mark.png";
import enduraWordmark from "./assets/endura-wordmark.png";
import enduraLockup from "./assets/endura-lockup.png";

const navigation = ["About", "Services", "Case Studies", "News"];

const frictionPoints = [
  {
    number: "01",
    title: "Hardware needs direction",
    description: "Clear architecture and component choices turn ideas into reliable electronics."
  },
  {
    number: "02",
    title: "Firmware needs a foundation",
    description: "Hardware-aware firmware turns designs into reliable embedded systems."
  },
  {
    number: "03",
    title: "Systems must work together",
    description: "Connected controls, software, and people turn complex operations into dependable systems."
  }
];

const services = [
  {
    icon: serviceElectronics,
    title: "Electronics Hardware Design",
    description: "Custom electronic systems designed around your product, performance requirements, and production goals.",
    outcome: "Outcome: Build ready hardware."
  },
  {
    icon: serviceEmbedded,
    title: "Embedded Systems & Firmware",
    description: "Embedded software and firmware for microcontrollers, connected devices, sensors, and control systems.",
    outcome: "Outcome: Reliable embedded systems."
  },
  {
    icon: serviceAutomation,
    title: "Industrial Automation",
    description: "Automation solutions for machinery, workflows, monitoring, controls, and industrial operations.",
    outcome: "Outcome: Smarter industrial operations."
  },
  {
    icon: servicePcb,
    title: "PCB Design & Prototyping",
    description: "Schematic capture, PCB layout, component selection, design review, and prototype support.",
    outcome: "Outcome: Production ready PCB design."
  },
  {
    icon: serviceProductDevelopment,
    title: "Product Development Engineering",
    description: "Technical support from concept validation through design, prototyping, testing, and refinement.",
    outcome: "Outcome: Practical product development."
  },
  {
    icon: serviceEngineeringSupport,
    title: "Freelance Engineering Support",
    description: "Flexible specialist engineering capacity for defined technical tasks or ongoing development work.",
    outcome: "Outcome: Flexible engineering support."
  }
];

const industries = [
  {
    number: "001",
    iconClass: "manufacturing",
    icon: industryManufacturing,
    title: "Industrial & Manufacturing",
    description: "Automation, monitoring, controls, and systems for demanding operational environments."
  },
  {
    number: "002",
    iconClass: "iot",
    icon: industryIot,
    title: "Smart Devices & IoT",
    description: "Connected electronics, sensors, embedded firmware, and device-level intelligence."
  },
  {
    number: "003",
    iconClass: "energy",
    icon: industryEnergy,
    title: "Energy & Utilities",
    description: "Monitoring, control, and hardware systems for efficiency, visibility, and reliability."
  },
  {
    number: "004",
    iconClass: "healthcare",
    icon: industryHealthcare,
    title: "Healthcare & Instrumentation",
    description: "Custom electronics and embedded systems for precise, purpose-built equipment."
  },
  {
    number: "005",
    iconClass: "research",
    icon: industryResearch,
    title: "Research, R&D & Startups",
    description: "Engineering support to validate ideas, prototype faster, and move toward a viable product."
  }
];

const stackTools = ["MCUs", "Sensors", "PLC / HMI", "Industrial I/O", "PCB CAD", "Firmware", "IoT", "Controls"];

const processSteps = [
  {
    title: "Discover",
    slug: "discover",
    icon: processDiscover,
    description: [
      "We understand your idea, technical requirements,",
      "operating environment, constraints, and desired outcome."
    ]
  },
  {
    title: "Design",
    slug: "design",
    icon: processDesign,
    description: [
      "We define the system architecture, electronics, firmware,",
      "components, and a practical implementation plan."
    ]
  },
  {
    title: "Build",
    slug: "build",
    icon: processBuild,
    description: [
      "We develop, prototype, integrate, and test the solution",
      "in focused stages with clear technical progress."
    ]
  },
  {
    title: "Validate & Refine",
    slug: "validate",
    icon: processValidate,
    description: [
      "We verify performance, resolve issues, refine the design,",
      "and prepare the system for its next stage."
    ]
  }
];

const caseStudies = [
  {
    metric: "Representative Project",
    industry: "Industrial Automation",
    service: "Embedded Systems",
    title: "Smart machine monitoring for clearer operational insight.",
    image: caseStudyLeadGeneration,
    imageAlt: "Representative engineering project visualization"
  },
  {
    metric: "Representative Project",
    industry: "Connected Devices",
    service: "PCB Design",
    title: "An environmental monitoring device built around real data.",
    image: caseStudySupportAgent,
    imageAlt: "Representative engineering project visualization"
  },
  {
    metric: "Representative Project",
    industry: "Industrial Controls",
    service: "Development Engineering",
    title: "A custom control panel designed around the operation.",
    image: caseStudyWorkflow,
    imageAlt: "Representative engineering project visualization"
  }
];

const results = [
  { value: "01", suffix: "", label: "Concept through validation" },
  { value: "02", suffix: "", label: "Hardware and firmware together" },
  { value: "03", suffix: "", label: "Designed for real environments" },
  { value: "04", suffix: "", label: "Project or ongoing support" }
];

const testimonials = [
  {
    name: "Practical by design",
    role: "Engineering principle",
    quote: "We focus on solutions that can be built, tested, maintained, and used in the real world.",
    initials: "PD"
  },
  {
    name: "Clear technical communication",
    role: "Engineering principle",
    quote: "Complex engineering decisions are explained clearly, so you stay confident throughout the project.",
    initials: "CT"
  },
  {
    name: "End-to-end thinking",
    role: "Engineering principle",
    quote: "Hardware, firmware, automation, and integration are considered together, not as disconnected parts.",
    initials: "ET"
  },
  {
    name: "Flexible project support",
    role: "Engineering principle",
    quote: "From a focused technical task to ongoing development support, we scale around what your project needs.",
    initials: "FS"
  }
];

const engagements = [
  {
    name: "Concept & Feasibility",
    term: "Custom scope",
    description: "Validate your idea, clarify requirements, identify risks, and create a practical technical roadmap.",
    features: ["Requirements review", "Technical feasibility", "Risk identification", "Development roadmap"],
    cta: "Start a Discovery Call",
    subject: "Concept and Feasibility"
  },
  {
    name: "Design & Development",
    term: "Custom scope",
    description: "Build your electronics, PCB, embedded firmware, automation system, or engineering prototype.",
    features: ["Hardware & firmware design", "PCB & prototype support", "Integration & testing", "Technical progress reviews"],
    cta: "Request a Quote",
    subject: "Design and Development"
  },
  {
    name: "Freelance Engineering Support",
    term: "Flexible engagement",
    description: "Add specialist technical capacity to your team for a defined task or ongoing delivery.",
    features: ["Focused technical support", "Embedded engineering capacity", "Project-based delivery", "Ongoing development help"],
    cta: "Discuss Support",
    subject: "Freelance Engineering Support"
  }
];

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer: "We support electronics hardware, embedded systems, PCB design, industrial automation, product development, and focused engineering tasks."
  },
  {
    question: "Do you only design PCBs?",
    answer: "No. PCB design is one part of our work. We can also support the surrounding hardware, embedded firmware, integration, testing, and development process."
  },
  {
    question: "Can you work with an existing design?",
    answer: "Yes. We can review, improve, troubleshoot, extend, or take over an existing hardware or embedded system project."
  },
  {
    question: "Do you provide embedded firmware development?",
    answer: "Yes. We develop embedded firmware for microcontrollers, sensors, connected devices, automation systems, and custom electronics."
  },
  {
    question: "Can you support industrial automation projects?",
    answer: "Yes. We can help with industrial controls, monitoring, system integration, automation logic, and purpose-built engineering solutions."
  },
  {
    question: "How do we begin?",
    answer: "Start with a conversation about your project, goals, constraints, and current stage. We will recommend the most practical next step."
  }
];

const contactFaqs = [
  {
    question: "What kind of projects can I contact you about?",
    answer: "You can contact us about electronics hardware, PCB design, embedded systems, industrial automation, prototypes, product development, and freelance engineering support."
  },
  {
    question: "Can you work with an existing prototype or design?",
    answer: "Yes. We can review, improve, troubleshoot, extend, or help complete an existing hardware or embedded system project."
  },
  {
    question: "Do you offer freelance engineering support?",
    answer: "Yes. We can provide focused specialist support for a defined task or flexible ongoing engineering capacity for your team."
  },
  {
    question: "How do you scope a project?",
    answer: "We begin by understanding the goal, technical requirements, constraints, and current stage. From there, we recommend a practical scope and next step."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We are happy to review and sign a mutual NDA before discussing sensitive product, hardware, engineering, or business details."
  },
  {
    question: "Can you work with teams remotely?",
    answer: "Yes. We can work remotely and coordinate around your project, systems, documentation, and review process."
  }
];

const footerColumns = [
  {
    title: "Services",
    links: [
      ["Electronics Hardware", "#services"],
      ["Embedded Systems", "#services"],
      ["Industrial Automation", "#services"],
      ["PCB Design", "#services"],
      ["Engineering Support", "#services"]
    ]
  },
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Case Studies", "#case-studies"],
      ["Contact", "/contact"],
      ["Services", "#services"]
    ]
  },
  {
    title: "Resources",
    links: [
      ["Project Discovery", "/contact"],
      ["Engineering Support", "#services"],
      ["Technology Stack", "#stack"],
      ["FAQ", "#faq"]
    ]
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "#news"],
      ["Terms of Service", "#news"],
      ["Cookie Policy", "#news"]
    ]
  }
];

function StackLogo({ name }) {
  const icons = {
    MCUs: Cpu,
    Sensors: Gauge,
    "PLC / HMI": PanelsTopLeft,
    "Industrial I/O": Cable,
    "PCB CAD": CircuitBoard,
    Firmware: Binary,
    IoT: RadioTower,
    Controls: SlidersHorizontal
  };
  const Icon = icons[name];

  return (
    <div className={`stack-logo stack-logo--${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} aria-label={name}>
      <Icon className="stack-logo__mark" aria-hidden="true" strokeWidth={1.7} />
      <span>{name}</span>
    </div>
  );
}

function BrandIcon({ compact = false }) {
  return (
    <img
      className={`brand-icon${compact ? " brand-icon--compact" : ""}`}
      src={enduraMark}
      alt=""
      aria-hidden="true"
    />
  );
}

function BrandIdentity({ footer = false }) {
  if (footer) {
    return <img className="brand-lockup" src={enduraLockup} alt="Endura Logics" />;
  }

  return (
    <>
      <img className="brand__mark" src={enduraMark} alt="" aria-hidden="true" />
      <img className="brand__wordmark" src={enduraWordmark} alt="Endura Logics" />
    </>
  );
}

function BootLoader({ state }) {
  if (state === "is-hidden") return null;

  return (
    <div className={`boot-loader ${state}`} role="status" aria-label="Loading Endura Logics">
      <div className="boot-loader__brand" aria-hidden="true">
        <img src={enduraMark} alt="" />
        <img src={enduraWordmark} alt="" />
      </div>
      <span className="boot-loader__line" aria-hidden="true" />
    </div>
  );
}

function BrandMark({ variant = 0 }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" rx="7" />
        <circle cx="14" cy="14" r="7" fill="#171310" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="3" />
        {Array.from({ length: 12 }, (_, index) => (
          <rect key={index} x="13" y="1" width="2" height="7" rx="1" transform={`rotate(${index * 30} 14 14)`} />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 6h20l-3 5H7L4 6Zm3 7h14l-3 5H10l-3-5Zm3 7h8l-4 5-4-5Z" />
    </svg>
  );
}

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openContactFaq, setOpenContactFaq] = useState(-1);

  useEffect(() => {
    document.title = "Contact Endura Logics — Start a Project";
    return () => {
      document.title = "Endura Logics — Engineering systems for the real world";
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const submitContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Endura Logics project inquiry — ${data.get("company") || data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Work email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Exploring: ${data.get("interest")}`,
      "",
      data.get("message")
    ].join("\n");
    window.location.href = `mailto:info@enduralogics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="site-shell contact-page">
      <header className="topbar contact-topbar">
        <a className="brand" href="/" aria-label="Endura Logics home">
          <BrandIdentity />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item} href={`/#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact-form">
          <span>Start a Project</span>
          <BrandIcon compact />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
            ))}
            <a href="#contact-form" onClick={() => setMenuOpen(false)}>Start a Project</a>
          </nav>
        )}
      </header>

      <section className="contact-hero" id="top">
        <div className="contact-hero__inner">
          <article className="contact-intro">
            <div>
              <p className="eyebrow">START A PROJECT</p>
              <h1>Let’s turn your idea into a working system.</h1>
              <p className="contact-intro__lede">Tell us about your product, hardware challenge, embedded system, or automation requirement.</p>

              <div className="contact-booking">
                <img className="contact-booking__mark" src={enduraMark} alt="" aria-hidden="true" />
                <div>
                  <a className="button button--secondary" href="mailto:info@enduralogics.com?subject=Project%20Discovery%20Call">
                    <span>Project Discovery Call</span>
                    <BrandIcon compact />
                  </a>
                  <p>A focused conversation about your idea, requirements, and the best next step.</p>
                </div>
              </div>
            </div>

            <div className="contact-trust">
              <div className="contact-trust__socials" aria-label="Social links">
                <a href="#news" aria-label="Endura Logics on LinkedIn"><Linkedin size={19} strokeWidth={1.8} /></a>
                <a href="#news" aria-label="Endura Logics on Facebook"><Facebook size={19} strokeWidth={1.8} /></a>
                <a href="#news" aria-label="Endura Logics on Instagram"><Instagram size={19} strokeWidth={1.8} /></a>
                <a href="#news" aria-label="Endura Logics on Twitter"><Twitter size={19} strokeWidth={1.8} /></a>
              </div>
              <p>Practical engineering support for product teams, manufacturers, and ambitious founders through every stage of development.</p>
              <div aria-label="Selected clients">
                <span className="client-logo"><b>Hardware</b></span>
                <span className="client-logo"><b>Firmware</b></span>
                <span className="client-logo"><b>Automation</b></span>
              </div>
            </div>
          </article>

          <section className="contact-form-card" id="contact-form" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Tell us a bit about your project.</h2>
            <form onSubmit={submitContact}>
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
              </label>
              <label>
                <span>Work Email</span>
                <input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
              </label>
              <label>
                <span>Company</span>
                <input name="company" type="text" placeholder="yourcompany.com" autoComplete="organization" required />
              </label>
              <label>
                <span>What do you need help with?</span>
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>Select...</option>
                  <option>Electronics hardware design</option>
                  <option>Embedded systems &amp; firmware</option>
                  <option>Industrial automation</option>
                  <option>PCB design &amp; prototyping</option>
                  <option>Product development engineering</option>
                  <option>Freelance engineering support</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                <span>Tell us more</span>
                <textarea name="message" placeholder="What are you building, improving, or trying to automate?" required />
              </label>
              <button className="contact-form__submit" type="submit">Send Message</button>
            </form>
            <p className="contact-form__note">We respond within 1 business day with a real technical conversation,<br className="desktop-break" /> not an automated sales sequence.</p>
          </section>
        </div>
      </section>

      <section className="contact-details" aria-label="Contact details">
        <div className="contact-details__frame">
          <span className="contact-details__dots" aria-hidden="true" />
          <i className="contact-details__marker contact-details__marker--top-left" aria-hidden="true" />
          <i className="contact-details__marker contact-details__marker--top-right" aria-hidden="true" />
          <i className="contact-details__marker contact-details__marker--bottom-left" aria-hidden="true" />
          <i className="contact-details__marker contact-details__marker--bottom-right" aria-hidden="true" />

          <article>
            <Mail aria-hidden="true" />
            <h2>Email &amp; Enquiries</h2>
            <a href="mailto:info@enduralogics.com">info@enduralogics.com</a>
          </article>
          <article>
            <Building2 aria-hidden="true" />
            <h2>Engineering Support</h2>
            <p>Remote and onsite by project</p>
          </article>
          <article>
            <Handshake aria-hidden="true" />
            <h2>Projects &amp; Partnerships</h2>
            <a href="mailto:info@enduralogics.com">info@enduralogics.com</a>
          </article>
        </div>
      </section>

      <section className="contact-faq" id="faq">
        <div className="contact-faq__inner">
          <div className="contact-faq__intro">
            <p className="eyebrow">Common questions, answered.</p>
            <h2>Questions you<br className="desktop-break" /> might be asking.</h2>
          </div>

          <div className="contact-faq__list">
            {contactFaqs.map((faq, index) => {
              const isOpen = index === openContactFaq;
              const answerId = `contact-faq-answer-${index}`;
              return (
                <article className={`contact-faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenContactFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <Plus className="faq-toggle-icon" aria-hidden="true" strokeWidth={1.8} />
                  </button>
                  <div className="contact-faq-item__answer" id={answerId} aria-hidden={!isOpen}>
                    <div><p>{faq.answer}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer contact-footer" id="news">
        <div className="site-footer__inner">
          <h2>Engineering systems for the real world.</h2>
          <div className="site-footer__links">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={`${column.title} links`}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map(([label, href]) => {
                    const contactHref = href.startsWith("#") ? `/${href}` : href;
                    return <li key={label}><a href={contactHref}>{label}</a></li>;
                  })}
                </ul>
              </nav>
            ))}
          </div>
          <div className="site-footer__meta">
            <p>© 2026 Endura Logics. All rights reserved.</p>
            <div className="site-footer__socials" aria-label="Social links">
              <a href="#news" aria-label="Endura Logics on LinkedIn"><Linkedin size={19} strokeWidth={1.8} /></a>
              <a href="#news" aria-label="Endura Logics on Facebook"><Facebook size={19} strokeWidth={1.8} /></a>
              <a href="#news" aria-label="Endura Logics on YouTube"><Youtube size={21} strokeWidth={1.8} /></a>
            </div>
          </div>
        </div>
        <a className="footer-brand" href="#top" aria-label="Endura Logics — back to the top"><BrandIdentity footer /></a>
      </footer>
    </main>
  );
}

export default function App() {
  const initialRoute = window.location.pathname.replace(/\/+$/, "") || "/";
  const [route, setRoute] = useState(initialRoute);
  const [pagePhase, setPagePhase] = useState("is-booting");
  const [bootState, setBootState] = useState("is-active");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const routeRef = useRef(initialRoute);
  const transitionTimerRef = useRef();

  const revealDestination = useCallback((url) => {
    requestAnimationFrame(() => {
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "auto", block: "start" });
      } else {
        window.scrollTo(0, 0);
      }

      requestAnimationFrame(() => setPagePhase("is-visible"));
    });
  }, []);

  const navigate = useCallback((url, { replace = false } = {}) => {
    const nextRoute = url.pathname.replace(/\/+$/, "") || "/";
    const nextLocation = `${url.pathname}${url.search}${url.hash}`;

    if (nextRoute === routeRef.current) {
      if (replace) window.history.replaceState({}, "", nextLocation);
      else window.history.pushState({}, "", nextLocation);
      if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.clearTimeout(transitionTimerRef.current);
    setMenuOpen(false);
    setPagePhase("is-leaving");

    transitionTimerRef.current = window.setTimeout(() => {
      if (replace) window.history.replaceState({}, "", nextLocation);
      else window.history.pushState({}, "", nextLocation);
      routeRef.current = nextRoute;
      setRoute(nextRoute);
      setPagePhase("is-entering");
      revealDestination(url);
    }, 240);
  }, [revealDestination]);

  useEffect(() => {
    const beginReveal = window.setTimeout(() => {
      setBootState("is-leaving");
      setPagePhase("is-visible");
    }, 520);
    const finishReveal = window.setTimeout(() => setBootState("is-hidden"), 900);

    return () => {
      window.clearTimeout(beginReveal);
      window.clearTimeout(finishReveal);
    };
  }, []);

  useEffect(() => {
    const handleInternalNavigation = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      const destinationRoute = url.pathname.replace(/\/+$/, "") || "/";
      if (url.origin !== window.location.origin || !["/", "/contact"].includes(destinationRoute)) return;

      event.preventDefault();
      navigate(url);
    };

    const handlePopState = () => navigate(new URL(window.location.href), { replace: true });
    document.addEventListener("click", handleInternalNavigation);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleInternalNavigation);
      window.removeEventListener("popstate", handlePopState);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, [navigate]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "start" }));
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const selectors = [
      ".hero__copy", ".hero__visual", ".trust-strip",
      ".friction__intro", ".friction-card",
      ".services__intro", ".service", ".services__cta",
      ".industries__intro", ".industry-row",
      ".stack-section__intro", ".stack-logo",
      ".process__header", ".process__carousel",
      ".case-studies__intro", ".case-study", ".case-studies__cta",
      ".testimonials__intro", ".testimonial", ".results-strip",
      ".engagements__intro", ".engagement",
      ".faq__intro", ".faq-item",
      ".final-cta__content", ".site-footer__inner", ".footer-brand",
      ".contact-intro", ".contact-form-card", ".contact-details article",
      ".contact-faq__intro", ".contact-faq-item"
    ];
    const revealables = [...document.querySelectorAll(selectors.join(","))];
    const groupedItems = new Map();

    revealables.forEach((element) => {
      const siblings = groupedItems.get(element.parentElement) || [];
      siblings.push(element);
      groupedItems.set(element.parentElement, siblings);
    });

    document.documentElement.classList.add("motion-ready");
    revealables.forEach((element) => {
      const position = groupedItems.get(element.parentElement).indexOf(element);
      element.classList.add("js-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(position * 70, 210)}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      revealables.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -7%" });

    revealables.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [route]);

  useEffect(() => {
    if (route === "/contact") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveProcessStep((current) => (current + 1) % processSteps.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [route]);

  useEffect(() => {
    if (route === "/contact" || isTestimonialPaused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [route, isTestimonialPaused, activeTestimonial]);

  const moveProcess = (direction) => {
    setActiveProcessStep((current) => (current + direction + processSteps.length) % processSteps.length);
  };

  const moveTestimonial = (direction) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  if (route === "/contact") {
    return (
      <>
        <BootLoader state={bootState} />
        <div className={`page-transition ${pagePhase}`}>
          <ContactPage />
        </div>
      </>
    );
  }

  return (
    <>
      <BootLoader state={bootState} />
      <div className={`page-transition ${pagePhase}`}>
        <main className="site-shell">
      <div className="dot-column" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Endura Logics home">
          <BrandIdentity />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
          ))}
        </nav>

        <a className="nav-cta" href="/contact">
          <span>Start a Project</span>
          <BrandIcon compact />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a href="/contact">Start a Project</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">ENGINEERING &amp; INDUSTRIAL SOLUTIONS</p>
            <h1>Engineered to move<br />ideas into reality.</h1>
            <p className="hero__lede">
              Endura Logics delivers electronics, embedded systems, and<br className="desktop-break" />{" "}
              industrial automation solutions from concept and design through<br className="desktop-break" />{" "}
              prototyping, integration, and validation.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="/contact">
                <span>Discuss Your Project</span>
              </a>
              <a className="button button--secondary" href="#services">
                <span>Explore Our Services</span>
                <BrandIcon compact />
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <img src={heroEngineeringModule} alt="" />
          </div>
        </div>

        <div className="trust-strip" id="how-it-works">
          <p>Engineering support for product teams, manufacturers, and ambitious founders.</p>
          <div className="client-logos" aria-label="Endura Logics capabilities">
            {['Hardware', 'Firmware', 'Automation'].map((capability) => (
              <span className="client-logo" key={capability}><b>{capability}</b></span>
            ))}
          </div>
        </div>
      </section>

      <section className="friction" id="about">
        <div className="friction__intro">
          <p className="eyebrow">THE ENGINEERING GAP</p>
          <h2>Complex ideas need practical execution.</h2>
          <p>A strong idea is only the starting point. We bring hardware, firmware, automation,<br className="desktop-break" />{" "}and engineering expertise together to build systems that work reliably in the real world.</p>
        </div>

        <div className="friction__grid">
          {frictionPoints.map((point) => (
            <article className="friction-card" key={point.number}>
              <h3>{point.title}</h3>
              <div className="hex-number" aria-hidden="true">
                <span>{point.number}</span>
              </div>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services__intro">
          <p className="eyebrow">SERVICES</p>
          <h2>Engineering built around your requirements.</h2>
          <p>From focused technical tasks to complete systems, we provide practical engineering support at every stage of development.</p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <div className="service__icon" aria-hidden="true">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>{service.outcome}</span>
            </article>
          ))}
        </div>

        <a className="button button--primary services__cta" href="/contact">
          <span>Discuss Services</span>
          <BrandIcon compact />
        </a>
      </section>

      <section className="industries" id="industries">
        <div className="industries__intro">
          <div>
            <p className="eyebrow">INDUSTRIES WE SUPPORT</p>
            <h2>Built for systems that need to work.</h2>
          </div>
          <p>
            From connected products to industrial environments,<br className="desktop-break" />{" "}
            we build dependable engineering solutions around<br className="desktop-break" />{" "}
            the demands of your operation.
          </p>
        </div>

        <div className="industry-list">
          {industries.map((industry) => (
            <article className="industry-row" key={industry.number}>
              <span className="industry-row__number">{industry.number}</span>
              <div className="industry-row__copy">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
              <div className={`industry-row__icon industry-row__icon--${industry.iconClass}`} aria-hidden="true">
                <img src={industry.icon} alt="" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="stack-section__intro">
          <p className="eyebrow">YOUR STACK, CONNECTED</p>
          <h2>Designed around your technical stack.</h2>
          <p>
            We work across electronics, firmware, automation, and integration—selecting<br className="desktop-break" />{" "}
            the right tools for the job rather than forcing a one-size-fits-all solution.
          </p>
        </div>

        <div className="stack-logos" aria-label="Supported platforms">
          {stackTools.map((tool) => <StackLogo name={tool} key={tool} />)}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process__sticky">
          <div className="process__header">
            <p className="eyebrow">OUR PROCESS</p>
            <h2>From concept to working system.</h2>
            <p>A clear engineering process that keeps your project focused,<br className="desktop-break" />{" "}technically sound, and moving forward.</p>
          </div>

          <div className="process__arc" aria-hidden="true" />

          <div
            className="process__carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Endura Logics delivery process"
            tabIndex="0"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") moveProcess(-1);
              if (event.key === "ArrowRight") moveProcess(1);
            }}
          >
            <div className="process__steps" aria-live="polite">
              <div className="process__track" style={{ transform: `translate3d(-${activeProcessStep * 100}%, 0, 0)` }}>
                {processSteps.map((step, index) => (
                  <article
                    className={`process-step process-step--${step.slug}`}
                    aria-hidden={index !== activeProcessStep}
                    aria-label={`${index + 1} of ${processSteps.length}: ${step.title}`}
                    key={step.title}
                  >
                    <div className="process-step__icon" aria-hidden="true">
                      <img src={step.icon} alt="" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>
                      {step.description.map((line, lineIndex) => (
                        <React.Fragment key={line}>
                          {lineIndex > 0 && <><br className="desktop-break" />{" "}</>}
                          {line}
                        </React.Fragment>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="process__controls">
              <div className="process__pagination" aria-label="Choose a process step">
                {processSteps.map((step, index) => (
                  <button
                    type="button"
                    className={index === activeProcessStep ? "is-active" : ""}
                    aria-label={`Show ${step.title}`}
                    aria-current={index === activeProcessStep ? "step" : undefined}
                    onClick={() => setActiveProcessStep(index)}
                    key={step.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies" id="case-studies">
        <div className="case-studies__intro">
          <p className="eyebrow">ENGINEERING IN PRACTICE</p>
          <h2>Built for real-world requirements.</h2>
          <p>Representative examples of the kinds of systems and engineering<br className="desktop-break" />{" "}challenges Endura Logics can support.</p>
        </div>

        <div className="case-study-list">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.title}>
              <div className="case-study__copy">
                <span className="case-study__metric">{study.metric}</span>
                <p className="case-study__meta">
                  <span>{study.industry}</span>
                  <i aria-hidden="true">•</i>
                  <span>{study.service}</span>
                </p>
                <h3>{study.title}</h3>
                <a className="button button--secondary case-study__button" href="/contact">
                  <span>Discuss Project</span>
                  <BrandIcon compact />
                </a>
              </div>

              <div className="case-study__visual">
                <img src={study.image} alt={study.imageAlt} />
              </div>
            </article>
          ))}
        </div>

        <a className="button button--primary case-studies__cta" href="/contact">
          <span>Start a Project</span>
          <BrandIcon compact />
        </a>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials__intro">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>Engineering built around your requirements.</h2>
          <p>Practical principles that keep the work clear, connected,<br className="desktop-break" />{" "}and focused on the system you need to build.</p>
        </div>

        <div
          className="testimonial"
          onMouseEnter={() => setIsTestimonialPaused(true)}
          onMouseLeave={() => setIsTestimonialPaused(false)}
          onFocusCapture={() => setIsTestimonialPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsTestimonialPaused(false);
          }}
        >
          {(() => {
            const testimonial = testimonials[activeTestimonial];
            return (
              <div className="testimonial__slide" key={testimonial.name} aria-live="polite">
                {testimonial.portrait ? (
                  <img className="testimonial__portrait" src={testimonial.portrait} alt={testimonial.name} />
                ) : (
                  <span className="testimonial__avatar" aria-hidden="true">{testimonial.initials}</span>
                )}

                <figure>
                  <span className="testimonial__quote-mark" aria-hidden="true">&quot;</span>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              </div>
            );
          })()}

          <div className="testimonial__controls" aria-label="Testimonial controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => moveTestimonial(-1)}>←</button>
            <button type="button" aria-label="Next testimonial" onClick={() => moveTestimonial(1)}>→</button>
          </div>
        </div>

        <div className="results-strip">
          {results.map((result) => (
            <div className="result" key={result.label}>
              <p><strong>{result.value}</strong><span>{result.suffix}</span></p>
              <span>{result.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="engagements" id="engagements">
        <div className="engagements__intro">
          <p className="eyebrow">ENGAGEMENT MODELS</p>
          <h2>Engineering support that fits your project.</h2>
          <p>Start with a focused technical need, a complete build, or flexible specialist support.</p>
        </div>

        <div className="engagements__grid">
          <i className="engagements__marker engagements__marker--top-left" aria-hidden="true" />
          <i className="engagements__marker engagements__marker--top-right" aria-hidden="true" />
          <i className="engagements__marker engagements__marker--bottom-left" aria-hidden="true" />
          <i className="engagements__marker engagements__marker--bottom-right" aria-hidden="true" />

          {engagements.map((engagement) => (
            <article className="engagement" key={engagement.name}>
              <div className="engagement__heading">
                <h3>
                  {engagement.name}
                  {engagement.featured && <span className="engagement__star" aria-label="Featured">⭐</span>}
                  {engagement.price}
                </h3>
                <p>{engagement.term}</p>
              </div>

              <p className="engagement__description">{engagement.description}</p>

              <ul>
                {engagement.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <a className="button button--secondary engagement__cta" href={`mailto:info@enduralogics.com?subject=${encodeURIComponent(engagement.subject)}`}>
                <span>{engagement.cta}</span>
                <BrandIcon compact />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq__inner">
          <div className="faq__intro">
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2>Questions you<br className="desktop-break" /> might be asking.</h2>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => {
              const isOpen = index === openFaq;
              const answerId = `faq-answer-${index}`;

              return (
                <article className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <Plus className="faq-toggle-icon" aria-hidden="true" strokeWidth={1.8} />
                  </button>
                  <div className="faq-item__answer" id={answerId} aria-hidden={!isOpen}>
                    <div><p>{faq.answer}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="final-cta__frame">
          <span className="final-cta__marker final-cta__marker--top-left" aria-hidden="true" />
          <span className="final-cta__marker final-cta__marker--top-right" aria-hidden="true" />
          <span className="final-cta__marker final-cta__marker--bottom-left" aria-hidden="true" />
          <span className="final-cta__marker final-cta__marker--bottom-right" aria-hidden="true" />
          <span className="final-cta__arc final-cta__arc--left" aria-hidden="true" />
          <span className="final-cta__arc final-cta__arc--right" aria-hidden="true" />

          <div className="final-cta__content">
            <p className="eyebrow">READY TO BUILD?</p>
            <h2>Let’s build something that works.</h2>
            <p>Tell us what you are developing, improving, or trying to automate. We will help you plan the next technical step.</p>
            <div className="final-cta__actions">
              <a className="button button--primary" href="/contact">
                <span>Discuss Your Project</span>
              </a>
              <a className="button button--secondary" href="#services">
                <span>Explore Services</span>
                <BrandIcon compact />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="news">
        <div className="site-footer__inner">
          <h2>Engineering systems for the real world.</h2>

          <div className="site-footer__links">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={`${column.title} links`}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="site-footer__meta">
            <p>© 2026 Endura Logics. All rights reserved.</p>
            <div className="site-footer__socials" aria-label="Social links">
              <a href="#news" aria-label="Endura Logics on LinkedIn"><Linkedin size={19} strokeWidth={1.8} /></a>
              <a href="#news" aria-label="Endura Logics on Facebook"><Facebook size={19} strokeWidth={1.8} /></a>
              <a href="#news" aria-label="Endura Logics on YouTube"><Youtube size={21} strokeWidth={1.8} /></a>
            </div>
          </div>
        </div>

        <a className="footer-brand" href="#top" aria-label="Endura Logics — back to the top">
          <BrandIdentity footer />
        </a>
      </footer>
        </main>
      </div>
    </>
  );
}
