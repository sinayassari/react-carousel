import React from 'react'
import './style.scss';

const CarouselItem = props => {
    const {imageUrl, title} = props;
    return (
        <div className='carousel-item'>
            <img src={imageUrl} alt=""/>
            <strong className='carousel-item__title'>{title}</strong>
        </div>
    )
}

export default CarouselItem;
