import React from 'react'
import './Input.scss'
const Input = ({size}) => {
  return (
    <>
        <input 
        className={`input input-${size}`}
        type="text" placeholder='Your email here...' />
    </>
  )
}

export default Input