import react from "react";
import "./Header.scss";
import fridge1 from '../../assets/fridge1.png'
import Sidebar from "../Sidebar/Sidebar";
import { HashLink } from "react-router-hash-link";
function Header() {
  return (
    <header id="home">
      <div className="header">
        <div className="header-text">
          <p>Tanlovda adashmang!</p>
          <span>
              Biznesingiz uchun siz emas biz qayg'uramiz. Yuqori sifatli sovutish moslamalari - qulay va hamyonbop.
          </span>
          <b>Ishonchli. Sifatli. Hamyonbop. </b>
          <button>
            <HashLink smooth to={'#vital'} style={{
              textDecoration: 'none',
              color: 'white'
            }}>
              Mahsulotlarni ko'rish
            </HashLink>
          </button>
        </div>
      <div className="header-bg">
        <img src={fridge1} alt="" />
      </div>
      </div>
    </header>
  );
}

export default Header;
