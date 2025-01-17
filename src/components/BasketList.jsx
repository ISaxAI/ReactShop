import {BasketItem} from "./BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {changeBasketShow} from "../shopSlice";

const BasketList = (props) => {
    const order = useSelector(state => state.shop.order)
    const dispatch = useDispatch()
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
            <i className='material-icons' onClick={()=>{dispatch(changeBasketShow())}}>close</i>
                </span>
            </h4>
        </li>
        {
            order.length ? order.map(item => (
                    <BasketItem key={item.id}
                                offerId={item.id}
                                displayName={item.displayName}
                                quantity={item.quantity}
                                regularPrice={item.regularPrice}
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