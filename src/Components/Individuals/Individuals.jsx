import React from 'react'
import keyimg from '../../assets/ipotekaKeys.webp'
import sqbmini from '../../assets/sqbMobile.png'
import sqbphone from '../../assets/sqb.mobile (phone).webp'
import './Individuals.scss'
import ind from '../../assets/ind.jpg'
import ind1 from '../../assets/ind1.jpg'
import Logo from "../../assets/result.png";

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
                <div className="individuals-about">
                    Novinko Tech sovuq saqlash xonalari va omborlarini quradi, sovutish moslamalari va portlovchi muzlatgichlarni ishlab chiqaradi va o'rnatadi.
                </div>
                <div className="individuals-grid">
                    <div>
                        <i class="ri-shake-hands-line"></i>
                        <p>Biz mijozlarimizga narx, sifat va ishonchlilikning eng yaxshi kombinatsiyasini taklif etamiz</p>
                    </div>
                    <div>
                        <i class="ri-hand-coin-line"></i>
                        <p>Biz moslashtirilgan yondashuvni va belgilangan byudjetga moslashish imkoniyatini taqdim etamiz</p>
                    </div>
                    <div>
                        <i class="ri-car-fill"></i>
                        <p>Biz atigi bir kun ichida tayyor sovutish kameralarini yaratamiz, eng yaxshi narx-sifat nisbatini taklif qilamiz</p>
                    </div>
                    <div>
                        <img src={Logo} className='icon' alt="" />
                        <p>24 oylik kengaytirilgan kafolatni taqdim etadi</p>
                    </div>
                    <div>
                        <i class="ri-bank-card-2-fill"></i>
                        <p>Biz o'z uskunalarimizni o'rnatamiz, shuning uchun bajarilgan ishlarning sifati, buyurtmaning to'liqligi uchun to'liq javobgarlikni o'z zimmamizga olamiz</p>
                    </div>
                    <div>
                        <i class="ri-pin-distance-line"></i>
                        <p>Mijozning ehtiyojlari va byudjetiga mos keladigan moslashuvchan yetkazib berish muddatlarini taklif qilamiz</p>
                    </div>
                </div>
                <div className="individuals-about">
                    Biz doimiy ravishda rivojlanib boramiz, bozorni o'rganamiz va ishlab chiqarishimizga innovatsion sovutish tizimlari va ishlanmalarini joriy etamiz.
                </div>
            </div>
        </section>
    )
}
