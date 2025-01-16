import {useContext} from "react";
import {ShopContext} from "../context";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../store";
import {changeBasketShow} from "../shopSlice";

function Cart(props){
    const order = useSelector( state => state.shop.order)
    const dispatch = useDispatch()
    const quantity = order.length
    return (
        <div className='cart blue lighten-3 white-text' onClick={() => dispatch(changeBasketShow())}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className='cart-shopping_cart'>{quantity}</span> : null}
        </div>
    )
}
export { Cart }