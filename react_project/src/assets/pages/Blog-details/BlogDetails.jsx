import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

import {
  FaReply,
  FaFacebookF, FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa"; 
import "../../../style/components/_BlogDetails.scss";

export default function Blog() {
  const [comments, setComments] = useState([
    { name: "Abu Amer", date: "May 9, 2023", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id. Maxime consequatur recusandae fugiat accusamus ipsam reiciendis, officiis esse assumenda voluptas aspernatur consequuntur? Eaque sed quibusdam ipsum saepe nulla!" }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // منع إعادة تحميل الصفحة
    const newComment = {
      name,
      date: new Date().toLocaleDateString(),
      text: commentText
    };
    setComments([...comments, newComment]);  // إضافة التعليق الجديد إلى القائمة
    setName('');
    setEmail('');
    setCommentText('');
  };
  return (
    <div>
      <div className="contain">
        <h1>Blog Details</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>Blog Details</span></li>
        </ul>
      </div>
      <div className="content-details">
        <div className="blogs-container">
          <div className="blogs">
            <div className="img-blogs">
              <div className="blog-img">
                <img src="/src\imgs\blogs-blog-1.png" alt="blog-1" />
              </div>
              <div className="details-heading">
                <h3>An electronic product is a device that uses electricity to perform a function.</h3>
                <div className="img-details">
                  <span className="ele">Electronics</span>
                  <span className="mon">June 21, 2023</span>
                </div>
              </div>
            </div>
            <div className="text">
              <p>
              As the year winds down and comes to an end; many take some time to reflect on what’s happened over the past 11—12 months or so in your work. Self-reflection and asking questions about the things that make you happy, and perhaps, not so happy, are part and parcel of the festive season, as a new year comes into sight. Tes, it’s all gone so fast again. Do you have job satisfaction? If not, now’s the time to address this issue.It’s no secret that the previous two years have been challenging for all in different ways; however, a common theme has been a shift in the way individuals want to work, and how businesses can ensure the well-being of their staff. Career and job happiness have either thrived for people or quite the opposite.
              </p>
              <div className="details-blqt">
                <i></i>
                <p>Think about the last time you tried a new restaurant. Or bought a vacuum. You probably looked for reviews online first, right? When considering a purchase, people want first-hand perspectives from other people just like them. While a famous influencer might catch their attention, experiences.</p>
                <h5>Jane lam</h5>
              </div>
              <p>As the year winds down and comes to an end; many take some time to reflect on what’s happened over the past 11—12 months or so in your work. Self-reflection and asking questions about the things that make you happy, and perhaps, not so happy, are part and parcel of the festive season, as a new year comes into sight. Tes, it’s all gone so fast again. Do you have job satisfaction? If not, now’s the time to address this issue.</p>
              <p>As the year winds down and comes to an end; many take some time to reflect on what’s happened over the past 11—12 months or so in your work. Self-reflection and asking questions about the things that make you happy, and perhaps, not so happy, are part and parcel of the festive season, as a new year comes into sight. Tes, it’s all gone so fast again. Do you have job satisfaction? If not, now’s the time to address this issue.</p>
              <img src="/src\imgs\blog-details-image.png" alt="details" />
              <p>As the year winds down and comes to an end; many take some time to reflect on what’s happened over the past 11—12 months or so in your work. Self-reflection and asking questions about the things that make you happy, and perhaps, not so happy, are part and parcel of the festive season, as a new year comes into sight. Tes, it’s all gone so fast again. Do you have job satisfaction? If not, now’s the time to address this issue.</p>
            
            </div>

          </div>
          <div className="tags-details">
              <div className="tags-left">
                <span className="tag-h3">Tags:</span>
                <a href="#">Men</a>
                <a href="#">Sales</a>
                <a href="#">Electronic</a>
                <a href="#">Marketings </a>

              </div>
              <div className="tags-right">
                <span className="tag-h4">Share:</span>
                <button><FaFacebookF /></button>
                <button><FaTwitter /></button>
                <button><FaInstagram /></button>
                <button><FaYoutube /></button>
              </div>
            </div>
        </div>
        
        <aside className="sidebar">  
          <div className="search-box">
            <h3>Search</h3>
            <form className="form-search">
              <input type="text" placeholder="Search products..." />
              <button className="search-btn">
                <FaSearch className="icon-search" />
              </button>
            </form>
          </div>
          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <div className="posts">
              <img src="\src\imgs\blogs-blog-1.png" alt="blog-1" />
              <div className="blogs">
                <div className="top-post">
                  <span className="furn">Electronics</span>
                  <h5>June 21, 2023</h5>
                </div>
                <h4>An electronic product is a device that uses electricity to perform a function.</h4> 
              </div>
            </div>
        
            <div className="posts">
              <img src="\src\imgs\blogs-blog-2.png" alt="blog-2" />
              <div className="blogs">
                <div className="top-post">
                  <span className="furn">Furniture</span>
                  <h5>June 21, 2023</h5>
                </div>
                <h4>There are many furniture blogs that provide information and inspiration on furniture</h4>
              </div>
            </div>
            <div className="posts">
              <img src="\src\imgs\blogs-blog-3.png" alt="blog-3"/>
              <div className="blogs">
                <div className="top-post">
                  <span className="furn">Fashion</span>
                  <h5>June 21, 2023</h5>
                </div>
                <h4>Fashion refers to the styles and trends in clothing footwear, accessories ersonal expression</h4> 
              </div>
            </div>
          </div>
          <div className="categories">
            <h3>Blog Categories</h3>
            <ul>
              <li>All Door (5)</li>
              <li>Electronics (1)</li>
              <li>Furniture (1)</li>
              <li>Fashion (1)</li>
              <li>Food (1)</li>
              <li>Travel (1)</li>
            </ul>
          </div>
          <div className="tags">
            <h3>Blog Tags</h3>
            <div className="tag-list">
              <a>Electronics</a>
              <a>Furniture</a>
              <a>Fashion</a>
              <a>Food</a>
              <a>Travel</a>
            </div>
          </div>
        </aside>
        
      </div> 
      {/*  */}
      <div className="comment-section">
        <div className="comments">
          <h2>Comments (0{comments.length})</h2>
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="user-info">
                <img src="\src\imgs\user-4.png" alt="User" />
                <div>
                  <h3>{comment.name}</h3>
                  <p className="date">{comment.date}</p>
                </div>
              </div>
              <p className="comment-text">{comment.text}</p>
              <button>Reply
                <FaReply className="icon-reply" />
              </button>
            </div>
          ))}
        </div>

        <div className="reply-form">
          <h3>Leave a Reply</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="group-form">
                <div className="input-form">
                  <label htmlFor="name">Name*</label>
                  <input 
                    type="text" 
                    placeholder="Type Your Name Here" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className="input-form">
                  <label htmlFor="email">Email*</label>
                  <input 
                    type="email" 
                    placeholder="Type Your Email Here" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div className="textarea-form">
                <label htmlFor="comment">Comment*</label>
                <textarea 
                  placeholder="Type Your Comment Here" 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">
                <span>Post Comment</span></button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}