import {useDispatch} from "react-redux";
import {decrementOrderItem, incrementOrderItem, removeFromBasket} from "../shopSlice";

const BasketItem = (props) => {
    const {
        offerId,
        displayName,
        quantity,
        regularPrice,
    } = props
    const dispatch = useDispatch()
    return <li className="collection-item">
        {displayName}{' '}
        <i className="material-icons basket-quantity"
           onClick={() =>
               dispatch(decrementOrderItem({id: offerId}))
        }
        >
            remove
        </i>{' '}
        x{quantity}{' '}
        <i
            className="material-icons basket-quantity"
            onClick={() =>
                dispatch(incrementOrderItem({id: offerId}))
            }
        >
            add
        </i>{' '}
        = {regularPrice * quantity}руб.
        <span className="secondary-content" onClick={() => dispatch(removeFromBasket({id: offerId}))}>
            <i className='material-icons '>
                close
            </i>
        </span>
    </li>
}
export {BasketItem};