import React from "react";
import style from "./HireMe.module.css";
import styleContainer from "../common/styles/Container.module.css"

// export type Skills

function HireMe() {
  return (
    <div className={style.hireMeBlock}>
      <div className={`${styleContainer.container}  ${style.hireMeContainer}`}>
        <h2 className={style.title}> Рассматриваю варианты удаленной работы </h2>
        <button>Нанять меня</button>
      </div>
    </div>
  );
}

export default HireMe;
