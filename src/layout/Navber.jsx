import React from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Menu from '../Component/Menu'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navber = () => {
    return (
        <Container className={`py-[30px] mb-[56px]`}>
            <Flex className={`items-center`}>

                <Link to={`/`}>
                    <h1 className='text-[40px] text-Color font-Poppins font-semibold mr-[107px]'>Emprise</h1>
                </Link>

                <Menu />

                <Link to={`/Search`} className='ml-[48px] mr-[521px]'>
                    <IoIosSearch className='text-[30px]' />
                </Link>

                <div className="account">

                    <button className='text-[20px] text-white font-Poppins font-normal py-[14px] px-[12px]
                    bg-hover hover:bg-transparent border-hover border-[1px] hover:text-Color transition-[.2s] rounded-[28px] leading-[20px] w-[104px] mr-[10px]'>Login</button>

                    <button className='text-[20px] text-white font-Poppins font-normal py-[14px] px-[12px]
                    bg-hover hover:bg-transparent border-hover border-[1px] hover:text-Color transition-[.2s] rounded-[28px] leading-[20px] w-[104px] '>Sing Up</button>
                </div>
            </Flex>
        </Container>
    )
}

export default Navber