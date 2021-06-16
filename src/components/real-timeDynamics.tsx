import React, { useEffect, useRef, useState } from 'react';

export const RealTimeDynamics = () => {
  const divRef = useRef(null)
  // const data = {
  //   todayEventNumber: 1326,
  //   wholeEventNumber: 1562541,
  //   completionRate: '89.5',
  //   averageTimeDuration: 120
  // }
  const [data, setData] = useState({
    todayEventNumber: 1326,
    wholeEventNumber: 1562541,
    completionRate: '89.5',
    averageTimeDuration: 120
  })
  let todayString = data.todayEventNumber.toString()
  let a = 6 - todayString.length
  for (let i = 0; i < a; i++) {
    todayString = '0' + todayString
  }
  useEffect(() => {
    let timeId = setInterval(() => {
      setData({
        ...data,
        todayEventNumber: data.todayEventNumber+1
      })
    }, 1000)
    return () => {clearInterval(timeId)}
  }, [data])
  return (
    <div ref={divRef}>
      <h3 className='componentName'>今日事件数</h3>
      <div className='eventNumber'>
        <span className="rectangleBorder">{todayString.slice(0,1)}</span>
        <span className="rectangleBorder">{todayString.slice(1,2)}</span>
        <span className="rectangleBorder">{todayString.slice(2,3)}</span>
        <span className="rectangleBorder">{todayString.slice(3,4)}</span>
        <span className="rectangleBorder">{todayString.slice(4,5)}</span>
        <span className="rectangleBorder">{todayString.slice(5)}</span>
        <span>件</span>
      </div>
      <div className="eventStatistics">
        <div className="circleBorder">
          <span className="eventStatisticsNumber">{data.wholeEventNumber}</span>
          <span className="eventStatisticsTitle">今年事件数（万件）</span>
        </div>
        <div className="circleBorder">
          <span className="eventStatisticsNumber">{data.completionRate}</span>
          <span className="eventStatisticsTitle">今年办结率（%）</span>
        </div>
        <div className="circleBorder">
          <span className="eventStatisticsNumber">{data.averageTimeDuration}</span>
          <span className="eventStatisticsTitle">平均办结时长（h）</span>
        </div>
      </div>
    </div>
  )
}