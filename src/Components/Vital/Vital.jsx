import React from 'react'
import './Vital.scss'
import fridge1 from '../../assets/fridge1.png'
import fridge2 from '../../assets/fridge2.png'
import cardmain from '../../assets/card-main-page-mob-2.webp'
import museum3d from '../../assets/3Dmuseum.webp'

export default function Vital() {
  return (
    <section id='vital'> 
        <div className="vital">
            <p className='vital-txt'>Mahsulotlar</p>
            <div className="vital-grid">
                <div className='vital-grid-element'>
                    <img src={fridge1} alt="" />
                    <p className='heading'>
                        Fridge LE
                    </p>
                    <div>
                        <span>Sovutish tizimi</span>
                        <p>-50° gacha</p>
                    </div>
                    <div>
                        <span>Mahsulot kafolati</span>
                        <p>3 yil</p>
                    </div>
                    <div>
                        <span>Mahsulot narxi</span>
                        <p>250.000.000 so'm</p>
                    </div>
                    <button>Sotib olish</button>
                </div>
                <div className='vital-grid-element'>
                    <img src={fridge2} alt="" />
                    <span className='heading'>Fridge LTS</span>
                     <div>
                        <span>Sovutish tizimi</span>
                        <p>-50° gacha</p>
                    </div>
                    <div>
                        <span>Mahsulot kafolati</span>
                        <p>3 yil</p>
                    </div>
                    <div>
                        <span>Mahsulot narxi</span>
                        <p>250.000.000 so'm</p>
                    </div>
                    <button>Sotib olish</button>
                </div>
            </div>
        </div>
    </section>
  )
}
