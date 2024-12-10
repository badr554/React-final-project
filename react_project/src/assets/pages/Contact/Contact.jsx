import React from "react";
import "../../../style/components/-contact.scss";
import {
  FaPhoneAlt, FaClock, FaMapMarkerAlt,
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <div className="contain">
        <h1>Contact Page</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#"><span>Contact</span></a></li>
        </ul>
      </div>
      <div className="contact-container">
        <div className="form-section">
          <h2>Leave a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="info-section">
          <h2>Get In Touch</h2>
          <p><a href="#" aria-label="FaMapMarkerAlt"><FaMapMarkerAlt />  </a> 989 Bel Meadow Drive, Los Angeles, CA 90017</p>
          <p>
          <a href="#" aria-label="FaPhoneAlt"><FaPhoneAlt />  </a> 
          <div className="number">
            <span>(+1) 909-407-2988 </span>  
            <span>(+1) 470-142-2412</span>
          </div>
          </p>
          <p>
          <a href="#" aria-label="FaClock"><FaClock /></a>  
          <div className="_number">
          <span>Store Hours:</span>
          <span>Mon - Sat : 8:00am - 5:00pm</span>
          </div>
          </p>
        <div className="icons">
            <span>Follow Us:</span>
            <div className="-icons">
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
        </div>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.68295129382!2d-118.27454628028438!3d34.05231629884374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7a55107d15b%3A0xe5f4313cc9261c81!2sLos%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2sbd!4v1683722024828!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade">  </iframe>
      </div>
    </div>
    
  );
}