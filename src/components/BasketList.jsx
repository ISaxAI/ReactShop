import {BasketItem} from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context";

const BasketList = (props) => {
    const {
        order = [],
        changeBasketShow,
    } = useContext(ShopContext)

    const totalCost = (order) =>{
        let cost = 0;
        order.forEach(orderItem => {
            cost = cost + (orderItem.regularPrice * orderItem.quantity)
        })
        return cost
    }
    return <ul className="collection with-header basket-list">
        <li className="collection-header">
            <h4>Корзина
                <span className="secondary-content">
            <i className='material-icons' onClick={()=>{changeBasketShow()}}>close</i>
                </span>
            </h4>
        </li>
        {
            order.length ? order.map(item => (
                    <BasketItem key={item.offerId}
                                {...item}
                    />
                )
            ) : <li className="collection-item ">Корзина пуста</li>
        }
        <li className="collection-item active blue lighten-3">
            <div>Общая стоимость: {totalCost(order)}руб.</div>
        </li>
    </ul>
}
export {BasketList}