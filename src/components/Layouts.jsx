import NavbarComponents from "./Navbar";
import {Outlet} from 'react-router-dom'

export default function Layouts() {
  return (
    <>
    <NavbarComponents />
    <Outlet/>
    </>
    )
}