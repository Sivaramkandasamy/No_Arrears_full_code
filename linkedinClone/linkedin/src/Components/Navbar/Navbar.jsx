import React, { useState } from "react";
import "./Navbar.css";
import img1 from "./Assets/linkedin_logo_1.png";
import img2 from "./Assets/img2.jpg";
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { TbBriefcaseFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleBusinessDropdown = () => {
    setBusinessDropdownOpen(!businessDropdownOpen);
  };

  const goToRoute = (route) => {
    navigate(route);
    setDropdownOpen(false);
    setBusinessDropdownOpen(false);
  };

  return (
    <div className="row">
      <div className="navbar-main col-lg-9 d-flex ">
        <div className="navbar-left">
          <img className="linkedin-logo" src={img1} alt="LinkedIn Logo" />

          <input type="text" className="search-input" placeholder="  Search" />
        </div>
        <div className="react-icons">
          <div className="react-icon" onClick={() => goToRoute("/home")}>
            <HiHome size={25} />
            <span>
              Home <i className="bi bi-house-fill"></i>
            </span>
          </div>
          <div className="react-icon" onClick={() => goToRoute("/network")}>
            <FaUserGroup size={25} />
            <span> My Network</span>
          </div>
          <div className="react-icon" onClick={() => goToRoute("/jobs")}>
            <TbBriefcaseFilled size={25} />
            <span>Jobs</span>
          </div>
          <div className="react-icon" onClick={() => goToRoute("/messaging")}>
            <AiFillMessage size={25} />
            <span>Messaging</span>
          </div>
          <div
            className="react-icon"
            onClick={() => goToRoute("/notifications")}
          >
            <IoIosNotifications size={25} />
            <span>Notifications</span>
          </div>
          <div className="react-icon" onClick={toggleDropdown}>
            <img className="user-logo" src={img2} alt="User" />
            <span>
              Me <i className="dropdown-toggle-icon" />
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div onClick={() => goToRoute("/profile")}>Profile</div>
                <div onClick={() => goToRoute("/settings")}>Settings</div>
                <div onClick={() => goToRoute("/logout")}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-main1 col-lg-3">
        <div className="react-icon1" onClick={toggleBusinessDropdown}>
          <TbGridDots size={25} />
          <span>
            For Business
            <i className="dropdown-toggle-icon" />
          </span>
          {businessDropdownOpen && (
            <div className="dropdown-menu">
              <div onClick={() => goToRoute("/business-profile")}>
                Business Profile
              </div>
              <div onClick={() => goToRoute("/business-settings")}>
                Business Settings
              </div>
              <div onClick={() => goToRoute("/business-logout")}>Logout</div>
            </div>
          )}
        </div>
        <div className="react-icon1" onClick={() => goToRoute("/premium")}>
          <TbAlignBoxCenterMiddleFilled size={25} />
          <span>Try Premium for 10</span>
        </div>
      </div>
    </div>
  );
}
