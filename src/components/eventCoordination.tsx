import React, { useEffect, useRef } from 'react';

export const EventCoordination = () => {
  const divRef = useRef(null)
  let data = {
    name: ['平安建设信息系统', '统一政务咨询投诉举报平台', '某某市智慧城管系统', '某某区智慧河道云平台', '某某市民情双访数据平台'],
    numbers: [78322, 58829, 18319, 38123, 8732]
  }
  useEffect(() => {
    const times = data.numbers.length
    for (let i = 0; i < times; i++) {
      let tr = document.createElement('tr')
      tr.innerHTML = `<td>${i+1}</td><td>${data.name[i]}</td><td>${data.numbers[i]}</td>`
      divRef.current.appendChild(tr)
    }
  }, [])
  return (
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
  );
};