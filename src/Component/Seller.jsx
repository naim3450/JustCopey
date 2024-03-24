import React from 'react'
import Container from './Container'
import Seller_Card from './Seller_Card'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Flex from './Flex'
import Photo from '../assets/Photo.png'
import Photo2 from '../assets/Photo2.png'
import Photo3 from '../assets/Photo3.png'


const Seller = () => {
  return (
    <Container className="mt-[136px] relative">
      <div className="">
        <Commontxt text="Best seller" />
        <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
      </div>

      <button className='bg-hover hover:bg-transparent border-hover border-[1px]  hover:border-gray-500 text-white py-[22px] px-[36px] rounded-[40px] font-Poppins 
        tex-[24px] hover:text-black transition-[.5s] absolute top-[16px] right-0'>Check All</button>

      <Flex className={`justify-between mt-[64px]`}>
        <Seller_Card imgSrc={Photo} Badge_txt={`30%`} title={`10 Days | 09 Night`} sell_price={`$895.50`} Sell_title={`Train Tour Skyline`} text={`Check Out Daily Deals and Promotion on Hotels. 
        Easy & Fast Booking`} />
        <Seller_Card imgSrc={Photo2} Badge_txt={`40%`} title={`06 Days | 07 Day`} sell_price={`$900.50`} Sell_title={`Sea Nature Views`} text={`Check Out Daily Deals and Promotion on Hotels. 
        Easy & Fast Booking`} />
        <Seller_Card imgSrc={Photo3} Badge_txt={`50%`} title={`08 Days | 09 Morning`} sell_price={`$880.50`} Sell_title={`Trilogy Market Ptr`} text={`Check Out Daily Deals and Promotion on Hotels. 
        Easy & Fast Booking`} />
      </Flex>
    </Container>
  )
}

export default Seller