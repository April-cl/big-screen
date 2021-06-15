import React, { useEffect, useRef } from 'react';

export const ComprehensiveGovernance = () => {
  const divRef = useRef(null)
  const data = [
    {
      className: 'fireProtection',
      itemValue: 32511,
      itemProportion: '12.5%',
      itemTendency: 'up',
      itemTitle: '消防安全事件',
    },
    {
      className: 'manage',
      itemValue: 14301,
      itemProportion: '23.4%',
      itemTendency: 'down',
      itemTitle: '公共管理事件',
    },
    {
      className: 'contradiction',
      itemValue: 7632,
      itemProportion: '5.6%',
      itemTendency: 'up',
      itemTitle: '信访事件',
    },
    {
      className: 'petitionLetter',
      itemValue: 2463,
      itemProportion: '10.6%',
      itemTendency: 'up',
      itemTitle: '矛盾纠纷事件',
    }
  ]
  useEffect(() => {
    const times = data.length
    for (let i = 0; i < times; i++) {
      let div = document.createElement('div')
      div.className = data[i].className
      div.innerHTML = `<div class="circleBorder">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-${data[i].className}"></use>
          </svg>
        </div>
        <div class="comprehensiveGovernanceItem">
          <span class="itemValue">${data[i].itemValue}</span>
          <span class="itemProportion">${data[i].itemProportion}
            <svg class="icon icon-${data[i].itemTendency}" aria-hidden="true">
              <use xlink:href="#icon-${data[i].itemTendency}"></use>
            </svg>
          </span>
          <span class="itemTitle">${data[i].itemTitle}</span>
        </div>`
      divRef.current.appendChild(div)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div ref={divRef} className='comprehensiveGovernance'>
    </div>
  )
}