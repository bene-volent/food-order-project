import FoodItem from "@/components/FoodItem";
import { useOrders } from "@/context/OrdersContext";
import { Log } from "../utils/Log";

export default function Shop() {

    const { meals, isLoadingMeals, errorLoadingMeals } = useOrders()
    const canShowMeals = !isLoadingMeals && errorLoadingMeals === null

    return <section className="food-items">
        <h2>Food Items</h2>
        <ol className="food-items-list">

            {isLoadingMeals && <p>Please wait while meals are loading</p>}
            {errorLoadingMeals && <p>"It seams like there was an error loading meals. Please try again</p>}
            {canShowMeals &&
                meals.map((meal, index) => {
                    return <FoodItem key={index} data={meal} />
                })
            }
        </ol>
    </section>
}