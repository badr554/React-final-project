import React from "react";
import "../../../style/components/_checkout.scss";

export default function Checkout() {
  return (
    <div> 
      <div className="contain">
        <h1>Checkout</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>Contact</span></li>
        </ul>
      </div>
      
      <div className="billing-container">
        <form>
          <h2>Billing Details</h2>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Company Name" />
          <div className="form-select">
            <select>
              <option value="United States (US)">United States (US)</option>
              <option value="United Kingdom (UK)">United Kingdom (UK)</option>
              <option value="Russia">Russia</option>
              <option value="Iran">Iran</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Nepal">Nepal</option>
            </select>
            <input type="text" placeholder="House Number & Street Name" />
          </div>
          <input type="text" placeholder="Apartment, Suite, Unit, etc. (optional)" />
          <input type="text" placeholder="Town / City" />

          <div className="form-group">
            <select>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="California">California</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>

            </select>
            <input type="text" placeholder="Zip Code" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
          </div>
          <label>
            <input type="checkbox" />
            <span>Create an Account</span>
          </label>
          
          <div className="info">
            <h2>Additional Information</h2>
            <textarea placeholder="Notes about your order, e.g., special notes for delivery"></textarea>
          </div>
        </form>

        <div className="billing-summary">
          <h2>Billing Summary</h2>
          <div className="summary-details">
            <ul>
              <li><span>Subtotal</span> <span>$0</span></li>
              <li><span>Shipping</span> <span>$0</span></li>
              <li><span>Coupon discount</span> <span>-$0</span></li>
            </ul>            
            <hr />
            <ul>
              <li className="total"><span>Total</span><span>$0</span></li>
            </ul>
            
          <button>Edit Order</button>
          </div>
          <h2>Payment Information</h2>
          <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
          <p>
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">Privacy Policy</a>.
          </p>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div> 
  );
}