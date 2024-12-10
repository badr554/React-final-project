import React from "react";
import {
  FaFacebookF, FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa"; 

import "../../../style/components/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <img src="../src/imgs/logo-1.png" alt="Farjaa Doors Logo" />
          <p>
            There are many different styles of including aviator, wayfarer,
            cat-eye, round. Some sunglasses also have polarized lenses.
          </p>
          <div className="payment-icons">
            <img src="../src/imgs/card.png" alt="Payment Methods" />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          {/* Column 1 */}
          <div className="footer-column">
            <h5>Ways to Shop</h5>
            <ul>
              <li>Shop on Facebook</li>
              <li>Shop on Ebay</li>
              <li>Shop by Category</li>
              <li>Shop All</li>
              <li>Coupons and Discounts</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h5>Customer Service</h5>
            <ul>
              <li>Shipping and Returns</li>
              <li>Product Care</li>
              <li>Returns & Policy</li>
              <li>Warranty & Lifetime Service</li>
              <li>Jewelry Care Instruction</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h5>Quick Links</h5>
            <ul>
              <li>Our Story</li>
              <li>Blog & Press</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h5>Store Address</h5>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i> 16 Rr 2, Ketchikan,
                Alaska <br />
                9901, USA
              </li>
              <div className="line"></div>
              <li>
                <i className="fa-solid fa-phone"></i> (907) 225-4144
              </li>
              <div className="line"></div>
              <li>
                <i className="fa-solid fa-envelope"></i> info@webmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          ©2024 Design & Developed by <strong>CodeBasket</strong>
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
