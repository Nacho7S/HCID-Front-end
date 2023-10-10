import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsBySlug } from "../store/Actions/actionCreator";
import useFormatCurrencies from "../hooks/useFormatCurrencies";
import Loading from "./Loading";


export default function ProductDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productLoading } = useSelector(
    (state) => state.productDetail
  );
  useEffect(() => {
    dispatch(fetchProductsBySlug(slug));
  }, []);
  return (
    <>
      {/* <p>ini detail {JSON.stringify(productDetail)}</p> */}
      <div className="d-flex justify-content-center ms-5 mb-5 flex-row mt-5">
        {productLoading ? (
          <Loading/>
        ) : (
        <>
        <div className="rounded-3 w-50 p-5 shadow">
          <h5>{productDetail.Category?.name} {'>'} { productDetail.name }</h5>
          <img src={productDetail.mainImg} alt={productDetail.name} className="img-fluid w-75"/>
          <div className=" bg-body-tertiary p-3 d-flex flex-row flex-wrap gap-5 rounded-4">
          {productDetail.Images &&
            productDetail.Images.map((el) => (
              <div className=" bg-white w-25 rounded-3 ">
              <img src={el.imgUrl} alt={`Image ${el.id}`} key={el.id} className="img-fluid"/>
                </div>
              ))}
          </div>
        </div>
        <div className="d-flex flex-column mt-5 p-5 gap-4 flex-wrap w-25">
          <h2>{productDetail.name}</h2>
          <div className=" opacity-50">
          <h5>{ productDetail.Category?.name }</h5>
          </div>
          <h4>Price: {useFormatCurrencies(productDetail.price)}</h4>
          <div className=" border-top">
          <h5>{ productDetail.description }</h5>
          </div>
        </div>
              </>
            )}
      </div>
    </>
  );
}
