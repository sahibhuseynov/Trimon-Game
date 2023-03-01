import React from 'react'
import { motion } from 'framer-motion';
const Button = ({
    size,
    onClick,
    innerText,
}) => {
  return (
    <motion.button
     initial={{ y: 10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
    className={`btn btn-${size}`}  onClick={onClick}>
        <div className='btn-text'>{innerText}</div >
        <div className='line'></div>
    </motion.button>
  )
}

export default Button