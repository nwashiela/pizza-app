import React, {useContext}from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
// import ProductsInCart from "./ProductsInCart"
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useState } from "react";
import ProductContext from ".././context/ProductContext"

function Navbar() {
  const { count} = useContext(ProductContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const showRightbar = () => setRightSidebar(!rightSidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
         <Link to={"/productsincart"}>
         <div className="menu-bars">
          <Badge  color="secondary" badgeContent={count} showZero >
              <ShoppingCartIcon className="cart-icon"/>
          </Badge>
          </div>
         </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"} >

          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;


// "icons": [
//   {
//     "src": "favicon.ico",
//     "sizes": "64x64 32x32 24x24 16x16",
//     "type": "image/x-icon"
//   },
//   {
//     "src": "logo192.png",
//     "type": "image/png",
//     "sizes": "192x192"
//   },
//   {
//     "src": "logo512.png",
//     "type": "image/png",
//     "sizes": "512x512"
//   }
// ],