import React from "react";
import "./History.scss";
import Logo from "../../assets/result.png";
import history from '../../assets/factory.jpg'
import DoughnutWithLabels from "../chart";

export default function History() {
  return (
    <section id="history">
      <div className="history">
        <div className="history-flex">
          <img src={Logo} className="history-logo" alt="" />
          <span>- 5 yillik tarix</span>
        </div>
        <p>
          Ishlab chiqarish bo'yicha faoliyatimizni 2020-yilda boshlagan bo'lishimizga qaramay, qisqa fursatda yurtimizda tadbirkorlikning rivojlanishiga, qolaversa, bu orqali iqtisodiyotiga ulkan hissa qo'shdi.
        </p>
        <img src={history} className="historyimg" />
        <button>Batafsil</button>
      </div>

      <div className="chart">
        <DoughnutWithLabels />
      </div>
    </section>
  );
}
