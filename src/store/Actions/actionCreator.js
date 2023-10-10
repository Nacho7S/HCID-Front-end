import { BASE_URLS } from "../../config/baseUrls";
import { LOADING_PRODUCT, SUCCESS_FETCH_PRODUCT, SUCCESS_FETCH_PRODUCT_DETAIL } from "./actionTypes";


export function fetchProducts(search) {
  return async (dispatch) => {
    // console.log(search);
    dispatch({
      type: LOADING_PRODUCT,
      payload: true
    })
    try {
      let urls = `${BASE_URLS}/products`
      if (search) {
        urls += `?search=${search}`
      }
      const res = await fetch(urls)
      const dataJson = await res.json()
      dispatch({
        type: SUCCESS_FETCH_PRODUCT,
        payload: dataJson
      })
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({
        type: LOADING_PRODUCT,
        payload: false
      })
    }
  }
}


export function fetchProductsBySlug(slug) {
  return async (dispatch) => {
    dispatch({
      type: LOADING_PRODUCT,
      payload: true
    })
    try {
      let urls = `${BASE_URLS}/products/${slug}`
      const res = await fetch(urls)
      const dataJson = await res.json()
      // console.log(dataJson);
      dispatch({
        type: SUCCESS_FETCH_PRODUCT_DETAIL,
        payload: dataJson
      })
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({
        type: LOADING_PRODUCT,
        payload: false
      })
    }
  }
}