import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import img1 from '../images/img1_03.png'
import img2 from '../images/img2_03.png'
import img3 from '../images/img3_03.png'
import './banner.css'

class Banner extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

    }

    const slides=[
      <div className="card_wrap" key='1'>
        <div className="card">
          <img src={img1} alt=""/>
        </div>
      </div>,
      <div className="card_wrap" key='2'>
        <div className="card">
          <img src={img2} alt=""/>
        </div>
      </div>,
      <div className="card_wrap" key=''>
        <div className="card">
          <img src={img3} alt=""/>
        </div>
      </div>
    ]

    const slider = [
      <Slider {...settings}>
        {slides}
     </Slider>
    ]
    return(
      <div className="banner">
        {slider}
      </div>
    )
  }
}

export default Banner
