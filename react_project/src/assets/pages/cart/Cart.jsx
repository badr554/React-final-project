import React from 'react';
import "../../../style/components/_cart.scss";

export default function Cart() {
  return (
    <div>
      <div className="contain">
        <h1>Cart Page</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>cart</span></li>
        </ul>
      </div>

      <div className="cart-container">
        <div className="cart-details">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th className='side'>Price</th>
                <th className='side'>Quantity</th>
                <th className='side'>Total</th>
                <th className='side' >Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="empty-cart">No items in the cart</td>
              </tr>
            </tbody>
          </table>
          <button className="go-to-shop">Go To Shop</button>
        </div>
        <div className="billing-summary">
          <h3>Billing Summary</h3>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>$0</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div className="summary-item">
            <span>Coupon discount</span>
            <span>-$0</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span>$0</span>
          </div>
          <button className="checkout-button">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
