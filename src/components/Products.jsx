import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Actions/actionCreator";
import { useNavigate } from "react-router-dom";
import useFormatCurrencies from "../hooks/useFormatCurrencies";
import EmptyPage from "./EmptyPage";
import Loading from "./Loading";
export default function Products() {
  const { products, productsLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  useEffect(() => {
    dispatch(fetchProducts(searchQuery));
  }, [searchQuery]);

  const toDetails = (slug) => {
    navigate(`${slug}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 rounded-4 text-center bg-body-tertiary">
      {searchQuery ? (
        <h2 className="mt-5">Product By { searchQuery }</h2>
      ) : (<h2 className="mt-5">Our Product</h2>)}
          <div className=" d-flex flex-row gap-3 mt-5 mb-5 justify-content-center flex-wrap">
            {productsLoading ? (
              <Loading /> ): (
              products.map((product) => (
                <div
                  className="shadow w-25 p-3 rounded-4 card"
                  key={product.id}
                  onClick={() => toDetails(product.slug)}
                >
                  <div className="rounded-4 mb-4 bg-body-tertiary">
                    <img src={product.mainImg} className=" img-fluid" />
                  </div>
                  <h5>{product?.name}</h5>
                  <p>{useFormatCurrencies(product?.price)}</p>
                </div>
              ))
            )}
          {!productsLoading && !products?.length && <EmptyPage/>}
          </div>
        </div>
      </div>
    </>
  );
}
