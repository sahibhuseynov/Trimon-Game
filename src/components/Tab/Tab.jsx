import React,{useState} from 'react'
import './Tab.scss'
import Twit from '../../assets/image/twit.jpg'
import Youtube from '../../assets/image/youtube.jpg'
import Discord from '../../assets/image/discord.jpg'
import { motion } from 'framer-motion';

const Tab = () => {
    const [currentTab, setCurrentTab] = useState('1')

    const tabs = [
        {
            id:1,
            title: 'TWITCH',
            image: Twit,
        
        },
        {
            id:2,
            title: 'YOUTUBE',
           image: Youtube,
        },
        {
            id:3,
            title: 'DISCORD',
            image: Discord,
        }
    ]
  return (
    <div>

        <div className="tabs">
            <div className='btn__group'>
            {
                tabs.map((tab,index) => (
                    <button
                    key={index}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                    onClick={(e) => setCurrentTab(e.target.id)}
                    >
                        {tab.title}

                        <div className='line'></div>
                    </button>
                 ) )

            }
            </div>
            
                <div className='tab__content'> 
                        {
                            tabs.map((tab,index) => (
                                <div key={index}>
                                    {
                                        currentTab === `${tab.id}` && 
                                      <div className='tab__image'>
                                          <motion.img 
                                          initial={{opacity:0 ,scale:0.94 }}
                                            animate={{opacity:1 , scale:1}}
                                            transition={{duration:1}}
                                            exit={{opacity:0 , }}
                                          src={tab.image} alt="" />
                                      </div>
                                    }
                                </div>
                            ))
                        }
                </div>
        </div>
    </div>
  )
}

export default Tab