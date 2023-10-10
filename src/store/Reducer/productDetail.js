import { LOADING_PRODUCT, SUCCESS_FETCH_PRODUCT_DETAIL } from "../Actions/actionTypes"

const initialState = {
  productDetail: '',
  productLoading: false
}

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      }
    case LOADING_PRODUCT: 
      return {
        ...state,
        productLoading: action.payload
      }
    default:
      return state
  }
}

export default productDetailReducer