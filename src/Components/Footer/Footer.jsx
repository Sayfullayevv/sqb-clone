import React from 'react';
import logo from '../../assets/result.png'
import { HashLink } from 'react-router-hash-link';
import './Footer.scss';

export default function Footer() {
  return (
    <div id='footer'>
      <div className="footer-lgtx">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod placeat aut maiores sapiente consequuntur ut?
        </p>
      </div>
      <div className="footer-lnks">
        <ul>
          <li>
            <HashLink smooth to={'/#home'} style={{
              textDecoration: 'none',
              color: 'black'
            }}>Asosiy</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#individuals'} style={{
              textDecoration: 'none',
              color: 'black'
            }}>Biz haqimizda</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#vital'} style={{
              textDecoration: 'none',
              color: 'black'
            }}>Mahsulotlar</HashLink>

          </li>
          <li>
            <HashLink smooth to={'/#contact'} style={{
              textDecoration: 'none',
              color: 'black'
            }}>Aloqa</HashLink>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <HashLink smooth style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <i class="ri-instagram-line"></i>
          </HashLink>
          <HashLink smooth  style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <i class="ri-twitter-fill"></i>
          </HashLink>
          <HashLink smooth  style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <i class="ri-facebook-fill"></i>
          </HashLink>
          <HashLink smooth  style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <i class="ri-telegram-fill"></i>
          </HashLink>
          <HashLink smooth  style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <i class="ri-phone-fill"></i>
          </HashLink>
        </ul>
      </div>
    </div>
  )
}
