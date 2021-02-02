import React from "react";
import style from "./Work.module.css";

export type SkillPropsType = {
  title: string
  description: string
}

function Work(props: SkillPropsType) {
  return (
    <div className={style.work}>
      <div className={style.look}>
        <button>Смотеть</button>
      </div>
      <div>
        <h3>{props.title}</h3>
        <span className={style.description}>
        {props.description}
        </span>
      </div>
    </div>
  );
}

export default Work;
