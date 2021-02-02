import React from "react";
import style from "./Works.module.css";
import styleContainer from "../common/styles/Container.module.css"
import Work from "./Work/Work";

// export type Skills

function Works() {
  return (
    <div className={style.workBlock}>
      <div className={`${styleContainer.container}  ${style.worksContainer}`}>
        <h2 className={style.title}> My Works </h2>
        <div className={style.works}>
          <Work title={"PROJECT"}
                 description={"\n" +
                 "\Lorem ipsum dolor sit amet, consectetur adipisicing elit"}/>
          <Work title={"PROJECT"}
                 description={"\n" +
                 "adipisicing elit, sed do eiusmod tempor incididunt ut labore"}/>
        </div>
      </div>
    </div>
  );
}

export default Works;
