import {useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import Pagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    setGoods
} from "../shopSlice";

function Shop() {
    //const {goods, loading, setGoods, order, isBasketShow} = useContext(ShopContext)
    const order = useSelector(state => state.shop.order)
    const isBasketShow = useSelector(state => state.shop.isBasketShow)
    const loading = useSelector(state => state.shop.loading)
    const dispatch = useDispatch()

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        })
            .then(response => response.json())
            .then((data) => {
                dispatch(setGoods(data.shop))
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