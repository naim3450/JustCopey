import React from 'react'
import Container from './Container'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Travle from './Travle'
import Mountain from '../assets/Mountain.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Left from './Icon/Left'
import Right from './Icon/Right'
import bennar4 from '../assets/bennar4.jpg'
import Forest from '../assets/Forest.png'
import Cultural from '../assets/Cultural.png'

const Trending = () => {
    const settings = {
        className: "center",
        // infinite: true,
        // centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        prevArrow: <Left/>,
        nextArrow: <Right/>,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
    return (
        <Container className={`mt-[136px]`}>
            <Commontxt text={`Trending 2021`} />
            <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />

            <Slider {...settings} className="pt-[64px] pb-[136px]">
                <Travle imgSrc={Mountain} travle_head="Mountain Hiking Tour" travle_Price="$895.00" Badge_text="30%" />
                <Travle imgSrc={bennar4} travle_head="Mountain Hiking Tour" travle_Price="$890.00" Badge_text="35%" />
                <Travle imgSrc={Forest} travle_head="Mountain Hiking Tour" travle_Price="$900.00" Badge_text="40%"/>
                <Travle imgSrc={Cultural} travle_head="Mountain Hiking Tour" travle_Price="$905.00" Badge_text="45%"/>
            </Slider>

        </Container>
    )
}

export default Trending