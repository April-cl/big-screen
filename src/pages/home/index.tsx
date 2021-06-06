import React from 'react'
import './home.scss'
import { RealTimeDynamics } from '../../components/real-timeDynamics';

export default function Home () {
  return (
    <div className="home">
      <header>
        X X 省基层治理平台 - 决策支持大屏
      </header>
      <main>
        <section className="section1">
          <h2 className='componentName'><span>实时动态</span></h2>
          <RealTimeDynamics />
        </section>
        <section className="section2">section2</section>
        <section className="section3">section3</section>
        <section className="section4">section4</section>
      </main>
    </div>
  )
}