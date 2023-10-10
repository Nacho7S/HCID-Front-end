import { combineReducers } from 'redux'
import productReducer from './products'
import productDetailReducer from './productDetail'

const rootReducer = combineReducers({
  product: productReducer,
  productDetail: productDetailReducer
})

export default rootReducer
