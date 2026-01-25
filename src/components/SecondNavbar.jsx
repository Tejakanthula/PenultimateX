// // // 
// // import React from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import "./SecondNavbar.css";

// // const SecondNavbar = ({ logo, navColor, textColor, menuItems }) => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const scrollToServices = () => {
// //     // ✅ Works only for Digital Home (because "What we do" exists there)
// //     if (location.pathname.startsWith("/digital/home")) {
// //       const target = document.querySelector(".whatwedo-section");
// //       if (target) {
// //         target.scrollIntoView({ behavior: "smooth", block: "start" });
// //       }
// //     } else {
// //       // ✅ If user is in Ventures/Capital page, first go to Digital home then scroll
// //       navigate("/digital/home");

// //       setTimeout(() => {
// //         const target = document.querySelector(".whatwedo-section");
// //         if (target) {
// //           target.scrollIntoView({ behavior: "smooth", block: "start" });
// //         }
// //       }, 400);
// //     }
// //   };

// //   const handleMenuClick = (item) => {
// //     if (item === "Services") {
// //       scrollToServices();
// //       return;
// //     }

// //     if (item === "About") {
// //       navigate("/about");
// //       return;
// //     }

// //     if (item === "Contact") {
// //       navigate("/contact");
// //       return;
// //     }
// //   };

// //   return (
// //     <div className="second-navbar" style={{ backgroundColor: navColor, color: textColor }}>
// //       <div className="second-navbar-left">
// //         <img src={logo} alt="Nav logo" className="second-navbar-logo" />
// //       </div>

// //       <div className="second-navbar-right">
// //         {menuItems?.map((item, idx) => (
// //           <button
// //             key={idx}
// //             className="second-navbar-link"
// //             onClick={() => handleMenuClick(item)}
// //             style={{ color: textColor }}
// //           >
// //             {item}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SecondNavbar;


// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./SecondNavbar.css";

// const SecondNavbar = ({ logo, navColor, textColor, menuItems }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const scrollToServices = () => {
//     // ✅ Works only for Digital Home (because "What we do" exists there)
//     if (location.pathname.startsWith("/digital/home")) {
//       const target = document.querySelector(".whatwedo-section");
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       // ✅ If user is in Ventures/Capital page, first go to Digital home then scroll
//       navigate("/digital/home");

//       setTimeout(() => {
//         const target = document.querySelector(".whatwedo-section");
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 400);
//     }
//   };

//   const handleMenuClick = (item) => {
//     if (item === "Services") {
//       scrollToServices();
//       return;
//     }

//     if (item === "About") {
//       navigate("/about");
//       return;
//     }

//     if (item === "Contact") {
//       // ✅ Ventures Contact Page
//       if (location.pathname.startsWith("/ventures")) {
//         navigate("/ventures/contact");
//       } else {
//         // ✅ Default Contact Page
//         navigate("/contact");
//       }
//       return;
//     }
//   };

//   return (
//     <div
//       className="second-navbar"
//       style={{ backgroundColor: navColor, color: textColor }}
//     >
//       <div className="second-navbar-left">
//         <img src={logo} alt="Nav logo" className="second-navbar-logo" />
//       </div>

//       <div className="second-navbar-right">
//         {menuItems?.map((item, idx) => (
//           <button
//             key={idx}
//             className="second-navbar-link"
//             onClick={() => handleMenuClick(item)}
//             style={{ color: textColor }}
//             type="button"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecondNavbar;


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SecondNavbar.css";

const SecondNavbar = ({ logo, navColor, textColor, menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToServices = () => {
    // ✅ Works only for Digital Home (because "What we do" exists there)
    if (location.pathname.startsWith("/digital/home")) {
      const target = document.querySelector(".whatwedo-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // ✅ If user is in Ventures/Capital page, first go to Digital home then scroll
      navigate("/digital/home");

      setTimeout(() => {
        const target = document.querySelector(".whatwedo-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    }
  };

  const handleMenuClick = (item) => {
    if (item === "Services") {
      scrollToServices();
      return;
    }

    if (item === "About") {
      navigate("/about");
      return;
    }

    // if (item === "Contact") {
    //   // ✅ CAPITAL Contact Page
    //   if (location.pathname.startsWith("/capital")) {
    //     navigate("/capital/contact");
    //     return;
    //   }

    //   // ✅ Ventures Contact Page
    //   if (location.pathname.startsWith("/ventures")) {
    //     navigate("/ventures/contact");
    //     return;
    //   }

    //   // ✅ Default Contact Page
    //   navigate("/contact");
    //   return;
    // }

    if (item === "Contact") {
  // ✅ Ventures Contact Page
  if (location.pathname.startsWith("/ventures")) {
    navigate("/ventures/contact");
  }
  // ✅ Capital Contact Page
  else if (location.pathname.startsWith("/capital")) {
    navigate("/capital/contact");
  }
  // ✅ Default Contact Page
  else {
    navigate("/contact");
  }
  return;
}

  };

  return (
    <div
      className="second-navbar"
      style={{ backgroundColor: navColor, color: textColor }}
    >
      <div className="second-navbar-left">
        <img src={logo} alt="Nav logo" className="second-navbar-logo" />
      </div>

      <div className="second-navbar-right">
        {menuItems?.map((item, idx) => (
          <button
            key={idx}
            className="second-navbar-link"
            onClick={() => handleMenuClick(item)}
            style={{ color: textColor }}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecondNavbar;
