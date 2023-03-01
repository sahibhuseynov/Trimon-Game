import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const Button = ({
    size,
    onClick,
    innerText,
}) => {
  const [smalScreen, setSmalScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSmalScreen(true);
    } else {
      setSmalScreen(false);
    }
  },[])

  return (
    <motion.button
     initial={{ y: 10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
    className={`btn ${smalScreen ? `btn-sm` : `btn-${size}`}`}  onClick={onClick}>
        <div className='btn-text'>{innerText}</div >
        <div className='line'></div>
    </motion.button>
  )
}

export default Button