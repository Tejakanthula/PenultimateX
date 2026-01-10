import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TabBar from "./components/TabBar";
import Sidebar from "./components/Sidebar";
import SecondNavbar from "./components/SecondNavbar";
import VideoSection from "./components/VideoSection";

import "./App.css";

// Import your three logos for TAB BAR
import logoX from "./assets/11-removebg-preview.png";
import logoV from "./assets/33-removebg-preview.png";
import logoVWhite from "./assets/Penulti__2_-removebg-preview.png";
import logoC from "./assets/44-removebg-preview.png";

// Import your three logos for NAVBAR (change these separately)
import navLogoX from "./assets/22-removebg-preview.png";
import navLogoV from "./assets/33-removebg-preview.png";
import navLogoVWhite from "./assets/Penulti__4_s-removebg-preview.png";
import navLogoC from "./assets/Penulti__10_s-removebg-preview.png";

// Import small/mobile logos
import mobileLogoX from "./assets/Penulti__13_s-removebg-preview.png";
import mobileLogoV from "./assets/ventures1-removebg-preview.png";
import mobileLogoC from "./assets/capitals-removebg-preview.png";
import mobileLogoVWhite from "./assets/Penulti__12_s-removebg-preview.png";
function App({ initialTab = 0 }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Define colors and structure for all three sections
  const sections = [
    {
      title: "Penultimate X",
      logo: logoX,
       logoMobile: mobileLogoX,
      navLogo: navLogoX,
      text: "Helping scale-ups and corporates build world-class digital products that are used every month by millions of people.",
      topColor: "#f26b4f",     
      navColor: "#ffffff",     // below navbar color
      pageColor: "#ffffff",    // full body color
      textColor: "#111111",    // dark text
      navTextColor: "#111111",
      navLinks: ["Work", "Services", "Insights", "About", "Contact"],
      path: "/digital/home"
    },
    {
      title: "Penultimate V",
      logoActive: logoVWhite,     
      logoInactive: logoV,
      logoMobileActive: mobileLogoVWhite,   
       logoMobileInactive: mobileLogoV,   
      navLogoActive: navLogoVWhite,
      navLogoInactive: navLogoV,
      // text: "With the best track record in INDIA, we're busy helping ambitious founders build successful companies from scratch.",
      topColor: "#85cfff",     // header color (light blue)
      navColor: "#000000",     // navbar color (black)
      pageColor: "#000000",    // page color (black)
      textColor: "#ffffff",    // white text
      navTextColor: "#ffffff",
      navLinks: ["Portfolio", "About", "Contact"],
       path: "/ventures/home"
    },
    {
      title: "Penultimate C",
      logo: logoC,
      navLogo: navLogoC,
      logoMobile: mobileLogoC,
      //text: "We're investing in the next generation of game-changing companies. Many say they invest in day 1 founders — we actually do.",
      text: "Our VC arm invests in companies emerging from Penultimate Ventures.",
      topColor: "#2B9A6D",     // header color (teal)
      navColor: "#DDEFE8",     // navbar color (dark teal)
      pageColor: "#DDEFE8",    // page color (same as navbar)
      textColor: "#000000",    // white text
      navTextColor: "#000000",
      navLinks: ["About", "Contact"],
       path: "/capital/penultimate-capital"
    }
  ];

  useEffect(() => {
    navigate(sections[activeTab].path);
  }, [activeTab]);

  useEffect(() => {
    const foundIndex = sections.findIndex(sec => location.pathname.startsWith(sec.path));
    if (foundIndex !== -1 && foundIndex !== activeTab) {
      setActiveTab(foundIndex);
    }
  }, [location.pathname]);

  const currentSection = sections[activeTab];
  return (
    <div
      className="App"
      style={{
        backgroundColor: currentSection.pageColor,
        color: currentSection.textColor,
        transition: "background-color 0.4s ease, color 0.4s ease"
      }}
    >
      {/* Top Orange / Blue / Teal Header */}
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sections={sections}
      />

      {/* White / Black / Dark-Teal Navbar */}
      <SecondNavbar
        activeTab={activeTab}
        logo={
    currentSection.navLogoActive
      ? activeTab === 1
        ? currentSection.navLogoActive
        : currentSection.navLogoInactive
      : currentSection.navLogo // for X & C
  }
        title={currentSection.title}
        navColor={currentSection.navColor}
        textColor={currentSection.navTextColor}
        menuItems={currentSection.navLinks}
      />

      {/* Sidebar */}
      <Sidebar 
      isOpen={isSidebarOpen} 
      toggleSidebar={toggleSidebar}
      onSelectTab={setActiveTab} />

      {/* Main Content */}
      {/* <main className="content">
        <div className="content-inner">
          <h1 className="main-title">{currentSection.title}</h1> 
          <p className="main-text">{currentSection.text}</p>
        </div>
      </main> */}


      {/* <main className={`content tab-${activeTab}`}>
  <div className="content-inner">
    <p className="main-text">{currentSection.text}</p>
  </div>
</main> */}

<main className={`content tab-${activeTab}`}>
  <div className="content-inner">
    <p className="main-text">{currentSection.text}</p>

    {/* ✅ SHOW VIDEO ONLY FOR DIGITAL TAB */}
    {activeTab === 0 && <VideoSection />}
  </div>
</main>


    </div>
  );
}

export default function RoutedApp() {
  return (
    <Routes>
      <Route path="/digital/home" element={<App initialTab={0} />} />
      <Route path="/ventures/home" element={<App initialTab={1} />} />
      <Route path="/capital/penultimate-capital" element={<App initialTab={2} />} />
      <Route path="*" element={<App initialTab={0} />} />
    </Routes>
  );
}