import React from "react";
import { useNavigate } from "react-router-dom";
import "./TabBar.css";

const TabBar = ({ activeTab, setActiveTab, isSidebarOpen, toggleSidebar, sections }) => {
const navigate = useNavigate();
  const activeColor = sections[activeTab].topColor;
 const activePageColor = sections[activeTab].pageColor;
   const handleTabClick = (i) => {
    setActiveTab(i);
    navigate(sections[i].path); // ✅ change URL immediately
  };
  return (
    <div className="top-bar" style={{ backgroundColor: activeColor }}>

      <div className="tabs-left">
        {sections.map((section, i) => (
          <button
            key={i}
            className={`tab-btn ${activeTab === i ? "active" : ""}`}
            onClick={() => handleTabClick(i)}
            aria-pressed={activeTab === i}
            style={{
              backgroundColor: activeTab === i ? section.pageColor : "transparent",
              color: activeTab === i
                ? section.textColor || "#111"
                : "#fff",
            }}
          >
            {/* <img
  src={
    section.title === "Penultimate V"
      ? activeTab === 1
        ? section.logoActive
        : section.logoInactive
      : section.logo 
  }
  alt={section.title}
  className="tab-logo"
/> */}      {/* Desktop Logo */}
<img
  src={
    section.title === "Penultimate V"
      ? activeTab === 1
        ? section.logoActive || section.logo
        : section.logoInactive || section.logo
      : section.logo
  }
  alt={section.title}
  className="tab-logo desktop-logo"
/>

{/* MOBILE LOGO */}
<img
  src={
    section.logoMobileActive
      ? activeTab === i
        ? section.logoMobileActive
        : section.logoMobileInactive
      : section.logoMobile || section.logo
  }
  alt={section.title}
  className={`tab-logo mobile-logo tab-${i}`}
/>



          </button>
        ))}
      </div>

      <div className="tabs-right">
        <button
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
