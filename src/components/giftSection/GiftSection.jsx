import './GiftSection.scss'

import { AiFillGift, AiFillDropboxCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBusFront } from 'react-icons/bs'
const GiftSection = () => {
    return (
        <section className='main'>
            <div className="center-text">
                <h1>Good Gift Made Easy</h1>
            </div>

            <div className="allcards">
                <div className="card">
                    <div className="cardimg">
                        <AiFillGift size={100}/>
                    </div>
                    <p>Send as a gift</p>
                    <p>Ship your gift with a free personalized message</p>
                </div>



                <div className="card">
                    <div className="cardimg">
                        <AiFillDropboxCircle size={100}/>
                    </div>
                    <p>Send as a gift</p>
                    <p>Ship your gift with a free personalized message</p>
                </div>



                <div className="card">
                    <div className="cardimg">
                        <AiOutlineShoppingCart size={100}/>
                    </div>
                    <p>Send as a gift</p>
                    <p>Ship your gift with a free personalized message</p>
                </div>



                <div className="card">
                    <div className="cardimg">
                        <BsBusFront size={100}/>
                    </div>
                    <p>Send as a gift</p>
                    <p>Ship your gift with a free personalized message</p>

                </div>
            </div>
        </section>
    )
}

export default GiftSection