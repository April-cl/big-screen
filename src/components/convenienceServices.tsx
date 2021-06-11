import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const ConvenienceServices = () => {
  const divRef = useRef(null);
  var option;
  var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
  var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
  var yMax = 500;
  var dataShadow = [];
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
        data: [
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
        ],
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
    var zoomSize = 6;
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });

    option && myChart.setOption(option);
  }, []);
  return (
    <div ref={divRef} className="convenienceServices"></div>
  );
};