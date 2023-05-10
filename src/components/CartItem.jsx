import PropTypes from 'prop-types';

const CartItem = ({id, title,price, img, amount})=>{
    return (
        <div className="cartCard" key={id}>
            <img src={img} alt={title} />
            <div className="itemDetails">
            <h2>{title}</h2>
            <p>${price}</p>
            <button className="removeItem">remove</button>
            <button className="removeItem">+</button>
            <p>{amount}</p>
            <button className="removeItem">-</button>
            </div>
        </div>
    )
}
CartItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price:PropTypes.string,
    amount: PropTypes.number
}
export default CartItem;
