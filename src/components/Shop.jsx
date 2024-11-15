import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import Pagination from "./Pagination";

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)

    const addToBasket = (item) => {
        const newOrderId = order.findIndex(orderId => orderId.offerId === item.offerId)
        if (newOrderId > -1) {
            const newOrder = order.map((orderItem, index) => {
                if (index === newOrderId) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        } else {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        }
    }
    const removeFromBasket = itemId => {
        const newOrder = order.filter(el => el.offerId !== itemId);
        setOrder(newOrder);
    };
    const changeBasketShow = () => {
        setBasketShow(!isBasketShow)
    }
    const incrementOrderItem = (itemId) => {
        const newOrder = order.map((orderItem, index) => {
            if (orderItem.offerId === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return orderItem
            }
        })
        setOrder(newOrder)
    }
    const decrementOrderItem = (itemId) => {
        const newOrder = order.map((orderItem, index) => {
            if (orderItem.offerId === itemId) {
                const newQuantity = orderItem.quantity - 1;
                return {
                    ...orderItem,
                    quantity: newQuantity >= 1 ? newQuantity : 0
                }
            } else {
                return orderItem
            }
        })
        setOrder(newOrder)
    }
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, []);
    return <main className='container content'>
        <Cart quantity={order.length} changeBasketShow={changeBasketShow}/>
        {isBasketShow ?
            <BasketList order={order}
                        changeBasketShow={changeBasketShow}
                        removeFromBasket={removeFromBasket}
                        incrementOrderItem={incrementOrderItem}
                        decrementOrderItem={decrementOrderItem}
            /> : null}
        {
            loading ? <Preloader/> : <Pagination goods={goods} itemsPerPage={10} addToBasket={addToBasket}/>
        }

    </main>
}

export {Shop};