

import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TabBar from "./components/TabBar";
import Sidebar from "./components/Sidebar";
import SecondNavbar from "./components/SecondNavbar";
import VideoSection from "./components/VideoSection";

import "./App.css";

/* TAB BAR LOGOS */
import logoX from "./assets/11-removebg-preview.png";
import logoV from "./assets/33-removebg-preview.png";
import logoVWhite from "./assets/Penulti__2_-removebg-preview.png";
import logoC from "./assets/44-removebg-preview.png";

/* NAVBAR LOGOS */
import navLogoX from "./assets/22-removebg-preview.png";
import navLogoV from "./assets/33-removebg-preview.png";
import navLogoVWhite from "./assets/Penulti__4_s-removebg-preview.png";
import navLogoC from "./assets/Penulti__10_s-removebg-preview.png";

/* MOBILE LOGOS */
import mobileLogoX from "./assets/Penulti__13_s-removebg-preview.png";
import mobileLogoV from "./assets/ventures1-removebg-preview.png";
import mobileLogoC from "./assets/capitals-removebg-preview.png";
import mobileLogoVWhite from "./assets/Penulti__12_s-removebg-preview.png";

/* ✅ SMALL ICON LOGOS */
import tabIconPX from "./assets/logoPX.png";
import tabIconPV from "./assets/logoPV.png";
import tabIconPC from "./assets/logoPC.png";
import arrowIcon from "./assets/arrow.png";
import arrowIconWhite from "./assets/arrow-white.png";

/* ✅ Capital Hero Image (ADD THIS IMAGE IN src/assets/) */
import capitalHeroImg from "./assets/capital-hero.png";

/* WORK IMAGES */
import imgHaett from "./assets/haett.jpg";
import imgYoNutri from "./assets/yonutri.jpg";
import imgFarmlet from "./assets/farmlet.jpg";
import imgAskNone from "./assets/asknone.jpg";

/* ✅ Pages */
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

/* ✅ Ventures Contact Page */
import VenturesContactPage from "./pages/VenturesContactPage";

/*Capital Images*/
import capitalInfoImg from "./assets/capital-info1.png";
import arrowImg from "./assets/arrow.png";
import CapitalContactPage from "./pages/CapitalContactPage";

import capitalSec2Img from "./assets/capital-info2.png";
import capitalSec3Img from "./assets/capital-info3.png";
import capitalSec4Img from "./assets/capital-info4.png";



import ScrollToTop from "./ScrollToTop";



function App({ initialTab = 0 }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  /* ✅ ONLY FIRST STRIPS CONTAINER REF */
  const venturesStripsRef = useRef(null);

  const sections = [
    {
      title: "Penultimate X",
      navTitle: "Penultimate X",
      tabIcon: tabIconPX,

      logo: logoX,
      logoMobile: mobileLogoX,
      navLogo: navLogoX,

      text:
        "Helping scale-ups and corporates build world-class digital products that are used every month by millions of people.",

      topColor: "#FF7A66",
      navColor: "#ffffff",
      pageColor: "#ffffff",
      textColor: "#111111",
      navTextColor: "#111111",

      navLinks: ["Services", "About", "Contact"],
      path: "/digital/home",
    },
    {
      title: "Penultimate V",
      navTitle: "Penultimate Ventures",
      tabIcon: tabIconPV,

      logoActive: logoVWhite,
      logoInactive: logoV,
      logoMobileActive: mobileLogoVWhite,
      logoMobileInactive: mobileLogoV,
      navLogoActive: navLogoVWhite,
      navLogoInactive: navLogoV,

      topColor: "#CFEFFF",
      navColor: "#000000",
      pageColor: "#000000",
      textColor: "#ffffff",
      navTextColor: "#ffffff",

      navLinks: ["About", "Contact"],
      path: "/ventures/home",
    },
    {
      title: "Penultimate C",
      navTitle: "Penultimate Capital",
      tabIcon: tabIconPC,

      logo: logoC,
      navLogo: navLogoC,
      logoMobile: mobileLogoC,

      text: "Our VC arm invests in companies emerging from Penultimate Ventures.",

      topColor: "#0E5A5F",
      navColor: "#DDEFE8",
      pageColor: "#DDEFE8", // ✅ SAME BG COLOR LIKE PALOMA (Dark Teal)
      textColor: "#150d0d", // ✅ White text like Paloma
      navTextColor: "#110c0c",

      navLinks: ["About", "Contact"],
      path: "/capital/penultimate-capital",
    },
  ];

  /* TAB → ROUTE */
  useEffect(() => {
    navigate(sections[activeTab].path);
    // eslint-disable-next-line
  }, [activeTab]);

  /* ROUTE → TAB */
  useEffect(() => {
    const foundIndex = sections.findIndex((section) =>
      location.pathname.startsWith(section.path)
    );
    if (foundIndex !== -1 && foundIndex !== activeTab) {
      setActiveTab(foundIndex);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const currentSection = sections[activeTab];

  /* ✅ Work grid items */
  const workItems = [
    {
      img: imgHaett,
      alt: "HAETT",
      title: "HAETT",
      subtitle: "Making Healthy Easy, Personalised Meal Subscription",
      isSmall: true,
    },
    {
      img: imgYoNutri,
      alt: "Yo! Nutri",
      title: "YO! NUTRI",
      subtitle: "Clean Label Snacking Company",
    },
    {
      img: imgFarmlet,
      alt: "Farmlet",
      title: "FARMLET",
      subtitle: "India’s 1st Farmer Adoption Platform",
    },
    {
      img: imgAskNone,
      alt: "AskNone.com",
      title: "ASKNONE",
      subtitle: "Building Community of Homeowners",
    },
  ];

  /* ✅ What we do rows */
  const whatWeDoRows = [
    {
      leftTitle: "Defining a clear vision\nfor the future",
      rightText:
        "Whether you’re an R&D team at a Fortune 500 or a founder with a paper napkin sketch, we shape, ideate, prototype, and conceive beloved products for your users.",
    },
    {
      leftTitle: "Set the bar for category\ndefining design",
      rightText:
        "If you’ve proven product market fit and want to ensure your user experience is best-in-class, performant, and scalable by design, we can help you make it pixel-perfect.",
    },
    {
      leftTitle: "Ship new products\nfrom zero-to-one",
      rightText:
        "When you need to design and build software from the ground up with a high-powered product team, we’re ready to help you ship a lovable MVP built for today and tomorrow.",
    },
    {
      leftTitle: "Inject fresh life into\nlegacy experiences",
      rightText:
        "If your product has millions of daily active users but is showing signs of wear, we rearchitect, rebuild, and redesign with precision and care.",
    },
  ];

  /* ✅ Services columns section */
  const servicesColumns = [
    {
      title: "Design & UX Research",
      items: [
        "UX/UI Design",
        "Design Systems",
        "Brand",
        "UX Research & Testing",
        "Ideation & Prototyping",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Full Stack Engineering",
        "Frontend Development",
        "Backend Development",
        "Mobile Development",
      ],
    },
    {
      title: "Product & Strategy",
      items: [
        "Product Management",
        "Product Strategy & Vision",
        "User Engagement & Retention",
      ],
    },
  ];

  /* ✅ Principles */
  const principles = [
    {
      number: "01",
      title: "Product focus",
      desc:
        "We’re not full-service. We do one thing and do it well—build incredible user experiences. Everything we do is in the service of product.",
    },
    {
      number: "02",
      title: "Co-founder mentality",
      desc:
        "We work like partners. We take ownership, move fast, and care about outcomes—not just deliverables.",
    },
    {
      number: "03",
      title: "Software not vaporware",
      desc:
        "We build real software with production standards, not just pretty screens and promises.",
    },
    {
      number: "04",
      title: "Startup pace",
      desc:
        "Fast feedback loops, sharp priorities, and shipping momentum—without chaos.",
    },
    {
      number: "05",
      title: "Small, world-class teams",
      desc:
        "Small teams, high ownership, deep craft. The best work happens with tight collaboration.",
    },
  ];

  /* ✅ Impact fade while scrolling */
  const impactRef = useRef(null);

  useEffect(() => {
    const el = impactRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("impact-visible");
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ✅ STRIPS SCROLL ANIMATION (ventures only) */
  // useEffect(() => {
  //   if (activeTab !== 1) return;

  //   let rafId = null;
  //   let lastScrollY = window.scrollY || 0;
  //   let currentOffset = 0;

  //   const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  //   const updateStrips = () => {
  //     const container = venturesStripsRef.current;
  //     if (!container) return;

  //     const strips = container.querySelectorAll(".ventures-strip");
  //     strips.forEach((strip) => {
  //       strip.style.transform = `translateY(${currentOffset}px)`;
  //     });
  //   };

  //   const onScroll = () => {
  //     if (rafId) return;

  //     rafId = requestAnimationFrame(() => {
  //       rafId = null;

  //       const y = window.scrollY || 0;
  //       const delta = y - lastScrollY;

  //       // currentOffset = clamp(currentOffset - delta * 0.25, -120, 120);/
  //       currentOffset = clamp(currentOffset - delta * 0.9, -160, 160);


  //       lastScrollY = y;
  //       updateStrips();
  //     });
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   updateStrips();

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     if (rafId) cancelAnimationFrame(rafId);
  //   };
  // }, [activeTab]);


  useEffect(() => {
  if (activeTab !== 1) return;

  let rafId = null;
  let lastScrollY = window.scrollY || 0;
  let currentOffset = 0;

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  // const updateStrips = () => {
  //   const container = venturesStripsRef.current;
  //   if (!container) return;

  //   const strips = container.querySelectorAll(".ventures-strip");
  //   strips.forEach((strip) => {
  //     strip.style.transform = `translateY(${currentOffset}px)`;
  //   });
  // };

const updateStrips = () => {
  const container = venturesStripsRef.current;
  if (!container) return;

  const strips = container.querySelectorAll(".ventures-strip");

  // ✅ if currentOffset is moving DOWN (+value), fade early
  const fadeStart = 40;   // start fading
  const fadeEnd = 120;    // fully disappear

  let opacity = 1;

  if (currentOffset > fadeStart) {
    opacity = 1 - (currentOffset - fadeStart) / (fadeEnd - fadeStart);
  }

  opacity = clamp(opacity, 0, 1);

  strips.forEach((strip) => {
    strip.style.transform = `translateY(${currentOffset}px)`;
    strip.style.opacity = opacity;
  });
};


  const onScroll = () => {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      rafId = null;

      const y = window.scrollY || 0;
      const delta = y - lastScrollY;

      // ✅ UP scroll = stripes disappear
      const strips = venturesStripsRef.current?.querySelectorAll(".ventures-strip");
      if (strips) {
        strips.forEach((strip) => {
          strip.style.opacity = delta < 0 ? "0" : "1";
          strip.style.transition = "opacity 0.25s ease";
        });
      }

      // ✅ Move stripes faster (optional)
      currentOffset = clamp(currentOffset - delta * 0.9, -160, 160);

      
      lastScrollY = y;
      updateStrips();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  updateStrips();

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
  };
}, [activeTab]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: currentSection.pageColor,
        color: currentSection.textColor,
      }}
    >
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sections={sections}
      />

      <SecondNavbar
        activeTab={activeTab}
        logo={
          currentSection.navLogoActive
            ? activeTab === 1
              ? currentSection.navLogoActive
              : currentSection.navLogoInactive
            : currentSection.navLogo
        }
        title={currentSection.title}
        navColor={currentSection.navColor}
        textColor={currentSection.navTextColor}
        menuItems={currentSection.navLinks}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSelectTab={setActiveTab}
      />

      {/* ================= MAIN CONTENT ================= */}
      <main className={`content tab-${activeTab}`}>
        <div className="content-inner">
          <p className="main-text">{currentSection.text}</p>

          {/* ✅ DIGITAL */}
          {activeTab === 0 && <VideoSection />}

          {/* ✅ CAPITAL PAGE (TAB 2) */}
          {/* {activeTab === 2 && (
            <section className="capital-hero-wrap">
              <div className="capital-hero-image-wrap">
                <img
                  src={capitalHeroImg}
                  alt="Penultimate Capital Hero"
                  className="capital-hero-image"
                />
              </div>
            </section>
          )} */}


          {/* ✅ CAPITAL PAGE (TAB 2) */}
{activeTab === 2 && (
  <>
    {/* ✅ IMAGE SECTION */}
    <section className="capital-hero-wrap">
      <div className="capital-hero-image-wrap">
        <img
          src={capitalHeroImg}
          alt="Penultimate Capital Hero"
          className="capital-hero-image"
        />
      </div>
    </section>

    {/* ✅ TEXT SECTION (AFTER IMAGE) */}
    <section className="capital-hero-text-section">
      <div className="capital-hero-text-inner">
        <h1 className="capital-hero-big-title">
          Penultimate <br />
          Capital
        </h1>

        <p className="capital-hero-description">
          Our funds invest in the Pre-Seed, Seed and Series-A stages of companies
          launched out of Penultimate. We invest in both Indian and Global
          companies.
        </p>
      </div>
       <div className="capital-about-line" />
    </section>
    {/* ✅ ABOUT CAPITAL SECTION (AFTER HERO TEXT) */}

<section className="capital-about-section">
 

  <p className="capital-about-text">
   Penultimate Capital is owned and operated by a team of entrepreneurs who have founded and are scaling technology companies in India and abroad.
  </p>
</section>


{/* ✅ INFO EDGE SECTION (TEXT + IMAGE) */}
<section className="capital-info-section">
  <div className="capital-info-grid">
    {/* ✅ LEFT CONTENT */}
    <div className="capital-info-left">
      <div className="capital-info-number">1.0</div>

      <h2 className="capital-info-title">Our informational edge</h2>

      <p className="capital-info-text">
        The hands-on nature of our venture partnerships means that we have a far
        deeper understanding of the companies and founders that we invest in
        than traditional VC firms. Given that we work alongside founders in the
        trenches, we essentially invest with the informational edge of a
        co-founder.
      </p>
    </div>

    {/* ✅ RIGHT IMAGE */}
    <div className="capital-info-right">
      <img
        src={capitalInfoImg}
        alt="Capital Info Graphic"
        className="capital-info-image"
      />
    </div>
  </div>
</section>



{/* ✅ CAPITAL SECTIONS (2.0 / 3.0 / 4.0) */}
<section className="capital-extra-section">
  <div className="capital-extra-grid">
    <div className="capital-extra-left">
      <div className="capital-extra-badge">2.0</div>

 <h2 className="capital-info-title">Invest at the ground floor</h2>
      <p className="capital-extra-text">
        We make investments at the pre-seed, seed and Series A stages, with
        capital concentrated at the Series A stage in companies that we have the
        highest conviction in. Our investment model provides access to early
        stage companies that are otherwise unavailable to invest in, with
        appropriate levels of diversification.
      </p>
    </div>

    <div className="capital-extra-right">
      <img src={capitalSec2Img} alt="Capital section 2" />
    </div>
  </div>
</section>

<section className="capital-extra-section">
  <div className="capital-extra-grid">
    <div className="capital-extra-left">
      <div className="capital-extra-badge">3.0</div>

 <h2 className="capital-info-title">A track record of success</h2>
      <p className="capital-extra-text">
        Our venture studio model has been baked into Penultimate. We have consistently invested in venture creation since day
        zero. We have a strong portfolio of ventures with a remarkable success
        rate. Penultimate Capital sits on top of that strong foundation.
      </p>
    </div>

    <div className="capital-extra-right">
      <img src={capitalSec3Img} alt="Capital section 3" />
    </div>
  </div>
</section>

<section className="capital-extra-section">
  <div className="capital-extra-grid">
    <div className="capital-extra-left">
      <div className="capital-extra-badge">4.0</div>

 <h2 className="capital-info-title">Co-investment rights</h2>
      <p className="capital-extra-text">
        Penultimate earns sweat equity in the companies that we help build through our
        venture studio. The preemptive rights associated with this equity are
        made available to Penultimate Capital at no cost - a unique benefit of
        combining our agency, venture studio, and venture capital businesses.
      </p>
    </div>

    <div className="capital-extra-right">
      <img src={capitalSec4Img} alt="Capital section 4" />
    </div>
  </div>
</section>




{/* ✅ BIG CENTER TEXT SECTION */}
{/* <section className="capital-bigtext-section">
  <h2 className="capital-bigtext-title">
    Invest at the ground floor in a portfolio of world-class technology <br />
    companies emerging from our Penultimate's venture studio.
  </h2>
</section> */}
<section className="capital-bigtext-section">
  <h2 className="capital-bigtext-title">
    Invest at the ground floor in a portfolio of world-class technology <br />
    companies emerging from our Penultimate&apos;s venture studio.
  </h2>
</section>



<section className="capital-marquee-section">
  <div className="capital-marquee-line" />

  <div className="capital-marquee-wrapper">
    <div className="capital-marquee-track">
      <div className="capital-marquee-item">
        <span>Let&apos;s make something</span>
        <img src={arrowImg} alt="arrow" className="capital-marquee-arrow-img" />
      </div>

      <div className="capital-marquee-item">
        <span>Let&apos;s make something</span>
        <img src={arrowImg} alt="arrow" className="capital-marquee-arrow-img" />
      </div>

      <div className="capital-marquee-item">
        <span>Let&apos;s make something</span>
        <img src={arrowImg} alt="arrow" className="capital-marquee-arrow-img" />
      </div>

      <div className="capital-marquee-item">
        <span>Let&apos;s make something</span>
        <img src={arrowImg} alt="arrow" className="capital-marquee-arrow-img" />
      </div>
    </div>
  </div>

  <div className="capital-marquee-line" />
</section>



  </>
)}


{activeTab === 2 && (
  <>
    {/* your existing capital sections here... */}

    {/* ✅ CAPITAL CONTACT FOOTER */}
    <footer className="capital-footer">

      {/* <div className="capital-footer-inner"> */}
        <div className="capital-footer-grid">
          {/* Left */}
          <div className="capital-footer-col">
            <div className="capital-footer-label">Let&apos;s talk</div>
            <div className="capital-footer-email">hello@penultimatex.com</div>

            <button
            className="capital-footer-btn"
              onClick={() => navigate("/capital/contact")}
                type="button" 
              >
                Contact us
              </button>

          </div>

          {/* Middle */}
          <div className="capital-footer-col">
            <div className="capital-footer-label">Social</div>
            <div className="capital-footer-link">X (Twitter)</div>
            <div className="capital-footer-link">Instagram</div>
            <div className="capital-footer-link">LinkedIn</div>
          </div>

          {/* Right */}
          <div className="capital-footer-col">
            <div className="capital-footer-label">Locations</div>

            <div className="capital-footer-location-title">Office address</div>
            <div className="capital-footer-location">
              T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1 <br />
              Raigurgam panmaktha, Hyderabad Knowledge City <br />
              Serilingampally, Hyderabad, Telangana 500081.
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  </>
)}


          {/* ✅ VENTURES PAGE */}
          {activeTab === 1 && (
            <>
              {/* ✅ HERO */}
              <section className="ventures-hero">
                <h1 className="ventures-hero-title">
                  India's <br />
                  leading <br />
                  <span className="ventures-hero-highlight">venture studio</span>
                </h1>

                <p className="ventures-hero-subtitle">
                  We partner with exceptional founders to transform novel ideas{" "}
                  <br />
                  into high-growth companies.
                </p>

                <button
                  className="ventures-hero-btn"
                  onClick={() => navigate("/ventures/contact")}
                  type="button"
                >
                  <span>Contact Us</span>
                  <img
                    src={arrowIconWhite}
                    alt="arrow"
                    className="ventures-hero-arrow"
                  />
                </button>
              </section>

              {/* ✅ INFO BLOCKS */}
              <section className="ventures-info-wrap">
                {/* ✅ Block 1 */}
                <div className="ventures-info-block">
                  <div className="ventures-info-left">
                    <h2 className="ventures-info-title">
                      Entrepreneurship is in our DNA
                    </h2>

                    {/* <div className="ventures-strips" ref={venturesStripsRef}>
                      <div className="ventures-strip" />
                      <div className="ventures-strip" />
                      <div className="ventures-strip" />
                    </div> */}
                    <div className="ventures-strips-wrap">
                   <div className="ventures-strips" ref={venturesStripsRef}>
                   <div className="ventures-strip" />
                   <div className="ventures-strip" />
                   <div className="ventures-strip" />
                 </div>
               </div>
                  </div>

                  <div className="ventures-info-right">
                    <p className="ventures-info-text">
                      We know how hard it is to build successful ventures and
                      the common pitfalls that founders typically fall into,
                      because we’ve been in your shoes. The odds are against
                      non-technical founders, in particular, but for all new
                      startup founders across India, securing your first
                      $1m remains a big challenge. Despite being able to access
                      support from a thriving India startup ecosystem,
                      most startups will fail.
                    </p>

                    <p className="ventures-info-highlight">
                      That’s where we come in.
                    </p>
                  </div>
                </div>

                {/* ✅ Block 2 */}
                <div className="ventures-info-block">
                  <div className="ventures-info-left">
                    <h2 className="ventures-info-title">
                      Co-creation in its truest form
                    </h2>
                  </div>

                  <div className="ventures-info-right">
                    <p className="ventures-info-text">
                      Our dedicated team works shoulder-to-shoulder with
                      early-stage founders from day one, essentially fulfilling
                      the role of your own internal product development team,
                      until you establish product-market fit, gain substantial
                      traction, and ultimately, branch out on your own with our
                      ongoing advisory.
                    </p>
                  </div>
                </div>

                {/* ✅ Block 3 */}
                <div className="ventures-founder-section">
                  <h2 className="ventures-founder-title">
                    Are you our type of founder?
                  </h2>

                  <div className="ventures-founder-grid">
                    <div className="ventures-founder-left">
                      <p className="ventures-founder-text">
                        It takes more than a compelling vision to create a
                        successful business. We rigorously select the founders
                        we work with, as we essentially become an extension of
                        your founding team. We are agnostic to industry but are
                        looking for venture scale businesses in large or growing
                        markets that are tech or tech enabled.
                      </p>
                    </div>

                    <div className="ventures-founder-right">
                      <h3 className="ventures-founder-subtitle">
                        We’re after founders who:
                      </h3>

                      <ul className="ventures-founder-list">
                        <li>Have an idea and a compelling vision (obviously)</li>
                        <li>Have grit and determination</li>
                        <li>
                          Have capital or are willing to raise it (with our
                          help!)
                        </li>
                        <li>Want us involved early in your journey</li>
                        <li>Willing to part with a small equity stake</li>
                        <li>
                          Have deep domain experience in their startup’s
                          industry or vertical
                        </li>
                      </ul>

                      <button
                        className="ventures-founder-btn"
                        onClick={() => navigate("/ventures/contact")}
                        type="button"
                      >
                        <span>Contact us</span>
                        <img
                          src={arrowIcon}
                          alt="arrow"
                          className="ventures-founder-arrow"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ✅ NEW: WIN SECTION */}
                <section className="ventures-win-section">
                  <h2 className="ventures-win-title">
                    We only win when <br />
                    <span className="ventures-win-highlight">you win.</span>
                  </h2>

                  <p className="ventures-win-subtitle">
                    Our unique partnership model was created with alignment at
                    its core. Our upside is derived from equity, meaning we only
                    prosper when you do.
                  </p>

                  <button
                    className="ventures-win-btn"
                    onClick={() => navigate("/ventures/contact")}
                    type="button"
                  >
                    <span>Contact Us</span>
                    <img
                      src={arrowIcon}
                      alt="arrow"
                      className="ventures-win-arrow"
                    />
                  </button>
                </section>

                {/* ✅ VENTURES FOOTER */}
                <footer className="ventures-footer">
                  <div className="ventures-footer-line" />

                  <div className="ventures-footer-inner">
                    <div className="ventures-footer-grid">
                      <div className="ventures-footer-col">
                        <div className="ventures-footer-label">Let's talk</div>
                        <div className="ventures-footer-email">
                          hello@penultimategroup.com
                        </div>
                      </div>

                      <div className="ventures-footer-col">
                        <div className="ventures-footer-label">Social</div>
                        <div className="ventures-footer-link">X (Twitter)</div>
                        <div className="ventures-footer-link">Instagram</div>
                        <div className="ventures-footer-link">LinkedIn</div>
                      </div>

                      <div className="ventures-footer-col">
                        <div className="ventures-footer-label">Locations</div>
                        <div className="ventures-footer-location">
                          Office address <br />
                          T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1{" "}
                          <br />
                          Raigurgam panmaktha, Hyderabad Knowledge City <br />
                          Serilingampally, Hyderabad, Telangana 500081.
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </section>
            </>
          )}

          {/* ✅ DIGITAL ONLY */}
          {activeTab === 0 && (
            <>
              <section ref={impactRef} className="impact-section">
                <h2 className="impact-title">
                  3 Big in the making, <br />
                  so far
                </h2>

                <p className="impact-text">
                  Across India and the subcontinent, we’ve helped build three
                  companies worth a few million dollars—and priceless in value
                  for the people who use them. We’d love to help you build
                  another impactful yet profitable company. We work in
                  long-running partnerships with select scale-ups and corporates,
                  becoming an extension of your team to design, build, and
                  maintain world-class digital products.
                </p>
              </section>

              <section className="work-grid">
                {workItems.map((item, index) => (
                  <div
                    key={index}
                    className={`work-card ${item.isSmall ? "work-card-1" : ""}`}
                  >
                    <div className="work-image">
                      <img src={item.img} alt={item.alt} />
                    </div>

                    <div className="work-meta">
                      <div className="work-meta-title">{item.title}</div>
                      <div className="work-meta-sub">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </section>

              <section className="black-fullwidth">
                <div className="black-inner">
                  <section className="whatwedo-section">
                    <div className="whatwedo-top">
                      <div className="whatwedo-heading">What we do</div>
                    </div>

                    <div className="whatwedo-list">
                      {whatWeDoRows.map((row, idx) => (
                        <div key={idx} className="whatwedo-row">
                          <div className="whatwedo-left">
                            {row.leftTitle.split("\n").map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                          <div className="whatwedo-right">{row.rightText}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="services-section">
                    <div className="services-grid">
                      {servicesColumns.map((col, i) => (
                        <div key={i} className="services-col">
                          <div className="services-title">{col.title}</div>
                          <div className="services-line" />
                          <div className="services-items">
                            {col.items.map((it, idx) => (
                              <div key={idx} className="services-item">
                                {it}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="marquee-wrap">
                    <div className="marquee-track">
                      <div className="marquee-text">
                        From pre-seed to fortune 500 • From pre-seed to fortune
                        500 • From pre-seed to fortune 500 • From pre-seed to
                        fortune 500 •
                      </div>

                      <div className="marquee-text">
                        From pre-seed to fortune 500 • From pre-seed to fortune
                        500 • From pre-seed to fortune 500 • From pre-seed to
                        fortune 500 •
                      </div>
                    </div>
                  </section>

                  <section className="principles-section">
                    <div className="principles-top">
                      <div className="principles-bigtext">
                        After shipping couple of products, there are a few key
                        things we’ve learned are needed to do the best work
                      </div>

                      <button
                        className="principles-link"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        View the work →
                      </button>
                    </div>

                    <div className="principles-grid">
                      {principles.map((p, idx) => (
                        <div key={idx} className="principle-card">
                          <div className="principle-num">{p.number}</div>

                          <div className="principle-bottomrow">
                            <div className="principle-title">{p.title}</div>
                            <div className="principle-desc">{p.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </section>

              <footer className="footer-section">
                <div className="footer-line-top" />
                <div className="footer-inner">
                  <div className="footer-grid">
                    <div className="footer-col">
                      <div className="footer-label">Let's talk</div>
                      <div className="footer-big">hello@penultimatex.com</div>

                      <button
                        className="footer-contact-btn"
                        onClick={() => navigate("/contact")}
                        type="button"
                      >
                        <span className="title">Contact us</span>
                        <img
                          src={arrowIcon}
                          alt="arrow"
                          className="footer-arrow-img"
                        />
                      </button>
                    </div>

                    <div className="footer-col">
                      <div className="footer-label">Social</div>
                      <div className="footer-link">X (Twitter)</div>
                      <div className="footer-link">Instagram</div>
                      <div className="footer-link">LinkedIn</div>
                    </div>

                    <div className="footer-col">
                      <div className="footer-label">Locations</div>
                      <div className="footer-big">
                        Office address <br />
                        T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1 <br />
                        Raigurgam panmaktha, Hyderabad Knowledge City <br />
                        Serilingampally, Hyderabad, Telangana 500081.
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

/* ✅ ROUTES */
export default function RoutedApp() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/digital/home" element={<App initialTab={0} />} />
        <Route path="/ventures/home" element={<App initialTab={1} />} />
        <Route
          path="/capital/penultimate-capital"
          element={<App initialTab={2} />}
        />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ventures/contact" element={<VenturesContactPage />} />
        <Route path="/capital/contact" element={<CapitalContactPage />} />

        <Route path="*" element={<App initialTab={0} />} />
      </Routes>
    </>
  );
}