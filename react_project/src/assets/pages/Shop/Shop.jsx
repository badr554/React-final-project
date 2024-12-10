import React, { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaHeart, FaShoppingCart, FaExchangeAlt } from "react-icons/fa";
import "../../../style/components/_Shop.scss";


const shopPosts = [
  { id: 1, name: "Brown Antique Door", price: 672, image: "../src/imgs/fz-3-cat-1.png", category: "Double Layer Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing Led Light for Notebook Laptop/PC RGB Backlit Universal."  },
  { id: 2, name: "Solid Color Door", price: 730, image: "../src/imgs/fz-3-cat-1.png", category: "Solid Color Door", description: "Stylish and durable dark brown door.",  },
  { id: 3, name: "Brown Solid Door", price: 630, image: "../src/imgs/fz-3-cat-1.png", category: "Plastic Door", description: "Traditional dark stripe door with a unique design.",  },
  { id: 4, name: "Solid Color Door", price: 680, image: "../src/imgs/fz-3-cat-1.png",category: "Chinese Door", description: "Elegant light wood door for modern homes.",  },
  { id: 5, name: "Dark Brown Door", price: 740, image: "../src/imgs/fz-3-cat-1.png", category: "Solid Color Door", description: "Premium quality brown wood door.",  },
  { id: 6, name: "Solid Color Door", price: 940, image: "../src/imgs/fz-3-cat-1.png", category: "Solid Color Door", description: "Premium quality brown wood door.",  },
  { id: 7, name: "Light Wood Door", price: 710, image: "../src/imgs/fz-3-cat-1.png", category: "Chinese Door", description: "Premium quality brown wood door.",  },
  { id: 8, name: "Dark Brown Door", price: 720, image: "../src/imgs/fz-3-cat-1.png", category: "Chinese Door", description: "Premium quality brown wood door.",  },
  { id: 9, name: "Light Wood Door", price: 700, image: "../src/imgs/fz-3-cat-1.png", category: "Chinese Door", description: "Stylish and durable dark brown door.",  },
  { id: 10, name: "Dark Brown Door", price: 440, image: "../src/imgs/fz-3-cat-1.png", category: "Plastic Door", description: "Stylish and durable dark brown door.",  },
  { id: 11, name: "Solid Color Door", price: 540, image: "../src/imgs/fz-3-cat-1.png", category: "Plastic Door", description: "Stylish and durable dark brown door.",  },
  { id: 12, name: "Light Wood Door", price: 640, image: "../src/imgs/fz-3-cat-1.png", category: "Plastic Door", description: "Stylish and durable dark brown door.",  },
  { id: 13, name: "Dark Brown Door", price: 840, image: "../src/imgs/fz-3-cat-1.png", category: "Plastic Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing",  },
  { id: 14, name: "Modern Fir Door", price: 940, image: "../src/imgs/fz-3-cat-1.png", category: "Solid Color Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing Led Light for Notebook Laptop/PC RGB Backlit Universal.",  },
  { id: 15, name: "Dark Brown Door", price: 140, image: "../src/imgs/fz-3-cat-1.png", category: "Double Layer Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing Led Light for Notebook Laptop/PC RGB Backlit Universal.",  },
  { id: 16, name: "Modern Fir Door", price: 240, image: "../src/imgs/fz-3-cat-1.png", category: "Double Layer Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing Led Light for Notebook Laptop/PC RGB Backlit Universal.",  },
  { id: 17, name: "Dark Brown Door", price: 340, image: "../src/imgs/fz-3-cat-1.png", category: "Solid Color Door", description: "2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing Led Light for Notebook Laptop/PC RGB Backlit Universal.",  }, 

];

export default function Shop() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedOption, setSelectedOption] = useState("Default");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filteredPosts = shopPosts.filter(
    (post) => post.price >= minPrice && post.price <= maxPrice
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedOption === "NameAZ") return a.name.localeCompare(b.name);
    if (selectedOption === "NameZA") return b.name.localeCompare(a.name);
    if (selectedOption === "PriceLowHigh") return a.price - b.price;
    if (selectedOption === "PriceHighLow") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);
  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSortChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleLeftChange = (e) => {
    const newMin = Math.min(parseInt(e.target.value, 10), maxPrice - 10);
    setMinPrice(newMin);
  };

  const handleRightChange = (e) => {
    const newMax = Math.max(parseInt(e.target.value, 10), minPrice + 10);
    setMaxPrice(newMax);
  };
    return (
      <div>
        {/* Header */}
        <div className="contain">
          <h1>Shop Page</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><span>Products</span></li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="shop-page">
          {/* Sidebar */}
          <aside className="sidebar-product">
            {/* Search Box */}
            <div className="Search-Product">
              <h3>Search Product</h3>
              <form className="fasearch">
                <input type="text" placeholder="Search products..." />
                <button className="fabtn">
                  <FaSearch className="faicon" />
                </button>
              </form>
            </div>
  
            {/* Categories */}
            <div className="categories-product">
              <h3>Product categories</h3>
              <ul>
                <li>All Door (17)</li>
                <li>Plastic Door (3)</li>
                <li>Wooden Door (5)</li>
                <li>Double layer Door (1)</li>
                <li>Chinese Door (1)</li>
                <li>Steel Door (1)</li>
                <li>Solid Color Door (3)</li>
                <li>Panel door (1)</li>
                <li>Security door (1)</li>
              </ul>
            </div>
  
            {/* Price Filter */}
            <div className="filter-price">
              <h3>Filter By Price</h3>
              <div className="price-range">
                <div className="price-slider">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={minPrice}
                    className="range-left"
                    onChange={handleLeftChange}
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxPrice}
                    className="range-right"
                    onChange={handleRightChange}
                  />
                  <span
                    className="range-fill"
                    style={{
                      left: `${(minPrice / 1000) * 100}%`,
                      width: `${((maxPrice - minPrice) / 1000) * 100}%`,
                    }}
                  ></span>
                </div>
              </div>
              <div className="price-display">
                <div className="price-value">
                  <h6>Price:</h6>
                  <span className="price-min">${minPrice}</span> -
                  <span className="price-max"> ${maxPrice}</span>
                </div>
                <button className="filter-btn">Filter</button>
              </div>
            </div>
            {/* Tags */}
            <div className="tags-product">
              <h3>Product tags</h3>
              <div className="list-tag">
                <a href="#">Plastic Door</a>
                <a href="#">Wooden Door</a>
                <a href="#">Double Layer Door</a>
                <a href="#">Chinese Door</a>
                <a href="#">Steel Door</a>
                <a href="#">Solid Color Door</a>
                <a href="#">Panel Door</a>
                <a href="#">Security Door</a>
              </div>
            </div>
          </aside>
  
          {/* Products */}
          <div className="shop">
            <div className="shop-row">
              <div className="shop-left">
                <p>
                  Showing {(currentPage - 1) * itemsPerPage + 1}- 
                  {Math.min(currentPage * itemsPerPage, sortedPosts.length)} of {sortedPosts.length} results
                </p>
              </div>
              <div className="shop-right">
                <div className="part-left">
                <button
                  className={`view-left ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <FaTh className="fagrid" />
                </button>
                <button
                  className={`view-right ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <FaList className="falist" />
                </button>

                </div>
                <div className="part-right">
                  <select className="part-select" value={selectedOption} onChange={handleSortChange}>
                    <option value="Default">Default</option>
                    <option value="NameAZ">By Name (A to Z)</option>
                    <option value="NameZA">By Name (Z to A)</option>
                    <option value="PriceLowHigh">By Price (Low to High)</option>
                    <option value="PriceHighLow">By Price (High to Low)</option>
                  </select>
                </div>
              </div>
            </div>
            
            
            <div className={`shop-calc ${viewMode}`}>
              {currentPosts.map((post) => (
                <div className={`door-card ${viewMode === "list" ? "list-view" : "grid-view"}`}>
                  <div className="door-img">
                    <img src={post.image} alt={post.name} className="door-card-img" />
                  </div>
                  <div className="door-card-content">
                    {viewMode === "list" && (
                      <span className="door-category">{post.category}</span>
                    )}
                    <a href="/shop/ShopDetails" className="door-title">{post.name}</a>
                    <div className="rate">
                      <p className="door-price">${post.price}</p>
                      {viewMode === "list" && (
                        <div className="star">
                          <FaStar className="star-icon" />
                          <FaStar className="star-icon" />
                          <FaStar className="star-icon" />
                          <FaStar className="star-icon" />
                          <FaStar className="staricon" />
                        </div>
                      )}
                    </div>
                    {viewMode === "list" && (
                      <p className="door-description">{post.description}</p>
                    )}
                    {viewMode === "list" && (
                      <div className="door-btn">
                        <button className="door-fav">
                          <FaHeart />
                        </button>
                        <button className="door-fav">
                          <FaShoppingCart />
                        </button>
                        <button className="door-fav">
                          <FaExchangeAlt />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Pagination */}
            <div className="door-pagination">
              <ul>
                <li>
                  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &laquo;
                  </button>
                </li>  
                {Array.from({ length: totalPages }, (_, index) => (
                  <li>
                    <button
                      key={index}
                      className={currentPage === index + 1 ? "active" : ""}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
