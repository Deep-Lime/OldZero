import React from 'react';
import s from './Sitebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
      <div className={s.sidebar}>
        <div className={s.sidebar__box}> 
          <h3>Сайтбар</h3> 
          <NavLink to="/Profile" activeClassName={s.active}>На главную</NavLink>
          <NavLink to="#">Новости</NavLink>
          <NavLink to="/Dialogs" activeClassName={s.active} >Сообщения</NavLink>
          <NavLink to="#">Друзья</NavLink>
          <NavLink to="#">Фотографии</NavLink>
          <NavLink to="#">Музыка</NavLink>
          <NavLink to="#">Видео</NavLink>
          <NavLink to="#">Игры</NavLink>
          <NavLink to="#" className={s.flex__sidebar1}>Настройки</NavLink>
          <NavLink to="#" className={s.flex__sidebar2}>Выйти</NavLink>
        </div>
      </div>
  );
}

export default Sidebar;
