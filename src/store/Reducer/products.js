import { LOADING_PRODUCT, SUCCESS_FETCH_PRODUCT } from "../Actions/actionTypes"

const initialState = {
  products: [],
  productsLoading: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    case LOADING_PRODUCT: 
      return {
        ...state,
        productsLoading: action.payload
      }
    default:
      return state
  }
}

export default productReducer