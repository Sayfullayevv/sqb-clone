import React, { useState } from "react";
import './Sidebar.scss'
import Logo from "../../assets/result.png";

export default function Sidebar({holat , setHolat}) {
    function chngeHolat(){
        setHolat('-close')
    }

    return (
        <>
            <div className={`sidebar sidebar-state${holat}`}>
                <i class="ri-close-large-line" id="close-sidebar" onClick={()=>chngeHolat()} ></i>
                <ul>
                    <li>
                        <a href="#home" onClick={()=>chngeHolat()}>Asosiy</a>
                    </li>
                    <li>
                        <a href="#individuals" onClick={()=>chngeHolat()}>Biz haqimizda</a>
                    </li>
                    <li>
                        <a href="#vital" onClick={()=>chngeHolat()}>Mahsulotlar</a>
                    </li>
                    <li><a href="#contact" onClick={()=>chngeHolat()}>Aloqa</a></li>
                </ul>
            </div>
        </>
    );
}
