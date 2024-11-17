import { createContext, useCallback, useContext, useMemo, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { fetchMeals } from "@/utils/http";
import useMap from "@/hooks/useMap";
// import useCart from "../hooks/useCart";
import { Log } from "../utils/Log";

const OrdersContext = createContext({
    isLoadingMeals: true,
    errorLoadingMeals: null,
    cart: null,
    totalQuantity: 0,
    meals: [],
    getOrderAmount: () => { },
    handleChangeOrderAmount: (id, amount) => { },
    removeItem: (id) => { },
    clearCart: () => { }
}
)

export const useOrders = () => {
    return useContext(OrdersContext)
}

export const OrdersProvider = ({ children }) => {
    const {
        data: meals, isLoading: isLoadingMeals, error: errorLoadingMeals
    } = useFetch(fetchMeals, [])

    const { map: cart, actions: { set, remove, clear } } = useMap()
    const getOrderAmount = useCallback((id) => {
        return cart.get(id) || 0
    }, [cart])

    const removeItem = (id) => {
        remove(id)
    }

    const handleChangeOrderAmount = useCallback((id, amount) => {
        const quantity = (cart.get(id) || 0) + amount

        if (quantity === 0) {
            remove(id)
        } else {
            set(id, quantity)
        }

    }, [cart, set, remove])


    const totalQuantity = useMemo(
        () => {
            let current = 0
            cart.forEach(val => current += val)
            return current
        },
        [cart],
    )


    const clearCart = () => clear()


    return <OrdersContext.Provider value={{ meals, isLoadingMeals, errorLoadingMeals, cart, clearCart, handleChangeOrderAmount, getOrderAmount, clearCart, totalQuantity, removeItem }}>
        {children}
    </OrdersContext.Provider>
}