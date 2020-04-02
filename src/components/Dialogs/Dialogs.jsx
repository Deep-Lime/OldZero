import React from 'react';
import s from './Dialogs.module.css';
import Mail from "./Mail/Mail";
import Nick from "./Nick/Nick"


const Dialogs = (props) => {

    let NicksElements = props.state.NickData.map(NickEl => <Nick
        Name={NickEl.Name}
        Ava={NickEl.Ava}/>);
    let DialogsElements = props.state.DialogUsersData.map(MailEl => <Mail
        Avatar={MailEl.Avatar}
        UserName={MailEl.UserName}
        Mail={MailEl.Mail}/>);

    let NewDialogElement = React.createRef();

    let AddMail = () => {
        let MasageText = NewDialogElement.current.value;
        alert("Сообщение отправлено")
    };

    return (
        <div className="content">
            <div className="content__box">
                <div className={s.grid}>
                    <div className={s.nickname}>
                        <h4>Диалоги</h4>

                        {NicksElements}

                    </div>

                    <div className={s.mail}>

                        {DialogsElements}

                        <div className={s.posts}>
                            <textarea ref={NewDialogElement} rows="3" placeholder="Написать Сообщение...">
                            </textarea>

                            <div className={s.posts__button}>
                                <button className={s.posts__button_b} onClick={AddMail}>
                                    Отправить
                                </button>
                                <button className={s.posts__button_b} onClick={AddMail}>
                                    Прикрепить
                                </button>
                                <button className={s.posts__button_b} onClick={AddMail}>
                                    Очистить
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dialogs;
