import { useSelector } from "react-redux";
import '../styles/Cart.css';
import CartItem from "./CartItem";
const CartContainer = ()=>{
    const {cartItem,amount, total} = useSelector((store)=> store.cart)
    if(amount < 1){
        return(
            <div className="Emptycart">
                <h2>Your Cart</h2>
                <h4>is currently Empty</h4>
            </div>
        )
    }
    return (
        <section className="Cartcontainer">
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {cartItem.map((item)=>{
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <hr />
            <footer>
            <h4>
                Total: 
                <span>{total}</span>
            </h4>
            <button className="clearAll">Clear All</button>
            </footer>
        </section>
    )
}
export default CartContainer;