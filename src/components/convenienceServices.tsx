import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const ConvenienceServices = () => {
  const divRef = useRef(null);
  const data = [
    ['20-07', 38],
    ['20-08', 94],
    ['20-09', 20],
    ['20-10', 56],
    ['20-11', 76],
    ['20-12', 52],
    ['21-01', 38],
    ['21-02', 94],
    ['21-03', 20],
    ['21-04', 56],
    ['21-05', 76],
    ['21-06', 52],
  ]
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        textStyle: {
          color: 'rgb(254, 251, 252)'
        },
        right: 0,
        data: ['便民服务事件']
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: 45,
          fontSize: px(12)
        },
        axisTick:{
          alignWithLabel:true
        }
      },
      yAxis: {
        type: 'value',
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
      series: [{
        name: '便民服务事件',
        data: data,
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: 'rgb(53, 152, 190)'},
              {offset: 1, color: 'rgb(14, 57, 90)'}
            ]
          )
        }
      }],
      dataZoom: [
        {
          type: 'inside'
        }
      ]
    }));
  }, []);
  return (
    <div ref={divRef} className="convenienceServices"></div>
  );
};