import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "../components/TabBar";
import Sidebar from "../components/Sidebar";
import SecondNavbar from "../components/SecondNavbar";
import "./VenturesContactPage.css";

/* ✅ TAB ICONS */
import tabIconPX from "../assets/logoPX.png";
import tabIconPV from "../assets/logoPV.png";
import tabIconPC from "../assets/logoPC.png";

/* ✅ NAV LOGOS */
import navLogoX from "../assets/22-removebg-preview.png";
import navLogoV from "../assets/33-removebg-preview.png";
import navLogoVWhite from "../assets/Penulti__4_s-removebg-preview.png";
import navLogoC from "../assets/Penulti__10_s-removebg-preview.png";

export default function VenturesContactPage() {
  const navigate = useNavigate();

  // ✅ Keep Ventures tab active
  const [activeTab, setActiveTab] = useState(1);
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
      path: "/digital/home"
    },
    {
      title: "Penultimate V",
      navTitle: "Penultimate Ventures",
      tabIcon: tabIconPV,
      topColor: "#CFEFFF",
      pageColor: "#000000",
      textColor: "#ffffff",
      path: "/ventures/home"
    },
    {
      title: "Penultimate C",
      navTitle: "Penultimate Capital",
      tabIcon: tabIconPC,
      topColor: "#0E5A5F",
      pageColor: "#DDEFE8",
      textColor: "#000000",
      path: "/capital/penultimate-capital"
    }
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    company: "",
    about: "",
    stage: [],
    lookingFor: "",
    pitchDeck: null
  });

  const toggleStage = (value) => {
    setForm((prev) => {
      const exists = prev.stage.includes(value);
      return {
        ...prev,
        stage: exists ? prev.stage.filter((v) => v !== value) : [...prev.stage, value]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ventures Contact Form Submitted:", form);
    alert("✅ Submitted Successfully!");
  };

  return (
    <div className="ventures-contact-wrapper">
      {/* ✅ TOP HEADER SAME LIKE HOME */}
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sections={sections}
      />

      <SecondNavbar
        logo={activeTab === 1 ? navLogoVWhite : navLogoV}
        navColor="#000000"
        textColor="#ffffff"
        menuItems={["About", "Contact"]}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSelectTab={setActiveTab}
      />

      {/* ✅ CONTACT PAGE BODY */}
      <div className="ventures-contact-page">
        <div className="ventures-contact-inner">
          {/* LEFT */}
          <div className="ventures-contact-left">
            <h1 className="ventures-contact-title">Contact our ventures team</h1>
          </div>

          {/* RIGHT FORM */}
          <div className="ventures-contact-right">
            <form className="ventures-form" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="ventures-form-row">
                <div className="ventures-field">
                  <label>
                    First name<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    required
                  />
                </div>

                <div className="ventures-field">
                  <label>
                    Last name<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="ventures-form-row">
                <div className="ventures-field">
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

                <div className="ventures-field">
                  <label>
                    Mobile phone number<span>*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label>
                    Country<span>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label>Company name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label>
                    Tell us about your business in 100 words or less.<span>*</span>
                  </label>
                  <textarea
                    value={form.about}
                    onChange={(e) => setForm({ ...form, about: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Checkbox group */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label className="ventures-group-title">
                    Which of the following best describes your business?<span>*</span>
                  </label>

                  <div className="ventures-options">
                    {["Pre-product", "Pre-revenue", "Revenue generating", "External capital raised"].map(
                      (item) => (
                        <label key={item} className="ventures-option">
                          <input
                            type="checkbox"
                            checked={form.stage.includes(item)}
                            onChange={() => toggleStage(item)}
                            required={form.stage.length === 0}
                          />
                          <span>{item}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Radio group */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label className="ventures-group-title">
                    What are you currently looking for?<span>*</span>
                  </label>

                  <div className="ventures-options">
                    {["A product development partner", "Capital", "Both"].map((item) => (
                      <label key={item} className="ventures-option">
                        <input
                          type="radio"
                          name="lookingFor"
                          value={item}
                          checked={form.lookingFor === item}
                          onChange={(e) => setForm({ ...form, lookingFor: e.target.value })}
                          required
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upload */}
              <div className="ventures-form-row">
                <div className="ventures-field ventures-field-wide">
                  <label className="ventures-group-title">Upload your pitch deck</label>

                  <input
                    className="ventures-file"
                    type="file"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={(e) =>
                      setForm({ ...form, pitchDeck: e.target.files?.[0] || null })
                    }
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="ventures-form-row">
                <button type="submit" className="ventures-submit-btn">
                  Submit
                </button>
              </div>

              {/* ✅ Optional Back button */}
              <div className="ventures-form-row">
                <button
                  type="button"
                  className="ventures-submit-btn"
                  onClick={() => navigate("/ventures/home")}
                >
                  Back to Ventures
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
