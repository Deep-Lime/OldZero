import React from 'react';
import s from './Mail.module.css';

const Mail = (props) => {
    return (
        <div className={s.content}>
            <div className={s.ava}>
                <img
                    src={props.Avatar}
                    alt="user"/> <p>{props.UserName}</p>
            </div>
            <div className={s.mail__content}>
                {props.Mail}
            </div>
        </div>
    );
}

export default Mail;
