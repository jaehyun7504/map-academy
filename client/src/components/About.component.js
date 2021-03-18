import React from "react";
import useStyles from "../styles/About.styles";
import Footer from "./Footer.component";

function About() {
  const classes = useStyles();
  return (
    <div className={classes.About}>
      <div className={classes.philosophy}>
        <h1 className={classes.h1}>교육은 마중물이다</h1>
        <p className={classes.p}>
          이것이 맵학원의 교육 철학입니다. 마중물을 부어주면서 펌프질을 해야
          물이 나옵니다. 하지만 흘러 나오는 물은 이미 지하에 있었지 새로
          만들어진 것이 아닙니다. 교육은 창조행위가 아니라 아이가 이미 가지고
          있는 능력을 끌어내는 마중물과 같은 것입니다. 교육자는 교육 과정을
          창조적으로 운영해야 하지만 자신이 창조자라는 교만에 빠지면 안됩니다.
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.motto}>
          <h4 className={classes.h4}>원훈</h4>
          <h2 className={classes.h2}>CHANGE</h2>
        </div>
        <div className={classes.education}>
          <h4 className={classes.h4}>교육 목표 구현을 위한 중점 교육</h4>
          <div className={classes.listContainer}>
            <ul className={classes.list}>
              <li className={classes.item}>인성 교육</li>
              <li className={classes.item}>독서 교육</li>
              <li className={classes.item}>진학&bull;진로 교육</li>
              <li className={classes.item}>
                국제적 마인드 형성을 위한 영어 교육
              </li>
              <li className={classes.item}>
                창의적 사고력 형성을 위한 수학 교육
              </li>
              <li className={classes.item}>자기주도학습법 교육</li>
            </ul>
          </div>
        </div>
        <div className={classes.goal}>
          <h4 className={classes.h4}>교육 목표</h4>
          <h2 className={classes.h2}>
            올바른 인성의
            <br />
            창의적 인재
            <br />
            육성
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
