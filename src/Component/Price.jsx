import React from 'react'

const Price = ({className,text}) => {
  return (
    <h3 className={`${className} text-Color text-[40px] font-bold font-Poppins`}>{text}</h3>
  )
}

export default Price