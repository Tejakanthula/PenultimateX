import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "../components/TabBar";
import Sidebar from "../components/Sidebar";
import SecondNavbar from "../components/SecondNavbar";
import "./CapitalContactPage.css";

/* ✅ TAB ICONS */
import tabIconPX from "../assets/logoPX.png";
import tabIconPV from "../assets/logoPV.png";
import tabIconPC from "../assets/logoPC.png";

/* ✅ NAV LOGOS */
import navLogoX from "../assets/22-removebg-preview.png";
import navLogoV from "../assets/33-removebg-preview.png";
import navLogoVWhite from "../assets/Penulti__4_s-removebg-preview.png";
import navLogoC from "../assets/Penulti__10_s-removebg-preview.png";

export default function CapitalContactPage() {
  const navigate = useNavigate();

  // ✅ Keep Capital tab active
  const [activeTab, setActiveTab] = useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ✅ Same sections like App.js (for TabBar)
  const sections = [
    {
      title: "Penultimate X",
      navTitle: "Penultimate X",
      tabIcon: tabIconPX,
      topColor: "#FF7A66",
      pageColor: "#ffffff",
      textColor: "#111111",
      path: "/digital/home",
    },
    {
      title: "Penultimate V",
      navTitle: "Penultimate Ventures",
      tabIcon: tabIconPV,
      topColor: "#CFEFFF",
      pageColor: "#000000",
      textColor: "#ffffff",
      path: "/ventures/home",
    },
    {
      title: "Penultimate C",
      navTitle: "Penultimate Capital",
      tabIcon: tabIconPC,
      topColor: "#0E5A5F",
      pageColor: "#DDEFE8",
      textColor: "#000000",
      path: "/capital/penultimate-capital",
    },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    linkedin: "",
    interestedIn: "",
    hearAbout: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Capital Contact Form Submitted:", form);
    alert("✅ Submitted Successfully!");
  };

  return (
    <div className="capital-contact-wrapper">
      {/* ✅ TOP HEADER */}
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sections={sections}
      />

      {/* ✅ NAVBAR */}
      <SecondNavbar
        logo={navLogoC}
        navColor="#DDEFE8"
        textColor="#000000"
        menuItems={["About", "Contact"]}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSelectTab={setActiveTab}
      />

      {/* ✅ CONTACT PAGE BODY */}
      <div className="capital-contact-page">
        <div className="capital-contact-inner">
          {/* LEFT */}
          <div className="capital-contact-left">
            <h1 className="capital-contact-title">Submit an EOI</h1>
          </div>

          {/* RIGHT FORM */}
          <div className="capital-contact-right">
            <form className="capital-form" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="capital-form-row">
                <div className="capital-field">
                  <label>
                    First name<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="capital-field">
                  <label>
                    Last name<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="capital-form-row">
                <div className="capital-field">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="capital-field">
                  <label>
                    Mobile phone number<span>*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="capital-form-row">
                <div className="capital-field capital-field-wide">
                  <label>
                    Country<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Interested In (Radio) */}
              <div className="capital-form-row">
                <div className="capital-field capital-field-wide">
                  <label className="capital-group-title">
                    Are you interested in investing personally or on behalf of a
                    firm?<span>*</span>
                  </label>

                  <div className="capital-options">
                    {["Personal", "Firm"].map((item) => (
                      <label key={item} className="capital-option">
                        <input
                          type="radio"
                          name="interestedIn"
                          value={item}
                          checked={form.interestedIn === item}
                          onChange={(e) =>
                            setForm({ ...form, interestedIn: e.target.value })
                          }
                          required
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="capital-form-row">
                <div className="capital-field capital-field-wide">
                  <label>LinkedIn URL</label>
                  <input
                    type="text"
                    value={form.linkedin}
                    onChange={(e) =>
                      setForm({ ...form, linkedin: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Hear About */}
              <div className="capital-form-row">
                <div className="capital-field capital-field-wide">
                  <label>
                    How did you hear about us?<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.hearAbout}
                    onChange={(e) =>
                      setForm({ ...form, hearAbout: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Privacy text */}
              <div className="capital-form-row">
                <p className="capital-privacy-text">
                  We are committed to protecting and respecting your privacy.
                  From time to time, we would like to contact you about our
                  products and services. If you consent to us contacting you for
                  this purpose, please tick the box below.
                </p>

                <label className="capital-checkbox">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  />
                  <span>I agree to receive other communications.</span>
                </label>
              </div>

              {/* Submit */}
              <div className="capital-form-row">
                <button type="submit" className="capital-submit-btn">
                  Submit
                </button>
              </div>

              {/* Back button */}
              <div className="capital-form-row">
                <button
                  type="button"
                  className="capital-submit-btn capital-back-btn"
                  onClick={() => navigate("/capital/penultimate-capital")}
                >
                  Back to Capital
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ✅ FOOTER LINE + FOOTER */}
        <div className="capital-footer-line" />

        <footer className="capital-footer">
          <div className="capital-footer-inner">
            {/* Column 1 */}
            <div>
              <p className="capital-footer-heading">Let's talk</p>
              <p className="capital-footer-mail">hello@penultimategroup.com</p>
            </div>

            {/* Column 2 */}
            <div>
              <p className="capital-footer-heading">Social</p>
              <p className="capital-footer-link">X (Twitter)</p>
              <p className="capital-footer-link">Instagram</p>
              <p className="capital-footer-link">LinkedIn</p>
            </div>

            {/* Column 3 */}
            <div>
              <p className="capital-footer-heading">Locations</p>
              <p className="capital-footer-text">Office address</p>
              <p className="capital-footer-text">
                T-Hub, 7F-158, 7th Floor, Plot no 1/C,
                <br />
                Sy No 83/1
                <br />
                Raigurgam panmaktha, Hyderabad
                <br />
                Knowledge City
                <br />
                Serilingampally, Hyderabad, Telangana
                <br />
                500081.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
