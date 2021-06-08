import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

const px = (n: number) => n / 1552 * (window as any).pageWidth;
export const WordCloud = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
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
          {name: '龙头镇', value: '111'},
          {name: '大埔镇', value: '222'},
          {name: '太平镇', value: '458'},
          {name: '沙埔镇', value: '445'},
          {name: '东泉镇', value: '456'},
          {name: '凤山镇', value: '647'},
          {name: '六塘镇', value: '189'},
          {name: '冲脉镇', value: '864'},
          {name: '寨隆镇', value: '652'},
        ]
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
    <div ref={divRef} className="wordCloud"></div>
  );
};