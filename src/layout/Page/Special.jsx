import React, { useContext, useState } from 'react'
import Label from '../../Component/Label'
import Input from '../../Component/Input'
import Travle from '../../Component/Travle'
import data from '../../../Templet.json'
import Container from '../../Component/Container'
import Flex from '../../Component/Flex'

const Special = () => {

    // Way of useSatae 
    
    const [item, setitem] = useState(data)

    // Way of useSatae 




    let filterItem = (categoreItem) => {
        const updateItem = data.filter((currentElement) => {
            return currentElement.category === categoreItem
        })
        setitem(updateItem)
    }

    return (
        <Container>
            <Flex className={`justify-between`}>
                <div className="py-[32px] px-[48px] h-[500px] rounded-[16px] travel">
                    <Label text={`When are you traveling?`} htmlFor={`lable`} />
                    <Input id="lable" type={`date`} className={`mt-[10px] w-[320px] border-[2px] py-[10px] px-[10px] rounded-[10px] mb-[40px] date`} />

                    <Label text={`Popular Tags`} />

                    <div className="mt-[16px]">
                        <button onClick={() => filterItem('three')}><input type="checkbox" className='w-[17px]' />Child Friendly</button> <br />
                        <button onClick={() => filterItem('two')} className='my-[16px]'><input type="checkbox" className='w-[17px]' />Taking extra precautions</button> <br />
                        <button onClick={() => filterItem('one')}><input type="checkbox" className='w-[17px]' />Away from the chaos</button>
                    </div>
                </div>

                <div className="justify-between grid grid-cols-2 w-[1114px]">
                    {
                        item.map((value) => {
                            return <Travle className="naim"
                                key={value.id}
                                { ...value }
                                imgSrc={value.thumbnail}
                                travle_Price={value.price}
                                travle_head={value.title}
                                Badge_text={value.badge} />
                        })
                    }
                </div>
            </Flex>
        </Container>
    )
}

export default Special