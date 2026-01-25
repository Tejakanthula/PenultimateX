import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import TabBar from "../components/TabBar";
import SecondNavbar from "../components/SecondNavbar";
import Sidebar from "../components/Sidebar";

import "./AboutPage.css";
import "../App.css";

/* ✅ TAB ICON LOGOS */
import tabIconPX from "../assets/logoPX.png";
import tabIconPV from "../assets/logoPV.png";
import tabIconPC from "../assets/logoPC.png";
import arrowIcon from "../assets/arrow.png";

/* ✅ TAB BAR LOGOS */
import logoX from "../assets/11-removebg-preview.png";
import logoV from "../assets/33-removebg-preview.png";
import logoVWhite from "../assets/Penulti__2_-removebg-preview.png";
import logoC from "../assets/44-removebg-preview.png";

/* ✅ NAVBAR LOGOS */
import navLogoX from "../assets/22-removebg-preview.png";
import navLogoV from "../assets/33-removebg-preview.png";
import navLogoVWhite from "../assets/Penulti__4_s-removebg-preview.png";
import navLogoC from "../assets/Penulti__10_s-removebg-preview.png";

/* ✅ MOBILE LOGOS */
import mobileLogoX from "../assets/Penulti__13_s-removebg-preview.png";
import mobileLogoV from "../assets/ventures1-removebg-preview.png";
import mobileLogoC from "../assets/capitals-removebg-preview.png";
import mobileLogoVWhite from "../assets/Penulti__12_s-removebg-preview.png";

/* ✅ OUR VALUES IMAGES */
import valueImg1 from "../assets/value1.png";
import valueImg2 from "../assets/value2.png";
import valueImg3 from "../assets/value3.png";
import valueImg4 from "../assets/value4.png";
import valueImg5 from "../assets/value5.png";

/* ✅ BUSINESS UNITS IMAGES */
import buPX from "../assets/BUPX.png";
import buPV from "../assets/BUPV.png";
import buPC from "../assets/BUPC.png";

/* ✅ PERKS ICONS (REPLACE these names with your real icons ✅) */
import perkIcon1 from "../assets/perk1.png";
import perkIcon2 from "../assets/perk2.png";
import perkIcon3 from "../assets/perk3.png";
import perkIcon4 from "../assets/perk4.png";

export default function AboutPage() {
  const navigate = useNavigate();

  // ✅ keep Digital tab active in About page
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ Our Values active tab
  const [activeValue, setActiveValue] = useState(0);

  // ✅ Perks accordion (multi-open)
  const [openIndexes, setOpenIndexes] = useState([]);

  // ✅ Sticky Business Units active index
  const [activeBU, setActiveBU] = useState(0);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ✅ FIX: Contact button always opens contact page from TOP ✅
  const goToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const togglePerk = (idx) => {
    setOpenIndexes((prev) => {
      if (prev.includes(idx)) return prev.filter((i) => i !== idx);
      return [...prev, idx];
    });
  };

  const sections = [
    {
      title: "Penultimate X",
      navTitle: "Penultimate X",
      tabIcon: tabIconPX,
      logo: logoX,
      logoMobile: mobileLogoX,
      navLogo: navLogoX,
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
      navLinks: ["Services", "About", "Contact"],
      path: "/ventures/home",
    },
    {
      title: "Penultimate C",
      navTitle: "Penultimate Capital",
      tabIcon: tabIconPC,
      logo: logoC,
      navLogo: navLogoC,
      logoMobile: mobileLogoC,
      topColor: "#0E5A5F",
      navColor: "#DDEFE8",
      pageColor: "#DDEFE8",
      textColor: "#000000",
      navTextColor: "#000000",
      navLinks: ["Services", "About", "Contact"],
      path: "/capital/penultimate-capital",
    },
  ];

  const currentSection = sections[activeTab];

  /* ✅ Sticky Business Units section reference */
  const stickyBURef = useRef(null);

  // ✅ Business Units Data
  const businessUnits = [
    {
      bg: "#FF7A66",
      title: "Penultimate Digital",
      desc:
        "Penultimate Digital is our full-service digital product studio, designed to take the pain out of building and launching new digital products.",
      img: buPX,
      textColor: "#111111",
    },
    {
      bg: "#FBF3E7",
      title: "Penultimate Ventures",
      desc:
        "We partner with promising early-stage founders to transform pre-product, pre-revenue startup ideas into highly scaleable and successful ventures.",
      img: buPV,
      textColor: "#111111",
    },
    {
      bg: "#0E5A5F",
      title: "Penultimate Capital",
      desc:
        "Our VC fund enables us to further support the next wave of innovative technology companies.",
      img: buPC,
      textColor: "#ffffff",
    },
  ];

  // ✅ Our Values Data
  const values = [
    {
      label: "Kaizen is key",
      img: valueImg1,
      desc:
        "If we’re standing still, we’re falling behind. Continuous delivery and continuous improvement are part of everything we do.",
    },
    {
      label: "We’ve got this",
      img: valueImg2,
      desc:
        "We focus on confidence, ownership, and outcomes. When the pressure is high, we stay calm and execute with clarity.",
    },
    {
      label: "Enjoy the journey",
      img: valueImg3,
      desc:
        "The best work happens when the process is enjoyable. We celebrate small wins and build momentum together.",
    },
    {
      label: "Built to soar",
      img: valueImg4,
      desc:
        "We aim high, move fast, and keep raising the bar. Great products come from ambition + craft + discipline.",
    },
    {
      label: "Keep it candid",
      img: valueImg5,
      desc:
        "Honest feedback, direct communication, and transparency make everything smoother. We value clarity over comfort.",
    },
  ];

  // ✅ Penultimate Perks Data (WITH ICONS ✅)
  const perks = [
    {
      icon: perkIcon1,
      title: "Equity stake in ventures",
      desc:
        "Penultimate has equity stakes in the ventures it creates. We hold part of that portfolio in a trust for our employees. If our ventures win, we all win!",
    },
    {
      icon: perkIcon2,
      title: "Health & wellness budget",
      desc:
        "We support your health with a wellness budget you can use for fitness, training, recovery, and whatever helps you feel your best.",
    },
    {
      icon: perkIcon3,
      title: "Parental Leave",
      desc:
        "We believe family matters. Our parental leave policy is designed to give you time and space to be present for the moments that matter most.",
    },
    {
      icon: perkIcon4,
      title: "Distributed team",
      desc:
        "Work from where you thrive. We’re a distributed team with flexible collaboration, async-first habits, and strong ownership culture.",
    },
  ];

  // ✅ Sticky scroll logic
  useEffect(() => {
    const section = stickyBURef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      const scrollInside = Math.min(
        Math.max(-rect.top, 0),
        sectionHeight - viewportH
      );

      const progress = scrollInside / (sectionHeight - viewportH);

      const index = Math.min(
        businessUnits.length - 1,
        Math.floor(progress * businessUnits.length)
      );

      setActiveBU(index);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [businessUnits.length]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: currentSection.pageColor,
        color: currentSection.textColor,
      }}
    >
      {/* ✅ HEADER */}
      <TabBar
        activeTab={activeTab}
        setActiveTab={(i) => {
          setActiveTab(i);
          navigate(sections[i].path);
        }}
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
        onSelectTab={(i) => {
          setActiveTab(i);
          navigate(sections[i].path);
        }}
      />

      {/* ✅ ABOUT PAGE CONTENT */}
      <div className="about-page">
        {/* ✅ ABOUT INTRO */}
        <div className="about-container">
          <div className="about-left">
            <h1 className="about-title">About Penultimate</h1>
          </div>

          <div className="about-right">
            <p className="about-text-top">
              We drive the world forward by transforming ambitious ideas into
              unstoppable businesses.
            </p>

            <p className="about-text-bottom">
              Each day, our team rallies behind our vision of becoming the
              birthplace of the most successful digital products and technology
              companies.
            </p>

            <button className="about-contact-btn" onClick={goToContact}>
              <span className="title">Contact us</span>
              <img src={arrowIcon} alt="arrow" className="about-arrow-img" />
            </button>
          </div>
        </div>

        {/* ✅✅✅ STICKY BUSINESS UNITS */}
        <section className="bu-section" ref={stickyBURef}>
          <div className="bu-top">
            <div className="bu-left-title">Business units</div>
            <div className="bu-right-text">
              Penultimate is made up of three separate business units working in
              harmony as a product and venture creating machine
            </div>
          </div>

          <div className="bu-sticky-wrap">
            <div className="bu-sticky-inner">
              {businessUnits.map((unit, i) => (
                <div
                  key={i}
                  className={`bu-sticky-card ${activeBU === i ? "active" : ""}`}
                  style={{
                    background: unit.bg,
                    color: unit.textColor,
                  }}
                >
                  <div className="bu-card-inner">
                    <div className="bu-logo">
                      <img src={unit.img} alt={unit.title} />
                    </div>

                    <div className="bu-info">
                      <h3 className="bu-title">{unit.title}</h3>
                      <p className="bu-desc">{unit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ OUR VALUES */}
        <section className="values-section">
          <h2 className="values-title">Our values</h2>

          <div className="values-tabs-wrap">
            <div className="values-tabs-topline" />

            <div className="values-tabs">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`values-tab ${activeValue === i ? "active" : ""}`}
                  onClick={() => setActiveValue(i)}
                >
                  <span className="values-dot" />
                  <span className="values-tab-text">{v.label}</span>
                </div>
              ))}
            </div>

            <div className="values-tabs-bottomline" />
          </div>

          <div className="values-content">
            <div className="values-img-wrap">
              <img
                src={values[activeValue].img}
                alt={values[activeValue].label}
                className="values-img"
              />
            </div>

            <div className="values-desc">{values[activeValue].desc}</div>
          </div>
        </section>

        {/* ✅ PENULTIMATE PERKS */}
        <section className="perks-section">
          <h2 className="perks-title">Penultimate perks</h2>

          <p className="perks-subtitle">
            We’re one epic cocktail of product thinkers, design experts, and
            technology enthusiasts, who are always ready to shake things up.
          </p>

          <div className="perks-divider" />

          <div className="perks-list">
            {perks.map((perk, idx) => {
              const isOpen = openIndexes.includes(idx);

              return (
                <div key={idx} className={`perk-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="perk-header"
                    onClick={() => togglePerk(idx)}
                    type="button"
                  >
                    <div className="perk-left">
                      <img src={perk.icon} alt="" className="perk-icon" />
                      <div className="perk-heading">{perk.title}</div>
                    </div>

                    <span className={`perk-toggle ${isOpen ? "open" : ""}`}>
                      <span className="perk-toggle-icon" />
                    </span>
                  </button>

                  <div className="perk-body">
                    <div className="perk-body-inner">{perk.desc}</div>
                  </div>

                  <div className="perks-divider" />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ✅ FOOTER */}
     {/* ✅ ABOUT PAGE FOOTER (UNIQUE CLASSES ✅) */}
<footer className="about-footer-section">
  <div className="about-footer-line-top" />

  <div className="about-footer-grid">
    <div className="about-footer-col">
      <div className="about-footer-label">Let's talk</div>
      <div className="about-footer-big">hello@penultimatex.com</div>

      <button className="about-footer-contact-btn" onClick={goToContact}>
        <span className="about-footer-btn-title">Contact us</span>
        <img src={arrowIcon} alt="arrow" className="about-footer-arrow-img" />
      </button>
    </div>

    <div className="about-footer-col">
      <div className="about-footer-label">Social</div>
      <div className="about-footer-link">X (Twitter)</div>
      <div className="about-footer-link">Instagram</div>
      <div className="about-footer-link">LinkedIn</div>
    </div>

    <div className="about-footer-col">
      <div className="about-footer-label">Locations</div>
      <div className="about-footer-big">
        Office address <br />
        T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1 <br />
        Raigurgam panmaktha, Hyderabad Knowledge City <br />
        Serilingampally, Hyderabad, Telangana 500081.
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
