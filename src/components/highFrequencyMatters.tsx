import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'

const px = (n: number) => n / 1552 * (window as any).pageWidth
export const HighFrequencyMatters = () => {
  var divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {
        type: 'time',
        axisLabel: {
          interval: 0,
          rotate: 45,
          formatter: '{yy}-{MM}',
          fontSize: px(12)
        },
        axisTick:{
          alignWithLabel:true
        }
      },
      yAxis: {
        type: 'value',
        name: '万件',
        nameTextStyle: {
          align: "right",
          verticalAlign: 'top'
        },
        axisLabel: {
          showMaxLabel: true,
          formatter: function (value: number, index: number) {
            if (value % 40 ===0) {
              return value
            }
          }
        },
        splitLine: {
          lineStyle: {
            color: ['rgba(32, 48, 73, 1)', 'rgba(0, 0, 0, 0)']
          }
        }
      },
      series: [{
        data: [
          ['2020-07', 38],
          ['2020-08', 94],
          ['2020-09', 20],
          ['2020-10', 56],
          ['2020-11', 76],
          ['2020-12', 52],
          ['2021-01', 38],
          ['2021-02', 94],
          ['2021-03', 20],
          ['2021-04', 56],
          ['2021-05', 76],
          ['2021-06', 52],
        ],
        type: 'line',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgb(36, 188, 178)'
          }, {
            offset: 1,
            color: 'rgb(8, 40, 55)'
          }])
        },
        lineStyle: {
          color: "rgb(47, 194, 182)"
        },
        symbol: "none"
      }],
      grid: {
        x: px(30),
        y: px(24),
        x2: px(0),
        y2: px(34)
      }
    });
  }, []);
  return (
    <div ref={divRef} className={'highFrequencyMatters'}></div>
  );
};