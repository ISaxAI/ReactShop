import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.addToBasket = (item) =>{
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type:'REMOVE_FROM_BASKET', payload: {id: itemId } })
    }
    value.changeBasketShow = () => {
        dispatch({type:'CHANGE_BASKET_SHOW'})
    }
    value.incrementOrderItem = (itemId) => {
        dispatch({type:'INCREMENT_ORDER_ITEM', payload: {id: itemId}})
    }
    value.decrementOrderItem = (itemId) => {
        dispatch({type:'DECREMENT_ORDER_ITEM', payload: {id: itemId}})
    }
    value.setGoods = (data) => {
        dispatch({type:'SET_GOODS', payload: data})
    }
    return (<ShopContext.Provider value={value}>{children}</ShopContext.Provider>)
}