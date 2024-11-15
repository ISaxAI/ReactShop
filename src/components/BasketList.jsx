import {BasketItem} from "./BasketItem";

const BasketList = (props) => {
    const {
        order = [],
        changeBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrementOrderItem = Function.prototype,
        decrementOrderItem =Function.prototype
    } = props
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
                                removeFromBasket={removeFromBasket}
                                incrementOrderItem={incrementOrderItem}
                                decrementOrderItem={decrementOrderItem}
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