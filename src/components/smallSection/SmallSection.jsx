import './SmallSection.scss'
import Cart1 from '../../assets/cart1.jpg'
import Cart2 from '../../assets/cart2.jpg'
import Cart3 from '../../assets/cart3.jpg'
import Cart4 from '../../assets/cart4.jpg'


const SmallSection = () => {
    /*const allCart = [
        { id: 1, title1: "Shirt", description1: "Good Shirt for all", image: { Cart1 } },
        { id: 2, title2: "Dress", description2: "Good Dress for Women", image: { Cart2 } },
        { id: 3, title3: "Suit Jacket and Bag", description3: "Good Suit Jacket and bad for Women", image: { Cart3 } },
        { id: 4, title4: "Jeans", description4: "Good Jeans for all", image: { Cart4 } },
    ]*/
    return (
        <section className='second-section'>
            <div className="allcart">
                <div className='cart'>
                    <img src={Cart1} alt="" />
                    <p>Shirt</p>
                    <h1>Good Shirt for all</h1>
                </div>
                <div className='cart'>
                    <img src={Cart2} alt="" />
                    <p>Dress</p>
                    <h1>Good Dress for Women</h1>
                </div>
                <div className='cart'>
                    <img src={Cart3} alt="" />
                    <p>Suit Jacket and Bag</p>
                    <h1>Good Suit Jacket and bad for Women</h1>
                </div>
                <div className='cart'>
                    <img src={Cart4} alt="" />
                    <p>Jeans</p>
                    <h1>Good Jeans for all</h1>
                </div>
            </div>
        </section>
    )
}

export default SmallSection