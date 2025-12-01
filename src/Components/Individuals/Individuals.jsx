import React from 'react'
import keyimg from '../../assets/ipotekaKeys.webp'
import sqbmini from '../../assets/sqbMobile.png'
import sqbphone from '../../assets/sqb.mobile (phone).webp'
import './Individuals.scss'
import ind from '../../assets/ind.jpg'
import ind1 from '../../assets/ind1.jpg'

export default function Individuals() {
  return (
    <section id='individuals'>
        <div className="individuals">
            <p className='individuals-txt'>Biz haqimizda</p>
            <div className="individuals-humans">
                <div>
                    <img src={ind} alt="" />
                    <span>Asoschi</span>
                </div>
                <div>
                    <img src={ind1} alt="" />
                    <span>Hisobchi</span>
                </div>
            </div>
            <div className="individuals-grid">
                <div>
                    <img src={keyimg} alt="" />
                    <span>Ipoteka</span>
                    <p>Biz bilan orzuingizdagi uyni sotib oling</p>
                </div>
                <div>
                    <i class="ri-percent-fill"></i>
                    <span>Omonatlar</span>
                    <p>Maqsadlaringiz va imkoniyatlaringizni kechiktirmang</p>
                </div>
                <div>
                <i class="ri-car-fill"></i>
                    <span>Avtokredit</span>
                    <p>Avtomobilingizni to'g'ridan to'g'ri dilerdan sotib olish imkoniyati</p>
                </div>
                <div>
                    <img src={sqbmini} className='icon' alt="" />
                    <span>SQB Mobile</span>
                    <p>Telefoningizdan barcha bank xizmatlari</p>
                    <img src={sqbphone} alt="" />
                </div>
                <div>
                    <i class="ri-bank-card-2-fill"></i>
                    <span>Kreditlar</span>
                    <p>Sizning biznesingiz uchun cheksiz imkoniyatlar</p>
                </div>
                <div>
<i class="ri-bank-card-2-fill"></i>
                    <span>Kartalar</span>
                    <p>Turli xil hayotiy vaziyatlar uchun ishonchli moliyaviy vosita</p>
                </div>
            </div>
        </div>
    </section>
  )
}
