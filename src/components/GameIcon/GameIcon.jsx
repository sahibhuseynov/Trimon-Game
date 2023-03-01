import React from 'react'
import './GameIcon.scss'

import IconData from '../../assets/data/gameIcons'
const GameIcon = () => {
  return (
    <div className='game__icon__grid'>
            {
                IconData.map((icon,index) => (
                    <div key={index} className='game__icon'>
                        <img  src={icon.img} alt="" />
                        </div>
                ))
            }
    </div>
  )
}

export default GameIcon