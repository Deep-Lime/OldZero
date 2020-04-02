import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.head}>
            <img src="https://content.freelancehunt.com/profile/photo/225/SPRAER.png" alt="user_foto"
                 className={s.head__foto}/>
            <div className={s.head__statistic}>
                <h3 className={s.head__main}>Jodale Jostar</h3>
                <h4 className={s.head__text}>
                    зарегистрирован: <span>2 января</span>
                </h4>
                <h4 className={s.head__text}>
                    город: <span>Москва</span>
                </h4>
                <h4 className={s.head__text}>
                    друзей: <span>20</span>
                </h4>
                <h4 className={s.head__text}>
                    возрат: <span>16</span>
                </h4>
            </div>
        </div>
    );
}

export default ProfileInfo;