import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/Penulti__9_s-removebg-preview.png";
import logoX from "../assets/Penulti__6_s-removebg-preview.png";
import logoV from "../assets/Penulti__7_s-removebg-preview.png";
import logoC from "../assets/Penulti__11_s-removebg-preview.png";
const Sidebar = ({ isOpen, toggleSidebar , onSelectTab}) => {
   const navigate = useNavigate();
   const handleClick = (index) => {
    onSelectTab(index);
    toggleSidebar();
     navigate("/digital/home");
  };
    React.useEffect(() => {
    if (isOpen) {
      navigate("/digital/home");
    }
  }, [isOpen, navigate]);
  return (
    <div className={`sidebar-root ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div className="sidebar-inner">
        <button className="close-x" onClick={toggleSidebar} aria-label="Close">✖</button>
        <div className="side-logo">
           <img src={logo} alt="Logo" className="side-logo-img" />
        </div>

        <p className="side-intro">
         Penultimate is the leading venture studio. Our passion team has forged multi million $ Venture Portfolios, and helped steered firms to the path of acquisitions.
        </p>

        <div className="side-cards">
          <button className="side-card orange"  onClick={() => handleClick(0)}>
            <div className="side-card-header">
                <img src={logoX} alt="Penultimate X Logo" className="side-card-logo" />
            </div>
            <p>Helping scale-ups and corporates build world-class digital products that are used every month by millions of people.</p>
            <span className="side-btn">Create a product with us →</span>
          </button>

          <button className="side-card blue"  onClick={() => handleClick(1)}>
             <div className="side-card-header">
                <img src={logoV} alt="Penultimate V Logo" className="side-card-logo" />
              </div>
            <p>With the best track record, we’re busy helping ambitious founders build successful companies from scratch.</p>
            <span className="side-btn">Build a company with us →</span>
          </button>

          <button className="side-card teal"  onClick={() => handleClick(2)}>
           
             <div className="side-card-header">
             <img src={logoC} alt="Penultimate C Logo" className="side-card-logo" />
          </div>
            <p>We’re investing in the next generation of game-changing companies. Many say they invest in day 1 founders, we actually do.</p>
            <span className="side-btn">Invest with us →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
