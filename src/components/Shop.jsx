import {useContext, useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import Pagination from "./Pagination";
import {ShopContext} from "../context";

function Shop() {
    const {goods, loading, setGoods, order, isBasketShow} = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.shop)
            })
    }, []);

    return <main className='container content'>
        <Cart quantity={order.length}/>
        {isBasketShow ?
            <BasketList /> : null}
        {
            loading ? <Preloader/> : <Pagination  itemsPerPage={10} />
        }

    </main>
}
export {Shop};