import { RENDER_SALAD, RENDER_CHEESE, RENDER_BEEF } from "../types/BaiTapBurgerType";

const burgerState = {
    burger:
    {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 85,
}



const BaiTapBurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case RENDER_SALAD: {
            if (action.isAdded) {
                state.burger.salad += 1;
                state.total = state.total + state.menu.salad;
            } else {
                if (state.burger.salad >= 1) {
                    state.burger.salad -= 1;
                    state.total = state.total - state.menu.salad;
                } else {
                    alert('No more salad to reduce.')
                }
            }

            return { ...state }
        }
        case RENDER_CHEESE: {
            if (action.isAdded) {
                state.burger.cheese += 1;
                state.total = state.total + state.menu.cheese;
            } else {
                if (state.burger.cheese >= 1) {
                    state.burger.cheese -= 1;
                    state.total = state.total - state.menu.cheese;
                } else {
                    alert('No more cheese to reduce.')
                }
            }

            return { ...state }
        }
        case RENDER_BEEF: {
            if (action.isAdded) {
                state.burger.beef += 1;
                state.total = state.total + state.menu.beef;
            } else {
                if (state.burger.beef >= 1) {
                    state.burger.beef -= 1;
                    state.total = state.total - state.menu.beef;
                } else {
                    alert('No more beef to reduce.')
                }
            }

            return { ...state }
        }
        default: return { ...state }
    }
}

export default BaiTapBurgerReducer;