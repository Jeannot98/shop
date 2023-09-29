import './Cart.scss'

import React from 'react'

const Cart = ({id,image, title, description}) => {
    return (
        <div key={id} className='cart'>
            <img src={image} alt="" />
            <p>{title}</p>
            <h1>{description}</h1>
        </div>
    )
}

export default Cart