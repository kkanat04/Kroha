import React from "react";
import "./Reviews.css";
import Rectangle15 from "../images/Rectangle15.png";
import Rectangle5 from "../images/Rectangle5.png";
import Rectangle6 from "../images/Rectangle6.png";
import Rectangle7 from "../images/Rectangle7.png";
import Rectangle8 from "../images/Rectangle8.png";
import Asteria from "../images/Asteria.png";

function Reviews(props) {
  
  return (
    <div>
      <div className="first">
        <h2>Отзывы</h2>
        <div>
          <p>Наш средний рейтинг 4.7</p>
          <img src={Rectangle15} />
        </div>
        <div className="main">
          <div></div>
          <div className="img">
            <img className="imges" src={Rectangle5} />
            <h3>Оксана Тюрина</h3>
            <div className="ast">
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
            </div>
            </div>
          </div>
          <div className="img">
            <img className="imges" src={Rectangle6} />
            <h3>Яна Петрова</h3>
            <div className="ast">
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
            </div>
            <h3>
              Достоинства: Очень теплый <br /> материал <br />
              Недостатки: Нет
            </h3>
          </div>
          <div className="img">
            <img className="imges" src={Rectangle7} />
            <h3>Марина Фомина</h3>
            <div className="ast">
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
            </div>
            <h3>
              Достоинства: Легкий <br />
              и дышащий костюм
              <br />
              Недостатки: Маломерит
            </h3>
          </div>
          <div className="img">
            <img className="imges" src={Rectangle8} />
            <h3>Ульяна Ткачева</h3>
            <div className="ast">
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
              <img className="Asteria" src={Asteria} />
            </div>
            <p>
              Достоинства: Очень мягкая <br /> подошва
              <br />
              Недостатки: Нет
            </p>
          </div>
        </div>
        <div>
          <h2>Наталья Иванова</h2>
          <div className="ast">
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
          </div>
          <p>
            Заказывала сыну штанишки. Тонкие , лёгкие спортивные штаны , идут
            размер в размер, с запасом лучше не <br />
            брать , на мальчика 100см взяла 110 размер , после стирки не сели ,
            очень большие складки внизу , но ничего <br />
            страшного дорастёт, по позже будем носить , а в целом для детского
            сада отлично подойдут!
          </p>

          <h2>Анна Казакова</h2>
          <div className="ast">
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
            <img className="Asteria" src={Asteria} />
          </div>
          <p>
            Костюм очень понравился! Ткань приятная, на худенького мальчика
            просто замечательно. Обычно проблема <br />
            подобрать штаны, все сваливается, даже на завязках. Я в восторге!
            <br /> Смотрится очень хорошо. А сын в восторге от машин на кофте!
          </p>
        </div>
        <button className="button-rew">Оставить отзыв</button>
      </div>
      
  );
}

export default Reviews;
