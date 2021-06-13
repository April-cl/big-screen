import React from 'react'
import {Link} from 'react-router-dom'
import './temporary.scss'

export default function Temporary () {
  return (
    <div className='temporary'>
      <h1>页面建设中，点击按钮返回首页</h1>
      <button>
        <Link to='../home/'>返回首页</Link>
      </button>
    </div>
  )
}