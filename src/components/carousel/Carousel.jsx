import React, {useRef} from 'react';
import './style.scss';
import CarouselItem from "../carouselItem/CarouselItem";

const Carousel = props => {
    const {data} = props;
    const carouselRef = useRef();
    let currentNode = 0;
    const goRight = () => {
        currentNode++;
        for (let i of carouselRef.current.children) {
            if (i.nodeName === 'DIV') {
                switch (currentNode) {
                    case 0:
                        i.style.left = '0%'
                        break;
                    case 1:
                        i.style.left = '-100%'
                        break;
                    case 2:
                        i.style.left = '-200%'
                        break;
                    case 3:
                        i.style.left = '-300%'
                        break;
                    case 4:
                        i.style.left = '-400%'
                        break;
                    default:
                        console.log('end')
                }
                if (currentNode > 2) {
                    currentNode = 2;
                }
            }
        }
    }

    const goLeft = () => {
        currentNode--;
        for (let i of carouselRef.current.children) {
            if (i.nodeName === 'DIV') {
                switch (currentNode) {
                    case 0:
                        i.style.left = '0%'
                        break;
                    case 1:
                        i.style.left = '-100%'
                        break;
                    case 2:
                        i.style.left = '-200%'
                        break;
                    case 3:
                        i.style.left = '-300%'
                        break;
                    default:
                        console.log('end')
                }
                if (currentNode < 0) {
                    currentNode = 0;
                }
            }
        }
    }
    return (
        <div className='carousel' ref={carouselRef}>
            <span className='carousel__btn right' onClick={goRight}>Next</span>
            <span className='carousel__btn left' onClick={goLeft}>Prev</span>
            {
                data.map((item, index) => {
                    const imageIndex = index % item.images.length;
                    return (
                        <div key={index} className="carousel__item">
                            <CarouselItem imageUrl={item.images[imageIndex]} title={item.title}/>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Carousel;
