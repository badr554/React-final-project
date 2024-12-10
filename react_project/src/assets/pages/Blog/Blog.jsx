
import React, { useState } from "react"; 
import { FaSearch } from "react-icons/fa"; 
import "../../../style/components/_Blog.scss"; 
 
export default function Blog() { 
  const blogPosts = [ 
    { 
      id: 1, 
      category: "Electronics", 
      date: "June 21, 2023", 
      title: "An electronic product is a device that uses electricity to perform a function.", 
      description: "Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.", 
      image: "/src/imgs/blogs-blog-1.png", 
    }, 
    { 
      id: 2, 
      category: "Furniture", 
      date: "June 21, 2023", 
      title: "There are many furniture blogs that provide information and inspiration on furniture.", 
      description: "These blogs often feature articles on a variety of topics related to furniture, such as how to choose the right furniture for your space, how to care for different types of furniture, and how to mix and match different styles to create a cohesive look...", 
      image: "/src/imgs/blogs-blog-2.png", 
    }, 
    { 
      id: 3, 
      category: "Fashion", 
      date: "June 21, 2023", 
      title: "Fashion refers to the styles and trends in clothing, footwear, and accessories.", 
      description: "Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.", 
      image: "/src/imgs/blogs-blog-3.png", 
    }, 
    { 
      id: 4, 
      category: "Food", 
      date: "June 22, 2023", 
      title: "Exploring Culinary Delights: A Journey into Exquisite Tastes", 
      description: "Food is not just sustenance; it's an art, a culture, and a way of life. From street food stalls to Michelin-starred restaurants, this blog dives into the rich tapestry of flavors, ingredients, and culinary traditions that make up our global food landscape.", 
      image: "/src/imgs/blogs-blog-4.png", 
    }, 
    { 
      id: 5, 
      category: "Fashion", 
      date: "June 22, 2023", 
      title: "Wanderlust Chronicles: Tales of Adventures and Discoveries", 
      description: "Embark on a virtual journey to faraway lands, hidden gems, and breathtaking landscapes. This travel blog captures the spirit of exploration, offering insights into unforgettable destinations, travel tips, and personal stories from globetrotters around the world.", 
      image: "/src/imgs/blogs-blog-5.png", 
    }, 
  ]; 
 
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 3; 
 
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost); 
  const totalPages = Math.ceil(blogPosts.length / postsPerPage); 
 
  return ( 
    <div> 
      {/* Header */} 
      <div className="contain"> 
        <h1>Blog Page</h1> 
        <ul> 
          <li><a href="/">Home</a></li> 
          <li><span>Blog</span></li> 
        </ul> 
      </div> 
 
      {/* Main Content */} 
      <div className="main-content"> 
        <div className="content-main"> 
          {currentPosts.map((post) => ( 
            <div key={post.id} className="blog-post"> 
              <div className="blog-img"> 
                <img src={post.image} alt={`blog-${post.id}`} /> 
              </div> 
              <div className="blog-details"> 
                <div className="category"> 
                  <span className="elect">{post.category}</span> 
                  <h5>{post.date}</h5> 
                </div> 
                <h2><a href="#">{post.title}</a></h2> 
                <p>{post.description}</p> 
                <button onClick={() => alert(`Read more about: ${post.title}`)}>


<span>Read More</span> 
                </button> 
              </div> 
            </div> 
          ))} 
        </div> 
 
        {/* Sidebar */} 
        <aside className="sidebar"> 
          {/* Search Box */} 
          <div className="search-box"> 
            <h3>Search Blog</h3> 
            <form className="form-search"> 
              <input type="text" placeholder="Search products..." /> 
              <button className="search-btn"> 
                <FaSearch className="icon-search" /> 
              </button> 
            </form> 
          </div> 
 
          {/* Recent Posts */} 
          <div className="recent-posts"> 
            <h3>Recent Posts</h3> 
            {blogPosts.slice(0, 3).map((post) => ( 
              <div key={post.id} className="posts"> 
                <img src={post.image} alt={`Recent post ${post.id}`} /> 
                <div className="blogs"> 
                  <div className="top-post"> 
                    <span className="furn">{post.category}</span> 
                    <h5>{post.date}</h5> 
                  </div> 
                  <h4>{post.title}</h4> 
                </div> 
              </div> 
            ))} 
          </div> 
 
          {/* Categories */} 
          <div className="categories"> 
            <h3>Blog Categories</h3> 
            <ul> 
              <li>All Categories (5)</li> 
              <li>Electronics (1)</li> 
              <li>Furniture (1)</li> 
              <li>Fashion (1)</li> 
            </ul> 
          </div> 
 
          {/* Tags */} 
          <div className="tags"> 
            <h3>Blog Tags</h3> 
            <div className="tag-list"> 
              <a href="#">Electronics</a> 
              <a href="#">Furniture</a> 
              <a href="#">Fashion</a> 
            </div> 
          </div> 
        </aside> 
      </div> 
 
      {/* Pagination */} 
      <div className="pagination"> 
        <ul> 
          <li> 
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}> 
              &laquo; 
            </button> 
          </li> 
          {Array.from({ length: totalPages }, (_, i) => ( 
            <li key={i + 1}> 
              <button 
                className={currentPage === i + 1 ? "active" : ""} 
                onClick={() => setCurrentPage(i + 1)} 
              > 
                {i + 1} 
              </button> 
            </li> 
          ))} 
          <li> 
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}> 
              &raquo; 
            </button> 
          </li> 
        </ul> 
      </div> 
    </div> 
  ); 
}
