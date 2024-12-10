import React, { useState } from "react";
import "../../../style/components/Shop_Details.scss";
import { AiOutlineHeart } from "react-icons/ai";
import SingleProduct from "../../components/singleproduct/SingleProduct";

export default function ShopDetails() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');  // State to handle active tab

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="shop-details">
      {/* Breadcrumb Section */}
      <div className="contain">
        <h1>Shop Details </h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>Shop Details          </span></li>
        </ul>
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <div className="product-image-gallery">
          <img src="/src\imgs\product-det-4.jpg" alt="Product" />
          <div className="image-thumbnails">
            <img src="/src/imgs/fz-3-cat-5.png" alt="Thumbnail 1" />
            <img src="/src/imgs/fz-3-cat-5.png" alt="Thumbnail 2" />
            <img src="/src/imgs/fz-3-cat-5.png" alt="Thumbnail 3" />
            <img src="/src/imgs/fz-3-cat-5.png" alt="Thumbnail 3" />
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-title">Contemporary 4 Panel White Primed Door <br></br> (40mm)</h2>
          <p className="price">$750.00</p>
          <p className="rating">⭐⭐⭐⭐⭐</p>
          <p className="sku">SKU: <span className="side">D080Y</span> </p>
          <p>Category: <span className="side">Security Door</span></p>
          <p>Availability: <span className="side">In Stock</span> </p>
          <p className="short-descr">
           Each controller comes with adjustable in-built dual shock mechanism. They can be toggled on/off and shock setting of 1,2 and 3 Auxiliary buttons around the home button enable more key bindings to be designated.


          </p>
          <div className="quantity-cart">
           <div className="quantity-selector">
  <button onClick={handleDecrement} disabled={quantity <= 1}>
    −
  </button>
  <span>{quantity}</span>
  <button onClick={handleIncrement}>+</button>
</div>

            
            <button className="add-to-cart">Add to Cart</button>
            <button className="wishlist">
            <AiOutlineHeart className="heart" />
            </button>
          </div>
          <div className="paymenet">
          <img src="/src/imgs/card.png" alt="" />
          <p className="guarantee">Guaranteed Safe & Secure Checkout</p> 
          </div>
        </div>
      </div>

        {/* Tabs Section */}
        <div className="tabs">
  <button
    className={`tab ${activeTab === "description" ? "active" : ""}`}
    onClick={() => setActiveTab("description")}
  >
    Description
  </button>
  <button
    className={`tab ${activeTab === "reviews" ? "active" : ""}`}
    onClick={() => setActiveTab("reviews")}
  >
    Reviews
  </button>
</div>

{/* Tab Content */}
<div className="tab-content">
  {activeTab === "description" ? (
    <>
      <p>
        Each controller comes with adjustable in-built dual shock mechanism. 
        They can be toggled on/off and shock setting of 1, 2, and 3. Auxiliary 
        buttons around the home button enable more key bindings to be designated. 
        Designed as PS3 Controllers Can be used in all PC. Condition 8.5/10. 
        Only a small rust on one of the USB heads. A very minor crack at the 
        bottom of the Red Controller.
      </p>
      <ul>
        <li>Designed as PS3 Controllers Can be used in all PC</li>
        <li>A very minor crack at the bottom of the Red Controller</li>
        <li>Condition 8.5/10. Only a small rust on one of the USB heads.</li>
      </ul>
    </>
  ) : (
    <p>User reviews go here. You can add dynamic review components or static content.</p>
  )}
</div>

      {/* Related Products Section */}
      <section className="related-products">
        <div className="heading"><h2>Related Products</h2></div>
   <div className="related-product-cards"><SingleProduct />
   <SingleProduct />
   <SingleProduct />
   <SingleProduct />
   </div>
   
      </section>
    </div>
  );
}
