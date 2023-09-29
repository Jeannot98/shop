import { useState } from 'react'
import './Carousel.scss'
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'
import { Data } from '../Data'
// import Image from '../../assets/main-section.jpg'


const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
  return (
    <div className='carousel-main'>
        <div className="arrows">
            <BiSolidLeftArrow className='left' onClick={()=>setCurrent(current === 0 ? length -1: current)}/>
            <BiSolidRightArrow className='right'onClick={()=>setCurrent(current === length-1 ? 0: current)}/>
        </div>

        {Data.map((slides,index)=>{
           return( <div className={index === current ? 'carousel active': 'carousel'}>
                {index === current && (
                    <div className={slides.className}>
                        <div className="texts">
                            <p>{slides.title}</p>
                            <p>{slides.text}</p>
                        </div>
                        <img src={slides.image} alt="" />
                    </div>
                )}
            </div>)
        })}
    </div>
  )
}

export default Carousel