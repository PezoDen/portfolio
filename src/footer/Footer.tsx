import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css"

// export type Skills

function Footer() {
  return (
    <div className={style.hireMeBlock}>
      <div className={`${styleContainer.container}  ${style.footerMeContainer}`}>
        <h2 className={style.title}> Иван Иванов </h2>
        <ul className={style.li}>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Telegramm</li>
        </ul>
        <p>© 2019 beingeorge, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
