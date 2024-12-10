import React from 'react';
import "../../../style/components/_Wishlist.scss";

export default function wishlist() {
  return (
    <div>
      <div className="contain">
        <h1>Wishlist Page</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>Wishlist</span></li>
        </ul>
      </div>

      <div className="Wishlist-container">
        <div className="Wishlist-details">
          <table className="Wishlist-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="empty-cart">No items in the wishlist.                </td>
              </tr>
            </tbody>
          </table>
          <button className="go-to-shop">Go To Shop</button>
        </div>
      
      </div>
    </div>
  );
}
