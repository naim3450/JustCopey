import React, { useState } from 'react'
import Container from '../../Component/Container'
import Input from '../../Component/Input'
import Travle from '../../Component/Travle'
import data from '../../../Templet.json'
import Flex from '../../Component/Flex'
import Label from '../../Component/Label'
// import Online from '../../../Online.json'


const SearchResult = () => {

    const [search, setsearch] = useState(data);

    // For Search Part
    let btn = (event) => {
        setsearch(event.target.value)
    }
    // For Search Part

    return (
        <Container className={`mb-[136px]`}>
            <Input
                type={`email`}
                placeholder={`Enter your email`}
                className="w-[450px] h-[50px] py-[30px] pl-[40px] absolute top-[25px] left-[1050px]"
                onChange={btn} />

            {/* <Flex> */}

            <div className={`grid grid-cols-3 justify-between`}>
                {data.filter((val) => {
                    if (search == data) {
                        return val;
                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                        return val;
                    }
                })
                    .map((val) => {
                        return (
                            <Travle className="naim"
                                key={val.id}
                                imgSrc={val.thumbnail}
                                travle_Price={val.price}
                                travle_head={val.title}
                                Badge_text={val.badge} />
                        )
                    })
                }
            </div>

            {/* </Flex> */}




        </Container>
    )
}

export default SearchResult