import react from "react";
import "./Header.scss";
import fridge1 from '../../assets/fridge1.png'

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-text">
          <p>To'lovlar - juda oson!</p>
          <span>
            Endi SQB (UZCARD) bankomatlarida kommunal xizmatlar va mobil aloqa
            uchun to‘lov mavjud
          </span>
          <b>Tez. Ishonchli. Navbatlarsiz.</b>
          <button>Yaqin bankomatni topish</button>
        </div>
      <div className="header-bg">
        <img src={fridge1} alt="" />
      </div>
      </div>
    </header>
  );
}

export default Header;
