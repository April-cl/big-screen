import React from 'react';

export const LawEnforcement = () => {
  return (
    <div className='lawEnforcement'>
      <div className="circleBorder">
        <div className="lawEnforcementContain">
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">2849</span>
            <span className="itemTitle">五水共治</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">37291</span>
            <span className="itemTitle">安全生产</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">9782</span>
            <span className="itemTitle">市容环境</span>
          </div>
          <div className="lawEnforcementItem rectangleBorder">
            <span className="itemValue">7271</span>
            <span className="itemTitle">四边三化</span>
          </div>
        </div>
        <div className="lawEnforcementSum">
          <span>综合执法总数：</span>
          <span>173840</span>
        </div>
      </div>
    </div>
  )
}