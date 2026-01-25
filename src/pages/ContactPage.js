// // // import React from "react";
// // // import "./ContactPage.css";

// // // export default function ContactPage() {
// // //   return (
// // //     <div className="contact-page">
// // //       <div className="contact-container">
// // //         <div className="contact-left">
// // //           <h2 className="contact-title">
// // //             Tell us <br />
// // //             about your requirements
// // //           </h2>
// // //         </div>

// // //         <div className="contact-right">
// // //           <form className="contact-form">
// // //             <div className="form-row">
// // //               <div className="form-group">
// // //                 <label>
// // //                   First name<span>*</span>
// // //                 </label>
// // //                 <input type="text" required />
// // //               </div>

// // //               <div className="form-group">
// // //                 <label>
// // //                   Last name<span>*</span>
// // //                 </label>
// // //                 <input type="text" required />
// // //               </div>
// // //             </div>

// // //             <div className="form-group full">
// // //               <label>
// // //                 Email<span>*</span>
// // //               </label>
// // //               <input type="email" required />
// // //             </div>

// // //             <div className="form-group full">
// // //               <label>
// // //                 Company name<span>*</span>
// // //               </label>
// // //               <input type="text" required />
// // //             </div>

// // //             <div className="form-group full">
// // //               <label>
// // //                 Message<span>*</span>
// // //               </label>
// // //               <textarea rows="5" required />
// // //             </div>

// // //             <div className="form-group full">
// // //               <label>
// // //                 How did you hear about us?<span>*</span>
// // //               </label>
// // //               <input type="text" required />
// // //             </div>

// // //             {/* ✅ INR Budget Range */}
// // //             <div className="form-group full">
// // //               <label>
// // //                 Budget range<span>*</span>
// // //               </label>
// // //               <select required defaultValue="">
// // //                 <option value="" disabled>
// // //                   Please Select
// // //                 </option>
// // //                 <option value="₹50k-₹1L">₹50,000 – ₹1,00,000</option>
// // //                 <option value="₹1L-₹5L">₹1,00,000 – ₹5,00,000</option>
// // //                 <option value="₹5L-₹10L">₹5,00,000 – ₹10,00,000</option>
// // //                 <option value="₹10L-₹25L">₹10,00,000 – ₹25,00,000</option>
// // //                 <option value="₹25L+">₹25,00,000+</option>
// // //               </select>
// // //             </div>

// // //             <button className="submit-btn" type="submit">
// // //               Submit →
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import "./ContactPage.css";

// // export default function ContactPage() {
// //   return (
// //     <div className="contact-page">
// //       <div className="contact-container">
// //         <div className="contact-left">
// //           <h2 className="contact-title">
// //             Tell us <br />
// //             about your requirements
// //           </h2>
// //         </div>

// //         <div className="contact-right">
// //           <form className="contact-form">
// //             <div className="form-row">
// //               <div className="form-group">
// //                 <label>
// //                   First name<span>*</span>
// //                 </label>
// //                 <input type="text" required />
// //               </div>

// //               <div className="form-group">
// //                 <label>
// //                   Last name<span>*</span>
// //                 </label>
// //                 <input type="text" required />
// //               </div>
// //             </div>

// //             <div className="form-group full">
// //               <label>
// //                 Email<span>*</span>
// //               </label>
// //               <input type="email" required />
// //             </div>

// //             <div className="form-group full">
// //               <label>
// //                 Company name<span>*</span>
// //               </label>
// //               <input type="text" required />
// //             </div>

// //             <div className="form-group full">
// //               <label>
// //                 Message<span>*</span>
// //               </label>
// //               <textarea rows="5" required />
// //             </div>

// //             <div className="form-group full">
// //               <label>
// //                 How did you hear about us?<span>*</span>
// //               </label>
// //               <input type="text" required />
// //             </div>

// //             {/* ✅ INR Budget Range */}
// //             <div className="form-group full">
// //               <label>
// //                 Budget range<span>*</span>
// //               </label>

// //               <select required defaultValue="">
// //                 <option value="" disabled>
// //                   Please Select
// //                 </option>

// //                 <option value="INR 50,000 – INR 100,000">
// //                   INR 50,000 – INR 100,000
// //                 </option>

// //                 <option value="INR 1,00,000 – INR 25,00,000">
// //                   INR 1,00,000 – INR 5,00,000
// //                 </option>
// //                 <option value="I'm not sure yet">
// //                   I'am not sure yet
// //                 </option>

                
// //               </select>
// //             </div>

// //             <button className="submit-btn" type="submit">
// //               Submit →
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import TabBar from "../components/TabBar";
// import SecondNavbar from "../components/SecondNavbar";
// import Sidebar from "../components/Sidebar";

// import "../App.css";
// import "./ContactPage.css";

// /* ✅ SMALL ICON LOGOS (TabBar icons like Sidebar) */
// import tabIconPX from "../assets/logoPX.png";
// import tabIconPV from "../assets/logoPV.png";
// import tabIconPC from "../assets/logoPC.png";
// import arrowIcon from "../assets/arrow.png";
// /* ✅ NAVBAR LOGO (Penultimate X header logo) */
// import navLogoX from "../assets/22-removebg-preview.png";

// export default function ContactPage() {
//   const navigate = useNavigate();

//   // ✅ Keep Digital tab active in Contact page
//   const [activeTab, setActiveTab] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // ✅ same TabBar sections (for switching tabs from header)
//   const sections = [
//     {
//       title: "Penultimate X",
//       navTitle: "Penultimate X",
//       tabIcon: tabIconPX,
//       topColor: "#FF7A66",
//       pageColor: "#ffffff",
//       textColor: "#111111",
//       path: "/digital/home"
//     },
//     {
//       title: "Penultimate V",
//       navTitle: "Penultimate Ventures",
//       tabIcon: tabIconPV,
//       topColor: "#CFEFFF",
//       pageColor: "#000000",
//       textColor: "#ffffff",
//       path: "/ventures/home"
//     },
//     {
//       title: "Penultimate C",
//       navTitle: "Penultimate Capital",
//       tabIcon: tabIconPC,
//       topColor: "#0E5A5F",
//       pageColor: "#DDEFE8",
//       textColor: "#000000",
//       path: "/capital/penultimate-capital"
//     }
//   ];

//   // ✅ SecondNavbar menu links (your required 3 items)
//   const menuItems = ["Services", "About", "Contact"];

//   return (
//     <div className="App" style={{ backgroundColor: "#ffffff", color: "#111111" }}>
//       {/* ✅ SAME HEADER (TabBar) */}
//       <TabBar
//         activeTab={activeTab}
//         setActiveTab={(i) => {
//           setActiveTab(i);
//           navigate(sections[i].path);
//         }}
//         isSidebarOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//         sections={sections}
//       />

//       {/* ✅ SAME HEADER (SecondNavbar) */}
//       <SecondNavbar
//         activeTab={activeTab}
//         logo={navLogoX}
//         title={"Penultimate X"}
//         navColor={"#ffffff"}
//         textColor={"#111111"}
//         menuItems={menuItems}
//       />

//       {/* ✅ SAME SIDEBAR */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//         onSelectTab={(i) => {
//           setActiveTab(i);
//           navigate(sections[i].path);
//         }}
//       />

//       {/* ✅ YOUR OLD CONTACT PAGE UI (UNCHANGED) */}
//       <main className="content tab-0">
//         <div className="content-inner">
//           <div className="contact-page">
//             <div className="contact-container">
//               <div className="contact-left">
//                 <h2 className="contact-title">
//                   Tell us <br />
//                   about your requirements
//                 </h2>
//               </div>

//               <div className="contact-right">
//                 <form className="contact-form">
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>
//                         First name<span>*</span>
//                       </label>
//                       <input type="text" required />
//                     </div>

//                     <div className="form-group">
//                       <label>
//                         Last name<span>*</span>
//                       </label>
//                       <input type="text" required />
//                     </div>
//                   </div>

//                   <div className="form-group full">
//                     <label>
//                       Email<span>*</span>
//                     </label>
//                     <input type="email" required />
//                   </div>

//                   <div className="form-group full">
//                     <label>
//                       Company name<span>*</span>
//                     </label>
//                     <input type="text" required />
//                   </div>

//                   <div className="form-group full">
//                     <label>
//                       Message<span>*</span>
//                     </label>
//                     <textarea rows="5" required />
//                   </div>

//                   <div className="form-group full">
//                     <label>
//                       How did you hear about us?<span>*</span>
//                     </label>
//                     <input type="text" required />
//                   </div>

//                   {/* ✅ INR Budget Range */}
//                   <div className="form-group full">
//                     <label>
//                       Budget range<span>*</span>
//                     </label>

//                     <select required defaultValue="">
//                       <option value="" disabled>
//                         Please Select
//                       </option>

//                       <option value="INR 50,000 – INR 100,000">
//                         INR 50,000 – INR 100,000
//                       </option>

//                       <option value="INR 1,00,000 – INR 5,00,000">
//                         INR 1,00,000 – INR 5,00,000
//                       </option>

//                       <option value="I'm not sure yet">I'am not sure yet</option>
//                     </select>
//                   </div>

//                   <button className="submit-btn" type="submit">
//                     Submit →
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* ✅ SAME FOOTER LIKE HOME PAGE */}
//           <footer className="footer-section">
//             <div className="footer-line-top" />

//             <div className="footer-grid">
//               <div className="footer-col">
//                 <div className="footer-label">Let's talk</div>
//                 <div className="footer-big">hello@penultimatex.com</div>

//                 {/* <button
//                   className="footer-contact-btn"
//                   onClick={() => navigate("/contact")}
//                 >
//                   <span>Contact us</span>
//                   <span className="footer-arrow">→</span>
//                 </button> */}
//                  <button className="about-contact-btn" onClick={() => navigate("/contact")}>
//                   <span className="title">Contact us</span>
//                   <img src={arrowIcon} alt="arrow" className="about-arrow-img" />
//                 </button>
//               </div>

//               <div className="footer-col">
//                 <div className="footer-label">Social</div>
//                 <div className="footer-link">X (Twitter)</div>
//                 <div className="footer-link">Instagram</div>
//                 <div className="footer-link">LinkedIn</div>
//               </div>

//               <div className="footer-col">
//                 <div className="footer-label">Locations</div>
//                 <div className="footer-big">
//                   Office address <br />
//                   T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1 <br />
//                   Raigurgam panmaktha, Hyderabad Knowledge City <br />
//                   Serilingampally, Hyderabad, Telangana 500081.
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TabBar from "../components/TabBar";
import SecondNavbar from "../components/SecondNavbar";
import Sidebar from "../components/Sidebar";

import "../App.css";
import "./ContactPage.css";

/* ✅ SMALL ICON LOGOS (TabBar icons like Sidebar) */
import tabIconPX from "../assets/logoPX.png";
import tabIconPV from "../assets/logoPV.png";
import tabIconPC from "../assets/logoPC.png";
import arrowIcon from "../assets/arrow.png";
/* ✅ NAVBAR LOGO (Penultimate X header logo) */
import navLogoX from "../assets/22-removebg-preview.png";

export default function ContactPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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

  const menuItems = ["Services", "About", "Contact"];

  return (
    <div className="App" style={{ backgroundColor: "#ffffff", color: "#111111" }}>
      {/* ✅ SAME HEADER (TabBar) */}
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

      {/* ✅ SAME HEADER (SecondNavbar) */}
      <SecondNavbar
        activeTab={activeTab}
        logo={navLogoX}
        title={"Penultimate X"}
        navColor={"#ffffff"}
        textColor={"#111111"}
        menuItems={menuItems}
      />

      {/* ✅ SAME SIDEBAR */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSelectTab={(i) => {
          setActiveTab(i);
          navigate(sections[i].path);
        }}
      />

      {/* ✅ CONTACT PAGE UI */}
      <main className="content tab-0">
        <div className="content-inner">
          <div className="contact-page">
            <div className="contact-container">
              <div className="contact-left">
                <h2 className="contact-title">
                  Tell us <br />
                  about your requirements
                </h2>
              </div>

              <div className="contact-right">
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        First name<span>*</span>
                      </label>
                      <input type="text" required />
                    </div>

                    <div className="form-group">
                      <label>
                        Last name<span>*</span>
                      </label>
                      <input type="text" required />
                    </div>
                  </div>

                  <div className="form-group full">
                    <label>
                      Email<span>*</span>
                    </label>
                    <input type="email" required />
                  </div>

                  <div className="form-group full">
                    <label>
                      Company name<span>*</span>
                    </label>
                    <input type="text" required />
                  </div>

                  <div className="form-group full">
                    <label>
                      Message<span>*</span>
                    </label>
                    <textarea rows="5" required />
                  </div>

                  <div className="form-group full">
                    <label>
                      How did you hear about us?<span>*</span>
                    </label>
                    <input type="text" required />
                  </div>

                  <div className="form-group full">
                    <label>
                      Budget range<span>*</span>
                    </label>

                    <select required defaultValue="">
                      <option value="" disabled>
                        Please Select
                      </option>

                      <option value="INR 50,000 – INR 100,000">
                        INR 50,000 – INR 100,000
                      </option>

                      <option value="INR 1,00,000 – INR 5,00,000">
                        INR 1,00,000 – INR 5,00,000
                      </option>

                      <option value="I'm not sure yet" style={{ fontWeight: "700" }}>I&apos;m not sure yet</option>
                    </select>
                  </div>

                  <button className="submit-btn" type="submit">
                    Submit →
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ✅ CONTACT PAGE FOOTER (UNIQUE CLASSES ✅) */}
          <footer className="contact-footer-section">
            <div className="contact-footer-line-top" />

            <div className="contact-footer-inner">
              <div className="contact-footer-grid">
                <div className="contact-footer-col">
                  <div className="contact-footer-label">Let's talk</div>
                  <div className="contact-footer-big">hello@penultimatex.com</div>

                  <button
                    className="contact-footer-contact-btn"
                    onClick={() => navigate("/contact")}
                    type="button"
                  >
                    <span className="contact-footer-btn-title">Contact us</span>
                    <img
                      src={arrowIcon}
                      alt="arrow"
                      className="contact-footer-arrow-img"
                    />
                  </button>
                </div>

                <div className="contact-footer-col">
                  <div className="contact-footer-label">Social</div>
                  <div className="contact-footer-link">X (Twitter)</div>
                  <div className="contact-footer-link">Instagram</div>
                  <div className="contact-footer-link">LinkedIn</div>
                </div>

                <div className="contact-footer-col">
                  <div className="contact-footer-label">Locations</div>
                  <div className="contact-footer-big">
                    Office address <br />
                    T-Hub, 7F-158, 7th Floor, Plot no 1/C, Sy No 83/1 <br />
                    Raigurgam panmaktha, Hyderabad Knowledge City <br />
                    Serilingampally, Hyderabad, Telangana 500081.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
