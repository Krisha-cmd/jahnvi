import React from 'react'
import './styles/Main.css'
import AnimatedText from './AnimatedText'
import Display from './Display'

const Main = () => {
  return (
    <div className='whole-container'>
      <div className='avatar-container' >
        <Display/>
      </div>
      <div className='text-container'>
        <AnimatedText/>
      </div>
    </div>
  )
}

export default Main
