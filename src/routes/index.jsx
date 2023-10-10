import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from "../components/Layouts";
import Homepage from "../views/HomePage";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: '',
        element: <Homepage/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'products/:slug',
        element: <ProductDetails/>
      }
    ]
  },
])