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
                        Asosiy
                    </li>
                    <li>
                        Biz haqimizda
                    </li>
                    <li>
                        Mahsulotlar
                    </li>
                    <li>Aloqa</li>
                </ul>
            </div>
        </>
    );
}
