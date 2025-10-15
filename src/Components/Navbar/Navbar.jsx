import React from "react";
import './Navbar.scss'
import Logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <div className="nav-flex">
          <div className="nav-flex_left">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-flex_right">
            <div>
              <i class="ri-phone-line"></i>
              <p>1180</p>
            </div>
            <div>
              <i class="ri-logout-box-r-line"></i>
              <i class="ri-arrow-drop-down-line"></i>
            </div>
            <div>
                UZ
            </div>
            <div>
              <i class="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
