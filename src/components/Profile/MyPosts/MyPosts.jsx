import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let PostElement = props.PostData.map(p => <Post
        Title={p.Title}
        Massage={p.Massage}
        Img={p.Img}
        Likes={p.Likes}
        Comments={p.Comments}
        Reposts={p.Reposts}/>);

    let NewPostText = React.createRef();

    let AddPost = () => {
        let PostText = NewPostText.current.value;
        alert("Текст успешно отправлен!")
    };

    return (
        <div className={s.Main}>
            <div className={s.posts}>
                <h4>Новый Запись</h4>
                <textarea ref={ NewPostText } rows="6" placeholder="Создать новый пост...">
                </textarea>

                <div className={s.posts__button}>
                    <button className={s.posts__button_b} onClick={ AddPost }>
                        Отправить
                    </button>
                    <button className={s.posts__button_b} onClick={ AddPost }>
                        Прикрепить
                    </button>
                    <button className={s.posts__button_b} onClick={ AddPost }>
                        Очистить
                    </button>
                </div>
            </div>

            <div className={s.MyPosts}>
                <h4>Мои Записи</h4>

                <div className={s.post}>
                    {PostElement}
                </div>
            </div>
        </div>

    )
}

export default MyPosts;