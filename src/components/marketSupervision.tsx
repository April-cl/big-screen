import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const MarketSupervision = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        textStyle: {
          color: 'rgb(254, 251, 252)'
        },
        right: 0,
      },
      tooltip: {},
      dataset: {
        source: [
          ['省名', '药械安全', '食品安全', '证照管理'],
          ['广州', 43.3, 85.8, 93.7],
          ['韶关', 83.1, 73.4, 55.1],
          ['深圳', 86.4, 65.2, 82.5],
          ['珠海', 72.4, 53.9, 39.1],
          ['汕头', 43.3, 85.8, 93.7],
          ['佛山', 83.1, 73.4, 55.1],
          ['江门', 86.4, 65.2, 82.5],
          ['湛江', 43.3, 85.8, 93.7],
          ['茂名', 83.1, 73.4, 55.1],
          ['肇庆', 86.4, 65.2, 82.5],
          ['惠州', 43.3, 85.8, 93.7],
          ['梅州', 83.1, 73.4, 55.1],
          ['汕尾', 86.4, 65.2, 82.5],
          ['河源', 43.3, 85.8, 93.7],
          ['阳江', 83.1, 73.4, 55.1],
          ['清远', 86.4, 65.2, 82.5],
          ['东莞', 43.3, 85.8, 93.7],
          ['中山', 83.1, 73.4, 55.1],
          ['潮州', 86.4, 65.2, 82.5],
          ['揭阳', 43.3, 85.8, 93.7],
          ['云浮', 83.1, 73.4, 55.1]
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            return value.split('').join('\n');
          }
        }
      },
      yAxis: {},
      grid: {
        x: px(36),
        y: px(30),
        x2: 0,
        y2: px(48)
      },
      series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
      ]
    }));
  }, []);
  return (
    <div ref={divRef} className="marketSupervision"></div>
  );
};