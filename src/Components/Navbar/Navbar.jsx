import React, { useState } from "react";
import './Navbar.scss'
import Logo from "../../assets/result.png";
import Sidebar from "../Sidebar/Sidebar";
export default function Navbar() {
  const[holat, setHolat] = useState('')
  function chngeHolat(){
    setHolat("-open")
  }

  return (
    <>
      <nav id="nav">
        <div className="nav-flex">
          <div className="nav-flex_left">
            <img src={Logo}  alt="" />
          </div>
          <div className="nav-flex_right">
            {/* <div>
              <p>Biz haqimizda</p>
            </div>
            <div>
                <p>Mahsulotlar</p>
            </div>
            <div>
                <p>Aloqa</p>
            </div> */}
              <i class="ri-menu-line" onClick={()=>chngeHolat()}></i>
          </div>
        </div>
      </nav>
      <Sidebar holat={holat} setHolat={setHolat}/>
    </>
  );
}
