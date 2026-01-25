// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import "./TabBar.css";

// // // // const TabBar = ({
// // // //   activeTab,
// // // //   setActiveTab,
// // // //   isSidebarOpen,
// // // //   toggleSidebar,
// // // //   sections
// // // // }) => {
// // // //   const navigate = useNavigate();

// // // //   // ✅ background color for top bar
// // // //   const activeColor = sections[activeTab]?.topColor || "#FF7A66";

// // // //   const handleTabClick = (i) => {
// // // //     setActiveTab(i);
// // // //     navigate(sections[i].path);
// // // //   };

// // // //   return (
// // // //     <div className="top-bar" style={{ backgroundColor: activeColor }}>
// // // //       <div className="tabs-left">
// // // //         {sections.map((section, i) => (
// // // //           <button
// // // //             key={i}
// // // //             className={`tab-btn ${activeTab === i ? "active" : ""}`}
// // // //             onClick={() => handleTabClick(i)}
// // // //             aria-pressed={activeTab === i}
// // // //             style={{
// // // //               backgroundColor:
// // // //                 activeTab === i ? section.pageColor : "transparent",
// // // //               color:
// // // //                 activeTab === i ? section.textColor || "#111" : "#111"
// // // //             }}
// // // //           >
// // // //             {/* ✅ Desktop Logo */}
// // // //             <img
// // // //               src={
// // // //                 section.title === "Penultimate V"
// // // //                   ? activeTab === 1
// // // //                     ? section.logoActive || section.logo
// // // //                     : section.logoInactive || section.logo
// // // //                   : section.logo
// // // //               }
// // // //               alt={section.title}
// // // //               className="tab-logo desktop-logo"
// // // //             />

// // // //             {/* ✅ Mobile Logo */}
// // // //             <img
// // // //               src={
// // // //                 section.logoMobileActive
// // // //                   ? activeTab === i
// // // //                     ? section.logoMobileActive
// // // //                     : section.logoMobileInactive
// // // //                   : section.logoMobile || section.logo
// // // //               }
// // // //               alt={section.title}
// // // //               className={`tab-logo mobile-logo tab-${i}`}
// // // //             />
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       <div className="tabs-right">
// // // //         <button
// // // //           className={`hamburger ${isSidebarOpen ? "open" : ""}`}
// // // //           onClick={toggleSidebar}
// // // //           aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
// // // //         >
// // // //           <span className="bar bar1"></span>
// // // //           <span className="bar bar2"></span>
// // // //           <span className="bar bar3"></span>
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TabBar;

// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "./TabBar.css";

// // // const TabBar = ({
// // //   activeTab,
// // //   setActiveTab,
// // //   isSidebarOpen,
// // //   toggleSidebar,
// // //   sections
// // // }) => {
// // //   const navigate = useNavigate();

// // //   const activeColor = sections[activeTab]?.topColor || "#FF7A66";

// // //   const handleTabClick = (i) => {
// // //     setActiveTab(i);
// // //     navigate(sections[i].path);
// // //   };

// // //   return (
// // //     <div className="top-bar" style={{ backgroundColor: activeColor }}>
// // //       <div className="tabs-left">
// // //         {sections.map((section, i) => {
// // //           const isActive = activeTab === i;

// // //           return (
// // //             <button
// // //               key={i}
// // //               type="button"
// // //               className={`tab-btn ${isActive ? "active" : ""}`}
// // //               onClick={() => handleTabClick(i)}
// // //               aria-pressed={isActive}
// // //               style={{
// // //                 // ✅ these 2 are the main things you want
// // //                 "--tabActiveBg": section.pageColor,
// // //                 "--tabActiveText": section.textColor || "#111",
// // //               }}
// // //             >
// // //               {/* ✅ Icon (same for all tabs) */}
// // //               <img
// // //                 src={section.tabIcon}
// // //                 alt={section.navTitle}
// // //                 className="tab-icon"
// // //               />

// // //               {/* ✅ Title */}
// // //               <span className="tab-title">{section.navTitle}</span>
// // //             </button>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="tabs-right">
// // //         <button
// // //           className={`hamburger ${isSidebarOpen ? "open" : ""}`}
// // //           onClick={toggleSidebar}
// // //           aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
// // //           type="button"
// // //         >
// // //           <span className="bar bar1"></span>
// // //           <span className="bar bar2"></span>
// // //           <span className="bar bar3"></span>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TabBar;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./TabBar.css";

// // const TabBar = ({
// //   activeTab,
// //   setActiveTab,
// //   isSidebarOpen,
// //   toggleSidebar,
// //   sections
// // }) => {
// //   const navigate = useNavigate();

// //   const activeColor = sections[activeTab]?.topColor || "#FF7A66";

// //   const handleTabClick = (i) => {
// //     setActiveTab(i);
// //     navigate(sections[i].path);
// //   };

// //   return (
// //     <div className="top-bar" style={{ backgroundColor: activeColor }}>
// //       <div className="tabs-left">
// //         {sections.map((section, i) => {
// //           const isActive = activeTab === i;

// //           // ✅ Split title: "Penultimate Digital" => ["Penultimate", "Digital"]
// //           const fullTitle = section.navTitle || section.title || "";
// //           const parts = fullTitle.trim().split(" ");
// //           const firstWord = parts[0] || "";
// //           const restWords = parts.slice(1).join(" ");

// //           return (
// //             <button
// //               key={i}
// //               type="button"
// //               className={`tab-btn ${isActive ? "active" : ""}`}
// //               onClick={() => handleTabClick(i)}
// //               aria-pressed={isActive}
// //               style={{
// //                 "--tabActiveBg": section.pageColor,
// //                 "--tabActiveText": "#111",
// //               }}
// //             >
// //               <img
// //                 src={section.tabIcon}
// //                 alt={fullTitle}
// //                 className="tab-icon"
// //               />

// //               {/* ✅ Title Styled Like Your Screenshot */}
// //               <span className="tab-title">
// //                 <span className="tab-title-blue">{firstWord}</span>
// //                 {restWords ? (
// //                   <span className="tab-title-black"> {restWords}</span>
// //                 ) : null}
// //               </span>
// //             </button>
// //           );
// //         })}
// //       </div>

// //       <div className="tabs-right">
// //         <button
// //           className={`hamburger ${isSidebarOpen ? "open" : ""}`}
// //           onClick={toggleSidebar}
// //           aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
// //           type="button"
// //         >
// //           <span className="bar bar1"></span>
// //           <span className="bar bar2"></span>
// //           <span className="bar bar3"></span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TabBar;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./TabBar.css";

// const TabBar = ({
//   activeTab,
//   setActiveTab,
//   isSidebarOpen,
//   toggleSidebar,
//   sections
// }) => {
//   const navigate = useNavigate();

//   const activeColor = sections[activeTab]?.topColor || "#FF7A66";

//   const handleTabClick = (i) => {
//     setActiveTab(i);
//     navigate(sections[i].path);
//   };

//   return (
//     <div className="top-bar" style={{ backgroundColor: activeColor }}>
//       <div className="tabs-left">
//         {sections.map((section, i) => {
//           const isActive = activeTab === i;

//           const fullTitle = section.navTitle || section.title || "";
//           const parts = fullTitle.trim().split(" ");
//           const firstWord = parts[0] || "";
//           const restWords = parts.slice(1).join(" ");

//           return (
//             <button
//               key={i}
//               type="button"
//               className={`tab-btn ${isActive ? "active" : ""}`}
//               onClick={() => handleTabClick(i)}
//               aria-pressed={isActive}
//               style={{
//                 /* ✅ Active tab background = page background */
//                 "--tabActiveBg": section.pageColor,

//                 /* ✅ Active tab text = page text color (Ventures = white) */
//                 "--tabActiveText": section.textColor || "#111"
//               }}
//             >
//               <img src={section.tabIcon} alt={fullTitle} className="tab-icon" />

//               <span className="tab-title">
//                 <span className="tab-title-blue">{firstWord}</span>
//                 {restWords ? (
//                   <span className="tab-title-black"> {restWords}</span>
//                 ) : null}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       <div className="tabs-right">
//         <button
//           className={`hamburger ${isSidebarOpen ? "open" : ""}`}
//           onClick={toggleSidebar}
//           aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
//           type="button"
//         >
//           <span className="bar bar1"></span>
//           <span className="bar bar2"></span>
//           <span className="bar bar3"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TabBar;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./TabBar.css";

const TabBar = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  toggleSidebar,
  sections
}) => {
  const navigate = useNavigate();

  // ✅ background color for top bar
  const activeColor = sections[activeTab]?.topColor || "#FF7A66";

  const handleTabClick = (i) => {
    setActiveTab(i);
    navigate(sections[i].path);
  };

  return (
    <div
      className={`top-bar tab-${activeTab}`}
      style={{ backgroundColor: activeColor }}
    >
      <div className="tabs-left">
        {sections.map((section, i) => {
          const isActive = activeTab === i;

          const fullTitle = section.navTitle || section.title || "";
          const parts = fullTitle.trim().split(" ");
          const firstWord = parts[0] || "";
          const restWords = parts.slice(1).join(" ");

          return (
            <button
              key={i}
              type="button"
              className={`tab-btn tab-${i} ${isActive ? "active" : ""}`}
              onClick={() => handleTabClick(i)}
              aria-pressed={isActive}
              style={{
                "--tabActiveBg": section.pageColor,
                "--tabActiveText": section.textColor || "#111111"
              }}
            >
              {/* ✅ Icon */}
              <img
                src={section.tabIcon}
                alt={fullTitle}
                className="tab-icon"
              />

              {/* ✅ Title (Penultimate = blue, second word = black) */}
              <span className="tab-title">
                <span className="tab-title-blue">{firstWord}</span>
                {restWords ? (
                  <span className="tab-title-black"> {restWords}</span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div className="tabs-right">
        <button
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          type="button"
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
