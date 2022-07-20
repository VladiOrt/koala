import Item from 'antd/lib/list/Item';
import React, { Component , useState} from 'react';
import Carousel from 'react-elastic-carousel';
import './index.scss'
const CarruselOne =()=> {
    return (
        <div>
            <Carousel itemsToShow={1} showArrows={false} 
                focusOnSelect={false}
                disableArrowsOnEnd={true}
                className="carr"
            >
                <Item>
                    <div className='Img1Mobil1'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil2'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil3'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil4'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil5'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil6'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil7'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil8'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil9'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil10'>
                    </div>
                </Item>
                <Item>
                    <div className='Img1Mobil11'>
                    </div>
                </Item>
            </Carousel>
        </div>
        
    )
}
export default CarruselOne;