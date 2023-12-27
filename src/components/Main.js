import React from 'react'
import './styles/Main.css'
import AnimatedText from './AnimatedText'
import Display from './Display'
import HobbyText from './HobbyText'
import Hobbies from './Hobbies'

const Main = () => {
  return (
    <div className='whole-scene'>
      <div className='whole-container'>
        <div className='avatar-container' >
          <Display/>
        </div>
        <div className='text-container'>
          <AnimatedText/>
        </div>
    </div>
    <div className='lower-container'>
      <div className='hobby-text'>
        <HobbyText/>
      </div>
      <div className='hobbiest'>
        <Hobbies/>
      </div>
    </div>
    </div>
  )
}

export default Main
