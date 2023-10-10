import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/Actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function TopProduct() {
  const dispatch = useDispatch()
const navigate = useNavigate()
  const data = [
    {
    imgUrl: 'https://sombrero.jdsports.id/pub/media/wysiwyg/Nike_Dunk_Low_Black_White_Blue_1704x185_1.jpg'
    },
    {
    imgUrl: 'https://sombrero.jdsports.id/pub/media/wysiwyg/Air_Jordan_1_Zoom_Air_1704x185_1.jpg'
    }
    
  ]

  const topProductsExam = [
    {
      id: 1,
      imgUrl: "https://www.kickscrew.com/cdn/shop/products/main-square_66d95ece-ebbe-46e3-9a80-cf3704f32a10_460x.jpg?v=1689587275",
      desc: "Air Jordan"
    },
    {
      id: 2,
      imgUrl: "https://www.kickscrew.com/cdn/shop/products/main-square_8850c8cc-a3c7-4825-a422-8caaa8e44add_460x.jpg?v=1676140962",
      desc: "Nike"
    },
    {
      id: 3,
      imgUrl: "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a05efe82-9c9c-4fd4-a244-46fcbb2eba9c_x480.jpg?v=1694110244",
      desc: "Adidas"
    },
    {
      id: 4,
      imgUrl: 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a590fc18-933d-4351-bf15-be5ef6e7396f_x480.jpg?v=1693916964',
      desc: "Converse"
    }
  ]

  const handleProductsSearch = (desc) => {
    dispatch(fetchProducts(desc))
    navigate(`/products?search=${desc}`)

  }
  return (
    <>
      {data.map(image => (
        <div className="mt-2 p-3">
          <img src={ image.imgUrl } className=" img-fluid w-100"/>
        </div>
      ))}
      <div className="d-flex justify-content-center mb-5">
      <div className="shadow p-4 rounded-4 w-75 bg-body-tertiary mt-5 text-center">
      <h2>Our Top Picks</h2>
      <div className="d-flex flex-row gap-4 p-4 mb-2">
        {topProductsExam.map(image => (
          <div className="card p-5 w-25 shadow rounded-4 bg-body" onClick={() => handleProductsSearch(image.desc)} key={image.id}>
            <img src={image.imgUrl} className="img-fluid w-100" />
            <p className=" font-monospace" style={{ fontSize: '1.2rem'} }>{ image.desc }</p>
        </div>
          ))}
      </div>
          </div>
          </div>
    </>
    )
}