import React from 'react'
import { Router , Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Yangiliklar from './Yangiliklar'
import Elonlar from './Elonlar'
import Moliyaviy from './Moliyaviy'
import Bozor from './Bozor'
import './News.scss';


export default function News() {
  return (
    <section id='news'>
        <div className="news">
            <div className="news-selections">
                <div className='yangiliklar'>
                    <Link to={'/yangiliklar'}>Yangiliklar</Link>
                </div>
                <div className='elonlar'>
                    <Link to={'/elonlar'}>E'lonlar</Link>
                </div>
                <div  className='moliyaviy'>
                    <Link to={'/tahlil'}>Moliyaviy tahlil</Link>
                </div>
                <div className='izlanishlar'>
                    <Link to={'/izlanishlar'}>
                        Bozor tahlillari va izlanishlar
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/yangiliklar' element={<Yangiliklar/>}/>
            <Route path='/elonlar' element={<Elonlar/>}/>
            <Route path='/tahlil' element={<Moliyaviy/>}/>
            <Route path='/izlanishlar' element={<Bozor/>}/>
        </Routes>
    </section>
  )
}
