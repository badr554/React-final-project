import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "../../../style/components/Home.scss";
import SingleProduct from "../../components/singleproduct/SingleProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const slides = [
    { id: 1, image: "/src/imgs/fz-3-banner-img-3.jpg", title: "The Secret Key to a Stylish Home" },
    { id: 2, image: "/src/imgs/fz-3-banner-img-2.jpg", title: "Make your entrance a grand one" },
    { id: 3, image: "/src/imgs/fz-3-banner-img.png", title: "The Perfect Door For Every Occasion" },
  ];
  return (
    <div className="home">
      <section className="banner-section">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]} // Include Autoplay module
          loop={true}
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          className="custom-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content">
                <div className="text-container">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="buttons">
                    <button className="play-button">
                      <span className="circle"></span>
                    </button>
                    <a href="#more" className="view-more">
                      View More <span>→</span>
                    </a>
                  </div>
                </div>
                <div className="image-container">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="Shop-By-Category">
        <div className="heading"> <h2 className="title">Shop By Category </h2> </div> 
        <div className="doors-product">
        <div className="l-side">
          <div className="door-card">  
      
            <img src="/src\imgs\fz-3-cat-1 (2).png" alt="" />
            <div className="door-type">
              <p>Wood Door</p>
            </div>
          </div>
          <div className="door-card">  
      
            <img src="/src\imgs\fz-3-cat-1 (2).png" alt="" />
            <div className="door-type">
              <p>Wood Door</p>
            </div>
          </div>
          </div>
          <div className="mid">
             <div className="door-card">  
      
            <img src="/src\imgs\Screenshot 2024-12-04 001655.png" alt="" />
            <div className="door-type">
              <p>Wood Door</p>

            </div>
          </div>
          </div>
          <div className="r-side">
            <div className="door-card">  
      
            <img src="/src\imgs\fz-3-cat-1 (2).png" alt="" />
            <div className="door-type">
              <p>Wood Door</p>
            </div>
          </div>
          <div className="door-card">  
      
            <img src="/src\imgs\fz-3-cat-1 (2).png" alt="" />
            <div className="door-type">
              <p>Wood Door</p>
            </div>
          </div>
          </div>
          

          </div>     
          
          


</section>
<section className="Latest-Collection">
<div className="heading"> 
  <h2 className="title">Latest Collection</h2> 
</div> 
<div class="filter-navs"> 
  <button class="filter-item">
    <span class="order">01</span>  
    <span class="name">All Door</span> 
  </button>
  <button class="filter-item">
    <span class="order">02</span>  
    <span class="name">Solid Color Door</span>
  </button>
  <button class="filter-item">
    <span class="order">03</span> 
    <span class="name">Double Layer Door</span>
  </button>
  <button class="filter-item">
    <span class="order">04</span> 
    <span class="name">Chinese Door</span>
  </button>
  <button class="filter-item">
    <span class="order">05</span> 
    <span class="name">Plastic Door</span>
  </button>
  <div class="switch-product">
    <button class="switch-btn left"></button> 
    <button class="switch-btn right"></button>
  </div>


</div>
<div className="door-products">
  <SingleProduct />
  <SingleProduct />
  <SingleProduct />
  <SingleProduct />
  
</div>








</section>

<section className="Sub-section">
  <div className="sub-img">
    <img src="/src\imgs\fz-3-subs-bg.png" alt="Background" />
  </div>
  <div className="sub-info">
    <h2>Subscribe!</h2>
    <h3>Newsletter For Update & Offer</h3>
  </div>
  <div className="sub-form">
    <input type="text" placeholder="Enter your email address" /> 
    <button>Subscribe</button>
  </div>
</section>

<section className="Featured-Product">



<div className="heading"> <h2 className="title">Featured Product </h2> 
</div> 
<div className="Featured-Product-container">
<div className="Featured-Product-card">
            <div className="Featured-Product-img">
                <img src="/src\imgs\fz-3-cat-6.png" alt="" />
            </div>
            <div className="Featured-Product-info"> 
                <a  href="">Dark Wood Door</a> <span className="del"><del>$840</del></span> <span className="price">$740</span>
            </div>
            </div>
            <div className="Featured-Product-card">
            <div className="Featured-Product2-img">
                <img src="/src\imgs\fz-3-cat-6.png" alt="" />
            </div>
            <div className="Featured-Product-info"> 
                <a  href="">Dark Wood Door</a> <span className="del"><del>$840</del></span> <span className="price">$740</span>
            </div>
            </div>
            </div>
<div className="Features-Section"> 
   <div className="Single-Feature">
  <div className="Features-Section-img">
    <img src="/src\imgs\fz-3-feature-1.png" alt="" />
  </div>
  <div className="Features-Section-info">
    <h4>Free Delivery</h4> 
    <h6>Only in $50</h6>
    </div>    
    </div>


    <div className="Single-Feature">
  <div className="Features-Section-img">
    <img src="/src\imgs\fz-3-feature-2.png" alt="" />
  </div>
  <div className="Features-Section-info">
    <h4>Get Feedback
    </h4> 
    <h6>12000 Users
    </h6>
    </div>    
    </div>



    <div className="Single-Feature">
  <div className="Features-Section-img">
    <img src="/src\imgs\fz-3-feature-3.png" alt="" />
  </div>
  <div className="Features-Section-info">
    <h4>07 Days Returns
    </h4> 
    <h6>Policy Option
    </h6>
    </div>    
    </div>




    <div className="Single-Feature">
  <div className="Features-Section-img">
    <img src="/src\imgs\fz-3-feature-4.png" alt="" />
  </div>
  <div className="Features-Section-info">
    <h4>Secure Payment
    </h4> 
    <h6>System
    </h6>
    </div>    
    </div>

</div>
            
            
        
        


</section>

<section className="Offer-Section">
  <div className="Offer-Container">
    <div className="Offer-Text">
      <h2>30% OFF</h2>
      <h3>Doors to Fit into your</h3>
      <p>
        As such, it must blend with or complement the exterior effect. For instance,
        Victorian, contemporary, or art nouveau.
      </p>
      <button className="Offer-Button">Shop Now</button>
    </div>
    <div className="Offer-Image">
      <img src="src\imgs\fz-3-offer-img.png" alt="Doors Offer" />
    </div>
  </div>
</section>

<section className="Modern-Interior-Doors">
        <div className="heading">
          <h2 className="title">Modern Interior Doors</h2>
        </div>
        <Swiper
          spaceBetween={19}
          slidesPerView={4}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="door-swiper"
        >
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct />
          </SwiperSlide>
        </Swiper>
      </section>
  
      <section className="blog-section">
  <div className="blog-container">
    <h2 className="blog-title">Blog & Insights</h2>
    <div className="blog-grid">
      <div className="blog-card large-card">
        <img src="/src\imgs\fz-3-blog-1.png" alt="Blog Image" />
        <div className="blog-content">
          <p className="category">Classic Door | 17 January, 2023 | 7 Min</p>
          <h3>Ultimate Guide to Buying a Custom Solid Wood Door</h3>
          <p>
            In this Ultimate Guide to Buying a Custom Wood Door, we answer
            your questions about figuring out the size of the door you need,
            designing it how you like...
          </p>
        </div>
      </div>
      <div className="right">
      <div className="blog-card small-card">
        <img src="/src\imgs\fz-3-blog-2.png" alt="Blog Image" />
        <div className="blog-content">
          <p className="category">Classic Door | 17 January, 2023 | 7 Min</p>
          <h3>Ultimate Guide to Buying a Custom Wood Door</h3>
        </div>
      </div>
      <div className="blog-card small-card">
        <img src="/src\imgs\fz-3-blog-3.png" alt="Blog Image" />
        <div className="blog-content">
          <p className="category">Classic Door | 17 January, 2023 | 7 Min</p>
          <h3>Ultimate Guide to Buying a Custom Wood Door</h3>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
 
<section className="brand-section">
  <div className="brand-container">
    <h2 className="brand-title">Browse by Brand</h2>
    <div className="brand-logos">
      <div className="brand-logo">
        <img src="/src\imgs\fz-3-brand-1.png" alt="OpenDoor Premium" />
      </div>
      <div className="brand-logo">
        <img src="/src\imgs\fz-3-brand-2.png" alt="Bohemian Niche Door" />
      </div>
      <div className="brand-logo">
        <img src="/src\imgs\fz-3-brand-3.png" alt="Bohemian Niche Door" />
      </div>
      <div className="brand-logo">
        <img src="/src\imgs\fz-3-brand-4.png" alt="Slidoor Premium" />
      </div>
      <div className="brand-logo">
        <img src="/src\imgs\fz-3-brand-5.png" alt="Shaftline Premium" />
      </div>
    </div>
  </div>
</section>

<section className="gallery-section">
      <div className="gallery-header">
        <h2>@farzaa.door</h2>
      </div>
      <div className="gallery-images">
        {[
          { src: "/src/imgs/fz-3-img-1.png", alt: "Purple Door" },
          { src: "/src/imgs/fz-3-img-2.png", alt: "Red Door" },
          { src: "/src/imgs/fz-3-img-3.png", alt: "White Door" },
          { src: "/src/imgs/fz-3-img-4.png", alt: "Glass Hallway" },
          { src: "/src/imgs/fz-3-img-5.png", alt: "Modern White Door" },
          { src: "/src/imgs/fz-3-img-6.png", alt: "Modern White Door" }
        ].map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>




    </div>
    
  );
}
