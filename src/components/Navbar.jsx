import { useSelector } from 'react-redux';
import '../styles/navbar.css'
const Navbar = ()=>{
    const DisplayItem = useSelector((state)=> state.cart.amount)
    return (
        <nav>
            <h3>Items Store</h3>
            <div className="nav-container">
                <div className="Icon">
                <i className="fa-solid fa-bag-shopping" />
                </div>
                <div className="total-amount">
                    <p>{DisplayItem}</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;