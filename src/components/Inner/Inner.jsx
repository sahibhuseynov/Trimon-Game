import React from "react";
import InnerImg from "../../assets/image/h1-img-1.jpg";
import "./Inner.scss";
import { motion } from "framer-motion";
import Button from "./../Ui/Button/Button";

const Inner = () => {
  return (
   
      <div className="inner">
        <motion.div
          initial={{  y: 100 }}
          whileInView={{  y: 0 }}
          transition={{ duration: 1 }}
          className="inner__left"
        >
          <img src={InnerImg} alt="" />

          <motion.div
            whileInView={{ width: "100%" }}
            className="inner__line"
          ></motion.div>

          <motion.div
          initial={{ height: "0%",width: "2px" }}
            whileInView={{ height: "100%" }}
            className="inner__line"
          ></motion.div>

<motion.div
            initial={{ right:0}}
            whileInView={{ width: "100%" }}
            className="inner__line2"
          ></motion.div>

<motion.div
          initial={{ height: "0%",width: "2px" ,right:0 ,bottom:0}}
            whileInView={{ height: "100%" }}
            className="inner__line2"
          ></motion.div>
        </motion.div>

        <div className="inner__right">
          
        <motion.div
            initial={{ x: -100 }}
            whileInView={{  x: 0  }}
            transition={{ duration: 1.5,  }}
          className="inner__right__before">
            <span>THE GAME</span>
          </motion.div>
         <div className="inner__right__title">
            <motion.h2
              initial={{  x: -300  }}
              whileInView={{  x: 0 }}
              transition={{ duration: 1 }}
            >
              SEE WHAT NEW VIDEO GAMES ARE OUT THIS MONTH & <del>
                  ENJOY
                  </del>
            </motion.h2>
  
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atqueSed ut perspiciatis
              unde omnis iste natus.
            </p>
  
            <Button size={"lg"} innerText={"READ MORE"} />
         </div >

        </div>
      </div>
  );
};

export default Inner;
