import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const CoordinationChart = () => {
  var divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: '协同事件数',
        left: 'center',
        top: '50%',
        textStyle: {
          color: 'rgb(36, 141, 216)',
          fontSize: px(8),
          align: 'center'
        }
      },
      graphic: {
        type: 'text',
        left: 'center',
        top: '40%',
        style: {
          text: '837019',
          textAlign: 'center',
          fill: 'rgb(36, 141, 216)',
          fontSize: px(10),
        }
      },
      series: [
        {
          type: 'pie',
          radius: [30, 42],
          data: [
            {value: 23.4, name: '综合执法'},
            {value: 23.4, name: '综治工作'},
            {value: 23.4, name: '市场监督'},
            {value: 23.4, name: '便民服务'}
          ],
          label: {
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: px(10),
            align: 'right',
            formatter: '{b}\n{d}%'
          },
        }
      ]
    }));
  }, []);
  return (
    <div ref={divRef} className="coordinationChart"></div>
  );
};