import React from 'react';
import s from './Nick.module.css';
import {NavLink} from "react-router-dom";

const Nick = (props) => {
    let path = "/Dialogs/" + props.Name;

    return (
        <NavLink to={path} activeClassName={s.active} className={s.content}>
            <div className={s.ava}>
                <img
                    src={props.Ava}
                    alt="user"/> {props.Name}
            </div>
        </NavLink>
    );
}

export default Nick;
