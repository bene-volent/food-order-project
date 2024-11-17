import { Log } from "../utils/Log"

function CartItem({ name, quantity, price,removeItem }) {

    
    return <li className="cart-item">
        <div className="cart-item__content">
            <p className="cart-item__name">{name}</p>
            <div className="cart-item__details">
                <strong><span>{quantity}x</span></strong>
                <span>@ ${price}</span>
                <span>${(quantity * price).toFixed(2)}</span>
            </div>
        </div>
        <button onClick={removeItem} className="cart-item__remove"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg></button>
    </li>
}

export default CartItem