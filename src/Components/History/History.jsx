import React from "react";
import "./History.scss";
import Logo from "../../assets/logo.png";
import history from '../../assets/bank-history-mob.webp'

export default function History() {
  return (
    <section id="history">
      <div className="history">
        <img src={Logo} className="history-logo" alt="" />
        <span>O‘zsanoatqurilishbank - 100 yillik tarixga ega</span>
        <p>
            Bank tarixi 1922-yilga borib taqaladi va mamlakat iqtisodiyotining rivojlanishi bilan uzviy bog'liq
        </p>
        <button>Batafsil</button>
        <img src={history} className="historyimg" alt="" />
      </div>
    </section>
  );
}
