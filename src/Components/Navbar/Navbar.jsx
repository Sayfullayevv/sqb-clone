import React from "react";
import './Navbar.scss'
import Logo from "../../assets/img12.jpg";
export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <div className="nav-flex">
          <div className="nav-flex_left">
            <img src={Logo}  alt="" />
          </div>
          <div className="nav-flex_right">
            <div>
              <p>Biz haqimizda</p>
            </div>
            <div>
                <p>Mahsulotlar</p>
            </div>
            <div>
                <p>Aloqa</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
