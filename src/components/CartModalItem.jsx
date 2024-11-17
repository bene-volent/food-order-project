import { BACKEND_DATA } from "../utils/http"

function CartModalItem({ name, quantity, price, image }) {

    

    return <li className="modal-item">

        <div className="modal-item__meal">
            <img src={image} alt={name} />
            <div className="modal-item__desc">
                <p className="modal-item__name">{name}</p>
                <div className="modal-item__details">
                    <strong><span>{quantity}x</span></strong>
                    <span>@ ${price}</span>
                </div>
            </div>
        </div>
        <span>${(quantity * price).toFixed(2)}</span>
    </li>
}

export default CartModalItem