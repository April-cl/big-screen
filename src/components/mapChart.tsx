import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import GD from '../geo/guangdong.json'
import { px } from '../shared/px';

export const MapChart = () => {
  const divRef = useRef(null);
  const data = [
    {name: '广州市', value: 20057, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '韶关市', value: 15477, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '深圳市', value: 31686, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '珠海市', value: 6992, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '汕头市', value: 44045, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '佛山市', value: 40689, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '江门市', value: 37659, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '湛江市', value: 45180, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '茂名市', value: 55204, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '肇庆市', value: 21900, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '惠州市', value: 4918, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '梅州市', value: 5881, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '汕尾市', value: 4178, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '河源市', value: 2227, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '阳江市', value: 2180, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '清远市', value: 9172, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '东莞市', value: 3368, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '中山市', value: 8068, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '潮州市', value: 5884, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '揭阳市', value: 4101, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'},
    {name: '云浮市', value: 2222, punctualPunctual: '35.6', averagePunctual: '35.6', overtimePunctual: '35.6'}
  ]

  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    // @ts-ignore
    echarts.registerMap('GD', GD)
    myChart.setOption(createEchartsOptions({
      geo: {
        map: 'GD',
        label: {
          show: true,
          fontSize: px(12)
        },
      },
      tooltip: {
        trigger: "item",
        backgroundColor: 'rgba(250,250,250,0.7)',
        formatter(value, index){
          return (
            `地区：${value['data']['name']}<br/>
            事件数：${value['data']['value']}<br/>
            按时办结率：${value['data']['punctualPunctual']}<br/>
            平均办结时长：${value['data']['averagePunctual']}<br/>
            超时事件数：${value['data']['overtimePunctual']}<br/>
            `
          )
        }
      },
      visualMap: {
        top: px(20),
        orient: 'horizontal',
        min: 0,
        max: 100000,
        textStyle: {
          color: 'white'
        },
        text: ['少—多', '事件数量/万件'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['rgb(0, 110, 181)','rgb(1, 28, 58)']
        }
      },
      series: [
        {
          type: 'map',
          mapType: 'GD', // 自定义扩展图表类型
          label: {
            show: true,
            color: 'rgb(156, 200, 252)',
          },
          itemStyle: {
            borderColor: 'rgb(26, 93, 143)'
          },
          emphasis: {
            itemStyle: {
              areaColor: 'rgb(19, 190, 180)'
            },
          },
          data: data,
        }
      ]
    }))
  }, []);
  return (
    <div ref={divRef} className="mapChart"></div>
  );
};