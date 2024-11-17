import { useState } from "react"
import AddToCart from "./AddToCart"
import { BACKEND_DATA } from "@/utils/http"
import { useOrders } from "@/context/OrdersContext"
import { Log } from "../utils/Log"




export default function FoodItem({ data, ...props }) {
    
    const { getOrderAmount, handleChangeOrderAmount } = useOrders()

    function changeAmount(amount) {
        handleChangeOrderAmount(data.id, amount)
    }
    const amount = getOrderAmount(data.id)
    return <li className="food-item">
        <img src={data.image} alt={data.name} data-selected={amount>0}/>
        <AddToCart amount={amount} changeAmount={changeAmount} />
        <div className="food-item__details">
            <h3 className='food-item__name'>{data.name}</h3>
            <p className="food-item__description">{data.description}</p>
            <p className="food-item__price">{data.price}</p>
        </div>
    </li>
}