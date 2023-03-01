import React from 'react'
import './SlickSlider.scss'
import Slider from "react-slick";
import galery1 from '../../assets/image/h1-gallery-img-1.jpg'
import galery2 from '../../assets/image/h1-gallery-img-2.jpg'
import galery3 from '../../assets/image/h1-gallery-img-3.jpg'
import galery4 from '../../assets/image/h1-gallery-img-4.jpg'
const SlickSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            
          ],
      };
  return (
    <div className='silder'>
        <Slider  {...settings}>
        <div className='slider__galery'>
            <img src={galery1} alt="" />
        </div>
        <div className='slider__galery'>
            <img src={galery2} alt="" />
        </div>
        <div className='slider__galery'>
            <img src={galery3} alt="" />
        </div>
        <div className='slider__galery'>
            <img src={galery4} alt="" />
        </div>

        </Slider>
    </div>
  )
}

export default SlickSlider