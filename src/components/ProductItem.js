import React from 'react'

export default function ProductItem() {
    return (
        <div className="product-item flexbox flex-column">
            <div className="product-image">
                <img src='https://picsum.photos/id/1018/250/150/' />
            </div>
            <div className="product-item-content">
                <div className="product-item-heading">
                    Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack
                </div>
                <div className="flexbox flex-row justify-content-space-between">
                    <div className="flexbox flex-row rating">
                        <a><i class="fas fa-star"></i></a>
                        <a><i class="fas fa-star"></i></a>
                        <a><i class="fas fa-star"></i></a>
                        <a><i class="fas fa-star"></i></a>
                        <a><i class="fas fa-star-half-alt"></i></a>
                    </div>
                    <div className="price">250 <span>$</span></div>
                </div>
            </div>
        </div>
    )
}
