import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.posts}>
            <div className={s.Post}>
                <h4>{props.Title}</h4>
                <p className={s.comment}>
                    {props.Massage}
                </p>
                <img src={props.Img} alt="post"/>
            </div>

            <div className={s.posts__button}>
                <button className={s.posts__button_b} onClick={() => {
                    alert("Сообщение будет Удалено позже")
                }}>
                    <span>{props.Likes}</span> <img src="https://image.flaticon.com/icons/png/512/20/20664.png" alt="Likes"/>
                </button>
                <button className={s.posts__button_b} onClick={() => {
                    alert("Сообщение будет Удалено позже")
                }}>
                    <span>{props.Comments}</span> <img src="https://lh3.googleusercontent.com/proxy/QQKpbF6cUnZncjq-Of587ttLpgUfWthL01XvRwk22yzbrg0mRx-I2bYMV4Dj42VHvnw3DIbB3jZb5h_rsylW2AfwSjZI1741eq_dcJ6dwnGcS26ylBT5N_JTk2bSXwNGi1GlvQtTpXm-Dw" alt="Comments"/>
                </button>
                <button className={s.posts__button_b} onClick={() => {
                    alert("Сообщение будет Удалено позже")
                }}>
                    <span>{props.Reposts}</span> <img src="https://image.flaticon.com/icons/png/128/56/56961.png" alt="Reposts"/>
                </button>
            </div>
        </div>
    );
}

export default Post;
