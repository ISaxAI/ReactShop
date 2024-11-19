export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case  'ADD_TO_BASKET':
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.offerId === payload.id
            );

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.offerId !== payload.id)
            }
        case 'CHANGE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'INCREMENT_ORDER_ITEM':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.offerId === payload.id) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }
        case 'DECREMENT_ORDER_ITEM':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.offerId === payload.id) {
                        const newQuantity = orderItem.quantity - 1;
                        return {
                            ...orderItem,
                            quantity: newQuantity >= 1 ? newQuantity : 0
                        }
                    } else {
                        return orderItem
                    }
                })
            }

        default:
            return state
    }
}