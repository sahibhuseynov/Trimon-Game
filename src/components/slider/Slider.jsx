import React, { useState, useEffect } from "react";
import "./Slider.scss";
import SliderImage1 from "../../assets/image/h1-slider-img-1.jpg";
import SliderImage2 from "../../assets/image/h1-slider-img-2.jpg";
import SliderImage3 from "../../assets/image/h1-slider-img-3.jpg";
import SliderImage4 from "../../assets/image/h1-slider-img-4.jpg";
import SliderImage5 from "../../assets/image/h1-slider-img-5.jpg";
import ArrowIcon from "../../assets/image/left-arrow.svg";
import Button from "./../Ui/Button/Button";
import { AnimatePresence, delay, motion } from "framer-motion";
const slides = [
  {
    id: 1,
    description: "MORROWIND PLACE",
    title: "New multiplayer game",
    image: SliderImage1,
  },
  {
    id: 2,
    description: "WAYPOINT RUINS",
    title: "Unlock dungeons",
    image: SliderImage2,
  },
  {
    id: 2,
    description: "AINSEL RIVERS",
    title: "New playable demo",
    image: SliderImage3,
  },
  {
    id: 2,
    description: "ALTUS MOUNTAINS",
    title: "Pre order it now",
    image: SliderImage4,
  },
  {
    id: 2,
    description: "WEEPING LIMGRAVE",
    title: "New in-game content ",
    image: SliderImage5,
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { image, title, description } = slides[index];

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex((index) => {
  //       let newIndex = index + 1;
  //       if (newIndex > slides.length - 1) {
  //         newIndex = 0;
  //       }
  //       return newIndex;
  //     });
  //   }, 8000);
  //   return () => clearInterval(slider);
  // },[])

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > slides.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 2;
      }
      return newIndex;
    });
  };
  return (
    <motion.div key={index} className="slider ">
      
        <motion.img
          // initial={{ scale: 1 }}
          // animate={{ scale: 1.2, x: 100 }}
          // transition={{ duration: 11.5 }}
          src={image}
        />

        <div className="slider__container">
          <div className="left__content">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 , }}
             
            className="slides__length">
              0{index + 1} / 0{slides.length}
            </motion.div>
            <div className="left__content__box">
              <motion.h1
                initial={{ x: -700 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                {description}
              </motion.h1>
              <motion.span
                initial={{ x: -700 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2 }}
              >{title}</motion.span>
              <Button size={"lg"} innerText="READ MORE" />
            </div >

            
          </div>

          <div className="right__content">
            <img onClick={prevPerson} src={ArrowIcon} alt="" />
            <img onClick={nextPerson} src={ArrowIcon} alt="" />
          </div>
        </div>
      
    </motion.div>
  );
};

export default Slider;
