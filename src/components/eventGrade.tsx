import React, { useEffect, useRef } from 'react';

export const EventGrade = () => {
  const divRef = useRef(null)
  let data = {
    proportions: ['10%', '30%', '60%'],
    numbers: [135, 254, 739],
    title: ['特急', '紧急', '普通']
  }
  useEffect(() => {
    const children = [... divRef.current.children]
    children.map((value, index) => {
      value.style.flexBasis = data.proportions[index]
      let tooltip = document.createElement('div')
      tooltip.className = 'tooltip'
      tooltip.innerHTML = `<span>特急</span><br/><span>${data.numbers[index]}</span><span>${data.proportions[index]}</span>`
      value.appendChild(tooltip)
    })
  }, [])
  return (
      <div ref={divRef} className="eventGrade">
        <div className="extraUrgent"><div className="tooltip"><span>特急</span><br/></div></div>
        <div className="urgent"><div className="tooltip"><span>紧急</span><br/></div></div>
        <div className="general"><div className="tooltip"><span>普通</span><br/></div></div>
      </div>
  );
};