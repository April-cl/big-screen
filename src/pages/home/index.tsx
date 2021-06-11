import React from 'react'
import './home.scss'
import { RealTimeDynamics } from '../../components/real-timeDynamics';
import { HighFrequencyMatters } from '../../components/highFrequencyMatters';
import { WordCloud } from '../../components/wordCloud';
import { MapChart } from '../../components/mapChart';
import { ComprehensiveGovernance } from '../../components/comprehensiveGovernance';
import { LawEnforcement } from '../../components/lawEnforcement';

export default function Home () {
  return (
    <div className="home">
      <header>
        X X 省基层治理平台 - 决策支持大屏
      </header>
      <main>
        <section className="section1">
          <h2 className='sectionName'><span>实时动态</span></h2>
          <RealTimeDynamics />
          <h2 className='sectionName'><span>高频事项</span></h2>
          <HighFrequencyMatters />
          <WordCloud />
        </section>
        <section className="section2">
          <MapChart />
        </section>
        <section className="section3">
          <h2 className='sectionName'><span>综治工作</span></h2>
          <ComprehensiveGovernance  />
          <h2 className='sectionName'><span>综治执法</span></h2>
          <LawEnforcement  />
        </section>
        <section className="section4">section4</section>
        <section className="section5">section5</section>
        <section className="section6">section6</section>
      </main>
    </div>
  )
}