import {lazy} from 'react'

const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
const Temporary = lazy(() => import('./temporary'))

export {
  Home,
  About,
  Temporary
}