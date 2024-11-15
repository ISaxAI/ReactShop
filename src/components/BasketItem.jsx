const BasketItem = (props) => {
    const {
        offerId,
        displayName,
        quantity,
        regularPrice,
        removeFromBasket = Function.prototype,
        incrementOrderItem = Function.prototype,
        decrementOrderItem = Function.prototype
    } = props
    return<li className="collection-item">
            {displayName}{' '}
            <i className="material-icons basket-quantity"
               onClick={()=>{
                   decrementOrderItem(offerId)
               }}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={()=>{
                    incrementOrderItem(offerId)
                }}
            >
                add
            </i>{' '}
            = {regularPrice * quantity}руб.
            <span className="secondary-content" onClick={() => removeFromBasket(offerId)}>
            <i className='material-icons '>
                close
            </i>
        </span>
        </li>
}
export {BasketItem};