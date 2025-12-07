import React, { useEffect, useState } from 'react';
import logo from '../../assets/result.png'
import { HashLink } from 'react-router-hash-link';
import './Contact.scss';
import FixedAddressMap from './Map';
import { useContext } from "react";
import { ShopContext } from "../../Context/Context";

export default function Contact() {
    const { feedback, setFeedback } = useContext(ShopContext);
    const [data, setData] = useState('')

    const fdback = (msg) => {
        // setFeedback([...feedback, msg])
        setData(msg)
    }
    const addfdback = () => {
        setFeedback([...feedback, data])
        document.getElementById("fdback").value = ''
        console.log(feedback);   
    }
    

    return (
        <>
            <div id="contact">
                <div className="contacts">
                    <span>Biz bilan bog'lanish</span>
                    <p>Mahsulotlarimizga buyurtma berish, qo'shimcha ma'lumotlar olish uchun biz bilan bog'laning. Taklif va savollaringiz bo'lsa yo'llang.</p>
                    <p><i class="ri-phone-fill"></i>: <a style={{
                        color: 'black'
                    }} href={'tel:+998918553235'}>+998911234567</a>
                    </p>
                    <textarea name="" id="fdback" placeholder='Taklif va savollar uchun' onChange={(e) => {
                        fdback(e.target.value);
                    }}></textarea>
                    <button onClick={()=> {addfdback()}}>Yuborish</button>
                </div>
                <div className="map">
                    <FixedAddressMap />
                </div>
            </div>
        </>
    )
}
