import React, { useEffect, useRef } from 'react';
import { CoordinationChart } from './coordinationChart';

export const EventCoordination = () => {
  const divRef = useRef(null)
  let data = [
    {
      name: '平安建设信息系统',
      numbers: 7832
    },
    {
      name: '统一政务咨询投诉举报平台',
      numbers: 58829
    },
    {
      name: '某某市智慧城管系统',
      numbers: 18319
    },
    {
      name: '某某区智慧河道云平台',
      numbers: 38123
    },
    {
      name: '某某市民情双访数据平台',
      numbers: 8732
    },
  ]
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr')
      tr.innerHTML = `<td>${i+1}</td><td>${data[i].name}</td><td>${data[i].numbers}</td>`
      divRef.current.appendChild(tr)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="eventCoordination">
      <table className="eventCoordination">
        <thead>
        <tr>
          <th>序号</th>
          <th>系统名称</th>
          <th>协同事件数</th>
        </tr>
        </thead>
        <tbody ref={divRef}>
        </tbody>
      </table>
      <CoordinationChart />
    </div>
  );
};