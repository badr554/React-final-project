import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import "../../../style/components/_singleproduct.scss";

export default function SingleProduct() {
    return (
        <div>
            <div className="Singleproduct">
                <div className="singleproduct-img">
                    <img src="/src/imgs/fz-3-cat-5 (2).png" alt="Dark Wood Door" />
                    <div className="hover-icons">
                        {/* Wishlist */}
                        <div className="icon">
                            <FontAwesomeIcon icon={farHeart} /> {/* Use regular heart */}
                            <span className="tooltip">Add To Wishlist</span>
                        </div>
                        {/* Add to Cart */}
                        <div className="icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="tooltip">Add To Cart</span>
                        </div>
                        {/* Compare */}
                        <div className="icon">
                            <FontAwesomeIcon icon={faExchangeAlt} />
                            <span className="tooltip">Compare</span>
                        </div>
                    </div>
                </div>
                <div className="singleproduct-info">
                    <a href="#">Dark Wood Door</a>
                    <span className="price">$740</span>
                </div>
            </div>
        </div>
    );
}
