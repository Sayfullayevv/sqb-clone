import React from 'react'
import './Vital.scss'
import fridge1 from '../../assets/fridge1.png'
import fridge2 from '../../assets/fridge2.png'
import cardmain from '../../assets/card-main-page-mob-2.webp'
import museum3d from '../../assets/3Dmuseum.webp'
import { products } from "../../assets/all_products";
import { Link } from "react-router-dom";

export default function Vital() {
    return (
        <section id='vital'>
            <div className="vital">
                <p className='vital-txt'>Mahsulotlar</p>
                <div className="vital-grid">
                    {products.map((e) => {
                        return (
                            <div className='vital-grid-element'>
                                <Link to={`/product/${e.productId}`} onClick={()=>{window.scrollTo(0,0)}}>
                                    <img src={e.productImage} alt="" />
                                </Link>
                                <p className='heading'>
                                    {e.productName}
                                </p>
                                <div>
                                    <span>Sovutish tizimi</span>
                                    <p>-50° gacha</p>
                                </div>
                                <div>
                                    <span>Mahsulot kafolati</span>
                                    <p>3 yil</p>
                                </div>
                                <Link className='btnsss' to={`/product/${e.productId}`}>
                                    <button id='buynow'>Sotib olish</button>
                                </Link>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    )
}
