import React from 'react'
import './Home.scss'
import Inner from '../../components/Inner/Inner'
import Slider from '../../components/slider/Slider'
import Tab from '../../components/Tab/Tab'
import { motion } from 'framer-motion';
import Product from '../../components/Product/Product'
import GameIcon from '../../components/GameIcon/GameIcon'
import SlickSlider from '../../components/slider/SlickSlider'
import Team from './../../components/Teams/Team';
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'

const Home = () => {
  return (
    <div>
        <Slider />
        <Inner />
        <Tab />
       <div className="container">
          <div className='text__context'>
            <div className='text__context__left'>
            <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0  }}
            transition={{ duration: 1.1,  }}
          className="text__context__before">
            <span>SHOP</span>
          </motion.div>
            <div className='context__title'>
              <motion.h2
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              NEW ITEMS FOR YOUR SETUP
  & IN-GAME CONTENT.
                  
            </motion.h2>
  
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
            </p>
            </div >
        
            </div>
            <div className='text__context__right'></div>
          </div >
          

            <Product />
            <GameIcon />
       </div>
            <SlickSlider />
          <div className="container">
          <div className='text__context txt2'>
            <div className='text__context__left'>
            <div className='context__title'>
              <motion.h2
              initial={{ opacity: 0, x: 500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
             MEET OUR ULTIMATE TEAM
  THE “JUNIOR COONS”
                  
            </motion.h2>
            </div >

          
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0  }}
            transition={{ duration: 1.1,  }}
          className="text__context__before">
            <span>TEAM</span>
          </motion.div>
            </div>
            <div className='text__context__right'></div>
          </div >

          <Team />
          <div className='text__context txt3'>
            <div className='text__context__left'>
            <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0  }}
            transition={{ duration: 1.1,  }}
          className="text__context__before">
            <span>JOIN US</span>
          </motion.div>
            <div className='context__title'>
              <motion.h2
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              SUBSCRIBE TO OUR NEWSLETTER FOR LATEST UPDATES
                  
            </motion.h2>
  
         
            </div >
        
            </div>
            <div className='text__context__right'>
              <Input size={"lg"} />
              <Button size={"lg"} innerText={"SIGNUP"} />
            </div>
          </div >
          </div>
    </div>
  )
}

export default Home