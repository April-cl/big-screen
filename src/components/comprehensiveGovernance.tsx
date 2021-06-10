import React from 'react';

export const ComprehensiveGovernance = () => {
  return (
    <div className='comprehensiveGovernance'>
      <div className="fireProtection">
        <div className="circleBorder">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-fireProtection"></use>
          </svg>
        </div>
        <div className="comprehensiveGovernanceItem">
          <span className="itemValue">3251</span>
          <span className="itemProportion">12.4%
            <svg className="icon icon-up" aria-hidden="true">
              <use xlinkHref="#icon-up"></use>
            </svg>
          </span>
          <span className="itemTitle">消防安全事件</span>
        </div>
      </div>
      <div className="manage">
        <div className="circleBorder">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-manage"></use>
          </svg>
        </div>
        <div className="comprehensiveGovernanceItem">
          <span className="itemValue">84301</span>
          <span className="itemProportion">23.7%
            <svg className="icon icon-up" aria-hidden="true">
              <use xlinkHref="#icon-up"></use>
            </svg>
          </span>
          <span className="itemTitle">公共管理事件</span>
        </div>
      </div>
      <div className="contradiction">
        <div className="circleBorder">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-contradiction"></use>
          </svg>
        </div>
        <div className="comprehensiveGovernanceItem">
          <span className="itemValue">2463</span>
          <span className="itemProportion">13.2%
            <svg className="icon icon-down" aria-hidden="true">
              <use xlinkHref="#icon-down"></use>
            </svg>
          </span>
          <span className="itemTitle">信访事件</span>
        </div>
      </div>
      <div className="petitionLetter">
        <div className="circleBorder">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-petitionLetter"></use>
          </svg>
        </div>
        <div className="comprehensiveGovernanceItem">
          <span className="itemValue">7632</span>
          <span className="itemProportion">19.5%
            <svg className="icon icon-down" aria-hidden="true">
              <use xlinkHref="#icon-down"></use>
            </svg>
          </span>
          <span className="itemTitle">矛盾纠纷事件</span>
        </div>
      </div>
    </div>
  )
}