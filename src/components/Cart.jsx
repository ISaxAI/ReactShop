import {useContext} from "react";
import {ShopContext} from "../context";

function Cart(props){
    const {order, changeBasketShow} = useContext(ShopContext)
    const quantity = order.length
    return (
        <div className='cart blue lighten-3 white-text' onClick={changeBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className='cart-shopping_cart'>{quantity}</span> : null}
        </div>
    )
}
export { Cart }