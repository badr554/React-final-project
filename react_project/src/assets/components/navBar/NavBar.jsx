import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../../imgs/logo-1.png";
import "../../../style/components/_navbar.scss";

export default function NavBar() {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        {/* Navigation Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink to="/">Home +</NavLink>
            </li>

            {/* Shop Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
            >
              <li>Shop +</li>
              {showShopDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/Shop/Shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/ShopDetails">Shop Details</NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setShowPagesDropdown(true)}
              onMouseLeave={() => setShowPagesDropdown(false)}
            >
              <li>Pages +</li>
              {showPagesDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/pages/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/faq">FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/wishlist">Wishlist</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/account">Account</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/checkout">Checkout</NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setShowBlogDropdown(true)}
              onMouseLeave={() => setShowBlogDropdown(false)}
            >
              <li>Blog +</li>
              {showBlogDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/Blog/Blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog/BlogDetails">Blog Details</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Farjaa Doors Logo" />
          </NavLink>
        </div>

        {/* Right Search and Icons */}
        <div className="nav-actions">
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search keyword" />
            <FaSearch className="search-icon" />
          </div>

          {/* Icons */}
          <AiOutlineHeart className="icon" />
          <div className="cart-icon">
            <BiShoppingBag className="icon" />
            <span className="cart-badge"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
