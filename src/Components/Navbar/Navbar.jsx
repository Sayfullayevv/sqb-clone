import React, { useState } from "react";
import './Navbar.scss'
import Logo from "../../assets/result.png";
import Sidebar from "../Sidebar/Sidebar";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  const [holat, setHolat] = useState('')
  function chngeHolat() {
    setHolat("-open")
  }

  return (
    <>
      <nav id="nav">
        <div className="nav-flex">
          <div className="nav-flex_left">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-flex_right">
            <div>
              <p>
                <HashLink smooth to={'/#home'} style={{
                  textDecoration: 'none',
                  color: 'black'
                }}>
                  Asosiy
                </HashLink>
              </p>
            </div>
            <div>
              <p>
                <HashLink smooth to={'/#individuals'} style={{
                  textDecoration: 'none',
                  color: 'black'
                }}>
                  Biz haqimizda
                </HashLink>
              </p>
            </div>
            <div>
              <p>
                <HashLink smooth to={'/#vital'} style={{
                  textDecoration: 'none',
                  color: 'black'

                }}>
                  Mahsulotlar
                </HashLink>
              </p>
            </div>
            <div>
              <p>
                <HashLink smooth to={'/#contact'} style={{
                  textDecoration: 'none',
                  color: 'black'
                }}>
                  Aloqa
                </HashLink>
              </p>
            </div>
            <i class="ri-menu-line" onClick={() => chngeHolat()}></i>
          </div>
        </div>
      </nav>
      <Sidebar holat={holat} setHolat={setHolat} />
    </>
  );
}
