import React from 'react';
import {
  FaFacebookF, FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";
import '../../../style/components/_About.scss';
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className="about_page">
      {/* Header Section */}
      <div className="contain">
        <h1>About</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#"><span>About</span></a></li>
        </ul>
      </div>

      <section className="story-section">
          <div className="content-wrapper">
            {/* Left Section */}
            <div className="left-section">
              <div className="main-image">
                <div className="img-about">
                  <img src="../src/imgs/about-img-2.jpg" alt="About Main" />
                </div>
                <div className="customers">
                  <div className="info-box">
                    <span className="info-title">30K+</span>
                    <span className="info-subtitle">Active Customers</span>
                  </div>
                  <div className="customer-images">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <img
                        key={num}
                        src={`../src/imgs/customr-${num}.png`}
                        alt={`Customer ${num}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="secondary-image">
                <div className="img-second">
                  <img src="../src/imgs/about-img-1.jpg" alt="About Secondary" />
                </div>
                <div className="badge-after">
                  <div className="badge">
                    <span className="badge-text">Since From</span>
                    <span className="badge-year">2010</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <h2 className="title">About Our Story</h2>
              <p className="description">
                Established fact that a reader will, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with the theory of ethics. Posuere eat a ante venanatin diapaus posuere aliquot. Staging at the middle of 2010 seem malasada magna moles eulimid. Present commode cursus magna, vela scelerisque Nissl consented et. Integer posuere era a ante venanatin dipygus posuere valet aliquot.
              </p>
              <div className="details-wrapper">
                <div className="detail-image">
                  <img src="../src/imgs/about-img-3.jpg" alt="Author" />
                </div>
                {/* <div className="ul-list"> */}
                  <ul className="details-list">
                    <li>Orders go right to your restaurant</li>
                    <li>Provide in-person pickup & delivery</li>
                    <li>Offer in-person diners self-serve</li>
                    <li>Established fact that a reader will</li>
                  </ul>
                {/* </div> */}
              </div>
              <div className="author-info">
                <img
                  className="signature"
                  src="../src/imgs/about-author-sign.png"
                  alt="Author Signature"
                />
                <div className="author-details">
                  <img
                    className="author-image"
                    src="../src/imgs/about-author-img.png"
                    alt="Author"
                  />
                  <div>
                    <h4 className="author-name">Arjuna Alisha</h4>
                    <span className="author-role">Author</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>
            
      {/* Team Section */}
      <section className="about_content">
        <div className="content-team">
          <h2>Our Team Member</h2>
          <div className="team-img">
            <div className="photo">
              <div className="-img">
                <img src="/src/imgs/member-1.png" alt="member-1" />
              </div>

              <div className="details">
                <div className="tail">
                  <h5>Akyssa kinley</h5>
                  <span>Founder</span>
                </div>
                <div className="hide">
                  <ul>
                    <li><Link to="#"><FaFacebookF /></Link></li>
                    <li><Link to="#"><FaTwitter /></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>
                    <li><Link to="#"><FaYoutube /></Link></li>
                  </ul>
                </div>
              </div>
              
            </div>
            <div className="photo">
              <div className="-img">
                <img src="/src/imgs/member-2.png" alt="member-2" />
              </div>
              <div className="details">
                <div className="tail">
                  <h5>Abu Amer</h5>
                  <span>Manager</span>
                </div>
                <div className="hide">
                  <ul>
                  <li><Link to="#"><FaFacebookF /></Link></li>
                    <li><Link to="#"><FaTwitter /></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>
                    <li><Link to="#"><FaYoutube /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="photo">
              <div className="-img">
                <img src="/src/imgs/member-3.png" alt="member-3" />
              </div>
              <div className="details">
                <div className="tail">
                  <h5>Sarah Sheila</h5>
                  <span>Ceo</span>
                </div>
                <div className="hide">
                  <ul>
                  <li><Link to="#"><FaFacebookF /></Link></li>
                    <li><Link to="#"><FaTwitter /></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>
                    <li><Link to="#"><FaYoutube /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="photo">
              <div className="-img">
                <img src="/src/imgs/member-4.png" alt="member-4" />
              </div>
              <div className="details">
                <div className="tail">
                  <h5>Aksaya Khurana</h5>
                  <span>Accountant</span>
                </div>
                <div className="hide">
                  <ul>
                  <li><Link to="#"><FaFacebookF /></Link></li>
                    <li><Link to="#"><FaTwitter /></Link></li>
                    <li><Link to="#"><FaInstagram /></Link></li>
                    <li><Link to="#"><FaYoutube /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="store-section">
        <div className="container">
          {/* Store 1 */}
          <div className="store">
              <div className="store-image">
                <img src="../src/imgs/store-1.jpg" alt="Store 1" />
              </div>
              <div className="store-content">
                <h2 className="store-title">Our Store (1)</h2>
                <p className="store-description">
                  Established fact that a reader will, taken possession of my
                  entire soul, like these sweet mornings of spring which I enjoy
                  with the theory of ethics. Posuere eat a ante venanatin diapaus
                  posuere aliquot. Staging at the middle of 2010 seem malasada
                  magna moles eulimid. Present commode cursus magna, vela
                  scelerisque Nissl consented et. Integer posuere era a ante
                  venanatin dipygus posuere valet aliquot.
                </p>
                <ul className="store-features">
                  <li>Orders go right to your restaurant</li>
                  <li>Provide in-person pickup, & delivery</li>
                  <li>Offer in-person diners self-serve</li>
                </ul>
                <Link to="/shop" className="store-button">
                  Visit Store
                </Link>
              </div>
            
          </div>

          {/* Store 2 */}
          <div className="store"> 
              <div className="store-content">
                <h2 className="store-title">Our Store (2)</h2>
                <p className="store-description">
                  Established fact that a reader will, taken possession of my
                  entire soul, like these sweet mornings of spring which I enjoy
                  with the theory of ethics. Posuere eat a ante venanatin diapaus
                  posuere aliquot. Staging at the middle of 2010 seem malasada
                  magna moles eulimid. Present commode cursus magna, vela
                  scelerisque Nissl consented et. Integer posuere era a ante
                  venanatin dipygus posuere valet aliquot.
                </p>
                <ul className="store-features">
                  <li>Orders go right to your restaurant</li>
                  <li>Provide in-person pickup, & delivery</li>
                  <li>Offer in-person diners self-serve</li>
                </ul>
                <Link to="/shop" className="store-button">
                  Visit Store
                </Link>
              </div>
              <div className="store-image">
                <img src="../src/imgs/store-2.jpg" alt="Store 2" />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}