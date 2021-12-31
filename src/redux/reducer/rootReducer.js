import { combineReducers } from 'redux';
import BaiTapBurgerReducer from './BaiTapBurgerReducer';

const rootReducer = combineReducers({
    burgerState: BaiTapBurgerReducer
})

export default rootReducer;