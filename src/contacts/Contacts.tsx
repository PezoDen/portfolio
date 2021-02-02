import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css"

// export type Skills

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
        <h2 className={style.title}> Контакты </h2>
          <form className={style.contacts}>
            <input type="text" placeholder="Имя"/><br/>
            <input type="text" placeholder="Почта"/><br/>
            <textarea className={style.textarea}
                      placeholder="Ваше сообщение"/><br/>
          </form>
        <button>Отправить</button>

      </div>
    </div>
  );
}

export default Contacts;
