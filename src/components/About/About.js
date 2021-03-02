import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-philosophy">
          <h1 className="About-heading-1">교육은 마중물이다</h1>
          <p className="About-paragraph">
            이것이 맵학원의 교육 철학입니다. 마중물을 부어주면서 펌프질을 해야
            물이 나옵니다. 하지만 흘러 나오는 물은 이미 지하에 있었지 새로
            만들어진 것이 아닙니다. 교육은 창조행위가 아니라 아이가 이미 가지고
            있는 능력을 끌어내는 마중물과 같은 것입니다. 교육자는 교육 과정을
            창조적으로 운영해야 하지만 자신이 창조자라는 교만에 빠지면 안됩니다.
          </p>
          <button className="About-button" type="button">
            상담 신청하기
          </button>
        </div>
        <div className="About-motto">
          <h4 className="About-heading-4">원훈</h4>
          <hr className="About-horizon" />
          <h2 className="About-heading-2">
            <span className="About-hover">CHANGE</span>
          </h2>
        </div>
        <div className="About-education">
          <h4 className="About-heading-4">교육 목표 구현을 위한 중점 교육</h4>
          <hr className="About-horizon" />
          <ul className="About-list">
            <li className="About-item">인성 교육</li>
            <li className="About-item">독서 교육</li>
            <li className="About-item">진학&bull;진로 교육</li>
            <li className="About-item">국제적 마인드 형성을 위한 영어 교육</li>
            <li className="About-item">창의적 사고력 형성을 위한 수학 교육</li>
            <li className="About-item">자기주도학습법 교육</li>
          </ul>
        </div>
        <div className="About-goal">
          <h4 className="About-heading-4">교육 목표</h4>
          <hr className="About-horizon" />
          <h2 className="About-heading-2">
            <span className="About-hover">올바른 인성</span>의<br />
            <span className="About-hover">창의적 인재</span>
            육성
          </h2>
        </div>
      </div>
    );
  }
}
export default About;
