import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud'
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const WordCloud = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      series: [{
        type: 'wordCloud',
        width: '100%',
        height: '100%',
        sizeRange: [px(14), px(36)],
        rotationRange: [0, 0],
        rotationStep: 45,
        textRotation: [0, 45, 90, -45],
        shape: 'circle',
        gridSize: px(20),
        drawOutOfBound: false,
        textStyle: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 255),
              Math.round(Math.random() * 255),
              Math.round(Math.random() * 255)
            ].join(',') + ')';
          },
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [
          {name: '消防安全', value: '11'},
          {name: '价格监督', value: '22'},
          {name: '市容环境', value: '58'},
          {name: '民政', value: '45'},
          {name: '食品安全', value: '46'},
          {name: '民生服务', value: '67'},
          {name: '交通安全', value: '89'},
          {name: '市政公用', value: '84'},
          {name: '矛盾纠纷', value: '52'},
          {name: '公共管理', value: '65'},
          {name: '五水共治', value: '62'},
        ]
      }]
    }));
  }, []);
  return (
    <div ref={divRef} className="wordCloud"></div>
  );
};