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
                        Avtomobil krediti - oddiy va oson!
                    </p>
                    <div>
                        <span>Kredit stavkasi</span>
                        <p>25% dan</p>
                    </div>
                    <div>
                        <span>Kredit muddati</span>
                        <p>5 yilgacha</p>
                    </div>
                    <div>
                        <span>Kredit miqdori</span>
                        <p>600 mln so'mgacha</p>
                    </div>
                    <p>
                        Ro'yxatdan o'tish uchun hujjatlarni minimal to'plami va kredit to'lashning qulay usullari
                    </p>
                    <button>Batafsil</button>
                </div>
                <div className='vital-grid-element'>
                    <img src={fridge2} alt="" />
                    <span className='heading'>Kredit karta SQB 100 mln so'mgacha</span>
                    <p>Kredit kartasiga SQB Mobile mobil ilovasi orqali hoziroq buyurtma bering</p>
                    <button>Batafsil</button>
                </div>
                <div className='vital-grid-element'>
                    <span className='heading'>Visa Infinite</span>
                    <p>Noyob imtiyozlar va xizmatlar to'plamiga ega maxsus bank kartasi</p>
                    <button>Batafsil</button>
                    <img src={cardmain} alt="" />
                </div>
                <div className='vital-grid-element'>
                    <span className='heading'>SQB Mobile - barcha kerakli to'lovlar endi telefoningizda</span>
                    <p>
                        Qulay mobil ilova yordamida kundalik to'lovlarni amalga oshiring.
                    </p>
                    <button className='installnow'>Hoziroq o'rnating!</button>
                </div>
                <div className='vital-grid-element'>
                    <span className='heading'>Muzey 360° onlayn</span>
                    <p>Toshkentning mashhur diqqatga sazovor joylariga virtual sayohat <br /> <i>Ko'rishni boshlang</i></p>
                    <img src={museum3d} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
