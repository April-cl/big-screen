import React from 'react';

export const LawEnforcement = () => {
  const data = [2849, 37291, 9782, 7271];
  return (
    <div className="lawEnforcement">
      <div className="circleBorder">
        <div className="lawEnforcementContain">
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">{data[0]}</span>
            <span className="itemTitle">五水共治</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">{data[1]}</span>
            <span className="itemTitle">安全生产</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">{data[2]}</span>
            <span className="itemTitle">市容环境</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">{data[3]}</span>
            <span className="itemTitle">四边三化</span>
          </div>
        </div>
        <div className="lawEnforcementSum">
          <span>综合执法总数：</span>
          <span>{data.reduce((previous, current) => {
            return previous + current;
          })}</span>
        </div>
      </div>
    </div>
  );
};