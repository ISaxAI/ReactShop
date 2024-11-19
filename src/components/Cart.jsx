function Cart(props){
    const {quantity = 0, changeBasketShow} = props;
    return (
        <div className='cart blue lighten-3 white-text' onClick={changeBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className='cart-shopping_cart'>{quantity}</span> : null}
        </div>
    )
}
export { Cart }