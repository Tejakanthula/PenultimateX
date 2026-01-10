import React from "react";
import "./SecondNavbar.css";


const SecondNavbar = ({ activeTab,logo, title, navColor, textColor, menuItems }) => {
  
  return (
    <div
       className={`second-navbar tab-${activeTab}`}
      style={{
        backgroundColor: navColor,
        color: textColor,
      
      }}
    >
      <div className="navbar-left">
         <img src={logo} alt="Section Logo" className={`nav-logo tab-${activeTab}`} />
      </div>

      <div className="navbar-right">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
  <button
    className="nav-btn"
    style={{
      color: textColor 
    }}
  >
    {item}
  </button>
</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondNavbar;
