import React from "react";
import './Sidebar.scss'
import Logo from "../../assets/result.png";
export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <i class="ri-close-circle-line" id="close-sidebar"></i>
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
