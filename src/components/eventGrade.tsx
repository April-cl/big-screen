
import React, { useEffect, useRef } from 'react';

export const EventGrade = () => {
  const divRef = useRef(null)
  const data = [
    {
      proportions: '10%',
      numbers: 135,
      title: '特急',
      className: 'extraUrgent'
    },
    {
      proportions: '30%',
      numbers: 254,
      title: '紧急',
      className: 'urgent'
    },
    {
      proportions: '60%',
      numbers: 739,
      title: '普通',
      className: 'general'
    },
  ]
  useEffect(() => {
    const times = data.length
    let divArray= []
    for (let i = 0; i < times; i++) {
      let div = document.createElement('div')
      div.className = data[i].className
      div.style.flexBasis = data[i].proportions
      div.innerHTML = `<div class="tooltip"><span>${data[i].title}</span><br/><span>${data[i].numbers}</span><span>${data[i].proportions}</span></div>
`
      divArray.push(div)
    }
    divArray.map((value) => {
      divRef.current.appendChild(value)
    })
  }, [data])
  return (
      <div ref={divRef} className="eventGrade">
      </div>
  );
};