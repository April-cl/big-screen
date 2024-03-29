import React from 'react'
import './home.scss'
import {Link} from 'react-router-dom'
import { RealTimeDynamics } from '../../components/real-timeDynamics';
import { HighFrequencyMatters } from '../../components/highFrequencyMatters';
import { MapChart } from '../../components/mapChart';
import { ComprehensiveGovernance } from '../../components/comprehensiveGovernance';
import { LawEnforcement } from '../../components/lawEnforcement';
import { MarketSupervision } from '../../components/marketSupervision';
import { ConvenienceServices } from '../../components/convenienceServices';
import { EventGrade } from '../../components/eventGrade';
import { EventCoordination } from '../../components/eventCoordination';

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
        </section>
        <section className="section2">
          <MapChart />
        </section>
        <section className="section3">
          <h2 className='sectionName'><span>综治工作</span><button><Link to='../temporary'>进入</Link></button></h2>
          <ComprehensiveGovernance />
          <h2 className='sectionName'><span>综治执法</span><button><Link to='../temporary'>进入</Link></button></h2>
          <LawEnforcement />
          <h2 className='sectionName'><span>市场监管</span><button><Link to='../temporary'>进入</Link></button></h2>
          <MarketSupervision />
          <h2 className='sectionName'><span>便民服务</span><button><Link to='../temporary'>进入</Link></button></h2>
          <ConvenienceServices />
        </section>
        <section className="section4">
          <h2 className='sectionName'><span>事件等级</span></h2>
          <EventGrade />
        </section>
        <section className="section5">
          <h2 className='sectionName'><span>事件协同</span></h2>
          <EventCoordination />
        </section>
      </main>
    </div>
  )
}