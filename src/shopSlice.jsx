import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false
}
const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        addToBasket(state, action) {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === action.payload.id
            );

            if (itemIndex < 0) {
                state.order.push({
                    ...action.payload,
                    quantity: 1
                })
            } else {
                state.order[itemIndex].quantity += 1
            }
        },
        setGoods(state, action) {
            state.goods = action.payload
            state.loading = false
        },
        changeBasketShow(state) {
            state.isBasketShow = !state.isBasketShow
        },
        incrementOrderItem(state, action) {
            const item = state.order.find(orderItem => orderItem.id === action.payload.id)
            if (item) {
                item.quantity += 1
            }
        },
        decrementOrderItem(state, action) {
            const item = state.order.find(orderItem => orderItem.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromBasket(state, action) {
            state.order = state.order.filter(el => el.id !== action.payload.id)
        }
    }
})
export const {
    addToBasket,
    setGoods,
    changeBasketShow,
    removeFromBasket,
    decrementOrderItem,
    incrementOrderItem
} = shopSlice.actions
export default shopSlice.reducer