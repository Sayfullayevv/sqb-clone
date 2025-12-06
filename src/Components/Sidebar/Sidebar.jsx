import React, { useState } from "react";
import './Sidebar.scss'
import Logo from "../../assets/result.png";
import { HashLink } from "react-router-hash-link";

export default function Sidebar({ holat, setHolat }) {
    function chngeHolat() {
        setHolat('-close')
    }

    return (
        <>
            <div className={`sidebar sidebar-state${holat}`}>
                <i class="ri-close-large-line" id="close-sidebar" onClick={() => chngeHolat()} ></i>
                <ul>
                    <li>
                        <HashLink smooth onClick={() => chngeHolat()} to={'/#home'}>
                            Asosiy
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={'/#individuals'} onClick={() => chngeHolat()} smooth>Biz haqimizda</HashLink>
                    </li>
                    <li>
                        <HashLink to={'/#vital'} onClick={() => chngeHolat()} smooth>
                            Mahsulotlar
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={'/#contact'} onClick={() => chngeHolat()} smooth>
                            Aloqa
                        </HashLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
