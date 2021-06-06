import React from 'react';

export const RealTimeDynamics = () => {
  return (
    <div>
      <h3 className='componentName'>今日事件数</h3>
      <div className='eventNumber'>
        <span className="rectangleBorder">0</span>
        <span className="rectangleBorder">8</span>
        <span className="rectangleBorder">2</span>
        <span className="rectangleBorder">3</span>
        <span className="rectangleBorder">7</span>
        <span className="rectangleBorder">9</span>
        <span>件</span>
      </div>
      <div className="eventStatistics">
        <div className="circleBorder">
          <span className="eventStatisticsNumber">7132</span>
          <span className="eventStatisticsTitle">今年事件数（万件）</span>
        </div>
        <div className="circleBorder">
          <span className="eventStatisticsNumber">89.5</span>
          <span className="eventStatisticsTitle">今年办结率（%）</span>
        </div>
        <div className="circleBorder">
          <span className="eventStatisticsNumber">1023</span>
          <span className="eventStatisticsTitle">平均办结时长（h）</span>
        </div>
      </div>
    </div>
  )
}