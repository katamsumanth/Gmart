// Carousel.jsx
import React from 'react';

const Carousel = () => {
    return (
        <div id="promoCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://via.placeholder.com/1200x400?text=Best+Prices+on+Indian+Sweets" alt="Promotion 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Best Prices On India</h5>
                        <p>Up to 50% OFF</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/1200x400?text=Unbelievable+Prices+on+iPhone+16" alt="Promotion 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Unbelievable Prices on iPhone 16</h5>
                        <p>Get up to ₹5,000 Instant Bank Discount</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/1200x400?text=Diwali+Preparations" alt="Promotion 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Exam Preparations</h5>
                        <p>Up to 50% OFF</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#promoCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#promoCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
