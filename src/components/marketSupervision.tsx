import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const MarketSupervision = () => {
  const divRef = useRef(null);
  const city = ['广州', '韶关', '深圳', '珠海', '汕头', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'];
  let data = [];
  for (let i = 0; i <= city.length; i++) {
    data[i] = [];
    data[i][0] = city[i];
    data[i][1] = Math.floor(Math.random() * 100);
    data[i][2] = Math.floor(Math.random() * 100);
    data[i][3] = Math.floor(Math.random() * 100);
  }
  data.unshift(['市名', '药械安全', '食品安全', '证照管理']);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    const updateData = (data) => {
      myChart.setOption(createEchartsOptions({
        legend: {
          textStyle: {
            color: 'rgb(254, 251, 252)'
          },
          right: 0,
        },
        tooltip: {},
        dataset: {
          source: data
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
        yAxis: {
          splitLine: {
            lineStyle: {
              color: ['rgba(32, 48, 73, 1)']
            }
          }
        },
        grid: {
          x: px(36),
          y: px(30),
          x2: 0,
          y2: px(42)
        },
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ],
        dataZoom: [
          {
            type: 'inside'
          }
        ]
      }));
    };
    setInterval(() => {
      for (let i = 0; i <= city.length; i++) {
        data[i+1][1] = Math.floor(Math.random() * 100);
        data[i+1][2] = Math.floor(Math.random() * 100);
        data[i+1][3] = Math.floor(Math.random() * 100);
      }
      updateData(data);
    }, 1000);
    updateData(data);

  }, []);
  return (
    <div ref={divRef} className="marketSupervision"></div>
  );
};