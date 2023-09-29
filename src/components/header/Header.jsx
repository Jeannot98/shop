import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul className='ul-items'>
                    <li className='li-items'>
                        <Link to='/women'>Women</Link>
                        <Link to='/men'>Men</Link>
                        <Link to='/denim'>Denim</Link>
                        <Link to='/shop' className='orange'>Shop</Link>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>


                <div className='logo'>
                    <h1>EshopLand</h1>
                </div>


                <div className="rigth">
                    <div className="search">
                        <AiOutlineSearch size={15} className='search-icon' />
                        <button className='sch-btn'>Search</button>
                    </div>


                    <div className="rigth-buttons">
                        <button>
                            <Link to="/login">Log In</Link>
                        </button>

                        <button>
                            <Link to='/signup'>Sign Up</Link>
                        </button>

                        <AiOutlineShoppingCart className='basket'/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header