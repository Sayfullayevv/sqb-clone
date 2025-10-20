import react from "react";
import "./Header.scss";

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
      </div>
      {/* <div className="header-bg"></div> */}
      <div className="header-two-btn">
        <button>Korporativ mijozlar uchun</button>
      </div>
    </header>
  );
}

export default Header;
