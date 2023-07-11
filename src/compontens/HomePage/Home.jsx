import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="home_page">
        <button className="home_logo">Войти на сайт</button>
        <input className="home_input" type="text" />
        <button className="home_btn_1">Найти</button>
        <div className="home_btn">
          <button className="home_plus">+</button>
          <button className="home_vk"></button>
          <button className="home_youtub"></button>
        </div>
      </div>
      <div className="home_content">
        <div className="home_content_right">
          <div className="home_content_text home_content_text-title">
            Навигация по сайту
          </div>
          <hr className="home_content_hr" />
          <a className="home_content_text" href="/anime/">
            Аниме
          </a>
          <a className="home_content_text" href="/forum/">
            Форум
          </a>
          <a className="home_content_text" href="/wiki/">
            Нарутопедия
          </a>
          <hr className="home_content_hr" />
          <a className="home_content_text" href="/naruuto/">
            Смотреть Наруто
          </a>
          <a className="home_content_text" href="/mango/">
            Манга Наруто
          </a>
          <a className="home_content_text" href="/novels/">
            Новеллы Наруто
          </a>
          <a className="home_content_text" href="/stories/">
            Видео-истории
          </a>
          <a className="home_content_text" href="/reviews/">
            Видео-обзоры
          </a>
          <a className="home_content_text" href="/ninja/">
            Все герои
          </a>
          <a className="home_content_text" href="/by-episodes/">
            Список техник
          </a>
          <hr className="home_content_hr" />
          <a className="home_content_text" href="/jobs/">
            Ваканции
          </a>
          <a className="home_content_text" href="/subscription/">
            Оповещания ВК И ТG
          </a>
          <a className="home_content_text" href="/feedback.html">
            Наши контакты
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
